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
  return (
    <section className="pbb-block last-news alignwide" style={{ display: "block" }}>
      <div className="title flex-columns medium-flex">
        <h2>Nos actualités</h2>
        <div className="all">
          <a href="/actualites" className="btn white arrow">Tout voir</a>
        </div>
      </div>

      {articles.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0", opacity: 0.5 }}>
          Retrouvez nos actualités sur{" "}
          <a href="https://www.instagram.com/abc_fighters/" target="_blank" rel="noopener">Instagram</a> et{" "}
          <a href="https://www.facebook.com/AbidjanFighters/" target="_blank" rel="noopener">Facebook</a>.
        </div>
      ) : (
        <div className="home-news-grid">
          {articles.map((article) => (
            <a key={article._id} href={`/actualites/${article.slug.current}`} className="actu-card actu-card--small">
              {article.imageUrl && (
                <div className="actu-card__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.imageUrl} alt={article.titre} width={433} height={258} />
                </div>
              )}
              <div className="actu-card__content">
                {article.categorie && <span className="btn white">{article.categorie}</span>}
                <h3>{article.titre}</h3>
                <div className="date">{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
