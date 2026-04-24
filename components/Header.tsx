"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const leftMenuItems: { label: string; href: string; sub?: { label: string; href: string }[] }[] = [
  { label: "Le Club", href: "/histoire" },
  {
    label: "Équipes",
    href: "/effectif-masculin",
    sub: [
      { label: "Équipe Première Féminine", href: "/effectif-feminin" },
      { label: "Équipe Première Masculine", href: "/effectif-masculin" },
    ],
  },
  // { label: "Formation", href: "https://parisbasketball.com/presentation-centre-de-formation/" },
];

const megaMenuItems = [
  {
    label: "Équipe Première",
    sub: [
      { label: "Calendrier", href: "https://parisbasketball.com/calendrier-equipe-premiere/" },
      { label: "Effectif", href: "https://parisbasketball.com/effectif-equipe-premiere/" },
      { label: "Classement Betclic Elite", href: "https://parisbasketball.com/classement-betclic-elite/" },
      { label: "Classement EuroLeague", href: "https://parisbasketball.com/classement-euroleague/" },
    ],
  },
  {
    label: "Section féminine",
    sub: [
      { label: "Présentation", href: "https://parisbasketball.com/presentation-section-feminine/" },
      { label: "Effectif", href: "https://parisbasketball.com/effectif-section-feminine/" },
    ],
  },
  {
    label: "Centre de Formation",
    sub: [
      { label: "Présentation", href: "https://parisbasketball.com/presentation-centre-de-formation/" },
      { label: "La vie au centre", href: "https://parisbasketball.com/la-vie-au-centre/" },
      { label: "Effectif", href: "https://parisbasketball.com/effectif-centre-de-formation/" },
      { label: "Camps", href: "https://parisbasketball.com/camps/" },
    ],
  },
  {
    label: "Le Club",
    sub: [
      { label: "Actualités", href: "https://parisbasketball.com/actualites/" },
      { label: "Histoire", href: "https://parisbasketball.com/histoire-du-club/" },
      { label: "Foundation", href: "https://parisbasketball.com/paris-basketball-foundation/" },
      { label: "Parisii", href: "https://parisbasketball.com/kop-parisii/" },
      { label: "Volontaires", href: "https://parisbasketball.com/volontaires/" },
      { label: "Contact", href: "https://parisbasketball.com/contact/" },
    ],
  },
  {
    label: "Offres Grand Public",
    sub: [
      { label: "Abonnement 25/26", href: "https://parisbasketball.com/grand-public-abonnement/" },
      { label: "CSE & Collectivités", href: "https://parisbasketball.com/grand-public-cse-collectivites/" },
      { label: "Clubs & Associations", href: "https://parisbasketball.com/grand-public-clubs-associations/" },
      { label: "Étudiants & Écoles", href: "https://parisbasketball.com/grand-public-etudiants-ecoles/" },
      { label: "FAQ", href: "https://parisbasketball.com/billetterie/faq-abonnements/" },
    ],
  },
  {
    label: "Offres Hospitalités",
    sub: [
      { label: "Courtside Club", href: "https://parisbasketball.com/hospitalites-courtside-club/" },
      { label: "Central House", href: "https://parisbasketball.com/hospitalites-central-house/" },
      { label: "Suites", href: "https://parisbasketball.com/hospitalites-suites/" },
      { label: "FAQ", href: "https://parisbasketball.com/billetterie/faq-hospitalites/" },
    ],
  },
  {
    label: "Adidas Arena",
    sub: [
      { label: "Accès et informations", href: "https://parisbasketball.com/acces-adidas-arena/" },
      { label: "Arena Tour", href: "https://parisbasketball.com/arena-tour/" },
      { label: "Événements et séminaires", href: "https://parisbasketball.com/evenements-et-seminaires/" },
      { label: "Entertainment", href: "https://parisbasketball.com/entertainment-adidas-arena/" },
      { label: "FAQ", href: "https://parisbasketball.com/billetterie/faq-infos-pratiques/" },
    ],
  },
  {
    label: "Partenaires",
    sub: [
      { label: "Nos partenaires", href: "https://parisbasketball.com/nos-partenaires/" },
      { label: "Devenir partenaire", href: "https://parisbasketball.com/devenir-partenaire/" },
      { label: "Business Club", href: "https://parisbasketball.com/business-club/" },
    ],
  },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    <header className="site-header">
      <div className="alignwide">
        <div className="flex-columns medium-flex header-wrapper">
          <div className="top-menu-wrapper left-wrapper">
            <a
              className="burger-menu hide-on-large-only"
              onClick={() => setMobileNavOpen(true)}
              onTouchEnd={(e) => { e.preventDefault(); setMobileNavOpen(true); }}
              aria-label="Menu"
            >
              Menu
            </a>
            <ul id="left-menu" className="top-menu hide-on-med-and-down">
              {leftMenuItems.map((item) => (
                <li key={item.label} className={`menu-item${item.sub ? " menu-item-has-children" : ""}`}>
                  <a href={item.href}>{item.label}</a>
                  {item.sub && (
                    <ul className="sub-menu">
                      {item.sub.map((s) => (
                        <li key={s.label} className="menu-item">
                          <a href={s.href}>{s.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="site-logo">
            <Image
              src="/abc.svg"
              alt="Abidjan Basketball Club"
              width={480}
              height={432}
              className="logo responsive-img"
              priority
            />
          </Link>

          <div className="top-menu-wrapper right-wrapper">
            <ul id="right-menu" className="top-menu hide-on-med-and-down">
              <li className="menu-item">
                <a href="/partenaires">Nos partenaires</a>
              </li>
              <li className="menu-item">
                <a href="https://flexxnow.com/collections/abc-fighters">Boutique</a>
              </li>
            </ul>
            <ul className="lang-switch hide-on-small-only">
              <li>
                <span className="flag flag-fr"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mega-menu-wrapper hide-on-med-and-down">
        <div className="alignwide">
          <ul id="megamenu" className="megamenu">
            {megaMenuItems.map((item) => (
              <li key={item.label} className="menu-item menu-item-has-children">
                <a>{item.label}</a>
                <ul className="sub-menu">
                  {item.sub.map((s) => (
                    <li key={s.label} className="menu-item">
                      <a href={s.href}>{s.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: scrolled ? "0px" : "20px",
          backgroundImage: "url(/pattern-strip.svg)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 20px",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      />
    </header>
    </>
  );
}
