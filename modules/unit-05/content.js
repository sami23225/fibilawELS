/**
 * Fibi Law ELS — Unit 05: The Calendar
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-05',
  number: '05',
  title: {
    en: 'The Calendar',
    es: 'El calendario',
    fr: 'Le calendrier',
  },
  topic: {
    en: 'Days of the week · Months · Reading a calendar',
    es: 'Días de la semana · Meses · Lectura de un calendario',
    fr: 'Jours de la semaine · Mois · Lecture d\'un calendrier',
  },
  grammar: {
    en: 'Today is ___ · My appointment is on ___',
    es: 'Hoy es ___ · Mi cita es el ___',
    fr: 'Aujourd\'hui est ___ · Mon rendez-vous est le ___',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'YEAR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A period of 365 days from January 1 to December 31',
        es: 'Un período de 365 días del 1 de enero al 31 de diciembre',
        fr: 'Une période de 365 jours du 1er janvier au 31 décembre',
      },
      example_en: '"I was born in the year 2005."',
    },
    {
      word: 'MONTH',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'One of the twelve periods that divide a year',
        es: 'Uno de los doce períodos que dividen un año',
        fr: 'L\'un des douze périodes qui divisent une année',
      },
      example_en: '"January is the first month of the year."',
    },
    {
      word: 'WEEK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A period of seven days starting Monday',
        es: 'Un período de siete días que comienza el lunes',
        fr: 'Une période de sept jours commençant lundi',
      },
      example_en: '"There is a class one time each week."',
    },
    {
      word: 'DAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A period of 24 hours from midnight to midnight',
        es: 'Un período de 24 horas de medianoche a medianoche',
        fr: 'Une période de 24 heures de minuit à minuit',
      },
      example_en: '"Today is a sunny day."',
    },
    {
      word: 'MONDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The first day of the week',
        es: 'El primer día de la semana',
        fr: 'Le premier jour de la semaine',
      },
      example_en: '"School starts on Monday morning."',
    },
    {
      word: 'TUESDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The second day of the week',
        es: 'El segundo día de la semana',
        fr: 'Le deuxième jour de la semaine',
      },
      example_en: '"I have English class on Tuesday."',
    },
    {
      word: 'WEDNESDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The middle day of the week — the third day',
        es: 'El día del medio de la semana — el tercer día',
        fr: 'Le jour du milieu de la semaine — le troisième jour',
      },
      example_en: '"Wednesday is in the middle of the work week."',
    },
    {
      word: 'THURSDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The fourth day of the week',
        es: 'El cuarto día de la semana',
        fr: 'Le quatrième jour de la semaine',
      },
      example_en: '"My doctor\'s appointment is on Thursday."',
    },
    {
      word: 'FRIDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The fifth and last work day of the week',
        es: 'El quinto y último día de trabajo de la semana',
        fr: 'Le cinquième et dernier jour ouvrable de la semaine',
      },
      example_en: '"On Friday we celebrate the end of the work week."',
    },
    {
      word: 'SATURDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The sixth day of the week — a weekend day',
        es: 'El sexto día de la semana — un día de fin de semana',
        fr: 'Le sixième jour de la semaine — un jour de week-end',
      },
      example_en: '"I rest on Saturday."',
    },
    {
      word: 'SUNDAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The seventh day of the week — a weekend day',
        es: 'El séptimo día de la semana — un día de fin de semana',
        fr: 'Le septième jour de la semaine — un jour de week-end',
      },
      example_en: '"We go to church on Sunday morning."',
    },
    {
      word: 'JANUARY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The first month of the year',
        es: 'El primer mes del año',
        fr: 'Le premier mois de l\'année',
      },
      example_en: '"School starts after the winter break in January."',
    },
    {
      word: 'APRIL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The fourth month of the year — a spring month',
        es: 'El cuarto mes del año — un mes de primavera',
        fr: 'Le quatrième mois de l\'année — un mois de printemps',
      },
      example_en: '"April is a beautiful spring month."',
    },
    {
      word: 'DECEMBER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The last month of the year — a winter month',
        es: 'El último mes del año — un mes de invierno',
        fr: 'Le dernier mois de l\'année — un mois d\'hiver',
      },
      example_en: '"Christmas is in December."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'MONDAY',
      question: { en: 'What day is Monday?', es: '¿Qué día es lunes?', fr: 'Quel jour est lundi ?' },
      correct: { en: 'The first day of the week', es: 'El primer día de la semana', fr: 'Le premier jour de la semaine' },
      wrong: [
        { en: 'The middle day of the week', es: 'El día del medio de la semana', fr: 'Le jour du milieu de la semaine' },
        { en: 'The last day of the week', es: 'El último día de la semana', fr: 'Le dernier jour de la semaine' },
        { en: 'A month of the year', es: 'Un mes del año', fr: 'Un mois de l\'année' },
      ],
    },
    {
      word: 'WEDNESDAY',
      question: { en: 'What day is Wednesday?', es: '¿Qué día es miércoles?', fr: 'Quel jour est mercredi ?' },
      correct: { en: 'The third day of the week', es: 'El tercer día de la semana', fr: 'Le troisième jour de la semaine' },
      wrong: [
        { en: 'The first day of the week', es: 'El primer día de la semana', fr: 'Le premier jour de la semaine' },
        { en: 'The last day of the week', es: 'El último día de la semana', fr: 'Le dernier jour de la semaine' },
        { en: 'A winter month', es: 'Un mes de invierno', fr: 'Un mois d\'hiver' },
      ],
    },
    {
      word: 'FRIDAY',
      question: { en: 'What day is Friday?', es: '¿Qué día es viernes?', fr: 'Quel jour est vendredi ?' },
      correct: { en: 'The fifth and last work day of the week', es: 'El quinto y último día de trabajo de la semana', fr: 'Le cinquième et dernier jour ouvrable de la semaine' },
      wrong: [
        { en: 'The first day of the week', es: 'El primer día de la semana', fr: 'Le premier jour de la semaine' },
        { en: 'A weekend day with no work', es: 'Un día de fin de semana sin trabajo', fr: 'Un jour de week-end sans travail' },
        { en: 'A month of the year', es: 'Un mes del año', fr: 'Un mois de l\'année' },
      ],
    },
    {
      word: 'JANUARY',
      question: { en: 'What month is January?', es: '¿Qué mes es enero?', fr: 'Quel mois est janvier ?' },
      correct: { en: 'The first month of the year', es: 'El primer mes del año', fr: 'Le premier mois de l\'année' },
      wrong: [
        { en: 'The middle month of the year', es: 'El mes del medio del año', fr: 'Le mois du milieu de l\'année' },
        { en: 'The last month of the year', es: 'El último mes del año', fr: 'Le dernier mois de l\'année' },
        { en: 'A day of the week', es: 'Un día de la semana', fr: 'Un jour de la semaine' },
      ],
    },
    {
      word: 'DECEMBER',
      question: { en: 'What month is December?', es: '¿Qué mes es diciembre?', fr: 'Quel mois est décembre ?' },
      correct: { en: 'The last month of the year', es: 'El último mes del año', fr: 'Le dernier mois de l\'année' },
      wrong: [
        { en: 'The first month of the year', es: 'El primer mes del año', fr: 'Le premier mois de l\'année' },
        { en: 'The middle month of the year', es: 'El mes del medio del año', fr: 'Le mois du milieu de l\'année' },
        { en: 'A day of the week', es: 'Un día de la semana', fr: 'Un jour de la semaine' },
      ],
    },
    {
      word: 'WEEK',
      question: { en: 'How many days are in a week?', es: '¿Cuántos días hay en una semana?', fr: 'Combien de jours y a-t-il dans une semaine ?' },
      correct: { en: 'Seven days', es: 'Siete días', fr: 'Sept jours' },
      wrong: [
        { en: 'Five days', es: 'Cinco días', fr: 'Cinq jours' },
        { en: 'Twelve days', es: 'Doce días', fr: 'Douze jours' },
        { en: 'Thirty days', es: 'Treinta días', fr: 'Trente jours' },
      ],
    },
    {
      word: 'TUESDAY',
      question: { en: 'What day is Tuesday?', es: '¿Qué día es martes?', fr: 'Quel jour est mardi ?' },
      correct: { en: 'The second day of the week', es: 'El segundo día de la semana', fr: 'Le deuxième jour de la semaine' },
      wrong: [
        { en: 'The first day of the week', es: 'El primer día de la semana', fr: 'Le premier jour de la semaine' },
        { en: 'The third day of the week', es: 'El tercer día de la semana', fr: 'Le troisième jour de la semaine' },
        { en: 'A month of the year', es: 'Un mes del año', fr: 'Un mois de l\'année' },
      ],
    },
    {
      word: 'APRIL',
      question: { en: 'What month is April?', es: '¿Qué mes es abril?', fr: 'Quel mois est avril ?' },
      correct: { en: 'The fourth month of the year', es: 'El cuarto mes del año', fr: 'Le quatrième mois de l\'année' },
      wrong: [
        { en: 'The first month of the year', es: 'El primer mes del año', fr: 'Le premier mois de l\'année' },
        { en: 'The last month of the year', es: 'El último mes del año', fr: 'Le dernier mois de l\'année' },
        { en: 'A day of the week', es: 'Un día de la semana', fr: 'Un jour de la semaine' },
      ],
    },
    {
      word: 'SATURDAY',
      question: { en: 'What day is Saturday?', es: '¿Qué día es sábado?', fr: 'Quel jour est samedi ?' },
      correct: { en: 'The sixth day of the week — a weekend day', es: 'El sexto día de la semana — un día de fin de semana', fr: 'Le sixième jour de la semaine — un jour de week-end' },
      wrong: [
        { en: 'A work day during the week', es: 'Un día de trabajo durante la semana', fr: 'Un jour ouvrable pendant la semaine' },
        { en: 'The first day of the week', es: 'El primer día de la semana', fr: 'Le premier jour de la semaine' },
        { en: 'A month of the year', es: 'Un mes del año', fr: 'Un mois de l\'année' },
      ],
    },
    {
      word: 'SUNDAY',
      question: { en: 'What day is Sunday?', es: '¿Qué día es domingo?', fr: 'Quel jour est dimanche ?' },
      correct: { en: 'The seventh day of the week — a weekend day', es: 'El séptimo día de la semana — un día de fin de semana', fr: 'Le septième jour de la semaine — un jour de week-end' },
      wrong: [
        { en: 'A work day during the week', es: 'Un día de trabajo durante la semana', fr: 'Un jour ouvrable pendant la semaine' },
        { en: 'The first day of the week', es: 'El primer día de la semana', fr: 'Le premier jour de la semaine' },
        { en: 'A winter month', es: 'Un mes de invierno', fr: 'Un mois d\'hiver' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Elena Schedules an Appointment',
      es: 'Elena programa una cita',
      fr: 'Elena prend rendez-vous',
    },
    passage_en: `Elena sits in the doctor\'s office waiting room. She looks at a calendar on the wall. Today is Monday, April 8. The doctor\'s secretary asks her, "When would you like to come back?"

Elena looks at the calendar carefully. "Let me see," she says. She points to the calendar. The days of the week are written in a row: Monday, Tuesday, Wednesday, Thursday, Friday. She also sees months written across the top: January, April, December.

"I would like to come back on Friday," Elena says. "That is five days after today."

The secretary looks at her calendar. "Friday, April 12," she says. "That works. We have time in the afternoon at 2:00."

Elena nods. "Yes, that is good." She writes down the day and time. Friday, April 12 at 2:00 in the afternoon.

The secretary asks, "Do you have any appointments in the evening or at night?" Elena thinks. "No. I am busy on Tuesday and Wednesday mornings for school. I am free on Thursday evening. But Friday afternoon is the best time for me."

The secretary smiles. "Perfect. Your appointment is scheduled for Friday, April 12 at 2:00."

Elena leaves happy. She remembers to check her calendar at home. She will come back on Friday for her checkup.`,
    highlights: [
      { word: 'calendar', tip: { en: 'calendar: a chart showing days, weeks, and months', es: 'calendar = calendario: un gráfico que muestra días, semanas y meses', fr: 'calendar = calendrier: un tableau montrant les jours, semaines et mois' } },
      { word: 'scheduled', tip: { en: 'scheduled: planned for a specific time', es: 'scheduled = programado: planeado para un momento específico', fr: 'scheduled = programmé: planifié pour un moment spécifique' } },
      { word: 'checkup', tip: { en: 'checkup: a visit to a doctor to make sure you are healthy', es: 'checkup = chequeo: una visita al médico para asegurar que estás saludable', fr: 'checkup = examen médical: une visite chez le médecin pour s\'assurer que vous êtes en bonne santé' } },
      { word: 'afternoon', tip: { en: 'afternoon: the time between noon and sunset', es: 'afternoon = tarde: el tiempo entre el mediodía y la puesta de sol', fr: 'afternoon = après-midi: le moment entre midi et le coucher du soleil' } },
    ],
    questions: [
      {
        text: { en: '1. What day of the week is Elena\'s appointment?', es: '1. ¿Qué día de la semana es la cita de Elena?', fr: '1. Quel jour de la semaine est le rendez-vous d\'Elena ?' },
        options: [
          { text: { en: 'Monday', es: 'Lunes', fr: 'Lundi' }, correct: false },
          { text: { en: 'Friday', es: 'Viernes', fr: 'Vendredi' }, correct: true },
          { text: { en: 'Wednesday', es: 'Miércoles', fr: 'Mercredi' }, correct: false },
        ],
      },
      {
        text: { en: '2. What date is Elena\'s appointment?', es: '2. ¿Cuál es la fecha de la cita de Elena?', fr: '2. Quelle est la date du rendez-vous d\'Elena ?' },
        options: [
          { text: { en: 'April 8', es: 'Abril 8', fr: 'Avril 8' }, correct: false },
          { text: { en: 'April 12', es: 'Abril 12', fr: 'Avril 12' }, correct: true },
          { text: { en: 'Friday, May 1', es: 'Viernes, 1 de mayo', fr: 'Vendredi, 1er mai' }, correct: false },
        ],
      },
      {
        text: { en: '3. What time is the appointment?', es: '3. ¿A qué hora es la cita?', fr: '3. À quelle heure est le rendez-vous ?' },
        options: [
          { text: { en: 'In the morning', es: 'Por la mañana', fr: 'Le matin' }, correct: false },
          { text: { en: '2:00 in the afternoon', es: 'A las 2:00 en la tarde', fr: '14h00 l\'après-midi' }, correct: true },
          { text: { en: 'In the evening', es: 'Por la noche', fr: 'Le soir' }, correct: false },
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
    wordBank: ['Monday', 'Friday', 'January', 'December', 'week'],
    sentences: [
      {
        before: { en: 'The first day of the school', es: 'El primer día de la escuela', fr: 'Le premier jour de l\'école' },
        answer: 'week',
        after: { en: 'is', es: 'es', fr: 'est' },
      },
      {
        before: { en: 'My class is on', es: 'Mi clase es el', fr: 'Ma classe est le' },
        answer: 'Monday',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: '', es: '', fr: '' },
        answer: 'January',
        after: { en: 'is the first month of the year.', es: 'es el primer mes del año.', fr: 'est le premier mois de l\'année.' },
      },
      {
        before: { en: '', es: '', fr: '' },
        answer: 'December',
        after: { en: 'is the last month of the year.', es: 'es el último mes del año.', fr: 'est le dernier mois de l\'année.' },
      },
      {
        before: { en: 'School ends on', es: 'La escuela termina el', fr: 'L\'école se termine le' },
        answer: 'Friday',
        after: { en: 'morning.', es: 'por la mañana.', fr: 'matin.' },
      },
    ],
  },
};
