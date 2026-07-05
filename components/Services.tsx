"use client";

import { useLang } from "@/components/LangContext";

const DELAYS = ["1", "2", "3", "1", "2", "3"];
const NUMS = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  const { t } = useLang();
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">{t.services.idx}</span>
          <h2 className="serif">{t.services.heading}</h2>
        </div>
        <div className="svc-grid">
          {t.services.items.map((s, i) => (
            <article key={NUMS[i]} className="svc reveal r-blur" data-delay={DELAYS[i]}>
              <div className="num serif">{NUMS[i]}</div>
              <div className="tag">{s.tag}</div>
              <h3 className="serif">{s.title}</h3>
              <p className="desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
