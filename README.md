# Нигора Солиева — студия дизайна интерьера

Премиальный сайт-портфолио дизайнера интерьера. Тёмная luxury-эстетика
(графит × шампань), слайдер работ, галерея с лайтбоксом, анимации.

Стек: **Next.js 14 (App Router) · TypeScript · React**.

---

## Запуск локально

Нужен установленный [Node.js](https://nodejs.org) версии 18.17 или новее.

```bash
npm install      # установить зависимости
npm run dev      # запустить дев-сервер → http://localhost:3000
```

Сборка и запуск продакшн-версии:

```bash
npm run build
npm run start
```

---

## Деплой

### Vercel (рекомендуется, бесплатно, 1 клик)

1. Залейте папку проекта в репозиторий на GitHub / GitLab.
2. Зайдите на [vercel.com](https://vercel.com), нажмите **Add New → Project**.
3. Выберите репозиторий — Vercel сам определит Next.js и всё соберёт.
4. Нажмите **Deploy**. Готово.

Либо без репозитория, через CLI:

```bash
npm i -g vercel
vercel
```

### Любой другой хостинг (Node)

```bash
npm run build
npm run start   # запускает сервер на порту 3000
```

---

## Структура

```
app/
  layout.tsx        — шрифты (Playfair Display + Manrope), мета-теги
  page.tsx          — сборка всех секций
  globals.css       — все стили
components/
  Loader, Cursor, Nav, Hero, Marquee, About, Services,
  WorksSlider, Gallery, Process, Faq, Contact,
  ScrollProgress, RevealManager
lib/
  data.ts           — данные работ и галереи (легко редактировать)
public/images/      — фотографии (img00…img15.jpg)
```

---

## Как редактировать контент

- **Тексты секций** — прямо в компонентах в `components/`.
- **Проекты в слайдере и галерее** — в `lib/data.ts`.
- **Фотографии** — замените файлы в `public/images/` (или добавьте новые
  и пропишите пути в `lib/data.ts`). Формат кадра — вертикальный 4:5.
- **Контакты** (Telegram, Instagram, почта, телефон) — в
  `components/Contact.tsx` (сейчас стоят плейсхолдеры).
- **Цвета и шрифты** — CSS-переменные в начале `app/globals.css`
  (блок `:root`).

---

## Заметки

- Шрифты подключаются через `next/font` (без внешних запросов, кириллица
  поддерживается).
- Изображения отдаются как статические файлы из `public/`. При желании
  можно перейти на `next/image` для авто-оптимизации.
