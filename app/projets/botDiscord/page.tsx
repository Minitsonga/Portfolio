"use client";
import "../../css/pageInfo.css";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/img/botDiscord/1-HomePage1.png", alt: "Page d'accueil 1" },
  { src: "/img/botDiscord/2-HomePage2.png", alt: "Page d'accueil 2" },
  { src: "/img/botDiscord/3-HomePage3.png", alt: "Page d'accueil 3" },
  { src: "/img/botDiscord/4-HomePage4.png", alt: "Page d'accueil 4" },
  { src: "/img/botDiscord/5-ProfilePage.png", alt: "Page de profil" },
  { src: "/img/botDiscord/6-ServerManager.png", alt: "Gestion du serveur" },
  { src: "/img/botDiscord/7-EconomiePlugin.png", alt: "Plugin d'économie" },
  { src: "/img/botDiscord/8-OverviewServer.png", alt: "Aperçu du serveur" },
  {
    src: "/img/botDiscord/9-TemporaryChannelsPlugin.png",
    alt: "Plugin de canaux temporaires",
  },
];

export default function BotDiscordPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  return (
    <div className="holder">
      <div className="ml-10 mr-8 xl:ml-20 xl:mr-14 lg:ml-14 mr-10">
        <h1 className="blueText text-5xl flex pb-5 lg:text-7xl xl:text-8xl xl:mb-8">
          <p className="m-auto">Bot Discord</p>
        </h1>
        <h1 className="xl:text-2xl lg:text-xl text-md justify-center flex mb-10">
          <p className="m-auto text-center mx-10 xl:mx-20">
            Ce projet est un bot Discord similaire à{" "}
            <span>
              <u>
                <a href="https://mee6.xyz/fr" target={"_blank"}>
                  MEE6
                </a>
              </u>
            </span>{" "}
            avec un tableau de bord.
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
            Ce projet est un <span>bot Discord avancé</span> accompagné d’un{" "}
            <span>site web</span> permettant la gestion complète du bot et de
            ses plugins en fonction des besoins du serveur Discord.
            <br />
            <br />
            Le bot propose une multitude de{" "}
            <span>plugins personnalisables</span> pour répondre aux besoins des
            communautés, notamment :
            <br />
            - Messages de bienvenue
            <br />
            - Célébration des anniversaires
            <br /> - Système de suggestions
            <br /> - Gestion des canaux vocaux temporaires
            <br /> - Ranks et niveaux d’expérience
            <br /> - Système d’économie avec monnaie virtuelle
            <br /> - Tickets de support
            <br /> - Notifications de streams en direct
            <br />
            <br />
            Le <span>dashboard</span> permet aux administrateurs de{" "}
            <span>gérer et configurer</span> chaque module de manière intuitive,
            en attribuant des permissions spécifiques aux rôles.
            <br />
            <br />
            Développé avec <span>Node.js, Express.js et l’API Discord</span>, ce
            projet est conçu pour être <span>modulaire, scalable</span> et{" "}
            <span>simple d’utilisation</span>.
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
              Ce projet m’a permis d’approfondir plusieurs compétences
              essentielles en développement :
            </p>
            <li>
              <span className="blueText">Gestion d’API et Webhooks</span> :
              Intégration de l’API Discord pour interagir avec les serveurs et
              gérer des événements en temps réel.
            </li>
            <li>
              <span className="blueText">Développement Backend</span> : Mise en
              place d’une architecture solide avec Node.js pour gérer le bot
              et son dashboard.
            </li>
            <li>
              <span className="blueText">Base de données</span> :
              Utilisation de MongoDB pour stocker les préférences utilisateurs,
              les paramètres du serveur et l’état des plugins.
            </li>
            <li>
              <span className="blueText">Systèmes avancés</span> : Développement
              de fonctionnalités complexes comme un système d’économie virtuel,
              des mini-jeux ou encore la gestion avancée des salons vocaux.
            </li>
            <li>
              <span className="blueText">Sécurité et permissions</span> : Mise
              en place de restrictions et de rôles pour assurer une utilisation
              sécurisée des fonctionnalités du bot.
            </li>
          </div>

          <button className="btn m-auto mt-10 px-5 xl:px-10">
            <a
              className="text-center m-auto text-lg xl:text-2xl lg:text-xl"
              target={"_blank"}
              href="https://github.com/Minitsonga/Discord-Bot"
            >
              Voir le code
            </a>
          </button>

        </div>

        <div className="flex flex-col mt-10">
          <section className="p-10 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-6">
              Présentation du Dashboard
            </h2>
            <p className="text-center mb-8">
              Voici des images du site pour mieux comprendre son fonctionnement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                  <p className="mt-2 text-center text-sm opacity-80">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                onClick={() => setSelectedImage(null)}
              >
                <div className="p-4 bg-gray-900 rounded-lg max-w-5xl scale-110">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={800}
                    className="rounded-lg"
                  />
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
