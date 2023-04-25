import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">Accueil</Link>
      <Link to="/Compagnie">La compagnie</Link>
      <Link to="/Spectacles">Spectacles</Link>
      <Link to="/Residences">Résidences</Link>
      <Link to="/Pluridisciplinarite">Pluridisciplinarité</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
