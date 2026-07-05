"use client";

import { useLang } from "@/components/LangContext";

const DELAYS = ["1", "2", "3", "4"];

export default function Process() {
  const { t } = useLang();
  return (
    <section className="section process">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">{t.process.idx}</span>
          <h2 className="serif">{t.process.heading}</h2>
        </div>
        <div className="steps">
          {t.process.steps.map((s, i) => (
            <div key={s.title} className="step reveal r-blur" data-delay={DELAYS[i]}>
              <h3 className="serif">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
