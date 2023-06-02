import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import region from "../../assets/region.png";
import ue from "../../assets/ue.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo Rouge Bakoly" />
      <p className="contact">
        Nous contacter :{" "}
        <a href="mailto:rougebakolyartistique@gmail.com">
          rougebakolyartistique@gmail.com
        </a>{" "}
        |{" "}
        <a href="mailto:rougebakolyproduction@gmail.com">
          rougebakolyproduction@gmail.com
        </a>
      </p>
      <p>
        Rouge Bakoly - Tous droits réservés. Site réalisé par le{" "}
        <a
          href="https://grimoire-numerique.re/"
          target="_blank"
          rel="noreferrer"
        >
          Grimoire Numérique
        </a>
        . Design par{" "}
        <a href="https://banane21.re/" target="_blank" rel="noreferrer">
          Banane21
        </a>
        .
      </p>
      <p>
        Ce site a été financé à l’aide du FEDER (REACT-UE) dans le cadre de la
        réponse de l’Union Européenne à la pandémie COVID-19. L’Europe s’engage
        à La Réunion.
      </p>
      <div>
        <img src={region} alt="logo de la Région Réunion" />
        <img src={ue} alt="logo de l'Union Européenne" />
      </div>
      <div className="mentions">
        <Link to="/Mentions">
          <p className="small">Mentions Légales</p>
        </Link>
        <Link to="/Mentions">
          <p className="small">Politique de confidentialité</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
