import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import itemData from "../data/itemData";
import aussiData from "../data/aussiData";
import logo from "../assets/logo.png";
import random from "../assets/random.jpg";

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
      <section className="welcome">
        <img src={logo} alt="logo Rouge Bakoly B et K à coté" />
        <div>
          <h1>Bienvenue chez Rouge Bakoly</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            consequatur fuga officia architecto illo earum cum alias incidunt
            sed? Illum iste obcaecati error nostrum numquam facilis! Recusandae
            exercitationem id dolores.
          </p>
          <button type="button" className="button_style">
            Découvrir la compagnie
          </button>
        </div>
      </section>
      <section className="derniere_creation">
        <h2>Notre dernière création</h2>
        <div>
          <img src={random} alt="" />
          <div>
            <h3>Nom du spectacle</h3>
            <small>Type de spectacle</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nisi odio, sapiente iusto numquam optio sunt, placeat doloribus
              odit nemo voluptas quisquam accusamus est quidem repudiandae
              facere quia, ipsam quae.
            </p>
            <button type="button" className="button_style">
              Voir tous nos spectacles
            </button>
          </div>
        </div>
      </section>
      <section className="actualite grey">
        <h2>Notre actualité</h2>
        <div>
          <div className="white actualite_spectacle">
            <img src={random} alt="" />
            <article>
              <h3>Nom du spectacle</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                nisi odio, sapiente iusto numquam optio sunt, placeat doloribus
                odit nemo voluptas Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Autem nisi odio, sapiente iusto numquam optio
                sunt, placeat doloribus odit nemo voluptas quisquam accusamus
                est quidem repudiandae facere quia, ipsam quae.
              </p>
            </article>
            <div className="buttons_container">
              <button type="button">{`< Précédent`}</button>
              <button type="button">{`Suivant >`}</button>
            </div>
          </div>
          <div className="newsletter">
            <h3>La newsletter</h3>
            <button type="button" className="button_style">
              Télécharger
            </button>
          </div>
        </div>
        <div className="reseaux_sociaux">
          <h3>Suivez nous sur les réseaux sociaux pour ne rien manquer :</h3>
          <div>
            <img src={random} alt="" />
            <img src={random} alt="" />
            <img src={random} alt="" />
          </div>
        </div>
      </section>
      <section className="aussis">
        <h2>Rouge Bakoly c'est aussi</h2>
        <div className="aussi_container">
          {aussiData.map((el) => (
            <div className="aussi">
              <article className="darkGrey">
                <h3>{el.title}</h3>
                <p>{el.text}</p>
                <button type="button" className="button_style">
                  Découvrir
                </button>
              </article>
              <img src={el.src} alt={el.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="soutenir grey">
        <h3>Lorem ipsum dolor sit amet</h3>
        <button type="button" className="button_style">
          Nous soutenir
        </button>
      </section>
    </main>
  );
}
