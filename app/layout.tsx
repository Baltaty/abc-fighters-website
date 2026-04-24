import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const slamDunk = localFont({
  src: [
    { path: "./fonts/SlamDunk.otf" },
    { path: "./fonts/SlamDunk.ttf" },
  ],
  variable: "--font-slam-dunk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abidjan Basketball Club - Le club de basket de référence en Côte d'Ivoire",
  description:
    "Fondé en 1997, l'Abidjan Basketball Club (ABC) est 19 fois champion de Côte d'Ivoire chez les hommes et 10 fois chez les femmes. Équipe, actualités, partenaires.",
  openGraph: {
    title: "Abidjan Basketball Club - Le club de basket de référence en Côte d'Ivoire",
    description:
      "Fondé en 1997, l'Abidjan Basketball Club (ABC) est 19 fois champion de Côte d'Ivoire chez les hommes et 10 fois chez les femmes.",
    url: "https://abidjanbasketballclub.com/",
    siteName: "Abidjan Basketball Club",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://abidjanbasketballclub.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Abidjan Basketball Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abc_fighters",
    creator: "@abc_fighters",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0" />
        <link rel="icon" href="/abc.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/pbb.26.css" />
        <link rel="stylesheet" href="/flickity.css" media="screen" />
      </head>
      <body className={slamDunk.variable}>{children}</body>
    </html>
  );
}
