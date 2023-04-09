"use client";

import "./pageInfo.css";
import Image from "next/image";

import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const mainSecAnim = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, scale: 0 },
};

const sectionVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.3 },
  },
  hidden: { opacity: 0, y: 100 },
};
const MainSection = () => {
  const control = useAnimation();

  return (
    <motion.div
      variants={mainSecAnim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      animate={control}
      className="content mainSection text-center mb-44"
    >
      <h1 className="blueText text-4xl 2xl:text-8xl xl:text-7xl lg:text-5xl mb-4">Julien Vandamme</h1>
      <p className="lg:pl-12 lg:pr-16  2xl:pl-20 2xl:pr-24 text-xl 2xl:text-5xl xl:text-4xl lg:text-2xl opacity-70 mb-5">
        Passioné par le développement de jeux vidéo et par le web
      </p>
      <p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl xl:px-32 xl:mx-32 lg:px-20 lg:mx-26">
        Étudiant en informatique. J'adore coder, créer des jeux, apprendre de
        nouvelles choses.
      </p>
      <button className="btn m-auto mt-8">
        <a
          className="text-center 2xl:text-3xl xl:text-2xl lg:text-xl text-md"
          href={"/CV_ALTERNANCE.pdf"}
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

  return (
    <motion.div
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      animate={control}
      id="about"
      className="content scroll-mt-72 sections mt-64 mb-72 p-y-24"
    >
      <div className="flex flex-col">
        <h1 className="flex title blueText pl-8 text-5xl mb-8">
          [
          <p className="text-white text-center text-xl xl:text-3xl 2xl:w-3/12 xl:w-4/12 lg:w-5/12 w-8/12 m-auto">
            About me
          </p>
          ]
        </h1>

        <div className="flex flex-col xl:flex-row">
          <p className="text-md pl-16 lg:pl-20 xl:ml-26 xl:pr-20 xl:w-2/3 xl:text-lg xl:mb-5">
            Salut ! Je m'appelle Julien Vandamme et je suis actuellement
            étudiant en informatique. Je suis passionné par les jeux vidéo
            depuis mes 12 ans et il y a 3 ans, je me suis intéressé au monde du
            web. J'ai créé plusieurs jeux et sites internet qui m'ont permis
            d'apprendre le <span>C# sur Unity</span> et <span>Node.js</span>,{" "}
            <span>Javascript</span>, <span>ReactJs</span>.
          </p>

          <div className="flex pl-10 xl:pr-20  m-auto">
            <Image
              className="meImg"
              src="/img/moi.jpg"
              width={250}
              height={200}
              alt="Me"
            ></Image>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const control = useAnimation();

  return (
    <motion.div
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      animate={control}
      id="projets"
      className="content scroll-mt-10 sections mt-64 mb-44"
    >
      <div className="flex w-full flex-col">
        <h1 className="flex title blueText pl-8 text-5xl mb-8">
          [
          <p className="text-white text-center text-xl xl:text-3xl 2xl:w-4/12 xl:w-4/12 lg:w-5/12 w-11/12 m-auto">
            Mes projets
          </p>
          ]
        </h1>

        <div className="m-auto pl-8 pt-5 w-4/5">
          <div className="grid grid-rows xl:grid-cols-3 grid-flow-row gap-x-4 gap-y-10">
            <a
              className="linkImg"
              href="/projets/floupy-flap"
            >
              <Image
                className="gridImg"
                src="/img/FloupyFlap.png"
                width={250}
                height={200}
                alt="floupyFlap"
              ></Image>
              <div className="grid-overlay"></div>
              <div className="grid-text">
                <h1 className="2xl:text-2xl xl:text-xl lg:text-lg font-medium pb-3">FloupyFlap</h1>
              </div>
            </a>

            <a
              className="linkImg"
              href="/projets/protect"
            >
              <Image
                className="gridImg"
                src="/img/Protect.png"
                width={250}
                height={200}
                alt="protect"
              ></Image>
              <div className="grid-overlay"></div>
              <div className="grid-text">
                <h1 className="2xl:text-2xl xl:text-xl lg:text-lg font-medium pb-3">Protect</h1>
              </div>
            </a>

            <a
              className="linkImg"
              href="/projets/fusycal"
            >
              <Image
                className="gridImg"
                src="/img/Fusycal.png"
                width={250}
                height={200}
                alt="fusycal"
              ></Image>
              <div className="grid-overlay"></div>
              <div className="grid-text">
                <h1 className="2xl:text-2xl xl:text-xl lg:text-lg font-medium pb-3">Fusycal</h1>
              </div>
            </a>

            <a className="linkImg" href="/projets/laexotv">
              <Image
                className="gridImg "
                src="/img/Laexo.png"
                width={250}
                height={200}
                alt="Laexo"
              ></Image>
              <div className="grid-overlay"></div>
              <div className="grid-text">
                <h1 className="2xl:text-2xl xl:text-xl lg:text-lg font-medium pb-3">Laexo.tv</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const control = useAnimation();

  return (
    <motion.div
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      animate={control}
      id="contact"
      className="content scroll-mt-64 sections mt-auto mt-64 mb-44"
    >
      <div className="flex w-full flex-col">
        <h1 className="flex title blueText pl-8 text-5xl mb-8">
          [
          <p className="text-white text-center text-xl xl:text-3xl 2xl:w-4/12 xl:w-4/12 lg:w-5/12 w-11/12 m-auto">
            Contact me
          </p>
          ]
        </h1>
        <div className="flex flex-col m-auto w-3/4">
          <p className="text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl opacity-80">
            Si vous voulez me contacter c'est juste ici !
          </p>
          <br />
          <p className="text-center text-md xl:text-lg 2xl:text-xl ">
            Je suis actuellement a la <span>recherche</span> d'une{" "}
            <span>alternance</span> de <span>24 mois</span> dans le <span>Game Development</span> pour septembre 2023
          </p>
          <button className="btn justify-center mt-24">
            <a
              className="text-center 2xl:text-2xl xl:text-xl lg:text-lg text-md"
              href={"mailto:julienmv02@gmail.com"}
            >
              Me contacter
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function PageInfo() {
  return (
    <div className="holder">
      <MainSection />

      <About />

      {/* <section id="jobs" className="content mt-14">
        <h1 className="flex title blueText pl-8 text-5xl mb-8">
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
    </div>
  );
}
