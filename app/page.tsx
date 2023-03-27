"use client";

import "./pageInfo.css";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const mainSecAnim = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const sectionVariant = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, y: 100 },
};
const MainSection = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      // control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={mainSecAnim}
      initial="hidden"
      animate={control}
      className="content text-center mb-44"
    >
      <h1 className="blueText text-8xl mb-4">Julien Vandamme</h1>
      <p className="pl-20 pr-24 text-5xl opacity-70 mb-5">
        Passioné par le développement de jeux vidéo et par le web
      </p>
      <p className="text-2xl px-40 mx-32">
        Étudiant en informatique. J'adore coder, créer des jeux, apprendre de
        nouvelles choses.
      </p>
      <button className="btn m-auto mt-8">
        <a
          className="text-center text-xl"
          href={"/resume.pdf"}
          target={"_blank"}
        >
          Mon CV
        </a>
      </button>
    </motion.div>
  );
};

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      // control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
      id="about"
      className="content mt-44 mb-44 p-y-24"
    >
      <h1 className="flex title blueText pl-8 text-6xl mb-8">
        [ <p className="text-white text-3xl m-auto px-5">About me</p>]
      </h1>

      <div className="flex">
        <p className="ml-26 pr-20 pl-20 w-2/3 text-xl mb-5">
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
    </motion.div>
  );
};

const Projects = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      // control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
      id="projets"
      className="content mt-auto mb-44"
    >
      <h1 className="flex title blueText pl-8 text-6xl mb-8">
        [ <p className="text-white text-3xl m-auto px-5">Mes projets</p>]
      </h1>

      <div className="pl-28 pt-5 w-full">
        <div className="grid grid-cols-3 grid-flow-row gap-x-4 gap-y-10">
          <a
            className="linkImg"
            target={"_blank"}
            href="https://minitsonga.itch.io/floupy-flap"
          >
            <Image
              className="gridImg"
              src="/../public/img/FloupyFlap.png"
              width={250}
              height={200}
              alt="floupyFlap"
            ></Image>
            <div className="grid-overlay"></div>
            <div className="grid-text">
              <h1 className="text-xl font-medium tracking-wider pb-3">
                FloupyFlap
              </h1>
              <p className="tracking-wider">
                Évite les tuyaux et parcours la plus grande distance.
              </p>
            </div>
          </a>

          <a
            className="linkImg"
            target={"_blank"}
            href="https://minitsonga.itch.io/protect"
          >
            <Image
              className="gridImg"
              src="/../public/img/Protect.png"
              width={250}
              height={200}
              alt="protect"
            ></Image>
            <div className="grid-overlay"></div>
            <div className="grid-text">
              <h1 className="text-xl font-medium tracking-wider pb-3">
                Protect
              </h1>
              <p className="tracking-wider">
                Survie en esquivant les astéroïdes dans une simulation 2D dans
                l'espace.
              </p>
            </div>
          </a>

          <a
            className="linkImg"
            target={"_blank"}
            href="https://minitsonga.itch.io/fusycal"
          >
            <Image
              className="gridImg"
              src="/../public/img/Fusycal.png"
              width={250}
              height={200}
              alt="fusycal"
            ></Image>
            <div className="grid-overlay"></div>
            <div className="grid-text">
              <h1 className="text-xl font-medium tracking-wider pb-3">
                Fusycal
              </h1>
              <p className="tracking-wider">
                Collecte des héros dans un jeu de cartes fantaisie.
              </p>
            </div>
          </a>

          <a className="linkImg" target={"_blank"} href="https://laexo.tv">
            <Image
              className="gridImg "
              src="/../public/img/Laexo.png"
              width={250}
              height={200}
              alt="Laexo"
            ></Image>
            <div className="grid-overlay"></div>
            <div className="grid-text">
              <h1 className="text-xl font-medium tracking-wider pb-3">
                Laexo.tv
              </h1>{" "}
              <p className="tracking-wider">
                Suis les Lives et événements de ton streamer Twitch sur son site
                vitrine.
              </p>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      // control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
      id="contact"
      className="content mt-auto mb-44"
    >
      <h1 className="flex title blueText pl-8 text-6xl mb-8">
        [ <p className="text-white text-3xl m-auto px-5">Contact me</p>]
      </h1>
      <div className="flex flex-col m-auto w-full">
        <p className="text-center text-3xl opacity-70">
          Si vouc voulez me contacter c'est juste ici !
        </p>
        <br />
        <p className="text-center text-2xl ">
          Je suis actuellement a la <span>recherche</span> d'un{" "}
          <span>stage</span> de <span>2 a 4 mois</span>
        </p>
        <button className="btn m-auto mt-24">
          <a
            className="text-center text-2xl"
            href={"mailto:julienmv02@gmail.com"}
          >
            Salut
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default function PageInfo() {
  return (
    <main className="px-12 md:px-28 xl:px-32 max-2xl:px-0">
      <MainSection />

      <About />

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

      <Projects />
      <Contact />
    </main>
  );
}
