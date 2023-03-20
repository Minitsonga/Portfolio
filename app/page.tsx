import "./pageInfo.css";
import Image from "next/image";


export default function PageInfo() {
  return (
    <main className="px-12 md:px-28 xl:px-32 max-2xl:px-0">
      <section className="content text-center mb-28">
        <h1 className="blueText text-8xl mb-4">Julien Vandamme</h1>
        <p className="pl-20 pr-24 text-5xl opacity-70 mb-5">
          Passioné par le développement de jeux vidéo et par le web
        </p>
        <p className="text-2xl px-40 mx-32">
          Étudiant en informatique. J'adore coder, créer des jeux,
          apprendre de nouvelles choses.
        </p>
        <button className="btn m-auto mt-8">
          <a className="text-center text-xl" href="/resume.pdf" target="_blank">
            Mon CV
          </a>
        </button>
      </section>

      <section id="about" className="content mt-auto mb-44">
        <h1 className="flex title blueText pl-8 text-6xl mb-8">
          [ <p className="text-white text-4xl m-auto px-5">About me</p>]
        </h1>

        <div className="flex">
          <p className="ml-26 pr-20 pl-20 w-2/3 text-md mb-5">
            Salut ! Je m'appelle Julien Vandamme et je suis actuellement étudiant
            en informatique. Je suis passionné par les jeux vidéo depuis mes 12
            ans et il y a 3 ans, je me suis intéressé au monde du web. J'ai créé
            plusieurs jeux et sites internet qui m'ont permis d'apprendre le{" "}
            <span>C# sur Unity</span> et <span>Node.js</span>,{" "}
            <span>Javascript</span>, <span>ReactJs</span>.
          </p>

          <div className="flex pr-20 m-auto">
            <Image
              className="meImg "
              src="/../public/img/moi.jpg"
              width={250}
              height={200}
              alt="Me"
            ></Image>
          </div>
        </div>
      </section>

      {/* <section id="jobs" className="content mt-14">
        <h1 className="flex title blueText pl-8 text-6xl mb-8">
          [ <p className="text-white text-4xl m-auto px-5">Experiences</p>]
        </h1>

        <div className="flex">
          <p className="ml-26 pr-20 pl-20 w-2/3 text-md mb-5">
            Salut ! Je m'appelle Julie Vandamme et je suis actuellement étudiant
            en informatique. Je suis passionné par les jeux vidéo depuis mes 12
            ans et il y a 3 ans, je me suis intéressé au monde du web. J'ai créé
            plusieurs jeux et sites internet qui m'ont permis d'apprendre le{" "}
            <span>C# sur Unity</span> et <span>Node.js</span>,{" "}
            <span>Javascript</span>, <span>ReactJs</span>.
          </p>

          <div className="flex pr-20 m-auto">
            <Image
              className="meImg "
              src="/../public/moi.jpg"
              width={250}
              height={200}
              alt="Me"
            ></Image>
          </div>
        </div>
      </section> */}

      <section id="projets" className="content mt-auto mb-44">
        <h1 className="flex title blueText pl-8 text-6xl mb-8">
          [ <p className="text-white text-4xl m-auto px-5">Mes projets</p>]
        </h1>

        <div className="w-full">
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 ">
              <Image
                className="floupy"
                src="/../public/img/FloupyFlap.png"
                width={250}
                height={200}
                alt="floupyFlap"
              ></Image>
            </div>
            <div className="col-span-2">
              <Image
                className="protect"
                src="/../public/img/Protect.png"
                width={250}
                height={200}
                alt="protect"
              ></Image>
            </div>
            <div className="row-span-2 col-span-2">
              <Image
                className="fusycal"
                src="/../public/img/Fusycal.png"
                width={250}
                height={200}
                alt="fusycal"
              ></Image>
            </div>
            <div className="row-span-3">
              <Image
                className="gridImg "
                src="/../public/img/Laexo.png"
                width={250}
                height={200}
                alt="Laexo"
              ></Image>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
