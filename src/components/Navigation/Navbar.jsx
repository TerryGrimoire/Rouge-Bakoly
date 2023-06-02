import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">ACCUEIL</Link>
      <Link to="/Compagnie">LA COMPAGNIE</Link>
      <Link to="/actions/Spectacles">SPECTACLES</Link>
      <Link to="/actions/Residences">RÉSIDENCES</Link>
      <Link to="/actions/Pluridisciplinarite">AUTRES PRODUCTIONS</Link>
    </nav>
  );
}

export default Navbar;
