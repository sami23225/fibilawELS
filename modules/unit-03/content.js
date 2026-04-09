/**
 * Fibi Law ELS — Unit 03: Numbers
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-03',
  number: '03',
  title: {
    en: 'Numbers',
    es: 'Números',
    fr: 'Nombres',
  },
  topic: {
    en: 'Numbers 0–10 · Personal information · Phone numbers',
    es: 'Números 0–10 · Información personal · Números de teléfono',
    fr: 'Nombres 0–10 · Informations personnelles · Numéros de téléphone',
  },
  grammar: {
    en: 'My phone number is ___ · I live at ___',
    es: 'Mi número de teléfono es ___ · Vivo en ___',
    fr: 'Mon numéro de téléphone est ___ · J\'habite à ___',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'ZERO',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 0 — nothing or empty',
        es: 'El número 0 — nada o vacío',
        fr: 'Le nombre 0 — rien ou vide',
      },
      example_en: '"The score is zero to five."',
    },
    {
      word: 'ONE',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 1 — a single item',
        es: 'El número 1 — un solo artículo',
        fr: 'Le nombre 1 — un seul élément',
      },
      example_en: '"I have one book in my bag."',
    },
    {
      word: 'TWO',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 2 — a pair of items',
        es: 'El número 2 — un par de artículos',
        fr: 'Le nombre 2 — une paire d\'éléments',
      },
      example_en: '"There are two students in this pair."',
    },
    {
      word: 'THREE',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 3 — three items or people',
        es: 'El número 3 — tres artículos o personas',
        fr: 'Le nombre 3 — trois éléments ou personnes',
      },
      example_en: '"I have three pens on my desk."',
    },
    {
      word: 'FOUR',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 4 — four items or people',
        es: 'El número 4 — cuatro artículos o personas',
        fr: 'Le nombre 4 — quatre éléments ou personnes',
      },
      example_en: '"A chair has four legs."',
    },
    {
      word: 'FIVE',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 5 — five items or people',
        es: 'El número 5 — cinco artículos o personas',
        fr: 'Le nombre 5 — cinq éléments ou personnes',
      },
      example_en: '"I have five fingers on my hand."',
    },
    {
      word: 'SIX',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 6 — six items or people',
        es: 'El número 6 — seis artículos o personas',
        fr: 'Le nombre 6 — six éléments ou personnes',
      },
      example_en: '"School ends at six o\'clock."',
    },
    {
      word: 'SEVEN',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 7 — seven items or people',
        es: 'El número 7 — siete artículos o personas',
        fr: 'Le nombre 7 — sept éléments ou personnes',
      },
      example_en: '"There are seven days in a week."',
    },
    {
      word: 'EIGHT',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 8 — eight items or people',
        es: 'El número 8 — ocho artículos o personas',
        fr: 'Le nombre 8 — huit éléments ou personnes',
      },
      example_en: '"The test has eight questions."',
    },
    {
      word: 'NINE',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 9 — nine items or people',
        es: 'El número 9 — nueve artículos o personas',
        fr: 'Le nombre 9 — neuf éléments ou personnes',
      },
      example_en: '"My birthday is on the ninth of June."',
    },
    {
      word: 'TEN',
      pos: { en: 'number', es: 'número', fr: 'nombre' },
      definition: {
        en: 'The number 10 — ten items or people',
        es: 'El número 10 — diez artículos o personas',
        fr: 'Le nombre 10 — dix éléments ou personnes',
      },
      example_en: '"The quiz has ten questions."',
    },
    {
      word: 'ADDRESS',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The location where someone lives — street, number, and city',
        es: 'La ubicación donde vive alguien — calle, número y ciudad',
        fr: 'L\'endroit où quelqu\'un habite — rue, numéro et ville',
      },
      example_en: '"What is your home address?"',
    },
    {
      word: 'PHONE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A device or number used to make calls and send messages',
        es: 'Un dispositivo o número utilizado para hacer llamadas y enviar mensajes',
        fr: 'Un appareil ou un numéro utilisé pour passer des appels et envoyer des messages',
      },
      example_en: '"Can I have your phone number?"',
    },
    {
      word: 'ZIP CODE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A series of numbers at the end of an address that identifies a postal area',
        es: 'Una serie de números al final de una dirección que identifica un área postal',
        fr: 'Une série de numéros à la fin d\'une adresse qui identifie une zone postale',
      },
      example_en: '"My zip code is 30301."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'ZERO',
      question: { en: 'What is the number zero?', es: '¿Cuál es el número cero?', fr: 'Quel est le nombre zéro ?' },
      correct: { en: 'The number 0 — nothing or empty', es: 'El número 0 — nada o vacío', fr: 'Le nombre 0 — rien ou vide' },
      wrong: [
        { en: 'The number 1', es: 'El número 1', fr: 'Le nombre 1' },
        { en: 'The number 10', es: 'El número 10', fr: 'Le nombre 10' },
        { en: 'A location where someone lives', es: 'Un lugar donde alguien vive', fr: 'Un endroit où quelqu\'un habite' },
      ],
    },
    {
      word: 'FIVE',
      question: { en: 'What is the number five?', es: '¿Cuál es el número cinco?', fr: 'Quel est le nombre cinq ?' },
      correct: { en: 'The number 5 — five items or people', es: 'El número 5 — cinco artículos o personas', fr: 'Le nombre 5 — cinq éléments ou personnes' },
      wrong: [
        { en: 'The number 4', es: 'El número 4', fr: 'Le nombre 4' },
        { en: 'The number 6', es: 'El número 6', fr: 'Le nombre 6' },
        { en: 'A postal code for a location', es: 'Un código postal para una ubicación', fr: 'Un code postal pour un lieu' },
      ],
    },
    {
      word: 'TEN',
      question: { en: 'What is the number ten?', es: '¿Cuál es el número diez?', fr: 'Quel est le nombre dix ?' },
      correct: { en: 'The number 10 — ten items or people', es: 'El número 10 — diez artículos o personas', fr: 'Le nombre 10 — dix éléments ou personnes' },
      wrong: [
        { en: 'The number 9', es: 'El número 9', fr: 'Le nombre 9' },
        { en: 'The number 0', es: 'El número 0', fr: 'Le nombre 0' },
        { en: 'A device for making calls', es: 'Un dispositivo para hacer llamadas', fr: 'Un appareil pour passer des appels' },
      ],
    },
    {
      word: 'ADDRESS',
      question: { en: 'What is an address?', es: '¿Qué es una dirección?', fr: 'Qu\'est-ce qu\'une adresse ?' },
      correct: { en: 'The location where someone lives with street and city', es: 'La ubicación donde vive alguien con calle y ciudad', fr: 'L\'endroit où quelqu\'un habite avec rue et ville' },
      wrong: [
        { en: 'A series of numbers for a postal area', es: 'Una serie de números para un área postal', fr: 'Une série de numéros pour une zone postale' },
        { en: 'A device for making calls', es: 'Un dispositivo para hacer llamadas', fr: 'Un appareil pour passer des appels' },
        { en: 'The number 0', es: 'El número 0', fr: 'Le nombre 0' },
      ],
    },
    {
      word: 'PHONE',
      question: { en: 'What is a phone number?', es: '¿Qué es un número de teléfono?', fr: 'Qu\'est-ce qu\'un numéro de téléphone ?' },
      correct: { en: 'A series of digits used to make calls and send messages', es: 'Una serie de dígitos utilizados para hacer llamadas y enviar mensajes', fr: 'Une série de chiffres utilisés pour passer des appels et envoyer des messages' },
      wrong: [
        { en: 'The place where someone lives', es: 'El lugar donde vive alguien', fr: 'L\'endroit où quelqu\'un habite' },
        { en: 'A number that identifies a postal area', es: 'Un número que identifica un área postal', fr: 'Un numéro qui identifie une zone postale' },
        { en: 'The number 7', es: 'El número 7', fr: 'Le nombre 7' },
      ],
    },
    {
      word: 'THREE',
      question: { en: 'What is the number three?', es: '¿Cuál es el número tres?', fr: 'Quel est le nombre trois ?' },
      correct: { en: 'The number 3 — three items or people', es: 'El número 3 — tres artículos o personas', fr: 'Le nombre 3 — trois éléments ou personnes' },
      wrong: [
        { en: 'The number 2', es: 'El número 2', fr: 'Le nombre 2' },
        { en: 'The number 4', es: 'El número 4', fr: 'Le nombre 4' },
        { en: 'A location where you live', es: 'Un lugar donde vives', fr: 'Un endroit où vous vivez' },
      ],
    },
    {
      word: 'SEVEN',
      question: { en: 'How many days are in a week?', es: '¿Cuántos días hay en una semana?', fr: 'Combien de jours y a-t-il dans une semaine ?' },
      correct: { en: 'Seven — the number 7', es: 'Siete — el número 7', fr: 'Sept — le nombre 7' },
      wrong: [
        { en: 'Six — the number 6', es: 'Seis — el número 6', fr: 'Six — le nombre 6' },
        { en: 'Eight — the number 8', es: 'Ocho — el número 8', fr: 'Huit — le nombre 8' },
        { en: 'Ten — the number 10', es: 'Diez — el número 10', fr: 'Dix — le nombre 10' },
      ],
    },
    {
      word: 'ZIP CODE',
      question: { en: 'What is a zip code?', es: '¿Qué es un código postal?', fr: 'Qu\'est-ce qu\'un code postal ?' },
      correct: { en: 'Numbers that identify a postal area at the end of an address', es: 'Números que identifican un área postal al final de una dirección', fr: 'Des numéros qui identifient une zone postale à la fin d\'une adresse' },
      wrong: [
        { en: 'A place where someone lives', es: 'Un lugar donde vive alguien', fr: 'Un endroit où quelqu\'un habite' },
        { en: 'A device for making phone calls', es: 'Un dispositivo para hacer llamadas telefónicas', fr: 'Un appareil pour passer des appels téléphoniques' },
        { en: 'The number 5', es: 'El número 5', fr: 'Le nombre 5' },
      ],
    },
    {
      word: 'FOUR',
      question: { en: 'What is the number four?', es: '¿Cuál es el número cuatro?', fr: 'Quel est le nombre quatre ?' },
      correct: { en: 'The number 4 — four items or people', es: 'El número 4 — cuatro artículos o personas', fr: 'Le nombre 4 — quatre éléments ou personnes' },
      wrong: [
        { en: 'The number 5', es: 'El número 5', fr: 'Le nombre 5' },
        { en: 'The number 3', es: 'El número 3', fr: 'Le nombre 3' },
        { en: 'A location where you live', es: 'Un lugar donde vives', fr: 'Un endroit où vous vivez' },
      ],
    },
    {
      word: 'NINE',
      question: { en: 'What is the number nine?', es: '¿Cuál es el número nueve?', fr: 'Quel est le nombre neuf ?' },
      correct: { en: 'The number 9 — nine items or people', es: 'El número 9 — nueve artículos o personas', fr: 'Le nombre 9 — neuf éléments ou personnes' },
      wrong: [
        { en: 'The number 8', es: 'El número 8', fr: 'Le nombre 8' },
        { en: 'The number 10', es: 'El número 10', fr: 'Le nombre 10' },
        { en: 'A telephone device or number', es: 'Un dispositivo o número de teléfono', fr: 'Un appareil ou un numéro de téléphone' },
      ],
    },
    {
      word: 'EIGHT',
      question: { en: 'What is the number eight?', es: '¿Cuál es el número ocho?', fr: 'Quel est le nombre huit ?' },
      correct: { en: 'The number 8 — eight items or people', es: 'El número 8 — ocho artículos o personas', fr: 'Le nombre 8 — huit éléments ou personnes' },
      wrong: [
        { en: 'The number 7', es: 'El número 7', fr: 'Le nombre 7' },
        { en: 'The number 9', es: 'El número 9', fr: 'Le nombre 9' },
        { en: 'A location where someone lives', es: 'Un lugar donde vive alguien', fr: 'L\'endroit où quelqu\'un habite' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Miguel at the Clinic',
      es: 'Miguel en la clínica',
      fr: 'Miguel à la clinique',
    },
    passage_en: `Miguel walks into a clinic to see a doctor. A woman at the desk smiles and says, "Hello. Please fill out this form." Miguel sits in a blue chair and looks at the form.

The form asks for important information. First, it asks for his name. "Miguel Lopez," he writes. Then it asks for his phone number. Miguel thinks for a moment. His phone number is 555-1234. He writes it carefully: 5-5-5-1-2-3-4.

Next, the form asks for his address. Miguel writes: 402 Maple Street. It is where he lives with his family. The form also asks for the zip code. Miguel knows this number because his address has it. He writes: 30301.

The woman asks, "Do you live at 402 Maple Street?" Miguel says, "Yes." She says, "Your address looks good. Your phone number has zero mistakes." Miguel feels happy.

At the end, the doctor calls his name. "Miguel Lopez? Come this way please." Miguel stands up and feels ready. He completed the form correctly. The numbers are all correct—name, phone, address, and zip code.`,
    highlights: [
      { word: 'form', tip: { en: 'form: a piece of paper with questions you must fill out', es: 'form = formulario: un papel con preguntas que debes completar', fr: 'form = formulaire: un morceau de papier avec des questions à remplir' } },
      { word: 'clinic', tip: { en: 'clinic: a place where doctors help sick people', es: 'clinic = clínica: un lugar donde los doctores ayudan a las personas enfermas', fr: 'clinic = clinique: un endroit où les médecins aident les gens malades' } },
      { word: 'family', tip: { en: 'family: parents and children who live together', es: 'family = familia: padres e hijos que viven juntos', fr: 'family = famille: parents et enfants qui vivent ensemble' } },
      { word: 'completed', tip: { en: 'completed: finished — did the whole thing', es: 'completed = completado: terminado — hiciste todo', fr: 'completed = complété: terminé — vous avez fait le tout' } },
    ],
    questions: [
      {
        text: { en: '1. Where is Miguel?', es: '1. ¿Dónde está Miguel?', fr: '1. Où est Miguel ?' },
        options: [
          { text: { en: 'At school', es: 'En la escuela', fr: 'À l\'école' }, correct: false },
          { text: { en: 'At a clinic', es: 'En una clínica', fr: 'À une clinique' }, correct: true },
          { text: { en: 'At home', es: 'En casa', fr: 'À la maison' }, correct: false },
        ],
      },
      {
        text: { en: '2. What is Miguel\'s phone number?', es: '2. ¿Cuál es el número de teléfono de Miguel?', fr: '2. Quel est le numéro de téléphone de Miguel ?' },
        options: [
          { text: { en: '555-4321', es: '555-4321', fr: '555-4321' }, correct: false },
          { text: { en: '555-1234', es: '555-1234', fr: '555-1234' }, correct: true },
          { text: { en: '402-1234', es: '402-1234', fr: '402-1234' }, correct: false },
        ],
      },
      {
        text: { en: '3. What is Miguel\'s zip code?', es: '3. ¿Cuál es el código postal de Miguel?', fr: '3. Quel est le code postal de Miguel ?' },
        options: [
          { text: { en: '402', es: '402', fr: '402' }, correct: false },
          { text: { en: '30301', es: '30301', fr: '30301' }, correct: true },
          { text: { en: '55512', es: '55512', fr: '55512' }, correct: false },
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
    wordBank: ['zero', 'phone', 'address', 'zip code', 'ten'],
    sentences: [
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'phone',
        after: { en: 'number is 555-1234.', es: 'número es 555-1234.', fr: 'numéro est 555-1234.' },
      },
      {
        before: { en: 'I live at this', es: 'Vivo en esta', fr: 'J\'habite à cette' },
        answer: 'address',
        after: { en: ': 402 Maple Street.', es: ': 402 Maple Street.', fr: ': 402 Maple Street.' },
      },
      {
        before: { en: 'The number after nine is', es: 'El número después de nueve es', fr: 'Le nombre après neuf est' },
        answer: 'ten',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'zip code',
        after: { en: 'is 30301.', es: 'es 30301.', fr: 'est 30301.' },
      },
      {
        before: { en: 'The score was', es: 'La puntuación fue', fr: 'Le score était' },
        answer: 'zero',
        after: { en: 'points.', es: 'puntos.', fr: 'points.' },
      },
    ],
  },
};
