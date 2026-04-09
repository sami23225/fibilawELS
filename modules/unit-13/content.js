/**
 * Fibi Law ELS — Unit 13: Places in the Neighborhood
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-13',
  number: '13',
  title: {
    en: 'Places in the Neighborhood',
    es: 'Lugares en el barrio',
    fr: 'Lieux du quartier',
  },
  topic: {
    en: 'Community places · Prepositions of place · Giving directions',
    es: 'Lugares comunitarios · Preposiciones de lugar · Dar direcciones',
    fr: 'Lieux communautaires · Prépositions de lieu · Donner des directions',
  },
  grammar: {
    en: '"The ___ is next to the ___" / "Turn left at the ___"',
    es: '"El ___ está al lado del ___" / "Gira a la izquierda en el ___"',
    fr: '"La ___ est à côté de la ___" / "Tournez à gauche à la ___"',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  vocabulary: [
    {
      word: 'BANK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where people save and borrow money',
        es: 'Un lugar donde las personas ahorran y piden dinero prestado',
        fr: 'Un endroit où les gens économisent et empruntent de l\'argent',
      },
      example_en: '"I go to the bank to deposit money."',
    },
    {
      word: 'PHARMACY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A store where you get medicine and health items',
        es: 'Una tienda donde obtienes medicina y artículos de salud',
        fr: 'Un magasin où vous obtenez des médicaments et des articles de santé',
      },
      example_en: '"I pick up my medicine at the pharmacy."',
    },
    {
      word: 'SUPERMARKET',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A large store where you buy food and groceries',
        es: 'Una tienda grande donde compras comida y abarrotes',
        fr: 'Un grand magasin où vous achetez de la nourriture et des épiceries',
      },
      example_en: '"We buy vegetables at the supermarket."',
    },
    {
      word: 'PARK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A public place with grass, trees, and places to play',
        es: 'Un lugar público con pasto, árboles y lugares para jugar',
        fr: 'Un lieu public avec de l\'herbe, des arbres et des endroits pour jouer',
      },
      example_en: '"Children play at the park."',
    },
    {
      word: 'HOSPITAL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where sick and injured people get medical help',
        es: 'Un lugar donde las personas enfermas y heridas reciben ayuda médica',
        fr: 'Un endroit où les personnes malades et blessées reçoivent une aide médicale',
      },
      example_en: '"My sister works at the hospital as a nurse."',
    },
    {
      word: 'RESTAURANT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where you go to eat meals',
        es: 'Un lugar donde vas a comer comidas',
        fr: 'Un endroit où vous allez manger des repas',
      },
      example_en: '"We had dinner at the restaurant on Friday."',
    },
    {
      word: 'LAUNDROMAT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where you can wash and dry your clothes',
        es: 'Un lugar donde puedes lavar y secar tu ropa',
        fr: 'Un endroit où vous pouvez laver et sécher vos vêtements',
      },
      example_en: '"I do laundry at the laundromat on weekends."',
    },
    {
      word: 'POST OFFICE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where you mail letters and packages',
        es: 'Un lugar donde envías cartas y paquetes',
        fr: 'Un endroit où vous envoyez des lettres et des colis',
      },
      example_en: '"I mailed a letter at the post office."',
    },
    {
      word: 'POLICE STATION',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A building where police officers work',
        es: 'Un edificio donde trabajan los policías',
        fr: 'Un bâtiment où travaillent les policiers',
      },
      example_en: '"Call the police station if you need help."',
    },
    {
      word: 'GAS STATION',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where you buy gas for your car',
        es: 'Un lugar donde compras gasolina para tu coche',
        fr: 'Un endroit où vous achetez de l\'essence pour votre voiture',
      },
      example_en: '"Let\'s stop at the gas station to fill up."',
    },
    {
      word: 'HOTEL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A building with rooms where travelers sleep',
        es: 'Un edificio con habitaciones donde duermen los viajeros',
        fr: 'Un bâtiment avec des chambres où les voyageurs dorment',
      },
      example_en: '"We stayed at a nice hotel during our vacation."',
    },
    {
      word: 'HAIR SALON',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where you can get your hair cut and styled',
        es: 'Un lugar donde puedes cortarte y peinarte el cabello',
        fr: 'Un endroit où vous pouvez vous couper et coiffer les cheveux',
      },
      example_en: '"I get a haircut at the hair salon every month."',
    },
  ],

  quiz: [
    {
      word: 'PHARMACY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A store where you get medicine and health items', es: 'Una tienda donde obtienes medicina y artículos de salud', fr: 'Un magasin où vous obtenez des médicaments et des articles de santé' },
      wrong: [
        { en: 'A place where you buy food', es: 'Un lugar donde compras comida', fr: 'Un endroit où vous achetez de la nourriture' },
        { en: 'A place where you get your hair cut', es: 'Un lugar donde te cortas el cabello', fr: 'Un endroit où vous vous coupez les cheveux' },
        { en: 'A place where you wash clothes', es: 'Un lugar donde lavas la ropa', fr: 'Un endroit où vous lavez vos vêtements' },
      ],
    },
    {
      word: 'BANK',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A place where people save and borrow money', es: 'Un lugar donde las personas ahorran y piden dinero prestado', fr: 'Un endroit où les gens économisent et empruntent de l\'argent' },
      wrong: [
        { en: 'A place where you eat meals', es: 'Un lugar donde comes comidas', fr: 'Un endroit où vous mangez des repas' },
        { en: 'A place where you buy gas', es: 'Un lugar donde compras gasolina', fr: 'Un endroit où vous achetez de l\'essence' },
        { en: 'A place with grass and trees', es: 'Un lugar con pasto y árboles', fr: 'Un endroit avec de l\'herbe et des arbres' },
      ],
    },
    {
      word: 'HOSPITAL',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A place where sick and injured people get medical help', es: 'Un lugar donde las personas enfermas y heridas reciben ayuda médica', fr: 'Un endroit où les personnes malades et blessées reçoivent une aide médicale' },
      wrong: [
        { en: 'A place where you stay when traveling', es: 'Un lugar donde te quedas cuando viajas', fr: 'Un endroit où vous restez en voyageant' },
        { en: 'A place where you buy medicine', es: 'Un lugar donde compras medicina', fr: 'Un endroit où vous achetez des médicaments' },
        { en: 'A place where people work for the government', es: 'Un lugar donde las personas trabajan para el gobierno', fr: 'Un endroit où les gens travaillent pour le gouvernement' },
      ],
    },
    {
      word: 'POST OFFICE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A place where you mail letters and packages', es: 'Un lugar donde envías cartas y paquetes', fr: 'Un endroit où vous envoyez des lettres et des colis' },
      wrong: [
        { en: 'A place where you buy food', es: 'Un lugar donde compras comida', fr: 'Un endroit où vous achetez de la nourriture' },
        { en: 'A place where police officers work', es: 'Un lugar donde trabajan los policías', fr: 'Un endroit où travaillent les policiers' },
        { en: 'A place where you save money', es: 'Un lugar donde ahorras dinero', fr: 'Un endroit où vous économisez de l\'argent' },
      ],
    },
    {
      word: 'RESTAURANT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A place where you go to eat meals', es: 'Un lugar donde vas a comer comidas', fr: 'Un endroit où vous allez manger des repas' },
      wrong: [
        { en: 'A place where you buy groceries', es: 'Un lugar donde compras abarrotes', fr: 'Un endroit où vous achetez des épiceries' },
        { en: 'A place where you play games', es: 'Un lugar donde juegas juegos', fr: 'Un endroit où vous jouez à des jeux' },
        { en: 'A place where you get your hair cut', es: 'Un lugar donde te cortas el cabello', fr: 'Un endroit où vous vous coupez les cheveux' },
      ],
    },
    {
      word: 'SUPERMARKET',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A large store where you buy food and groceries', es: 'Una tienda grande donde compras comida y abarrotes', fr: 'Un grand magasin où vous achetez de la nourriture et des épiceries' },
      wrong: [
        { en: 'A place where you eat meals', es: 'Un lugar donde comes comidas', fr: 'Un endroit où vous mangez des repas' },
        { en: 'A place where you mail packages', es: 'Un lugar donde envías paquetes', fr: 'Un endroit où vous envoyez des colis' },
        { en: 'A place where you get medicine', es: 'Un lugar donde obtienes medicina', fr: 'Un endroit où vous obtenez des médicaments' },
      ],
    },
    {
      word: 'LAUNDROMAT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A place where you can wash and dry your clothes', es: 'Un lugar donde puedes lavar y secar tu ropa', fr: 'Un endroit où vous pouvez laver et sécher vos vêtements' },
      wrong: [
        { en: 'A place where you get clothes', es: 'Un lugar donde obtienes ropa', fr: 'Un endroit où vous obtenez des vêtements' },
        { en: 'A place where you do groceries', es: 'Un lugar donde haces compras de comida', fr: 'Un endroit où vous faites l\'épicerie' },
        { en: 'A place where you stay when traveling', es: 'Un lugar donde te quedas cuando viajas', fr: 'Un endroit où vous restez en voyageant' },
      ],
    },
    {
      word: 'GAS STATION',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A place where you buy gas for your car', es: 'Un lugar donde compras gasolina para tu coche', fr: 'Un endroit où vous achetez de l\'essence pour votre voiture' },
      wrong: [
        { en: 'A place where police officers work', es: 'Un lugar donde trabajan los policías', fr: 'Un endroit où travaillent les policiers' },
        { en: 'A place with trees and grass', es: 'Un lugar con árboles y pasto', fr: 'Un endroit avec des arbres et de l\'herbe' },
        { en: 'A place where you save money', es: 'Un lugar donde ahorras dinero', fr: 'Un endroit où vous économisez de l\'argent' },
      ],
    },
    {
      word: 'HAIR SALON',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A place where you can get your hair cut and styled', es: 'Un lugar donde puedes cortarte y peinarte el cabello', fr: 'Un endroit où vous pouvez vous couper et coiffer les cheveux' },
      wrong: [
        { en: 'A place where you buy medicine', es: 'Un lugar donde compras medicina', fr: 'Un endroit où vous achetez des médicaments' },
        { en: 'A place where you get exercise', es: 'Un lugar donde haces ejercicio', fr: 'Un endroit où vous faites de l\'exercice' },
        { en: 'A place where you wash clothes', es: 'Un lugar donde lavas la ropa', fr: 'Un endroit où vous lavez vos vêtements' },
      ],
    },
    {
      word: 'PARK',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A public place with grass, trees, and places to play', es: 'Un lugar público con pasto, árboles y lugares para jugar', fr: 'Un lieu public avec de l\'herbe, des arbres et des endroits pour jouer' },
      wrong: [
        { en: 'A place where you stay when traveling', es: 'Un lugar donde te quedas cuando viajas', fr: 'Un endroit où vous restez en voyageant' },
        { en: 'A place where you buy groceries', es: 'Un lugar donde compras abarrotes', fr: 'Un endroit où vous achetez des épiceries' },
        { en: 'A place where you save money', es: 'Un lugar donde ahorras dinero', fr: 'Un endroit où vous économisez de l\'argent' },
      ],
    },
  ],

  reading: {
    title: {
      en: 'James Helps Maria Find Places',
      es: 'James ayuda a María a encontrar lugares',
      fr: 'James aide Maria à trouver des endroits',
    },
    passage_en: `Maria is new to the neighborhood. She does not know where anything is. Her neighbor James says, "I can help you find places!"

"First, you need to find the supermarket. Go down Main Street. Turn right at the corner. The supermarket is next to the bank. You can buy all your groceries there," James explains.

"Where is the pharmacy?" asks Maria. "The pharmacy is two blocks from here. Turn left at the corner near the park. The pharmacy is across from the post office," James says.

"I need to mail a letter," says Maria. "The post office is easy to find. Go past the park on the right. You will see the post office on the left side. The hair salon is next door to the post office," explains James.

"Thank you! What about a restaurant?" asks Maria. "There is a nice restaurant two blocks down. Turn right at the gas station. The restaurant is next to the hospital," says James.

"Can I do laundry somewhere?" asks Maria. "Yes! The laundromat is on the same street as the hospital. It is very clean and modern," James tells her.

"How about a place to relax?" asks Maria. "The park is beautiful! You can walk, sit, and enjoy nature. It is perfect for relaxing," James smiles.

Maria feels happy. She now knows where all the important places are. "Thank you so much, James! You are a wonderful neighbor," she says.

James says, "You are welcome. If you need anything else, just ask me!"`,
    highlights: [
      { word: 'neighbor', tip: { en: 'neighbor: someone who lives near you', es: 'neighbor = vecino: alguien que vive cerca de ti', fr: 'neighbor = voisin: quelqu\'un qui vit près de vous' } },
      { word: 'turn', tip: { en: 'turn: change direction when going somewhere', es: 'turn = gira: cambiar de dirección', fr: 'turn = tournez: change direction' } },
      { word: 'blocks', tip: { en: 'blocks: sections of street between intersections', es: 'blocks = cuadras: secciones de calle entre intersecciones', fr: 'blocks = pâtés: sections de rue entre les intersections' } },
      { word: 'relax', tip: { en: 'relax: to rest and take it easy', es: 'relax = relajarse: descansar y tomarlo con calma', fr: 'relax = se détendre: reposer et prendre les choses facilement' } },
    ],
    questions: [
      {
        text: { en: '1. What is next to the supermarket?', es: '1. ¿Qué hay al lado del supermercado?', fr: '1. Qu\'y a-t-il à côté du supermarché ?' },
        options: [
          { text: { en: 'The pharmacy', es: 'La farmacia', fr: 'La pharmacie' }, correct: false },
          { text: { en: 'The bank', es: 'El banco', fr: 'La banque' }, correct: true },
          { text: { en: 'The restaurant', es: 'El restaurante', fr: 'Le restaurant' }, correct: false },
        ],
      },
      {
        text: { en: '2. Where is the post office?', es: '2. ¿Dónde está la oficina de correos?', fr: '2. Où est la poste ?' },
        options: [
          { text: { en: 'Near the park', es: 'Cerca del parque', fr: 'Près du parc' }, correct: true },
          { text: { en: 'Near the hospital', es: 'Cerca del hospital', fr: 'Près de l\'hôpital' }, correct: false },
          { text: { en: 'Near the bank', es: 'Cerca del banco', fr: 'Près de la banque' }, correct: false },
        ],
      },
      {
        text: { en: '3. What does James say about the park?', es: '3. ¿Qué dice James del parque?', fr: '3. Que dit James à propos du parc ?' },
        options: [
          { text: { en: 'It is far away', es: 'Está lejos', fr: 'C\'est loin' }, correct: false },
          { text: { en: 'It is beautiful and good for relaxing', es: 'Es hermoso y bueno para relajarse', fr: 'C\'est beau et bon pour se détendre' }, correct: true },
          { text: { en: 'It is too small', es: 'Es demasiado pequeño', fr: 'C\'est trop petit' }, correct: false },
        ],
      },
    ],
  },

  fillInBlank: {
    instructions: {
      en: 'Complete each sentence using a word from the word bank.',
      es: 'Completa cada oración usando una palabra del banco de palabras.',
      fr: 'Complétez chaque phrase en utilisant un mot de la banque de mots.',
    },
    wordBank: ['pharmacy', 'bank', 'hospital', 'restaurant', 'post office'],
    sentences: [
      {
        before: { en: 'I pick up my medicine at the', es: 'Recojo mi medicina en la', fr: 'Je prends mon médicament à la' },
        answer: 'pharmacy',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'I save my money at the', es: 'Ahorr mi dinero en el', fr: 'J\'épargne mon argent à la' },
        answer: 'bank',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'She went to the', es: 'Ella fue al', fr: 'Elle est allée à l\'' },
        answer: 'hospital',
        after: { en: 'when she felt very sick.', es: 'cuando se sintió muy enferma.', fr: 'quand elle se sentait très malade.' },
      },
      {
        before: { en: 'We had dinner at the', es: 'Cenamos en el', fr: 'Nous avons dîné au' },
        answer: 'restaurant',
        after: { en: 'on Friday.', es: 'el viernes.', fr: 'vendredi.' },
      },
      {
        before: { en: 'I mailed a letter at the', es: 'Envié una carta en la', fr: 'J\'ai envoyé une lettre à la' },
        answer: 'post office',
        after: { en: '.', es: '.', fr: '.' },
      },
    ],
  },
};
