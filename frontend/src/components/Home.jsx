import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <>
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

            <Link
              className="fidu-hetre-btn fidu-hetre-btn-secondary fidu-hetre-btn-lg"
              to="/service"
            >
              Découvrir nos services
            </Link>
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
            <h3 className="fidu-hetre-service-card-title">Audit & Révision</h3>
            <p className="fidu-hetre-service-card-description">
              Vérification et garantie de conformité
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fidu-hetre-services-cta">
          <Link
            className="fidu-hetre-btn fidu-hetre-btn-secondary fidu-hetre-btn-lg"
            to="/service"
          >
            Découvrir tous nos services
            <ArrowRight size={20} className="fidu-hetre-icon-arrow-right" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
