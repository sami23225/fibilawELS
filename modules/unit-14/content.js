/**
 * Fibi Law ELS — Unit 14: Food
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-14',
  number: '14',
  title: {
    en: 'Food',
    es: 'Comida',
    fr: 'Nourriture',
  },
  topic: {
    en: 'Food vocabulary · Restaurant ordering · Healthy eating',
    es: 'Vocabulario de alimentos · Ordenar en un restaurante · Alimentación saludable',
    fr: 'Vocabulaire alimentaire · Commande au restaurant · Alimentation saine',
  },
  grammar: {
    en: '"I would like ___" / "Can I have ___, please?" / "I eat ___ for breakfast."',
    es: '"Me gustaría ___" / "¿Puedo tener ___, por favor?" / "Como ___ para el desayuno."',
    fr: '"J\'aimerais ___" / "Puis-je avoir ___, s\'il vous plaît ?" / "Je mange ___ au petit-déjeuner."',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  vocabulary: [
    {
      word: 'CHICKEN',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Meat from a bird used for cooking',
        es: 'Carne de un pájaro usada para cocinar',
        fr: 'Viande d\'un oiseau utilisée pour la cuisine',
      },
      example_en: '"I cook chicken with vegetables for dinner."',
    },
    {
      word: 'FISH',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'An animal that lives in water, eaten as food',
        es: 'Un animal que vive en el agua, comido como alimento',
        fr: 'Un animal qui vit dans l\'eau, mangé comme aliment',
      },
      example_en: '"Fish is very healthy food."',
    },
    {
      word: 'SALAD',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A dish of mixed vegetables',
        es: 'Un plato de verduras mixtas',
        fr: 'Un plat de légumes mélangés',
      },
      example_en: '"She eats a salad with tomatoes and lettuce."',
    },
    {
      word: 'SANDWICH',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Food between two pieces of bread',
        es: 'Comida entre dos rebanadas de pan',
        fr: 'De la nourriture entre deux tranches de pain',
      },
      example_en: '"I eat a sandwich for lunch every day."',
    },
    {
      word: 'APPLE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A round red or green fruit',
        es: 'Una fruta redonda roja o verde',
        fr: 'Un fruit rond rouge ou vert',
      },
      example_en: '"An apple a day keeps the doctor away."',
    },
    {
      word: 'CARROT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'An orange vegetable that grows underground',
        es: 'Una verdura naranja que crece bajo tierra',
        fr: 'Un légume orange qui pousse sous terre',
      },
      example_en: '"Carrots are good for your eyesight."',
    },
    {
      word: 'MILK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A white drink from cows used in many foods',
        es: 'Una bebida blanca de vacas usada en muchos alimentos',
        fr: 'Une boisson blanche de vaches utilisée dans de nombreux aliments',
      },
      example_en: '"Children drink milk to grow strong."',
    },
    {
      word: 'COFFEE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A dark brown drink made from beans',
        es: 'Una bebida marrón oscuro hecha de granos',
        fr: 'Une boisson brun foncé faite à partir de grains',
      },
      example_en: '"I drink coffee every morning."',
    },
    {
      word: 'BREAD',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A food made from flour and baked',
        es: 'Un alimento hecho de harina y horneado',
        fr: 'Un aliment fait de farine et cuit au four',
      },
      example_en: '"We put butter on the bread."',
    },
    {
      word: 'RICE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'White or brown grains cooked and eaten',
        es: 'Granos blancos o marrones cocidos y comidos',
        fr: 'Grains blancs ou bruns cuits et mangés',
      },
      example_en: '"Rice is a common food in many cultures."',
    },
    {
      word: 'EGG',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Food from a chicken used in cooking',
        es: 'Comida de una gallina usada en la cocina',
        fr: 'Aliment d\'une poule utilisé dans la cuisine',
      },
      example_en: '"I eat eggs for breakfast."',
    },
    {
      word: 'FRUIT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Sweet food that grows on trees or plants',
        es: 'Alimento dulce que crece en árboles o plantas',
        fr: 'Aliment sucré qui pousse sur les arbres ou les plantes',
      },
      example_en: '"Fruit is healthy and delicious."',
    },
  ],

  quiz: [
    {
      word: 'CHICKEN',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'Meat from a bird used for cooking', es: 'Carne de un pájaro usada para cocinar', fr: 'Viande d\'un oiseau utilisée pour la cuisine' },
      wrong: [
        { en: 'A vegetable', es: 'Una verdura', fr: 'Un légume' },
        { en: 'A grain', es: 'Un grano', fr: 'Un grain' },
        { en: 'A fruit', es: 'Una fruta', fr: 'Un fruit' },
      ],
    },
    {
      word: 'SALAD',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A dish of mixed vegetables', es: 'Un plato de verduras mixtas', fr: 'Un plat de légumes mélangés' },
      wrong: [
        { en: 'Meat from a bird', es: 'Carne de un pájaro', fr: 'Viande d\'un oiseau' },
        { en: 'A white drink', es: 'Una bebida blanca', fr: 'Une boisson blanche' },
        { en: 'A grain used in cooking', es: 'Un grano usado en la cocina', fr: 'Un grain utilisé dans la cuisine' },
      ],
    },
    {
      word: 'MILK',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A white drink from cows used in many foods', es: 'Una bebida blanca de vacas usada en muchos alimentos', fr: 'Une boisson blanche de vaches utilisée dans de nombreux aliments' },
      wrong: [
        { en: 'A dark brown drink', es: 'Una bebida marrón oscuro', fr: 'Une boisson brun foncé' },
        { en: 'Food made from flour', es: 'Comida hecha de harina', fr: 'Aliment fait de farine' },
        { en: 'Meat from a fish', es: 'Carne de un pez', fr: 'Viande d\'un poisson' },
      ],
    },
    {
      word: 'BREAD',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A food made from flour and baked', es: 'Un alimento hecho de harina y horneado', fr: 'Un aliment fait de farine et cuit au four' },
      wrong: [
        { en: 'A round red fruit', es: 'Una fruta roja redonda', fr: 'Un fruit rond rouge' },
        { en: 'A green vegetable', es: 'Una verdura verde', fr: 'Un légume vert' },
        { en: 'An orange vegetable', es: 'Una verdura naranja', fr: 'Un légume orange' },
      ],
    },
    {
      word: 'COFFEE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A dark brown drink made from beans', es: 'Una bebida marrón oscuro hecha de granos', fr: 'Une boisson brun foncé faite à partir de grains' },
      wrong: [
        { en: 'A white drink from cows', es: 'Una bebida blanca de vacas', fr: 'Une boisson blanche de vaches' },
        { en: 'Mixed vegetables in a dish', es: 'Verduras mixtas en un plato', fr: 'Légumes mélangés dans un plat' },
        { en: 'Food between two slices of bread', es: 'Comida entre dos rebanadas de pan', fr: 'Nourriture entre deux tranches de pain' },
      ],
    },
    {
      word: 'CARROT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'An orange vegetable that grows underground', es: 'Una verdura naranja que crece bajo tierra', fr: 'Un légume orange qui pousse sous terre' },
      wrong: [
        { en: 'A round fruit', es: 'Una fruta redonda', fr: 'Un fruit rond' },
        { en: 'Meat from a chicken', es: 'Carne de un pollo', fr: 'Viande d\'un poulet' },
        { en: 'White grains used in cooking', es: 'Granos blancos usados en la cocina', fr: 'Grains blancs utilisés dans la cuisine' },
      ],
    },
    {
      word: 'FISH',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'An animal that lives in water, eaten as food', es: 'Un animal que vive en el agua, comido como alimento', fr: 'Un animal qui vit dans l\'eau, mangé comme aliment' },
      wrong: [
        { en: 'Grains used for cooking', es: 'Granos usados para cocinar', fr: 'Grains utilisés pour la cuisine' },
        { en: 'Mixed vegetables in a dish', es: 'Verduras mixtas en un plato', fr: 'Légumes mélangés dans un plat' },
        { en: 'A white drink', es: 'Una bebida blanca', fr: 'Une boisson blanche' },
      ],
    },
    {
      word: 'RICE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'White or brown grains cooked and eaten', es: 'Granos blancos o marrones cocidos y comidos', fr: 'Grains blancs ou bruns cuits et mangés' },
      wrong: [
        { en: 'Meat from a bird', es: 'Carne de un pájaro', fr: 'Viande d\'un oiseau' },
        { en: 'A round fruit', es: 'Una fruta redonda', fr: 'Un fruit rond' },
        { en: 'A dark brown drink', es: 'Una bebida marrón oscuro', fr: 'Une boisson brun foncé' },
      ],
    },
    {
      word: 'EGG',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'Food from a chicken used in cooking', es: 'Comida de una gallina usada en la cocina', fr: 'Aliment d\'une poule utilisé dans la cuisine' },
      wrong: [
        { en: 'An orange vegetable', es: 'Una verdura naranja', fr: 'Un légume orange' },
        { en: 'A round red fruit', es: 'Una fruta roja redonda', fr: 'Un fruit rond rouge' },
        { en: 'A white drink', es: 'Una bebida blanca', fr: 'Une boisson blanche' },
      ],
    },
    {
      word: 'SANDWICH',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'Food between two pieces of bread', es: 'Comida entre dos rebanadas de pan', fr: 'De la nourriture entre deux tranches de pain' },
      wrong: [
        { en: 'Mixed vegetables in a dish', es: 'Verduras mixtas en un plato', fr: 'Légumes mélangés dans un plat' },
        { en: 'A dark brown drink', es: 'Una bebida marrón oscuro', fr: 'Une boisson brun foncé' },
        { en: 'A round fruit', es: 'Una fruta redonda', fr: 'Un fruit rond' },
      ],
    },
  ],

  reading: {
    title: {
      en: 'Yemi Orders Food at a Restaurant',
      es: 'Yemi ordena comida en un restaurante',
      fr: 'Yemi commande de la nourriture au restaurant',
    },
    passage_en: `Yemi is eating at a restaurant for the first time in America. She is nervous but excited. A server comes to her table and asks, "What can I get you today?"

Yemi looks at the menu. She sees many choices. The server says, "The chicken soup is very popular. Many customers love it. We also have fresh fish cooked with rice."

Yemi says, "I would like the chicken soup, please. And can I have a salad on the side?"

"Of course! What kind of salad do you want?" asks the server.

"I want a salad with tomatoes, lettuce, and carrots," says Yemi.

"Great choice! And what would you like to drink?" asks the server.

Yemi thinks. She says, "I would like a glass of milk, please."

The server nods. "Perfect! Is that everything?"

Yemi looks at the menu again. "Yes, but do you have any fruit for dessert?"

"We have fresh apple pie. It is delicious," says the server.

"Okay! I would like a slice of apple pie with coffee, please," Yemi says.

The server smiles. "Great! I will bring your food soon."

Yemi waits. Soon the server brings her chicken soup and salad. The soup smells delicious! Yemi eats slowly and enjoys every bite. After the soup and salad, the server brings apple pie and hot coffee.

Yemi takes a bite of the pie. "Mmm! This is very good!" She drinks her coffee. It is warm and delicious.

At the end, the server asks, "Did you enjoy your meal?"

"Yes! Everything was wonderful. Thank you!" says Yemi happily.`,
    highlights: [
      { word: 'menu', tip: { en: 'menu: a list of food choices at a restaurant', es: 'menu = menú: una lista de opciones de comida', fr: 'menu = menu: une liste de choix alimentaires' } },
      { word: 'server', tip: { en: 'server: a person who brings food and drinks at a restaurant', es: 'server = camarero: una persona que trae comida y bebidas', fr: 'server = serveur: une personne qui apporte la nourriture et les boissons' } },
      { word: 'dessert', tip: { en: 'dessert: sweet food eaten at the end of a meal', es: 'dessert = postre: comida dulce comida al final de una comida', fr: 'dessert = dessert: aliment sucré mangé à la fin d\'un repas' } },
      { word: 'slice', tip: { en: 'slice: a thin piece of something', es: 'slice = rebanada: un pedazo delgado de algo', fr: 'slice = tranche: un morceau fin de quelque chose' } },
    ],
    questions: [
      {
        text: { en: '1. What does Yemi order first?', es: '1. ¿Qué pide Yemi primero?', fr: '1. Qu\'est-ce que Yemi commande en premier ?' },
        options: [
          { text: { en: 'Fish and rice', es: 'Pescado y arroz', fr: 'Poisson et riz' }, correct: false },
          { text: { en: 'Chicken soup and salad', es: 'Sopa de pollo y ensalada', fr: 'Soupe de poulet et salade' }, correct: true },
          { text: { en: 'Bread and butter', es: 'Pan y mantequilla', fr: 'Pain et beurre' }, correct: false },
        ],
      },
      {
        text: { en: '2. What does Yemi order for dessert?', es: '2. ¿Qué pide Yemi de postre?', fr: '2. Qu\'est-ce que Yemi commande pour le dessert ?' },
        options: [
          { text: { en: 'Chocolate cake', es: 'Pastel de chocolate', fr: 'Gâteau au chocolat' }, correct: false },
          { text: { en: 'Apple pie', es: 'Pastel de manzana', fr: 'Tarte aux pommes' }, correct: true },
          { text: { en: 'Ice cream', es: 'Helado', fr: 'Glace' }, correct: false },
        ],
      },
      {
        text: { en: '3. How does Yemi feel after eating?', es: '3. ¿Cómo se siente Yemi después de comer?', fr: '3. Comment Yemi se sent-elle après avoir mangé ?' },
        options: [
          { text: { en: 'Sick and tired', es: 'Enferma y cansada', fr: 'Malade et fatiguée' }, correct: false },
          { text: { en: 'Happy and satisfied', es: 'Feliz y satisfecha', fr: 'Heureux et satisfait' }, correct: true },
          { text: { en: 'Angry and confused', es: 'Enojada y confundida', fr: 'En colère et confus' }, correct: false },
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
    wordBank: ['chicken', 'salad', 'milk', 'bread', 'apple'],
    sentences: [
      {
        before: { en: 'I would like', es: 'Me gustaría', fr: 'J\'aimerais' },
        answer: 'chicken',
        after: { en: 'soup, please.', es: 'de sopa, por favor.', fr: 'de soupe, s\'il vous plaît.' },
      },
      {
        before: { en: 'She eats a', es: 'Ella come una', fr: 'Elle mange une' },
        answer: 'salad',
        after: { en: 'with tomatoes and lettuce.', es: 'con tomates y lechuga.', fr: 'avec tomates et laitue.' },
      },
      {
        before: { en: 'Children drink', es: 'Los niños beben', fr: 'Les enfants boivent du' },
        answer: 'milk',
        after: { en: 'to grow strong.', es: 'para crecer fuertes.', fr: 'pour devenir forts.' },
      },
      {
        before: { en: 'We put butter on the', es: 'Ponemos mantequilla en el', fr: 'Nous mettons du beurre sur le' },
        answer: 'bread',
        after: { en: '.', es: '.', fr: '.' },
      },
      {
        before: { en: 'An', es: 'Una', fr: 'Une' },
        answer: 'apple',
        after: { en: 'a day keeps the doctor away.', es: 'al día mantiene al doctor alejado.', fr: 'par jour éloigne le médecin.' },
      },
    ],
  },
};
