import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

const query = `*[_type == "actualite"] | order(date desc) {
  _id, titre, slug, date, categorie, resume,
  "imageUrl": image.asset->url
}`;

export const revalidate = 60;

export default async function ActualitesPage() {
  const articles = await client.fetch(query);

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
            <div className="flex-columns medium-flex featured-news" style={{ marginTop: 40 }}>
              {articles.map((a: { _id: string; titre: string; slug: { current: string }; date: string; categorie?: string; resume?: string; imageUrl?: string }) => (
                <div key={a._id} className="news-card featured">
                  {a.imageUrl && (
                    <div className="image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={a.imageUrl} alt={a.titre} className="responsive-img" width={990} height={557} />
                    </div>
                  )}
                  <div className="content">
                    {a.categorie && <div className="tags"><span className="btn white">{a.categorie}</span></div>}
                    <h3 className="post-title">{a.titre}</h3>
                    {a.resume && <p>{a.resume}</p>}
                    <div className="date">{new Date(a.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
