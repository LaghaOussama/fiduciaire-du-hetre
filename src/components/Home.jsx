import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <>
      <div className="fiduclose-hero ">
        <section className="fiduclose-hero-content fiduclose-hero-cta">
          <div>
            <h1 className="fiduclose-hero-title">
              Votre partenaire fiduciaire de{" "}
              <span className="fiduclose-text-primary">confiance</span> à Romont
            </h1>
            <p className="fiduclose-hero-subtitle">
              Nous accompagnons les entreprises et particuliers avec expertise,
              proximité et engagement. Une approche personnalisée pour chaque
              client.
            </p>
          </div>
        </section>
        <section className="fiduclose-hero-content fiduclose-hero-cta">
          <div className="fiduclose-btn-container">
            <Link
              className=" fiduclose-btn fiduclose-btn-primary fiduclose-btn-lg "
              to="/contact"
            >
              Prenez un rendez-vous
            </Link>

            <Link
              className=" fiduclose-btn fiduclose-btn-secondary fiduclose-btn-lg"
              to="/service"
            >
              Découvrir nos services
            </Link>
          </div>
        </section>
      </div>
      <section>
        <div className="fiduclose-hero-content fiduclose-hero-cta-container">
          <h2 className="fiduclose-hero-title">Nos Services Experts</h2>
          <p className="fiduclose-hero-subtitle">
            Une gamme complète de services fiduciaires adaptés aux besoins des
            PME, entrepreneurs et particuliers en Suisse.
          </p>
        </div>
        <div className="fiduclose-services-grid fiduclose-hero-cta">
          <div className="fiduclose-service-card">
            <div className="fiduclose-service-card-icon">
              <i className="fi fi-rr-users"></i>
            </div>
            <h3 className="fiduclose-service-card-title">
              Services Fiduciaires
            </h3>
            <p className="fiduclose-service-card-description">
              Gestion complète de votre comptabilité et administration
            </p>
          </div>
          <div className="fiduclose-service-card">
            <div className="fiduclose-service-card-icon">
              <i className="fi fi-rr-users"></i>
            </div>
            <h3 className="fiduclose-service-card-title">
              Services Fiduciaires
            </h3>
            <p className="fiduclose-service-card-description">
              Gestion complète de votre comptabilité et administration
            </p>
          </div>
          <div className="fiduclose-service-card">
            <div className="fiduclose-service-card-icon">
              <i className="fi fi-rr-users"></i>
            </div>
            <h3 className="fiduclose-service-card-title">
              Services Fiduciaires
            </h3>
            <p className="fiduclose-service-card-description">
              Gestion complète de votre comptabilité et administration
            </p>
          </div>
          <div className="fiduclose-service-card">
            <div className="fiduclose-service-card-icon">
              <i className="fi fi-rr-users"></i>
            </div>
            <h3 className="fiduclose-service-card-title">
              Services Fiduciaires
            </h3>
            <p className="fiduclose-service-card-description">
              Gestion complète de votre comptabilité et administration
            </p>
          </div>
        </div>
        <div className="fiduclose-hero-cta-container fiduclose-hero-content">
          <Link
            className=" fiduclose-btn fiduclose-btn-secondary fiduclose-btn-lg"
            to="/service"
          >
            Découvrir nos services
          </Link>
        </div>
      </section>
    </>
  );
}
export default Home;
