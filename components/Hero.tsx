"use client";

import { useLang } from "@/components/LangContext";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero-ref">
      {/* Размытый фон на весь экран */}
      <div className="href-bg" aria-hidden="true">
        <img src="/images/hero-bg.jpg" alt="" />
        <div className="href-overlay" />
      </div>

      {/* Большой заголовок по центру сверху */}
      <div className="href-masthead">
        <h1 className="href-name">{t.hero.name}</h1>
        <p className="href-tagline">{t.hero.tagline}</p>
      </div>

      {/* Плавающая карточка */}
      <div className="href-card reveal">
        <div className="href-card-left">
          <span className="href-eyebrow">{t.hero.eyebrow}</span>
          <p className="href-text">
            <em>{t.hero.em1}</em>
            {t.hero.mid}
            <em>{t.hero.em2}</em>.
          </p>
          <a href="#works" className="href-btn">{t.hero.btn}</a>
        </div>

        <div className="href-card-right">
          <img
            src="/images/DSC06866.jpg"
            alt="Нигора Солиева — дизайнер интерьера"
          />
        </div>
      </div>
    </section>
  );
}
