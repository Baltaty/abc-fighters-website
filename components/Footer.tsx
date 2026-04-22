const partners = [
  { name: "Betclic",      href: "https://www.betclic.com/",              img: "/partners-abc/betclic.png" },
  { name: "Cosmos",       href: "#",                                      img: "/partners-abc/cosmos.png" },
  { name: "Yango",        href: "https://yango.com/",                    img: "/partners-abc/yango.png" },
  { name: "Omega Sports", href: "https://omegasportsholding.com/",       img: "/partners-abc/omegasport.png" },
  { name: "Flexx",        href: "https://flexxnow.com/",                 img: "/partners-abc/flexx.png" },
  { name: "Lapaire",      href: "https://en-bj.lapaire.africa/",         img: "/partners-abc/lapaire.png" },
];

const col1Links = [
  { label: "Accueil", href: "/" },
  { label: "Équipe Masculine", href: "/effectif-masculin" },
  { label: "Équipe Féminine", href: "/effectif-feminin" },
  { label: "Histoire du club", href: "/histoire" },
  { label: "Nos partenaires", href: "/partenaires" },
];

const col2Links = [
  { label: "Billetterie", href: "#" },
  { label: "Boutique", href: "#" },
  { label: "Actualités", href: "#" },
];

const col3Links = [
  { label: "Contact", href: "#" },
  { label: "Confidentialité", href: "#" },
  { label: "Mentions légales", href: "#" },
];

const socialLinks = [
  { cls: "facebook", icon: "icon-facebook", href: "https://www.facebook.com/AbidjanFighters/", label: "Facebook" },
  { cls: "instagram", icon: "icon-instagram", href: "https://www.instagram.com/abc_fighters/", label: "Instagram" },
  { cls: "linkedin", icon: "icon-linkedin", href: "https://www.linkedin.com/company/abcfighters/", label: "Linkedin" },
  { cls: "tiktok", icon: "icon-tiktok", href: "https://www.tiktok.com/@abc_fighters", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="partners-ticker">
        <div className="partners-ticker__track">
          {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener" title={p.name} className="partners-ticker__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.name} height={100} />
            </a>
          ))}
        </div>
      </div>
      <div className="alignwide">
        <div className="flex-columns">
          <div className="footer-column footer-col-1">
            <div className="footer-widget">
              <a href="/" className="site-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/abc.svg"
                  alt="Abidjan Basketball Club"
                  width={480}
                  height={432}
                  className="logo responsive-img"
                />
              </a>
            </div>
          </div>

          <div className="footer-column footer-col-2">
            <div className="footer-widget">
              <ul className="menu">
                {col1Links.map((link) => (
                  <li key={link.label} className="menu-item">
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-column footer-col-3">
            <div className="footer-widget">
              <ul className="menu">
                {col2Links.map((link) => (
                  <li key={link.label} className="menu-item">
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-column footer-col-4">
            <div className="footer-widget">
              <ul className="menu">
                {col3Links.map((link) => (
                  <li key={link.label} className="menu-item">
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-column footer-col-5">
            <div className="footer-widget">
              <div className="footer-widget-title">Suivez-nous</div>
              <ul id="social-menu" className="social-menu">
                {socialLinks.map((s) => (
                  <li key={s.cls} className={s.cls}>
                    <a href={s.href} title={s.label} target="_blank" rel="nofollow">
                      <span className={`icon ${s.icon}`}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="delacreme center-align">
          Fait avec <span className="icon icon-heart"></span> par{" "}
          <a href="https://www.delacreme.pro/">DeLaCrème - Agence digitale créative</a>
        </p>
      </div>
    </footer>
  );
}
