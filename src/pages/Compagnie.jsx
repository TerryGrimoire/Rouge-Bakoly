import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import presentation from "../assets/presentation.jpg";
import cecile from "../assets/cecile.png";
import concert from "../assets/biblio_territoires_ephemeres.jpg";
import gens from "../assets/gradins.jpg";

function Services({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Compagnie </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="compagnie">
        <section className="bgA compagniebg">
          <h1>ROUGE BAKOLY</h1>
          <p>Rouv lo zyé. Rouv lo kèr. Mèt ansanm.</p>
          <div className="veil" />
        </section>
        <section className="poem">
          <p>
            Rouge est la couleur du sang <br /> Rouge est la couleur de la
            douleur <br />
            Rouge est la couleur de la violence <br /> Rouge est la couleur du
            danger <br />
            Rouge est la couleur de la honte <br /> Rouge est la couleur de la
            jalousie <br />
            Rouge est la couleur des reproches <br /> Rouge est la couleur des
            ressentiments
          </p>
          <p>— Louise Bourgeois, Carnets intimes</p>
        </section>
        <section className="presentation">
          <h2>PRÉSENTATION</h2>
          <p className="definition">
            *"Bakoly" est un mot malgache. Qu’on prononce BAKOULI avec un accent
            tonique sur le "ou". Du coup le petit "i" ne s’entend presque pas.
            Bakoly pour certains c’est un bol. Pour d’autres une poupée. Qui ont
            en commun la porcelaine comme matière. Matière fragile, délicate.
            Cela nous convient. "Bako" tout seul signifie "joli". Rouge Bakoly,
            ça demanderait encore plus d’attention, de précaution.
          </p>
          <div className="duo">
            <img src={presentation} alt="" className="presentation_img" />
            <article className="demarche">
              <p>
                La démarche de travail de la compagnie ROUGE BAKOLY se nourrit
                d'une <span>mise en réseau partenariale</span> et de{" "}
                <span>rencontres artistiques pluridisciplinaires</span> au
                service d'un discours qui traite de notre société contemporaine.
              </p>
              <p>
                Son projet fondateur Chéri concentre-toi s’il vous plaît a donné
                les ingrédients essentiels des processus de création de la
                compagnie :
              </p>
              <p>-un ancrage social fort</p>
              <p>
                -de la collecte de récit de vie, de l’écoute, de la
                transcription, de la transformation, de l’interprétation
              </p>
              <p>
                -l’envie de créer un espace où des artistes de disciplines
                différentes fabriquent ensemble et rencontre une diversité de
                publics
              </p>
            </article>
          </div>
        </section>
        <section className="cecile">
          <div className="duo_cecile">
            <article>
              <h3>CÉCILE FONTAINE</h3>
              <p>
                Au fil des projets Cécile Fontaine s’est affirmée comme
                responsable des projets artistiques et des actions culturelles
                de la compagnie ROUGE BAKOLY.
              </p>
            </article>
            <img src={cecile} alt="" />
          </div>
          <article className="article_cecile">
            <p>
              Cécile Fontaine est comédienne de formation (CRR, puis Estudis de
              Teatre à Barcelone), elle écrit et chante des chansons aussi,
              organise des collaborations variées avec des personnes issues du
              monde artistique et d’autres qui viennent d’ailleurs.
            </p>
            <p>
              C’est une inspiration importante que la rencontre avec l’Autre.
              Dans son travail artistique le récit authentique tient une bonne
              place.
            </p>
            <p>
              Elle est donc responsable des projets artistiques ET des actions
              culturelles qui sont indissociables de la démarche de création ou
              de diffusion des œuvres. Ces dernières années, elle cherche les
              façons les plus diverses de laisser la place à l’échange. La
              qualité du lien avec les publics est devenue le centre de son
              attention. Comment être au plus près des publics, dans un rapport
              engagé et sincère, pour savourer l’avant, le pendant,
              l’après-représentation. C’est dans cette veine qu’elle apprécie de
              porter à la scène les projets de Rouge Bakoly, dans une
              quasi-autonomie, avec la certitude d’être considérée par ses
              partenaires, à égalité. Être acteur d’un territoire nécessite la
              confiance, pour pouvoir dérouler des actions pertinentes, justes.
            </p>
            <p>
              Metteuse en scène de Chéri concentre-toi s’il-vous-plaît, de
              Zanfandmoun, interprète dans Saady Ma Chance, dans KaskasKaama,
              dans Tapimandyan de La Sépia, elle se met au service de la
              proposition du photographe Jean-Marc Grenier (Rant dann ron ) en
              tant que chargée de production.
            </p>
            <p>
              Elle fabrique et coordonne les résidences, les parcours, les
              processus de création et de diffusion de la compagnie depuis 2014.
            </p>
          </article>
        </section>
        <section className="ephemere">
          <h2>TERRITOIRES ÉPHÉMÈRES</h2>
          <div className="duo">
            <img src={gens} alt="" />
            <article>
              <p>
                Rouge Bakoly se développe essentiellement dans le Nord et l’Est
                de l’île, au contact d’associations et d’habitants. Pour la
                compagnie, la notion de territoire est intimement liée aux
                rencontres humaines qu’elle effectue. Aussi ses contours
                géographiques peuvent-ils aller de Saint-André à Ste Rose ou du
                Bas de la Rivière à Saint-François ou encore de la prison de
                Domenjod à la Bibliothèque Départementale sans que jamais ils ne
                soient limitants.
              </p>
              <p>
                Les individus rencontrés ayant eux-mêmes leur propre parcours
                dans le monde, plein de ce qu’ils sont, ils tissent avec la
                compagnie une toile qui les amène à se dire, à parler de leur
                savoir et de leur savoir-faire, à mettre en jeu leur créativité
                pour un partage culturel où le spectacle vivant n’est qu’un
                prétexte pour nouer des liens pleins d’humanité.
              </p>
            </article>
          </div>
          <div className="duo">
            <article>
              <p>
                En privilégiant l’accès gratuit à la démarche de création, par
                le biais d’ateliers de pratique, d’interconnaissance, de
                participation directe diversifiée, de bord de scène, de
                ronnkozé, d’exposition photographique ou artisanales, ROUGE
                BAKOLY combat l’isolement, l’ignorance, les préjugés, les peurs,
                les inégalités. Elle tente de proposer des mises en valeur de
                toutes les initiatives qu’elle rencontre sur le terrain, dans la
                conscience qu’en face, chacun est déjà riche d’une culture et
                d’expériences de vie. La compagnie propose au-delà du
                divertissement et de la consommation culturelle la possibilité
                de percevoir et d’activer la joie du faire ensemble.
              </p>
            </article>
            <img src={concert} alt="" />
          </div>
        </section>

        <section className="benevoles">
          <h2>ROUGE BAKOLY, ses bénévoles</h2>
          <article>
            <p>Rouge Bakoly est une association loi 1901 qui a pour objet :</p>
            <p>
              • De promouvoir la culture, l’art et l’artisanat sous toutes ses
              formes <br /> • De produire et de diffuser toute œuvre artistique
              (sans aucune limite dans l’utilisation des disciplines artistiques
              et des supports, ni aucune limite de territoires) <br /> • De
              réunir des artistes de disciplines artistiques différentes <br />{" "}
              • D’allier dimension sociétale et dimension culturelle dans sa
              recherche artistique <br /> • De développer des partenariats avec
              d’autres associations dans la mise en place de ses projets <br />{" "}
              • De rechercher toute forme de financement permettant la
              réalisation de ses objectifs
            </p>
            <p>
              L’association se compose de deux catégories de membres adhérents :
              les membres actifs et les membres de soutien.
            </p>
            <p>
              L’association est ouverte à toutes formes d’aides bénévoles
              ponctuellement : en logistique, organisation d’événements,
              administration, communication… Rejoignez-nous !
            </p>
            <p>
              Elle a aussi mis en place une plateforme de dons pour tous ceux
              qui souhaiteraient soutenir financièrement les projets de
              création.
            </p>
          </article>
        </section>
        <div className="newsletter soutenir">
          <h4>Vous souhaitez soutenir la compagnie ROUGE BAKOLY ?</h4>
          <a
            href="https://www.helloasso.com/associations/rouge-bakoly"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="button_style">
              DÉCOUVRIR COMMENT
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Services;
