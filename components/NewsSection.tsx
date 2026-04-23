type Article = {
  _id: string;
  titre: string;
  slug: { current: string };
  date: string;
  categorie?: string;
  resume?: string;
  imageUrl?: string;
};

export default function NewsSection({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <section className="pbb-block last-news alignwide" style={{ display: "block" }}>
        <div className="title flex-columns medium-flex">
          <h2>Nos actualités</h2>
          <div className="all">
            <a href="/actualites" className="btn white arrow">Tout voir</a>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "40px 0", opacity: 0.5 }}>
          Retrouvez nos actualités sur{" "}
          <a href="https://www.instagram.com/abc_fighters/" target="_blank" rel="noopener">Instagram</a> et{" "}
          <a href="https://www.facebook.com/AbidjanFighters/" target="_blank" rel="noopener">Facebook</a>.
        </div>
      </section>
    );
  }

  const [featured, ...rest] = articles;

  return (
    <section className="pbb-block last-news alignwide" style={{ display: "block" }}>
      <div className="title flex-columns medium-flex">
        <h2>Nos actualités</h2>
        <div className="all">
          <a href="/actualites" className="btn white arrow">Tout voir</a>
        </div>
      </div>

      <div className="flex-columns featured-news">
        <div className="news-card featured" data-href={`/actualites/${featured.slug.current}`}>
          {featured.imageUrl && (
            <div className="image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featured.imageUrl} alt={featured.titre} className="responsive-img wp-post-image" width={990} height={557} />
            </div>
          )}
          <div className="content">
            {featured.categorie && <div className="tags"><span className="btn white">{featured.categorie}</span></div>}
            <h3 className="post-title">
              <a href={`/actualites/${featured.slug.current}`}>{featured.titre}</a>
            </h3>
            {featured.resume && <p>{featured.resume}</p>}
            <div className="date">{new Date(featured.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
          </div>
        </div>
      </div>

      {rest.length > 0 && (
        <div className="flex-columns medium-flex secondary-news">
          {rest.map((article) => (
            <div key={article._id} className="news-card" data-href={`/actualites/${article.slug.current}`}>
              {article.imageUrl && (
                <div className="image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.imageUrl} alt={article.titre} className="responsive-img wp-post-image" width={990} height={570} />
                </div>
              )}
              <div className="content">
                {article.categorie && <div className="tags"><span className="btn white">{article.categorie}</span></div>}
                <h3 className="post-title">
                  <a href={`/actualites/${article.slug.current}`}>{article.titre}</a>
                </h3>
                <div className="date">{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
