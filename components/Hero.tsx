export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-top reveal">
        <span className="meta">
          Студия дизайна · <b>Vol. 01</b>
        </span>
        <span className="meta">Душанбе · Tajikistan</span>
        <span className="meta">
          Est. <b>ArchiCAD</b>
        </span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow reveal" style={{ marginBottom: "1.6rem" }}>
            Дизайнер интерьера · ArchiCAD
          </div>
          <h1 className="reveal serif" data-delay="1">
            Создаю интерьеры
            <br />
            <span className="grad-text">тихой роскоши</span>
          </h1>
          <p className="hero-sub reveal" data-delay="2">
            Гармония, функциональность и характер в каждом проекте — от концепции
            и атмосферы до точных рабочих чертежей в ArchiCAD. Премиальные жилые и
            коммерческие пространства, в которых хочется жить.
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="#works" className="btn">
              <span>Смотреть работы</span> <span className="arr">↗</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Обсудить проект
            </a>
          </div>
          <div className="scroll-cue reveal" data-delay="4">
            <span className="bar" />
            прокрутите вниз
          </div>
        </div>

        <figure className="hero-figure reveal" data-delay="2">
          <span className="glow" aria-hidden />
          
          <div className="hero-portrait bottom-20 ">
            <img src="/images/img00.jpg" alt="Нигора Солиева — дизайнер интерьера" />
          </div>
         
        </figure>
      </div>
    </section>
  );
}
