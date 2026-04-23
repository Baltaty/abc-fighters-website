import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NextGameCounter from "@/components/NextGameCounter";
import MatchesSlider from "@/components/MatchesSlider";
import NewsSection from "@/components/NewsSection";
import ShopSection from "@/components/ShopSection";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import BouncingBasketball from "@/components/BouncingBasketball";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

const matchesQuery = `*[_type == "match"] | order(date asc) {
  _id, competition, date, domicile, exterieur, lieu, lienBilletterie,
  lienDiffusion,
  "logoDomicileUrl": logoDomicile.asset->url,
  "logoExterieurUrl": logoExterieur.asset->url
}`;

const newsQuery = `*[_type == "actualite"] | order(date desc) [0...3] {
  _id, titre, slug, date, categorie, resume,
  "imageUrl": image.asset->url
}`;

export default async function Home() {
  const [matches, articles] = await Promise.all([
    client.fetch(matchesQuery),
    client.fetch(newsQuery),
  ]);

  return (
    <>
      <Header />
      <HomeClient />

      <main className="page">
        <HeroSection />

        <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer"></div>

        <NextGameCounter matches={matches} />

        <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer"></div>

        <div className="title-cta alignstretch center-align">
          <BouncingBasketball />
          <div className="title">LES DANGÔRÔS D&apos;ABIDJAN</div>
          <div className="flex-columns small-flex">
            <a href="/histoire" className="btn white arrow">
              Découvrir le club
            </a>
          </div>
        </div>

        <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer"></div>

        <MatchesSlider matches={matches} />

        <NewsSection articles={articles} />

        <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer"></div>

        <ShopSection />

        <NewsletterForm />
      </main>

      <Footer />
    </>
  );
}
