const LINKS = [
  // Добавляем никнеймы прямо в ссылки, чтобы они вели на ваши профили
  { k: "Telegram", v: "@nigora.design", href: "https://t.me/nigora_design", ext: true }, 
  { k: "Instagram", v: "@nigora.interior", href: "https://instagram.com/nigora.interior", ext: true },
  { k: "Почта", v: "hello@nigora.design", href: "mailto:hello@nigora.design", ext: false },
  { k: "Телефон", v: "+992 00 000 00 00", href: "tel:+992000000000", ext: false },
];

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    // Добавили flex и flex-col, чтобы mt-auto у футера сработал идеально
    // Убрали лишний пробел из id="contact"
    <section className="section contact flex flex-col min-h-screen" id="contact">
      <div className="wrap flex-grow"> {/* flex-grow заставит контент занять всё место, выталкивая футер вниз */}
        <div className="section-head reveal">
          <span className="idx">(07)</span>
          <span className="eyebrow">Контакты</span>
        </div>
        <div className="contact-grid">
          <div>
            <h2 className="reveal serif">
              Давайте создадим
              <br />
              <span className="it grad-text">ваш interior</span>
            </h2>
            <p className="contact-lead reveal" data-delay="1">
              Доверьте техническую точность мне — и сосредоточьтесь на удовольствии
              от своего будущего пространства.
            </p>
            <div className="contact-cta reveal" data-delay="2">
              <a
                href="https://t.me/nigora_design" // Ссылка на ваш личный Telegram
                target="_blank"
                rel="noopener"
                className="btn bottom-3"
              >
                <span>Написать в Telegram</span> <span className="arr">↗</span>
              </a>
            </div>
          </div>
          <div className="contact-links reveal" data-delay="2">
            {LINKS.map((l) => (
              <a
                key={l.k}
                className="clink"
                href={l.href}
                {...(l.ext
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
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
        <span>
          Студия дизайна интерьера · жилые и коммерческие пространства
        </span>
        <span>© {year} · Все права защищены</span>
      </div>
    </section>
  );
}