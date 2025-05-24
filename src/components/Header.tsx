import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/LOGO (1).png"; // 👈 usage propre de l'alias

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Logo de Kasa" className="logo" />
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              className={location.pathname === "/a-propos" ? "active" : ""}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

