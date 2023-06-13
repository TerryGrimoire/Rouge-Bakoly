import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import papa from "papaparse";

import avatar from "../assets/avatar.webp";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

function Collaboration({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [collab, setCollab] = useState([]);
  const [collabs, setCollabs] = useState([]);
  const { id } = useParams();

  const prepareData2 = (data2) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line, index) => {
      if (index > 0) {
        data2[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem(
      "collaborations",
      JSON.stringify([...new Set(json)])
    );
    setCollab(
      [...new Set(json)].filter(
        (el) => parseInt(el.id, 10) === parseInt(id, 10)
      )[0]
    );
    setCollabs([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_GOOGLE_COLLAB)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, [id]);

  return (
    <div className="collab_container">
      <Helmet>
        <title>{helmet.title} | ARTISTE</title>
        <link rel="canonical" href={`${helmet.href}/Collaboration/${id}`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {collab.nom ? (
        <main className="collaboration">
          <div className="top_bar">
            {parseInt(id, 10) !== 1 && (
              <Link to={`/Collaborations/${parseInt(id, 10) - 1}`}>
                Précédent
              </Link>
            )}
            <Link to="/collaborations"> Revenir au sommaire </Link>
            {parseInt(id, 10) < collabs.length && (
              <Link to={`/collaborations/${parseInt(id, 10) + 1}`}>
                {" "}
                Suivant{" "}
              </Link>
            )}
          </div>
          <div className="collab_div">
            <h1>{collab.nom}</h1>
            <p>{collab.description}</p>
            <div>
              {collab.facebook && (
                <a href={collab.facebook} target="_blank" rel="noreferrer">
                  <img src={facebook} alt="logo de Facebook" />
                </a>
              )}
              {collab.instagram && (
                <a href={collab.instagram} target="_blank" rel="noreferrer">
                  <img src={instagram} alt="logo de instagram" />
                </a>
              )}
              {collab.youtube && (
                <a href={collab.youtube} target="_blank" rel="noreferrer">
                  <img src={youtube} alt="logo de youtube" />
                </a>
              )}
            </div>
          </div>
          <img
            src={collab.photo ? collab.photo : avatar}
            alt="portrait de l'artiste en question"
          />
          {collab.projet1 && (
            <div className="collab_div">
              <h2>Ses collaborations avec Rouge Bakoly : </h2>
              <ul>
                <li>{collab.projet1}</li>
                <li>{collab.projet2}</li>
                <li>{collab.projet3}</li>
                <li>{collab.projet4}</li>
                <li>{collab.projet5}</li>
              </ul>
            </div>
          )}
        </main>
      ) : (
        <p>Chargement de l'artiste</p>
      )}
    </div>
  );
}

export default Collaboration;
