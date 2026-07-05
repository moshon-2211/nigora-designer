"use client";

import { useLang } from "@/components/LangContext";

export default function About() {
  const { t } = useLang();
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">{t.about.idx}</span>
          <h2 className="serif">{t.about.heading}</h2>
        </div>
        <div className="about-grid">
          <div className="about-figwrap">
            <span className="glow" aria-hidden />
            <figure className="about-figure">
              <img
                src="/images/img00.jpg"
                alt="Нигора Солиева — дизайнер интерьера"
              />
            </figure>
          </div>
          <div className="about-text">
            <p className="about-lead reveal serif">
              {t.about.leadPre}
              <span className="it">{t.about.leadName}</span>
              {t.about.leadPost}
            </p>
            <div className="about-body reveal" data-delay="1">
              <p>{t.about.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
