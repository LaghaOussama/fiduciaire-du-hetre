import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fidu-hetre-header">
      <div className="fidu-hetre-header-content">
        {/* Logo */}
        <Link className="logo-link" to="/" onClick={closeMenu}>
          <div className="fidu-hetre-logo">
            <img
              className="fidu-hetre-logo-icon"
              src="/assets/TreeOfLifeClipart.svg"
              alt="Logo Fiduciaire du Hêtre"
            />
            <div className="fidu-hetre-logo-divider">
              <span className="fidu-hetre-logo-text">Fiduciaire du Hêtre</span>
              <span className="fidu-hetre-logo-subtitle">
                Fiduciaire suisse
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="fidu-hetre-nav">
          <ul className="fidu-hetre-nav-links">
            <li>
              <Link className="fidu-hetre-nav-link" to="/">
                Accueil
              </Link>
            </li>
            {/*  <li>
              <Link className="fidu-hetre-nav-link" to="/service">
                Services
              </Link>
            </li>
            <li>
              <Link className="fidu-hetre-nav-link" to="/about">
                À propos
              </Link>
            </li>*/}
            <li>
              <Link className="fidu-hetre-nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} color="black" />
          ) : (
            <Menu size={24} color="black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="fidu-hetre-mobile-menu">
          <ul className="fidu-hetre-mobile-nav-links">
            <li>
              <Link
                className="fidu-hetre-mobile-nav-link"
                to="/"
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="fidu-hetre-mobile-nav-link"
                to="/service"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="fidu-hetre-mobile-nav-link"
                to="/about"
                onClick={closeMenu}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                className="fidu-hetre-mobile-nav-link"
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
