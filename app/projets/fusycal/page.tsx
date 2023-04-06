import "../../pageInfo.css";

export default function fusycalPage() {
  return (
    <div className="holder">
      <div className="ml-20 mr-14">
        <h1 className="blueText text-8xl flex pb-10 mb-8">
          <p className="m-auto">Fusycal</p>
        </h1>
        <h1 className="text-2xl justify-center flex mb-10">
          <p className="m-auto text-center mx-20">
            Ce jeu est le plus gros projet que j'ai pu finaliser. Je me suis
            inspirer de tous les jeux de carte connu.
          </p>
        </h1>

        <div className="flex flex-col mt-20">
          <h1 className="flex title blueText pl-8 text-5xl mb-8">
            [
            <p className="text-white m-auto text-center text-3xl px-5">
              Description
            </p>
            ]
          </h1>

          <p className="mx-20 text-lg mb-5">
            Fusycal est un jeu de carte avec des héros à améliorer, et plein de
            skin a collectionner.
            <br />
            <br />
            Les <span>skins</span> ont plusieurs niveaux de rareté : commun,
            rare, épic et légendaire. Il y a aussi des skins et héros "
            <span>Fusion</span>". Pour les avoir, il faudra fusionner certains
            skins ou héros ensemble.
            <br />
            <br />
            Dans la <span>campagne</span>, le but est de combattre et vaincre
            tous les ennemis et obtenir un skin exclusif pour chaque{" "}
            <span>chapitre</span> entièrement complété.
            <br />
            En combattant des ennemies, on obtient de l'<span>
              expérience
            </span>{" "}
            pour le héros que l'on joue, mais aussi de la <span>monnaie</span>.
            Cette monnaie vous permettra d'acheter{" "}
            <span>des packs de skins</span>.
            <br />
            <br />
            Ce projet a été fait en <span>3 mois</span> sur <span>Unity</span>.
          </p>
        </div>

        <div className="flex flex-col mt-20">
          <h1 className="flex title blueText pl-8 text-5xl mb-8">
            [
            <p className="text-white m-auto text-center text-3xl px-5">
              Apport
            </p>
            ]
          </h1>

          <div className="mx-20 text-lg mb-5">
            <p className="text-xl">
              Ce jeu m'a permis de m'entraîner sur beaucoup de choses comme :
            </p>
            <li>
              La <span className="blueText">sauvegarde</span>.
            </li>
            <li>
              La gestion de <span className="blueText">Scriptable Object</span>,
              avec leur utilisation et leur sauvegarde.
            </li>
            <li>
              La gestion de <span className="blueText">progression</span> des
              héros.
            </li>
            <li>
              <span className="blueText">Équilibrage</span> entre les différents
              héros et ennemis.
            </li>
          </div>

          <button className="btn m-auto mt-10 px-10">
            <a
              className="text-center m-auto text-2xl"
              href="https://minitsonga.itch.io/fusycal"
            >
              Jouer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
