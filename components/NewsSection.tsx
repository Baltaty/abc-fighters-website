export default function NewsSection() {
  return (
    <section className="pbb-block last-news alignwide" style={{ display: "block" }}>
      <div className="title flex-columns medium-flex">
        <h2>Nos actualités</h2>
        <div className="all">
          <a href="https://www.facebook.com/AbidjanFighters/" className="btn white arrow" target="_blank" rel="noopener">
            Suivez-nous
          </a>
        </div>
      </div>

      <div className="flex-columns featured-news">
        <div className="news-card featured">
          <div className="content" style={{ padding: "40px 20px" }}>
            <div className="tags">
              <span className="btn white">ABC Fighters</span>
            </div>
            <h3 className="post-title">
              Retrouvez toutes nos actualités sur nos réseaux sociaux
            </h3>
            <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://www.facebook.com/AbidjanFighters/" className="btn white arrow" target="_blank" rel="noopener">
                Facebook
              </a>
              <a href="https://www.instagram.com/abc_fighters/" className="btn white arrow" target="_blank" rel="noopener">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@abc_fighters" className="btn white arrow" target="_blank" rel="noopener">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
