import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+41266521515";
  };

  const handleAddressClick = () => {
    window.open(
      "https://maps.google.com/?q=Rue+de+l'Eglise+75,+1680+Romont",
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@fiduciaireduhetre.ch";
  };

  return (
    <footer className="fidu-hetre-footer">
      <div className="fidu-hetre-footer-content">
        {/* Logo Section */}
        <div className="fidu-hetre-footer-utiles">
          <div className="fidu-hetre-logo">
            <img
              className="fidu-hetre-logo-icon"
              src="/assets/TreeOfLifeClipart.svg"
              alt="Logo Fiduciaire du Hêtre"
            />
            <div className="fidu-hetre-logo-divider">
              <h3 className="fidu-hetre-footer-logo-text">
                Fiduciaire du Hêtre
              </h3>
              <span className="fidu-hetre-footer-logo-subtitle">
                Fiduciaire suisse
              </span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="fidu-hetre-footer-utiles">
          <h3 className="fidu-hetre-footer-section">Liens utiles</h3>
          <ul className="fidu-hetre-footer-links">
            {/* <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/service">Nos services</Link>
            </li>*/}
            <li>
              <Link to="/contact">Contactez-nous</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="fidu-hetre-footer-utiles">
          <h3 className="fidu-hetre-footer-section">Contact</h3>
          <ul className="fidu-hetre-footer-links">
            <li>
              <div
                className="fidu-hetre-footer-top-span"
                onClick={handlePhoneClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handlePhoneClick()}
              >
                <Phone className="fidu-hetre-footer-top-icon" size={16} />
                <span>+41 26 652 15 15</span>
              </div>
            </li>
            <li>
              <div
                className="fidu-hetre-footer-top-span"
                onClick={handleAddressClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleAddressClick()}
              >
                <MapPin className="fidu-hetre-footer-top-icon" size={16} />
                <span>Rue de l'Eglise 75, 1680 Romont</span>
              </div>
            </li>
            <li>
              <div
                className="fidu-hetre-footer-top-span"
                onClick={handleEmailClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleEmailClick()}
              >
                <Mail className="fidu-hetre-footer-top-icon" size={16} />
                <span>info@fiduciaireduhetre.ch</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="fidu-hetre-footer-content">
        <div className="fidu-hetre-footer-bottom">
          <p>© 2026 Fiduciaire du Hêtre. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
