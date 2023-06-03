import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import presentation from "../assets/presentation.jpg";
import cecile from "../assets/cecile.png";
import concert from "../assets/concert.jpg";
import gens from "../assets/residences_longues.jpg";

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
          <h1>LA COMPAGNIE</h1>
          <p>
            Aliquam tincidunt vel nibh et suscipit. Integer laoreet egestas
            tempor. Donec vehicula eros a nisi consectetur hendrerit et at arcu.
          </p>
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
            « Bakoly » est un mot malgache. Qu’on prononce BAKOULI avec un
            accent tonique sur le “ou”. Du coup le petit “i” ne s’entend presque
            pas. Bakoly pour certains c’est un bol. Pour d’autres une poupée.
            Qui ont en commun la porcelaine comme matière. Matière fragile,
            délicate. Cela nous convient. “Bako” tout seul signifie “joli”.
            Rouge Bakoly, ça demanderait encore plus d’attention, de précaution.
          </p>
          <div className="duo">
            <img src={presentation} alt="" className="presentation_img" />
            <article className="demarche">
              <p>
                La démarche de travail de la compagnie ROUGE BAKOLY se nourrit
                d’une mise en réseau partenariale et de rencontres artistiques
                pluridisciplinaires au service d’un discours artistique qui
                traite de notre société contemporaine.
              </p>
              <p>
                Son projet fondateur Chéri concentre-toi s’il vous plaît pose
                les bases du processus de création de la compagnie:
              </p>
              <p>
                - un ancrage social avec une observation de milieux et d’univers
                singuliers grâce à des partenaires dans le champ social ou le
                champ de la santé, en établissant avec eux des liens de
                confiance
              </p>
              <p>
                - une collecte de récit de vie, des transcriptions fidèles,
                anonymisées, confiée à une auteure locale ou internationale et
                transformées en paroles pour le théâtre
              </p>
              <p>
                - l’envie de créer un espace où des artistes de disciplines
                différentes peuvent venir se rencontrer, chercher ensemble s’ils
                le souhaitent, ou bien mettre leur pratique artistique au
                service d’une proposition commune.
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
              Tantôt metteuse en scène -Chéri concentre-toi s’il-vous-plaît, ou
              auteure de la trame de Zanfandmoun pièce confiée à des
              improvisateurs qu’elle met en scène ; tantôt interprète Saady Ma
              Chance, KaskasKaama, elle met aujourd’hui au cœur de son activité
              le développement et la professionnalisation du groupe de musique
              La Sépia pour lequel elle écrit des chansons qu’elle interprète
              avec une petite bande de musiciens. Elle déroule à la Réunion avec
              ce groupe, un concert intitulé Tapimandyan.
            </p>
            <p>
              Dans le prochain spectacle de la compagnie qui est en cours
              d’écriture, se mêleront théâtre, musique et cuisine. Actuellement
              en résidence en territoire scolaire, en tant que comédienne, elle
              travaille avec une jeune auteure et pâtissière professionnelle
              Loharano Mamy Rabenjamina. Cette phase d’écriture Abracadabra, je
              crée ce que je dis va prendre plusieurs formes créatives et
              participatives en 2023-2024 avant d’aboutir à une pièce pour une
              comédienne-chanteuse et deux percussionnistes.
            </p>
            <p>
              Parallèlement, elle se met au service du photographe Jean-Marc
              Grenier en tant que chargée de production pour son Rant dann ron :
              « Maloya la pa nou la fé ». L’exposition naîtra en novembre à
              l’Artothèque du Département de la Réunion.
            </p>
            <p>
              Cécile Fontaine a d’abord eu un long parcours universitaire et des
              expériences d’enseignement à l’étranger avant de choisir le
              Théâtre. Elle a effectué sa formation de comédienne au CRR auprès
              de Marion Coby puis elle est allée en Espagne, à Barcelone, dans
              une école internationale Estudis de Teatre pour un apprentissage
              du masque dans la lignée de celle de Jacques Lecoq.
            </p>
            <p>
              Avant de créer ROUGE BAKOLY elle a eu de nombreuses aventures
              théâtrales avec les compagnies réunionnaises (Théâtrenfance,
              Sakidi, Cyclones production, Baba sifon…), avec les Bambous, le
              Centre Dramatique National de l’Océan Indien, et le dernier
              spectacle de théâtre auquel elle a participé en tant que
              comédienne est la Conférence des Oiseaux avec le Centre Dramatique
              National de Colmar en Alsace.
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
                participation directe diversifiée, de bord de scène, ronnkozé,
                d’exposition photographique ou artisanales, ROUGE BAKOLY combat
                l’isolement, l’ignorance, les préjugés, les peurs, les
                inégalités. Elle tente de proposer des mises en valeur de toutes
                les initiatives qu’elle rencontre, dans la conscience qu’en face
                chacun est déjà riche d’une culture et d’expériences de vie. La
                compagnie propose au-delà du divertissement et de la
                consommation culturelle la possibilité de percevoir et d’activer
                la joie du faire ensemble.
              </p>
            </article>
            <img src={concert} alt="" />
          </div>
        </section>

        <section className="benevoles">
          <h2>ROUGE BAKOLY, SES BÉNÉVOLES</h2>
          <article>
            <p>Rouge Bakoly est une association loi 1901 qui a pour objet:</p>
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
              ponctuellement : qu’elles soient logistiques, organisationnelles,
              administrative ou dans le domaine de la communication.
            </p>
            <p>
              Elle a aussi mis en place une plateforme de dons pour tous ceux
              qui souhaiteraient contribuer à sa démarche financièrement.
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
