import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";

function Tarifs({ helmet }) {
  const { id, actions } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const actionsFiltered = allActions.filter(
    (act) => act.nom && act.type.includes(actions)
  );

  return (
    <div className="actions">
      <Helmet>
        <title>
          {helmet.title} | {id}{" "}
        </title>
        <link rel="canonical" href={`${helmet.href}/Tarifs`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main>
        <section className="actions_container">
          {actionsFiltered
            .filter((act) => act.nom && act.id.includes(id))
            .map((el) => (
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
            ))}
        </section>
      </main>
    </div>
  );
}

export default Tarifs;
