/**
 * Fibi Law ELS — Unit 20: Work and Jobs
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-20',
  number: '20',
  title: {
    en: 'Work and Jobs',
    es: 'Trabajo y empleos',
    fr: 'Travail et emplois',
  },
  topic: {
    en: 'Job titles · Job application · Work schedule',
    es: 'Títulos de trabajo · Solicitud de empleo · Horario de trabajo',
    fr: 'Titres d\'emploi · Demande d\'emploi · Horaire de travail',
  },
  grammar: {
    en: 'I work as a ___ · My hours are ___ · I get paid on ___',
    es: 'Trabajo como ___ · Mis horas son ___ · Me pagan el ___',
    fr: 'Je travaille comme ___ · Mes heures sont ___ · Je suis payé le ___',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'JOB',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Work or employment that you do for money',
        es: 'Trabajo o empleo que haces para ganar dinero',
        fr: 'Travail ou emploi que vous faites pour gagner de l\'argent',
      },
      example_en: '"I have a job at a restaurant."',
    },
    {
      word: 'INTERVIEW',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A formal meeting where a potential employer asks you questions',
        es: 'Una reunión formal donde un empleador potencial te hace preguntas',
        fr: 'Une réunion formelle où un employeur potentiel vous pose des questions',
      },
      example_en: '"I have a job interview at 9:00 tomorrow morning."',
    },
    {
      word: 'RESUME',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A document that lists your education and work experience',
        es: 'Un documento que enumera tu educación y experiencia de trabajo',
        fr: 'Un document qui énumère votre éducation et votre expérience professionnelle',
      },
      example_en: '"Please bring your resume to the interview."',
    },
    {
      word: 'EMPLOYER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person or company that hires people to work',
        es: 'Una persona o empresa que contrata a personas para trabajar',
        fr: 'Une personne ou une entreprise qui embauche des gens pour travailler',
      },
      example_en: '"My employer is very kind and fair."',
    },
    {
      word: 'EMPLOYEE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who works for someone else for pay',
        es: 'Una persona que trabaja para otro para ganar dinero',
        fr: 'Une personne qui travaille pour quelqu\'un d\'autre pour gagner de l\'argent',
      },
      example_en: '"The employees work hard every day."',
    },
    {
      word: 'CASHIER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who takes money from customers and gives change',
        es: 'Una persona que recibe dinero de los clientes y da cambio',
        fr: 'Une personne qui prend l\'argent des clients et rend la monnaie',
      },
      example_en: '"The cashier works at the supermarket."',
    },
    {
      word: 'NURSE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A healthcare professional who cares for sick people',
        es: 'Un profesional de la salud que cuida a personas enfermas',
        fr: 'Un professionnel de la santé qui soigne les personnes malades',
      },
      example_en: '"My sister is a nurse at the hospital."',
    },
    {
      word: 'TEACHER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who instructs students in school',
        es: 'Una persona que instruye a los estudiantes en la escuela',
        fr: 'Une personne qui enseigne aux étudiants à l\'école',
      },
      example_en: '"My teacher explains the lesson very clearly."',
    },
    {
      word: 'MECHANIC',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who repairs cars and machines',
        es: 'Una persona que repara autos y máquinas',
        fr: 'Une personne qui répare les voitures et les machines',
      },
      example_en: '"The mechanic fixed my car\'s engine."',
    },
    {
      word: 'SCHEDULE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The hours and days that you are supposed to work',
        es: 'Las horas y días que se supone que debes trabajar',
        fr: 'Les heures et les jours que vous êtes censé travailler',
      },
      example_en: '"My work schedule is Monday to Friday, 9 AM to 5 PM."',
    },
    {
      word: 'WAGES',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Money you earn for doing work',
        es: 'Dinero que ganas por hacer trabajo',
        fr: 'L\'argent que vous gagnez en faisant du travail',
      },
      example_en: '"My wages are $15 per hour."',
    },
    {
      word: 'PAYCHECK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A check or payment you receive for your work',
        es: 'Un cheque o pago que recibes por tu trabajo',
        fr: 'Un chèque ou un paiement que vous recevez pour votre travail',
      },
      example_en: '"I receive my paycheck every Friday."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'JOB',
      question: { en: 'What is work that you do for money?', es: '¿Qué es el trabajo que haces para ganar dinero?', fr: 'Quel est le travail que vous faites pour gagner de l\'argent ?' },
      correct: { en: 'A job', es: 'Un trabajo', fr: 'Un emploi' },
      wrong: [
        { en: 'A hobby', es: 'Un pasatiempo', fr: 'Un passe-temps' },
        { en: 'A game', es: 'Un juego', fr: 'Un jeu' },
        { en: 'An activity', es: 'Una actividad', fr: 'Une activité' },
      ],
    },
    {
      word: 'INTERVIEW',
      question: { en: 'What is a formal meeting with a potential employer?', es: '¿Qué es una reunión formal con un empleador potencial?', fr: 'Qu\'est-ce qu\'une réunion formelle avec un employeur potentiel ?' },
      correct: { en: 'An interview', es: 'Una entrevista', fr: 'Une entrevue' },
      wrong: [
        { en: 'A meeting', es: 'Una reunión', fr: 'Une réunion' },
        { en: 'A conversation', es: 'Una conversación', fr: 'Une conversation' },
        { en: 'A discussion', es: 'Una discusión', fr: 'Une discussion' },
      ],
    },
    {
      word: 'RESUME',
      question: { en: 'What lists your education and work experience?', es: '¿Qué enumera tu educación y experiencia de trabajo?', fr: 'Qu\'est-ce qui énumère votre éducation et votre expérience professionnelle ?' },
      correct: { en: 'A resume', es: 'Un currículo', fr: 'Un CV' },
      wrong: [
        { en: 'A letter', es: 'Una carta', fr: 'Une lettre' },
        { en: 'A form', es: 'Un formulario', fr: 'Un formulaire' },
        { en: 'A note', es: 'Una nota', fr: 'Une note' },
      ],
    },
    {
      word: 'CASHIER',
      question: { en: 'Who takes money from customers?', es: '¿Quién recibe dinero de los clientes?', fr: 'Qui prend l\'argent des clients ?' },
      correct: { en: 'A cashier', es: 'Un cajero', fr: 'Un caissier' },
      wrong: [
        { en: 'A manager', es: 'Un gerente', fr: 'Un directeur' },
        { en: 'A teacher', es: 'Un maestro', fr: 'Un professeur' },
        { en: 'A nurse', es: 'Una enfermera', fr: 'Une infirmière' },
      ],
    },
    {
      word: 'NURSE',
      question: { en: 'Who cares for sick people in a hospital?', es: '¿Quién cuida a las personas enfermas en un hospital?', fr: 'Qui soigne les personnes malades à l\'hôpital ?' },
      correct: { en: 'A nurse', es: 'Una enfermera', fr: 'Une infirmière' },
      wrong: [
        { en: 'A doctor', es: 'Un doctor', fr: 'Un médecin' },
        { en: 'A teacher', es: 'Un maestro', fr: 'Un professeur' },
        { en: 'A mechanic', es: 'Un mecánico', fr: 'Un mécanicien' },
      ],
    },
    {
      word: 'TEACHER',
      question: { en: 'Who instructs students in school?', es: '¿Quién instruye a los estudiantes en la escuela?', fr: 'Qui enseigne aux étudiants à l\'école ?' },
      correct: { en: 'A teacher', es: 'Un maestro', fr: 'Un professeur' },
      wrong: [
        { en: 'A nurse', es: 'Una enfermera', fr: 'Une infirmière' },
        { en: 'A mechanic', es: 'Un mecánico', fr: 'Un mécanicien' },
        { en: 'A cashier', es: 'Un cajero', fr: 'Un caissier' },
      ],
    },
    {
      word: 'MECHANIC',
      question: { en: 'Who repairs cars?', es: '¿Quién repara autos?', fr: 'Qui répare les voitures ?' },
      correct: { en: 'A mechanic', es: 'Un mecánico', fr: 'Un mécanicien' },
      wrong: [
        { en: 'A doctor', es: 'Un doctor', fr: 'Un médecin' },
        { en: 'A teacher', es: 'Un maestro', fr: 'Un professeur' },
        { en: 'A nurse', es: 'Una enfermera', fr: 'Une infirmière' },
      ],
    },
    {
      word: 'WAGES',
      question: { en: 'What is the money you earn for work?', es: '¿Qué es el dinero que ganas por trabajar?', fr: 'Quel est l\'argent que vous gagnez en travaillant ?' },
      correct: { en: 'Wages', es: 'Salarios', fr: 'Salaires' },
      wrong: [
        { en: 'Rent', es: 'Alquiler', fr: 'Loyer' },
        { en: 'Tax', es: 'Impuesto', fr: 'Impôt' },
        { en: 'Expense', es: 'Gasto', fr: 'Dépense' },
      ],
    },
    {
      word: 'PAYCHECK',
      question: { en: 'What do you receive every two weeks for your work?', es: '¿Qué recibes cada dos semanas por tu trabajo?', fr: 'Qu\'est-ce que vous recevez toutes les deux semaines pour votre travail ?' },
      correct: { en: 'A paycheck', es: 'Un cheque de pago', fr: 'Un chèque de paie' },
      wrong: [
        { en: 'A letter', es: 'Una carta', fr: 'Une lettre' },
        { en: 'A bill', es: 'Una factura', fr: 'Une facture' },
        { en: 'A document', es: 'Un documento', fr: 'Un document' },
      ],
    },
    {
      word: 'EMPLOYER',
      question: { en: 'Who hires people to work?', es: '¿Quién contrata a personas para trabajar?', fr: 'Qui embauche des gens pour travailler ?' },
      correct: { en: 'An employer', es: 'Un empleador', fr: 'Un employeur' },
      wrong: [
        { en: 'An employee', es: 'Un empleado', fr: 'Un employé' },
        { en: 'A customer', es: 'Un cliente', fr: 'Un client' },
        { en: 'A friend', es: 'Un amigo', fr: 'Un ami' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Samuel\'s Job Interview',
      es: 'La entrevista de trabajo de Samuel',
      fr: 'L\'entretien d\'embauche de Samuel',
    },
    passage_en: `Samuel is looking for a job. He has been unemployed for two months. He sees a job opening at a supermarket. They are looking for a cashier. Samuel is excited and nervous.

Samuel prepares his resume. He lists his education and his previous work experience. He worked as a cashier five years ago at another supermarket. He also worked as a teacher in his home country.

Samuel arrives at the supermarket at 9:00 AM for his interview. The manager, Ms. Lee, greets him warmly. She says, "Hello, Samuel. Thank you for coming. Tell me about yourself." Samuel says, "I worked as a cashier for three years. I am honest and hard-working. I can learn quickly."

Ms. Lee asks, "What are your hours available?" Samuel says, "I can work Monday to Friday, 8 AM to 5 PM. I cannot work weekends." Ms. Lee nods and says, "That works well. We need someone for daytime shifts."

Samuel asks, "What are the wages?" Ms. Lee says, "The job pays $15 per hour. You get paid every Friday. You also get benefits like health insurance."

Samuel is very happy. Ms. Lee says, "You are hired! Start next Monday." Samuel thanks her and shakes her hand. He feels very grateful and excited about his new job. He is ready to work hard and do his best.`,
    highlights: [
      { word: 'unemployed', tip: { en: 'unemployed: without a job', es: 'unemployed = desempleado: sin trabajo', fr: 'unemployed = au chômage: sans emploi' } },
      { word: 'opening', tip: { en: 'opening: a job position available', es: 'opening = vacante: una posición de trabajo disponible', fr: 'opening = offre: un poste disponible' } },
      { word: 'shifts', tip: { en: 'shifts: scheduled periods of work', es: 'shifts = turnos: períodos de trabajo programados', fr: 'shifts = équipes: périodes de travail programmées' } },
      { word: 'benefits', tip: { en: 'benefits: additional pay or services given to employees', es: 'benefits = beneficios: pago adicional o servicios dados a empleados', fr: 'benefits = avantages: rémunération ou services supplémentaires donnés aux employés' } },
    ],
    questions: [
      {
        text: { en: '1. What job is Samuel applying for?', es: '1. ¿Para qué trabajo está postulándose Samuel?', fr: '1. Quel emploi Samuel demande-t-il ?' },
        options: [
          { text: { en: 'A teacher', es: 'Un maestro', fr: 'Un professeur' }, correct: false },
          { text: { en: 'A cashier', es: 'Un cajero', fr: 'Un caissier' }, correct: true },
          { text: { en: 'A manager', es: 'Un gerente', fr: 'Un directeur' }, correct: false },
        ],
      },
      {
        text: { en: '2. What hours does Samuel want to work?', es: '2. ¿Qué horas quiere trabajar Samuel?', fr: '2. Quelles heures Samuel veut-il travailler ?' },
        options: [
          { text: { en: 'Monday to Friday, 8 AM to 5 PM', es: 'Lunes a viernes, 8 AM a 5 PM', fr: 'Lundi à vendredi, 8h à 17h' }, correct: true },
          { text: { en: 'Weekends only', es: 'Solo fines de semana', fr: 'Seulement les fins de semaine' }, correct: false },
          { text: { en: 'Midnight to 8 AM', es: 'Medianoche a 8 AM', fr: 'Minuit à 8h' }, correct: false },
        ],
      },
      {
        text: { en: '3. How much does the job pay?', es: '3. ¿Cuánto paga el trabajo?', fr: '3. Combien paie l\'emploi ?' },
        options: [
          { text: { en: '$10 per hour', es: '$10 por hora', fr: '$10 par heure' }, correct: false },
          { text: { en: '$15 per hour', es: '$15 por hora', fr: '$15 par heure' }, correct: true },
          { text: { en: '$20 per hour', es: '$20 por hora', fr: '$20 par heure' }, correct: false },
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
    wordBank: ['interview', 'resume', 'employer', 'wages', 'schedule'],
    sentences: [
      {
        before: { en: 'I have a job', es: 'Tengo una', fr: 'J\'ai une' },
        answer: 'interview',
        after: { en: 'at 9:00 tomorrow morning.', es: 'entrevista a las 9:00 mañana por la mañana.', fr: 'entrevue à 9h00 demain matin.' },
      },
      {
        before: { en: 'Please bring your', es: 'Por favor trae tu', fr: 'S\'il vous plaît apportez votre' },
        answer: 'resume',
        after: { en: 'to the interview.', es: 'a la entrevista.', fr: 'à l\'entrevue.' },
      },
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'employer',
        after: { en: 'pays me every Friday.', es: 'me paga cada viernes.', fr: 'me paie chaque vendredi.' },
      },
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'wages',
        after: { en: 'are $15 per hour.', es: 'son $15 por hora.', fr: 'sont $15 par heure.' },
      },
      {
        before: { en: 'My work', es: 'Mi horario de', fr: 'Mon horaire de' },
        answer: 'schedule',
        after: { en: 'is Monday to Friday, 8 AM to 5 PM.', es: 'es de lunes a viernes, 8 AM a 5 PM.', fr: 'est du lundi au vendredi, 8h à 17h.' },
      },
    ],
  },
};
