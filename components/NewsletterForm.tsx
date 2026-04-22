"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pbb-block newsletter-form alignstretch">
      <div className="flex-columns">
        <h2>La newsletter ABC Fighters</h2>
        <div className="description">
          <p>
            En m&apos;abonnant à la newsletter, j&apos;accepte de recevoir des informations et offres
            de l&apos;Abidjan Basketball Club. Mes données seront traitées selon la{" "}
            <a href="/confidentialite">
              politique de confidentialité
            </a>{" "}
            et je peux me désinscrire à tout moment.
          </p>
        </div>
      </div>
      {submitted ? (
        <p style={{ color: "#fff", textAlign: "center", padding: "1rem" }}>
          Félicitations ! Votre adresse e-mail a été ajoutée
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="pbb-optin-form flex-columns">
          <div className="input-field">
            <input type="text" name="first_name" required placeholder="Prénom*" />
          </div>
          <div className="input-field">
            <input type="text" name="last_name" required placeholder="Nom*" />
          </div>
          <div className="input-field">
            <input type="email" name="email" required placeholder="E-mail*" />
          </div>
          <button type="submit" aria-label="M'abonner">
            <span className="hide-on-med-and-up">M&apos;abonner&nbsp;</span>
            <span className="icon icon-arrow-right"></span>
          </button>
        </form>
      )}
    </section>
  );
}
