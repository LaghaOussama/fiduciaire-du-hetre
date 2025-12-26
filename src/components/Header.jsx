import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="fiduclose-header ">
        <div className="fiduclose-header-content ">
          <nav className="fiduclose-nav fiduclose-header-content ">
            <ul className="fiduclose-nav fiduclose-header-content ">
              <Link className="fiduclose-nav-link" to="/">
                <div className="fiduclose-logo">
                  <img
                    type="image/svg+xml"
                    className="fiduclose-logo-icon"
                    src="/assets/TreeOfLifeClipart.svg"
                    alt="Logo"
                  ></img>
                  <div className="fiduclose-logo-divider">
                    <span className="fiduclose-logo-text ">
                      Fiduciaire du h&ecirc;tre
                    </span>
                    <span className="fiduclose-logo-subtitle">
                      Fiduciaire suisse
                    </span>
                  </div>
                </div>
              </Link>
              <Link className="fiduclose-nav-link " to="/">
                Accueil
              </Link>
              <Link className="fiduclose-nav-link " to="/contact">
                Contact
              </Link>
              <Link className="fiduclose-nav-link " to="/service">
                Service
              </Link>
              <Link className="fiduclose-nav-link  " to="/about">
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
