"use client";

import { useLang } from "@/components/LangContext";

export default function Contact() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <section className="section contact flex flex-col min-h-screen" id="contact">
      <div className="wrap flex-grow">
        <div className="section-head reveal">
          <span className="idx">{t.contact.idx}</span>
          <span className="eyebrow">{t.contact.eyebrow}</span>
        </div>
        <div className="contact-grid">
          <div>
            <h2 className="reveal serif">
              {t.contact.headingPre}
              <br />
              <span className="it grad-text">{t.contact.headingAccent}</span>
            </h2>
            <p className="contact-lead reveal" data-delay="1">
              {t.contact.lead}
            </p>
            <div className="contact-cta reveal" data-delay="2">
              <a
                href="https://t.me/nigora_design"
                target="_blank"
                rel="noopener"
                className="btn bottom-3"
              >
                <span>{t.contact.cta}</span> <span className="arr">↗</span>
              </a>
            </div>
          </div>
          <div className="contact-links reveal" data-delay="2">
            {t.contact.links.map((l) => (
              <a
                key={l.k}
                className="clink"
                href={l.href}
                {...(l.ext ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className="k">{l.k}</span>
                <span className="v serif">{l.v}</span>
                <span className="arr">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="foot  pb-8">
        <span className="brand-min serif">Нигора Солиева</span>
        <span>{t.contact.footTagline}</span>
        <span>© {year} · {t.contact.rights}</span>
      </div>
    </section>
  );
}
