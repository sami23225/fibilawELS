/**
 * Fibi Law ELS — Unit 12: Money and Shopping
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-12',
  number: '12',
  title: {
    en: 'Money and Shopping',
    es: 'Dinero y compras',
    fr: 'Argent et magasinage',
  },
  topic: {
    en: 'U.S. coins and bills · Reading a receipt · Paying at a store',
    es: 'Monedas y billetes estadounidenses · Lectura de un recibo · Pagando en una tienda',
    fr: 'Pièces et billets américains · Lecture d\'un reçu · Paiement en magasin',
  },
  grammar: {
    en: '"It costs ___" / "How much is ___?" / "Here is your change."',
    es: '"Cuesta ___" / "¿Cuánto cuesta ___?" / "Aquí está tu cambio."',
    fr: '"Ça coûte ___" / "Combien coûte ___?" / "Voici votre monnaie."',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  vocabulary: [
    {
      word: 'PENNY',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A U.S. coin worth 1 cent',
        es: 'Una moneda estadounidense que vale 1 centavo',
        fr: 'Une pièce américaine valant 1 cent',
      },
      example_en: '"A penny is the smallest coin in America."',
    },
    {
      word: 'NICKEL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A U.S. coin worth 5 cents',
        es: 'Una moneda estadounidense que vale 5 centavos',
        fr: 'Une pièce américaine valant 5 cents',
      },
      example_en: '"Five pennies equal one nickel."',
    },
    {
      word: 'DIME',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A U.S. coin worth 10 cents',
        es: 'Una moneda estadounidense que vale 10 centavos',
        fr: 'Une pièce américaine valant 10 cents',
      },
      example_en: '"A dime is smaller than a penny but worth more."',
    },
    {
      word: 'QUARTER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A U.S. coin worth 25 cents',
        es: 'Una moneda estadounidense que vale 25 centavos',
        fr: 'Une pièce américaine valant 25 cents',
      },
      example_en: '"A quarter is worth 25 cents."',
    },
    {
      word: 'DOLLAR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A U.S. bill or coin worth 100 cents',
        es: 'Un billete o moneda estadounidense que vale 100 centavos',
        fr: 'Un billet ou une pièce américaine valant 100 cents',
      },
      example_en: '"A dollar bill equals 100 pennies."',
    },
    {
      word: 'RECEIPT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A paper that shows what you bought and how much you paid',
        es: 'Un papel que muestra qué compraste y cuánto pagaste',
        fr: 'Un papier qui montre ce que vous avez acheté et combien vous avez payé',
      },
      example_en: '"Keep your receipt from the store."',
    },
    {
      word: 'PRICE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The amount of money something costs',
        es: 'La cantidad de dinero que cuesta algo',
        fr: 'Le montant d\'argent que quelque chose coûte',
      },
      example_en: '"The price of bread is three dollars."',
    },
    {
      word: 'CHECKOUT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The place in a store where you pay for items',
        es: 'El lugar en una tienda donde pagas los artículos',
        fr: 'L\'endroit dans un magasin où vous payez les articles',
      },
      example_en: '"Let\'s go to the checkout to pay for our groceries."',
    },
    {
      word: 'AISLE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'A passageway between rows of products in a store',
        es: 'Un pasaje entre filas de productos en una tienda',
        fr: 'Un passage entre les rangées de produits dans un magasin',
      },
      example_en: '"The fruit is in aisle 3."',
    },
    {
      word: 'PAY',
      pos: { en: 'verb', es: 'verbo', fr: 'verbe' },
      definition: {
        en: 'To give money for something',
        es: 'Dar dinero por algo',
        fr: 'Donner de l\'argent pour quelque chose',
      },
      example_en: '"I pay the cashier for my groceries."',
    },
    {
      word: 'CHANGE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'Money returned when you pay more than something costs',
        es: 'Dinero devuelto cuando pagas más de lo que cuesta algo',
        fr: 'L\'argent renvoyé quand vous payez plus que ce qu\'un prix coûte',
      },
      example_en: '"The cashier gave me $5 in change."',
    },
    {
      word: 'TOTAL',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The complete amount',
        es: 'La cantidad completa',
        fr: 'Le montant total',
      },
      example_en: '"The total is $25.50."',
    },
  ],

  quiz: [
    {
      word: 'QUARTER',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A U.S. coin worth 25 cents', es: 'Una moneda estadounidense que vale 25 centavos', fr: 'Une pièce américaine valant 25 cents' },
      wrong: [
        { en: 'A bill worth 25 dollars', es: 'Un billete que vale 25 dólares', fr: 'Un billet valant 25 dollars' },
        { en: 'A coin worth 10 cents', es: 'Una moneda que vale 10 centavos', fr: 'Une pièce valant 10 cents' },
        { en: 'A coin worth 5 cents', es: 'Una moneda que vale 5 centavos', fr: 'Une pièce valant 5 cents' },
      ],
    },
    {
      word: 'DOLLAR',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A U.S. bill or coin worth 100 cents', es: 'Un billete o moneda estadounidense que vale 100 centavos', fr: 'Un billet ou une pièce américaine valant 100 cents' },
      wrong: [
        { en: 'A coin worth 25 cents', es: 'Una moneda que vale 25 centavos', fr: 'Une pièce valant 25 cents' },
        { en: 'A coin worth 10 cents', es: 'Una moneda que vale 10 centavos', fr: 'Une pièce valant 10 cents' },
        { en: 'A bill worth 50 cents', es: 'Un billete que vale 50 centavos', fr: 'Un billet valant 50 cents' },
      ],
    },
    {
      word: 'RECEIPT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A paper that shows what you bought and how much you paid', es: 'Un papel que muestra qué compraste y cuánto pagaste', fr: 'Un papier qui montre ce que vous avez acheté et combien vous avez payé' },
      wrong: [
        { en: 'Money you get back from paying', es: 'Dinero que recuperas al pagar', fr: 'L\'argent que vous récupérez après le paiement' },
        { en: 'A place in a store where you pay', es: 'Un lugar en una tienda donde pagas', fr: 'Un endroit dans un magasin où vous payez' },
        { en: 'A coin used in America', es: 'Una moneda usada en América', fr: 'Une pièce utilisée en Amérique' },
      ],
    },
    {
      word: 'CHECKOUT',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The place in a store where you pay for items', es: 'El lugar en una tienda donde pagas los artículos', fr: 'L\'endroit dans un magasin où vous payez les articles' },
      wrong: [
        { en: 'A passageway in a store', es: 'Un pasaje en una tienda', fr: 'Un passage dans un magasin' },
        { en: 'Money returned after paying', es: 'Dinero devuelto después de pagar', fr: 'L\'argent renvoyé après le paiement' },
        { en: 'A receipt from the store', es: 'Un recibo de la tienda', fr: 'Un reçu du magasin' },
      ],
    },
    {
      word: 'CHANGE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'Money returned when you pay more than something costs', es: 'Dinero devuelto cuando pagas más de lo que cuesta algo', fr: 'L\'argent renvoyé quand vous payez plus que ce qu\'un prix coûte' },
      wrong: [
        { en: 'The total amount you pay', es: 'La cantidad total que pagas', fr: 'Le montant total que vous payez' },
        { en: 'A coin used in America', es: 'Una moneda usada en América', fr: 'Une pièce utilisée en Amérique' },
        { en: 'A paper receipt from a store', es: 'Un recibo de papel de una tienda', fr: 'Un reçu papier d\'un magasin' },
      ],
    },
    {
      word: 'PRICE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The amount of money something costs', es: 'La cantidad de dinero que cuesta algo', fr: 'Le montant d\'argent que quelque chose coûte' },
      wrong: [
        { en: 'Money returned when paying', es: 'Dinero devuelto al pagar', fr: 'L\'argent renvoyé au moment du paiement' },
        { en: 'A paper receipt', es: 'Un recibo de papel', fr: 'Un reçu papier' },
        { en: 'The total amount paid', es: 'La cantidad total pagada', fr: 'Le montant total payé' },
      ],
    },
    {
      word: 'PENNY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A U.S. coin worth 1 cent', es: 'Una moneda estadounidense que vale 1 centavo', fr: 'Une pièce américaine valant 1 cent' },
      wrong: [
        { en: 'A coin worth 5 cents', es: 'Una moneda que vale 5 centavos', fr: 'Une pièce valant 5 cents' },
        { en: 'A coin worth 10 cents', es: 'Una moneda que vale 10 centavos', fr: 'Une pièce valant 10 cents' },
        { en: 'A bill worth 1 dollar', es: 'Un billete que vale 1 dólar', fr: 'Un billet valant 1 dollar' },
      ],
    },
    {
      word: 'PAY',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'To give money for something', es: 'Dar dinero por algo', fr: 'Donner de l\'argent pour quelque chose' },
      wrong: [
        { en: 'To receive money', es: 'Recibir dinero', fr: 'Recevoir de l\'argent' },
        { en: 'To count money', es: 'Contar dinero', fr: 'Compter l\'argent' },
        { en: 'To save money', es: 'Ahorrar dinero', fr: 'Épargner de l\'argent' },
      ],
    },
    {
      word: 'AISLE',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'A passageway between rows of products in a store', es: 'Un pasaje entre filas de productos en una tienda', fr: 'Un passage entre les rangées de produits dans un magasin' },
      wrong: [
        { en: 'A place to pay for items', es: 'Un lugar para pagar artículos', fr: 'Un endroit pour payer les articles' },
        { en: 'A receipt from shopping', es: 'Un recibo de compras', fr: 'Un reçu d\'achat' },
        { en: 'A coin made of metal', es: 'Una moneda hecha de metal', fr: 'Une pièce faite de métal' },
      ],
    },
    {
      word: 'TOTAL',
      question: { en: 'What does this word mean?', es: '¿Qué significa esta palabra?', fr: 'Que signifie ce mot ?' },
      correct: { en: 'The complete amount', es: 'La cantidad completa', fr: 'Le montant total' },
      wrong: [
        { en: 'Money returned after paying', es: 'Dinero devuelto después de pagar', fr: 'L\'argent renvoyé après le paiement' },
        { en: 'A coin worth 25 cents', es: 'Una moneda que vale 25 centavos', fr: 'Une pièce valant 25 cents' },
        { en: 'A place to shop for items', es: 'Un lugar para comprar artículos', fr: 'Un endroit pour acheter des articles' },
      ],
    },
  ],

  reading: {
    title: {
      en: 'Hector at the Supermarket',
      es: 'Hector en el supermercado',
      fr: 'Hector au supermarché',
    },
    passage_en: `Hector is at the supermarket. He needs to buy groceries for his family. He pushes a shopping cart down the aisles.

First, he goes to aisle 3 for vegetables. He picks up carrots, lettuce, and tomatoes. He checks the prices. A lettuce costs $2.50. The carrots are $1.75 a pound.

Next, he goes to aisle 5 for bread and milk. He gets two loaves of bread at $3.00 each. He picks up a gallon of milk for $4.50. His cart is getting full.

In aisle 7, he finds chicken and fish. The chicken is $8.99 per pound. The fish is on sale for $6.50. He takes two packages of chicken and one of fish.

Finally, he gets fruit. Apples are $2.00 a pound. Bananas are $0.50 each.

Hector walks to the checkout with his full cart. The cashier scans each item. She rings up the vegetables, bread, milk, chicken, fish, and fruit.

The cashier says, "The total is $42.75."

Hector gives her two twenty-dollar bills and a five-dollar bill. That is $45.00.

The cashier counts his change. "Your change is $2.25. That is one dollar bill, one quarter, and here are your coins." She gives him the money.

"Thank you," Hector says. He puts his groceries in bags and goes home happy.`,
    highlights: [
      { word: 'checkout', tip: { en: 'checkout: the place where you pay', es: 'checkout = caja: el lugar donde pagas', fr: 'checkout = caisse: l\'endroit où vous payez' } },
      { word: 'cashier', tip: { en: 'cashier: the person who takes your money', es: 'cashier = cajero: la persona que toma tu dinero', fr: 'cashier = caissier: la personne qui prend votre argent' } },
      { word: 'scans', tip: { en: 'scans: reads the price with a machine', es: 'scans = escanea: lee el precio con una máquina', fr: 'scans = scanne: lit le prix avec une machine' } },
      { word: 'bills', tip: { en: 'bills: paper money', es: 'bills = billetes: dinero de papel', fr: 'bills = billets: argent papier' } },
    ],
    questions: [
      {
        text: { en: '1. How much is the total cost?', es: '1. ¿Cuál es el costo total?', fr: '1. Quel est le coût total ?' },
        options: [
          { text: { en: '$35.50', es: '$35.50', fr: '$35,50' }, correct: false },
          { text: { en: '$42.75', es: '$42.75', fr: '$42,75' }, correct: true },
          { text: { en: '$50.00', es: '$50.00', fr: '$50,00' }, correct: false },
        ],
      },
      {
        text: { en: '2. How much money does Hector give the cashier?', es: '2. ¿Cuánto dinero le da Hector a la cajera?', fr: '2. Combien d\'argent Hector donne-t-il à la caissière ?' },
        options: [
          { text: { en: '$40.00', es: '$40.00', fr: '$40,00' }, correct: false },
          { text: { en: '$45.00', es: '$45.00', fr: '$45,00' }, correct: true },
          { text: { en: '$50.00', es: '$50.00', fr: '$50,00' }, correct: false },
        ],
      },
      {
        text: { en: '3. What is Hector\'s change?', es: '3. ¿Cuál es el cambio de Hector?', fr: '3. Quel est la monnaie de Hector ?' },
        options: [
          { text: { en: '$1.50', es: '$1.50', fr: '$1,50' }, correct: false },
          { text: { en: '$2.25', es: '$2.25', fr: '$2,25' }, correct: true },
          { text: { en: '$3.00', es: '$3.00', fr: '$3,00' }, correct: false },
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
    wordBank: ['quarter', 'dollar', 'receipt', 'total', 'change'],
    sentences: [
      {
        before: { en: 'A', es: 'Un', fr: 'Un' },
        answer: 'quarter',
        after: { en: 'is worth 25 cents.', es: 'vale 25 centavos.', fr: 'vaut 25 cents.' },
      },
      {
        before: { en: 'One', es: 'Un', fr: 'Un' },
        answer: 'dollar',
        after: { en: 'bill equals 100 pennies.', es: 'billete equivale a 100 centavos.', fr: 'billet équivaut à 100 cents.' },
      },
      {
        before: { en: 'The cashier gave me a', es: 'La cajera me dio un', fr: 'La caissière m\'a donné un' },
        answer: 'receipt',
        after: { en: 'for my purchase.', es: 'para mi compra.', fr: 'pour mon achat.' },
      },
      {
        before: { en: 'The', es: 'El', fr: 'Le' },
        answer: 'total',
        after: { en: 'for all my items is $15.50.', es: 'de todos mis artículos es de $15.50.', fr: 'pour tous mes articles est de $15,50.' },
      },
      {
        before: { en: 'I paid $20 and got $4.50 in', es: 'Pagué $20 y recibí $4.50 de', fr: 'J\'ai payé $20 et j\'ai reçu $4,50 de' },
        answer: 'change',
        after: { en: '.', es: '.', fr: '.' },
      },
    ],
  },
};
