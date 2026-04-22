import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";

export const revalidate = 3600;

export default async function ConfidentialitePage() {
  const page = await client.fetch(`*[_type == "pageLegale" && type == "confidentialite"][0]`);

  return (
    <>
      <Header />
      <main className="page">
        <section className="pbb-block page-title alignstretch left-align">
          <h1 className="shadow-title"><strong>Politique de confidentialité</strong></h1>
        </section>
        <div className="alignwide" style={{ padding: "0 0 80px", lineHeight: 1.8, fontSize: 16 }}>
          {page?.contenu ? <PortableText value={page.contenu} /> : <p style={{ opacity: 0.5 }}>Contenu à venir.</p>}
        </div>
      </main>
      <Footer />
    </>
  );
}
