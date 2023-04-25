import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import itemData from "../data/itemData";
import logo from "../assets/logo.png";

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
      <section className="flex align-center justify-center">
        <img src={logo} alt="logo Rouge Bakoly B et K à coté" />
        <div>
          <h1>Bienvenue chez Rouge Bakoly</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            consequatur fuga officia architecto illo earum cum alias incidunt
            sed? Illum iste obcaecati error nostrum numquam facilis! Recusandae
            exercitationem id dolores.
          </p>
          <button type="button" className="button-style">
            Découvrir la compagnie
          </button>
        </div>
      </section>
    </main>
  );
}
