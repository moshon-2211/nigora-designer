interface Svc {
  num: string;
  tag: string;
  title: string;
  desc: string;
  delay: string;
}

const SERVICES: Svc[] = [
  { num: "01", tag: "Концепция", title: "Дизайн-проект интерьера", desc: "Полная концепция пространства: планировка, стилистика, подбор материалов, мебели и сценариев освещения.", delay: "1" },
  { num: "02", tag: "Чертежи", title: "Рабочая документация", desc: "Полный комплект точных чертежей в ArchiCAD для жилых и коммерческих объектов — без лишних вопросов на стройке.", delay: "2" },
  { num: "03", tag: "Планировка", title: "Планировочные решения", desc: "Перепланировка и зонирование, продуманная эргономика и функциональность каждого квадратного метра.", delay: "3" },
  { num: "04", tag: "Визуализация", title: "Скетчи и подача", desc: "Архитектурные, интерьерные и ландшафтные скетчи на iPad — чтобы увидеть идею быстро и наглядно.", delay: "1" },
  { num: "05", tag: "Реализация", title: "Авторское сопровождение", desc: "Контроль реализации и прозрачное сотрудничество по договору на каждом этапе — спокойно и надёжно.", delay: "2" },
  { num: "06", tag: "Объекты", title: "Жилые и коммерческие", desc: "Квартиры и дома, кафе, аптеки и общественные пространства — комплексный, внимательный подход.", delay: "3" },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">(02)</span>
          <h2 className="serif">Услуги</h2>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <article key={s.num} className="svc reveal r-blur" data-delay={s.delay}>
              <div className="num serif">{s.num}</div>
              <div className="tag">{s.tag}</div>
              <h3 className="serif">{s.title}</h3>
              <p className="desc">{s.desc}</p>
            </article>
          ))}
        </div>
        <p className="svc-note reveal">
          <span className="dot" />
          Каждый проект ведётся по договору. Стоимость рассчитывается индивидуально
          под объект и объём работ.
        </p>
      </div>
    </section>
  );
}
