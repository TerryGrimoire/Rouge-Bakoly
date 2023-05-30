/* eslint-disable import/no-unresolved */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import itemData from "../data/itemData";
import aussiData from "../data/aussiData";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import spotify from "../assets/spotify.svg";
import youtube from "../assets/youtube.svg";
import random from "../assets/random.jpg";
import creation from "../assets/last.jpg";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = itemData.map((el) => (
    <section className="landing" onDragStart={handleDragStart}>
      <div className={el.src} />
      <div className="landing_description">
        <h3>{el.title.toUpperCase()}</h3>
        <p>{el.text}</p>
        <button type="button" className="button_style">
          {el.button.toUpperCase()}
        </button>
      </div>
    </section>
  ));
  return (
    <main className="flex-col align-center justify-center">
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
        <img
          src={logo}
          alt="logo Rouge Bakoly B et K à coté"
          className="welcome_logo"
        />
        <div>
          <h1>La compagnie Rouge Bakoly</h1>
          <p>
            Ut eleifend, massa a rutrum tincidunt, justo tellus sollicitudin
            leo, nec maximus enim erat a ex. Aenean rutrum dignissim convallis.
            Pellentesque sem dolor, hendrerit sit amet porta non, sollicitudin
            ut quam.
          </p>
          <button type="button" className="button_style">
            EN SAVOIR PLUS
          </button>
        </div>
      </section>
      <section className="derniere_creation">
        <div>
          <img src={creation} alt="" />
          <article>
            <h2>NOTRE DERNIÈRE CRÉATION</h2>

            <small>Type de spectacle</small>
            <h3>NOM DU SPECTACLE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nisi odio, sapiente iusto numquam optio sunt, placeat doloribus
              odit nemo voluptas quisquam accusamus est quidem repudiandae
              facere quia, ipsam quae.
            </p>
            <Link to="/actions/Spectacles">
              <button type="button" className="button_style2">
                VOIR TOUS NOS SPECTACLES
              </button>
            </Link>
          </article>
        </div>
      </section>
      <section className="actualite">
        <h3>NOTRE ACTUALITÉ</h3>

        <div className="actualite_spectacle">
          <img src={random} alt="" className="actualite_img" />
          <h2 className="actualite_date">JUIL 08</h2>
          <article>
            <h4>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nisi odio, sapiente iusto numquam optio sunt, placeat doloribus
              odit nemo voluptas Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Autem nisi odio, sapiente iusto numquam optio
              sunt, placeat doloribus odit nemo voluptas quisquam accusamus est
              quidem repudiandae facere quia, ipsam quae.
            </p>
          </article>
          <div className="buttons_container">
            <button type="button">Précédent</button>
            <button type="button">Suivant</button>
          </div>
        </div>
        <div className="newsletter">
          <h4>Avez-vous lu notre dernière newsletter ?</h4>
          <button type="button" className="button_style">
            LIRE LA NEWSLETTER
          </button>
        </div>
        <div className="reseaux_sociaux">
          <h3>Suivez nous sur les réseaux sociaux pour ne rien manquer !</h3>
          <div>
            <a href="/">
              <img src={facebook} alt="Logo Facebook" />
            </a>
            <a href="/">
              <img src={instagram} alt="Logo Instagram" />
            </a>
            <a href="/">
              <img src={youtube} alt="Logo Youtube" />
            </a>
            <a href="/">
              <img src={spotify} alt="Logo Spotify" />
            </a>
          </div>
        </div>
      </section>
      <section className="aussis">
        <h2>
          Rouge Bakoly, <br /> c'est aussi
        </h2>
        <div className="aussi_container">
          {aussiData.map((el) => (
            <div className="aussi">
              <article>
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

      <div className="newsletter soutenir">
        <h4>Vous souhaitez soutenir la compagnie ROUGE BAKOLY ?</h4>
        <button type="button" className="button_style">
          DÉCOUVRIR COMMENT
        </button>
      </div>
    </main>
  );
}
