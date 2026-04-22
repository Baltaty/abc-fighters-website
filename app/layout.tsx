import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const slamDunk = localFont({
  src: [
    { path: "../SlamDunk.otf", format: "opentype" },
    { path: "../SlamDunk.ttf", format: "truetype" },
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
    <html lang="fr-FR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0" />
        <link rel="icon" href="/abc-logo-white.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/pbb.26.css" />
        <link rel="stylesheet" href="/flickity.css" media="screen" />
      </head>
      <body className={slamDunk.variable}>{children}</body>
    </html>
  );
}
