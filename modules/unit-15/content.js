/**
 * Fibi Law ELS — Unit 15: The Body
 * Content: vocabulary, quiz, reading, fill-in-blank
 * Source: Fibi Law ESL Lesson Plans (April 2026) + Fibi Law Student Worksheet Packet
 */

const UNIT = {
  id: 'unit-15',
  number: '15',
  title: {
    en: 'The Body',
    es: 'El cuerpo',
    fr: 'Le corps',
  },
  topic: {
    en: 'Body parts · Aches and pains · 911 emergency script',
    es: 'Partes del cuerpo · Dolores y molestias · Script de emergencia 911',
    fr: 'Parties du corps · Douleurs et malaises · Scénario d\'urgence 911',
  },
  grammar: {
    en: 'My ___ hurts · I have a ___ache · She has a sore ___',
    es: 'Me duele ___ · Tengo dolor de ___ · Ella tiene ___ adolorida',
    fr: 'Mon ___ fait mal · J\'ai mal à ___ · Elle a ___ endolori',
  },
  passingScore: 70,
  attempts: 3,
  estimatedTime: { en: '20–25 minutes', es: '20–25 minutos', fr: '20–25 minutes' },

  // ── VOCABULARY FLASHCARDS ─────────────────────────────────────────────────
  vocabulary: [
    {
      word: 'HEAD',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The top part of your body where your eyes, nose, and mouth are',
        es: 'La parte superior de tu cuerpo donde están tus ojos, nariz y boca',
        fr: 'La partie supérieure de votre corps où se trouvent vos yeux, nez et bouche',
      },
      example_en: '"I have a headache and my head hurts."',
    },
    {
      word: 'EAR',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The body part you use to hear sounds',
        es: 'La parte del cuerpo que usas para escuchar sonidos',
        fr: 'La partie du corps que vous utilisez pour entendre les sons',
      },
      example_en: '"My ear is sore from the cold wind."',
    },
    {
      word: 'EYE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The body part you use to see',
        es: 'La parte del cuerpo que usas para ver',
        fr: 'La partie du corps que vous utilisez pour voir',
      },
      example_en: '"My eyes hurt from looking at the computer screen."',
    },
    {
      word: 'NOSE',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The body part between your eyes that you use to smell and breathe',
        es: 'La parte del cuerpo entre tus ojos que usas para oler y respirar',
        fr: 'La partie du corps entre vos yeux que vous utilisez pour sentir et respirer',
      },
      example_en: '"I have a runny nose from the cold."',
    },
    {
      word: 'MOUTH',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The opening in your face where you eat and speak',
        es: 'La abertura en tu cara por donde comes y hablas',
        fr: 'L\'ouverture dans votre visage par laquelle vous mangez et parlez',
      },
      example_en: '"My mouth is dry. I need water."',
    },
    {
      word: 'NECK',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The part of your body between your head and shoulders',
        es: 'La parte de tu cuerpo entre tu cabeza y hombros',
        fr: 'La partie de votre corps entre votre tête et vos épaules',
      },
      example_en: '"My neck is stiff from the long drive."',
    },
    {
      word: 'SHOULDER',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The joint between your arm and your chest',
        es: 'La articulación entre tu brazo y tu pecho',
        fr: 'L\'articulation entre votre bras et votre poitrine',
      },
      example_en: '"My shoulder hurts from carrying heavy bags."',
    },
    {
      word: 'STOMACH',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The body part inside your belly that digests food',
        es: 'La parte del cuerpo dentro de tu vientre que digiere la comida',
        fr: 'La partie du corps à l\'intérieur de votre ventre qui digère les aliments',
      },
      example_en: '"I have a stomachache. I think I ate too much."',
    },
    {
      word: 'ARM',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The long body part connected to your shoulder that ends in a hand',
        es: 'La larga parte del cuerpo conectada a tu hombro que termina en una mano',
        fr: 'La longue partie du corps connectée à votre épaule qui se termine par une main',
      },
      example_en: '"My arm hurts. I think I have a broken bone."',
    },
    {
      word: 'HAND',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The body part at the end of your arm with five fingers',
        es: 'La parte del cuerpo al final de tu brazo con cinco dedos',
        fr: 'La partie du corps à la fin de votre bras avec cinq doigts',
      },
      example_en: '"I burned my hand on the hot stove."',
    },
    {
      word: 'LEG',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'One of the two body parts you use to stand and walk',
        es: 'Una de las dos partes del cuerpo que usas para estar de pie y caminar',
        fr: 'L\'une des deux parties du corps que vous utilisez pour vous tenir debout et marcher',
      },
      example_en: '"My leg is sore after running."',
    },
    {
      word: 'FOOT',
      pos: { en: 'noun', es: 'sustantivo', fr: 'nom' },
      definition: {
        en: 'The body part at the end of your leg that you walk on',
        es: 'La parte del cuerpo al final de tu pierna sobre la que caminas',
        fr: 'La partie du corps à la fin de votre jambe sur laquelle vous marchez',
      },
      example_en: '"I twisted my foot and now I cannot walk."',
    },
  ],

  // ── QUIZ ─────────────────────────────────────────────────────────────────
  quiz: [
    {
      word: 'HEAD',
      question: { en: 'Which body part is at the top of your body?', es: '¿Cuál es la parte del cuerpo en la parte superior de tu cuerpo?', fr: 'Quelle partie du corps se trouve au-dessus de votre corps ?' },
      correct: { en: 'The head', es: 'La cabeza', fr: 'La tête' },
      wrong: [
        { en: 'The neck', es: 'El cuello', fr: 'Le cou' },
        { en: 'The shoulder', es: 'El hombro', fr: 'L\'épaule' },
        { en: 'The arm', es: 'El brazo', fr: 'Le bras' },
      ],
    },
    {
      word: 'EAR',
      question: { en: 'What body part do you use to hear?', es: '¿Qué parte del cuerpo usas para escuchar?', fr: 'Quelle partie du corps utilisez-vous pour entendre ?' },
      correct: { en: 'The ear', es: 'La oreja', fr: 'L\'oreille' },
      wrong: [
        { en: 'The eye', es: 'El ojo', fr: 'L\'œil' },
        { en: 'The mouth', es: 'La boca', fr: 'La bouche' },
        { en: 'The nose', es: 'La nariz', fr: 'Le nez' },
      ],
    },
    {
      word: 'EYE',
      question: { en: 'What body part do you use to see?', es: '¿Qué parte del cuerpo usas para ver?', fr: 'Quelle partie du corps utilisez-vous pour voir ?' },
      correct: { en: 'The eye', es: 'El ojo', fr: 'L\'œil' },
      wrong: [
        { en: 'The ear', es: 'La oreja', fr: 'L\'oreille' },
        { en: 'The nose', es: 'La nariz', fr: 'Le nez' },
        { en: 'The mouth', es: 'La boca', fr: 'La bouche' },
      ],
    },
    {
      word: 'STOMACH',
      question: { en: 'What body part digests food?', es: '¿Qué parte del cuerpo digiere la comida?', fr: 'Quelle partie du corps digère les aliments ?' },
      correct: { en: 'The stomach', es: 'El estómago', fr: 'L\'estomac' },
      wrong: [
        { en: 'The mouth', es: 'La boca', fr: 'La bouche' },
        { en: 'The hand', es: 'La mano', fr: 'La main' },
        { en: 'The foot', es: 'El pie', fr: 'Le pied' },
      ],
    },
    {
      word: 'SHOULDER',
      question: { en: 'What is the joint between your arm and chest?', es: '¿Cuál es la articulación entre tu brazo y pecho?', fr: 'Quelle est l\'articulation entre votre bras et votre poitrine ?' },
      correct: { en: 'The shoulder', es: 'El hombro', fr: 'L\'épaule' },
      wrong: [
        { en: 'The neck', es: 'El cuello', fr: 'Le cou' },
        { en: 'The arm', es: 'El brazo', fr: 'Le bras' },
        { en: 'The elbow', es: 'El codo', fr: 'Le coude' },
      ],
    },
    {
      word: 'HAND',
      question: { en: 'What body part has five fingers?', es: '¿Qué parte del cuerpo tiene cinco dedos?', fr: 'Quelle partie du corps a cinq doigts ?' },
      correct: { en: 'The hand', es: 'La mano', fr: 'La main' },
      wrong: [
        { en: 'The foot', es: 'El pie', fr: 'Le pied' },
        { en: 'The leg', es: 'La pierna', fr: 'La jambe' },
        { en: 'The arm', es: 'El brazo', fr: 'Le bras' },
      ],
    },
    {
      word: 'LEG',
      question: { en: 'What body part do you use to stand and walk?', es: '¿Qué parte del cuerpo usas para estar de pie y caminar?', fr: 'Quelle partie du corps utilisez-vous pour vous tenir debout et marcher ?' },
      correct: { en: 'The leg', es: 'La pierna', fr: 'La jambe' },
      wrong: [
        { en: 'The arm', es: 'El brazo', fr: 'Le bras' },
        { en: 'The hand', es: 'La mano', fr: 'La main' },
        { en: 'The head', es: 'La cabeza', fr: 'La tête' },
      ],
    },
    {
      word: 'FOOT',
      question: { en: 'What is at the end of your leg?', es: '¿Qué está al final de tu pierna?', fr: 'Qu\'y a-t-il à la fin de votre jambe ?' },
      correct: { en: 'The foot', es: 'El pie', fr: 'Le pied' },
      wrong: [
        { en: 'The hand', es: 'La mano', fr: 'La main' },
        { en: 'The head', es: 'La cabeza', fr: 'La tête' },
        { en: 'The neck', es: 'El cuello', fr: 'Le cou' },
      ],
    },
    {
      word: 'NOSE',
      question: { en: 'What body part do you use to smell?', es: '¿Qué parte del cuerpo usas para oler?', fr: 'Quelle partie du corps utilisez-vous pour sentir ?' },
      correct: { en: 'The nose', es: 'La nariz', fr: 'Le nez' },
      wrong: [
        { en: 'The ear', es: 'La oreja', fr: 'L\'oreille' },
        { en: 'The eye', es: 'El ojo', fr: 'L\'œil' },
        { en: 'The mouth', es: 'La boca', fr: 'La bouche' },
      ],
    },
    {
      word: 'MOUTH',
      question: { en: 'What body part do you use to eat and speak?', es: '¿Qué parte del cuerpo usas para comer y hablar?', fr: 'Quelle partie du corps utilisez-vous pour manger et parler ?' },
      correct: { en: 'The mouth', es: 'La boca', fr: 'La bouche' },
      wrong: [
        { en: 'The nose', es: 'La nariz', fr: 'Le nez' },
        { en: 'The ear', es: 'La oreja', fr: 'L\'oreille' },
        { en: 'The eye', es: 'El ojo', fr: 'L\'œil' },
      ],
    },
  ],

  // ── READING PASSAGE ───────────────────────────────────────────────────────
  reading: {
    title: {
      en: 'Pedro\'s Emergency',
      es: 'La emergencia de Pedro',
      fr: 'L\'urgence de Pedro',
    },
    passage_en: `Pedro is at home with his mother when she suddenly says, "Oh no! My stomach hurts very badly." Pedro is worried. His mother sits down and holds her stomach. Her face is red. She says, "I cannot move. I think I need to call 911."

Pedro immediately picks up his phone and dials 911. A man answers, "911 emergency. What is your problem?" Pedro takes a deep breath. "My mother is hurt. She has a very bad stomachache," he says.

The 911 operator asks, "How old is she?" Pedro answers, "She is 55 years old." The operator continues, "Does she have any other pain?" Pedro asks his mother, "Do you have pain anywhere else?" His mother says, "My back and my shoulder hurt too."

Pedro tells the operator, "Her back and shoulder hurt also." The operator says, "An ambulance is coming. It will arrive in five minutes. Stay with your mother and keep her warm." Pedro nods, even though the operator cannot see him. He puts a blanket over his mother and holds her hand.

In five minutes, paramedics arrive. They check her head, her arm, and her leg. They ask, "Do you have pain in your neck?" His mother says, "No, my neck is fine. But my stomach hurts the most." The paramedics put her on a stretcher and take her to the hospital. Pedro goes with her. Everything will be okay.`,
    highlights: [
      { word: 'emergency', tip: { en: 'emergency: a sudden dangerous situation', es: 'emergency = emergencia: una situación peligrosa repentina', fr: 'emergency = urgence: une situation dangereuse soudaine' } },
      { word: 'paramedics', tip: { en: 'paramedics: medical helpers who work in ambulances', es: 'paramedics = paramédicos: ayudantes médicos que trabajan en ambulancias', fr: 'paramedics = secouristes: aides médicaux qui travaillent dans les ambulances' } },
      { word: 'stretcher', tip: { en: 'stretcher: a flat bed on wheels for carrying sick people', es: 'stretcher = camilla: cama plana con ruedas para llevar gente enferma', fr: 'stretcher = brancard: lit plat sur roues pour transporter les malades' } },
      { word: 'ambulance', tip: { en: 'ambulance: a special vehicle that takes sick people to the hospital', es: 'ambulance = ambulancia: vehículo especial que lleva gente enferma al hospital', fr: 'ambulance = ambulance: véhicule spécial qui transporte les malades à l\'hôpital' } },
    ],
    questions: [
      {
        text: { en: '1. What is wrong with Pedro\'s mother?', es: '1. ¿Qué le pasa a la madre de Pedro?', fr: '1. Quel est le problème de la mère de Pedro ?' },
        options: [
          { text: { en: 'She has a headache', es: 'Tiene dolor de cabeza', fr: 'Elle a mal à la tête' }, correct: false },
          { text: { en: 'She has a very bad stomachache', es: 'Tiene un dolor de estómago muy fuerte', fr: 'Elle a très mal à l\'estomac' }, correct: true },
          { text: { en: 'She has a sore throat', es: 'Tiene dolor de garganta', fr: 'Elle a mal à la gorge' }, correct: false },
        ],
      },
      {
        text: { en: '2. What other body parts hurt Pedro\'s mother?', es: '2. ¿Qué otras partes del cuerpo le duelen a la madre de Pedro?', fr: '2. Quelles autres parties du corps font mal à la mère de Pedro ?' },
        options: [
          { text: { en: 'Her arm and leg', es: 'Su brazo y pierna', fr: 'Son bras et sa jambe' }, correct: false },
          { text: { en: 'Her back and shoulder', es: 'Su espalda y hombro', fr: 'Son dos et son épaule' }, correct: true },
          { text: { en: 'Her ear and nose', es: 'Su oreja y nariz', fr: 'Son oreille et son nez' }, correct: false },
        ],
      },
      {
        text: { en: '3. How long does it take for the ambulance to arrive?', es: '3. ¿Cuánto tiempo tarda la ambulancia en llegar?', fr: '3. Combien de temps faut-il à l\'ambulance pour arriver ?' },
        options: [
          { text: { en: 'Two minutes', es: 'Dos minutos', fr: 'Deux minutes' }, correct: false },
          { text: { en: 'Five minutes', es: 'Cinco minutos', fr: 'Cinq minutes' }, correct: true },
          { text: { en: 'Ten minutes', es: 'Diez minutos', fr: 'Dix minutes' }, correct: false },
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
    wordBank: ['head', 'stomach', 'ear', 'shoulder', 'foot'],
    sentences: [
      {
        before: { en: 'I have a', es: 'Tengo un dolor de', fr: 'J\'ai une douleur à' },
        answer: 'stomach',
        after: { en: 'ache. I need some medicine.', es: 'estómago. Necesito medicina.', fr: 'estomac. J\'ai besoin de médicaments.' },
      },
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'shoulder',
        after: { en: 'hurts from carrying heavy bags.', es: 'me duele por llevar bolsas pesadas.', fr: 'me fait mal à cause des sacs lourds.' },
      },
      {
        before: { en: 'She has pain in her right', es: 'Ella tiene dolor en su', fr: 'Elle a mal à son' },
        answer: 'foot',
        after: { en: 'and cannot walk.', es: 'y no puede caminar.', fr: 'et ne peut pas marcher.' },
      },
      {
        before: { en: 'My', es: 'Mi', fr: 'Mon' },
        answer: 'ear',
        after: { en: 'is sore from the cold.', es: 'me duele por el frío.', fr: 'me fait mal à cause du froid.' },
      },
      {
        before: { en: 'I have a', es: 'Tengo un dolor de', fr: 'J\'ai mal à la' },
        answer: 'head',
        after: { en: 'and cannot think clearly.', es: 'y no puedo pensar claramente.', fr: 'et je ne peux pas penser clairement.' },
      },
    ],
  },
};
