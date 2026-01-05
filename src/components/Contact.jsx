import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  // CORRECTION : URL du backend
  const API_URL = import.meta.env.PROD
    ? "https://votre-domaine.com/api"
    : "http://localhost:3001/api";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus({ success: false, error: false, message: "" });

    try {
      console.log("📤 Envoi vers:", `${API_URL}/contact/send`);
      console.log("📝 Données:", formData);

      const response = await fetch(`${API_URL}/contact/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
        mode: "cors", // Important pour CORS
      });

      console.log("📥 Réponse status:", response.status);

      const data = await response.json();
      console.log("📥 Réponse data:", data);

      if (!response.ok) {
        throw new Error(
          data.error || data.message || `Erreur ${response.status}`
        );
      }

      setSendStatus({
        success: true,
        error: false,
        message: data.message || "✅ Votre message a été envoyé avec succès !",
      });

      // Réinitialiser le formulaire
      setFormData({
        fname: "",
        lname: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Erreur:", error);

      let errorMessage = error.message;

      if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError")
      ) {
        errorMessage =
          "❌ Impossible de se connecter au serveur. Vérifiez que le backend est démarré sur http://localhost:3001";
      } else if (error.message.includes("CORS")) {
        errorMessage = "⚠️ Erreur CORS. Vérifiez la configuration du backend.";
      }

      setSendStatus({
        success: false,
        error: true,
        message: errorMessage,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section className="fiduclose-contact-section-top">
        <div>
          <h1 className="fiduclose-hero-title">
            Contactez&nbsp;
            <span className="fiduclose-text-primary">
              Fiduciaire du H&ecirc;tre
            </span>
            &nbsp;à Romont
          </h1>
          <p className="fiduclose-hero-subtitle">
            Nous serons ravis de vous aider et de répondre à toutes vos
            questions. N'hésitez pas à nous contacter. Premier entretien
            gratuit.
          </p>
        </div>
      </section>
      <section className="fiduclose-contact-section-bottom">
        <div className="fiduclose-contact-card-info ">
          <div className="fiduclose-contact-card-info-icon">
            <MapPin className="fiduclose-icon-card" />
          </div>
          <div className="fiduclose-contact-card-info-content">
            <h3 className="fiduclose-contact-card-info-title">Adresse</h3>
            <p className="fiduclose-contact-card-info-subtitle">
              Rue de l'Eglise 75, 1680 Romont
            </p>
          </div>
        </div>
        <div className="fiduclose-contact-card-info">
          <div className="fiduclose-contact-card-info-icon">
            <Phone className="fiduclose-icon-card" />
          </div>
          <div className="fiduclose-contact-card-info-content">
            <h3 className="fiduclose-contact-card-info-title">Téléphone</h3>
            <p className="fiduclose-contact-card-info-subtitle">
              +41 26 652 15 15
            </p>
          </div>
        </div>
        <div className="fiduclose-contact-card-info">
          <div className="fiduclose-contact-card-info-icon">
            <Mail className="fiduclose-icon-card" />
          </div>
          <div className="fiduclose-contact-card-info-content">
            <h3 className="fiduclose-contact-card-info-title">Email</h3>
            <p className="fiduclose-contact-card-info-subtitle">
              info@fiduciaireduhetre.ch
            </p>
          </div>
        </div>
      </section>
      <div className="fiduclose-form-container">
        {/* Message de statut */}
        {sendStatus.message && (
          <div
            className={`fiduclose-alert ${
              sendStatus.success
                ? "fiduclose-alert-success"
                : "fiduclose-alert-error"
            }`}
          >
            {sendStatus.message}
          </div>
        )}

        <form className="fiduclose-form-group" onSubmit={handleSubmit}>
          <h1 className="fiduclose-hero-title">Contactez-nous</h1>
          {/* Dans votre formulaire, ajoutez ce champ caché */}
          <div style={{ display: "none" }}>
            <input
              type="text"
              name="honeypot"
              tabIndex="-1"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              className="fiduclose-form-input"
              type="text"
              id="fname"
              name="fname"
              placeholder=" "
              value={formData.fname}
              onChange={handleChange}
              required
            />
            <label className="fiduclose-form-label" htmlFor="fname">
              Prénom:
            </label>
          </div>
          <div className="input-group">
            <input
              className="fiduclose-form-input"
              type="text"
              id="lname"
              name="lname"
              placeholder=" "
              value={formData.lname}
              onChange={handleChange}
              required
            />
            <label className="fiduclose-form-label" htmlFor="lname">
              Nom:
            </label>
          </div>
          <div className="input-group">
            <input
              className="fiduclose-form-input"
              placeholder=" "
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="fiduclose-form-label" htmlFor="email">
              Email:
            </label>
          </div>
          <div className="input-group">
            <input
              className="fiduclose-form-input"
              placeholder=" "
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <label className="fiduclose-form-label" htmlFor="subject">
              Service d'intérêt:
            </label>
          </div>
          <div className="input-group">
            <textarea
              className="fiduclose-form-textarea"
              placeholder=" "
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label className="fiduclose-form-label" htmlFor="message">
              Votre message:
            </label>
          </div>
          <div className="input-group">
            <button
              type="submit"
              className="fiduclose-btn fiduclose-btn-primary fiduclose-form-btn fiduclose-btn-lg"
              disabled={isSending}
            >
              {isSending ? "Envoi en cours..." : "Envoyer"}
              {!isSending && <Send className="fiduclose-icon-send" />}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
