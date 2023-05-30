import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">Accueil</Link>
      <Link to="/Compagnie">La compagnie</Link>
      <Link to="/actions/Spectacles">Spectacles</Link>
      <Link to="/actions/Residences">Résidences</Link>
      <Link to="/actions/Pluridisciplinarite">Pluridisciplinarité</Link>
    </nav>
  );
}

export default Navbar;
