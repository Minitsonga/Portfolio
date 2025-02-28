"use client";
import "../../css/pageInfo.css";
import Image from 'next/image';
import { useState } from "react";


const images = [
  { src: "/img/laexo/MainPage.png", alt: "Page principale du site Laexo" },
  { src: "/img/laexo/EventPage.png", alt: "Page d'un événement sur Laexo" },
  { src: "/img/laexo/PreviewEvents.png", alt: "Aperçu des événements" },
  { src: "/img/laexo/AdminLogin.png", alt: "Connexion administrateur" },
  { src: "/img/laexo/Admin_EventCreator.png", alt: "Création d'un événement par l'administrateur" },
  { src: "/img/laexo/ModifyPlaning.png", alt: "Modification du planning" },
  { src: "/img/laexo/EventOptions.png", alt: "Options des événements" },
  { src: "/img/laexo/EventsModifierOrDelete.png", alt: "Modification ou suppression d'événements" },
  { src: "/img/laexo/ModifyEvents_Part1.png", alt: "Modification des événements - Partie 1" },
  { src: "/img/laexo/ModifyEvents_Part2.png", alt: "Modification des événements - Partie 2" },
];

export default function laexotvPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
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
            J'ai travaillé avec différentes <span>API</span> comme celle de <span>Twitch</span> ou encore celle de{" "}
            <a href="https://wizebot.tv" target={"_blank"}>
              <span className="blueLink"><u>WizeBot</u></span>
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
              Apports
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
              et les envies d'un client.
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
              href="https://github.com/Minitsonga/Site-Laexo"
            >
              Voir le code
            </a>
          </button>
        </div>

        <div className="flex flex-col mt-10">
          <section className="p-10 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Présentation du site Laexo</h2>
            <p className="text-center mb-8">
              Voici des images du site Laexo.tv pour vous donner un petit aperçu de ce projet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => setSelectedImage(img)}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                  <p className="mt-2 text-center text-sm opacity-80">{img.alt}</p>
                </div>
              ))}
            </div>
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                <div className="p-4 bg-gray-900 rounded-lg max-w-4xl">
                  <Image src={selectedImage.src} alt={selectedImage.alt} width={1000} height={600} className="rounded-lg" />
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
