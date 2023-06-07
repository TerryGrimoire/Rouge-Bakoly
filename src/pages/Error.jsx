import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1>ERREUR 404</h1>
      <h2>Page non trouvée</h2>
      <div />
      <Link to="/">
        <button type="button" className="button_style">
          Retour à l'accueil
        </button>
      </Link>
    </div>
  );
}

export default Error;
