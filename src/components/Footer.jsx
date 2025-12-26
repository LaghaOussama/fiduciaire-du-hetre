import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="fiduclose-footer">
        <div className="fiduclose-footer-content">
          <div className="fiduclose-footer-section">
            <div className="fiduclose-footer-bottom">
              <ul className="fiduclose-footer-links">
                <li className="fiduclose-footer-link">
                  <Link className="fiduclose-footer-link" to="/about">
                    a propos
                  </Link>
                </li>
                <li className="fiduclose-footer-link">
                  <Link className="fiduclose-footer-link" to="/service">
                    Nos services
                  </Link>
                </li>
                <li className="fiduclose-footer-link">
                  <Link className="fiduclose-footer-link" to="/contact">
                    contactez nous
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
