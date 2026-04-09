# Fibi Law ELS — SCORM Modules

Interactive SCORM 1.2 e-learning modules for the Fibi Law English Language Services (ELS) program.

## Structure

```
fibilawELS/
├── shared/           # Shared assets used by all modules
│   ├── scorm-api.js  # SCORM 1.2 API wrapper
│   └── brand.css     # Fibi Law brand styles
├── modules/
│   ├── unit-01/      # Unit 01: First English Class
│   ├── unit-02/      # Unit 02: In the Classroom
│   └── ...
├── dist/             # Built SCORM ZIPs for Moodle upload (gitignored)
└── build.sh          # Packaging script
```

## Building a Module

```bash
# Build a single module
bash build.sh unit-01

# Build all modules
bash build.sh all
```

Output ZIPs go to `dist/`. Upload each ZIP to Moodle as a SCORM activity.

## Adding a New Unit

1. Copy `modules/unit-01/` into a new folder e.g. `modules/unit-02/`
2. Edit `content.js` with the new unit's vocabulary, quiz, reading, and fill-in-blank data
3. Update `imsmanifest.xml` with the new unit's identifier and title
4. Run `bash build.sh unit-02`

## Moodle Upload

1. Go to your Moodle course → Turn editing on → Add activity → SCORM package
2. Upload the ZIP from `dist/`
3. Set **Grading method** to Highest attempt, **Pass score** to 70

## Curriculum

- 20 units covering beginner English for adult immigrants
- Each unit contains: vocabulary flashcards, multiple-choice quiz, reading passage, fill-in-blank
- Supports EN / ES / FR language toggle (instructions in learner's language, target words always in English)
- SCORM 1.2 compatible with Moodle

## Brand

Colors: Navy `#012D44` · Teal `#3CBFBA` · Gold `#FBBF24`
Fonts: Poppins (headings) · Inter (body) · Fragment Mono (labels)
