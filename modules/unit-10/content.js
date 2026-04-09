/**
 * Fibi Law ELS — Unit 10: School
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-10',
  number: '10',
  title: {
    en: 'School',
    es: 'Escuela',
    fr: 'École',
  },
  topic: {
    en: 'School workers · School locations · Reading a school flyer',
    es: 'Trabajadores de la escuela · Ubicaciones escolares · Lectura de un volante escolar',
    fr: 'Travailleurs scolaires · Lieux scolaires · Lecture d\'un dépliant scolaire',
  },
  grammar: {
    en: '"Where is the ___?" / "Go to the ___"',
    es: '"¿Dónde está la ___?" / "Ve a la ___"',
    fr: '"Où est la ___?" / "Allez à la ___"',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  vocabulary: [
    {
      word: 'TEACHER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who teaches students in a school',
        es: 'Una persona que enseña a los estudiantes en una escuela',
        fr: 'Une personne qui enseigne aux étudiants dans une école',
      },
      example_en: '"My teacher explains the lesson clearly."',
    },
    {
      word: 'PRINCIPAL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The leader of a school',
        es: 'El líder de una escuela',
        fr: 'Le chef d\'une école',
      },
      example_en: '"The principal makes important decisions for the school."',
    },
    {
      word: 'LIBRARIAN',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who works in a library and helps people find books',
        es: 'Una persona que trabaja en una biblioteca y ayuda a las personas a encontrar libros',
        fr: 'Une personne qui travaille dans une bibliothèque et aide les gens à trouver des livres',
      },
      example_en: '"The librarian helps me find science books."',
    },
    {
      word: 'JANITOR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who cleans and maintains a school building',
        es: 'Una persona que limpia y mantiene un edificio escolar',
        fr: 'Une personne qui nettoie et entretient un bâtiment scolaire',
      },
      example_en: '"The janitor keeps the school clean."',
    },
    {
      word: 'LIBRARY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room or building with many books to read and borrow',
        es: 'Una sala o edificio con muchos libros para leer y tomar prestado',
        fr: 'Une salle ou un bâtiment avec de nombreux livres à lire et à emprunter',
      },
      example_en: '"I borrow books from the library every week."',
    },
    {
      word: 'CLASSROOM',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room where a teacher teaches students',
        es: 'Una habitación donde un maestro enseña a los estudiantes',
        fr: 'Une salle où un enseignant enseigne aux étudiants',
      },
      example_en: '"We sit at desks in the classroom."',
    },
    {
      word: 'CAFETERIA',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place in a school where students eat lunch',
        es: 'Un lugar en una escuela donde los estudiantes almuerzan',
        fr: 'Un endroit dans une école où les étudiants déjeunent',
      },
      example_en: '"We eat lunch in the cafeteria with our friends."',
    },
    {
      word: 'HALLWAY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A passage or corridor in a building',
        es: 'Un pasaje o pasillo en un edificio',
        fr: 'Un passage ou un couloir dans un bâtiment',
      },
      example_en: '"Walk down the hallway to find your classroom."',
    },
    {
      word: 'BATHROOM',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room with a toilet and sink',
        es: 'Una habitación con un inodoro y un lavabo',
        fr: 'Une salle avec un toilette et un lavabo',
      },
      example_en: '"Where is the bathroom? I need to go."',
    },
    {
      word: 'OFFICE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A room where a principal or administrator works',
        es: 'Una habitación donde trabaja un director o administrador',
        fr: 'Une salle où un directeur ou un administrateur travaille',
      },
      example_en: '"Go to the office if you need help."',
    },
    {
      word: 'SCHOOL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A place where students go to learn',
        es: 'Un lugar donde los estudiantes van a aprender',
        fr: 'Un endroit où les étudiants vont apprendre',
      },
      example_en: '"I go to school five days a week."',
    },
    {
      word: 'STUDENT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A person who attends school to learn',
        es: 'Una persona que asiste a la escuela para aprender',
        fr: 'Une personne qui fréquente l\'école pour apprendre',
      },
      example_en: '"I am a student in this school."',
    },
  ],

  quiz: [
    {
      word: 'PRINCIPAL',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The leader of a school', es: 'El líder de una escuela', fr: 'Le chef d\'une école' },
      wrong: [
        { en: 'A teacher in a school', es: 'Un maestro en una escuela', fr: 'Un enseignant dans une école' },
        { en: 'A person who cleans the school', es: 'Una persona que limpia la escuela', fr: 'Une personne qui nettoie l\'école' },
        { en: 'A person who works in a library', es: 'Una persona que trabaja en una biblioteca', fr: 'Une personne qui travaille dans une bibliothèque' },
      ],
    },
    {
      word: 'LIBRARIAN',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A person who works in a library and helps find books', es: 'Una persona que trabaja en una biblioteca y ayuda a encontrar libros', fr: 'Une personne qui travaille dans une bibliothèque et aide à trouver des livres' },
      wrong: [
        { en: 'A person who teaches in a classroom', es: 'Una persona que enseña en una clase', fr: 'Une personne qui enseigne dans une classe' },
        { en: 'The leader of a school', es: 'El líder de una escuela', fr: 'Le chef d\'une école' },
        { en: 'A person who serves food', es: 'Una persona que sirve comida', fr: 'Une personne qui sert la nourriture' },
      ],
    },
    {
      word: 'CAFETERIA',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A place in a school where students eat lunch', es: 'Un lugar en una escuela donde los estudiantes almuerzan', fr: 'Un endroit dans une école où les étudiants déjeunent' },
      wrong: [
        { en: 'A room where students study', es: 'Una habitación donde los estudiantes estudian', fr: 'Une salle où les étudiants étudient' },
        { en: 'A place where books are kept', es: 'Un lugar donde se guardan libros', fr: 'Un endroit où les livres sont gardés' },
        { en: 'A room where the principal works', es: 'Una habitación donde trabaja el director', fr: 'Une salle où le directeur travaille' },
      ],
    },
    {
      word: 'HALLWAY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A passage or corridor in a building', es: 'Un pasaje o pasillo en un edificio', fr: 'Un passage ou un couloir dans un bâtiment' },
      wrong: [
        { en: 'A large room for eating', es: 'Una habitación grande para comer', fr: 'Une grande salle pour manger' },
        { en: 'A room with a toilet', es: 'Una habitación con un inodoro', fr: 'Une salle avec un toilette' },
        { en: 'A room where classes are taught', es: 'Una habitación donde se enseñan clases', fr: 'Une salle où les cours sont enseignés' },
      ],
    },
    {
      word: 'CLASSROOM',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A room where a teacher teaches students', es: 'Una habitación donde un maestro enseña a los estudiantes', fr: 'Une salle où un enseignant enseigne aux étudiants' },
      wrong: [
        { en: 'A place to eat lunch', es: 'Un lugar para almorzar', fr: 'Un endroit pour déjeuner' },
        { en: 'A room with books', es: 'Una habitación con libros', fr: 'Une salle avec des livres' },
        { en: 'A hallway in the school', es: 'Un pasillo en la escuela', fr: 'Un couloir à l\'école' },
      ],
    },
    {
      word: 'JANITOR',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A person who cleans and maintains a school building', es: 'Una persona que limpia y mantiene un edificio escolar', fr: 'Une personne qui nettoie et entretient un bâtiment scolaire' },
      wrong: [
        { en: 'A person who teaches students', es: 'Una persona que enseña a los estudiantes', fr: 'Une personne qui enseigne aux étudiants' },
        { en: 'A person who works in the library', es: 'Una persona que trabaja en la biblioteca', fr: 'Une personne qui travaille à la bibliothèque' },
        { en: 'A person who leads the school', es: 'Una persona que dirige la escuela', fr: 'Une personne qui dirige l\'école' },
      ],
    },
    {
      word: 'LIBRARY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A room or building with many books to read and borrow', es: 'Una sala o edificio con muchos libros para leer y tomar prestado', fr: 'Une salle ou un bâtiment avec de nombreux livres à lire et à emprunter' },
      wrong: [
        { en: 'A place where students eat', es: 'Un lugar donde comen los estudiantes', fr: 'Un endroit où les étudiants mangent' },
        { en: 'A room where students study at desks', es: 'Una habitación donde los estudiantes estudian en escritorios', fr: 'Une salle où les étudiants étudient à des pupitres' },
        { en: 'A passage in the school', es: 'Un pasaje en la escuela', fr: 'Un passage à l\'école' },
      ],
    },
    {
      word: 'BATHROOM',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A room with a toilet and sink', es: 'Una habitación con un inodoro y un lavabo', fr: 'Une salle avec un toilette et un lavabo' },
      wrong: [
        { en: 'A room with desks', es: 'Una habitación con escritorios', fr: 'Une salle avec des pupitres' },
        { en: 'A place to eat meals', es: 'Un lugar para comer comidas', fr: 'Un endroit pour manger des repas' },
        { en: 'A corridor in a building', es: 'Un pasillo en un edificio', fr: 'Un couloir dans un bâtiment' },
      ],
    },
    {
      word: 'OFFICE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A room where a principal or administrator works', es: 'Una habitación donde trabaja un director o administrador', fr: 'Une salle où un directeur ou un administrateur travaille' },
      wrong: [
        { en: 'A place to borrow books', es: 'Un lugar para tomar libros prestados', fr: 'Un endroit pour emprunter des livres' },
        { en: 'A room where students eat lunch', es: 'Una habitación donde los estudiantes almuerzan', fr: 'Une salle où les étudiants déjeunent' },
        { en: 'A space with classrooms', es: 'Un espacio con aulas', fr: 'Un espace avec des salles de classe' },
      ],
    },
    {
      word: 'TEACHER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A person who teaches students in a school', es: 'Una persona que enseña a los estudiantes en una escuela', fr: 'Une personne qui enseigne aux étudiants dans une école' },
      wrong: [
        { en: 'A student who studies hard', es: 'Un estudiante que estudia mucho', fr: 'Un étudiant qui étudie beaucoup' },
        { en: 'A person who leads the school', es: 'Una persona que dirige la escuela', fr: 'Une personne qui dirige l\'école' },
        { en: 'A person who works in the library', es: 'Una persona que trabaja en la biblioteca', fr: 'Une personne qui travaille à la bibliothèque' },
      ],
    },
  ],

  reading: {
    title: {
      en: 'David\'s First Week at a New School',
      es: 'Primera semana de David en una nueva escuela',
      fr: 'La première semaine de David dans une nouvelle école',
    },
    passage_en: `David is nervous. Today is his first day at a new school. He does not know where anything is. He does not know any students.

At 8:30 a.m., David walks into the school. A student says, "Hi! I am your student buddy. Let me show you where to go." David feels better.

First, they go to the office. The principal is there. She is very friendly. She says, "Welcome to our school, David. You will be very happy here."

The student buddy shows David his classroom. The teacher is Ms. Johnson. She smiles at David. "You can sit here," she says.

At lunch time, they go to the cafeteria. Many students are eating. David gets food and sits with his buddy. The food is very good.

After lunch, the buddy shows David the library. The librarian says, "We have thousands of books! You can borrow books for free."

David also sees the hallway with many lockers. He learns where the bathrooms are. He walks down the hallway and finds his classroom again.

By the end of the day, David is happy. He made a new friend. He knows where all the important places are. The janitor waves to him as he leaves. "Good luck, David!"

David thinks about tomorrow. He is excited to go to his new school.`,
    highlights: [
      { word: 'nervous', tip: { en: 'nervous: worried or afraid', es: 'nervous = nervioso: preocupado o asustado', fr: 'nervous = nerveux: inquiet ou effrayé' } },
      { word: 'buddy', tip: { en: 'buddy: a close friend or helper', es: 'buddy = amigo: un amigo cercano o ayudante', fr: 'buddy = copain: un ami proche ou assistant' } },
      { word: 'thousands', tip: { en: 'thousands: many, many books (thousands = 1000+)', es: 'thousands = miles: muchos, muchos libros', fr: 'thousands = milliers: beaucoup, beaucoup de livres' } },
      { word: 'lockers', tip: { en: 'lockers: small storage boxes where students keep things', es: 'lockers = taquillas: pequeñas cajas de almacenamiento', fr: 'lockers = casiers: petites boîtes de rangement' } },
    ],
    questions: [
      {
        text: { en: '1. Why is David nervous?', es: '1. ¿Por qué está nervioso David?', fr: '1. Pourquoi David est-il nerveux ?' },
        options: [
          { text: { en: 'He does not like school', es: 'No le gusta la escuela', fr: 'Il n\'aime pas l\'école' }, correct: false },
          { text: { en: 'It is his first day at a new school', es: 'Es su primer día en una nueva escuela', fr: 'C\'est son premier jour dans une nouvelle école' }, correct: true },
          { text: { en: 'He is late for class', es: 'Llega tarde a clase', fr: 'Il arrive en retard à la classe' }, correct: false },
        ],
      },
      {
        text: { en: '2. Who helps David on his first day?', es: '2. ¿Quién ayuda a David el primer día?', fr: '2. Qui aide David le premier jour ?' },
        options: [
          { text: { en: 'The principal', es: 'El director', fr: 'Le directeur' }, correct: false },
          { text: { en: 'A student buddy', es: 'Un amigo estudiante', fr: 'Un ami étudiant' }, correct: true },
          { text: { en: 'The librarian', es: 'La bibliotecaria', fr: 'La bibliothécaire' }, correct: false },
        ],
      },
      {
        text: { en: '3. How many books are in the library?', es: '3. ¿Cuántos libros hay en la biblioteca?', fr: '3. Combien de livres y a-t-il à la bibliothèque ?' },
        options: [
          { text: { en: 'Hundreds of books', es: 'Cientos de libros', fr: 'Des centaines de livres' }, correct: false },
          { text: { en: 'Thousands of books', es: 'Miles de libros', fr: 'Des milliers de livres' }, correct: true },
          { text: { en: 'Dozens of books', es: 'Docenas de libros', fr: 'Des douzaines de livres' }, correct: false },
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
    wordBank: ['library', 'cafeteria', 'principal', 'hallway', 'bathroom'],
    sentences: [
      {
        before: { en: 'I borrow books from the', es: 'Tomo libros prestados de la', fr: 'J\'emprunte des livres à la' },
        answer: 'library',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'We eat lunch in the', es: 'Comemos almuerzo en la', fr: 'Nous déjeunons à la' },
        answer: 'cafeteria',
        after: { en: 'with our friends.', es: 'con nuestros amigos.', fr: 'avec nos amis.' },
      },
      {
        before: { en: 'The', es: 'El', fr: 'Le' },
        answer: 'principal',
        after: { en: 'is the leader of the school.', es: 'es el líder de la escuela.', fr: 'est le chef de l\'école.' },
      },
      {
        before: { en: 'Walk down the', es: 'Camina por el', fr: 'Marchez dans le' },
        answer: 'hallway',
        after: { en: 'to find your classroom.', es: 'para encontrar tu clase.', fr: 'pour trouver votre classe.' },
      },
      {
        before: { en: 'Excuse me, where is the', es: 'Disculpa, ¿dónde está el', fr: 'Excusez-moi, où est la' },
        answer: 'bathroom',
        after: { en: '?', es: '?', fr: '?' },
      },
    ],
  },
};
