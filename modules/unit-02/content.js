/**
 * Fibi Law ELS — Unit 02: In the Classroom
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-02',
  number: '02',
  title: {
    en: 'In the Classroom',
    es: 'En el salón de clase',
    fr: 'En classe',
  },
  topic: {
    en: 'Classroom objects · School people · Simple sentences',
    es: 'Objetos del salón · Personas de la escuela · Oraciones simples',
    fr: 'Objets de classe · Gens de l\'école · Phrases simples',
  },
  grammar: {
    en: 'This is a ___ · That is a ___',
    es: 'Esto es un ___ · Eso es un ___',
    fr: 'Ceci est un ___ · Cela est un ___',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'CLASS',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A group of students and a teacher learning together in one room',
        es: 'Un grupo de estudiantes y un maestro que aprenden juntos en una sala',
        fr: 'Un groupe d\'étudiants et un professeur qui apprennent ensemble dans une salle',
      },
      example_en: '"There are twenty students in my class."',
    },
    {
      word: 'STUDENT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who is learning in school or a class',
        es: 'Una persona que está aprendiendo en la escuela o una clase',
        fr: 'Une personne qui apprend à l\'école ou en classe',
      },
      example_en: '"The student raises her hand to ask a question."',
    },
    {
      word: 'TEACHER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who teaches and helps students learn',
        es: 'Una persona que enseña y ayuda a los estudiantes a aprender',
        fr: 'Une personne qui enseigne et aide les étudiants à apprendre',
      },
      example_en: '"The teacher explains the lesson on the board."',
    },
    {
      word: 'BACKPACK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A bag you wear on your back to carry books and things',
        es: 'Una bolsa que llevas en la espalda para llevar libros y cosas',
        fr: 'Un sac que vous portez sur le dos pour transporter des livres et des choses',
      },
      example_en: '"My backpack is heavy because I have many books."',
    },
    {
      word: 'BOOK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Something you read with pages and words printed on them',
        es: 'Algo que lees con páginas y palabras impresas en ellas',
        fr: 'Quelque chose que vous lisez avec des pages et des mots imprimés dessus',
      },
      example_en: '"Open your English book to page fifteen."',
    },
    {
      word: 'CHAIR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A piece of furniture you sit on with four legs and a back',
        es: 'Un mueble en el que te sientas con cuatro patas y un respaldo',
        fr: 'Un meuble sur lequel vous vous asseyez avec quatre pieds et un dossier',
      },
      example_en: '"Please pull your chair closer to the desk."',
    },
    {
      word: 'CLOCK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A tool that shows what time it is',
        es: 'Una herramienta que muestra qué hora es',
        fr: 'Un outil qui montre quelle heure il est',
      },
      example_en: '"Look at the clock—class ends at three o\'clock."',
    },
    {
      word: 'ERASER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A tool used to remove pencil marks from paper',
        es: 'Una herramienta utilizada para eliminar marcas de lápiz del papel',
        fr: 'Un outil utilisé pour effacer les marques de crayon du papier',
      },
      example_en: '"Use the eraser to fix your mistake."',
    },
    {
      word: 'NOTEBOOK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A book with blank pages where you write notes or words',
        es: 'Un libro con páginas en blanco donde escribes notas o palabras',
        fr: 'Un livre avec des pages vierges où vous écrivez des notes ou des mots',
      },
      example_en: '"Write the vocabulary words in your notebook."',
    },
    {
      word: 'PAPER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A thin white material used for writing and printing',
        es: 'Un material blanco delgado utilizado para escribir e imprimir',
        fr: 'Un matériau blanc fin utilisé pour écrire et imprimer',
      },
      example_en: '"I need a clean piece of paper for this assignment."',
    },
    {
      word: 'PEN',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A tool used to write with ink on paper',
        es: 'Una herramienta utilizada para escribir con tinta en el papel',
        fr: 'Un outil utilisé pour écrire à l\'encre sur le papier',
      },
      example_en: '"Write your test answer with a blue pen."',
    },
    {
      word: 'PENCIL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A thin wooden tool with graphite inside used for writing',
        es: 'Una herramienta de madera delgada con grafito adentro usada para escribir',
        fr: 'Un outil en bois fin avec du graphite à l\'intérieur utilisé pour écrire',
      },
      example_en: '"Sharpen your pencil before you start writing."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'STUDENT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A person who is learning in school', es: 'Una persona que está aprendiendo en la escuela', fr: 'Une personne qui apprend à l\'école' },
      wrong: [
        { en: 'A person who teaches', es: 'Una persona que enseña', fr: 'Une personne qui enseigne' },
        { en: 'A type of book', es: 'Un tipo de libro', fr: 'Un type de livre' },
        { en: 'A tool for writing', es: 'Una herramienta para escribir', fr: 'Un outil pour écrire' },
      ],
    },
    {
      word: 'TEACHER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A person who teaches and helps students learn', es: 'Una persona que enseña y ayuda a los estudiantes a aprender', fr: 'Une personne qui enseigne et aide les étudiants à apprendre' },
      wrong: [
        { en: 'A person who learns in school', es: 'Una persona que aprende en la escuela', fr: 'Une personne qui apprend à l\'école' },
        { en: 'A piece of classroom furniture', es: 'Un mueble del salón de clases', fr: 'Un meuble de classe' },
        { en: 'A tool for writing', es: 'Una herramienta para escribir', fr: 'Un outil pour écrire' },
      ],
    },
    {
      word: 'BOOK',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'Something you read with pages and printed words', es: 'Algo que lees con páginas y palabras impresas', fr: 'Quelque chose que vous lisez avec des pages et des mots imprimés' },
      wrong: [
        { en: 'A place where you sit', es: 'Un lugar donde te sientas', fr: 'Un endroit où vous vous asseyez' },
        { en: 'A tool to mark paper', es: 'Una herramienta para marcar papel', fr: 'Un outil pour marquer le papier' },
        { en: 'Something to carry on your back', es: 'Algo para llevar en la espalda', fr: 'Quelque chose à porter sur le dos' },
      ],
    },
    {
      word: 'PENCIL',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A thin wooden tool used for writing', es: 'Una herramienta de madera delgada usada para escribir', fr: 'Un outil en bois fin utilisé pour écrire' },
      wrong: [
        { en: 'A tool with ink for writing', es: 'Una herramienta con tinta para escribir', fr: 'Un outil avec de l\'encre pour écrire' },
        { en: 'Something to remove mistakes', es: 'Algo para eliminar errores', fr: 'Quelque chose pour effacer les erreurs' },
        { en: 'A bag to carry things', es: 'Una bolsa para llevar cosas', fr: 'Un sac pour transporter des choses' },
      ],
    },
    {
      word: 'ERASER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A tool used to remove pencil marks', es: 'Una herramienta usada para eliminar marcas de lápiz', fr: 'Un outil utilisé pour effacer les marques de crayon' },
      wrong: [
        { en: 'A tool to write with', es: 'Una herramienta para escribir', fr: 'Un outil pour écrire' },
        { en: 'A piece of furniture to sit on', es: 'Un mueble para sentarse', fr: 'Un meuble pour s\'asseoir' },
        { en: 'A bag for carrying books', es: 'Una bolsa para llevar libros', fr: 'Un sac pour transporter des livres' },
      ],
    },
    {
      word: 'CHAIR',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A piece of furniture you sit on', es: 'Un mueble en el que te sientas', fr: 'Un meuble sur lequel vous vous asseyez' },
      wrong: [
        { en: 'Something you read', es: 'Algo que lees', fr: 'Quelque chose que vous lisez' },
        { en: 'A tool for writing', es: 'Una herramienta para escribir', fr: 'Un outil pour écrire' },
        { en: 'A tool showing time', es: 'Una herramienta que muestra la hora', fr: 'Un outil montrant l\'heure' },
      ],
    },
    {
      word: 'PEN',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A tool used to write with ink', es: 'Una herramienta usada para escribir con tinta', fr: 'Un outil utilisé pour écrire avec de l\'encre' },
      wrong: [
        { en: 'A tool for removing marks', es: 'Una herramienta para eliminar marcas', fr: 'Un outil pour effacer les marques' },
        { en: 'A thin wooden writing tool', es: 'Una herramienta para escribir de madera delgada', fr: 'Un outil pour écrire en bois fin' },
        { en: 'A bag to carry books', es: 'Una bolsa para llevar libros', fr: 'Un sac pour transporter des livres' },
      ],
    },
    {
      word: 'BACKPACK',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A bag you wear on your back to carry things', es: 'Una bolsa que llevas en la espalda para llevar cosas', fr: 'Un sac que vous portez sur le dos pour transporter des choses' },
      wrong: [
        { en: 'A thin white material for writing', es: 'Un material blanco delgado para escribir', fr: 'Un matériau blanc fin pour écrire' },
        { en: 'A book with blank pages', es: 'Un libro con páginas en blanco', fr: 'Un livre avec des pages vierges' },
        { en: 'A tool to show time', es: 'Una herramienta para mostrar la hora', fr: 'Un outil pour montrer l\'heure' },
      ],
    },
    {
      word: 'NOTEBOOK',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A book with blank pages where you write notes', es: 'Un libro con páginas en blanco donde escribes notas', fr: 'Un livre avec des pages vierges où vous écrivez des notes' },
      wrong: [
        { en: 'A group of students and a teacher', es: 'Un grupo de estudiantes y un maestro', fr: 'Un groupe d\'étudiants et un professeur' },
        { en: 'Furniture you sit on in class', es: 'Muebles en los que te sientas en clase', fr: 'Meubles sur lesquels vous vous asseyez en classe' },
        { en: 'A tool to mark paper', es: 'Una herramienta para marcar papel', fr: 'Un outil pour marquer le papier' },
      ],
    },
    {
      word: 'CLOCK',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A tool that shows what time it is', es: 'Una herramienta que muestra qué hora es', fr: 'Un outil qui montre quelle heure il est' },
      wrong: [
        { en: 'Something you write on', es: 'Algo en lo que escribes', fr: 'Quelque chose sur lequel vous écrivez' },
        { en: 'A place where students learn', es: 'Un lugar donde los estudiantes aprenden', fr: 'Un endroit où les étudiants apprennent' },
        { en: 'A tool for removing pencil marks', es: 'Una herramienta para eliminar marcas de lápiz', fr: 'Un outil pour effacer les marques de crayon' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Sofia\'s First Day in Class',
      es: 'El primer día de Sofia en clase',
      fr: 'Le premier jour de Sofia en classe',
    },
    passage_en: `Sofia sits in her classroom for the first time. She feels nervous. The teacher, Mr. Johnson, smiles at her. "Welcome to class, Sofia," he says. Sofia sits in a blue chair at a wooden desk.

Mr. Johnson points to different things in the room. "This is a clock," he says. Sofia looks up at the wall. The clock shows 9:15. "We start class at nine o\'clock every morning," Mr. Johnson explains.

Sofia opens her backpack carefully. She takes out a new notebook, three pencils, one eraser, and a blue pen. She also has a textbook about English grammar. "Very good," says Mr. Johnson. "You have everything you need for class."

Sofia looks around the room. She sees twenty other students in the class. They are writing in their notebooks. She watches another student raise her hand. "This is how we ask questions," the teacher says to Sofia.

At the end of class, Sofia feels happy. The teacher gives her homework. "Write five sentences in your notebook about your classroom," he says. Sofia smiles. She is ready to learn English.`,
    highlights: [
      { word: 'nervous', tip: { en: 'nervous: feeling worried or afraid', es: 'nervous = nervioso: sentir preocupación o miedo', fr: 'nervous = nerveux: ressentir de l\'inquiétude ou de la peur' } },
      { word: 'textbook', tip: { en: 'textbook: a book for learning a subject', es: 'textbook = libro de texto: un libro para aprender un tema', fr: 'textbook = manuel: un livre pour apprendre un sujet' } },
      { word: 'grammar', tip: { en: 'grammar: rules for how to use language', es: 'grammar = gramática: reglas sobre cómo usar el idioma', fr: 'grammar = grammaire: règles d\'utilisation de la langue' } },
      { word: 'homework', tip: { en: 'homework: schoolwork you do at home', es: 'homework = tarea: trabajo escolar que haces en casa', fr: 'homework = devoir: travail scolaire que vous faites à la maison' } },
    ],
    questions: [
      {
        text: { en: '1. How does Sofia feel at the beginning of class?', es: '1. ¿Cómo se siente Sofia al comienzo de la clase?', fr: '1. Comment Sofia se sent-elle au début de la classe ?' },
        options: [
          { text: { en: 'Happy and excited', es: 'Feliz y emocionada', fr: 'Heureuse et enthousiaste' }, correct: false },
          { text: { en: 'Nervous', es: 'Nerviosa', fr: 'Nerveuse' }, correct: true },
          { text: { en: 'Angry and sad', es: 'Enojada y triste', fr: 'En colère et triste' }, correct: false },
        ],
      },
      {
        text: { en: '2. What does Sofia bring in her backpack?', es: '2. ¿Qué trae Sofia en su mochila?', fr: '2. Que porte Sofia dans son sac à dos ?' },
        options: [
          { text: { en: 'Only books and papers', es: 'Solo libros y papeles', fr: 'Seulement des livres et des papiers' }, correct: false },
          { text: { en: 'A notebook, pencils, an eraser, a pen, and a textbook', es: 'Un cuaderno, lápices, un borrador, una pluma y un libro de texto', fr: 'Un cahier, des crayons, une gomme, un stylo et un manuel' }, correct: true },
          { text: { en: 'Only a notebook and one pen', es: 'Solo un cuaderno y una pluma', fr: 'Seulement un cahier et un stylo' }, correct: false },
        ],
      },
      {
        text: { en: '3. What is Sofia\'s homework?', es: '3. ¿Cuál es la tarea de Sofia?', fr: '3. Quel est le devoir de Sofia ?' },
        options: [
          { text: { en: 'Read a chapter in a book', es: 'Leer un capítulo en un libro', fr: 'Lire un chapitre dans un livre' }, correct: false },
          { text: { en: 'Write five sentences about the classroom', es: 'Escribir cinco oraciones sobre el salón de clase', fr: 'Écrire cinq phrases sur la classe' }, correct: true },
          { text: { en: 'Draw a picture of the classroom', es: 'Dibujar una imagen del salón de clase', fr: 'Dessiner une image de la salle de classe' }, correct: false },
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
    wordBank: ['book', 'pen', 'chair', 'teacher', 'eraser'],
    sentences: [
      {
        before: { en: 'I write with a', es: 'Escribo con una', fr: 'J\'écris avec un' },
        answer: 'pen',
        after: { en: 'in class.', es: 'en clase.', fr: 'en classe.' },
      },
      {
        before: { en: 'The', es: 'El', fr: 'Le' },
        answer: 'teacher',
        after: { en: 'stands at the front of the room.', es: 'se para al frente del salón.', fr: 'se tient à l\'avant de la classe.' },
      },
      {
        before: { en: 'Please sit in your', es: 'Por favor, siéntate en tu', fr: 'Veuillez vous asseoir sur votre' },
        answer: 'chair',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'I carry my notebook and', es: 'Llevo mi cuaderno y', fr: 'Je porte mon cahier et' },
        answer: 'book',
        after: { en: 'in my backpack.', es: 'en mi mochila.', fr: 'dans mon sac à dos.' },
      },
      {
        before: { en: 'Use the', es: 'Usa el', fr: 'Utilisez la' },
        answer: 'eraser',
        after: { en: 'to fix your mistake.', es: 'para corregir tu error.', fr: 'pour corriger votre erreur.' },
      },
    ],
  },
};
