import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  <SEO
    title="Contact - Fiduciaire du Hêtre | Premiers Entretien Gratuit"
    description="Contactez-nous pour une consultation gratuite. Tél: +41 26 652 15 15"
    canonical="https://fiduciaireduhetre.ch/contact"
  />;
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
        mode: "cors",
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
          "❌ Impossible de se connecter au serveur. Vérifiez que le backend est démarré.";
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
      {/* Hero Section */}
      <section className="fidu-hetre-contact-hero">
        <div className="fidu-hetre-contact-hero-content">
          <h1 className="fidu-hetre-hero-title">
            Contactez&nbsp;
            <span className="fidu-hetre-text-primary">Fiduciaire du Hêtre</span>
          </h1>
          <p className="fidu-hetre-hero-subtitle">
            Nous serons ravis de vous aider et de répondre à toutes vos
            questions. Premier entretien gratuit.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="fidu-hetre-contact-cards-section">
        <div className="fidu-hetre-contact-cards-grid">
          {/* Address Card */}
          <a
            href="https://maps.google.com/?q=Rue+de+l'Eglise+75,+1680+Romont"
            target="_blank"
            rel="noopener noreferrer"
            className="fidu-hetre-contact-card fidu-hetre-contact-card-link"
          >
            <div className="fidu-hetre-contact-card-icon">
              <MapPin
                alt="Localisation Romont"
                className="fidu-hetre-contact-icon"
                size={32}
              />
            </div>
            <div className="fidu-hetre-contact-card-content">
              <h3 className="fidu-hetre-contact-card-title">Adresse</h3>
              <p className="fidu-hetre-contact-card-text">
                Rue de l'Eglise 75
                <br />
                1680 Romont, Suisse
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+41266521515"
            className="fidu-hetre-contact-card fidu-hetre-contact-card-link"
          >
            <div className="fidu-hetre-contact-card-icon">
              <Phone
                alt="Numéro de téléphone"
                className="fidu-hetre-contact-icon"
                size={32}
              />
            </div>
            <div className="fidu-hetre-contact-card-content">
              <h3 className="fidu-hetre-contact-card-title">Téléphone</h3>
              <p className="fidu-hetre-contact-card-text">+41 26 652 15 15</p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:info@fiduciaireduhetre.ch"
            className="fidu-hetre-contact-card fidu-hetre-contact-card-link"
          >
            <div className="fidu-hetre-contact-card-icon">
              <Mail
                alt="Adresse email"
                className="fidu-hetre-contact-icon"
                size={32}
              />
            </div>
            <div className="fidu-hetre-contact-card-content">
              <h3 className="fidu-hetre-contact-card-title">Email</h3>
              <p className="fidu-hetre-contact-card-text">
                info@fiduciaireduhetre.ch
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section className="fidu-hetre-contact-form-section">
        <div className="fidu-hetre-contact-form-wrapper">
          {/* Alert Messages */}
          {sendStatus.message && (
            <div
              className={`fidu-hetre-alert ${
                sendStatus.success
                  ? "fidu-hetre-alert-success"
                  : "fidu-hetre-alert-error"
              }`}
            >
              {sendStatus.message}
            </div>
          )}

          {/* Form Title */}
          <div className="fidu-hetre-form-header">
            <h2 className="fidu-hetre-hero-title">Envoyez-nous un message</h2>
            <p className="fidu-hetre-hero-subtitle">
              Remplissez le formulaire ci-dessous et nous vous répondrons
              rapidement.
            </p>
          </div>

          {/* Form */}
          <form className="fidu-hetre-contact-form" onSubmit={handleSubmit}>
            {/* Honeypot field */}
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
              onChange={handleChange}
            />

            {/* Name Fields Row */}
            <div className="fidu-hetre-form-row">
              <div className="fidu-hetre-form-field">
                <input
                  className="fidu-hetre-form-input"
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder=" "
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
                <label className="fidu-hetre-form-label" htmlFor="fname">
                  Prénom
                </label>
              </div>

              <div className="fidu-hetre-form-field">
                <input
                  className="fidu-hetre-form-input"
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder=" "
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
                <label className="fidu-hetre-form-label" htmlFor="lname">
                  Nom
                </label>
              </div>
            </div>

            {/* Email Field */}
            <div className="fidu-hetre-form-field">
              <input
                className="fidu-hetre-form-input"
                type="email"
                id="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="fidu-hetre-form-label" htmlFor="email">
                Email
              </label>
            </div>

            {/* Subject Field */}
            <div className="fidu-hetre-form-field">
              <input
                className="fidu-hetre-form-input"
                type="text"
                id="subject"
                name="subject"
                placeholder=" "
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label className="fidu-hetre-form-label" htmlFor="subject">
                Service d'intérêt
              </label>
            </div>

            {/* Message Field */}
            <div className="fidu-hetre-form-field">
              <textarea
                className="fidu-hetre-form-textarea"
                id="message"
                name="message"
                placeholder=" "
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label className="fidu-hetre-form-label" htmlFor="message">
                Votre message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="fidu-hetre-btn fidu-hetre-btn-primary fidu-hetre-btn-lg fidu-hetre-form-submit"
              disabled={isSending}
            >
              {isSending ? "Envoi en cours..." : "Envoyer le message"}
              {!isSending && <Send size={20} />}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
