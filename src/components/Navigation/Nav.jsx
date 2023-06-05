import React from "react";
import { Link } from "react-router-dom";
import croix from "../../assets/fermer.png";

function Nav({ setOpenBurger }) {
  return (
    <nav className="flex-col openBurger justify-between">
      <button
        type="button"
        onClick={() => setOpenBurger(false)}
        className="croix"
      >
        <img src={croix} alt="croix pour fermer la navigation sur la page" />
      </button>
      <Link to="/">
        <button type="button" onClick={() => setOpenBurger(false)}>
          ACCUEIL
        </button>
      </Link>
      <Link to="/Compagnie">
        <button type="button" onClick={() => setOpenBurger(false)}>
          COMPAGNIE
        </button>
      </Link>
      <Link to="/actions/Spectacles">
        <button type="button" onClick={() => setOpenBurger(false)}>
          SPECTACLES
        </button>
      </Link>
      <Link to="/actions/Residences">
        <button type="button" onClick={() => setOpenBurger(false)}>
          RÉSIDENCES
        </button>
      </Link>
      <Link to="/actions/Pluridisciplinarite">
        <button type="button" onClick={() => setOpenBurger(false)}>
          AUTRES PRODUCTIONS
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
