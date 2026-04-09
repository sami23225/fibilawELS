/**
 * Fibi Law ELS — Unit 07: Countries & Nationalities
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-07',
  number: '07',
  title: {
    en: 'Countries & Nationalities',
    es: 'Países y nacionalidades',
    fr: 'Pays et nationalités',
  },
  topic: {
    en: 'Countries · Nationalities · Form completion',
    es: 'Países · Nacionalidades · Completar formularios',
    fr: 'Pays · Nationalités · Remplir les formulaires',
  },
  grammar: {
    en: 'I am from ___ · I am ___',
    es: 'Soy de ___ · Soy ___',
    fr: 'Je viens de ___ · Je suis ___',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'UNITED STATES',
      pos: { en: 'proper noun', es: 'sustantivo propio', fr: 'nom propre' },
      definition: {
        en: 'A country in North America with many states',
        es: 'Un país en América del Norte con muchos estados',
        fr: 'Un pays en Amérique du Nord avec plusieurs États',
      },
      example_en: '"I was born in the United States."',
    },
    {
      word: 'MEXICO',
      pos: { en: 'proper noun', es: 'sustantivo propio', fr: 'nom propre' },
      definition: {
        en: 'A country south of the United States',
        es: 'Un país al sur de los Estados Unidos',
        fr: 'Un pays au sud des États-Unis',
      },
      example_en: '"Mexico is south of the US border."',
    },
    {
      word: 'CHINA',
      pos: { en: 'proper noun', es: 'sustantivo propio', fr: 'nom propre' },
      definition: {
        en: 'A large country in East Asia with many people',
        es: 'Un país grande en Asia Oriental con muchas personas',
        fr: 'Un grand pays en Asie de l\'Est avec beaucoup de gens',
      },
      example_en: '"There are many cities in China."',
    },
    {
      word: 'INDIA',
      pos: { en: 'proper noun', es: 'sustantivo propio', fr: 'nom propre' },
      definition: {
        en: 'A large country in South Asia',
        es: 'Un país grande en Asia del Sur',
        fr: 'Un grand pays en Asie du Sud',
      },
      example_en: '"India is in South Asia."',
    },
    {
      word: 'FRANCE',
      pos: { en: 'proper noun', es: 'sustantivo propio', fr: 'nom propre' },
      definition: {
        en: 'A country in Western Europe known for art and food',
        es: 'Un país en Europa Occidental conocido por el arte y la comida',
        fr: 'Un pays en Europe de l\'Ouest connu pour l\'art et la cuisine',
      },
      example_en: '"Paris is the capital of France."',
    },
    {
      word: 'JAPAN',
      pos: { en: 'proper noun', es: 'sustantivo propio', fr: 'nom propre' },
      definition: {
        en: 'A country in East Asia made of islands',
        es: 'Un país en Asia Oriental hecho de islas',
        fr: 'Un pays en Asie de l\'Est composé d\'îles',
      },
      example_en: '"Japan is in East Asia."',
    },
    {
      word: 'ITALY',
      pos: { en: 'proper noun', es: 'sustantivo propio', fr: 'nom propre' },
      definition: {
        en: 'A country in Southern Europe shaped like a boot',
        es: 'Un país en Europa del Sur con forma de bota',
        fr: 'Un pays en Europe du Sud en forme de botte',
      },
      example_en: '"Rome is the capital of Italy."',
    },
    {
      word: 'EL SALVADOR',
      pos: { en: 'proper noun', es: 'sustantivo propio', fr: 'nom propre' },
      definition: {
        en: 'A small country in Central America',
        es: 'Un país pequeño en América Central',
        fr: 'Un petit pays en Amérique centrale',
      },
      example_en: '"Many families came to the US from El Salvador."',
    },
    {
      word: 'AMERICAN',
      pos: { en: 'adjective/noun', es: 'adjetivo/sustantivo', fr: 'adjectif/nom' },
      definition: {
        en: 'From or related to the United States',
        es: 'De o relacionado con los Estados Unidos',
        fr: 'De ou relatif aux États-Unis',
      },
      example_en: '"She is American — she is from the United States."',
    },
    {
      word: 'MEXICAN',
      pos: { en: 'adjective/noun', es: 'adjetivo/sustantivo', fr: 'adjectif/nom' },
      definition: {
        en: 'From or related to Mexico',
        es: 'De o relacionado con México',
        fr: 'De ou relatif au Mexique',
      },
      example_en: '"He is Mexican — he is from Mexico."',
    },
    {
      word: 'CHINESE',
      pos: { en: 'adjective/noun', es: 'adjetivo/sustantivo', fr: 'adjectif/nom' },
      definition: {
        en: 'From or related to China',
        es: 'De o relacionado con China',
        fr: 'De ou relatif à la Chine',
      },
      example_en: '"They are Chinese — they come from China."',
    },
    {
      word: 'INDIAN',
      pos: { en: 'adjective/noun', es: 'adjetivo/sustantivo', fr: 'adjectif/nom' },
      definition: {
        en: 'From or related to India',
        es: 'De o relacionado con India',
        fr: 'De ou relatif à l\'Inde',
      },
      example_en: '"She is Indian — she is from India."',
    },
    {
      word: 'FRENCH',
      pos: { en: 'adjective/noun', es: 'adjetivo/sustantivo', fr: 'adjectif/nom' },
      definition: {
        en: 'From or related to France',
        es: 'De o relacionado con Francia',
        fr: 'De ou relatif à la France',
      },
      example_en: '"He speaks French — he is from France."',
    },
    {
      word: 'JAPANESE',
      pos: { en: 'adjective/noun', es: 'adjetivo/sustantivo', fr: 'adjectif/nom' },
      definition: {
        en: 'From or related to Japan',
        es: 'De o relacionado con Japón',
        fr: 'De ou relatif au Japon',
      },
      example_en: '"She is Japanese — she comes from Japan."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'AMERICAN',
      question: { en: 'What does "American" mean?', es: '¿Qué significa "American"?', fr: 'Que signifie "American" ?' },
      correct: { en: 'From or related to the United States', es: 'De o relacionado con los Estados Unidos', fr: 'De ou relatif aux États-Unis' },
      wrong: [
        { en: 'From Mexico', es: 'De México', fr: 'Du Mexique' },
        { en: 'From China', es: 'De China', fr: 'De Chine' },
        { en: 'From France', es: 'De Francia', fr: 'De France' },
      ],
    },
    {
      word: 'MEXICAN',
      question: { en: 'What does "Mexican" mean?', es: '¿Qué significa "Mexican"?', fr: 'Que signifie "Mexican" ?' },
      correct: { en: 'From or related to Mexico', es: 'De o relacionado con México', fr: 'De ou relatif au Mexique' },
      wrong: [
        { en: 'From the United States', es: 'De los Estados Unidos', fr: 'Des États-Unis' },
        { en: 'From Japan', es: 'De Japón', fr: 'Du Japon' },
        { en: 'From India', es: 'De India', fr: 'De l\'Inde' },
      ],
    },
    {
      word: 'CHINESE',
      question: { en: 'What does "Chinese" mean?', es: '¿Qué significa "Chinese"?', fr: 'Que signifie "Chinese" ?' },
      correct: { en: 'From or related to China', es: 'De o relacionado con China', fr: 'De ou relatif à la Chine' },
      wrong: [
        { en: 'From France', es: 'De Francia', fr: 'De France' },
        { en: 'From El Salvador', es: 'De El Salvador', fr: 'D\'El Salvador' },
        { en: 'From Italy', es: 'De Italia', fr: 'D\'Italie' },
      ],
    },
    {
      word: 'FRENCH',
      question: { en: 'What does "French" mean?', es: '¿Qué significa "French"?', fr: 'Que signifie "French" ?' },
      correct: { en: 'From or related to France', es: 'De o relacionado con Francia', fr: 'De ou relatif à la France' },
      wrong: [
        { en: 'From Germany', es: 'De Alemania', fr: 'D\'Allemagne' },
        { en: 'From Japan', es: 'De Japón', fr: 'Du Japon' },
        { en: 'From Mexico', es: 'De México', fr: 'Du Mexique' },
      ],
    },
    {
      word: 'INDIA',
      question: { en: 'What is India?', es: '¿Qué es India?', fr: 'Qu\'est-ce que l\'Inde ?' },
      correct: { en: 'A large country in South Asia', es: 'Un país grande en Asia del Sur', fr: 'Un grand pays en Asie du Sud' },
      wrong: [
        { en: 'A country in Europe', es: 'Un país en Europa', fr: 'Un pays en Europe' },
        { en: 'A country in North America', es: 'Un país en América del Norte', fr: 'Un pays en Amérique du Nord' },
        { en: 'A country in Africa', es: 'Un país en África', fr: 'Un pays en Afrique' },
      ],
    },
    {
      word: 'JAPAN',
      question: { en: 'What is Japan?', es: '¿Qué es Japón?', fr: 'Qu\'est-ce que le Japon ?' },
      correct: { en: 'A country in East Asia made of islands', es: 'Un país en Asia Oriental hecho de islas', fr: 'Un pays en Asie de l\'Est composé d\'îles' },
      wrong: [
        { en: 'A country in Europe', es: 'Un país en Europa', fr: 'Un pays en Europe' },
        { en: 'A country in South America', es: 'Un país en América del Sur', fr: 'Un pays en Amérique du Sud' },
        { en: 'A country in Africa', es: 'Un país en África', fr: 'Un pays en Afrique' },
      ],
    },
    {
      word: 'ITALIAN',
      question: { en: 'What does "Italian" mean?', es: '¿Qué significa "Italian"?', fr: 'Que signifie "Italian" ?' },
      correct: { en: 'From or related to Italy', es: 'De o relacionado con Italia', fr: 'De ou relatif à l\'Italie' },
      wrong: [
        { en: 'From Spain', es: 'De España', fr: 'D\'Espagne' },
        { en: 'From Greece', es: 'De Grecia', fr: 'De Grèce' },
        { en: 'From Portugal', es: 'De Portugal', fr: 'Du Portugal' },
      ],
    },
    {
      word: 'INDIAN',
      question: { en: 'What does "Indian" mean?', es: '¿Qué significa "Indian"?', fr: 'Que signifie "Indian" ?' },
      correct: { en: 'From or related to India', es: 'De o relacionado con India', fr: 'De ou relatif à l\'Inde' },
      wrong: [
        { en: 'From China', es: 'De China', fr: 'De Chine' },
        { en: 'From Japan', es: 'De Japón', fr: 'Du Japon' },
        { en: 'From Thailand', es: 'De Tailandia', fr: 'De Thaïlande' },
      ],
    },
    {
      word: 'JAPAN',
      question: { en: 'What does "Japanese" mean?', es: '¿Qué significa "Japanese"?', fr: 'Que signifie "Japanese" ?' },
      correct: { en: 'From or related to Japan', es: 'De o relacionado con Japón', fr: 'De ou relatif au Japon' },
      wrong: [
        { en: 'From South Korea', es: 'De Corea del Sur', fr: 'De Corée du Sud' },
        { en: 'From Vietnam', es: 'De Vietnam', fr: 'Du Vietnam' },
        { en: 'From China', es: 'De China', fr: 'De Chine' },
      ],
    },
    {
      word: 'EL SALVADOR',
      question: { en: 'What is El Salvador?', es: '¿Qué es El Salvador?', fr: 'Qu\'est-ce qu\'El Salvador ?' },
      correct: { en: 'A small country in Central America', es: 'Un país pequeño en América Central', fr: 'Un petit pays en Amérique centrale' },
      wrong: [
        { en: 'A large country in South America', es: 'Un país grande en América del Sur', fr: 'Un grand pays en Amérique du Sud' },
        { en: 'A country in Africa', es: 'Un país en África', fr: 'Un pays en Afrique' },
        { en: 'A country in Asia', es: 'Un país en Asia', fr: 'Un pays en Asie' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Ms. Rivera\'s International Class',
      es: 'La clase internacional de la Sra. Rivera',
      fr: 'La classe internationale de Mme Rivera',
    },
    passage_en: `The English class at Central School is very international. Students come from many different countries. Ms. Rivera, the teacher, is Mexican. But her students are from all around the world.

"Let\'s go around the room," Ms. Rivera says. "Tell the class where you are from and your nationality."

A girl named Anna raises her hand. "I am from China. I am Chinese." She smiles at the class.

A boy named Marco stands up. "I am from Mexico. I am Mexican." Everyone claps.

Then a student named Arun says, "I am from India. I am Indian. I have a big family in New Delhi."

Another girl, Sophie, speaks. "I am from France. I am French. I live in Paris with my parents."

A boy named Kenji says, "I am from Japan. I am Japanese. I live near Tokyo."

Finally, a student named Carlos says, "I was born in El Salvador. I am Salvadoran. But I moved to the United States when I was five. Now I live here and I am also American."

Ms. Rivera smiles. "This is beautiful. Our class has people from five continents. We are very international. Everyone is welcome here."

The students feel proud of their countries and their different backgrounds.`,
    highlights: [
      { word: 'international', tip: { en: 'international: involving people from many countries', es: 'international = internacional: que involucra a personas de muchos países', fr: 'international = international: impliquant des personnes de nombreux pays' } },
      { word: 'nationality', tip: { en: 'nationality: what country you are from or citizen of', es: 'nationality = nacionalidad: de qué país eres o ciudadano', fr: 'nationality = nationalité: de quel pays vous venez ou êtes citoyen' } },
      { word: 'continents', tip: { en: 'continents: very large areas of land on Earth', es: 'continents = continentes: áreas muy grandes de tierra en la Tierra', fr: 'continents = continents: très vastes zones terrestres sur Terre' } },
      { word: 'backgrounds', tip: { en: 'backgrounds: where people come from or their heritage', es: 'backgrounds = antecedentes: de dónde vienen las personas o su herencia', fr: 'backgrounds = origines: d\'où les gens viennent ou leur héritage' } },
    ],
    questions: [
      {
        text: { en: '1. What is Ms. Rivera\'s nationality?', es: '1. ¿Cuál es la nacionalidad de la Sra. Rivera?', fr: '1. Quelle est la nationalité de Mme Rivera ?' },
        options: [
          { text: { en: 'American', es: 'Americana', fr: 'Américaine' }, correct: false },
          { text: { en: 'Mexican', es: 'Mexicana', fr: 'Mexicaine' }, correct: true },
          { text: { en: 'French', es: 'Francesa', fr: 'Française' }, correct: false },
        ],
      },
      {
        text: { en: '2. How many students speak about their countries?', es: '2. ¿Cuántos estudiantes hablan sobre sus países?', fr: '2. Combien d\'étudiants parlent de leurs pays ?' },
        options: [
          { text: { en: 'Three', es: 'Tres', fr: 'Trois' }, correct: false },
          { text: { en: 'Six', es: 'Seis', fr: 'Six' }, correct: true },
          { text: { en: 'Eight', es: 'Ocho', fr: 'Huit' }, correct: false },
        ],
      },
      {
        text: { en: '3. Where is Carlos from?', es: '3. ¿De dónde es Carlos?', fr: '3. D\'où vient Carlos ?' },
        options: [
          { text: { en: 'He was born in El Salvador', es: 'Nació en El Salvador', fr: 'Il est né au El Salvador' }, correct: true },
          { text: { en: 'He was born in Mexico', es: 'Nació en México', fr: 'Il est né au Mexique' }, correct: false },
          { text: { en: 'He was born in the United States', es: 'Nació en los Estados Unidos', fr: 'Il est né aux États-Unis' }, correct: false },
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
    wordBank: ['American', 'Mexican', 'French', 'Chinese', 'Indian'],
    sentences: [
      {
        before: { en: 'She is from France. She is', es: 'Ella es de Francia. Ella es', fr: 'Elle vient de France. Elle est' },
        answer: 'French',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'He is from Mexico. He is', es: 'Él es de México. Él es', fr: 'Il vient du Mexique. Il est' },
        answer: 'Mexican',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'They are from China. They are', es: 'Ellos son de China. Ellos son', fr: 'Ils viennent de Chine. Ils sont' },
        answer: 'Chinese',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'I was born in the United States. I am', es: 'Nací en los Estados Unidos. Soy', fr: 'Je suis né aux États-Unis. Je suis' },
        answer: 'American',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'She is from India. She is', es: 'Ella es de India. Ella es', fr: 'Elle vient d\'Inde. Elle est' },
        answer: 'Indian',
        after: { en: '.', es: '.', fr: '.' },
      },
    ],
  },
};
