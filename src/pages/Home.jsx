/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AliceCarousel from "react-alice-carousel";
import papa from "papaparse";
import "react-alice-carousel/lib/alice-carousel.css";

import itemData from "../data/itemData";
import aussiData from "../data/aussiData";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import spotify from "../assets/spotify.svg";
import youtube from "../assets/youtube.svg";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lastCreation, setLastCreation] = useState([]);
  const [actu, setActu] = useState([]);
  const [number, setNumber] = useState(0);

  const prepareData2 = (data2) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line, index) => {
      if (index > 1) {
        data2[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("data", JSON.stringify([...new Set(json)]));
    setLastCreation(
      [...new Set(json)].filter((el) => el.type === "Spectacles")[0]
    );
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_GOOGLE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, []);

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0) {
        data[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("actu", JSON.stringify([...new Set(json)]));
    setActu([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_GOOGLE_ACTU)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = itemData.map((el) => (
    <section className="landing" onDragStart={handleDragStart}>
      <div className={el.src} />
      <div className="landing_description">
        <h3>{el.title.toUpperCase()}</h3>
        <p>{el.text}</p>
        <Link to={el.lien}>
          <button type="button" className="button_style">
            {el.button.toUpperCase()}
          </button>
        </Link>
      </div>
    </section>
  ));

  return (
    <main className="flex-col align-center justify-center">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <AliceCarousel
        mouseTracking
        items={items}
        infinite
        disableButtonsControls
        autoPlay
        autoPlayInterval={5000}
        loop
      />
      <section className="welcome">
        <img
          src={logo}
          alt="logo Rouge Bakoly B et K à coté"
          className="welcome_logo"
        />
        <div>
          <h1>La compagnie Rouge Bakoly</h1>
          <p>
            La démarche de travail de la compagnie ROUGE BAKOLY se nourrit d’une
            mise en réseau partenariale et de rencontres pluridisciplinaires au
            service d’un discours artistique qui traite de notre société
            contemporaine.
          </p>
          <Link to="/Compagnie">
            <button type="button" className="button_style">
              EN SAVOIR PLUS
            </button>
          </Link>
        </div>
      </section>
      {lastCreation && (
        <section className="derniere_creation">
          <div>
            <img src={lastCreation.image} alt="" />
            <article>
              <h2>NOTRE DERNIÈRE CRÉATION</h2>

              <small>{lastCreation.type_spectacle}</small>
              <h3>{lastCreation.nom}</h3>
              <p>
                {lastCreation.description &&
                  lastCreation.description.substring(0, 260)}
                ...
              </p>
              <Link to="/actions/Spectacles">
                <button type="button" className="button_style2">
                  VOIR TOUS NOS SPECTACLES
                </button>
              </Link>
            </article>
          </div>
        </section>
      )}
      <section className="actualite">
        <h3>NOTRE ACTUALITÉ</h3>

        {actu.length > 0 ? (
          <div className="actualite_spectacle">
            <img
              src={actu[number].photo}
              alt={actu[number].titre}
              className="actualite_img"
            />
            <h3 className="actualite_date">{actu[number].date}</h3>
            <article>
              <h4>{actu[number].titre}</h4>

              <p>
                {actu[number].texte.split("//").map((el) => (
                  <span> {el} </span>
                ))}
              </p>
            </article>
            <div className="buttons_container">
              {number !== 0 ? (
                <button type="button" onClick={() => setNumber(number - 1)}>
                  Précédent
                </button>
              ) : (
                <button type="button" className="shadow">
                  Précédent
                </button>
              )}
              {number < actu.length - 1 ? (
                <button type="button" onClick={() => setNumber(number + 1)}>
                  Suivant
                </button>
              ) : (
                <button type="button" className="shadow">
                  Suivant
                </button>
              )}
            </div>
          </div>
        ) : null}
        {actu.length > 0 && (
          <div className="newsletter">
            <h4>Avez-vous lu notre dernière newsletter ?</h4>
            <a href={actu[0].newsletter} target="_blank" rel="noreferrer">
              <button type="button" className="button_style">
                LIRE LA NEWSLETTER
              </button>
            </a>
          </div>
        )}
        <div className="reseaux_sociaux">
          <h3>Suivez nous sur les réseaux sociaux pour ne rien manquer !</h3>
          <div>
            <a
              href="https://www.facebook.com/rougebakoly"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Logo Facebook" />
            </a>
            <a
              href="https://www.instagram.com/rougebakoly/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Logo Instagram" />
            </a>
            <a
              href="https://www.youtube.com/@rougebakoly1165"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="Logo Youtube" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={spotify} alt="Logo Spotify" />
            </a>
          </div>
        </div>
      </section>
      <section className="aussis">
        <h2>
          Rouge Bakoly, <br /> c'est aussi
        </h2>
        <div className="aussi_container">
          {aussiData.map((el) => (
            <div className="aussi">
              <article>
                <h3>{el.title}</h3>
                <p>{el.text}</p>
                <Link to={el.lien}>
                  <button type="button" className="button_style">
                    Découvrir
                  </button>
                </Link>
              </article>
              <img src={el.src} alt={el.alt} />
            </div>
          ))}
        </div>
      </section>

      <div className="newsletter soutenir">
        <h4>Vous souhaitez soutenir la compagnie ROUGE BAKOLY ?</h4>
        <a
          href="https://www.helloasso.com/associations/rouge-bakoly"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="button_style">
            DÉCOUVRIR COMMENT
          </button>
        </a>
      </div>
    </main>
  );
}
