import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const query = `*[_type == "actualite"] | order(date desc) {
  _id, titre, slug, date, "categorie": categorie->titre, resume, image
}`;

export const revalidate = 60;

type Article = {
  _id: string;
  titre: string;
  slug: { current: string };
  date: string;
  categorie?: string;
  resume?: string;
  image?: object;
};

export default async function ActualitesPage() {
  const articles: Article[] = await client.fetch(query);
  const featured = articles.slice(0, 2);
  const rest = articles.slice(2);

  return (
    <>
      <Header />
      <main className="page">
        <section className="pbb-block page-title alignstretch left-align">
          <h1 className="shadow-title">Nos <strong>Actualités</strong></h1>
        </section>

        <div className="alignwide" style={{ padding: "0 0 80px" }}>
          {articles.length === 0 ? (
            <p style={{ textAlign: "center", padding: "60px 0", opacity: 0.5 }}>Aucune actualité pour le moment.</p>
          ) : (
            <>
              {/* 2 premières en grand, côte à côte */}
              <div className="actu-grid-featured">
                {featured.map((a) => {
                  const imageUrl = a.image
                    ? urlFor(a.image).width(655).height(532).fit("max").auto("format").url()
                    : undefined;
                  return (
                    <a key={a._id} href={`/actualites/${a.slug.current}`} className="actu-card actu-card--large">
                      {imageUrl && (
                        <div className="actu-card__image">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={imageUrl} alt={a.titre} width={655} height={532} />
                        </div>
                      )}
                      <div className="actu-card__content">
                        {a.categorie && <span className="btn white">{a.categorie}</span>}
                        <h3>{a.titre}</h3>
                        {a.resume && <p>{a.resume}</p>}
                        <div className="date">{new Date(a.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Reste : 3 par ligne en petit */}
              {rest.length > 0 && (
                <div className="actu-grid-rest">
                  {rest.map((a) => {
                    const imageUrl = a.image
                      ? urlFor(a.image).width(433).height(258).fit("max").auto("format").url()
                      : undefined;
                    return (
                      <a key={a._id} href={`/actualites/${a.slug.current}`} className="actu-card actu-card--small">
                        {imageUrl && (
                          <div className="actu-card__image">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={imageUrl} alt={a.titre} width={433} height={258} />
                          </div>
                        )}
                        <div className="actu-card__content">
                          {a.categorie && <span className="btn white">{a.categorie}</span>}
                          <h3>{a.titre}</h3>
                          <div className="date">{new Date(a.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
