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
  const action = actionsFiltered.filter((acti) => acti.id === id)[0];
  console.log(action);
  return (
    <div className="action">
      <Helmet>
        <title>
          {helmet.title} | {actions}
        </title>
        <link
          rel="canonical"
          href={`${helmet.href}/actions/${actions}/${id}`}
        />
        <meta name="description" content={helmet.description} />
      </Helmet>
      {action && (
        <main>
          <div className="top_bar">
            <Link to={`/actions/${actions}/${id - 1}`}>Précédent</Link>
            <Link to={`/actions/${actions}`}> Revenir au sommaire </Link>
            <Link to={`/actions/${actions}/${id + 1}`}> Suivant </Link>
          </div>
          <section className="section_top">
            <img src={action.image} alt={action.nom} />
            <div className="text">
              <h1>{action.nom.toUpperCase()}</h1>
              <p>{action.type_spectacle}</p>
              <p>{action.public}</p>
              {action.duree && action.duree !== "" && (
                <p>
                  <span>Durée :</span> {action.duree}
                </p>
              )}
            </div>
          </section>
          <section>
            <p>{action.description}</p>
          </section>
        </main>
      )}
    </div>
  );
}

export default Tarifs;
