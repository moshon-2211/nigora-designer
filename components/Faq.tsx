"use client";

import { useLang } from "@/components/LangContext";

export default function Faq() {
  const { t } = useLang();
  const [titleLine1, titleLine2] = t.faq.asideTitle.split("\n");
  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">{t.faq.idx}</span>
          <h2 className="serif">{t.faq.heading}</h2>
        </div>
        <div className="faq-grid">
          <div className="faq-aside reveal">
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h3 className="serif">
              {titleLine1}
              <br />
              {titleLine2}
            </h3>
            <p>{t.faq.asideText}</p>
            <a href="#contact" className="link-quiet">
              {t.faq.ask}
            </a>
          </div>
          <div className="faq-list">
            {t.faq.items.map((item, i) => (
              <details
                key={i}
                className="faq-item reveal r-blur"
                open={i === 0}
              >
                <summary>
                  <span className="faq-q serif">{item.q}</span>
                  <span className="faq-icon" aria-hidden />
                </summary>
                <div className="faq-a">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
