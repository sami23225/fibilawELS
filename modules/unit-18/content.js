/**
 * Fibi Law ELS — Unit 18: Furniture and Appliances
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-18',
  number: '18',
  title: {
    en: 'Furniture and Appliances',
    es: 'Muebles y electrodomésticos',
    fr: 'Meubles et appareils électroménagers',
  },
  topic: {
    en: 'Home furniture · Appliances · Describing condition',
    es: 'Muebles del hogar · Electrodomésticos · Describir la condición',
    fr: 'Meubles du foyer · Appareils · Décrire l\'état',
  },
  grammar: {
    en: 'There is a ___ in the ___ · The ___ is old/new/broken',
    es: 'Hay un ___ en ___ · El ___ es viejo/nuevo/roto',
    fr: 'Il y a un ___ dans ___ · Le ___ est vieux/neuf/cassé',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'BED',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A piece of furniture for sleeping',
        es: 'Una pieza de mueble para dormir',
        fr: 'Un meuble pour dormir',
      },
      example_en: '"I sleep on my bed every night."',
    },
    {
      word: 'SOFA',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A long comfortable seat for two or more people',
        es: 'Un asiento largo y cómodo para dos o más personas',
        fr: 'Un siège long et confortable pour deux ou plusieurs personnes',
      },
      example_en: '"We sit on the sofa to watch television."',
    },
    {
      word: 'CHAIR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A seat with four legs and a back for one person',
        es: 'Un asiento con cuatro patas y un respaldo para una persona',
        fr: 'Un siège avec quatre pieds et un dossier pour une personne',
      },
      example_en: '"Please sit on the chair at the table."',
    },
    {
      word: 'TABLE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A flat piece of furniture with four legs for eating or working',
        es: 'Una pieza de mueble plana con cuatro patas para comer o trabajar',
        fr: 'Un meuble plat avec quatre pieds pour manger ou travailler',
      },
      example_en: '"We eat dinner on the dining table."',
    },
    {
      word: 'LAMP',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A device that produces light',
        es: 'Un dispositivo que produce luz',
        fr: 'Un appareil qui produit de la lumière',
      },
      example_en: '"Turn on the lamp so we can see in the dark."',
    },
    {
      word: 'BOOKCASE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A piece of furniture with shelves for storing books',
        es: 'Una pieza de mueble con estantes para guardar libros',
        fr: 'Un meuble avec des étagères pour ranger les livres',
      },
      example_en: '"My bookcase is full of novels."',
    },
    {
      word: 'REFRIGERATOR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'An appliance that keeps food cold',
        es: 'Un electrodoméstico que mantiene la comida fría',
        fr: 'Un appareil qui garde la nourriture froide',
      },
      example_en: '"The food is cold in the refrigerator."',
    },
    {
      word: 'STOVE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'An appliance used for cooking food with heat',
        es: 'Un electrodoméstico usado para cocinar comida con calor',
        fr: 'Un appareil utilisé pour cuisiner avec de la chaleur',
      },
      example_en: '"I use the stove to cook dinner."',
    },
    {
      word: 'SINK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A basin with running water for washing dishes or hands',
        es: 'Una cuenca con agua corriente para lavar platos o manos',
        fr: 'Un bassin avec eau courante pour laver la vaisselle ou les mains',
      },
      example_en: '"I wash the dishes in the sink."',
    },
    {
      word: 'TELEVISION',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A device for watching shows and movies',
        es: 'Un dispositivo para ver programas y películas',
        fr: 'Un appareil pour regarder des émissions et des films',
      },
      example_en: '"We watch the news on television."',
    },
    {
      word: 'DRESSER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A piece of furniture with drawers for storing clothes',
        es: 'Una pieza de mueble con cajones para guardar ropa',
        fr: 'Un meuble avec des tiroirs pour ranger les vêtements',
      },
      example_en: '"I put my clothes in the dresser."',
    },
    {
      word: 'CURTAINS',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Cloth that hangs over windows to block light or provide privacy',
        es: 'Tela que cuelga sobre ventanas para bloquear luz o proporcionar privacidad',
        fr: 'Tissu qui pend sur les fenêtres pour bloquer la lumière ou assurer la vie privée',
      },
      example_en: '"Close the curtains to keep the sunlight out."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'BED',
      question: { en: 'What do you sleep on?', es: '¿En qué duermes?', fr: 'Sur quoi dormez-vous ?' },
      correct: { en: 'A bed', es: 'Una cama', fr: 'Un lit' },
      wrong: [
        { en: 'A sofa', es: 'Un sofá', fr: 'Un canapé' },
        { en: 'A chair', es: 'Una silla', fr: 'Une chaise' },
        { en: 'A table', es: 'Una mesa', fr: 'Une table' },
      ],
    },
    {
      word: 'SOFA',
      question: { en: 'What is a long comfortable seat?', es: '¿Qué es un asiento largo y cómodo?', fr: 'Qu\'est-ce qu\'un siège long et confortable ?' },
      correct: { en: 'A sofa', es: 'Un sofá', fr: 'Un canapé' },
      wrong: [
        { en: 'A chair', es: 'Una silla', fr: 'Une chaise' },
        { en: 'A bed', es: 'Una cama', fr: 'Un lit' },
        { en: 'A table', es: 'Una mesa', fr: 'Une table' },
      ],
    },
    {
      word: 'REFRIGERATOR',
      question: { en: 'What appliance keeps food cold?', es: '¿Qué electrodoméstico mantiene la comida fría?', fr: 'Quel appareil garde la nourriture froide ?' },
      correct: { en: 'A refrigerator', es: 'Un refrigerador', fr: 'Un réfrigérateur' },
      wrong: [
        { en: 'A stove', es: 'Una estufa', fr: 'Un poêle' },
        { en: 'A sink', es: 'Un fregadero', fr: 'Un lavabo' },
        { en: 'A lamp', es: 'Una lámpara', fr: 'Une lampe' },
      ],
    },
    {
      word: 'STOVE',
      question: { en: 'What appliance is used for cooking?', es: '¿Qué electrodoméstico se usa para cocinar?', fr: 'Quel appareil est utilisé pour cuisiner ?' },
      correct: { en: 'A stove', es: 'Una estufa', fr: 'Un poêle' },
      wrong: [
        { en: 'A refrigerator', es: 'Un refrigerador', fr: 'Un réfrigérateur' },
        { en: 'A sink', es: 'Un fregadero', fr: 'Un lavabo' },
        { en: 'A lamp', es: 'Una lámpara', fr: 'Une lampe' },
      ],
    },
    {
      word: 'LAMP',
      question: { en: 'What device produces light?', es: '¿Qué dispositivo produce luz?', fr: 'Quel appareil produit de la lumière ?' },
      correct: { en: 'A lamp', es: 'Una lámpara', fr: 'Une lampe' },
      wrong: [
        { en: 'A table', es: 'Una mesa', fr: 'Une table' },
        { en: 'A chair', es: 'Una silla', fr: 'Une chaise' },
        { en: 'A curtain', es: 'Una cortina', fr: 'Un rideau' },
      ],
    },
    {
      word: 'TELEVISION',
      question: { en: 'What device is used to watch shows?', es: '¿Qué dispositivo se usa para ver programas?', fr: 'Quel appareil est utilisé pour regarder des émissions ?' },
      correct: { en: 'A television', es: 'Un televisor', fr: 'Un téléviseur' },
      wrong: [
        { en: 'A radio', es: 'Una radio', fr: 'Une radio' },
        { en: 'A computer', es: 'Una computadora', fr: 'Un ordinateur' },
        { en: 'A lamp', es: 'Una lámpara', fr: 'Une lampe' },
      ],
    },
    {
      word: 'DRESSER',
      question: { en: 'Where do you store clothes?', es: '¿Dónde guardas la ropa?', fr: 'Où rangez-vous les vêtements ?' },
      correct: { en: 'In a dresser', es: 'En una cómoda', fr: 'Dans une commode' },
      wrong: [
        { en: 'In a bookcase', es: 'En un librero', fr: 'Dans une bibliothèque' },
        { en: 'In a table', es: 'En una mesa', fr: 'Sur une table' },
        { en: 'In a lamp', es: 'En una lámpara', fr: 'Dans une lampe' },
      ],
    },
    {
      word: 'SINK',
      question: { en: 'Where do you wash dishes?', es: '¿Dónde lavas los platos?', fr: 'Où lavez-vous la vaisselle ?' },
      correct: { en: 'In a sink', es: 'En un fregadero', fr: 'Dans un lavabo' },
      wrong: [
        { en: 'In a stove', es: 'En una estufa', fr: 'Sur un poêle' },
        { en: 'In a refrigerator', es: 'En un refrigerador', fr: 'Dans un réfrigérateur' },
        { en: 'In a table', es: 'En una mesa', fr: 'Sur une table' },
      ],
    },
    {
      word: 'BOOKCASE',
      question: { en: 'What stores books on shelves?', es: '¿Qué almacena libros en estantes?', fr: 'Qu\'est-ce qui entrepose les livres sur des étagères ?' },
      correct: { en: 'A bookcase', es: 'Un librero', fr: 'Une bibliothèque' },
      wrong: [
        { en: 'A table', es: 'Una mesa', fr: 'Une table' },
        { en: 'A dresser', es: 'Una cómoda', fr: 'Une commode' },
        { en: 'A chair', es: 'Una silla', fr: 'Une chaise' },
      ],
    },
    {
      word: 'CURTAINS',
      question: { en: 'What hangs over windows for privacy?', es: '¿Qué cuelga sobre las ventanas para privacidad?', fr: 'Qu\'est-ce qui pend sur les fenêtres pour la vie privée ?' },
      correct: { en: 'Curtains', es: 'Cortinas', fr: 'Des rideaux' },
      wrong: [
        { en: 'A lamp', es: 'Una lámpara', fr: 'Une lampe' },
        { en: 'A table', es: 'Una mesa', fr: 'Une table' },
        { en: 'A chair', es: 'Una silla', fr: 'Une chaise' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Blessing\'s Garage Sale Finds',
      es: 'Los hallazgos de la venta de garaje de Blessing',
      fr: 'Les trouvailles de la vente de garage de Blessing',
    },
    passage_en: `Blessing is furnishing her first apartment. She does not have much money, so she decides to go to a garage sale. She finds a big table for the living room for only $25. The table is old but still very sturdy and strong.

At another house, Blessing finds a beautiful sofa for $40. The sofa is blue and comfortable. The cushions are clean. She buys it immediately. She also finds a small bookcase for $15. The bookcase has three shelves and is perfect for her bedroom.

Blessing continues to look for more furniture. She finds a bed frame and a new mattress for $80. The bed is queen-sized and very comfortable. She discovers a dresser with five drawers for $30. The dresser is made of wood and has a mirror. She is very happy with this find.

For the kitchen, Blessing buys a refrigerator for $60. It is old but works perfectly. She finds a stove for $50, and it is in excellent condition. She also buys a white sink for $35 and an old lamp for $5.

At the last house, Blessing finds new curtains for $10. The curtains are white with blue flowers. She buys two sets so she can hang them in her bedroom and living room.

After spending only $350, Blessing has furnished her entire apartment. She is proud and happy. All her furniture is old or used, but it is clean and in good condition. Her apartment looks nice and comfortable.`,
    highlights: [
      { word: 'sturdy', tip: { en: 'sturdy: strong and well-made', es: 'sturdy = resistente: fuerte y bien hecho', fr: 'sturdy = robuste: fort et bien fait' } },
      { word: 'mattress', tip: { en: 'mattress: soft layer on a bed for sleeping', es: 'mattress = colchón: capa blanda en una cama para dormir', fr: 'mattress = matelas: couche molle sur un lit pour dormir' } },
      { word: 'cushions', tip: { en: 'cushions: soft pillows for comfort', es: 'cushions = cojines: almohadas suaves para comodidad', fr: 'cushions = coussins: oreillers souples pour le confort' } },
      { word: 'furnished', tip: { en: 'furnished: filled with furniture', es: 'furnished = amueblado: lleno de muebles', fr: 'furnished = meublé: rempli de meubles' } },
    ],
    questions: [
      {
        text: { en: '1. How much does Blessing spend on furniture?', es: '1. ¿Cuánto gasta Blessing en muebles?', fr: '1. Combien Blessing dépense-t-elle en meubles ?' },
        options: [
          { text: { en: '$250', es: '$250', fr: '$250' }, correct: false },
          { text: { en: '$350', es: '$350', fr: '$350' }, correct: true },
          { text: { en: '$450', es: '$450', fr: '$450' }, correct: false },
        ],
      },
      {
        text: { en: '2. What is special about the sofa?', es: '2. ¿Qué es especial del sofá?', fr: '2. Qu\'y a-t-il de spécial chez le canapé ?' },
        options: [
          { text: { en: 'It is new and expensive', es: 'Es nuevo y caro', fr: 'Il est neuf et cher' }, correct: false },
          { text: { en: 'It is blue and comfortable', es: 'Es azul y cómodo', fr: 'Il est bleu et confortable' }, correct: true },
          { text: { en: 'It is white and old', es: 'Es blanco y viejo', fr: 'Il est blanc et vieux' }, correct: false },
        ],
      },
      {
        text: { en: '3. What does Blessing buy for the kitchen?', es: '3. ¿Qué compra Blessing para la cocina?', fr: '3. Qu\'est-ce que Blessing achète pour la cuisine ?' },
        options: [
          { text: { en: 'A table and chair', es: 'Una mesa y silla', fr: 'Une table et une chaise' }, correct: false },
          { text: { en: 'A lamp and curtains', es: 'Una lámpara y cortinas', fr: 'Une lampe et des rideaux' }, correct: false },
          { text: { en: 'A refrigerator and stove', es: 'Un refrigerador y estufa', fr: 'Un réfrigérateur et un poêle' }, correct: true },
        ],
      },
    ],
  },

  // ── FILL-IN-THE-BLANK ─────────────────────────────────────────────────────
  fillInBlank: {
    instructions: {
      en: 'Complete each sentence using a word from the word bank.',
      es: 'Completa cada oración usando una palabra del banco de palabras.',
      fr: 'Complétez chaque phrase en utilisant un mot de la banque de mots.',
    },
    wordBank: ['bed', 'sofa', 'refrigerator', 'lamp', 'stove'],
    sentences: [
      {
        before: { en: 'I sleep on my', es: 'Duermo en mi', fr: 'Je dors sur mon' },
        answer: 'bed',
        after: { en: 'every night.', es: 'cada noche.', fr: 'chaque nuit.' },
      },
      {
        before: { en: 'We sit on the', es: 'Nos sentamos en el', fr: 'Nous nous asseyons sur le' },
        answer: 'sofa',
        after: { en: 'to watch television.', es: 'para ver televisión.', fr: 'pour regarder la télévision.' },
      },
      {
        before: { en: 'The food is cold in the', es: 'La comida está fría en el', fr: 'La nourriture est froide dans le' },
        answer: 'refrigerator',
        after: { en: 'for days.', es: 'durante días.', fr: 'pendant des jours.' },
      },
      {
        before: { en: 'I use the', es: 'Uso el', fr: 'J\'utilise le' },
        answer: 'stove',
        after: { en: 'to cook dinner.', es: 'para cocinar cena.', fr: 'pour cuisiner le dîner.' },
      },
      {
        before: { en: 'Turn on the', es: 'Enciende la', fr: 'Allumez la' },
        answer: 'lamp',
        after: { en: 'so we can see in the dark.', es: 'para poder ver en la oscuridad.', fr: 'pour que nous puissions voir dans l\'obscurité.' },
      },
    ],
  },
};
