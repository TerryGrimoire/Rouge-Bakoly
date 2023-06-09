import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
      const photos = [];
      const logos = [];
      const personnes = [];
      const roles = [];

      if (index > 0) {
        data2[0].forEach((key, j) => {
          if (key.startsWith("photo")) {
            photos.push(line[j]);
          }
          if (key.startsWith("logo")) {
            logos.push(line[j]);
          }
          if (key.startsWith("personne")) {
            personnes.push(line[j]);
          }
          if (key.startsWith("role")) {
            roles.push(line[j]);
          }
          obj = { ...obj, [key]: line[j] };

          obj = { ...obj, photos, logos, personnes, roles };
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

  const action = allActions.filter(
    (act) => act.type && act.type.includes(actions)
  )[id];

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
      {action ? (
        <main>
          <div className="top_bar">
            {parseInt(id, 10) !== 0 && (
              <Link to={`/actions/${actions}/${parseInt(id, 10) - 1}`}>
                Précédent
              </Link>
            )}
            <Link to={`/actions/${actions}`}> Revenir au sommaire </Link>
            {parseInt(id, 10) <
              allActions.filter((act) => act.type && act.type.includes(actions))
                .length -
                1 && (
              <Link to={`/actions/${actions}/${parseInt(id, 10) + 1}`}>
                {" "}
                Suivant{" "}
              </Link>
            )}
          </div>
          <section className="section_top">
            <img src={action.image} alt={action.nom} />
            <div className="text">
              <h1>{action.nom && action.nom.toUpperCase()}</h1>
              <p>{action.type_spectacle}</p>
              <p>{action.public}</p>
              {action.duree && action.duree !== "" && (
                <p>
                  <span>Durée :</span> {action.duree}
                </p>
              )}
            </div>
          </section>
          <section className="text_container">
            <p className="text description">{action.description}</p>
            <div className="bloc_culturel">
              <article className="text">
                <h3>L'action culturelle</h3>
                <p>{action.action_culturelle}</p>
              </article>
              <div className="text">
                <h3>L'équipe</h3>
                <div className="team">
                  <div>
                    {action.roles &&
                      action.roles
                        .filter((tap) => tap !== "")
                        .map((el) => <p>{el} :</p>)}
                  </div>
                  <div>
                    {action.personnes &&
                      action.personnes
                        .filter((tap) => tap !== "")
                        .map((el) => <p>{el}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <iframe src={action.video} frameBorder="0" title="video du projet" />
          <section className="galerie">
            <h3>GALERIE PHOTOS</h3>
            <div>
              <ResponsiveMasonry>
                <Masonry gutter="2rem">
                  {action.photos &&
                    action.photos.map((el) => <img src={el} alt="" />)}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </section>
          {action.en_cours && action.en_cours === "EN COURS" && (
            <div className="newsletter soutenir">
              <h4>Vous souhaitez programmer ce spectacle ?</h4>
              <button type="button" className="button_style">
                CONTACTEZ-NOUS
              </button>
            </div>
          )}
          {action.logos && action.logos.length > 0 && (
            <section className="soutien">
              <h4>Avec le soutien de</h4>
              <div className="logo_container">
                {action.logos
                  .filter((el) => el !== "")
                  .map((el) => (
                    <img src={el} alt="" />
                  ))}
              </div>
            </section>
          )}
        </main>
      ) : (
        <p className="middle">Chargement ...</p>
      )}
    </div>
  );
}

export default Tarifs;
