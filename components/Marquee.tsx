function Row() {
  return (
    <span className="mi">
      Концепция <span className="dot" /> <i>Тихая роскошь</i>{" "}
      <span className="dot" /> ArchiCAD <span className="dot" /> Рабочая
      документация <span className="dot" /> Авторский надзор{" "}
      <span className="dot" /> Жилые интерьеры <span className="dot" />{" "}
      Коммерческие пространства <span className="dot" />
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
