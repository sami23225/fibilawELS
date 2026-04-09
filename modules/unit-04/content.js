/**
 * Fibi Law ELS — Unit 04: Around the Clock
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-04',
  number: '04',
  title: {
    en: 'Around the Clock',
    es: 'Alrededor del reloj',
    fr: 'Autour de l\'horloge',
  },
  topic: {
    en: 'Times of day · Daily routines · Clock reading',
    es: 'Horas del día · Rutinas diarias · Lectura del reloj',
    fr: 'Heures de la journée · Routines quotidiennes · Lecture de l\'horloge',
  },
  grammar: {
    en: 'I wake up at ___ in the ___ · Present continuous: I am eating breakfast at 7:00',
    es: 'Me despierto a ___ en la ___ · Presente continuo: Estoy desayunando a las 7:00',
    fr: 'Je me réveille à ___ dans la ___ · Présent continu: Je prends mon petit-déjeuner à 7h00',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'MORNING',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The time between sunrise and noon — when the day begins',
        es: 'El tiempo entre la salida del sol y el mediodía — cuando comienza el día',
        fr: 'Le moment entre le lever du soleil et midi — quand la journée commence',
      },
      example_en: '"I drink coffee every morning."',
    },
    {
      word: 'NOON',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The middle of the day — 12:00 in the afternoon',
        es: 'La mitad del día — las 12:00 en la tarde',
        fr: 'Le milieu de la journée — 12h00 l\'après-midi',
      },
      example_en: '"We eat lunch at noon."',
    },
    {
      word: 'AFTERNOON',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The time between noon and sunset — when it is still daytime',
        es: 'El tiempo entre el mediodía y la puesta de sol — cuando todavía es de día',
        fr: 'Le moment entre midi et le coucher du soleil — quand il fait encore jour',
      },
      example_en: '"School ends in the afternoon."',
    },
    {
      word: 'EVENING',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The time between sunset and bedtime — when the sky becomes dark',
        es: 'El tiempo entre la puesta de sol y la hora de dormir — cuando el cielo se oscurece',
        fr: 'Le moment entre le coucher du soleil et l\'heure du coucher — quand le ciel s\'assombrit',
      },
      example_en: '"We eat dinner in the evening."',
    },
    {
      word: 'NIGHT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The time when it is dark outside and people sleep',
        es: 'El tiempo cuando está oscuro afuera y las personas duermen',
        fr: 'Le moment où il fait nuit dehors et les gens dorment',
      },
      example_en: '"I go to bed at night."',
    },
    {
      word: 'MIDNIGHT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The middle of the night — 12:00 when the day changes',
        es: 'La mitad de la noche — las 12:00 cuando el día cambia',
        fr: 'Le milieu de la nuit — 12h00 quand le jour change',
      },
      example_en: '"After midnight, it is a new day."',
    },
    {
      word: 'WAKE UP',
      pos: { en: 'verb phrase', es: 'frase verbal', fr: 'phrase verbale' },
      definition: {
        en: 'To stop sleeping and get out of bed',
        es: 'Dejar de dormir y levantarse de la cama',
        fr: 'Arrêter de dormir et se lever du lit',
      },
      example_en: '"I wake up at 6:00 every morning."',
    },
    {
      word: 'BRUSH TEETH',
      pos: { en: 'verb phrase', es: 'frase verbal', fr: 'phrase verbale' },
      definition: {
        en: 'To clean your teeth with a toothbrush',
        es: 'Limpiar los dientes con un cepillo de dientes',
        fr: 'Nettoyer vos dents avec une brosse à dents',
      },
      example_en: '"Brush your teeth before breakfast."',
    },
    {
      word: 'SHOWER',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To wash your body with hot water and soap',
        es: 'Lavar tu cuerpo con agua caliente y jabón',
        fr: 'Laver votre corps avec de l\'eau chaude et du savon',
      },
      example_en: '"I take a shower in the morning."',
    },
    {
      word: 'GET DRESSED',
      pos: { en: 'verb phrase', es: 'frase verbal', fr: 'phrase verbale' },
      definition: {
        en: 'To put on clothes',
        es: 'Ponerse ropa',
        fr: 'Mettre des vêtements',
      },
      example_en: '"Get dressed for school."',
    },
    {
      word: 'EAT BREAKFAST',
      pos: { en: 'verb phrase', es: 'frase verbal', fr: 'phrase verbale' },
      definition: {
        en: 'To eat the first meal of the day',
        es: 'Comer la primera comida del día',
        fr: 'Manger le premier repas de la journée',
      },
      example_en: '"Eat a healthy breakfast before school."',
    },
    {
      word: 'LEAVE',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To go away from a place',
        es: 'Irse de un lugar',
        fr: 'Partir d\'un endroit',
      },
      example_en: '"I leave for school at 7:45."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'MORNING',
      question: { en: 'What time of day is morning?', es: '¿Qué parte del día es la mañana?', fr: 'Quel moment de la journée est le matin ?' },
      correct: { en: 'The time between sunrise and noon', es: 'El tiempo entre la salida del sol y el mediodía', fr: 'Le moment entre le lever du soleil et midi' },
      wrong: [
        { en: 'The middle of the day at 12:00', es: 'La mitad del día a las 12:00', fr: 'Le milieu de la journée à midi' },
        { en: 'The time when it is dark and people sleep', es: 'El tiempo cuando está oscuro y las personas duermen', fr: 'Le moment où il fait nuit et les gens dorment' },
        { en: 'The time between sunset and bedtime', es: 'El tiempo entre la puesta de sol y la hora de dormir', fr: 'Le moment entre le coucher du soleil et l\'heure du coucher' },
      ],
    },
    {
      word: 'NOON',
      question: { en: 'What time is noon?', es: '¿Qué hora es el mediodía?', fr: 'Quelle heure est midi ?' },
      correct: { en: '12:00 in the middle of the day', es: 'Las 12:00 en la mitad del día', fr: '12h00 au milieu de la journée' },
      wrong: [
        { en: 'When the sun rises in the morning', es: 'Cuando sale el sol por la mañana', fr: 'Quand le soleil se lève le matin' },
        { en: 'When the sun sets in the evening', es: 'Cuando se pone el sol por la tarde', fr: 'Quand le soleil se couche le soir' },
        { en: '12:00 in the middle of the night', es: 'Las 12:00 en la mitad de la noche', fr: '12h00 au milieu de la nuit' },
      ],
    },
    {
      word: 'AFTERNOON',
      question: { en: 'What time is afternoon?', es: '¿Cuándo es la tarde?', fr: 'Quand est l\'après-midi ?' },
      correct: { en: 'The time between noon and sunset', es: 'El tiempo entre el mediodía y la puesta de sol', fr: 'Le moment entre midi et le coucher du soleil' },
      wrong: [
        { en: 'When you wake up and eat breakfast', es: 'Cuando te despiertas y desayunas', fr: 'Quand vous vous réveillez et prenez votre petit-déjeuner' },
        { en: 'When it is dark and people sleep', es: 'Cuando está oscuro y las personas duermen', fr: 'Quand il fait nuit et les gens dorment' },
        { en: 'When the sun first rises', es: 'Cuando sale el sol por primera vez', fr: 'Quand le soleil se lève pour la première fois' },
      ],
    },
    {
      word: 'WAKE UP',
      question: { en: 'What does "wake up" mean?', es: '¿Qué significa "wake up"?', fr: 'Que signifie "wake up" ?' },
      correct: { en: 'To stop sleeping and get out of bed', es: 'Dejar de dormir y levantarse de la cama', fr: 'Arrêter de dormir et se lever du lit' },
      wrong: [
        { en: 'To go to sleep at night', es: 'Ir a dormir por la noche', fr: 'Aller dormir la nuit' },
        { en: 'To eat the first meal of the day', es: 'Comer la primera comida del día', fr: 'Manger le premier repas de la journée' },
        { en: 'To wash your body with water', es: 'Lavar tu cuerpo con agua', fr: 'Laver votre corps avec de l\'eau' },
      ],
    },
    {
      word: 'EVENING',
      question: { en: 'What is evening?', es: '¿Qué es la noche (evening)?', fr: 'Qu\'est-ce que le soir ?' },
      correct: { en: 'The time between sunset and bedtime when sky is dark', es: 'El tiempo entre la puesta de sol y la hora de dormir cuando el cielo está oscuro', fr: 'Le moment entre le coucher du soleil et l\'heure du coucher quand le ciel est noir' },
      wrong: [
        { en: 'The time when you eat breakfast', es: 'El tiempo cuando desayunas', fr: 'Le moment où vous prenez votre petit-déjeuner' },
        { en: 'The time between noon and sunset', es: 'El tiempo entre el mediodía y la puesta de sol', fr: 'Le moment entre midi et le coucher du soleil' },
        { en: 'The time when the sun rises', es: 'El tiempo cuando sale el sol', fr: 'Le moment où le soleil se lève' },
      ],
    },
    {
      word: 'MIDNIGHT',
      question: { en: 'What is midnight?', es: '¿Qué es la medianoche?', fr: 'Qu\'est-ce que minuit ?' },
      correct: { en: '12:00 in the middle of the night when day changes', es: 'Las 12:00 en la mitad de la noche cuando el día cambia', fr: '12h00 au milieu de la nuit quand le jour change' },
      wrong: [
        { en: '12:00 in the middle of the day', es: 'Las 12:00 en la mitad del día', fr: '12h00 au milieu de la journée' },
        { en: 'When you eat lunch', es: 'Cuando almuerzas', fr: 'Quand vous déjeunez' },
        { en: 'When the sun rises', es: 'Cuando sale el sol', fr: 'Quand le soleil se lève' },
      ],
    },
    {
      word: 'EAT BREAKFAST',
      question: { en: 'What is breakfast?', es: '¿Qué es el desayuno?', fr: 'Qu\'est-ce que le petit-déjeuner ?' },
      correct: { en: 'The first meal of the day', es: 'La primera comida del día', fr: 'Le premier repas de la journée' },
      wrong: [
        { en: 'The meal you eat at noon', es: 'La comida que comes al mediodía', fr: 'Le repas que vous mangez à midi' },
        { en: 'The meal you eat in the evening', es: 'La comida que comes por la noche', fr: 'Le repas que vous mangez le soir' },
        { en: 'When you go to bed', es: 'Cuando te vas a la cama', fr: 'Quand vous allez au lit' },
      ],
    },
    {
      word: 'GET DRESSED',
      question: { en: 'What does "get dressed" mean?', es: '¿Qué significa "get dressed"?', fr: 'Que signifie "get dressed" ?' },
      correct: { en: 'To put on clothes', es: 'Ponerse ropa', fr: 'Mettre des vêtements' },
      wrong: [
        { en: 'To remove your clothes', es: 'Quitarse la ropa', fr: 'Enlever vos vêtements' },
        { en: 'To brush your teeth', es: 'Cepillarse los dientes', fr: 'Se brosser les dents' },
        { en: 'To take a shower', es: 'Tomar una ducha', fr: 'Prendre une douche' },
      ],
    },
    {
      word: 'NIGHT',
      question: { en: 'What is night?', es: '¿Qué es la noche?', fr: 'Qu\'est-ce que la nuit ?' },
      correct: { en: 'The time when it is dark and people sleep', es: 'El tiempo cuando está oscuro y las personas duermen', fr: 'Le moment où il fait nuit et les gens dorment' },
      wrong: [
        { en: 'The time when the sun rises', es: 'El tiempo cuando sale el sol', fr: 'Le moment où le soleil se lève' },
        { en: 'The time between noon and sunset', es: 'El tiempo entre el mediodía y la puesta de sol', fr: 'Le moment entre midi et le coucher du soleil' },
        { en: 'The time when you eat breakfast', es: 'El tiempo cuando desayunas', fr: 'Le moment où vous prenez votre petit-déjeuner' },
      ],
    },
    {
      word: 'SHOWER',
      question: { en: 'What does "shower" mean?', es: '¿Qué significa "shower"?', fr: 'Que signifie "shower" ?' },
      correct: { en: 'To wash your body with hot water and soap', es: 'Lavar tu cuerpo con agua caliente y jabón', fr: 'Laver votre corps avec de l\'eau chaude et du savon' },
      wrong: [
        { en: 'To sleep at night', es: 'Dormir por la noche', fr: 'Dormir la nuit' },
        { en: 'To eat a meal', es: 'Comer una comida', fr: 'Manger un repas' },
        { en: 'To put on clothes', es: 'Ponerse ropa', fr: 'Mettre des vêtements' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Fatima\'s Morning Routine',
      es: 'La rutina matinal de Fatima',
      fr: 'La routine matinale de Fatima',
    },
    passage_en: `Fatima opens her eyes at 6:00 in the morning. The sun is just beginning to rise. "I wake up early every day," she thinks. She gets out of bed and walks to the bathroom.

First, Fatima brushes her teeth with her toothbrush. The water is cold and fresh. Then she takes a warm shower. The water feels good after sleeping all night. She washes her hair and body with soap.

After her shower, Fatima gets dressed. She puts on her school clothes — a blue uniform and black shoes. It is 6:30 now. She looks at the clock on the wall.

Fatima walks to the kitchen and eats breakfast. Her mother has prepared eggs, bread, and orange juice. "Eat quickly, Fatima," her mother says. "School starts at 8:00." Fatima eats everything. She drinks her juice at 6:50.

At 7:15 in the morning, Fatima leaves her house for school. The neighborhood is quiet. Some people are still sleeping. Others are waking up to start their day. Fatima walks to the bus stop. She is ready for school. Her morning routine is complete.`,
    highlights: [
      { word: 'rises', tip: { en: 'rises: comes up or goes up', es: 'rises = sube: sube o aparece', fr: 'rises = se lève: monte ou apparaît' } },
      { word: 'bathroom', tip: { en: 'bathroom: a room where you shower and use the toilet', es: 'bathroom = baño: una habitación donde te duchas', fr: 'bathroom = salle de bain: une pièce où vous vous douchez' } },
      { word: 'neighborhood', tip: { en: 'neighborhood: the area near where you live', es: 'neighborhood = vecindario: el área cerca de donde vives', fr: 'neighborhood = quartier: la zone près d\'où vous vivez' } },
      { word: 'routine', tip: { en: 'routine: a set of actions you do regularly', es: 'routine = rutina: un conjunto de acciones que haces regularmente', fr: 'routine = routine: un ensemble d\'actions que vous faites régulièrement' } },
    ],
    questions: [
      {
        text: { en: '1. What time does Fatima wake up?', es: '1. ¿A qué hora se despierta Fatima?', fr: '1. À quelle heure Fatima se réveille-t-elle ?' },
        options: [
          { text: { en: '5:00 in the morning', es: 'A las 5:00 de la mañana', fr: 'À 5h00 du matin' }, correct: false },
          { text: { en: '6:00 in the morning', es: 'A las 6:00 de la mañana', fr: 'À 6h00 du matin' }, correct: true },
          { text: { en: '7:00 in the morning', es: 'A las 7:00 de la mañana', fr: 'À 7h00 du matin' }, correct: false },
        ],
      },
      {
        text: { en: '2. What does Fatima do after she wakes up?', es: '2. ¿Qué hace Fatima después de despertarse?', fr: '2. Que fait Fatima après son réveil ?' },
        options: [
          { text: { en: 'She eats breakfast immediately', es: 'Desayuna inmediatamente', fr: 'Elle prend son petit-déjeuner immédiatement' }, correct: false },
          { text: { en: 'She brushes her teeth and takes a shower', es: 'Se cepilla los dientes y se ducha', fr: 'Elle se brosse les dents et prend une douche' }, correct: true },
          { text: { en: 'She goes back to bed', es: 'Se vuelve a acostar', fr: 'Elle se recouche' }, correct: false },
        ],
      },
      {
        text: { en: '3. What time does Fatima leave for school?', es: '3. ¿A qué hora se va Fatima a la escuela?', fr: '3. À quelle heure Fatima part-elle pour l\'école ?' },
        options: [
          { text: { en: '6:50 in the morning', es: 'A las 6:50 de la mañana', fr: 'À 6h50 du matin' }, correct: false },
          { text: { en: '7:15 in the morning', es: 'A las 7:15 de la mañana', fr: 'À 7h15 du matin' }, correct: true },
          { text: { en: '8:00 in the morning', es: 'A las 8:00 de la mañana', fr: 'À 8h00 du matin' }, correct: false },
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
    wordBank: ['morning', 'afternoon', 'evening', 'midnight', 'noon'],
    sentences: [
      {
        before: { en: 'I wake up every', es: 'Me despierto cada', fr: 'Je me réveille chaque' },
        answer: 'morning',
        after: { en: 'at 6:00.', es: 'a las 6:00.', fr: 'à 6h00.' },
      },
      {
        before: { en: 'We eat lunch in the', es: 'Almorzamos por la', fr: 'Nous déjeunons dans l\'' },
        answer: 'afternoon',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'Class starts at', es: 'La clase comienza a', fr: 'Le cours commence à' },
        answer: 'noon',
        after: { en: '— exactly 12:00.', es: '— exactamente a las 12:00.', fr: '— exactement à 12h00.' },
      },
      {
        before: { en: 'The city is quiet at', es: 'La ciudad está tranquila a', fr: 'La ville est tranquille à' },
        answer: 'midnight',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'I watch TV in the', es: 'Veo televisión por la', fr: 'Je regarde la télévision en' },
        answer: 'evening',
        after: { en: '.', es: '.', fr: '.' },
      },
    ],
  },
};
