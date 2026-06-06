"use client";

import { useCallback, useEffect, useState } from "react";
import { GALLERY } from "@/lib/data";

const RESIDENTIAL = [
  { n: "01", t: "Ходжи", s: "Квартира 2→3 комнаты · скандинавские ноты" },
  { n: "02", t: "Бустонсити", s: "Квартира 1→2 комнаты · пара среднего возраста" },
  { n: "03", t: "Элитсрой", s: "Квартира для семьи с тремя детьми" },
  { n: "04", t: "Юск", s: "Для молодой пары и родителя" },
  { n: "05", t: "Семейная", s: "Для молодой семьи с двумя детьми" },
];
const COMMERCIAL = [
  { n: "06", t: "Мини-кафе", s: "Уютное пространство на каждый день" },
  { n: "07", t: "Аптека", s: "Немецкая, в европейском стиле" },
  { n: "08", t: "Молодёжный центр", s: "Современное общественное пространство" },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const show = useCallback(
    (i: number) => setOpen(((i % GALLERY.length) + GALLERY.length) % GALLERY.length),
    []
  );
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(open + 1);
      if (e.key === "ArrowLeft") show(open - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, show, close]);

  const cur = open !== null ? GALLERY[open] : null;

  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">(04)</span>
          <h2 className="serif">Портфолио</h2>
        </div>
        <div className="pf-intro reveal">
          <span className="eyebrow">Полная коллекция</span>
          <p>
            Реализованные и концептуальные интерьеры жилых и коммерческих
            пространств. Нажмите на изображение, чтобы открыть в полном размере.
          </p>
        </div>

        <div className="gallery  " id="gallery">
          {GALLERY.map((g, i) => (
            <figure
              key={g.img + i}
              className="tile reveal r-blur "
              data-delay={String((i % 3) + 1)}
              onClick={() => show(i)}
            >
              <img
                src={g.img}
                alt={`${g.room} — проект «${g.project}»`}
                loading="lazy"
              />
              <span className="plus ">+</span>
              <figcaption className="cap flex gap-x-4 whitespace-nowrap">
  <span className="r serif">{g.room}</span>
  <span className="p serif">{g.project}</span>
</figcaption>
            </figure>
          ))}
        </div>

        <div className="projects-roster reveal">
          <div className="roster-head">
            <span className="idx">·</span>
            <h3 className="serif">Жилые пространства</h3>
          </div>
          <div className="roster ">
            {RESIDENTIAL.map((r) => (
              <div className="ritem " key={r.n}>
                <span className="rn serif ">{r.n}</span>
                <span className="rt ">
                  {r.t}
                  <span>{r.s}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="roster-head" style={{ marginTop: "2.8rem" }}>
            <span className="idx">·</span>
            <h3 className="serif">Коммерческие пространства</h3>
          </div>
          <div className="roster">
            {COMMERCIAL.map((r) => (
              <div className="ritem" key={r.n}>
                <span className="rn serif">{r.n}</span>
                <span className="rt">
                  {r.t}
                  <span>{r.s}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ЛАЙТБОКС */}
      <div
        className={`lb${open !== null ? " open" : ""}`}
        aria-hidden={open === null}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button className="lb-close" aria-label="Закрыть" onClick={close}>
          ✕
        </button>
        <button
          className="lb-nav prev"
          aria-label="Назад"
          onClick={(e) => {
            e.stopPropagation();
            if (open !== null) show(open - 1);
          }}
        >
          ‹
        </button>
        {cur && <img src={cur.img} alt={`${cur.room} — проект «${cur.project}»`} />}
        <button
          className="lb-nav next"
          aria-label="Вперёд"
          onClick={(e) => {
            e.stopPropagation();
            if (open !== null) show(open + 1);
          }}
        >
          ›
        </button>
        <div className="lb-cap">
          {cur ? `${cur.room}  ·  ${cur.project}` : ""}
        </div>
      </div>
    </section>
  );
}
