import "../../pageInfo.css";

export default function laexotvPage() {
  return (
    <div className="holder">
      <div className="ml-10 mr-8 xl:ml-20 xl:mr-14 lg:ml-14 mr-10">
        <h1 className="blueText text-5xl flex pb-5 lg:text-7xl xl:text-8xl xl:mb-8">
          <p className="m-auto">Laexo.tv</p>
        </h1>
        <h1 className="xl:text-2xl lg:text-xl text-md justify-center flex mb-10">
          <p className="m-auto text-center mx-10 xl:mx-20 ">
            Ce projet est un site internet pour un streamer sur Twitch.
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
            Ce site a pour but de permettre a ces viewers (les personnes qui le
            regarde), d'être au courant des actualités du streamer.
            <br />
            <br />
            On peut, sur la page de garde, <span>regarder</span> le live sur
            Twitch sans avoir besoin d'aller sur la platforme de streaming.
            <br />
            <br />
            Il est aussi possible de voir le <span>planning</span> de stream de
            la semaine et aussi les <span>évènements</span> qu'il organise.
            <br />
            <br />
            Je me suis occupé aussi de la mise en ligne et de la configuration
            du <span>VPS</span> pour pouvoir publier le site et le rendre
            accessible par tous.
            <br />
            J'ai travaillé avec différentes <span>API</span> comme celle de
            <span>Twitch</span> ou encore celle de{" "}
            <a href="https://wizebot.tv" target={"_blank"}>
              <span className="blueLink">WizeBot</span>
            </a>
            <br />
            <br />
            Ce projet a été fait en environ <span>3 mois</span> avec{" "}
            <span>Node.js</span> et <span>express.js</span>.
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
              Ce projet m'a appris d'<span>approfondir</span> et d'
              <span>apprendre</span> des choses comme:
            </p>
            <li>
              Le suivi d'un <span className="blueText">cahier des charges</span>{" "}
              et les envies d'une personne.
            </li>
            <li>
              La gestion du <span className="blueText">back-end</span> et{" "}
              <span className="blueText">front-end</span>
            </li>
            <li>
              L'utilisation d'<span className="blueText">API</span> et de{" "}
              <span className="blueText">base de données</span>
            </li>
            <li>
              Suivre et s'approprier une{" "}
              <span className="blueText">direction artistique</span>.
            </li>
          </div>

          <button className="btn m-auto mt-10 px-5 xl:px-10">
            <a
              className="text-center m-auto text-lg xl:text-2xl lg:text-xl"
              target={"_blank"}
              href="https://laexo.tv"
            >
              Visiter
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
