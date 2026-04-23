import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="pbb-block page-title alignstretch left-align">
          <h1 className="shadow-title">Nous <strong>Contacter</strong></h1>
        </section>

        <div className="contact-page alignwide">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Abidjan Basketball Club</h2>
              <ul className="contact-list">
                <li>
                  <span className="icon icon-location"></span>
                  <span>Abidjan, Côte d&apos;Ivoire</span>
                </li>
                <li>
                  <span className="icon icon-mail"></span>
                  <a href="mailto:contact@abidjanbc.com">contact@abidjanbc.com</a>
                </li>
              </ul>
              <div className="contact-socials">
                <a href="https://www.facebook.com/AbidjanFighters/" target="_blank" rel="noopener" title="Facebook">
                  <span className="icon icon-facebook"></span>
                </a>
                <a href="https://www.instagram.com/abc_fighters/" target="_blank" rel="noopener" title="Instagram">
                  <span className="icon icon-instagram"></span>
                </a>
                <a href="https://www.tiktok.com/@abc_fighters" target="_blank" rel="noopener" title="TikTok">
                  <span className="icon icon-tiktok"></span>
                </a>
              </div>
            </div>

            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
