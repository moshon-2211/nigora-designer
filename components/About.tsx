export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">(01)</span>
          <h2 className="serif">Обо&nbsp;мне</h2>
        </div>
        <div className="about-grid">
          <div className="about-figwrap reveal r-img">
            <span className="glow" aria-hidden />
            <figure className="about-figure">
              <img
                src="/images/img10.jpg"
                alt="Интерьер спальни — проект «Ходжи»"
              />
            </figure>
            <div className="badge">
              <div className="v serif">ArchiCAD</div>
              <div className="k">точные чертежи</div>
            </div>
          </div>
          <div className="about-text">
            <p className="about-lead reveal serif">
              Здравствуйте! Меня зовут{" "}
              <span className="it">Нигора Солиева</span> — дизайнер интерьера.
              Создаю концепции и рабочую документацию в ArchiCAD для жилых и
              коммерческих пространств.
            </p>
            <div className="about-body reveal" data-delay="1">
              <p>
                Ценю не только красоту, но гармоничность и функциональность в
                помещениях. Люблю минималистичные современные интерьеры с
                характером — те, в которых легко поддерживать порядок и приятно
                находиться каждый день.
              </p>
              <p>
                Моя миссия — освободить вас от технической рутины и обеспечить
                уверенность на каждом этапе. Беру на себя полный комплект рабочих
                чертежей: понятных и точных, чтобы идея воплотилась именно так,
                как задумана.
              </p>
            </div>
            <div className="about-stats reveal" data-delay="2">
              <div className="astat">
                <div className="v serif">
                  Полный <span className="it">цикл</span>
                </div>
                <div className="k">от концепции до реализации</div>
              </div>
              <div className="astat">
                <div className="v serif">ArchiCAD</div>
                <div className="k">точная рабочая документация</div>
              </div>
              <div className="astat">
                <div className="v serif">
                  Скетчи <span className="it">на iPad</span>
                </div>
                <div className="k">быстрая наглядная подача</div>
              </div>
              <div className="astat">
                <div className="v serif">
                  Авторский <span className="it">надзор</span>
                </div>
                <div className="k">контроль на каждом этапе</div>
              </div>
            </div>
            <p className="sign reveal serif" data-delay="3">
              — воплотим ваши самые смелые задумки в жизнь.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
