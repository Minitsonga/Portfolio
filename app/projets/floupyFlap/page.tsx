import "../../pageInfo.css";

export default function floupyFlap() {
  return (
    <div className="pl-24 pr-52">
      <h1 className="blueText text-8xl flex pb-10 mb-8">
        <p className="m-auto">FloupyFlap</p>
      </h1>
      <h1 className="text-3xl flex mb-10">
        <p className="m-auto">Voici mon premier projet complet</p>
      </h1>

      <div className="flex flex-col mt-20">
        <h1 className="flex title blueText pl-8 text-6xl mb-8">
          [<p className="text-white text-3xl my-auto px-5">Description</p>]
        </h1>

        <p className="ml-26 pr-24 pl-36 text-xl tracking-wider m-auto mb-5">
          FloupyFlap est un Flappy bird like dont le but est de parcourir la
          plus grande distance en esquivant des tuyaux.
          <br />
          <br />
          Il y a deux modes de jeux ; un mode sans fin où le but est de faire le
          plus grand score et un mode avec des niveaux, dont la difficulté
          augment au fur et à mesure.
          <br />
          Un système d'économie a aussi été implémenté. Des pièces peuvent être
          gagnées en jouant, permettant, dans le shop, d'acheter différents
          skins.
          <br />
          <br />
          Ce projet a été fait en <span>2 semaines et demi</span> sur <span>Unity</span>.
        </p>
      </div>

      <div className="flex flex-col mt-20">
        <h1 className="flex title blueText pl-8 text-6xl mb-8">
          [<p className="text-white text-3xl tracking-wider my-auto px-5">Apport</p>]
        </h1>

        <p className="ml-26 pr-24 pl-36 text-xl m-auto mb-5">
          Grâce à ce jeux j'ai pu apprendre differente chose sur Unity
        </p>
      </div>
    </div>
  );
}
