import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header className="fiduclose-header ">
        <div className="fiduclose-header-content ">
          <nav className="fiduclose-nav fiduclose-header-content ">
            <Link
              className="fiduclose-nav-link logo-link"
              to="/"
              onClick={closeMenu}
            >
              <div className="fiduclose-logo">
                <img
                  type="image/svg+xml"
                  className="fiduclose-logo-icon"
                  src="/assets/TreeOfLifeClipart.svg"
                  alt="Logo"
                ></img>
                <div className="fiduclose-logo-divider">
                  <span className="fiduclose-logo-text ">
                    Fiduciaire du H&ecirc;tre
                  </span>
                  <span className="fiduclose-logo-subtitle">
                    Fiduciaire suisse
                  </span>
                </div>
              </div>
            </Link>
            <ul
              className={`fiduclose-nav fiduclose-header-content ${
                isMenuOpen ? "active" : ""
              }`}
            >
              <Link className="fiduclose-nav-link " to="/" onClick={closeMenu}>
                Accueil
              </Link>
              <Link
                className="fiduclose-nav-link "
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                className="fiduclose-nav-link "
                to="/service"
                onClick={closeMenu}
              >
                Service
              </Link>
              <Link
                className="fiduclose-nav-link  "
                to="/about"
                onClick={closeMenu}
              >
                A propos
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
