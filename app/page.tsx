import "./pageInfo.css";

export default function PageInfo() {
  return (
    <main className="px-12 md:px-28 xl:px-32 max-2xl:px-0">
      <div className="content">
        <h1 className="blueText text-8xl mb-4">Julien Vandamme</h1>
        <p className="pl-16 text-5xl mb-8">
          <span className="opacity-70">
            Je suis etudiant en informatique et je veux devenir
          </span>
          <span className="blueText opacity-85"> développeur</span>
          <span className="opacity-70"> de jeux vidéo.</span>
        </p>
        <p className="text-xl pl-32 w-2/3">
          Je suis passionné d'informatique depuis mes 12 ans et
          particuliairement par le monde des jeux vidéo.
        </p>
      </div>
    </main>
  );
}
