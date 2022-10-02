import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg text-light bg-primary">
      <div className="container-fluid">
        <div>
          <i className="bi bi-shop me-2"></i>
          <Link to="/">
            <i className="text-light">BizAd</i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <Link to="/Services">
                <li className="nav- me-2 text-light">Services</li>
              </Link>
              <Link to="/About">
                <li className="nav-item text-light">About</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
