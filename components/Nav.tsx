"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LangContext";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#works", label: t.nav.works },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}>
        <span className="bn">Нигора Солиева</span>
        <small>{t.brand.tagline}</small>
      </a>

      <nav className={`nav-links${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
          {t.nav.contact}
        </a>

        <div className="lang-switch" role="group" aria-label="Language">
          <button
            className={`lang-btn${lang === "ru" ? " active" : ""}`}
            onClick={() => setLang("ru")}
            aria-pressed={lang === "ru"}
          >
            RU
          </button>
          <span className="lang-sep">/</span>
          <button
            className={`lang-btn${lang === "en" ? " active" : ""}`}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </nav>

      <button
        className={`burger${open ? " open" : ""}`}
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
