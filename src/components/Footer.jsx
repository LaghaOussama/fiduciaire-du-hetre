import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="fiduclose-footer">
        <div className="fiduclose-footer-content">
          <div className="fiduclose-footer-section">
            <div className="fiduclose-footer-top">
              <div className="fiduclose-logo">
                <img
                  type="image/svg+xml"
                  className="fiduclose-logo-icon"
                  src="/assets/TreeOfLifeClipart.svg"
                  alt="Logo"
                ></img>
                <div className="fiduclose-logo-divider">
                  <span className="fiduclose-footer-logo-text ">
                    Fiduciaire du H&ecirc;tre
                  </span>
                  <span className="fiduclose-footer-logo-subtitle">
                    Fiduciaire suisse
                  </span>
                </div>
              </div>
              <div className="fiduclose-footer-utiles">
                <h3>Liens utiles</h3>
                <ul className="fiduclose-footer-links">
                  <li className="fiduclose-footer-link">
                    <Link className="fiduclose-footer-link" to="/about">
                      A propos
                    </Link>
                  </li>
                  <li className="fiduclose-footer-link">
                    <Link className="fiduclose-footer-link" to="/service">
                      Nos services
                    </Link>
                  </li>
                  <li className="fiduclose-footer-link">
                    <Link className="fiduclose-footer-link" to="/contact">
                      Contactez nous
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="fiduclose-footer-utiles">
                <h3>Contact</h3>
                <ul className="fiduclose-footer-links">
                  <li>
                    <Phone className="fiduclose-footer-top-icon" />
                    <span className="fiduclose-footer-top-span">
                      +41 26 652 15 15
                    </span>
                  </li>
                  <li>
                    <MapPin className="fiduclose-footer-top-icon" />
                    <span className="fiduclose-footer-top-span">
                      Rue de l'Eglise 75, 1680 Romont
                    </span>
                  </li>
                  <li>
                    <Mail className="fiduclose-footer-top-icon" />
                    <span className="fiduclose-footer-top-span">
                      info@fiduciaireduhetre.ch
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fiduclose-footer-bottom">
              <p>
                &copy; 2026 Fiduciaire du H&ecirc;tre. Tous droits
                r&eacute;serv&eacute;s.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
