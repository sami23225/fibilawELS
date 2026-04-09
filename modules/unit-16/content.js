/**
 * Fibi Law ELS — Unit 16: Doctors and Medicine
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-16',
  number: '16',
  title: {
    en: 'Doctors and Medicine',
    es: 'Doctores y medicinas',
    fr: 'Médecins et médicaments',
  },
  topic: {
    en: 'Medical vocabulary · Reading a prescription · Doctor\'s instructions',
    es: 'Vocabulario médico · Leer una receta · Instrucciones del doctor',
    fr: 'Vocabulaire médical · Lire une ordonnance · Instructions du médecin',
  },
  grammar: {
    en: 'Take ___ tablets twice a day · Do you have a ___? · I need to make an appointment',
    es: 'Toma ___ pastillas dos veces al día · ¿Tienes un ___? · Necesito hacer una cita',
    fr: 'Prenez ___ comprimés deux fois par jour · As-tu un ___? · J\'ai besoin de prendre rendez-vous',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'PATIENT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who receives care from a doctor or nurse',
        es: 'Una persona que recibe cuidado de un doctor o enfermera',
        fr: 'Une personne qui reçoit des soins d\'un médecin ou d\'une infirmière',
      },
      example_en: '"The patient waits in the doctor\'s office."',
    },
    {
      word: 'DOCTOR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person trained to treat people who are sick or injured',
        es: 'Una persona capacitada para tratar a personas enfermas o lesionadas',
        fr: 'Une personne formée pour traiter les personnes malades ou blessées',
      },
      example_en: '"Please see a doctor if you have a fever."',
    },
    {
      word: 'NURSE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A medical professional who helps the doctor care for patients',
        es: 'Un profesional médico que ayuda al doctor a cuidar a los pacientes',
        fr: 'Un professionnel de la santé qui aide le médecin à soigner les patients',
      },
      example_en: '"The nurse took my blood pressure."',
    },
    {
      word: 'PRESCRIPTION',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A written order from a doctor for medicine',
        es: 'Una orden escrita de un doctor para medicina',
        fr: 'Une ordonnance écrite d\'un médecin pour des médicaments',
      },
      example_en: '"I picked up my prescription at the pharmacy."',
    },
    {
      word: 'MEDICINE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A substance that helps cure or treat a disease or pain',
        es: 'Una sustancia que ayuda a curar o tratar una enfermedad o dolor',
        fr: 'Une substance qui aide à guérir ou traiter une maladie ou une douleur',
      },
      example_en: '"Take this medicine twice a day with food."',
    },
    {
      word: 'TABLET',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A small pill that you swallow to take medicine',
        es: 'Una pastilla pequeña que tragas para tomar medicina',
        fr: 'Un petit comprimé que vous avalez pour prendre des médicaments',
      },
      example_en: '"Take two tablets every morning."',
    },
    {
      word: 'THERMOMETER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A tool used to measure body temperature',
        es: 'Una herramienta usada para medir la temperatura corporal',
        fr: 'Un outil utilisé pour mesurer la température corporelle',
      },
      example_en: '"The nurse used a thermometer to check my temperature."',
    },
    {
      word: 'COUGH',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A sudden expulsion of air from the lungs with a loud sound',
        es: 'Una expulsión repentina de aire de los pulmones con un sonido fuerte',
        fr: 'Une expulsion soudaine d\'air des poumons avec un bruit fort',
      },
      example_en: '"I have a bad cough and need to see a doctor."',
    },
    {
      word: 'COLD',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A common illness with symptoms like runny nose and cough',
        es: 'Una enfermedad común con síntomas como nariz mocosa y tos',
        fr: 'Une maladie courante avec des symptômes comme un nez qui coule et une toux',
      },
      example_en: '"I have a cold and feel very tired."',
    },
    {
      word: 'RASH',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Red bumps or irritation on the skin',
        es: 'Protuberancias rojas o irritación en la piel',
        fr: 'Des bosses rouges ou une irritation de la peau',
      },
      example_en: '"The patient has a rash on his arm."',
    },
    {
      word: 'BREATHE',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To take air into and out of your lungs',
        es: 'Llevar aire dentro y fuera de tus pulmones',
        fr: 'Prendre de l\'air dans et hors de vos poumons',
      },
      example_en: '"Take a deep breath. Breathe in and out slowly."',
    },
    {
      word: 'APPOINTMENT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A scheduled meeting time with a doctor or other professional',
        es: 'Una cita programada con un doctor u otro profesional',
        fr: 'Une réunion programmée avec un médecin ou un autre professionnel',
      },
      example_en: '"I have an appointment with the doctor on Friday."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'DOCTOR',
      question: { en: 'Who treats people who are sick?', es: '¿Quién trata a las personas enfermas?', fr: 'Qui soigne les personnes malades ?' },
      correct: { en: 'A doctor', es: 'Un doctor', fr: 'Un médecin' },
      wrong: [
        { en: 'A nurse', es: 'Una enfermera', fr: 'Une infirmière' },
        { en: 'A teacher', es: 'Un maestro', fr: 'Un professeur' },
        { en: 'A chef', es: 'Un chef', fr: 'Un chef' },
      ],
    },
    {
      word: 'NURSE',
      question: { en: 'Who helps the doctor care for patients?', es: '¿Quién ayuda al doctor a cuidar a los pacientes?', fr: 'Qui aide le médecin à soigner les patients ?' },
      correct: { en: 'A nurse', es: 'Una enfermera', fr: 'Une infirmière' },
      wrong: [
        { en: 'A patient', es: 'Un paciente', fr: 'Un patient' },
        { en: 'A teacher', es: 'Un maestro', fr: 'Un professeur' },
        { en: 'A police officer', es: 'Un policía', fr: 'Un policier' },
      ],
    },
    {
      word: 'PRESCRIPTION',
      question: { en: 'What is a written order for medicine?', es: '¿Qué es una orden escrita para medicina?', fr: 'Qu\'est-ce qu\'une ordonnance écrite pour des médicaments ?' },
      correct: { en: 'A prescription', es: 'Una receta', fr: 'Une ordonnance' },
      wrong: [
        { en: 'A thermometer', es: 'Un termómetro', fr: 'Un thermomètre' },
        { en: 'A tablet', es: 'Una pastilla', fr: 'Un comprimé' },
        { en: 'A symptom', es: 'Un síntoma', fr: 'Un symptôme' },
      ],
    },
    {
      word: 'TABLET',
      question: { en: 'What is a small pill you swallow?', es: '¿Qué es una pastilla pequeña que tragas?', fr: 'Qu\'est-ce qu\'un petit comprimé que vous avalez ?' },
      correct: { en: 'A tablet', es: 'Una pastilla', fr: 'Un comprimé' },
      wrong: [
        { en: 'A thermometer', es: 'Un termómetro', fr: 'Un thermomètre' },
        { en: 'A prescription', es: 'Una receta', fr: 'Une ordonnance' },
        { en: 'A temperature', es: 'Una temperatura', fr: 'Une température' },
      ],
    },
    {
      word: 'COUGH',
      question: { en: 'What is a sudden expulsion of air from the lungs?', es: '¿Qué es una expulsión repentina de aire de los pulmones?', fr: 'Qu\'est-ce qu\'une expulsion soudaine d\'air des poumons ?' },
      correct: { en: 'A cough', es: 'Una tos', fr: 'Une toux' },
      wrong: [
        { en: 'A cold', es: 'Un resfriado', fr: 'Un rhume' },
        { en: 'A rash', es: 'Una erupción', fr: 'Une éruption' },
        { en: 'A fever', es: 'Una fiebre', fr: 'Une fièvre' },
      ],
    },
    {
      word: 'COLD',
      question: { en: 'What is a common illness with a runny nose?', es: '¿Qué es una enfermedad común con nariz mocosa?', fr: 'Qu\'est-ce qu\'une maladie courante avec un nez qui coule ?' },
      correct: { en: 'A cold', es: 'Un resfriado', fr: 'Un rhume' },
      wrong: [
        { en: 'A fever', es: 'Una fiebre', fr: 'Une fièvre' },
        { en: 'A rash', es: 'Una erupción', fr: 'Une éruption' },
        { en: 'A cough', es: 'Una tos', fr: 'Une toux' },
      ],
    },
    {
      word: 'THERMOMETER',
      question: { en: 'What tool measures body temperature?', es: '¿Qué herramienta mide la temperatura corporal?', fr: 'Quel outil mesure la température corporelle ?' },
      correct: { en: 'A thermometer', es: 'Un termómetro', fr: 'Un thermomètre' },
      wrong: [
        { en: 'A stethoscope', es: 'Un estetoscopio', fr: 'Un stéthoscope' },
        { en: 'A scale', es: 'Una báscula', fr: 'Une balance' },
        { en: 'A blood pressure cuff', es: 'Un brazalete de presión arterial', fr: 'Un brassard de tension artérielle' },
      ],
    },
    {
      word: 'MEDICINE',
      question: { en: 'What helps cure or treat a disease?', es: '¿Qué ayuda a curar o tratar una enfermedad?', fr: 'Qu\'est-ce qui aide à guérir ou traiter une maladie ?' },
      correct: { en: 'Medicine', es: 'Medicina', fr: 'Médicament' },
      wrong: [
        { en: 'Exercise', es: 'Ejercicio', fr: 'Exercice' },
        { en: 'Sleep', es: 'Dormir', fr: 'Sommeil' },
        { en: 'Water', es: 'Agua', fr: 'Eau' },
      ],
    },
    {
      word: 'BREATHE',
      question: { en: 'What do you do when you take air into your lungs?', es: '¿Qué haces cuando llevas aire a tus pulmones?', fr: 'Que faites-vous lorsque vous inspirez ?' },
      correct: { en: 'Breathe', es: 'Respirar', fr: 'Respirer' },
      wrong: [
        { en: 'Cough', es: 'Toser', fr: 'Tousser' },
        { en: 'Sneeze', es: 'Estornudar', fr: 'Éternuer' },
        { en: 'Swallow', es: 'Tragar', fr: 'Avaler' },
      ],
    },
    {
      word: 'APPOINTMENT',
      question: { en: 'What is a scheduled meeting time with a doctor?', es: '¿Qué es una cita programada con un doctor?', fr: 'Qu\'est-ce qu\'un rendez-vous prévu avec un médecin ?' },
      correct: { en: 'An appointment', es: 'Una cita', fr: 'Un rendez-vous' },
      wrong: [
        { en: 'A prescription', es: 'Una receta', fr: 'Une ordonnance' },
        { en: 'A hospital', es: 'Un hospital', fr: 'Un hôpital' },
        { en: 'A test', es: 'Un examen', fr: 'Un test' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Nadia\'s Doctor\'s Visit',
      es: 'La visita del doctor de Nadia',
      fr: 'La visite du médecin de Nadia',
    },
    passage_en: `Nadia has been coughing for three days. She feels tired and her nose is runny. She decides to make an appointment with the doctor. She calls the clinic and the receptionist says, "We can see you at 2:00 PM today."

Nadia arrives at the doctor\'s office at 1:55 PM. The nurse asks her, "How do you feel?" Nadia says, "I have a bad cough and my throat is sore. I also feel cold chills." The nurse takes Nadia\'s temperature with a thermometer. "You have a fever," the nurse says.

The doctor comes in and examines Nadia. He listens to her breathe with a stethoscope. He says, "You have a cold. You need to rest and drink warm fluids. I will write you a prescription for medicine."

The doctor writes down the prescription. He says, "Take these tablets three times a day for five days. Do not take more than the amount on the bottle. Come back and see me in one week if you do not feel better."

Nadia takes the prescription to the pharmacy. The pharmacist fills it with medicine. He says, "Take two tablets every six hours with food. Rest and get plenty of sleep."

Nadia goes home and follows the doctor\'s instructions. After three days, she feels much better. After five days, her cold is completely gone. She is grateful for the doctor\'s care.`,
    highlights: [
      { word: 'receptionist', tip: { en: 'receptionist: person who greets patients at a doctor\'s office', es: 'receptionist = recepcionista: persona que saluda a los pacientes en la oficina del doctor', fr: 'receptionist = réceptionniste: personne qui accueille les patients au bureau du médecin' } },
      { word: 'stethoscope', tip: { en: 'stethoscope: doctor\'s tool to listen to the heart and lungs', es: 'stethoscope = estetoscopio: herramienta del doctor para escuchar el corazón y los pulmones', fr: 'stethoscope = stéthoscope: outil du médecin pour écouter le cœur et les poumons' } },
      { word: 'fever', tip: { en: 'fever: body temperature that is too high', es: 'fever = fiebre: temperatura corporal que es demasiado alta', fr: 'fever = fièvre: température corporelle trop élevée' } },
      { word: 'pharmacist', tip: { en: 'pharmacist: person who fills prescriptions with medicine', es: 'pharmacist = farmacéutico: persona que llena recetas con medicinas', fr: 'pharmacist = pharmacien: personne qui remplit les ordonnances avec des médicaments' } },
    ],
    questions: [
      {
        text: { en: '1. What symptoms does Nadia have?', es: '1. ¿Qué síntomas tiene Nadia?', fr: '1. Quels sont les symptômes de Nadia ?' },
        options: [
          { text: { en: 'A sore throat and runny nose', es: 'Garganta irritada y nariz mocosa', fr: 'Mal de gorge et nez qui coule' }, correct: true },
          { text: { en: 'A headache and fever', es: 'Dolor de cabeza y fiebre', fr: 'Mal de tête et fièvre' }, correct: false },
          { text: { en: 'A rash and cough', es: 'Erupción y tos', fr: 'Éruption et toux' }, correct: false },
        ],
      },
      {
        text: { en: '2. What does the doctor prescribe for Nadia?', es: '2. ¿Qué prescribe el doctor para Nadia?', fr: '2. Qu\'est-ce que le médecin prescrit à Nadia ?' },
        options: [
          { text: { en: 'Rest and warm fluids', es: 'Descanso y fluidos cálidos', fr: 'Repos et fluides chauds' }, correct: false },
          { text: { en: 'Medicine tablets and rest', es: 'Pastillas de medicina y descanso', fr: 'Comprimés de médicaments et repos' }, correct: true },
          { text: { en: 'A thermometer and stethoscope', es: 'Un termómetro y estetoscopio', fr: 'Un thermomètre et un stéthoscope' }, correct: false },
        ],
      },
      {
        text: { en: '3. How long does Nadia need to take the medicine?', es: '3. ¿Cuánto tiempo necesita Nadia tomar la medicina?', fr: '3. Pendant combien de temps Nadia doit-elle prendre les médicaments ?' },
        options: [
          { text: { en: 'One week', es: 'Una semana', fr: 'Une semaine' }, correct: false },
          { text: { en: 'Five days', es: 'Cinco días', fr: 'Cinq jours' }, correct: true },
          { text: { en: 'Three days', es: 'Tres días', fr: 'Trois jours' }, correct: false },
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
    wordBank: ['prescription', 'appointment', 'cough', 'medicine', 'doctor'],
    sentences: [
      {
        before: { en: 'I have a bad', es: 'Tengo una mala', fr: 'J\'ai une mauvaise' },
        answer: 'cough',
        after: { en: 'and need to see a doctor.', es: 'y necesito ver a un doctor.', fr: 'et j\'ai besoin de voir un médecin.' },
      },
      {
        before: { en: 'The', es: 'El', fr: 'Le' },
        answer: 'doctor',
        after: { en: 'gave me instructions to get better.', es: 'me dio instrucciones para mejorar.', fr: 'M\'a donné des instructions pour me sentir mieux.' },
      },
      {
        before: { en: 'I need to pick up my', es: 'Necesito recoger mi', fr: 'Je dois récupérer mon' },
        answer: 'prescription',
        after: { en: 'at the pharmacy.', es: 'en la farmacia.', fr: 'à la pharmacie.' },
      },
      {
        before: { en: 'Take this', es: 'Toma este', fr: 'Prenez ce' },
        answer: 'medicine',
        after: { en: 'twice a day with food.', es: 'dos veces al día con comida.', fr: 'deux fois par jour avec de la nourriture.' },
      },
      {
        before: { en: 'I made an', es: 'Hice una', fr: 'J\'ai pris rendez-vous' },
        answer: 'appointment',
        after: { en: 'for next Tuesday.', es: 'para el próximo martes.', fr: 'pour le mardi prochain.' },
      },
    ],
  },
};
