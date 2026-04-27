import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Partenaires",
    partners: [
      { name: "Betclic",      href: "https://www.betclic.ci/",          img: "/partners-abc/betclic.png" },
      { name: "Cosmos",       href: "#",                                  img: "/partners-abc/cosmos.png" },
      { name: "Yango",        href: "https://yango.com/",                img: "/partners-abc/yango.png" },
      { name: "Omega Sports", href: "https://omegasportsholding.com/",     img: "/partners-abc/omegasport.png" },
      { name: "Flexx",        href: "https://flexxnow.com/",             img: "/partners-abc/flexx.png" },
      { name: "Lapaire",      href: "https://en-bj.lapaire.africa/",     img: "/partners-abc/lapaire.png" },
    ],
  },
];

export default function PartenairesPage() {
  return (
    <>
      <Header />

      <main className="page">
        <section className="pbb-block page-title alignstretch has-submenu buttons-submenu center-align">
          <h1 className="shadow-title">
            <strong>Nos partenaires</strong>
          </h1>
          <div className="intro">
            Plusieurs entreprises soutiennent l&apos;ambition de l&apos;Abidjan Basketball Club et participent au développement
            du basketball en Côte d&apos;Ivoire.
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.title} className="pbb-block partners alignstretch">
            <h2 className="center-align">{section.title}</h2>
            <div className="logos-gallery">
              {section.partners.map((p) => (
                <div key={p.name}>
                  <a href={p.href} target="_blank" rel="noopener" title={`Visiter le site web ${p.name}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.name}
                      width={600}
                      height={300}
                      className="responsive-img"
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
