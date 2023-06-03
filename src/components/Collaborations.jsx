/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import papa from "papaparse";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Collaborations() {
  const [collab, setCollab] = useState([]);

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
    setCollab([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_GOOGLE_COLLAB)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = collab.map((el) => (
    <Link to={`/Collaborations/${el.id}`} onDragStart={handleDragStart}>
      <div>
        <img src={el.photo} alt={el.nom} />
        <h3>{el.nom}</h3>
      </div>
    </Link>
  ));
  const responsive = {
    0: { items: 1 },
    900: { items: 4.2 },
  };
  return (
    <>
      {collab && collab.length > 0 ? (
        <section className="collaborations">
          <h2>COLLABORATIONS</h2>
          <p>
            Aliquam tincidunt vel nibh et suscipit. Integer laoreet egestas
            tempor. Donec vehicula eros a nisi consectetur hendrerit et at arcu.
          </p>
          <div>
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              disableButtonsControls
              disableDotsControls
              disableSlideInfo
            />
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Collaborations;
