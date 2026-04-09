/**
 * Fibi Law ELS — Unit 09: Family
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-09',
  number: '09',
  title: {
    en: 'Family',
    es: 'Familia',
    fr: 'Famille',
  },
  topic: {
    en: 'Family members · Extended family · Describing family',
    es: 'Miembros de la familia · Familia extendida · Descripción de la familia',
    fr: 'Membres de la famille · Famille étendue · Description de la famille',
  },
  grammar: {
    en: '"My ___ is ___" / "I have a ___"',
    es: '"Mi ___ es ___" / "Tengo un ___"',
    fr: '"Mon ___ est ___" / "J\'ai un ___"',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  vocabulary: [
    {
      word: 'MOTHER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A female parent',
        es: 'Una progenitora',
        fr: 'Une mère',
      },
      example_en: '"My mother cooks delicious food."',
    },
    {
      word: 'FATHER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A male parent',
        es: 'Un progenitor',
        fr: 'Un père',
      },
      example_en: '"My father works hard every day."',
    },
    {
      word: 'SISTER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A female who has the same parents as you',
        es: 'Una mujer que tiene los mismos padres que tú',
        fr: 'Une femme qui a les mêmes parents que vous',
      },
      example_en: '"My sister is a teacher."',
    },
    {
      word: 'BROTHER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A male who has the same parents as you',
        es: 'Un hombre que tiene los mismos padres que tú',
        fr: 'Un homme qui a les mêmes parents que vous',
      },
      example_en: '"My brother plays soccer."',
    },
    {
      word: 'GRANDMOTHER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The mother of your parent',
        es: 'La madre de tu progenitor',
        fr: 'La mère de votre parent',
      },
      example_en: '"My grandmother makes cookies."',
    },
    {
      word: 'GRANDFATHER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The father of your parent',
        es: 'El padre de tu progenitor',
        fr: 'Le père de votre parent',
      },
      example_en: '"My grandfather tells interesting stories."',
    },
    {
      word: 'AUNT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The sister of your parent',
        es: 'La hermana de tu progenitor',
        fr: 'La sœur de votre parent',
      },
      example_en: '"My aunt lives in another city."',
    },
    {
      word: 'UNCLE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The brother of your parent',
        es: 'El hermano de tu progenitor',
        fr: 'Le frère de votre parent',
      },
      example_en: '"My uncle is very funny."',
    },
    {
      word: 'COUSIN',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The child of your aunt or uncle',
        es: 'El hijo de tu tía o tío',
        fr: 'L\'enfant de votre tante ou oncle',
      },
      example_en: '"My cousin and I play together."',
    },
    {
      word: 'HUSBAND',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A married man',
        es: 'Un hombre casado',
        fr: 'Un homme marié',
      },
      example_en: '"My husband is a doctor."',
    },
    {
      word: 'WIFE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A married woman',
        es: 'Una mujer casada',
        fr: 'Une femme mariée',
      },
      example_en: '"His wife is a nurse."',
    },
    {
      word: 'CHILDREN',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Young people who have not grown up yet',
        es: 'Personas jóvenes que aún no han crecido',
        fr: 'Les jeunes personnes qui ne sont pas encore adultes',
      },
      example_en: '"They have three children."',
    },
  ],

  quiz: [
    {
      word: 'MOTHER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A female parent', es: 'Una progenitora', fr: 'Une mère' },
      wrong: [
        { en: 'A female teacher', es: 'Una maestra', fr: 'Une femme enseignante' },
        { en: 'An older woman', es: 'Una mujer mayor', fr: 'Une femme âgée' },
        { en: 'A female friend', es: 'Una amiga', fr: 'Une amie' },
      ],
    },
    {
      word: 'GRANDFATHER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The father of your parent', es: 'El padre de tu progenitor', fr: 'Le père de votre parent' },
      wrong: [
        { en: 'The father of your friend', es: 'El padre de tu amigo', fr: 'Le père de votre ami' },
        { en: 'An old man', es: 'Un hombre mayor', fr: 'Un vieil homme' },
        { en: 'Your father\'s friend', es: 'El amigo de tu padre', fr: 'L\'ami de votre père' },
      ],
    },
    {
      word: 'UNCLE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The brother of your parent', es: 'El hermano de tu progenitor', fr: 'Le frère de votre parent' },
      wrong: [
        { en: 'The father of your cousin', es: 'El padre de tu primo', fr: 'Le père de votre cousin' },
        { en: 'Your grandfather\'s son', es: 'El hijo de tu abuelo', fr: 'Le fils de votre grand-père' },
        { en: 'Your parent\'s male friend', es: 'El amigo de tu progenitor', fr: 'L\'ami de votre parent' },
      ],
    },
    {
      word: 'COUSIN',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The child of your aunt or uncle', es: 'El hijo de tu tía o tío', fr: 'L\'enfant de votre tante ou oncle' },
      wrong: [
        { en: 'The child of your sister', es: 'El hijo de tu hermana', fr: 'L\'enfant de votre sœur' },
        { en: 'Your friend from school', es: 'Tu amigo de la escuela', fr: 'Votre ami de l\'école' },
        { en: 'Your parent\'s cousin', es: 'El primo de tu progenitor', fr: 'Le cousin de votre parent' },
      ],
    },
    {
      word: 'SISTER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A female who has the same parents as you', es: 'Una mujer que tiene los mismos padres que tú', fr: 'Une femme qui a les mêmes parents que vous' },
      wrong: [
        { en: 'A female friend', es: 'Una amiga', fr: 'Une amie' },
        { en: 'A female cousin', es: 'Una prima', fr: 'Une cousine' },
        { en: 'A female student', es: 'Una estudiante', fr: 'Une étudiante' },
      ],
    },
    {
      word: 'HUSBAND',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A married man', es: 'Un hombre casado', fr: 'Un homme marié' },
      wrong: [
        { en: 'A male friend', es: 'Un amigo', fr: 'Un ami' },
        { en: 'A male relative', es: 'Un pariente varón', fr: 'Un parent de sexe masculin' },
        { en: 'A male teacher', es: 'Un maestro', fr: 'Un professeur' },
      ],
    },
    {
      word: 'FATHER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A male parent', es: 'Un progenitor', fr: 'Un père' },
      wrong: [
        { en: 'A male teacher', es: 'Un maestro', fr: 'Un professeur' },
        { en: 'An older man', es: 'Un hombre mayor', fr: 'Un vieil homme' },
        { en: 'A male friend', es: 'Un amigo', fr: 'Un ami' },
      ],
    },
    {
      word: 'AUNT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The sister of your parent', es: 'La hermana de tu progenitor', fr: 'La sœur de votre parent' },
      wrong: [
        { en: 'The mother of your cousin', es: 'La madre de tu primo', fr: 'La mère de votre cousin' },
        { en: 'Your parent\'s female friend', es: 'La amiga de tu progenitor', fr: 'L\'amie de votre parent' },
        { en: 'Your female cousin', es: 'Tu prima', fr: 'Votre cousine' },
      ],
    },
    {
      word: 'WIFE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A married woman', es: 'Una mujer casada', fr: 'Une femme mariée' },
      wrong: [
        { en: 'A female friend', es: 'Una amiga', fr: 'Une amie' },
        { en: 'A female relative', es: 'Una pariente', fr: 'Une parente' },
        { en: 'A female coworker', es: 'Una compañera de trabajo', fr: 'Une collègue' },
      ],
    },
    {
      word: 'BROTHER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A male who has the same parents as you', es: 'Un hombre que tiene los mismos padres que tú', fr: 'Un homme qui a les mêmes parents que vous' },
      wrong: [
        { en: 'A male friend', es: 'Un amigo', fr: 'Un ami' },
        { en: 'A male cousin', es: 'Un primo', fr: 'Un cousin' },
        { en: 'A male student', es: 'Un estudiante', fr: 'Un étudiant' },
      ],
    },
  ],

  reading: {
    title: {
      en: 'Ana\'s Family Photo',
      es: 'Foto de familia de Ana',
      fr: 'Photo de famille d\'Ana',
    },
    passage_en: `Ana is showing her family photo to her English class. She holds the photo and says, "This is my family."

"First, these are my parents. My mother is on the left. She is a nurse at the hospital. My father is on the right. He works in an office downtown. They are very kind."

"Next to my mother is my grandmother. She is 80 years old. She lives with us. My grandmother cooks dinner every night. Her food is very delicious. My grandfather is not in this photo. He lives in another city with my uncle."

"This is my uncle. He is my mother\'s brother. He is a businessman. He travels a lot for his job. He is very busy."

"Here is my aunt. She is my father\'s sister. She is a doctor. She helps people at the hospital."

"My sister is next to my aunt. Her name is Maria. She is 16 years old. She studies at high school."

"Finally, here is my brother. His name is Carlos. He is 12 years old. He plays soccer with his friends."

"I also have a cousin. His name is David. He is my uncle\'s son. We are the same age. We play together all the time."

Ana smiles. "My family is very important to me. I love them all very much."`,
    highlights: [
      { word: 'showing', tip: { en: 'showing: letting someone see something', es: 'showing = mostrando: permitir que alguien vea algo', fr: 'showing = montrer: permettre à quelqu\'un de voir quelque chose' } },
      { word: 'relatives', tip: { en: 'relatives: family members', es: 'relatives = parientes: miembros de la familia', fr: 'relatives = parents: membres de la famille' } },
      { word: 'businessman', tip: { en: 'businessman: a man who works in business', es: 'businessman = empresario: un hombre que trabaja en negocios', fr: 'businessman = homme d\'affaires: un homme qui travaille en affaires' } },
      { word: 'important', tip: { en: 'important: very valuable or meaningful', es: 'important = importante: muy valioso o significativo', fr: 'important = important: très précieux ou significatif' } },
    ],
    questions: [
      {
        text: { en: '1. What is Ana\'s mother\'s job?', es: '1. ¿Cuál es el trabajo de la madre de Ana?', fr: '1. Quel est le travail de la mère d\'Ana ?' },
        options: [
          { text: { en: 'A doctor', es: 'Una doctora', fr: 'Une docteure' }, correct: false },
          { text: { en: 'A nurse', es: 'Una enfermera', fr: 'Une infirmière' }, correct: true },
          { text: { en: 'A teacher', es: 'Una maestra', fr: 'Une enseignante' }, correct: false },
        ],
      },
      {
        text: { en: '2. How old is Ana\'s grandmother?', es: '2. ¿Cuántos años tiene la abuela de Ana?', fr: '2. Quel âge a la grand-mère d\'Ana ?' },
        options: [
          { text: { en: '70 years old', es: '70 años', fr: '70 ans' }, correct: false },
          { text: { en: '80 years old', es: '80 años', fr: '80 ans' }, correct: true },
          { text: { en: '90 years old', es: '90 años', fr: '90 ans' }, correct: false },
        ],
      },
      {
        text: { en: '3. What is Ana\'s cousin\'s name?', es: '3. ¿Cuál es el nombre del primo de Ana?', fr: '3. Quel est le nom du cousin d\'Ana ?' },
        options: [
          { text: { en: 'Carlos', es: 'Carlos', fr: 'Carlos' }, correct: false },
          { text: { en: 'David', es: 'David', fr: 'David' }, correct: true },
          { text: { en: 'Maria', es: 'María', fr: 'Maria' }, correct: false },
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
    wordBank: ['mother', 'grandfather', 'uncle', 'cousin', 'husband'],
    sentences: [
      {
        before: { en: 'My', es: 'Mi', fr: 'Ma' },
        answer: 'mother',
        after: { en: 'cooks dinner every night.', es: 'cocina la cena todas las noches.', fr: 'cuisine le dîner tous les soirs.' },
      },
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'grandfather',
        after: { en: 'is very old. He is 80 years old.', es: 'es muy viejo. Tiene 80 años.', fr: 'est très vieux. Il a 80 ans.' },
      },
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'uncle',
        after: { en: 'is my mother\'s brother.', es: 'es el hermano de mi madre.', fr: 'est le frère de ma mère.' },
      },
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'cousin',
        after: { en: 'and I play together. We are the same age.', es: 'y yo jugamos juntos. Somos de la misma edad.', fr: 'et moi jouons ensemble. Nous avons le même âge.' },
      },
      {
        before: { en: 'Her', es: 'Su', fr: 'Son' },
        answer: 'husband',
        after: { en: 'goes to work every day.', es: 'va al trabajo todos los días.', fr: 'va travailler tous les jours.' },
      },
    ],
  },
};
