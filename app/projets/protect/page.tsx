import "../../pageInfo.css";

export default function protectPage() {
  return (
    <div className="holder">
      <div className="ml-10 mr-8 xl:ml-20 xl:mr-14 lg:ml-14 mr-10">
        <h1 className="blueText text-5xl flex pb-5 lg:text-7xl xl:text-8xl xl:mb-8">
          <p className="m-auto">Protect</p>
        </h1>
        <h1 className="xl:text-2xl lg:text-xl text-md justify-center flex mb-10">
          <p className="m-auto text-center mx-10 xl:mx-20 ">
            Ce jeu avait pour but d'implémenter les controller cross-platform.
            C'est-à-dire, pouvoir jouer en utilisant le clavier/souris ou la
            manette.
          </p>
        </h1>

        <div className="flex flex-col mt-20">
          <h1 className="flex title blueText pl-8 text-3xl xl:text-5xl lg:text-4xl mb-8">
            [
            <p className="text-white m-auto text-center text-xl xl:text-3xl lg:text-xl px-2 xl:px-4">
              Description
            </p>
            ]
          </h1>

          <p className="mx-10 text-sm mb-5 xl:mx-20 xl:text-lg lg:text-md lg:mx-16">
            <span>Protect</span> est un jeu de simulation dans l'espace dans
            lequel il faut esquiver les astéroïdes en pilotant un vaisseau.
            <br />
            <br />
            J'ai voulu ajouter une certaine difficulté dans la physique du jeu
            en appliquant une forte inertie au vaisseau.
            <br />
            <br />
            Le jeu propose <span> deux modes</span>. Le premier est le mode{" "}
            <span>Survival</span> dans lequel, comme son nom l'indique, il faut
            survivre le plus longtemps possible sans mourir.
            <br />
            <br />
            Le second est le mode <span>Endless</span>. Ce mode n'a pas de fin
            et fonctionne sous forme de vague. Plus on détruit d'astéroïdes,
            plus on gagne d'argent, qui nous permettra d'améliorer nos armes.
            <br />
            <br />
            J'ai ensuite ajouté le système d'<span>Input</span> pour pouvoir
            changer les touches pour jouer, mais aussi pour pouvoir changer
            entre manettes ou clavier-souris.
            <br />
            <br />
            Ce projet a été fait en environ <span>1 mois et demi</span> sur{" "}
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

          <div className="mx-10 text-sm mb-5 xl:mx-20 xl:text-lg lg:text-md lg:mx-16">
            <p className="text-md xl:text-xl lg:text-lg">
              Ce jeu m'a permis d'approfondir le{" "}
              <span>système de sauvegarde</span> ou la création de{" "}
              <span>prefab</span>.
              <br />
              <br />
              J'ai aussi pu apprendre utiliser le cross-platform controller.
              <br />
              <br />
              J'ai appris la gestion de plusieurs <span>controller</span>{" "}
              (manette et clavier), la <span>modification</span> de nos touches
              et leur <span>affichage dans un menu</span>.
            </p>
          </div>

          <button className="btn m-auto mt-10 px-5 xl:px-10">
            <a
              className="text-center m-auto text-lg xl:text-2xl lg:text-xl"
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
