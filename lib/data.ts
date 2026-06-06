export interface Work {
  img: string;
  project: string;
  room: string;
  style: string;
  area: string;
  desc: string;
}

export interface GalleryItem {
  img: string;
  room: string;
  project: string;
}

export const WORKS: Work[] = [
  { img: "/images/img01.jpg", project: "Ходжи", room: "Гостиная", style: "Скандинавские ноты", area: "2 → 3 комнаты", desc: "Тёплая гостиная с деревянными ламелями и мягкой палитрой. Зонирование открытым стеллажом и продуманный сценарий света." },
  { img: "/images/img12.jpg", project: "Элитсрой", room: "Гостиная", style: "Тихая роскошь", area: "Семья с тремя детьми", desc: "Сдержанная медиа-зона с нишами и подсветкой. Чистые линии, благородные фактуры, спокойный ритм пространства." },
  { img: "/images/img03.jpg", project: "Элитсрой", room: "Гостиная-столовая", style: "Современная классика", area: "Открытая планировка", desc: "Единое пространство для жизни и приёма гостей. Графичная люстра, мягкие кресла, естественный свет из окна в пол." },
  { img: "/images/img06.jpg", project: "Элитсрой", room: "Кухня", style: "Минимализм", area: "Функциональная зона", desc: "Лаконичные фасады без ручек, остров с барной зоной и камень на фартуке. Всё под рукой и ничего лишнего." },
  { img: "/images/img04.jpg", project: "Ходжи", room: "Кухня-столовая", style: "Тёплый минимализм", area: "Семейная зона", desc: "Обеденная группа под мягким светом дизайнерских светильников. Натуральное дерево и уютная, спокойная атмосфера." },
  { img: "/images/img10.jpg", project: "Ходжи", room: "Спальня", style: "Спокойствие", area: "Приватная зона", desc: "Овальное зеркало, будуарный столик и пастельная гамма. Спальня, в которой легко отдыхать и восстанавливаться." },
  { img: "/images/img02.jpg", project: "Юск", room: "Спальня", style: "Мягкие формы", area: "Молодая пара", desc: "Арочная ниша, изголовье во всю стену и многослойное освещение. Камерное, обволакивающее пространство для сна." },
  { img: "/images/img05.jpg", project: "Элитсрой", room: "Ванная комната", style: "Камень и дерево", area: "Влажная зона", desc: "Сочетание мрамора и тёплого дерева, скрытые системы хранения и встроенная стиральная зона. Спа дома." },
];

export const GALLERY: GalleryItem[] = [
  { img: "/images/img01.jpg", room: "Гостиная", project: "Ходжи" },
  { img: "/images/img03.jpg", room: "Гостиная-столовая", project: "Элитсрой" },
  { img: "/images/img04.jpg", room: "Кухня-столовая", project: "Ходжи" },
  { img: "/images/img05.jpg", room: "Ванная комната", project: "Элитсрой" },
  { img: "/images/img02.jpg", room: "Спальня", project: "Юск" },
  { img: "/images/img06.jpg", room: "Кухня", project: "Элитсрой" },
  { img: "/images/img07.jpg", room: "Прихожая · гостиная", project: "Ходжи" },
  { img: "/images/img08.jpg", room: "Санузел", project: "Бустонсити" },
  { img: "/images/img09.jpg", room: "Рабочая зона", project: "Элитсрой" },
  { img: "/images/img10.jpg", room: "Спальня", project: "Ходжи" },
  { img: "/images/img11.jpg", room: "Прихожая", project: "Элитсрой" },
  { img: "/images/img12.jpg", room: "Гостиная", project: "Элитсрой" },
  { img: "/images/img13.jpg", room: "Санузел", project: "Элитсрой" },
  { img: "/images/img14.jpg", room: "Кухня-гостиная", project: "Элитсрой" },
  { img: "/images/img15.jpg", room: "Спальня", project: "Юск" },
];
