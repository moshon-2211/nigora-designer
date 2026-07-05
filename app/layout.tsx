import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Нигора Солиева — студия дизайна интерьера",
  description:
    "Премиальные жилые и коммерческие интерьеры тихой роскоши. Концепция и рабочая документация в ArchiCAD. Душанбе.",
  keywords: [
    "дизайн интерьера",
    "дизайнер интерьера",
    "ArchiCAD",
    "Нигора Солиева",
    "Душанбе",
    "премиальный интерьер",
  ],
  openGraph: {
    title: "Нигора Солиева — студия дизайна интерьера",
    description:
      "Премиальные жилые и коммерческие интерьеры тихой роскоши. От концепции до рабочих чертежей в ArchiCAD.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
