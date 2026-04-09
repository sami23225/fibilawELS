/**
 * Fibi Law ELS — Unit 06: Places to Go
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-06',
  number: '06',
  title: {
    en: 'Places to Go',
    es: 'Lugares para ir',
    fr: 'Lieux à visiter',
  },
  topic: {
    en: 'Community places · Giving your address · Phone messages',
    es: 'Lugares de la comunidad · Dar tu dirección · Mensajes telefónicos',
    fr: 'Lieux communautaires · Donner votre adresse · Messages téléphoniques',
  },
  grammar: {
    en: 'I go to the ___ to ___ · Where is the ___?',
    es: 'Voy a la ___ a ___ · ¿Dónde está la ___?',
    fr: 'Je vais à la ___ pour ___ · Où est la ___?',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'HOUSE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A building where people live with their family',
        es: 'Un edificio donde las personas viven con su familia',
        fr: 'Un bâtiment où les gens vivent avec leur famille',
      },
      example_en: '"My house is on Maple Street."',
    },
    {
      word: 'PARK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'An outdoor place with grass and trees where people play',
        es: 'Un lugar al aire libre con hierba y árboles donde las personas juegan',
        fr: 'Un espace extérieur avec herbe et arbres où les gens jouent',
      },
      example_en: '"We play outside at the park."',
    },
    {
      word: 'OFFICE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room or building where people work with papers and computers',
        es: 'Una habitación o edificio donde las personas trabajan con papeles y computadoras',
        fr: 'Une pièce ou un bâtiment où les gens travaillent avec des documents et des ordinateurs',
      },
      example_en: '"My mother works in an office downtown."',
    },
    {
      word: 'MARKET',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where people buy food and other things to use',
        es: 'Un lugar donde las personas compran comida y otras cosas para usar',
        fr: 'Un endroit où les gens achètent de la nourriture et d\'autres choses',
      },
      example_en: '"I go to the market to buy food."',
    },
    {
      word: 'SCHOOL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A building where students go to learn',
        es: 'Un edificio donde los estudiantes van a aprender',
        fr: 'Un bâtiment où les étudiants vont apprendre',
      },
      example_en: '"Children learn at school."',
    },
    {
      word: 'CAFE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A small restaurant where people buy coffee, tea, and light food',
        es: 'Un pequeño restaurante donde las personas compran café, té y comida ligera',
        fr: 'Un petit restaurant où les gens achètent du café, du thé et de la nourriture légère',
      },
      example_en: '"Let\'s meet at the cafe for coffee."',
    },
    {
      word: 'ADDRESS',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The location where someone lives or works — street, number, and city',
        es: 'La ubicación donde alguien vive o trabaja — calle, número y ciudad',
        fr: 'L\'endroit où quelqu\'un habite ou travaille — rue, numéro et ville',
      },
      example_en: '"Can you give me your address?"',
    },
    {
      word: 'STREET',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A road in a city or town where people live and drive',
        es: 'Una carretera en una ciudad donde las personas viven y conducen',
        fr: 'Une route dans une ville où les gens vivent et conduisent',
      },
      example_en: '"I live on Oak Street."',
    },
    {
      word: 'NEIGHBORHOOD',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The area around where you live with nearby streets and homes',
        es: 'El área alrededor de donde vives con calles y casas cercanas',
        fr: 'La zone autour de l\'endroit où vous vivez avec les rues et les maisons à proximité',
      },
      example_en: '"I know all the people in my neighborhood."',
    },
    {
      word: 'STORE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A shop where people buy things to use or wear',
        es: 'Una tienda donde las personas compran cosas para usar o llevar',
        fr: 'Un magasin où les gens achètent des choses à utiliser ou à porter',
      },
      example_en: '"I need to go to the store to buy clothes."',
    },
    {
      word: 'LIBRARY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A building where you can borrow books and use computers',
        es: 'Un edificio donde puedes pedir prestados libros y usar computadoras',
        fr: 'Un bâtiment où vous pouvez emprunter des livres et utiliser des ordinateurs',
      },
      example_en: '"You can borrow books at the library."',
    },
    {
      word: 'HOSPITAL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A building where doctors help sick people get better',
        es: 'Un edificio donde los doctores ayudan a las personas enfermas a mejorar',
        fr: 'Un bâtiment où les médecins aident les gens malades à aller mieux',
      },
      example_en: '"If you are sick, go to the hospital."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'PARK',
      question: { en: 'What is a park?', es: '¿Qué es un parque?', fr: 'Qu\'est-ce qu\'un parc ?' },
      correct: { en: 'An outdoor place with grass and trees where people play', es: 'Un lugar al aire libre con hierba y árboles donde las personas juegan', fr: 'Un espace extérieur avec herbe et arbres où les gens jouent' },
      wrong: [
        { en: 'A place where people buy food', es: 'Un lugar donde las personas compran comida', fr: 'Un endroit où les gens achètent de la nourriture' },
        { en: 'A building where people work with computers', es: 'Un edificio donde las personas trabajan con computadoras', fr: 'Un bâtiment où les gens travaillent avec des ordinateurs' },
        { en: 'A place where doctors help sick people', es: 'Un lugar donde los doctores ayudan a las personas enfermas', fr: 'Un endroit où les médecins aident les gens malades' },
      ],
    },
    {
      word: 'SCHOOL',
      question: { en: 'What is school?', es: '¿Qué es la escuela?', fr: 'Qu\'est-ce que l\'école ?' },
      correct: { en: 'A building where students go to learn', es: 'Un edificio donde los estudiantes van a aprender', fr: 'Un bâtiment où les étudiants vont apprendre' },
      wrong: [
        { en: 'A place where you buy books to borrow', es: 'Un lugar donde compras libros para pedir prestado', fr: 'Un endroit où vous achetez des livres à emprunter' },
        { en: 'An outdoor place with grass and trees', es: 'Un lugar al aire libre con hierba y árboles', fr: 'Un espace extérieur avec herbe et arbres' },
        { en: 'A small restaurant', es: 'Un pequeño restaurante', fr: 'Un petit restaurant' },
      ],
    },
    {
      word: 'LIBRARY',
      question: { en: 'What can you do at a library?', es: '¿Qué puedes hacer en una biblioteca?', fr: 'Que pouvez-vous faire à la bibliothèque ?' },
      correct: { en: 'Borrow books and use computers', es: 'Pedir prestados libros y usar computadoras', fr: 'Emprunter des livres et utiliser des ordinateurs' },
      wrong: [
        { en: 'Buy food and coffee', es: 'Comprar comida y café', fr: 'Acheter de la nourriture et du café' },
        { en: 'See a doctor about health', es: 'Ver a un doctor sobre la salud', fr: 'Voir un médecin pour la santé' },
        { en: 'Buy clothes and other things', es: 'Comprar ropa y otras cosas', fr: 'Acheter des vêtements et d\'autres choses' },
      ],
    },
    {
      word: 'HOSPITAL',
      question: { en: 'What is a hospital?', es: '¿Qué es un hospital?', fr: 'Qu\'est-ce qu\'un hôpital ?' },
      correct: { en: 'A building where doctors help sick people', es: 'Un edificio donde los doctores ayudan a las personas enfermas', fr: 'Un bâtiment où les médecins aident les gens malades' },
      wrong: [
        { en: 'A place where you go to learn', es: 'Un lugar donde vas a aprender', fr: 'Un endroit où vous allez apprendre' },
        { en: 'A shop where you buy clothes', es: 'Una tienda donde compras ropa', fr: 'Un magasin où vous achetez des vêtements' },
        { en: 'An outdoor place to play', es: 'Un lugar al aire libre para jugar', fr: 'Un lieu extérieur pour jouer' },
      ],
    },
    {
      word: 'MARKET',
      question: { en: 'What do you do at a market?', es: '¿Qué haces en un mercado?', fr: 'Que faites-vous au marché ?' },
      correct: { en: 'Buy food and other things', es: 'Comprar comida y otras cosas', fr: 'Acheter de la nourriture et d\'autres choses' },
      wrong: [
        { en: 'Learn lessons and read books', es: 'Aprender lecciones y leer libros', fr: 'Apprendre des leçons et lire des livres' },
        { en: 'Play outdoor games', es: 'Jugar juegos al aire libre', fr: 'Jouer à des jeux en plein air' },
        { en: 'See a doctor for health', es: 'Ver a un doctor para la salud', fr: 'Voir un médecin pour la santé' },
      ],
    },
    {
      word: 'OFFICE',
      question: { en: 'What is an office?', es: '¿Qué es una oficina?', fr: 'Qu\'est-ce qu\'un bureau ?' },
      correct: { en: 'A place where people work with papers and computers', es: 'Un lugar donde las personas trabajan con papeles y computadoras', fr: 'Un endroit où les gens travaillent avec des documents et des ordinateurs' },
      wrong: [
        { en: 'A place where you buy food', es: 'Un lugar donde compras comida', fr: 'Un endroit où vous achetez de la nourriture' },
        { en: 'A home where a family lives', es: 'Una casa donde vive una familia', fr: 'Une maison où vit une famille' },
        { en: 'A place where children learn', es: 'Un lugar donde los niños aprenden', fr: 'Un endroit où les enfants apprennent' },
      ],
    },
    {
      word: 'CAFE',
      question: { en: 'What can you buy at a cafe?', es: '¿Qué puedes comprar en una cafetería?', fr: 'Que pouvez-vous acheter dans un café ?' },
      correct: { en: 'Coffee, tea, and light food', es: 'Café, té y comida ligera', fr: 'Café, thé et nourriture légère' },
      wrong: [
        { en: 'Books and magazines', es: 'Libros y revistas', fr: 'Livres et magazines' },
        { en: 'Clothes and shoes', es: 'Ropa y zapatos', fr: 'Vêtements et chaussures' },
        { en: 'Medical help and medicine', es: 'Ayuda médica y medicina', fr: 'Aide médicale et médecine' },
      ],
    },
    {
      word: 'NEIGHBORHOOD',
      question: { en: 'What is a neighborhood?', es: '¿Qué es un vecindario?', fr: 'Qu\'est-ce qu\'un voisinage ?' },
      correct: { en: 'The area around where you live with nearby streets and homes', es: 'El área alrededor de donde vives con calles y casas cercanas', fr: 'La zone autour de l\'endroit où vous vivez avec les rues et les maisons à proximité' },
      wrong: [
        { en: 'A building where people work', es: 'Un edificio donde las personas trabajan', fr: 'Un bâtiment où les gens travaillent' },
        { en: 'A place to buy clothing', es: 'Un lugar para comprar ropa', fr: 'Un endroit pour acheter des vêtements' },
        { en: 'A park with outdoor games', es: 'Un parque con juegos al aire libre', fr: 'Un parc avec des jeux en plein air' },
      ],
    },
    {
      word: 'STORE',
      question: { en: 'What is a store?', es: '¿Qué es una tienda?', fr: 'Qu\'est-ce qu\'un magasin ?' },
      correct: { en: 'A shop where people buy things to use or wear', es: 'Una tienda donde las personas compran cosas para usar o llevar', fr: 'Un magasin où les gens achètent des choses à utiliser ou à porter' },
      wrong: [
        { en: 'A building where people work with papers', es: 'Un edificio donde las personas trabajan con papeles', fr: 'Un bâtiment où les gens travaillent avec des documents' },
        { en: 'A place where doctors help sick people', es: 'Un lugar donde los doctores ayudan a las personas enfermas', fr: 'Un endroit où les médecins aident les gens malades' },
        { en: 'An outdoor place with grass and trees', es: 'Un lugar al aire libre con hierba y árboles', fr: 'Un espace extérieur avec herbe et arbres' },
      ],
    },
    {
      word: 'HOUSE',
      question: { en: 'What is a house?', es: '¿Qué es una casa?', fr: 'Qu\'est-ce qu\'une maison ?' },
      correct: { en: 'A building where people live with their family', es: 'Un edificio donde las personas viven con su familia', fr: 'Un bâtiment où les gens vivent avec leur famille' },
      wrong: [
        { en: 'A building where children learn', es: 'Un edificio donde los niños aprenden', fr: 'Un bâtiment où les enfants apprennent' },
        { en: 'A place where people work', es: 'Un lugar donde las personas trabajan', fr: 'Un endroit où les gens travaillent' },
        { en: 'An outdoor place to play', es: 'Un lugar al aire libre para jugar', fr: 'Un lieu extérieur pour jouer' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Omar Asks for Directions',
      es: 'Omar pide indicaciones',
      fr: 'Omar demande les directions',
    },
    passage_en: `Omar walks through the neighborhood. He is new to the area. He looks around for a market. A woman is walking toward him. "Excuse me," he says. "Can you help me? I am looking for the market."

The woman smiles. "Yes, I can help you. The market is on Main Street. That street is two blocks to the left." She points in the direction.

"Thank you," says Omar. "I need to buy food for dinner."

The woman continues, "After you buy food at the market, there is a nice cafe near the market. You can sit there and drink coffee or tea."

Omar is happy with the directions. He walks left and finds Main Street. The market is easy to find. It is a big building with many people.

At the market, Omar meets a man. "Where do you live?" the man asks. "I live on Elm Street," says Omar. "My house is at 205 Elm Street."

The man nods. "That is a nice neighborhood. My office is on your street, too — at 210 Elm Street."

After shopping, Omar walks to the cafe. The cafe is exactly where the woman said it would be. Omar sits down and orders coffee. The neighborhood is friendly. He is happy.`,
    highlights: [
      { word: 'blocks', tip: { en: 'blocks: sections of a street between two intersections', es: 'blocks = manzanas: secciones de una calle entre dos intersecciones', fr: 'blocks = pâtés de maisons: sections d\'une rue entre deux intersections' } },
      { word: 'directions', tip: { en: 'directions: information about which way to go', es: 'directions = indicaciones: información sobre qué camino seguir', fr: 'directions = directions: informations sur la route à suivre' } },
      { word: 'shopping', tip: { en: 'shopping: buying things at stores', es: 'shopping = compras: comprar cosas en tiendas', fr: 'shopping = shopping: acheter des choses dans les magasins' } },
      { word: 'intersection', tip: { en: 'intersection: where two streets meet or cross', es: 'intersection = intersección: donde dos calles se encuentran o cruzan', fr: 'intersection = intersection: où deux rues se rencontrent ou se croisent' } },
    ],
    questions: [
      {
        text: { en: '1. What is Omar looking for at the beginning of the story?', es: '1. ¿Qué busca Omar al inicio de la historia?', fr: '1. Que cherche Omar au début de l\'histoire ?' },
        options: [
          { text: { en: 'A cafe', es: 'Una cafetería', fr: 'Un café' }, correct: false },
          { text: { en: 'The market', es: 'El mercado', fr: 'Le marché' }, correct: true },
          { text: { en: 'His house', es: 'Su casa', fr: 'Sa maison' }, correct: false },
        ],
      },
      {
        text: { en: '2. Where is Omar\'s house?', es: '2. ¿Dónde está la casa de Omar?', fr: '2. Où est la maison d\'Omar ?' },
        options: [
          { text: { en: '210 Elm Street', es: '210 Elm Street', fr: '210 Elm Street' }, correct: false },
          { text: { en: '205 Elm Street', es: '205 Elm Street', fr: '205 Elm Street' }, correct: true },
          { text: { en: '200 Main Street', es: '200 Main Street', fr: '200 Main Street' }, correct: false },
        ],
      },
      {
        text: { en: '3. What does the man say about Omar\'s neighborhood?', es: '3. ¿Qué dice el hombre sobre el vecindario de Omar?', fr: '3. Que dit l\'homme sur le voisinage d\'Omar ?' },
        options: [
          { text: { en: 'It is old and not nice', es: 'Es viejo y no es agradable', fr: 'C\'est vieux et pas agréable' }, correct: false },
          { text: { en: 'It is a nice neighborhood', es: 'Es un vecindario agradable', fr: 'C\'est un beau voisinage' }, correct: true },
          { text: { en: 'It is far from the market', es: 'Está lejos del mercado', fr: 'C\'est loin du marché' }, correct: false },
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
    wordBank: ['park', 'school', 'library', 'market', 'hospital'],
    sentences: [
      {
        before: { en: 'I go to the', es: 'Voy a la', fr: 'Je vais au' },
        answer: 'market',
        after: { en: 'to buy food.', es: 'a comprar comida.', fr: 'pour acheter de la nourriture.' },
      },
      {
        before: { en: 'Children learn at', es: 'Los niños aprenden en la', fr: 'Les enfants apprennent à l\'' },
        answer: 'school',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'You can borrow books at the', es: 'Puedes pedir prestados libros en la', fr: 'Vous pouvez emprunter des livres à la' },
        answer: 'library',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'We play outside at the', es: 'Jugamos afuera en el', fr: 'Nous jouons dehors au' },
        answer: 'park',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'If you are sick, go to the', es: 'Si estás enfermo, ve al', fr: 'Si vous êtes malade, allez à l\'' },
        answer: 'hospital',
        after: { en: '.', es: '.', fr: '.' },
      },
    ],
  },
};
