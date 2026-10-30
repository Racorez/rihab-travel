import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rihabtravel.com"),
  title: "وكالة رحاب للعمرة والحج 1446هـ | Rihab Travel Sanctuary Elegance",
  description: "البوابة الرسمية الفاخرة لبرامج وباقات الحج والعمرة 1446هـ - إقامة صف أول مباشر على ساحات الحرم المكي والمسجد النبوي الشريف وتنقلات VIP.",
  keywords: ["عمرة", "حج", "رحاب ترافيل", "باقات العمرة", "فنادق الحرم", "عمرة رجب", "عمرة رمضان", "قطار الحرمين"],
  openGraph: {
    title: "وكالة رحاب للعمرة والحج 1446هـ | Rihab Travel",
    description: "البوابة الرسمية الفاخرة لبرامج وباقات الحج والعمرة 1446هـ",
    type: "website",
    locale: "ar_SA",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${cairo.variable} ${amiri.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/material-symbols-outlined.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface antialiased font-cairo">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        >
          الانتقال إلى المحتوى الرئيسي
        </a>
        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
