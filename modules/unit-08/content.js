/**
 * Fibi Law ELS — Unit 08: Celebrations
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-08',
  number: '08',
  title: {
    en: 'Celebrations',
    es: 'Celebraciones',
    fr: 'Célébrations',
  },
  topic: {
    en: 'Holidays · Party planning · Activity verbs',
    es: 'Vacaciones · Planificación de fiestas · Verbos de actividad',
    fr: 'Vacances · Planification de fête · Verbes d\'activité',
  },
  grammar: {
    en: '"I need to ___" / "We are going to ___"',
    es: '"Necesito ___" / "Vamos a ___"',
    fr: '"Je dois ___" / "Nous allons ___"',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  vocabulary: [
    {
      word: 'BIRTHDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The day each year when someone was born',
        es: 'El día cada año cuando alguien nació',
        fr: 'Le jour chaque année où quelqu\'un est né',
      },
      example_en: '"Today is my birthday!"',
    },
    {
      word: 'PARTY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A celebration where people gather to have fun together',
        es: 'Una celebración donde las personas se reúnen para divertirse juntas',
        fr: 'Une célébration où les gens se réunissent pour s\'amuser ensemble',
      },
      example_en: '"We are having a party this weekend."',
    },
    {
      word: 'HOLIDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A special day or season when people celebrate',
        es: 'Un día o temporada especial cuando las personas celebran',
        fr: 'Un jour ou une saison spéciale quand les gens célèbrent',
      },
      example_en: '"Christmas is my favorite holiday."',
    },
    {
      word: 'GIFT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Something you give to someone as a present',
        es: 'Algo que le das a alguien como regalo',
        fr: 'Quelque chose que vous donnez à quelqu\'un en cadeau',
      },
      example_en: '"I bought a gift for my friend."',
    },
    {
      word: 'CAKE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A sweet dessert made with flour, sugar, and eggs',
        es: 'Un postre dulce hecho con harina, azúcar y huevos',
        fr: 'Un dessert sucré fait avec de la farine, du sucre et des œufs',
      },
      example_en: '"We ate cake at the birthday party."',
    },
    {
      word: 'DECORATIONS',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Beautiful things used to make a place look festive',
        es: 'Cosas hermosas usadas para hacer que un lugar se vea festivo',
        fr: 'De belles choses utilisées pour rendre un lieu festif',
      },
      example_en: '"The decorations make the room look beautiful."',
    },
    {
      word: 'SING',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To make music with your voice',
        es: 'Hacer música con tu voz',
        fr: 'Faire de la musique avec votre voix',
      },
      example_en: '"We sing happy birthday together."',
    },
    {
      word: 'DANCE',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To move your body to music',
        es: 'Mover tu cuerpo al ritmo de la música',
        fr: 'Bouger votre corps au rythme de la musique',
      },
      example_en: '"People dance at the party."',
    },
    {
      word: 'INVITE',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To ask someone to come to an event',
        es: 'Pedir a alguien que venga a un evento',
        fr: 'Demander à quelqu\'un de venir à un événement',
      },
      example_en: '"I invite my friends to my party."',
    },
    {
      word: 'CELEBRATE',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To honor or show that a day or event is special',
        es: 'Honrar o demostrar que un día o evento es especial',
        fr: 'Honorer ou montrer qu\'un jour ou un événement est spécial',
      },
      example_en: '"We celebrate the new year together."',
    },
    {
      word: 'BUY',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To get something by paying money for it',
        es: 'Obtener algo pagando dinero por él',
        fr: 'Obtenir quelque chose en payant de l\'argent pour cela',
      },
      example_en: '"I buy gifts at the store."',
    },
    {
      word: 'CLEAN',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To make something free of dirt and dust',
        es: 'Hacer que algo esté libre de suciedad y polvo',
        fr: 'Rendre quelque chose exempt de saleté et de poussière',
      },
      example_en: '"I clean the house before the party."',
    },
  ],

  quiz: [
    {
      word: 'BIRTHDAY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The day each year when someone was born', es: 'El día cada año cuando alguien nació', fr: 'Le jour chaque année où quelqu\'un est né' },
      wrong: [
        { en: 'A gift for someone', es: 'Un regalo para alguien', fr: 'Un cadeau pour quelqu\'un' },
        { en: 'A party with cake', es: 'Una fiesta con pastel', fr: 'Une fête avec un gâteau' },
        { en: 'A holiday celebration', es: 'Una celebración de vacaciones', fr: 'Une célébration de vacances' },
      ],
    },
    {
      word: 'CELEBRATE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To honor or show that a day or event is special', es: 'Honrar o demostrar que un día o evento es especial', fr: 'Honorer ou montrer qu\'un jour ou un événement est spécial' },
      wrong: [
        { en: 'To invite friends to an event', es: 'Invitar a amigos a un evento', fr: 'Inviter des amis à un événement' },
        { en: 'To dance and sing', es: 'Bailar y cantar', fr: 'Danser et chanter' },
        { en: 'To give a gift', es: 'Dar un regalo', fr: 'Donner un cadeau' },
      ],
    },
    {
      word: 'GIFT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'Something you give to someone as a present', es: 'Algo que le das a alguien como regalo', fr: 'Quelque chose que vous donnez à quelqu\'un en cadeau' },
      wrong: [
        { en: 'A decoration for a party', es: 'Una decoración para una fiesta', fr: 'Une décoration pour une fête' },
        { en: 'A special day', es: 'Un día especial', fr: 'Un jour spécial' },
        { en: 'A celebration', es: 'Una celebración', fr: 'Une célébration' },
      ],
    },
    {
      word: 'INVITE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To ask someone to come to an event', es: 'Pedir a alguien que venga a un evento', fr: 'Demander à quelqu\'un de venir à un événement' },
      wrong: [
        { en: 'To give someone a gift', es: 'Dar a alguien un regalo', fr: 'Donner à quelqu\'un un cadeau' },
        { en: 'To make a cake', es: 'Hacer un pastel', fr: 'Faire un gâteau' },
        { en: 'To decorate a room', es: 'Decorar una habitación', fr: 'Décorer une pièce' },
      ],
    },
    {
      word: 'DANCE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To move your body to music', es: 'Mover tu cuerpo al ritmo de la música', fr: 'Bouger votre corps au rythme de la musique' },
      wrong: [
        { en: 'To sing a song', es: 'Cantar una canción', fr: 'Chanter une chanson' },
        { en: 'To play music', es: 'Tocar música', fr: 'Jouer de la musique' },
        { en: 'To listen to music', es: 'Escuchar música', fr: 'Écouter de la musique' },
      ],
    },
    {
      word: 'CLEAN',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To make something free of dirt and dust', es: 'Hacer que algo esté libre de suciedad y polvo', fr: 'Rendre quelque chose exempt de saleté et de poussière' },
      wrong: [
        { en: 'To organize things in a room', es: 'Organizar cosas en una habitación', fr: 'Organiser les choses dans une pièce' },
        { en: 'To decorate a space', es: 'Decorar un espacio', fr: 'Décorer un espace' },
        { en: 'To prepare for a party', es: 'Preparar una fiesta', fr: 'Préparer une fête' },
      ],
    },
    {
      word: 'HOLIDAY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A special day or season when people celebrate', es: 'Un día o temporada especial cuando las personas celebran', fr: 'Un jour ou une saison spéciale quand les gens célèbrent' },
      wrong: [
        { en: 'A party at home', es: 'Una fiesta en casa', fr: 'Une fête à la maison' },
        { en: 'A day to rest', es: 'Un día para descansar', fr: 'Un jour pour se reposer' },
        { en: 'A time to eat cake', es: 'Un tiempo para comer pastel', fr: 'Un moment pour manger un gâteau' },
      ],
    },
    {
      word: 'BUY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To get something by paying money for it', es: 'Obtener algo pagando dinero por él', fr: 'Obtenir quelque chose en payant de l\'argent pour cela' },
      wrong: [
        { en: 'To give something to someone', es: 'Darle algo a alguien', fr: 'Donner quelque chose à quelqu\'un' },
        { en: 'To make something new', es: 'Hacer algo nuevo', fr: 'Faire quelque chose de nouveau' },
        { en: 'To find something', es: 'Encontrar algo', fr: 'Trouver quelque chose' },
      ],
    },
    {
      word: 'SING',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To make music with your voice', es: 'Hacer música con tu voz', fr: 'Faire de la musique avec votre voix' },
      wrong: [
        { en: 'To play an instrument', es: 'Tocar un instrumento', fr: 'Jouer d\'un instrument' },
        { en: 'To listen to music', es: 'Escuchar música', fr: 'Écouter de la musique' },
        { en: 'To move to music', es: 'Moverse al ritmo de la música', fr: 'Se déplacer au rythme de la musique' },
      ],
    },
    {
      word: 'CAKE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A sweet dessert made with flour, sugar, and eggs', es: 'Un postre dulce hecho con harina, azúcar y huevos', fr: 'Un dessert sucré fait avec de la farine, du sucre et des œufs' },
      wrong: [
        { en: 'A type of bread', es: 'Un tipo de pan', fr: 'Un type de pain' },
        { en: 'A decoration for a party', es: 'Una decoración para una fiesta', fr: 'Une décoration pour une fête' },
        { en: 'A gift to give someone', es: 'Un regalo para dar a alguien', fr: 'Un cadeau à donner à quelqu\'un' },
      ],
    },
  ],

  reading: {
    title: {
      en: 'Rosa\'s Birthday Party',
      es: 'La fiesta de cumpleaños de Rosa',
      fr: 'L\'anniversaire de Rosa',
    },
    passage_en: `Rosa is planning a birthday party for her daughter. Today is Monday and the party is next Saturday. She has a lot of work to do.

First, Rosa makes a shopping list. She needs to buy decorations, a cake, and gifts. She invites her family and friends. She sends invitations to 15 people. She says, "We are going to have a wonderful party!"

On Wednesday, Rosa cleans the house. She cleans the kitchen, the living room, and the bedrooms. She needs to clean everywhere. The house is very clean now.

On Friday, Rosa buys decorations at the party store. She gets balloons, streamers, and lights. She buys a big chocolate cake. The cake is beautiful and smells delicious.

On Saturday morning, Rosa prepares the food. Her family helps her. They make sandwiches and drinks. Rosa is excited!

The party starts at 2 p.m. All the guests arrive. Rosa's daughter opens her gifts. The children dance and sing happy birthday. They eat cake and ice cream. Everyone has a wonderful time. Rosa smiles. Her party is a success!`,
    highlights: [
      { word: 'planning', tip: { en: 'planning: thinking about what you need to do', es: 'planning = planeando: pensar en lo que necesitas hacer', fr: 'planning = planifier: penser à ce que vous devez faire' } },
      { word: 'decorations', tip: { en: 'decorations: beautiful things for celebrations', es: 'decorations = decoraciones: cosas hermosas para celebraciones', fr: 'decorations = décoration: belles choses pour les célébrations' } },
      { word: 'invitations', tip: { en: 'invitations: messages asking people to come', es: 'invitations = invitaciones: mensajes pidiendo a la gente que venga', fr: 'invitations = invitations: messages demandant aux gens de venir' } },
      { word: 'wonderful', tip: { en: 'wonderful: very good and enjoyable', es: 'wonderful = maravilloso: muy bueno y agradable', fr: 'wonderful = merveilleux: très bon et agréable' } },
    ],
    questions: [
      {
        text: { en: '1. What event is Rosa planning?', es: '1. ¿Qué evento está planeando Rosa?', fr: '1. Quel événement Rosa prépare-t-elle ?' },
        options: [
          { text: { en: 'A wedding', es: 'Una boda', fr: 'Un mariage' }, correct: false },
          { text: { en: 'A birthday party for her daughter', es: 'Una fiesta de cumpleaños para su hija', fr: 'Un anniversaire pour sa fille' }, correct: true },
          { text: { en: 'A family reunion', es: 'Una reunión familiar', fr: 'Une réunion familiale' }, correct: false },
        ],
      },
      {
        text: { en: '2. How many people does Rosa invite?', es: '2. ¿A cuántas personas invita Rosa?', fr: '2. Combien de personnes Rosa invite-t-elle ?' },
        options: [
          { text: { en: '10 people', es: '10 personas', fr: '10 personnes' }, correct: false },
          { text: { en: '15 people', es: '15 personas', fr: '15 personnes' }, correct: true },
          { text: { en: '20 people', es: '20 personas', fr: '20 personnes' }, correct: false },
        ],
      },
      {
        text: { en: '3. What time does the party start?', es: '3. ¿A qué hora comienza la fiesta?', fr: '3. À quelle heure la fête commence-t-elle ?' },
        options: [
          { text: { en: '12 p.m.', es: '12 p.m.', fr: '12 h' }, correct: false },
          { text: { en: '2 p.m.', es: '2 p.m.', fr: '14 h' }, correct: true },
          { text: { en: '4 p.m.', es: '4 p.m.', fr: '16 h' }, correct: false },
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
    wordBank: ['birthday', 'gift', 'invite', 'celebrate', 'cake'],
    sentences: [
      {
        before: { en: 'Today is my', es: 'Hoy es mi', fr: 'Aujourd\'hui c\'est mon' },
        answer: 'birthday',
        after: { en: 'I am 30 years old.', es: 'Tengo 30 años.', fr: 'J\'ai 30 ans.' },
      },
      {
        before: { en: 'I will', es: 'Voy a', fr: 'Je vais' },
        answer: 'invite',
        after: { en: 'all my friends to the party.', es: 'a todos mis amigos a la fiesta.', fr: 'tous mes amis à la fête.' },
      },
      {
        before: { en: 'We will eat', es: 'Comeremos', fr: 'Nous mangerons' },
        answer: 'cake',
        after: { en: 'and sing a song.', es: 'y cantaremos una canción.', fr: 'et chanterons une chanson.' },
      },
      {
        before: { en: 'I bought a', es: 'Compré un', fr: 'J\'ai acheté un' },
        answer: 'gift',
        after: { en: 'for my friend.', es: 'para mi amigo.', fr: 'pour mon ami.' },
      },
      {
        before: { en: 'We', es: 'Nosotros', fr: 'Nous' },
        answer: 'celebrate',
        after: { en: 'the holiday together.', es: 'la fiesta juntos.', fr: 'la fête ensemble.' },
      },
    ],
  },
};
