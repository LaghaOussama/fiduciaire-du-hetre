import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "./SEO";

function Home() {
  return (
    <>
      <SEO
        title="Fiduciaire du Hêtre - Accueil"
        description="Découvrez nos services fiduciaires professionnels à Romont"
        canonical="https://fiduciaireduhetre.ch"
      />
      {/* Hero Section */}
      <section className="fidu-hetre-hero">
        <div className="fidu-hetre-hero-content">
          {/* Hero Title & Subtitle */}
          <div className="fidu-hetre-hero-text">
            <h1 className="fidu-hetre-hero-title">
              Votre partenaire fiduciaire de{" "}
              <span className="fidu-hetre-text-primary">confiance</span> à
              Romont
            </h1>
            <p className="fidu-hetre-hero-subtitle">
              Nous accompagnons les entreprises et particuliers avec expertise,
              proximité et engagement. Une approche personnalisée pour chaque
              client.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fidu-hetre-hero-cta">
            <Link
              className="fidu-hetre-btn fidu-hetre-btn-primary fidu-hetre-btn-lg"
              to="/contact"
            >
              Prenez un rendez-vous
              <ArrowRight size={20} className="fidu-hetre-icon-arrow-right" />
            </Link>

            {/* <Link
              className="fidu-hetre-btn fidu-hetre-btn-secondary fidu-hetre-btn-lg"
              to="/service"
            >
              Découvrir nos services
            </Link>*/}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="fidu-hetre-services-section">
        {/* Section Header */}
        <div className="fidu-hetre-services-header">
          <h2 className="fidu-hetre-hero-title">Nos Services Experts</h2>
          <p className="fidu-hetre-hero-subtitle">
            Une gamme complète de services fiduciaires adaptés aux besoins des
            PME, entrepreneurs et particuliers en Suisse.
          </p>
        </div>

        {/* Services Grid */}
        <div className="fidu-hetre-services-grid">
          <div className="fidu-hetre-service-card">
            <h3 className="fidu-hetre-service-card-title">
              Services Fiduciaires
            </h3>
            <p className="fidu-hetre-service-card-description">
              Gestion complète de votre comptabilité et administration
            </p>
          </div>

          <div className="fidu-hetre-service-card">
            <h3 className="fidu-hetre-service-card-title">
              Fiscalité & Impôts
            </h3>
            <p className="fidu-hetre-service-card-description">
              Optimisation fiscale et conseils personnalisés
            </p>
          </div>

          <div className="fidu-hetre-service-card">
            <h3 className="fidu-hetre-service-card-title">
              Conseil Entreprise
            </h3>
            <p className="fidu-hetre-service-card-description">
              Accompagnement stratégique et développement
            </p>
          </div>

          <div className="fidu-hetre-service-card">
            <h3 className="fidu-hetre-service-card-title">Outsourcing</h3>
            <p className="fidu-hetre-service-card-description">
              Acompagnement de votre administration ou remplacement temporaire
            </p>
          </div>
          {/*
          <div className="fidu-hetre-service-card">
            <h3 className="fidu-hetre-service-card-title">Services RH</h3>
            <p className="fidu-hetre-service-card-description">
              Acompagnement de votre administration ou remplacement temporaire
            </p>
          </div>*/}
        </div>

        {/* CTA Button */}
        {/*  <div className="fidu-hetre-services-cta">
          <Link
            className="fidu-hetre-btn fidu-hetre-btn-secondary fidu-hetre-btn-lg"
            to="/service"
          >
            Découvrir tous nos services
            <ArrowRight size={20} className="fidu-hetre-icon-arrow-right" />
          </Link>
        </div>*/}
      </section>

      {/* Contact & Map Section */}
      <section className="fidu-hetre-contact-map-section">
        <div className="fidu-hetre-contact-map-container">
          {/* Opening Hours */}
          <div className="fidu-hetre-opening-hours">
            <h2 className="fidu-hetre-hero-title">Horaires d'ouverture</h2>
            <div className="fidu-hetre-hours-list">
              <div className="fidu-hetre-hours-item">
                <span className="fidu-hetre-hours-day">Lundi - Mardi</span>
                <span className="fidu-hetre-hours-time">
                  09:00-11:30 / 13:00-16:00
                </span>
              </div>
              <div className="fidu-hetre-hours-item">
                <span className="fidu-hetre-hours-day">Mercredi</span>
                <span className="fidu-hetre-hours-time">Sur rendez-vous</span>
              </div>
              <div className="fidu-hetre-hours-item">
                <span className="fidu-hetre-hours-day">Jeudi</span>
                <span className="fidu-hetre-hours-time">
                  09:00-11:30 / 13:00-16:00
                </span>
              </div>
              <div className="fidu-hetre-hours-item">
                <span className="fidu-hetre-hours-day">Vendredi</span>
                <span className="fidu-hetre-hours-time">Sur rendez-vous</span>
              </div>
              <div className="fidu-hetre-hours-item">
                <span className="fidu-hetre-hours-day">Samedi</span>
                <span className="fidu-hetre-hours-time">09:00 - 11:30</span>
              </div>
              <div className="fidu-hetre-hours-item">
                <span className="fidu-hetre-hours-day">Dimanche</span>
                <span className="fidu-hetre-hours-time">Fermé</span>
              </div>
            </div>
            <div className="fidu-hetre-contact-info">
              <p>
                <strong>Adresse :</strong> Rue de l'Eglise 75, 1680 Romont
              </p>
              <p>
                <strong>Téléphone :</strong>{" "}
                <a href="tel:+41266521515">+41 26 652 15 15</a>
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a href="mailto:info@fiduciaireduhetre.ch">
                  info@fiduciaireduhetre.ch
                </a>
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="fidu-hetre-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.5654321098765!2d7.0988!3d46.5889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479293e8b8b8b8b9%3A0x1234567890abcdef!2sRue%20de%20l'Eglise%2075%2C%201680%20Romont!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fiduciaire du Hêtre - Romont"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
