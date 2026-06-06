const STEPS = [
  { title: "Знакомство", desc: "Бриф, задачи, образ жизни и пожелания по стилю и функциональности.", delay: "1" },
  { title: "Концепция", desc: "Планировка, стилистика, материалы, мебель и сценарии освещения.", delay: "2" },
  { title: "Документация", desc: "Полный комплект точных рабочих чертежей в ArchiCAD.", delay: "3" },
  { title: "Сопровождение", desc: "Авторский контроль реализации — точно по чертежам.", delay: "4" },
];

export default function Process() {
  return (
    <section className="section process">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="idx">(05)</span>
          <h2 className="serif">Как&nbsp;мы&nbsp;работаем</h2>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div key={s.title} className="step reveal r-blur" data-delay={s.delay}>
              <h3 className="serif">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
