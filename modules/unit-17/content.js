/**
 * Fibi Law ELS — Unit 17: Finding a New Home
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-17',
  number: '17',
  title: {
    en: 'Finding a New Home',
    es: 'Buscando un nuevo hogar',
    fr: 'Trouver un nouveau foyer',
  },
  topic: {
    en: 'Rooms of a home · Reading rental ads · Talking to a landlord',
    es: 'Cuartos de una casa · Leer anuncios de alquiler · Hablar con un propietario',
    fr: 'Pièces d\'une maison · Lire les annonces de location · Parler à un propriétaire',
  },
  grammar: {
    en: 'The apartment has ___ · How much is the rent? · Is ___ included?',
    es: 'El apartamento tiene ___ · ¿Cuánto es el alquiler? · ¿Está ___ incluido?',
    fr: 'L\'appartement a ___ · Quel est le loyer? · Est-ce que ___ est inclus?',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'BEDROOM',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room where you sleep',
        es: 'Un cuarto donde duermes',
        fr: 'Une pièce où vous dormez',
      },
      example_en: '"The apartment has two bedrooms."',
    },
    {
      word: 'BATHROOM',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room with a toilet and sink where you wash',
        es: 'Un cuarto con un inodoro y lavabo donde te lavas',
        fr: 'Une pièce avec toilettes et lavabo où vous vous lavez',
      },
      example_en: '"The bathroom is clean and modern."',
    },
    {
      word: 'KITCHEN',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room where you cook and prepare food',
        es: 'Un cuarto donde cocinas y preparas comida',
        fr: 'Une pièce où vous cuisinez et préparez la nourriture',
      },
      example_en: '"I cook dinner in the kitchen."',
    },
    {
      word: 'LIVING ROOM',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room where you sit, relax, and spend time with family',
        es: 'Un cuarto donde te sientas, te relajas y pasas tiempo con familia',
        fr: 'Une pièce où vous vous asseyez, vous détendez et passez du temps en famille',
      },
      example_en: '"We watch television in the living room."',
    },
    {
      word: 'DINING ROOM',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room where you eat meals with others',
        es: 'Un cuarto donde comes comidas con otros',
        fr: 'Une pièce où vous mangez avec d\'autres',
      },
      example_en: '"The dining room has a large table."',
    },
    {
      word: 'GARAGE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A covered space for parking a car',
        es: 'Un espacio cubierto para estacionar un auto',
        fr: 'Un espace couvert pour garer une voiture',
      },
      example_en: '"My car is in the garage."',
    },
    {
      word: 'YARD',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The land around a house, usually with grass',
        es: 'La tierra alrededor de una casa, generalmente con pasto',
        fr: 'La terre autour d\'une maison, généralement avec de l\'herbe',
      },
      example_en: '"The kids play in the yard."',
    },
    {
      word: 'APARTMENT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A set of rooms in a building where a person or family lives',
        es: 'Un conjunto de cuartos en un edificio donde vive una persona o familia',
        fr: 'Un ensemble de pièces dans un immeuble où une personne ou une famille vit',
      },
      example_en: '"I live in a small apartment downtown."',
    },
    {
      word: 'HOUSE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A building where a family lives',
        es: 'Un edificio donde vive una familia',
        fr: 'Un bâtiment où une famille vit',
      },
      example_en: '"I want to buy a house with a big yard."',
    },
    {
      word: 'RENT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The money you pay each month to live in a place',
        es: 'El dinero que pagas cada mes para vivir en un lugar',
        fr: 'L\'argent que vous payez chaque mois pour vivre quelque part',
      },
      example_en: '"The rent is $900 per month."',
    },
    {
      word: 'LANDLORD',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who owns a house or apartment and rents it to others',
        es: 'Una persona que posee una casa o apartamento y lo alquila a otros',
        fr: 'Une personne qui possède une maison ou un appartement et le loue à d\'autres',
      },
      example_en: '"I need to call the landlord about the broken window."',
    },
    {
      word: 'UTILITIES',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Services like water, electricity, and gas that you need at home',
        es: 'Servicios como agua, electricidad y gas que necesitas en casa',
        fr: 'Des services comme l\'eau, l\'électricité et le gaz dont vous avez besoin à la maison',
      },
      example_en: '"Are utilities included in the rent?"',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'BEDROOM',
      question: { en: 'Which room do you sleep in?', es: '¿En qué cuarto duermes?', fr: 'Dans quelle pièce dormez-vous ?' },
      correct: { en: 'The bedroom', es: 'El dormitorio', fr: 'La chambre à coucher' },
      wrong: [
        { en: 'The kitchen', es: 'La cocina', fr: 'La cuisine' },
        { en: 'The living room', es: 'La sala de estar', fr: 'Le salon' },
        { en: 'The bathroom', es: 'El baño', fr: 'La salle de bain' },
      ],
    },
    {
      word: 'KITCHEN',
      question: { en: 'Where do you cook food?', es: '¿Dónde cocinas la comida?', fr: 'Où cuisinez-vous la nourriture ?' },
      correct: { en: 'In the kitchen', es: 'En la cocina', fr: 'Dans la cuisine' },
      wrong: [
        { en: 'In the bedroom', es: 'En la habitación', fr: 'Dans la chambre' },
        { en: 'In the bathroom', es: 'En el baño', fr: 'Dans la salle de bain' },
        { en: 'In the garage', es: 'En el garaje', fr: 'Dans le garage' },
      ],
    },
    {
      word: 'APARTMENT',
      question: { en: 'What is a set of rooms in a building?', es: '¿Qué es un conjunto de cuartos en un edificio?', fr: 'Qu\'est-ce qu\'un ensemble de pièces dans un immeuble ?' },
      correct: { en: 'An apartment', es: 'Un apartamento', fr: 'Un appartement' },
      wrong: [
        { en: 'A house', es: 'Una casa', fr: 'Une maison' },
        { en: 'A garage', es: 'Un garaje', fr: 'Un garage' },
        { en: 'A yard', es: 'Un patio', fr: 'Une cour' },
      ],
    },
    {
      word: 'RENT',
      question: { en: 'What is the money you pay each month to live somewhere?', es: '¿Qué es el dinero que pagas cada mes para vivir en algún lugar?', fr: 'Quel est l\'argent que vous payez chaque mois pour vivre quelque part ?' },
      correct: { en: 'Rent', es: 'Alquiler', fr: 'Loyer' },
      wrong: [
        { en: 'Tax', es: 'Impuesto', fr: 'Impôt' },
        { en: 'Mortgage', es: 'Hipoteca', fr: 'Hypothèque' },
        { en: 'Insurance', es: 'Seguro', fr: 'Assurance' },
      ],
    },
    {
      word: 'BATHROOM',
      question: { en: 'Which room has a toilet and sink?', es: '¿Cuál cuarto tiene un inodoro y lavabo?', fr: 'Quelle pièce a des toilettes et un lavabo ?' },
      correct: { en: 'The bathroom', es: 'El baño', fr: 'La salle de bain' },
      wrong: [
        { en: 'The kitchen', es: 'La cocina', fr: 'La cuisine' },
        { en: 'The living room', es: 'La sala de estar', fr: 'Le salon' },
        { en: 'The bedroom', es: 'La habitación', fr: 'La chambre' },
      ],
    },
    {
      word: 'LANDLORD',
      question: { en: 'Who owns a house and rents it to others?', es: '¿Quién posee una casa y la alquila a otros?', fr: 'Qui possède une maison et la loue à d\'autres ?' },
      correct: { en: 'The landlord', es: 'El propietario', fr: 'Le propriétaire' },
      wrong: [
        { en: 'The tenant', es: 'El inquilino', fr: 'Le locataire' },
        { en: 'The manager', es: 'El gerente', fr: 'Le directeur' },
        { en: 'The realtor', es: 'El agente inmobiliario', fr: 'L\'agent immobilier' },
      ],
    },
    {
      word: 'LIVING ROOM',
      question: { en: 'Where do you relax and spend time with family?', es: '¿Dónde te relajas y pasas tiempo con familia?', fr: 'Où vous détendez-vous et passez du temps en famille ?' },
      correct: { en: 'In the living room', es: 'En la sala de estar', fr: 'Au salon' },
      wrong: [
        { en: 'In the kitchen', es: 'En la cocina', fr: 'Dans la cuisine' },
        { en: 'In the garage', es: 'En el garaje', fr: 'Dans le garage' },
        { en: 'In the yard', es: 'En el patio', fr: 'Dans la cour' },
      ],
    },
    {
      word: 'UTILITIES',
      question: { en: 'What are services like water, electricity, and gas?', es: '¿Qué son servicios como agua, electricidad y gas?', fr: 'Que sont des services comme l\'eau, l\'électricité et le gaz ?' },
      correct: { en: 'Utilities', es: 'Servicios', fr: 'Services' },
      wrong: [
        { en: 'Furniture', es: 'Muebles', fr: 'Mobilier' },
        { en: 'Repairs', es: 'Reparaciones', fr: 'Réparations' },
        { en: 'Taxes', es: 'Impuestos', fr: 'Impôts' },
      ],
    },
    {
      word: 'GARAGE',
      question: { en: 'Where do you park a car?', es: '¿Dónde estacionas un auto?', fr: 'Où garez-vous une voiture ?' },
      correct: { en: 'In the garage', es: 'En el garaje', fr: 'Dans le garage' },
      wrong: [
        { en: 'In the yard', es: 'En el patio', fr: 'Dans la cour' },
        { en: 'In the kitchen', es: 'En la cocina', fr: 'Dans la cuisine' },
        { en: 'In the bedroom', es: 'En la habitación', fr: 'Dans la chambre' },
      ],
    },
    {
      word: 'HOUSE',
      question: { en: 'What is a building where a family lives?', es: '¿Qué es un edificio donde vive una familia?', fr: 'Qu\'est-ce qu\'un bâtiment où une famille vit ?' },
      correct: { en: 'A house', es: 'Una casa', fr: 'Une maison' },
      wrong: [
        { en: 'An apartment', es: 'Un apartamento', fr: 'Un appartement' },
        { en: 'An office', es: 'Una oficina', fr: 'Un bureau' },
        { en: 'A store', es: 'Una tienda', fr: 'Un magasin' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Kenji\'s Apartment Search',
      es: 'La búsqueda del apartamento de Kenji',
      fr: 'La recherche d\'appartement de Kenji',
    },
    passage_en: `Kenji is looking for a new apartment. He reads the rental ads in the newspaper and online. He finds an ad for a two-bedroom apartment near his work. The ad says it is $1,100 per month.

Kenji calls the landlord, Mr. Chen, to ask about the apartment. Mr. Chen says, "Yes, the apartment is available. It has two bedrooms, one bathroom, a kitchen, and a living room. It also has a small yard."

Kenji asks, "How much is the rent?" Mr. Chen says, "The rent is $1,100 per month." Kenji continues, "Are utilities included?" Mr. Chen says, "No, you pay for water and electricity separately. But I include trash removal."

Kenji wants to see the apartment. Mr. Chen invites him to come on Saturday at 10:00 AM. When Kenji arrives, he is very happy. The apartment is clean and bright. The kitchen is modern with new appliances. The bedrooms are large. The living room has big windows.

Kenji asks, "When can I move in?" Mr. Chen says, "You can move in on the first of next month if you sign the lease and pay the deposit." Kenji signs the papers that day. He is excited about his new home. The apartment is perfect for him.`,
    highlights: [
      { word: 'lease', tip: { en: 'lease: a written agreement between landlord and tenant', es: 'lease = contrato: un acuerdo escrito entre propietario e inquilino', fr: 'lease = bail: un accord écrit entre propriétaire et locataire' } },
      { word: 'deposit', tip: { en: 'deposit: money you give to secure an apartment', es: 'deposit = depósito: dinero que das para asegurar un apartamento', fr: 'deposit = dépôt: argent que vous donnez pour sécuriser un appartement' } },
      { word: 'appliances', tip: { en: 'appliances: machines like stove and refrigerator', es: 'appliances = electrodomésticos: máquinas como estufa y refrigerador', fr: 'appliances = appareils: machines comme cuisinière et réfrigérateur' } },
      { word: 'available', tip: { en: 'available: can be rented or used', es: 'available = disponible: puede ser alquilado o usado', fr: 'available = disponible: peut être loué ou utilisé' } },
    ],
    questions: [
      {
        text: { en: '1. How many bedrooms does the apartment have?', es: '1. ¿Cuántos dormitorios tiene el apartamento?', fr: '1. Combien de chambres l\'appartement a-t-il ?' },
        options: [
          { text: { en: 'One bedroom', es: 'Un dormitorio', fr: 'Une chambre' }, correct: false },
          { text: { en: 'Two bedrooms', es: 'Dos dormitorios', fr: 'Deux chambres' }, correct: true },
          { text: { en: 'Three bedrooms', es: 'Tres dormitorios', fr: 'Trois chambres' }, correct: false },
        ],
      },
      {
        text: { en: '2. What is included in the rent?', es: '2. ¿Qué está incluido en el alquiler?', fr: '2. Qu\'est-ce qui est inclus dans le loyer ?' },
        options: [
          { text: { en: 'Water and electricity', es: 'Agua y electricidad', fr: 'Eau et électricité' }, correct: false },
          { text: { en: 'Trash removal', es: 'Remoción de basura', fr: 'Enlèvement des ordures' }, correct: true },
          { text: { en: 'Internet and cable', es: 'Internet y cable', fr: 'Internet et câble' }, correct: false },
        ],
      },
      {
        text: { en: '3. When can Kenji move in?', es: '3. ¿Cuándo puede mudarse Kenji?', fr: '3. Quand Kenji peut-il emménager ?' },
        options: [
          { text: { en: 'On Saturday', es: 'El sábado', fr: 'Le samedi' }, correct: false },
          { text: { en: 'On the first of next month', es: 'El primero del próximo mes', fr: 'Le premier du mois prochain' }, correct: true },
          { text: { en: 'In two weeks', es: 'En dos semanas', fr: 'Dans deux semaines' }, correct: false },
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
    wordBank: ['bedroom', 'kitchen', 'rent', 'landlord', 'apartment'],
    sentences: [
      {
        before: { en: 'The', es: 'El', fr: 'L\'' },
        answer: 'apartment',
        after: { en: 'has two rooms and one bathroom.', es: 'tiene dos cuartos y un baño.', fr: 'a deux pièces et une salle de bain.' },
      },
      {
        before: { en: 'I sleep in the', es: 'Duermo en el', fr: 'Je dors dans la' },
        answer: 'bedroom',
        after: { en: 'every night.', es: 'cada noche.', fr: 'chaque nuit.' },
      },
      {
        before: { en: 'We cook food in the', es: 'Cocinamos comida en la', fr: 'Nous cuisinons dans la' },
        answer: 'kitchen',
        after: { en: 'every day.', es: 'cada día.', fr: 'chaque jour.' },
      },
      {
        before: { en: 'The', es: 'El', fr: 'Le' },
        answer: 'rent',
        after: { en: 'is $900 per month.', es: 'es $900 por mes.', fr: 'est $900 par mois.' },
      },
      {
        before: { en: 'Call the', es: 'Llama al', fr: 'Appelez le' },
        answer: 'landlord',
        after: { en: 'to ask about the apartment.', es: 'para preguntar sobre el apartamento.', fr: 'pour demander l\'appartement.' },
      },
    ],
  },
};
