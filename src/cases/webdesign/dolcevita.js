// src/cases/webdesign/dolcevita.js

export default {
  id: 'dolcevita',
  category: 'webdesign',

  header: {
    title: 'Dolcevita',
    subtitle: 'Website für Kosmetologie',
    info: 'UI-Design / Über 18 Seiten',
    year: '2022',
  },

  intro: {
    cover: '/img/dolcevita/cover.jpg',
    image: '/img/dolcevita/intro.jpg',
  },

  task: {
    title: 'Projectaufgabe',
    text: `Entwicklung einer Unternehmenswebsite für eine Kosmetikklinik, auf deren Seiten die Klinik und das Team der Spezialisten vorgestellt sowie Leistungen und Preise präsentiert werden.
Ich bin in einer kritischen Phase in das Projekt eingestiegen – zu einem Zeitpunkt, an dem den Auftraggeber keine der zuvor von einem anderen Designer vorgeschlagenen Konzepte überzeugt hat.`,
  },

  blocks: [
    // 1 — TEXT RIGHT
    {
      type: 'text-right',
      text: `In der ersten Phase war es notwendig, sich schnell in die Aufgabe einzuarbeiten, zu verstehen, was dem Kunden nicht gefiel, und zu definieren, welches Designkonzept am besten zu diesem Projekt passt.
Daraufhin wurden drei unterschiedliche Designkonzepte für die Website entwickelt, von denen das stärkste und für das Projekt am besten geeignete ausgewählt wurde – ein minimalistisches Konzept mit klaren Bildern und einer Dominanz von Weiß`,
    },

    // 2 — IMAGE FULL
    {
      type: 'image-full',
      src: '/img/dolcevita/01.jpg',
    },

    // 3 — IMAGE FULL
    {
      type: 'image-full',
      src: '/raw/dolcevita/02.jpg',
    },

    // 4 — IMAGE FULL
    {
      type: 'image-full',
      src: '/img/dolcevita/03.jpg',
    },

    // 5 — TEXT RIGHT
    {
      type: 'text-right',
      text: `Zur Verbesserung der Benutzerfreundlichkeit ist auf der Website der Kosmetikklinik ein Mini-Onlineshop für spezialisierte Kosmetik integriert, mit einem Katalog, Produktseiten sowie einer Funktion zum Kauf und zur Bestellabwicklung`,
    },

    // 6 — IMAGE FULL
    {
      type: 'image-full',
      src: '/img/dolcevita/04.jpg',
    },

    // 7 — IMAGE FULL
    {
      type: 'image-full',
      src: '/img/dolcevita/05.jpg',
    },
  ],
};
