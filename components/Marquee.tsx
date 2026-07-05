"use client";

import { useLang } from "@/components/LangContext";

export default function Marquee() {
  const { t } = useLang();

  const Row = () => (
    <span className="mi">
      {t.marquee.map((item, i) => (
        <span key={i}>
          {i === 1 ? <i>{item}</i> : item} <span className="dot" />{" "}
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
