"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "Обо\u00a0мне" },
  { href: "#services", label: "Услуги" },
  { href: "#works", label: "Работы" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#faq", label: "Вопросы" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <small>Interior Design Studio</small>
      </a>

      <nav className={`nav-links${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
          Связаться
        </a>
      </nav>

      <button
        className={`burger${open ? " open" : ""}`}
        aria-label="Меню"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
