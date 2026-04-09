/**
 * Fibi Law ELS — Unit 19: Transportation
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-19',
  number: '19',
  title: {
    en: 'Transportation',
    es: 'Transporte',
    fr: 'Transport',
  },
  topic: {
    en: 'Types of transportation · Reading a bus schedule · Travel words',
    es: 'Tipos de transporte · Leer un horario de autobús · Palabras de viaje',
    fr: 'Types de transport · Lire un horaire de bus · Mots de voyage',
  },
  grammar: {
    en: 'Take the ___ to ___ · The bus leaves at ___ · How much is the fare?',
    es: 'Toma el ___ a ___ · El autobús sale a ___ · ¿Cuánto cuesta la tarifa?',
    fr: 'Prenez le ___ pour ___ · Le bus part à ___ · Combien coûte le tarif ?',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'BUS',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A large vehicle that carries many passengers on public roads',
        es: 'Un vehículo grande que lleva a muchos pasajeros en carreteras públicas',
        fr: 'Un grand véhicule qui transporte de nombreux passagers sur les routes publiques',
      },
      example_en: '"I take the bus to work every morning."',
    },
    {
      word: 'CAR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A four-wheeled motor vehicle for a small number of passengers',
        es: 'Un vehículo de motor de cuatro ruedas para un pequeño número de pasajeros',
        fr: 'Un véhicule à moteur à quatre roues pour un petit nombre de passagers',
      },
      example_en: '"I drive my car to the grocery store."',
    },
    {
      word: 'TRAIN',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A vehicle on rails that carries passengers and cargo',
        es: 'Un vehículo sobre rieles que transporta pasajeros y carga',
        fr: 'Un véhicule sur rails qui transporte les passagers et les marchandises',
      },
      example_en: '"The train leaves at 5:00 PM every day."',
    },
    {
      word: 'BICYCLE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A two-wheeled vehicle powered by pedaling',
        es: 'Un vehículo de dos ruedas impulsado por pedales',
        fr: 'Un véhicule à deux roues propulsé par pédalage',
      },
      example_en: '"I ride my bicycle to the park on weekends."',
    },
    {
      word: 'PLANE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'An aircraft that flies through the air to transport passengers',
        es: 'Una aeronave que vuela por el aire para transportar pasajeros',
        fr: 'Un aéronef qui vole dans les airs pour transporter les passagers',
      },
      example_en: '"I took a plane to visit my family last month."',
    },
    {
      word: 'MOTORCYCLE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A two-wheeled vehicle with a motor',
        es: 'Un vehículo de dos ruedas con motor',
        fr: 'Un véhicule à deux roues avec un moteur',
      },
      example_en: '"He rides a motorcycle to work."',
    },
    {
      word: 'DRIVER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who operates a vehicle',
        es: 'Una persona que opera un vehículo',
        fr: 'Une personne qui conduit un véhicule',
      },
      example_en: '"The bus driver is very friendly."',
    },
    {
      word: 'SCHEDULE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A plan that shows when buses or trains arrive and depart',
        es: 'Un plan que muestra cuándo llegan y salen los autobuses o trenes',
        fr: 'Un plan qui indique quand les bus ou les trains arrivent et partent',
      },
      example_en: '"Check the schedule to see when the bus arrives."',
    },
    {
      word: 'ROUTE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A regular path that a bus or train takes',
        es: 'Un camino regular que toma un autobús o tren',
        fr: 'Un chemin régulier qu\'emprunte un bus ou un train',
      },
      example_en: '"This bus route goes to downtown."',
    },
    {
      word: 'FARE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The price you pay to travel on a bus, train, or plane',
        es: 'El precio que pagas para viajar en autobús, tren o avión',
        fr: 'Le prix que vous payez pour voyager en bus, train ou avion',
      },
      example_en: '"The bus fare is $2.50 per trip."',
    },
    {
      word: 'STOP',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where a bus stops to pick up and drop off passengers',
        es: 'Un lugar donde un autobús se detiene para recoger y dejar pasajeros',
        fr: 'Un endroit où un bus s\'arrête pour prendre et déposer des passagers',
      },
      example_en: '"Wait at the bus stop on the corner."',
    },
    {
      word: 'TRANSFER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A ticket that allows you to change from one bus to another',
        es: 'Un boleto que te permite cambiar de un autobús a otro',
        fr: 'Un billet qui vous permet de passer d\'un bus à un autre',
      },
      example_en: '"I need a transfer to get to the next bus."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'BUS',
      question: { en: 'What is a large vehicle for public transportation?', es: '¿Qué es un vehículo grande para transporte público?', fr: 'Qu\'est-ce qu\'un grand véhicule pour les transports en commun ?' },
      correct: { en: 'A bus', es: 'Un autobús', fr: 'Un bus' },
      wrong: [
        { en: 'A car', es: 'Un auto', fr: 'Une voiture' },
        { en: 'A train', es: 'Un tren', fr: 'Un train' },
        { en: 'A bicycle', es: 'Una bicicleta', fr: 'Un vélo' },
      ],
    },
    {
      word: 'TRAIN',
      question: { en: 'What vehicle runs on rails?', es: '¿Qué vehículo corre en rieles?', fr: 'Quel véhicule roule sur des rails ?' },
      correct: { en: 'A train', es: 'Un tren', fr: 'Un train' },
      wrong: [
        { en: 'A bus', es: 'Un autobús', fr: 'Un bus' },
        { en: 'A car', es: 'Un auto', fr: 'Une voiture' },
        { en: 'A plane', es: 'Un avión', fr: 'Un avion' },
      ],
    },
    {
      word: 'PLANE',
      question: { en: 'What aircraft flies in the sky?', es: '¿Qué aeronave vuela en el cielo?', fr: 'Quel aéronef vole dans le ciel ?' },
      correct: { en: 'A plane', es: 'Un avión', fr: 'Un avion' },
      wrong: [
        { en: 'A train', es: 'Un tren', fr: 'Un train' },
        { en: 'A bus', es: 'Un autobús', fr: 'Un bus' },
        { en: 'A bicycle', es: 'Una bicicleta', fr: 'Un vélo' },
      ],
    },
    {
      word: 'BICYCLE',
      question: { en: 'What two-wheeled vehicle uses pedals?', es: '¿Qué vehículo de dos ruedas usa pedales?', fr: 'Quel véhicule à deux roues utilise des pédales ?' },
      correct: { en: 'A bicycle', es: 'Una bicicleta', fr: 'Un vélo' },
      wrong: [
        { en: 'A motorcycle', es: 'Una motocicleta', fr: 'Une motocyclette' },
        { en: 'A car', es: 'Un auto', fr: 'Une voiture' },
        { en: 'A bus', es: 'Un autobús', fr: 'Un bus' },
      ],
    },
    {
      word: 'SCHEDULE',
      question: { en: 'What shows when transportation arrives?', es: '¿Qué muestra cuándo llega el transporte?', fr: 'Qu\'est-ce qui indique quand le transport arrive ?' },
      correct: { en: 'A schedule', es: 'Un horario', fr: 'Un horaire' },
      wrong: [
        { en: 'A fare', es: 'Una tarifa', fr: 'Un tarif' },
        { en: 'A route', es: 'Una ruta', fr: 'Un itinéraire' },
        { en: 'A stop', es: 'Una parada', fr: 'Un arrêt' },
      ],
    },
    {
      word: 'FARE',
      question: { en: 'What is the price for traveling?', es: '¿Cuál es el precio para viajar?', fr: 'Quel est le prix du voyage ?' },
      correct: { en: 'The fare', es: 'La tarifa', fr: 'Le tarif' },
      wrong: [
        { en: 'The schedule', es: 'El horario', fr: 'L\'horaire' },
        { en: 'The route', es: 'La ruta', fr: 'L\'itinéraire' },
        { en: 'The stop', es: 'La parada', fr: 'L\'arrêt' },
      ],
    },
    {
      word: 'STOP',
      question: { en: 'Where does a bus pick up passengers?', es: '¿Dónde recoge pasajeros un autobús?', fr: 'Où un bus prend-il des passagers ?' },
      correct: { en: 'At a bus stop', es: 'En una parada de autobús', fr: 'À un arrêt de bus' },
      wrong: [
        { en: 'At a station', es: 'En una estación', fr: 'À une gare' },
        { en: 'At an airport', es: 'En un aeropuerto', fr: 'À un aéroport' },
        { en: 'At a garage', es: 'En un garaje', fr: 'Dans un garage' },
      ],
    },
    {
      word: 'ROUTE',
      question: { en: 'What is the path a bus takes?', es: '¿Cuál es el camino que toma un autobús?', fr: 'Quel est le chemin emprunté par un bus ?' },
      correct: { en: 'A route', es: 'Una ruta', fr: 'Un itinéraire' },
      wrong: [
        { en: 'A schedule', es: 'Un horario', fr: 'Un horaire' },
        { en: 'A fare', es: 'Una tarifa', fr: 'Un tarif' },
        { en: 'A transfer', es: 'Un transbordo', fr: 'Un transfert' },
      ],
    },
    {
      word: 'DRIVER',
      question: { en: 'Who operates a vehicle?', es: '¿Quién opera un vehículo?', fr: 'Qui opère un véhicule ?' },
      correct: { en: 'A driver', es: 'Un conductor', fr: 'Un conducteur' },
      wrong: [
        { en: 'A passenger', es: 'Un pasajero', fr: 'Un passager' },
        { en: 'A traveler', es: 'Un viajero', fr: 'Un voyageur' },
        { en: 'A pilot', es: 'Un piloto', fr: 'Un pilote' },
      ],
    },
    {
      word: 'TRANSFER',
      question: { en: 'What allows you to change buses?', es: '¿Qué te permite cambiar de autobús?', fr: 'Qu\'est-ce qui vous permet de changer de bus ?' },
      correct: { en: 'A transfer', es: 'Un transbordo', fr: 'Un transfert' },
      wrong: [
        { en: 'A ticket', es: 'Un boleto', fr: 'Un billet' },
        { en: 'A pass', es: 'Un pase', fr: 'Un laissez-passer' },
        { en: 'A card', es: 'Una tarjeta', fr: 'Une carte' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Grace\'s First Day on the Bus',
      es: 'El primer día de Grace en el autobús',
      fr: 'Le premier jour de Grace dans le bus',
    },
    passage_en: `Grace just started a new job across town. She has never taken the bus before. She is nervous but excited. This morning, she checks the bus schedule online. The schedule shows that the bus to downtown leaves at 8:15 AM. She needs to be at work at 9:00 AM.

Grace walks to the bus stop near her house. She is the only person waiting. A few minutes later, the bus arrives. The driver is friendly and smiles at her. Grace asks, "How much is the fare?" The driver says, "It is $2.50 for one trip. You can also buy a pass for $30 that covers ten trips."

Grace pays $2.50 and gets on the bus. The bus is crowded with people. They stand and sit on the seats. Grace looks at the route map on the bus. She counts the stops. She needs to get off at stop number 12.

The bus travels along the main street. Grace watches the stops pass. Stop 5, stop 6, stop 7. She is getting closer. At stop 12, Grace presses the button to signal the driver. The bus stops and Grace gets off. She looks around and recognizes the street. She is only one block from her office building.

Grace arrives at work at 8:55 AM. She is happy. Taking the bus was easy and not as scary as she thought. Tomorrow, she will take the same bus and route again.`,
    highlights: [
      { word: 'crowded', tip: { en: 'crowded: full of many people', es: 'crowded = abarrotado: lleno de mucha gente', fr: 'crowded = bondé: plein de beaucoup de gens' } },
      { word: 'signal', tip: { en: 'signal: to show a sign to the driver', es: 'signal = señalar: mostrar un signo al conductor', fr: 'signal = signaler: montrer un signal au conducteur' } },
      { word: 'pass', tip: { en: 'pass: a ticket that covers many trips', es: 'pass = pase: un boleto que cubre muchos viajes', fr: 'pass = laissez-passer: un billet qui couvre de nombreux voyages' } },
      { word: 'recognizes', tip: { en: 'recognizes: knows from before', es: 'recognizes = reconoce: sabe de antes', fr: 'recognizes = reconnaît: sait d\'avant' } },
    ],
    questions: [
      {
        text: { en: '1. What time does the bus leave?', es: '1. ¿A qué hora sale el autobús?', fr: '1. À quelle heure le bus part-il ?' },
        options: [
          { text: { en: '8:00 AM', es: '8:00 AM', fr: '8:00 AM' }, correct: false },
          { text: { en: '8:15 AM', es: '8:15 AM', fr: '8:15 AM' }, correct: true },
          { text: { en: '9:00 AM', es: '9:00 AM', fr: '9:00 AM' }, correct: false },
        ],
      },
      {
        text: { en: '2. How much does Grace pay for the fare?', es: '2. ¿Cuánto paga Grace por la tarifa?', fr: '2. Combien Grace paie-t-elle pour le tarif ?' },
        options: [
          { text: { en: '$2.50', es: '$2.50', fr: '$2.50' }, correct: true },
          { text: { en: '$30.00', es: '$30.00', fr: '$30.00' }, correct: false },
          { text: { en: '$3.50', es: '$3.50', fr: '$3.50' }, correct: false },
        ],
      },
      {
        text: { en: '3. Which stop does Grace need?', es: '3. ¿Cuál es la parada que necesita Grace?', fr: '3. Quel arrêt Grace a-t-elle besoin ?' },
        options: [
          { text: { en: 'Stop 5', es: 'Parada 5', fr: 'Arrêt 5' }, correct: false },
          { text: { en: 'Stop 12', es: 'Parada 12', fr: 'Arrêt 12' }, correct: true },
          { text: { en: 'Stop 20', es: 'Parada 20', fr: 'Arrêt 20' }, correct: false },
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
    wordBank: ['bus', 'schedule', 'fare', 'route', 'stop'],
    sentences: [
      {
        before: { en: 'I take the', es: 'Tomo el', fr: 'Je prends le' },
        answer: 'bus',
        after: { en: 'to work every morning.', es: 'al trabajo cada mañana.', fr: 'au travail chaque matin.' },
      },
      {
        before: { en: 'Check the', es: 'Revisa el', fr: 'Vérifiez l\'' },
        answer: 'schedule',
        after: { en: 'to see when the bus arrives.', es: 'para ver cuándo llega el autobús.', fr: 'pour voir quand le bus arrive.' },
      },
      {
        before: { en: 'The', es: 'La', fr: 'Le' },
        answer: 'fare',
        after: { en: 'for the train is $2.50.', es: 'del tren es $2.50.', fr: 'du train est $2.50.' },
      },
      {
        before: { en: 'This', es: 'Esta', fr: 'Cet' },
        answer: 'route',
        after: { en: 'goes to downtown.', es: 'va al centro.', fr: 'va au centre-ville.' },
      },
      {
        before: { en: 'Wait at the bus', es: 'Espera en la parada de', fr: 'Attendez à l\'arrêt de' },
        answer: 'stop',
        after: { en: 'on the corner.', es: 'en la esquina.', fr: 'au coin.' },
      },
    ],
  },
};
