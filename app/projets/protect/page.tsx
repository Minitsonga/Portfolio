import "../../pageInfo.css";

export default function protectPage() {
  return (
    <div className="holder">
      <div className="ml-20 mr-14">
        <h1 className="blueText text-8xl flex pb-10 mb-8">
          <p className="m-auto">Protect</p>
        </h1>
        <h1 className="text-2xl justify-center flex mb-10">
          <p className="m-auto text-center mx-20 ">
            Ce jeu avait pour but d'implémentater les controller cross-platform.
            C'est a dire, pouvoir jouer en utilisant le clavier/souris ou la
            manette.
          </p>
        </h1>

        <div className="flex flex-col mt-20">
          <h1 className="flex title blueText pl-8 text-5xl mb-8">
            [<p className="text-white m-auto text-center text-3xl px-5">Description</p>
            ]
          </h1>

          <p className="mx-20 text-lg mb-5">
            <span>Protect</span> est un jeu de simulation dans l'espace dans
            lequel il faut esquiver les astéroïdes en pilotant un vaisseau.
            <br />
            J'ai voulu ajouter une certaine difficulté dans la physique du jeu
            en appliquant une forte inertie au vaisseau.
            <br />
            <br />
            Le jeu propose <span> deux modes</span>. Le premier est le mode{" "}
            <span>Survival</span> dans lequel, comme son nom l'indique, il faut
            survivre le plus longtemps possible sans mourrir. <br />
            Le second est le mode <span>Endless</span>. Ce mode n'a pas de fin
            et fonctionne sous forme de vague Plus l'on detruit d'astéroïdes,
            plus l'on gagne d'argent qui nous permettra d'ameliorer nos armes.
            <br />
            <br />
            J'ai ensuite ajouter le système d'<span>Input</span> pour pouvoir
            changer les touches pour jouer mais aussi pour pouvoir changer entre
            manette ou clavier-souris.
            <br />
            <br />
            Ce projet a été fait en environ <span>1 mois et demi</span> sur{" "}
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
              Ce jeu m'a permis d'approfondir le{" "}
              <span>système de sauvegarde</span> ou la création de{" "}
              <span>prefab</span>.
              <br />
              J'ai aussi pu apprendre utiliser le cross-platform controller.
              J'ai appris la gestion de plusieurs <span>controller</span>{" "}
              (manette et clavier), la <span>modification</span> de nos touches
              et leur
              <span>affichage dans un menu</span>.
            </p>
          </div>

          <button className="btn m-auto mt-10 px-10">
            <a
              className="text-center m-auto text-2xl"
              target={"_blank"}
              href="https://minitsonga.itch.io/protect"
            >
              Jouer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
