"use client";
import Image from "next/image";

const mobileButtons = [
  { label: "Boutique", href: "https://flexxnow.com/collections/abc-fighters", cls: "shop" },
  { label: "Actualités", href: "/actualites", cls: "" },
];

const mobileMenuItems = [
  { label: "Le Club", href: "/histoire" },
  { label: "Équipe Première Féminine", href: "/effectif-feminin" },
  { label: "Équipe Première Masculine", href: "/effectif-masculin" },
  { label: "Partenaires", href: "/partenaires" },
];

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      <div id="mobile-nav" className="sidenav" style={{ transform: isOpen ? "translateX(0)" : "translateX(-105%)", transition: "transform 0.3s ease" }}>
        <div className="flex-columns">
          <div className="nav">
            <button onClick={onClose} className="sidenav-close btn white" aria-label="fermer">
              <span className="icon icon-close"></span>
            </button>
          </div>
          <a href="/" className="site-logo">
            <Image
              src="/abc.svg"
              alt="Abidjan Basketball Club"
              width={480}
              height={432}
              className="logo responsive-img"
              loading="eager"
            />
          </a>
          <div className="nav"></div>
        </div>

        <ul id="mobile-buttons" className="mobile-buttons">
          {mobileButtons.map((btn) => (
            <li key={btn.label} className={`menu-item${btn.cls ? ` ${btn.cls}` : ""}`}>
              <a href={btn.href}>{btn.label}</a>
            </li>
          ))}
        </ul>

        <ul id="mobile-menu" className="mobile-menu">
          {mobileMenuItems.map((item) => (
            <li key={item.label} className="menu-item">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="sidenav-overlay" onClick={onClose} />
      )}
    </>
  );
}
