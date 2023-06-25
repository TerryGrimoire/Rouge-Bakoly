import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";

import Collaboration from "../components/Collaborations";

import actionsData from "../data/actionsData";

function Tarifs({ helmet }) {
  const { actions } = useParams();
  const location = useLocation();
  const loc = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const actionMain = actionsData.filter((el) => el.id === actions)[0];
  const [allActions, setAllActions] = useState([]);

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
    sessionStorage.setItem("data", JSON.stringify([...new Set(json)]));
    setAllActions([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_GOOGLE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, []);

  return (
    <div className="actions">
      <Helmet>
        <title>
          {helmet.title} | {actions}{" "}
        </title>
        <link rel="canonical" href={`${helmet.href}/Tarifs`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <section className={actionMain.background}>
          <h2>{actionMain.title.toUpperCase()}</h2>
          <p>{actionMain.text}</p>
          <div className="veil" />
        </section>
        <section className="actions_container">
          {allActions.length > 0 ? (
            allActions
              .filter((act) => act.nom && act.type.includes(actions))
              .sort((a, b) => b.id - a.id)
              .map((el) => (
                <Link to={`/actions/${actions}/${el.nom.replaceAll(" ", "_")}`}>
                  <div className="action_petit">
                    <img src={el.image} alt={el.nom} />
                    <div className="action_petit_text">
                      <h4>{el.nom}</h4>
                      <p>{el.dates}</p>
                      {el.en_cours.includes("COURS") ? (
                        <p className="enCours">En cours</p>
                      ) : null}
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <p className="middle">Chargement ...</p>
          )}
        </section>
        {loc === "/actions/Residences" ? <Collaboration /> : null}
      </main>
    </div>
  );
}

export default Tarifs;
