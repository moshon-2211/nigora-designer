import type { Lang } from "@/lib/i18n";

type Loc = Record<Lang, string>;

export interface Work {
  img: string;
  project: string;
  room: Loc;
  style: Loc;
  area: Loc;
  desc: Loc;
}

export interface GalleryItem {
  img: string;
  room: Loc;
  project: string;
}

export const WORKS: Work[] = [
  {
    img: "/images/img01.jpg",
    project: "Ходжи",
    room: { ru: "Гостиная", en: "Living room" },
    style: { ru: "Скандинавские ноты", en: "Scandinavian notes" },
    area: { ru: "2 → 3 комнаты", en: "2 → 3 rooms" },
    desc: {
      ru: "Тёплая гостиная с деревянными ламелями и мягкой палитрой. Зонирование открытым стеллажом и продуманный сценарий света.",
      en: "A warm living room with wooden slats and a soft palette. Zoning with an open shelving unit and a thoughtful lighting scenario.",
    },
  },
  {
    img: "/images/img12.jpg",
    project: "Элитсрой",
    room: { ru: "Гостиная", en: "Living room" },
    style: { ru: "Тихая роскошь", en: "Quiet luxury" },
    area: { ru: "Семья с тремя детьми", en: "Family with three children" },
    desc: {
      ru: "Сдержанная медиа-зона с нишами и подсветкой. Чистые линии, благородные фактуры, спокойный ритм пространства.",
      en: "A restrained media zone with niches and accent lighting. Clean lines, noble textures and a calm spatial rhythm.",
    },
  },
  {
    img: "/images/img03.jpg",
    project: "Элитсрой",
    room: { ru: "Гостиная-столовая", en: "Living-dining room" },
    style: { ru: "Современная классика", en: "Modern classic" },
    area: { ru: "Открытая планировка", en: "Open plan" },
    desc: {
      ru: "Единое пространство для жизни и приёма гостей. Графичная люстра, мягкие кресла, естественный свет из окна в пол.",
      en: "A single space for living and hosting. A graphic chandelier, soft armchairs and natural light from a floor-to-ceiling window.",
    },
  },
  {
    img: "/images/img06.jpg",
    project: "Элитсрой",
    room: { ru: "Кухня", en: "Kitchen" },
    style: { ru: "Минимализм", en: "Minimalism" },
    area: { ru: "Функциональная зона", en: "Functional zone" },
    desc: {
      ru: "Лаконичные фасады без ручек, остров с барной зоной и камень на фартуке. Всё под рукой и ничего лишнего.",
      en: "Sleek handleless fronts, an island with a bar area and a stone backsplash. Everything at hand and nothing superfluous.",
    },
  },
  {
    img: "/images/img04.jpg",
    project: "Ходжи",
    room: { ru: "Кухня-столовая", en: "Kitchen-dining" },
    style: { ru: "Тёплый минимализм", en: "Warm minimalism" },
    area: { ru: "Семейная зона", en: "Family area" },
    desc: {
      ru: "Обеденная группа под мягким светом дизайнерских светильников. Натуральное дерево и уютная, спокойная атмосфера.",
      en: "A dining set beneath the soft glow of designer lamps. Natural wood and a cosy, calm atmosphere.",
    },
  },
  {
    img: "/images/img10.jpg",
    project: "Ходжи",
    room: { ru: "Спальня", en: "Bedroom" },
    style: { ru: "Спокойствие", en: "Serenity" },
    area: { ru: "Приватная зона", en: "Private zone" },
    desc: {
      ru: "Овальное зеркало, будуарный столик и пастельная гамма. Спальня, в которой легко отдыхать и восстанавливаться.",
      en: "An oval mirror, a boudoir table and a pastel palette. A bedroom where it’s easy to rest and recover.",
    },
  },
  {
    img: "/images/img02.jpg",
    project: "Юск",
    room: { ru: "Спальня", en: "Bedroom" },
    style: { ru: "Мягкие формы", en: "Soft forms" },
    area: { ru: "Молодая пара", en: "Young couple" },
    desc: {
      ru: "Арочная ниша, изголовье во всю стену и многослойное освещение. Камерное, обволакивающее пространство для сна.",
      en: "An arched niche, a full-wall headboard and layered lighting. An intimate, enveloping space for sleep.",
    },
  },
  {
    img: "/images/img05.jpg",
    project: "Элитсрой",
    room: { ru: "Ванная комната", en: "Bathroom" },
    style: { ru: "Камень и дерево", en: "Stone and wood" },
    area: { ru: "Влажная зона", en: "Wet zone" },
    desc: {
      ru: "Сочетание мрамора и тёплого дерева, скрытые системы хранения и встроенная стиральная зона. Спа дома.",
      en: "A blend of marble and warm wood, hidden storage and a built-in laundry area. A spa at home.",
    },
  },
];

export const GALLERY: GalleryItem[] = [
  // Кухни
  { img: "/images/img04.jpg", room: { ru: "Кухня-столовая", en: "Kitchen-dining" }, project: "Ходжи" },
  { img: "/images/img06.jpg", room: { ru: "Кухня", en: "Kitchen" }, project: "Элитсрой" },
  { img: "/images/img14.jpg", room: { ru: "Кухня-гостиная", en: "Kitchen-living" }, project: "Элитсрой" },
  // Спальни
  { img: "/images/img02.jpg", room: { ru: "Спальня", en: "Bedroom" }, project: "Юск" },
  { img: "/images/img10.jpg", room: { ru: "Спальня", en: "Bedroom" }, project: "Ходжи" },
  { img: "/images/img15.jpg", room: { ru: "Спальня", en: "Bedroom" }, project: "Юск" },
  // Гостиные
  { img: "/images/img01.jpg", room: { ru: "Гостиная", en: "Living room" }, project: "Ходжи" },
  { img: "/images/img03.jpg", room: { ru: "Гостиная-столовая", en: "Living-dining" }, project: "Элитсрой" },
  { img: "/images/img12.jpg", room: { ru: "Гостиная", en: "Living room" }, project: "Элитсрой" },
  // Санузлы и ванные
  { img: "/images/img05.jpg", room: { ru: "Ванная комната", en: "Bathroom" }, project: "Элитсрой" },
  { img: "/images/img08.jpg", room: { ru: "Санузел", en: "Bathroom" }, project: "Бустонсити" },
  { img: "/images/img13.jpg", room: { ru: "Санузел", en: "Bathroom" }, project: "Элитсрой" },
  // Прихожие
  { img: "/images/img07.jpg", room: { ru: "Прихожая · гостиная", en: "Hallway · living" }, project: "Ходжи" },
  { img: "/images/img11.jpg", room: { ru: "Прихожая", en: "Hallway" }, project: "Элитсрой" },
  // Рабочая зона
  { img: "/images/img09.jpg", room: { ru: "Рабочая зона", en: "Workspace" }, project: "Элитсрой" },
];
