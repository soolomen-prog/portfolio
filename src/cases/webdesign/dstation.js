export default {
  id: 'dstation',
  category: 'webdesign',

  header: {
    title: 'D-СТАНЦИЯ',
    subtitle: 'Landingpage eines Redevelopment-Projekts',
    info: 'UI / UX',
    year: '2023',
  },

  intro: {
    cover: '/img/dstation/cover.jpg',
    image: '/img/dstation/intro.jpg',
  },

  task: {
    title: 'Projectaufgabe',
    text: `Auf den Seiten der Landingpage über das neue Redevelopment-Projekt
eines ehemaligen Waggondepots im Zentrum von Moskau informieren,
mit dem Ziel, Mieter für die Anmietung von Flächen zu gewinnen`,
  },

  blocks: [
    // 1 — TEXT RIGHT
    {
      type: 'text-right',
      text: `Das Waggondepot der Moskauer–Kursker Eisenbahn ist ein einzigartiges Beispiel
der Eisenbahnarchitektur des frühen 20. Jahrhunderts. Es gehört zu den wenigen
vergleichbaren Bauwerken, die bis heute ohne grundlegende Veränderungen
erhalten geblieben sind.

Genau diesem besonderen Revitalisierungsprojekt ist eine Landingpage mit
22 Abschnitten gewidmet, die die Besucher zunächst in die Geschichte des Ortes
eintauchen lässt und anschließend detailliert erklärt, warum dieser Standort
zu einem wichtigen Anziehungspunkt auf der Karte Moskaus werden wird.`,
    },

    // 2 — VIDEO FILE FULL (loop)
    {
      type: 'video-file-full',
      src: '/video/dstation/01.mp4',
    },

    // 3 — IMAGE FULL
    {
      type: 'image-full',
      src: '/img/dstation/01.jpg',
    },

    // 4 — IMAGE FULL
    {
      type: 'image-full',
      src: '/img/dstation/02.jpg',
    },

    // 5 — TEXT RIGHT
    {
      type: 'text-right',
      text: `Zur besseren Nutzerfreundlichkeit wurde die gesamte
Projektpräsentation zusätzlich als herunterladbare
PDF-Präsentation aufbereitet.`,
    },

    // 6 — VIDEO FILE FULL (loop)
    {
      type: 'video-file-full',
      src: '/video/dstation/02.mp4',
    },

    // 7 — IMAGE FULL
    {
      type: 'image-full',
      src: '/img/dstation/03.jpg',
    },
  ],
};
