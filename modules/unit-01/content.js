/**
 * Fibi Law ELS — Unit 01: First English Class
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-01',
  number: '01',
  title: {
    en: 'First English Class',
    es: 'Primera clase de inglés',
    fr: 'Premier cours d\'anglais',
  },
  topic: {
    en: 'Classroom directions · Introductions · The alphabet',
    es: 'Instrucciones del salón · Presentaciones · El alfabeto',
    fr: 'Consignes de classe · Présentations · L\'alphabet',
  },
  grammar: {
    en: 'First person "be" — I am ___, My name is ___',
    es: 'Primera persona "ser/estar" — Me llamo ___, Soy de ___',
    fr: 'Première personne "être" — Je m\'appelle ___, Je suis de ___',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  // Source: Fibi Law Lesson Plan Unit 1, Key Vocabulary section
  vocabulary: [
    {
      word: 'ASK',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To say a question — to want information from someone',
        es: 'Hacer una pregunta — querer información de alguien',
        fr: 'Poser une question — vouloir des informations de quelqu\'un',
      },
      example_en: '"Please ask your teacher if you need help."',
    },
    {
      word: 'LISTEN',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To pay attention to a sound or what someone is saying',
        es: 'Prestar atención a un sonido o a lo que alguien dice',
        fr: 'Prêter attention à un son ou à ce que quelqu\'un dit',
      },
      example_en: '"Listen carefully to your teacher."',
    },
    {
      word: 'POINT',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To show where something is using your finger',
        es: 'Mostrar dónde está algo usando el dedo',
        fr: 'Montrer où se trouve quelque chose avec le doigt',
      },
      example_en: '"Point to the picture on the board."',
    },
    {
      word: 'READ',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To look at words and understand their meaning',
        es: 'Mirar palabras y entender su significado',
        fr: 'Regarder des mots et comprendre leur signification',
      },
      example_en: '"Read the sentence on the board."',
    },
    {
      word: 'SAY',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To speak words out loud',
        es: 'Pronunciar palabras en voz alta',
        fr: 'Prononcer des mots à voix haute',
      },
      example_en: '"Say your name to the class."',
    },
    {
      word: 'SPELL',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To say or write the letters of a word in order',
        es: 'Decir o escribir las letras de una palabra en orden',
        fr: 'Dire ou écrire les lettres d\'un mot dans l\'ordre',
      },
      example_en: '"Can you spell your last name?"',
    },
    {
      word: 'TYPE',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To write using a computer keyboard',
        es: 'Escribir usando un teclado de computadora',
        fr: 'Écrire en utilisant un clavier d\'ordinateur',
      },
      example_en: '"Type your name into the computer."',
    },
    {
      word: 'WATCH',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To look at something carefully for a period of time',
        es: 'Mirar algo con atención durante un período de tiempo',
        fr: 'Observer quelque chose attentivement pendant un moment',
      },
      example_en: '"Watch the teacher write on the board."',
    },
    {
      word: 'WRITE',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To put words or letters on paper or a screen',
        es: 'Poner palabras o letras en papel o en una pantalla',
        fr: 'Mettre des mots ou des lettres sur papier ou écran',
      },
      example_en: '"Write your name on the index card."',
    },
    {
      word: 'HELLO',
      pos: { en: 'greeting', es: 'saludo', fr: 'salutation' },
      definition: {
        en: 'A word used to greet someone when you meet them',
        es: 'Una palabra usada para saludar a alguien cuando lo conoces',
        fr: 'Un mot utilisé pour saluer quelqu\'un quand on le rencontre',
      },
      example_en: '"Hello! My name is Maria."',
    },
    {
      word: 'REPEAT',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To say or do something again',
        es: 'Decir o hacer algo de nuevo',
        fr: 'Dire ou faire quelque chose à nouveau',
      },
      example_en: '"Please repeat after me."',
    },
    {
      word: 'INTRODUCE',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To tell someone who you are for the first time',
        es: 'Decirle a alguien quién eres por primera vez',
        fr: 'Dire à quelqu\'un qui vous êtes pour la première fois',
      },
      example_en: '"Let me introduce myself. My name is Carlos."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  // 10 multiple-choice questions on Unit 1 vocabulary
  quiz: [
    {
      word: 'LISTEN',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To pay attention to what someone is saying', es: 'Prestar atención a lo que alguien dice', fr: 'Prêter attention à ce que quelqu\'un dit' },
      wrong: [
        { en: 'To write words on paper', es: 'Escribir palabras en papel', fr: 'Écrire des mots sur papier' },
        { en: 'To show something with your finger', es: 'Mostrar algo con el dedo', fr: 'Montrer quelque chose avec le doigt' },
        { en: 'To say a question', es: 'Hacer una pregunta', fr: 'Poser une question' },
      ],
    },
    {
      word: 'SPELL',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To say or write the letters of a word in order', es: 'Decir o escribir las letras de una palabra en orden', fr: 'Dire ou écrire les lettres d\'un mot dans l\'ordre' },
      wrong: [
        { en: 'To look at words and understand them', es: 'Mirar palabras y entenderlas', fr: 'Regarder les mots et les comprendre' },
        { en: 'To write using a keyboard', es: 'Escribir usando un teclado', fr: 'Écrire en utilisant un clavier' },
        { en: 'To speak words out loud', es: 'Pronunciar palabras en voz alta', fr: 'Prononcer des mots à voix haute' },
      ],
    },
    {
      word: 'ASK',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To say a question — to want information from someone', es: 'Hacer una pregunta — querer información de alguien', fr: 'Poser une question — vouloir des informations de quelqu\'un' },
      wrong: [
        { en: 'To look at something carefully', es: 'Mirar algo con atención', fr: 'Observer quelque chose attentivement' },
        { en: 'To greet someone you meet', es: 'Saludar a alguien que conoces', fr: 'Saluer quelqu\'un que l\'on rencontre' },
        { en: 'To say something again', es: 'Decir algo de nuevo', fr: 'Dire quelque chose à nouveau' },
      ],
    },
    {
      word: 'WRITE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To put words or letters on paper or a screen', es: 'Poner palabras o letras en papel o en una pantalla', fr: 'Mettre des mots ou des lettres sur papier ou écran' },
      wrong: [
        { en: 'To look at words and understand them', es: 'Mirar palabras y entenderlas', fr: 'Regarder des mots et les comprendre' },
        { en: 'To pay attention to sounds', es: 'Prestar atención a los sonidos', fr: 'Prêter attention aux sons' },
        { en: 'To tell someone who you are', es: 'Decirle a alguien quién eres', fr: 'Dire à quelqu\'un qui vous êtes' },
      ],
    },
    {
      word: 'POINT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To show where something is using your finger', es: 'Mostrar dónde está algo usando el dedo', fr: 'Montrer où se trouve quelque chose avec le doigt' },
      wrong: [
        { en: 'To speak words out loud', es: 'Pronunciar palabras en voz alta', fr: 'Prononcer des mots à voix haute' },
        { en: 'To write using a computer', es: 'Escribir usando una computadora', fr: 'Écrire en utilisant un ordinateur' },
        { en: 'To say something again', es: 'Decir algo de nuevo', fr: 'Dire quelque chose à nouveau' },
      ],
    },
    {
      word: 'READ',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To look at words and understand their meaning', es: 'Mirar palabras y entender su significado', fr: 'Regarder des mots et comprendre leur signification' },
      wrong: [
        { en: 'To show something with your finger', es: 'Mostrar algo con el dedo', fr: 'Montrer quelque chose avec le doigt' },
        { en: 'To write letters on paper', es: 'Escribir letras en papel', fr: 'Écrire des lettres sur papier' },
        { en: 'To greet someone', es: 'Saludar a alguien', fr: 'Saluer quelqu\'un' },
      ],
    },
    {
      word: 'REPEAT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To say or do something again', es: 'Decir o hacer algo de nuevo', fr: 'Dire ou faire quelque chose à nouveau' },
      wrong: [
        { en: 'To pay attention to sounds', es: 'Prestar atención a los sonidos', fr: 'Prêter attention aux sons' },
        { en: 'To write words on paper', es: 'Escribir palabras en papel', fr: 'Écrire des mots sur papier' },
        { en: 'To ask a question', es: 'Hacer una pregunta', fr: 'Poser une question' },
      ],
    },
    {
      word: 'TYPE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To write using a computer keyboard', es: 'Escribir usando un teclado de computadora', fr: 'Écrire en utilisant un clavier d\'ordinateur' },
      wrong: [
        { en: 'To look at something carefully', es: 'Mirar algo con atención', fr: 'Observer quelque chose attentivement' },
        { en: 'To say the letters of a word', es: 'Decir las letras de una palabra', fr: 'Dire les lettres d\'un mot' },
        { en: 'To tell someone who you are', es: 'Decirle a alguien quién eres', fr: 'Dire à quelqu\'un qui vous êtes' },
      ],
    },
    {
      word: 'SAY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To speak words out loud', es: 'Pronunciar palabras en voz alta', fr: 'Prononcer des mots à voix haute' },
      wrong: [
        { en: 'To write words on paper', es: 'Escribir palabras en papel', fr: 'Écrire des mots sur papier' },
        { en: 'To look at words on a page', es: 'Mirar palabras en una página', fr: 'Regarder des mots sur une page' },
        { en: 'To show something with your finger', es: 'Mostrar algo con el dedo', fr: 'Montrer quelque chose avec le doigt' },
      ],
    },
    {
      word: 'INTRODUCE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To tell someone who you are for the first time', es: 'Decirle a alguien quién eres por primera vez', fr: 'Dire à quelqu\'un qui vous êtes pour la première fois' },
      wrong: [
        { en: 'To pay attention to what someone says', es: 'Prestar atención a lo que alguien dice', fr: 'Prêter attention à ce que quelqu\'un dit' },
        { en: 'To write words on a keyboard', es: 'Escribir palabras en un teclado', fr: 'Écrire des mots sur un clavier' },
        { en: 'To look at something carefully', es: 'Mirar algo con atención', fr: 'Observer quelque chose attentivement' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  // Based on Fibi Law Lesson Plan Unit 1 life skills + session activities
  reading: {
    title: {
      en: 'Carlos\'s First Day',
      es: 'El primer día de Carlos',
      fr: 'Le premier jour de Carlos',
    },
    passage_en: `Carlos walks into the classroom. He is nervous but excited. The teacher smiles and says, "Hello! My name is Ms. Rivera. Welcome to English class."

Carlos sits down. Ms. Rivera points to the whiteboard and says, "Please listen. I will say a word. You repeat it." Carlos listens carefully. He repeats every word.

Then Ms. Rivera says, "Write your name on a card. Spell it out loud." Carlos picks up a pen. He writes his name: C-A-R-L-O-S. He spells it aloud: "C, A, R, L, O, S."

At the end of class, Ms. Rivera says, "Now introduce yourself to one person." Carlos turns to the student next to him. He says, "Hello. My name is Carlos. I am from Colombia." The student smiles. "Nice to meet you. My name is Ana."

Carlos leaves class feeling happy. He learned a lot today.`,
    highlights: [
      { word: 'nervous', tip: { en: 'nervous: worried or afraid', es: 'nervous = nervioso: preocupado o asustado', fr: 'nervous = nerveux: inquiet ou effrayé' } },
      { word: 'excited', tip: { en: 'excited: happy and interested in something', es: 'excited = emocionado: feliz e interesado en algo', fr: 'excited = enthousiaste: heureux et intéressé par quelque chose' } },
      { word: 'repeat', tip: { en: 'repeat: to say or do again', es: 'repeat = repetir: decir o hacer de nuevo', fr: 'repeat = répéter: dire ou faire à nouveau' } },
      { word: 'introduce', tip: { en: 'introduce: to tell someone who you are', es: 'introduce = presentarse: decirle a alguien quién eres', fr: 'introduce = se présenter: dire à quelqu\'un qui vous êtes' } },
    ],
    questions: [
      {
        text: { en: '1. How does Carlos feel when he walks into class?', es: '1. ¿Cómo se siente Carlos cuando entra al salón?', fr: '1. Comment Carlos se sent-il quand il entre en classe ?' },
        options: [
          { text: { en: 'Bored and tired', es: 'Aburrido y cansado', fr: 'Ennuyé et fatigué' }, correct: false },
          { text: { en: 'Nervous and excited', es: 'Nervioso y emocionado', fr: 'Nerveux et enthousiaste' }, correct: true },
          { text: { en: 'Angry and confused', es: 'Enojado y confundido', fr: 'En colère et confus' }, correct: false },
        ],
      },
      {
        text: { en: '2. What does Ms. Rivera ask the students to do with their names?', es: '2. ¿Qué les pide Ms. Rivera a los estudiantes con sus nombres?', fr: '2. Que demande Mme Rivera aux étudiants de faire avec leurs noms ?' },
        options: [
          { text: { en: 'Type it on a computer', es: 'Escribirlo en una computadora', fr: 'Le taper sur un ordinateur' }, correct: false },
          { text: { en: 'Write it on a card and spell it aloud', es: 'Escribirlo en una tarjeta y deletrearlo en voz alta', fr: 'L\'écrire sur une carte et l\'épeler à voix haute' }, correct: true },
          { text: { en: 'Read it from a book', es: 'Leerlo de un libro', fr: 'Le lire dans un livre' }, correct: false },
        ],
      },
      {
        text: { en: '3. Where is Carlos from?', es: '3. ¿De dónde es Carlos?', fr: '3. D\'où vient Carlos ?' },
        options: [
          { text: { en: 'Mexico', es: 'México', fr: 'Mexique' }, correct: false },
          { text: { en: 'Colombia', es: 'Colombia', fr: 'Colombie' }, correct: true },
          { text: { en: 'Cuba', es: 'Cuba', fr: 'Cuba' }, correct: false },
        ],
      },
    ],
  },

  // ── FILL-IN-THE-BLANK ─────────────────────────────────────────────────────
  // Source: Fibi Law Student Worksheet Packet, Unit 1 Activity 1C
  fillInBlank: {
    instructions: {
      en: 'Complete each sentence using a word from the word bank.',
      es: 'Completa cada oración usando una palabra del banco de palabras.',
      fr: 'Complétez chaque phrase en utilisant un mot de la banque de mots.',
    },
    wordBank: ['listen', 'write', 'spell', 'say', 'repeat'],
    sentences: [
      {
        before: { en: 'Please', es: 'Por favor', fr: 'S\'il vous plaît' },
        answer: 'listen',
        after: { en: 'carefully to your teacher.', es: 'atentamente a su maestro.', fr: 'attentivement votre professeur.' },
      },
      {
        before: { en: 'Can you', es: '¿Puedes', fr: 'Pouvez-vous' },
        answer: 'spell',
        after: { en: 'your last name for me?', es: 'tu apellido para mí?', fr: 'votre nom de famille pour moi ?' },
      },
      {
        before: { en: 'Please', es: 'Por favor', fr: 'Veuillez' },
        answer: 'write',
        after: { en: 'your name on the card.', es: 'su nombre en la tarjeta.', fr: 'votre nom sur la carte.' },
      },
      {
        before: { en: 'Please', es: 'Por favor', fr: 'Veuillez' },
        answer: 'repeat',
        after: { en: 'after me — say the word again.', es: 'después de mí — di la palabra de nuevo.', fr: 'après moi — dites le mot à nouveau.' },
      },
      {
        before: { en: 'Now', es: 'Ahora', fr: 'Maintenant' },
        answer: 'say',
        after: { en: 'your name to the class.', es: 'tu nombre a la clase.', fr: 'dites votre nom à la classe.' },
      },
    ],
  },
};
