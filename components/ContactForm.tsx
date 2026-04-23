"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ nom: "", email: "", sujet: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="nom">Nom *</label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={form.nom}
            onChange={handleChange}
            placeholder="Votre nom"
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="sujet">Sujet</label>
        <select id="sujet" name="sujet" value={form.sujet} onChange={handleChange}>
          <option value="">Choisir un sujet</option>
          <option value="Partenariat">Partenariat</option>
          <option value="Presse">Presse</option>
          <option value="Billetterie">Billetterie</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Votre message..."
        />
      </div>

      <button type="submit" className="btn white arrow" disabled={status === "sending"}>
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      {status === "sent" && (
        <p className="contact-form__success">Message envoyé, nous vous répondrons rapidement !</p>
      )}
      {status === "error" && (
        <p className="contact-form__error">Une erreur est survenue, veuillez réessayer.</p>
      )}
    </form>
  );
}
