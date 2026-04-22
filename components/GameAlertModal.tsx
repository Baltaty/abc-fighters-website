"use client";
import { useState } from "react";

export default function GameAlertModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      id="register-game-popin"
      className="modal"
      tabIndex={0}
      style={{ display: "block", opacity: 1, visibility: "visible" }}
    >
      <div className="modal-content">
        <h4>Alerte ouverture billetterie</h4>
        {submitted ? (
          <p>Merci, votre demande a bien été enregistrée.</p>
        ) : (
          <form onSubmit={handleSubmit} className="game-alert-form">
            <p>
              Indiquez votre adresse e-mail pour être informé(e) de la date d&apos;ouverture de la billetterie du
              match.
            </p>
            <div className="input-field">
              <input type="text" name="firstname" placeholder="Prénom*" required />
            </div>
            <div className="input-field">
              <input type="text" name="lastname" placeholder="Nom*" required />
            </div>
            <div className="input-field">
              <input type="email" name="email" placeholder="E-mail*" required />
            </div>
            <p>
              <label>
                <input type="checkbox" name="privacy" value="1" className="filled-in" required />
                <span>
                  En vous inscrivant, vous acceptez que votre adresse e-mail soit utilisée pour recevoir des
                  informations relatives à notre billetterie.
                </span>
              </label>
            </p>
            <div className="buttons">
              <button type="button" className="btn border" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn white">
                Envoyer
              </button>
            </div>
          </form>
        )}
      </div>
      <button onClick={onClose} className="modal-close close-icon" aria-label="fermer">
        <span className="icon icon-close"></span>
      </button>
    </div>
  );
}
