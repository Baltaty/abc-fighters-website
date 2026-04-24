const partners = [
  { name: "Betclic",      href: "https://www.betclic.com/",              img: "/partners-abc/betclic.png" },
  { name: "Cosmos",       href: "#",                                      img: "/partners-abc/cosmos.png" },
  { name: "Yango",        href: "https://yango.com/",                    img: "/partners-abc/yango.png" },
  { name: "Omega Sports", href: "https://omegasportsholding.com/",       img: "/partners-abc/omegasport.png" },
  { name: "FLEXX",        href: "https://flexxnow.com/",                 img: "/partners-abc/flexx.png" },
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
  { label: "Boutique", href: "https://flexxnow.com" },
  { label: "Actualités", href: "/actualites" },
];

const col3Links = [
  { label: "Contact", href: "/contact" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
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
      <div className="partners-ticker-wrap">
        <div aria-hidden="true" className="pattern-strip-bar" />
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
        <div aria-hidden="true" className="pattern-strip-bar" />
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
          Copyright {new Date().getFullYear()} Abidjan Basketball Club. <br /> Réalisé par{" "}
          <a href="https://www.linkedin.com/in/fabrice-tra-540280126/" target="_blank" rel="noopener">LaunchLoop Studios 🚀</a>.
        </p>
      </div>
    </footer>
  );
}
