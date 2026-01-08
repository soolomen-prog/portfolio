export default {
  id: 'has',
  title: 'HAS',

  meta: {
    subtitle: 'Türkisches Trinkwasser',
    features: [
      'Brand Identity',
      'Landing page',
      'Packaging',
      'Catalog'
    ],
    year: 2022
  },

  intro: {
    title: 'Projectaufgabe',
    text: `
Entwicklung einer Markenidentität für hydrogenreiches Trinkwasser.
Gestaltung von Design und Form der Wasserflasche.
Konzeption und Umsetzung einer Landingpage, die die Vorteile des Produkts kommuniziert,
sowie die Entwicklung verschiedener Printmaterialien — vom Präsentationskatalog
bis hin zu Visitenkarten und Werbeartikeln.
Umsetzung einer vollständigen Markenverpackung
    `
  },

  blocks: [
    /* 1. TEXT */
    {
      type: 'text',
      layout: 'right',
      content: `
Der Name HAS wurde vom Kunden vorgegeben und bildete eine ideale Grundlage
für ein minimalistisches und stilvolles Logo-Symbol in Form eines Kreuzes.
Das Kreuzsymbol wird mit Medizin assoziiert und unterstreicht, dass
hydrogenreiches Wasser zur Erhaltung von Vitalität und einem gesunden
Lebensstil beiträgt.

Die Schlichtheit und Klarheit des visuellen Stils vermitteln die technologische
Qualität des Herstellungsprozesses und formen zugleich das Bild des Wassers
der Zukunft.
      `
    },

    /* 2. FULL IMAGE */
    {
      type: 'image',
      layout: 'full',
      src: '/img/has/01.jpg'
    },

    /* 3. TEXT */
    {
      type: 'text',
      layout: 'right',
      content: `
Unter Berücksichtigung des Charakters der Marke wurde eine einzigartige
Flaschenform entwickelt und ihr visuelles Erscheinungsbild gestaltet.
Unter meiner Leitung wurden atmosphärische Produkt-Renderings erstellt,
die für den Einsatz in Werbematerialien vorgesehen sind.
      `
    },

    /* 4. VIDEO */
    {
      type: 'video',
      layout: 'full',
      src: 'https://player.vimeo.com/video/794826671'
    },

    /* 5. TWO IMAGES (новый тип) */
    {
  type: 'images-two',
  left: '/img/has/02.jpg',
  right: '/img/has/03.jpg'
    },

    /* 6 */
    { type: 'image', layout: 'full', src: '/img/has/04.jpg' },

    /* 7 */
    { type: 'image', layout: 'full', src: '/img/has/05.jpg' },

    /* 8. TEXT */
    {
      type: 'text',
      layout: 'right',
      content: `
Da es sich um eine türkische Wassermarke handelt, wurde den
Werbematerialien für Hotels besondere Aufmerksamkeit gewidmet.
Es wurden gebrandete Kunststoff-Displays entwickelt.

Zusätzlich wurden digitale Displays mit Bildschirmen für den Einsatz
in Hotelbereichen konzipiert, die der Präsentation des Produkts und
seiner Vorteile dienen. Darüber hinaus wurde ein gedruckter
Präsentationskatalog sowie weitere Werbemittel erstellt.
      `
    },

    /* 9. TWO IMAGES */
    {
  type: 'images-two',
  left: '/img/has/06.jpg',
  right: '/img/has/07.jpg'
    },

    /* 10–13 FULL IMAGES */
    { type: 'image', layout: 'full', src: '/img/has/08.jpg' },
    { type: 'image', layout: 'full', src: '/img/has/09.jpg' },
    { type: 'image', layout: 'full', src: '/img/has/10.jpg' },
    { type: 'image', layout: 'full', src: '/img/has/11.jpg' }
  ]
};
