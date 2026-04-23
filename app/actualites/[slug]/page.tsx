import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

export const revalidate = 60;

const query = `*[_type == "actualite" && slug.current == $slug][0] {
  _id, titre, slug, date, "categorie": categorie->titre, resume, image, contenu
}`;

const relatedQuery = `*[_type == "actualite" && slug.current != $slug] | order(date desc) [0...3] {
  _id, titre, slug, date, "categorie": categorie->titre, image
}`;

type Article = {
  _id: string;
  titre: string;
  slug: { current: string };
  date: string;
  categorie?: string;
  resume?: string;
  image?: object;
  contenu?: unknown[];
};

export default async function ActualiteDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, related]: [Article, Article[]] = await Promise.all([
    client.fetch(query, { slug }),
    client.fetch(relatedQuery, { slug }),
  ]);

  if (!article) notFound();

  const imageUrl = article.image
    ? urlFor(article.image).width(1200).height(630).fit("max").auto("format").url()
    : undefined;

  return (
    <>
      <Header />
      <main className="page">
        <section className="pbb-block page-title alignstretch left-align">
          <h1 className="shadow-title">{article.titre}</h1>
        </section>

        <article className="article-detail alignwide">
          <div className="article-detail__meta">
            {article.categorie && (
              <span className="btn white">{article.categorie}</span>
            )}
            <span className="article-detail__date">
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {imageUrl && (
            <div className="article-detail__image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt={article.titre} width={1200} height={630} />
            </div>
          )}

          {article.resume && (
            <p className="article-detail__resume">{article.resume}</p>
          )}

          {article.contenu && article.contenu.length > 0 && (
            <div className="article-detail__content">
              <PortableText value={article.contenu as Parameters<typeof PortableText>[0]["value"]} />
            </div>
          )}
        </article>

        {related.length > 0 && (
          <section className="article-related alignwide">
            <h2>À lire aussi</h2>
            <div className="actu-grid-rest">
              {related.map((a) => {
                const relatedImageUrl = a.image
                  ? urlFor(a.image).width(433).height(258).fit("max").auto("format").url()
                  : undefined;
                return (
                  <a
                    key={a._id}
                    href={`/actualites/${a.slug.current}`}
                    className="actu-card actu-card--small"
                  >
                    {relatedImageUrl && (
                      <div className="actu-card__image">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={relatedImageUrl} alt={a.titre} width={433} height={258} />
                      </div>
                    )}
                    <div className="actu-card__content">
                      {a.categorie && <span className="btn white">{a.categorie}</span>}
                      <h3>{a.titre}</h3>
                      <div className="date">
                        {new Date(a.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
