/**
 * Fibi Law ELS — Unit 11: Clothes and Colors
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-11',
  number: '11',
  title: {
    en: 'Clothes and Colors',
    es: 'Ropa y colores',
    fr: 'Vêtements et couleurs',
  },
  topic: {
    en: 'Clothing items · Colors · Describing what people wear',
    es: 'Prendas de vestir · Colores · Descripción de lo que usan las personas',
    fr: 'Articles de vêtements · Couleurs · Description de ce que portent les gens',
  },
  grammar: {
    en: '"I am wearing a ___ ___" (color + clothing) / "She has on a ___"',
    es: '"Estoy usando un ___ ___" / "Ella lleva puesto un ___"',
    fr: '"Je porte un ___ ___" / "Elle porte un ___"',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  vocabulary: [
    {
      word: 'JEANS',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Blue pants made of denim material',
        es: 'Pantalones azules hechos de material de mezclilla',
        fr: 'Pantalons bleus faits de tissu denim',
      },
      example_en: '"I wear jeans every day."',
    },
    {
      word: 'DRESS',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A piece of clothing for women with a top and skirt combined',
        es: 'Una prenda de vestir para mujeres con la parte superior y falda combinadas',
        fr: 'Un vêtement pour femmes avec le haut et la jupe combinés',
      },
      example_en: '"She wears a pretty dress to the party."',
    },
    {
      word: 'SHIRT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A piece of clothing that covers your top half',
        es: 'Una prenda que cubre tu mitad superior',
        fr: 'Un vêtement qui couvre votre moitié supérieure',
      },
      example_en: '"He wears a white shirt to work."',
    },
    {
      word: 'JACKET',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A piece of clothing worn over a shirt for warmth',
        es: 'Una prenda que se usa sobre una camisa para calentarse',
        fr: 'Un vêtement porté sur une chemise pour la chaleur',
      },
      example_en: '"I need a jacket when it is cold outside."',
    },
    {
      word: 'SWEATER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A warm piece of clothing made of wool or cotton',
        es: 'Una prenda cálida hecha de lana o algodón',
        fr: 'Un vêtement chaud fait de laine ou de coton',
      },
      example_en: '"My sweater keeps me warm in winter."',
    },
    {
      word: 'SHOES',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Coverings for your feet',
        es: 'Coberturas para tus pies',
        fr: 'Couvercles pour vos pieds',
      },
      example_en: '"I wear new shoes to school today."',
    },
    {
      word: 'HAT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A covering for your head',
        es: 'Una cobertura para tu cabeza',
        fr: 'Une couverture pour votre tête',
      },
      example_en: '"He wears a hat to protect from the sun."',
    },
    {
      word: 'SKIRT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A piece of clothing worn around the waist',
        es: 'Una prenda de vestir que se usa alrededor de la cintura',
        fr: 'Un vêtement porté autour de la taille',
      },
      example_en: '"She wears a blue skirt with her white shirt."',
    },
    {
      word: 'RED',
      pos: { en: 'adjective', es: 'adjetivo', fr: 'adjectif' },
      definition: {
        en: 'A color like fire or blood',
        es: 'Un color como el fuego o la sangre',
        fr: 'Une couleur comme le feu ou le sang',
      },
      example_en: '"The red apple is delicious."',
    },
    {
      word: 'BLUE',
      pos: { en: 'adjective', es: 'adjetivo', fr: 'adjectif' },
      definition: {
        en: 'A color like the sky or ocean',
        es: 'Un color como el cielo u océano',
        fr: 'Une couleur comme le ciel ou l\'océan',
      },
      example_en: '"She loves her blue eyes."',
    },
    {
      word: 'GREEN',
      pos: { en: 'adjective', es: 'adjetivo', fr: 'adjectif' },
      definition: {
        en: 'A color like grass or leaves',
        es: 'Un color como el pasto u hojas',
        fr: 'Une couleur comme l\'herbe ou les feuilles',
      },
      example_en: '"The green trees are very tall."',
    },
    {
      word: 'WHITE',
      pos: { en: 'adjective', es: 'adjetivo', fr: 'adjectif' },
      definition: {
        en: 'A color like snow or milk',
        es: 'Un color como nieve o leche',
        fr: 'Une couleur comme la neige ou le lait',
      },
      example_en: '"He wears a white hat."',
    },
    {
      word: 'BLACK',
      pos: { en: 'adjective', es: 'adjetivo', fr: 'adjectif' },
      definition: {
        en: 'A color like the night sky',
        es: 'Un color como el cielo nocturno',
        fr: 'Une couleur comme le ciel nocturne',
      },
      example_en: '"She wears black shoes."',
    },
  ],

  quiz: [
    {
      word: 'BLUE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A color like the sky or ocean', es: 'Un color como el cielo u océano', fr: 'Une couleur comme le ciel ou l\'océan' },
      wrong: [
        { en: 'A color like grass', es: 'Un color como el pasto', fr: 'Une couleur comme l\'herbe' },
        { en: 'A color like blood', es: 'Un color como la sangre', fr: 'Une couleur comme le sang' },
        { en: 'A color like snow', es: 'Un color como nieve', fr: 'Une couleur comme la neige' },
      ],
    },
    {
      word: 'JACKET',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A piece of clothing worn over a shirt for warmth', es: 'Una prenda que se usa sobre una camisa para calentarse', fr: 'Un vêtement porté sur une chemise pour la chaleur' },
      wrong: [
        { en: 'A type of hat', es: 'Un tipo de sombrero', fr: 'Un type de chapeau' },
        { en: 'A piece of pants', es: 'Un pantalón', fr: 'Un pantalon' },
        { en: 'A type of shoe', es: 'Un tipo de zapato', fr: 'Un type de chaussure' },
      ],
    },
    {
      word: 'DRESS',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A piece of clothing for women with a top and skirt combined', es: 'Una prenda de vestir para mujeres con la parte superior y falda combinadas', fr: 'Un vêtement pour femmes avec le haut et la jupe combinés' },
      wrong: [
        { en: 'A type of coat', es: 'Un tipo de abrigo', fr: 'Un type de manteau' },
        { en: 'A pair of pants', es: 'Un par de pantalones', fr: 'Une paire de pantalons' },
        { en: 'A type of hat', es: 'Un tipo de sombrero', fr: 'Un type de chapeau' },
      ],
    },
    {
      word: 'RED',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A color like fire or blood', es: 'Un color como el fuego o la sangre', fr: 'Une couleur comme le feu ou le sang' },
      wrong: [
        { en: 'A color like the sky', es: 'Un color como el cielo', fr: 'Une couleur comme le ciel' },
        { en: 'A color like night', es: 'Un color como la noche', fr: 'Une couleur comme la nuit' },
        { en: 'A color like leaves', es: 'Un color como las hojas', fr: 'Une couleur comme les feuilles' },
      ],
    },
    {
      word: 'SHOES',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'Coverings for your feet', es: 'Coberturas para tus pies', fr: 'Couvercles pour vos pieds' },
      wrong: [
        { en: 'Clothing for your legs', es: 'Ropa para tus piernas', fr: 'Vêtements pour vos jambes' },
        { en: 'A covering for your head', es: 'Una cobertura para tu cabeza', fr: 'Une couverture pour votre tête' },
        { en: 'A piece of clothing for your waist', es: 'Una prenda para tu cintura', fr: 'Un vêtement pour votre taille' },
      ],
    },
    {
      word: 'GREEN',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A color like grass or leaves', es: 'Un color como el pasto u hojas', fr: 'Une couleur comme l\'herbe ou les feuilles' },
      wrong: [
        { en: 'A color like the ocean', es: 'Un color como el océano', fr: 'Une couleur comme l\'océan' },
        { en: 'A color like snow', es: 'Un color como nieve', fr: 'Une couleur comme la neige' },
        { en: 'A color like the night', es: 'Un color como la noche', fr: 'Une couleur comme la nuit' },
      ],
    },
    {
      word: 'SWEATER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A warm piece of clothing made of wool or cotton', es: 'Una prenda cálida hecha de lana o algodón', fr: 'Un vêtement chaud fait de laine ou de coton' },
      wrong: [
        { en: 'A piece of clothing for the legs', es: 'Una prenda para las piernas', fr: 'Un vêtement pour les jambes' },
        { en: 'A piece of clothing for the feet', es: 'Una prenda para los pies', fr: 'Un vêtement pour les pieds' },
        { en: 'A piece of clothing for the head', es: 'Una prenda para la cabeza', fr: 'Un vêtement pour la tête' },
      ],
    },
    {
      word: 'WHITE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A color like snow or milk', es: 'Un color como nieve o leche', fr: 'Une couleur comme la neige ou le lait' },
      wrong: [
        { en: 'A color like fire', es: 'Un color como el fuego', fr: 'Une couleur comme le feu' },
        { en: 'A color like the ocean', es: 'Un color como el océano', fr: 'Une couleur comme l\'océan' },
        { en: 'A color like leaves', es: 'Un color como las hojas', fr: 'Une couleur comme les feuilles' },
      ],
    },
    {
      word: 'JEANS',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'Blue pants made of denim material', es: 'Pantalones azules hechos de material de mezclilla', fr: 'Pantalons bleus faits de tissu denim' },
      wrong: [
        { en: 'A type of shirt', es: 'Un tipo de camisa', fr: 'Un type de chemise' },
        { en: 'A type of dress', es: 'Un tipo de vestido', fr: 'Un type de robe' },
        { en: 'A type of shoe', es: 'Un tipo de zapato', fr: 'Un type de chaussure' },
      ],
    },
    {
      word: 'SKIRT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A piece of clothing worn around the waist', es: 'Una prenda de vestir que se usa alrededor de la cintura', fr: 'Un vêtement porté autour de la taille' },
      wrong: [
        { en: 'A piece of clothing for the feet', es: 'Una prenda para los pies', fr: 'Un vêtement pour les pieds' },
        { en: 'A piece of clothing for the head', es: 'Una prenda para la cabeza', fr: 'Un vêtement pour la tête' },
        { en: 'A piece of clothing for the chest', es: 'Una prenda para el pecho', fr: 'Un vêtement pour la poitrine' },
      ],
    },
  ],

  reading: {
    title: {
      en: 'Lucia\'s Job Interview',
      es: 'La entrevista de trabajo de Lucia',
      fr: 'L\'entretien d\'embauche de Lucia',
    },
    passage_en: `Lucia is very nervous today. She has a job interview at a bank at 2 p.m. This is her first job interview. She wants to look professional and clean.

In the morning, Lucia chooses her clothes carefully. She takes a blue dress from her closet. It is her favorite dress. The dress is beautiful and not too fancy. She looks at her shoes. She chooses red shoes. No, she thinks. Red is too bright. She chooses black shoes instead. They are comfortable and professional.

Next, she chooses a white jacket. The jacket looks nice with the blue dress. She puts on the jacket carefully. Now she looks very professional.

Lucia looks in the mirror. She smiles. Her clothes look good. She wears a blue dress, a white jacket, and black shoes. She also wears a small necklace.

At 2 p.m., Lucia arrives at the bank. The manager sees her and says, "Hello, Lucia. You look very nice!"

Lucia smiles. She is ready to answer questions about the job. The interview goes very well. The manager says, "We will call you next week."

Lucia walks out of the bank feeling happy. She thinks, "My clothes helped me look professional. I was prepared and confident."`,
    highlights: [
      { word: 'interview', tip: { en: 'interview: a meeting to discuss a job', es: 'interview = entrevista: una reunión para discutir un trabajo', fr: 'interview = entretien: une réunion pour discuter d\'un emploi' } },
      { word: 'professional', tip: { en: 'professional: looking or acting like a business person', es: 'professional = profesional: parecer o actuar como una persona de negocios', fr: 'professional = professionnel: avoir l\'air ou agir comme une personne d\'affaires' } },
      { word: 'closet', tip: { en: 'closet: a small room for storing clothes', es: 'closet = armario: una pequeña habitación para guardar ropa', fr: 'closet = placard: une petite pièce pour ranger les vêtements' } },
      { word: 'confident', tip: { en: 'confident: feeling sure and strong about yourself', es: 'confident = segura: sentirse segura y fuerte contigo misma', fr: 'confident = confiante: se sentir sûr et fort à propos de vous-même' } },
    ],
    questions: [
      {
        text: { en: '1. What time is Lucia\'s interview?', es: '1. ¿A qué hora es la entrevista de Lucia?', fr: '1. À quelle heure est l\'entretien de Lucia ?' },
        options: [
          { text: { en: '10 a.m.', es: '10 a.m.', fr: '10 h' }, correct: false },
          { text: { en: '2 p.m.', es: '2 p.m.', fr: '14 h' }, correct: true },
          { text: { en: '5 p.m.', es: '5 p.m.', fr: '17 h' }, correct: false },
        ],
      },
      {
        text: { en: '2. What color shoes does Lucia wear?', es: '2. ¿Qué color de zapatos usa Lucia?', fr: '2. De quelle couleur sont les chaussures que porte Lucia ?' },
        options: [
          { text: { en: 'Red shoes', es: 'Zapatos rojos', fr: 'Chaussures rouges' }, correct: false },
          { text: { en: 'Black shoes', es: 'Zapatos negros', fr: 'Chaussures noires' }, correct: true },
          { text: { en: 'White shoes', es: 'Zapatos blancos', fr: 'Chaussures blanches' }, correct: false },
        ],
      },
      {
        text: { en: '3. How does Lucia feel at the end?', es: '3. ¿Cómo se siente Lucia al final?', fr: '3. Comment se sent Lucia à la fin ?' },
        options: [
          { text: { en: 'Sad and worried', es: 'Triste y preocupada', fr: 'Triste et inquiète' }, correct: false },
          { text: { en: 'Happy and confident', es: 'Feliz y segura', fr: 'Heureux et confiant' }, correct: true },
          { text: { en: 'Angry and tired', es: 'Enojada y cansada', fr: 'En colère et fatigué' }, correct: false },
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
    wordBank: ['blue', 'dress', 'jacket', 'shoes', 'white'],
    sentences: [
      {
        before: { en: 'She is wearing a', es: 'Ella está usando una', fr: 'Elle porte une' },
        answer: 'blue',
        after: { en: 'shirt and black pants.', es: 'camisa y pantalones negros.', fr: 'chemise bleue et un pantalon noir.' },
      },
      {
        before: { en: 'I put on my', es: 'Me pongo mi', fr: 'Je mets ma' },
        answer: 'jacket',
        after: { en: 'and jeans for the interview.', es: 'y jeans para la entrevista.', fr: 'veste et mon jean pour l\'entretien.' },
      },
      {
        before: { en: 'He is wearing a', es: 'Él está usando un', fr: 'Il porte un' },
        answer: 'white',
        after: { en: 'suit.', es: 'traje.', fr: 'costume blanc.' },
      },
      {
        before: { en: 'Her', es: 'Sus', fr: 'Ses' },
        answer: 'shoes',
        after: { en: 'are red and very comfortable.', es: 'son rojos y muy cómodos.', fr: 'chaussures sont rouges et très confortables.' },
      },
      {
        before: { en: 'I like the', es: 'Me gusta el', fr: 'J\'aime la' },
        answer: 'dress',
        after: { en: 'at the store.', es: 'en la tienda.', fr: 'robe au magasin.' },
      },
    ],
  },
};
