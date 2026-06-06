"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { WORKS } from "@/lib/data";

const pad = (n: number) => (n < 10 ? "0" : "") + n;
const LEN = WORKS.length;

export default function WorksSlider() {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(0); // индекс для текстовой панели (плавная смена)
  const [swap, setSwap] = useState(false);
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % LEN) + LEN) % LEN);
  }, []);

  // плавная смена текста при смене слайда
  useEffect(() => {
    setSwap(true);
    const t = setTimeout(() => {
      setShown(index);
      setSwap(false);
    }, 280);
    return () => clearTimeout(t);
  }, [index]);

  // автопрокрутка (перезапускается при каждой смене index)
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (pausedRef.current) return;
    timerRef.current = setTimeout(() => go(index + 1), 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, go]);

  // клавиатура (если лайтбокс закрыт)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (document.querySelector(".lb.open")) return;
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  const onEnter = () => {
    pausedRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
  };
  const onLeave = () => {
    pausedRef.current = false;
    go(index); // перезапуск таймера через эффект — форсируем переустановку
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => go(index + 1), 6000);
  };

  // свайп
  const sx = useRef(0);
  const sdx = useRef(0);
  const drag = useRef(false);
  const onTouchStart = (e: React.TouchEvent) => {
    sx.current = e.touches[0].clientX;
    drag.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (drag.current) sdx.current = e.touches[0].clientX - sx.current;
  };
  const onTouchEnd = () => {
    if (drag.current) {
      if (sdx.current < -40) go(index + 1);
      else if (sdx.current > 40) go(index - 1);
    }
    drag.current = false;
    sdx.current = 0;
  };

  const w = WORKS[shown];

  return (
    <section className="section works" id="works">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">(03)</span>
          <span className="eyebrow">Избранные проекты</span>
        </div>

        <div
          className="slider reveal"
          data-delay="1"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div className="slider-spread">
            <div
              className="slider-stage"
              id="stage"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {WORKS.map((item, i) => (
                <div
                  key={item.img}
                  className={`slide${i === index ? " active" : ""}`}
                >
                  <img
                    src={item.img}
                    alt={`${item.room} — проект «${item.project}»`}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
              <div className="stage-counter">
                <b>{pad(index + 1)}</b> / {pad(LEN)}
              </div>
            </div>

            <div className="slider-info">
              <div className={`slide-panel${swap ? " swap" : ""}`}>
                <div className="si-eyebrow">Проект «{w.project}»</div>
                <h3 className="si-title serif">{w.room}</h3>
                <div className="si-room">{w.style}</div>
                <p className="si-desc">{w.desc}</p>
                <div className="si-facts">
                  <div className="si-fact">
                    <div className="k">Объект</div>
                    <div className="v serif">{w.project}</div>
                  </div>
                  <div className="si-fact">
                    <div className="k">Зона</div>
                    <div className="v serif">{w.room}</div>
                  </div>
                  <div className="si-fact">
                    <div className="k">Формат</div>
                    <div className="v serif">{w.area}</div>
                  </div>
                </div>
              </div>

              <div className="slider-ctrl">
                <button
                  className="sbtn prev"
                  aria-label="Предыдущая работа"
                  onClick={() => go(index - 1)}
                >
                  ‹
                </button>
                <button
                  className="sbtn next"
                  aria-label="Следующая работа"
                  onClick={() => go(index + 1)}
                >
                  ›
                </button>
                <div className="slider-progress run" key={index}>
                  <i style={{ animationPlayState: "running" }} />
                </div>
                <div className="slider-count">
                  <b>{pad(index + 1)}</b> / {pad(LEN)}
                </div>
              </div>

              <div className="slider-dots">
                {WORKS.map((item, i) => (
                  <button
                    key={item.img}
                    className={`sdot${i === index ? " active" : ""}`}
                    aria-label={`Работа ${i + 1}`}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="works-more">
            <a href="#portfolio" className="link-quiet">
              Вся коллекция работ ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
