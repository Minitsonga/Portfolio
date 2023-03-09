import "./pageInfo.css";


export default function PageInfo() {
  return (
    <main className="px-12 md:px-28 xl:px-32 max-2xl:px-0">
      <section className="content text-center mb-28">
        <h1 className="blueText text-8xl mb-4">Julien Vandamme</h1>
        <p className="pl-20 pr-24 text-5xl opacity-70 mb-5">
          Passioné par le développement de jeux vidéo et par le web
        </p>
        <p className="text-2xl px-40 mx-32">
          Je suis étudiant en informatique. J'adore coder, créer des jeux,
          apprendre de nouvelles choses.
        </p>
         <button className="btn m-auto mt-8">
          <a className="text-center text-xl" href="/resume.pdf" target="_blank">
            Mon CV
          </a>
        </button>
      </section>

      <section id="about" className="content mt-14">
        <h1 className="flex title blueText pl-8 text-6xl mb-8">
          [ <p className="text-white text-4xl m-auto px-5">About me</p>]
        </h1>
        
        <p className="pl-20 pr-24 text-5xl opacity-70 mb-5">
          Passioné par le développement de jeux vidéo et par le web
        </p>
        <p className="text-2xl px-40 mx-32">
          Je suis étudiant en informatique. J'adore coder, créer des jeux,
          apprendre de nouvelles choses.
        </p>
      </section>
    </main>
  );
}
