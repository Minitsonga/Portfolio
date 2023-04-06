import "../../pageInfo.css";

export default function floupyFlap() {
  return (
    <div className="holder">
    <div className="ml-20 mr-14">
      <h1 className="blueText text-8xl flex pb-10 mb-8">
        <p className="m-auto">Floupy Flap</p>
      </h1>
      <h1 className="text-2xl justify-center flex mb-10">
        <p className="m-auto text-center mx-20">
          Voici mon premier jeu. Il avait pour but de m'entrainer à faire un
          prototype de jeu rapide et fonctionnel
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
            Ce projet a été fait en <span>2 semaines et demi</span> sur{" "}
            <span>Unity</span>.
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
              Grâce à ce jeu, j'ai pu apprendre différentes choses sur Unity
              comme :
            </p>
            <li>
              La création de fichier de{" "}
              <span className="blueText">sauvegarde</span> avec l'utilisation du{" "}
              <span className="blueText">BinaryFormatter</span>.
            </li>
            <li>La création de skins achetables et d'un inventaire.</li>
            <li>
              L'implémentation de niveaux avec des difficultés croissantes.
            </li>
          </div>

          <button className="btn m-auto mt-10 px-10">
            <a
              className="text-center m-auto text-2xl"
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
