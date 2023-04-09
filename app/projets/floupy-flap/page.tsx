import "../../pageInfo.css";

export default function floupyFlap() {
  return (
    <div className="holder">
      <div className="ml-10 mr-8 xl:ml-20 xl:mr-14 lg:ml-14 mr-10">
        <h1 className="blueText text-5xl flex pb-5 lg:text-7xl xl:text-8xl xl:mb-8">
          <p className="m-auto">Floupy Flap</p>
        </h1>
        <h1 className="xl:text-2xl lg:text-xl text-md justify-center flex mb-10">
          <p className="m-auto text-center mx-10 xl:mx-20">
            Voici mon premier jeu. Il avait pour but de m'entraîner à faire un
            prototype de jeu rapide et fonctionnel.
          </p>
        </h1>

        <div className="flex flex-col mt-20">
          <h1 className="flex title blueText pl-8 text-3xl xl:text-5xl lg:text-4xl mb-8">
            [
            <p className="text-white m-auto text-center text-xl xl:text-3xl px-2 xl:px-4">
              Description
            </p>
            ]
          </h1>
          <p className="mx-10 text-sm mb-5 xl:mx-20 xl:text-lg lg:text-md lg:mx-16">
            <span>Floupy Flap</span> est un Flappy bird like dont le but est de
            parcourir la plus grande distance en esquivant des tuyaux.
            <br />
            <br />
            Il y a deux modes de jeux ; un mode sans fin où le but est de faire
            le plus grand score et un mode avec des niveaux, dont la difficulté
            augment au fur et à mesure.
            <br />
            Un système d'économie a aussi été implémenté. Des pièces peuvent
            être gagnées en jouant, permettant, dans le shop, d'acheter
            différents skins.
            <br />
            <br />
            Ce projet a été fait en <span>2 semaines et demie</span> sur{" "}
            <span>Unity</span>.
          </p>
        </div>

        <div className="flex flex-col mt-20">
          <h1 className="flex title blueText pl-8 text-3xl xl:text-5xl lg:text-4xl mb-8">
            [
            <p className="text-white m-auto text-center text-xl xl:text-3xl lg:text-xl px-2 xl:px-4">
              Apport
            </p>
            ]
          </h1>

          <div className="mx-10 text-sm xl:mx-20 xl:text-lg lg:text-md lg:mx-16 mb-5">
            <p className="text-md xl:text-xl lg:text-lg">
              Grâce à ce jeu, j'ai pu apprendre différentes choses sur Unity
              comme :
            </p>
            <li>
              La création de fichiers de{" "}
              <span className="blueText">sauvegarde</span> avec l'utilisation du{" "}
              <span className="blueText">BinaryFormatter</span>.
            </li>
            <li>
              La création de <span>skins</span> achetables et d'un inventaire.
            </li>
            <li>
              L'implémentation de <span>niveaux</span> avec des difficultés
              croissantes.
            </li>
          </div>

          <button className="btn m-auto mt-10 px-5 xl:px-10">
            <a
              className="text-center m-auto text-lg xl:text-2xl lg:text-xl"
              target={"_blank"}
              href="https://minitsonga.itch.io/floupy-flap"
            >
              Jouer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
