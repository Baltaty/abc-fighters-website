import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HistoirePage() {
  return (
    <>
      <Header />

      <main className="page">
        <section className="pbb-block page-title alignstretch left-align">
          <h1 className="shadow-title">
            Notre Histoire <strong>Abidjan Basketball Club</strong>
          </h1>
        </section>

        <div className="alignwide" style={{ padding: "0 0 80px" }}>
          <figure className="wp-block-image size-medium" style={{ margin: "40px 0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/histoire/archive-abc.jpg"
              alt="Archives Abidjan Basketball Club"
              width={990}
              height={550}
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="eager"
            />
          </figure>

          <h2 className="wp-block-heading">La naissance du club</h2>
          <p>
            Fondé en 1997 par Boubakari Touré, l&apos;Abidjan Basketball Club (ABC) est un club de référence du basketball ivoirien,
            titré 19 fois chez les hommes et 10 fois chez les femmes en 25 ans. Sur un plan continental, ABC Hommes a remporté
            la FIBA Africa Champions Cup en 2005 et s&apos;est hissé en quarts de finales de l&apos;édition 2023 de la Basketball
            Africa League (BAL), compétition mise en place par la ligue nord-américaine de basketball (NBA) en collaboration avec
            la FIBA.
          </p>
          <p>
            Avec une importante communauté de fans, le club incarne les valeurs du basketball et est source de fierté pour
            Abidjan, la Côte d&apos;Ivoire et l&apos;Afrique.
          </p>

          <div style={{ height: 60 }} aria-hidden="true" className="wp-block-spacer" />

          <h2 className="wp-block-heading">Palmarès</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { competition: "Championnat de Côte d'Ivoire - Hommes", titres: 19 },
              { competition: "Championnat de Côte d'Ivoire - Dames", titres: 10 },
              { competition: "Coupe d'Afrique des Clubs - Hommes", titres: 1, detail: "2005" },
            ].map((item) => (
              <div key={item.competition} className="game-info" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#181818", padding: "20px 30px", borderRadius: 4 }}>
                <span style={{ fontFamily: "var(--font-slam-dunk)", fontSize: "1.2em" }}>{item.competition}</span>
                <span style={{ fontFamily: "var(--font-slam-dunk)", fontSize: "2em", color: "#d90502" }}>
                  {item.titres}× {item.detail ? `(${item.detail})` : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
