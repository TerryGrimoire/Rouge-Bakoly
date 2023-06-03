import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";

import Collaboration from "../components/Collaborations";

import actionsData from "../data/actionsData";

function Tarifs({ helmet }) {
  const { actions } = useParams();

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
      if (index > 1) {
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
          <h1>{actionMain.title.toUpperCase()}</h1>
          <p>{actionMain.text}</p>
          <div className="veil" />
        </section>
        <section className="actions_container">
          {allActions
            .filter((act) => act.nom && act.type.includes(actions))
            .map((el, index) => (
              <Link to={`/actions/${actions}/${index}`}>
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
            ))}
        </section>
        <Collaboration />
      </main>
    </div>
  );
}

export default Tarifs;
