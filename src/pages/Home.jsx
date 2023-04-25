import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import itemData from "../data/itemData";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = itemData.map((el) => (
    <section className={`landing ${el.src}`} onDragStart={handleDragStart}>
      <div>
        <h2>{el.title}</h2>
        <p>{el.text}</p>
        <button type="button" className="button_style">
          {el.button}
        </button>
      </div>
    </section>
  ));
  return (
    <main className="flex-col">
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
      />
    </main>
  );
}
