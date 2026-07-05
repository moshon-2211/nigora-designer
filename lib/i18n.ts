export type Lang = "ru" | "en";

export interface Dict {
  nav: {
    about: string;
    services: string;
    works: string;
    portfolio: string;
    faq: string;
    contact: string;
  };
  brand: { tagline: string };
  hero: {
    name: string;
    tagline: string;
    eyebrow: string;
    em1: string;
    mid: string;
    em2: string;
    btn: string;
  };
  marquee: string[];
  about: {
    idx: string;
    heading: string;
    leadPre: string;
    leadName: string;
    leadPost: string;
    body: string;
  };
  services: {
    idx: string;
    heading: string;
    items: { tag: string; title: string; desc: string }[];
  };
  works: {
    idx: string;
    eyebrow: string;
    projectPrefix: (p: string) => string;
    factObject: string;
    factZone: string;
    factFormat: string;
    more: string;
  };
  portfolio: {
    idx: string;
    heading: string;
    residentialTitle: string;
    commercialTitle: string;
    residential: { n: string; t: string; s: string }[];
    commercial: { n: string; t: string; s: string }[];
  };
  process: {
    idx: string;
    heading: string;
    steps: { title: string; desc: string }[];
  };
  faq: {
    idx: string;
    heading: string;
    eyebrow: string;
    asideTitle: string;
    asideText: string;
    ask: string;
    items: { q: string; a: string }[];
  };
  contact: {
    idx: string;
    eyebrow: string;
    headingPre: string;
    headingAccent: string;
    lead: string;
    cta: string;
    links: { k: string; v: string; href: string; ext: boolean }[];
    footTagline: string;
    rights: string;
  };
}

export const dict: Record<Lang, Dict> = {
  ru: {
    nav: {
      about: "Обо мне",
      services: "Услуги",
      works: "Работы",
      portfolio: "Портфолио",
      faq: "Вопросы",
      contact: "Связаться",
    },
    brand: { tagline: "Interior Design Studio" },
    hero: {
      name: "НИГОРА СОЛИЕВА",
      tagline: "Студия дизайна интерьера · ArchiCAD",
      eyebrow: "Нигора Солиева",
      em1: "Моя миссия",
      mid: " — создавать по-настоящему красивые и функциональные пространства. Гармония, характер и точность в каждом проекте — от концепции и атмосферы до рабочих чертежей в ArchiCAD. Премиальные жилые и коммерческие интерьеры, в которых ",
      em2: "хочется жить",
      btn: "Смотреть работы",
    },
    marquee: [
      "Концепция",
      "Тихая роскошь",
      "ArchiCAD",
      "Рабочая документация",
      "Авторский надзор",
      "Жилые интерьеры",
      "Коммерческие пространства",
    ],
    about: {
      idx: "(01)",
      heading: "Обо мне",
      leadPre: "Здравствуйте! Меня зовут ",
      leadName: "Нигора Солиева",
      leadPost:
        " — дизайнер интерьера. Создаю концепции и рабочую документацию в ArchiCAD для жилых и коммерческих пространств.",
      body: "Ценю не только красоту, но гармоничность и функциональность в помещениях. Люблю минималистичные современные интерьеры с характером — те, в которых легко поддерживать порядок и приятно находиться каждый день.",
    },
    services: {
      idx: "(02)",
      heading: "Услуги",
      items: [
        { tag: "Концепция", title: "Дизайн-проект интерьера", desc: "Полная концепция пространства: планировка, стилистика, подбор материалов, мебели и сценариев освещения." },
        { tag: "Чертежи", title: "Рабочая документация", desc: "Полный комплект точных чертежей в ArchiCAD для жилых и коммерческих объектов — без лишних вопросов на стройке." },
        { tag: "Планировка", title: "Планировочные решения", desc: "Перепланировка и зонирование, продуманная эргономика и функциональность каждого квадратного метра." },
        { tag: "Визуализация", title: "Скетчи и подача", desc: "Архитектурные, интерьерные и ландшафтные скетчи на iPad — чтобы увидеть идею быстро и наглядно." },
        { tag: "Реализация", title: "Авторское сопровождение", desc: "Контроль реализации и прозрачное сотрудничество по договору на каждом этапе — спокойно и надёжно." },
        { tag: "Объекты", title: "Жилые и коммерческие", desc: "Квартиры и дома, кафе, аптеки и общественные пространства — комплексный, внимательный подход." },
      ],
    },
    works: {
      idx: "(03)",
      eyebrow: "Избранные проекты",
      projectPrefix: (p) => `Проект «${p}»`,
      factObject: "Объект",
      factZone: "Зона",
      factFormat: "Формат",
      more: "Вся коллекция работ ↓",
    },
    portfolio: {
      idx: "(04)",
      heading: "Портфолио",
      residentialTitle: "Жилые пространства",
      commercialTitle: "Коммерческие пространства",
      residential: [
        { n: "01", t: "Ходжи", s: "Квартира 2→3 комнаты · скандинавские ноты" },
        { n: "02", t: "Бустонсити", s: "Квартира 1→2 комнаты · пара среднего возраста" },
        { n: "03", t: "Элитсрой", s: "Квартира для семьи с тремя детьми" },
        { n: "04", t: "Юск", s: "Для молодой пары и родителя" },
        { n: "05", t: "Семейная", s: "Для молодой семьи с двумя детьми" },
      ],
      commercial: [
        { n: "06", t: "Мини-кафе", s: "Уютное пространство на каждый день" },
        { n: "07", t: "Аптека", s: "Немецкая, в европейском стиле" },
        { n: "08", t: "Молодёжный центр", s: "Современное общественное пространство" },
      ],
    },
    process: {
      idx: "(05)",
      heading: "Как мы работаем",
      steps: [
        { title: "Знакомство", desc: "Бриф, задачи, образ жизни и пожелания по стилю и функциональности." },
        { title: "Концепция", desc: "Планировка, стилистика, материалы, мебель и сценарии освещения." },
        { title: "Документация", desc: "Полный комплект точных рабочих чертежей в ArchiCAD." },
        { title: "Сопровождение", desc: "Авторский контроль реализации — точно по чертежам." },
      ],
    },
    faq: {
      idx: "(06)",
      heading: "Вопросы и ответы",
      eyebrow: "FAQ",
      asideTitle: "Коротко\nо работе",
      asideText:
        "О том, как устроена работа над проектом. Не нашли свой вопрос — напишите мне напрямую.",
      ask: "Задать вопрос ↗",
      items: [
        { q: "С чего начинается работа над проектом?", a: "Со знакомства и брифа: я уточняю задачи, образ жизни, пожелания по стилю и функциональности. На основе этого формирую концепцию и план работы. Дальше двигаемся по этапам — от планировки до полного комплекта рабочих чертежей." },
        { q: "Что входит в дизайн-проект?", a: "Планировочное решение, стилистическая концепция, подбор материалов, мебели и освещения, а также полный комплект рабочих чертежей в ArchiCAD — точных и понятных для строителей и подрядчиков." },
        { q: "В каких программах вы работаете?", a: "Рабочая документация и чертежи — в ArchiCAD. Концептуальные архитектурные, интерьерные и ландшафтные скетчи рисую на iPad — так идею можно показать быстро и наглядно." },
        { q: "Вы работаете только с жильём?", a: "Нет. Помимо квартир и домов я проектирую коммерческие и общественные пространства: кафе, аптеки, молодёжные центры. К каждому объекту подхожу внимательно и индивидуально." },
        { q: "Сопровождаете ли вы реализацию?", a: "Да. Предусмотрено авторское сопровождение — я контролирую, чтобы проект был воплощён в точности по чертежам, и остаюсь на связи на каждом этапе." },
        { q: "Как строится сотрудничество и оплата?", a: "Работа ведётся по договору — прозрачно и надёжно. Стоимость рассчитывается индивидуально под конкретный объект и объём работ; обсудим её при первом контакте." },
      ],
    },
    contact: {
      idx: "(07)",
      eyebrow: "Контакты",
      headingPre: "Давайте создадим",
      headingAccent: "ваш interior",
      lead: "Доверьте техническую точность мне — и сосредоточьтесь на удовольствии от своего будущего пространства.",
      cta: "Написать в Telegram",
      links: [
        { k: "Telegram", v: "@nigora.design", href: "https://t.me/nigora_design", ext: true },
        { k: "Instagram", v: "@nigora.interior", href: "https://instagram.com/nigora.interior", ext: true },
        { k: "Почта", v: "hello@nigora.design", href: "mailto:hello@nigora.design", ext: false },
        { k: "Телефон", v: "+992 00 000 00 00", href: "tel:+992000000000", ext: false },
      ],
      footTagline: "Студия дизайна интерьера · жилые и коммерческие пространства",
      rights: "Все права защищены",
    },
  },

  en: {
    nav: {
      about: "About",
      services: "Services",
      works: "Works",
      portfolio: "Portfolio",
      faq: "FAQ",
      contact: "Contact",
    },
    brand: { tagline: "Interior Design Studio" },
    hero: {
      name: "NIGORA SOLIEVA",
      tagline: "Interior Design Studio · ArchiCAD",
      eyebrow: "Nigora Solieva",
      em1: "My mission",
      mid: " is to create genuinely beautiful and functional spaces. Harmony, character and precision in every project — from concept and mood to working drawings in ArchiCAD. Premium residential and commercial interiors you ",
      em2: "want to live in",
      btn: "View works",
    },
    marquee: [
      "Concept",
      "Quiet luxury",
      "ArchiCAD",
      "Working documentation",
      "Design supervision",
      "Residential interiors",
      "Commercial spaces",
    ],
    about: {
      idx: "(01)",
      heading: "About me",
      leadPre: "Hello! My name is ",
      leadName: "Nigora Solieva",
      leadPost:
        " — an interior designer. I create concepts and working documentation in ArchiCAD for residential and commercial spaces.",
      body: "I value not only beauty but also harmony and functionality in a space. I love minimalist, modern interiors with character — ones that are easy to keep tidy and pleasant to be in every day.",
    },
    services: {
      idx: "(02)",
      heading: "Services",
      items: [
        { tag: "Concept", title: "Interior design project", desc: "A complete concept of the space: layout, style, selection of materials, furniture and lighting scenarios." },
        { tag: "Drawings", title: "Working documentation", desc: "A full set of precise ArchiCAD drawings for residential and commercial projects — no extra questions on site." },
        { tag: "Layout", title: "Space planning", desc: "Re-planning and zoning, thoughtful ergonomics and functionality of every square metre." },
        { tag: "Visualization", title: "Sketches & presentation", desc: "Architectural, interior and landscape sketches on iPad — to see the idea quickly and clearly." },
        { tag: "Delivery", title: "Design supervision", desc: "Oversight of construction and transparent, contract-based collaboration at every stage — calm and reliable." },
        { tag: "Projects", title: "Residential & commercial", desc: "Apartments and houses, cafés, pharmacies and public spaces — a comprehensive, attentive approach." },
      ],
    },
    works: {
      idx: "(03)",
      eyebrow: "Selected projects",
      projectPrefix: (p) => `Project “${p}”`,
      factObject: "Project",
      factZone: "Area",
      factFormat: "Format",
      more: "Full collection of works ↓",
    },
    portfolio: {
      idx: "(04)",
      heading: "Portfolio",
      residentialTitle: "Residential spaces",
      commercialTitle: "Commercial spaces",
      residential: [
        { n: "01", t: "Khoji", s: "Apartment 2→3 rooms · Scandinavian notes" },
        { n: "02", t: "Bustoncity", s: "Apartment 1→2 rooms · middle-aged couple" },
        { n: "03", t: "Elitstroy", s: "Apartment for a family with three children" },
        { n: "04", t: "Jysk", s: "For a young couple and a parent" },
        { n: "05", t: "Family", s: "For a young family with two children" },
      ],
      commercial: [
        { n: "06", t: "Mini-café", s: "A cosy everyday space" },
        { n: "07", t: "Pharmacy", s: "German, in a European style" },
        { n: "08", t: "Youth centre", s: "A modern public space" },
      ],
    },
    process: {
      idx: "(05)",
      heading: "How we work",
      steps: [
        { title: "Discovery", desc: "Brief, goals, lifestyle and preferences on style and functionality." },
        { title: "Concept", desc: "Layout, style, materials, furniture and lighting scenarios." },
        { title: "Documentation", desc: "A full set of precise working drawings in ArchiCAD." },
        { title: "Supervision", desc: "Design oversight of construction — exactly to the drawings." },
      ],
    },
    faq: {
      idx: "(06)",
      heading: "Questions & answers",
      eyebrow: "FAQ",
      asideTitle: "Briefly\nabout the work",
      asideText:
        "How work on a project is organised. Didn’t find your question? Write to me directly.",
      ask: "Ask a question ↗",
      items: [
        { q: "How does work on a project begin?", a: "With a meeting and a brief: I clarify your goals, lifestyle, and preferences on style and functionality. Based on this I form the concept and a work plan. Then we move step by step — from the layout to a full set of working drawings." },
        { q: "What does a design project include?", a: "A layout solution, a stylistic concept, selection of materials, furniture and lighting, plus a full set of working drawings in ArchiCAD — precise and clear for builders and contractors." },
        { q: "Which software do you work in?", a: "Working documentation and drawings are done in ArchiCAD. Conceptual architectural, interior and landscape sketches I draw on iPad — so the idea can be shown quickly and vividly." },
        { q: "Do you work with homes only?", a: "No. Besides apartments and houses I design commercial and public spaces: cafés, pharmacies, youth centres. I approach each project attentively and individually." },
        { q: "Do you supervise the construction?", a: "Yes. Design supervision is included — I make sure the project is executed exactly to the drawings and stay in touch at every stage." },
        { q: "How do collaboration and payment work?", a: "Work is carried out under a contract — transparently and reliably. The cost is calculated individually for the specific project and scope; we’ll discuss it at first contact." },
      ],
    },
    contact: {
      idx: "(07)",
      eyebrow: "Contact",
      headingPre: "Let’s create",
      headingAccent: "your interior",
      lead: "Entrust the technical precision to me — and focus on the joy of your future space.",
      cta: "Message on Telegram",
      links: [
        { k: "Telegram", v: "@nigora.design", href: "https://t.me/nigora_design", ext: true },
        { k: "Instagram", v: "@nigora.interior", href: "https://instagram.com/nigora.interior", ext: true },
        { k: "Email", v: "hello@nigora.design", href: "mailto:hello@nigora.design", ext: false },
        { k: "Phone", v: "+992 00 000 00 00", href: "tel:+992000000000", ext: false },
      ],
      footTagline: "Interior design studio · residential and commercial spaces",
      rights: "All rights reserved",
    },
  },
};
