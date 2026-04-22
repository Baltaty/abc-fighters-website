"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NextGameCounter from "@/components/NextGameCounter";
import MatchesSlider from "@/components/MatchesSlider";
import NewsSection from "@/components/NewsSection";
import ShopSection from "@/components/ShopSection";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import GameAlertModal from "@/components/GameAlertModal";

export default function Home() {
  const [gameAlertOpen, setGameAlertOpen] = useState(false);

  return (
    <>
      <Header />
      <GameAlertModal isOpen={gameAlertOpen} onClose={() => setGameAlertOpen(false)} />

      <main className="page">
        <HeroSection />

        <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer"></div>

        <NextGameCounter />

        <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer"></div>

        <div className="title-cta alignstretch center-align">
          <span className="p-icon"></span>
          <div className="title">LES DANGÔRÔS D&apos;ABIDJAN</div>
          <div className="flex-columns small-flex">
            <a href="/histoire" className="btn white arrow">
              Découvrir le club
            </a>
          </div>
        </div>

        <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer"></div>

        <MatchesSlider />

        <NewsSection />

        <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer"></div>

        <div className="p4p-cta alignstretch center-align">
          <h2>
            Abidjan<span className="icon icon-pbb-icon"></span>
            <br /> <strong>Basketball Club</strong>
          </h2>
          <div className="flex-columns small-flex">
            <a href="#" className="btn white arrow">
              Billetterie
            </a>
            <a href="#" className="btn white arrow">
              Boutique
            </a>
          </div>
        </div>

        <ShopSection />

        <NewsletterForm />
      </main>

      <Footer />
    </>
  );
}
