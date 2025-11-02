# Portuguese Study Guide - Modular Development

## Project Overview

Building a modular Portuguese study guide for PORT 321. Each grammar topic gets its own HTML page for independent development and better token efficiency.

## Project Structure

```
portuguese_study_guide/
├── main.html                  # Navigation hub
├── output/
│   └── port321_study_guidev1.html  # Original example (keep as reference)
├── pages/                     # Individual topic pages
│   ├── acentuacao.html
│   ├── genero.html
│   ├── plural.html
│   ├── adverbios.html
│   ├── presente.html
│   └── [other topics]
├── assets/
│   ├── styles.css            # Shared styles
│   └── scripts.js           # Shared JavaScript
├── templates/
│   └── page-template.html    # Base template for new pages
└── input/
    └── port321.pdf          # Source material
```

## Design Requirements

### Visual Style
- **Dark theme**: Use color scheme from original (`port321_study_guidev1.html`)
- **Responsive**: Works on mobile and desktop
- **Typography**: Clear hierarchy with Portuguese examples prominently displayed

### Navigation
- **Main hub**: Grid or list of topic cards linking to individual pages
- **Breadcrumbs**: Back to main navigation from each page
- **Progress indicators**: Visual tracking of completed topics

### Content Structure
Each page should include:
1. **Grammar rules** with clear examples
2. **Practice exercises** with answer keys
3. **Key vocabulary** and pronunciation guides
4. **Cultural context** when relevant

## Development Approach

1. **Work incrementally**: One page/topic at a time
2. **Use templates**: Consistent structure across pages  
3. **Shared assets**: CSS and JS in separate files to avoid duplication
4. **Mobile-first**: Responsive design from the start

## Topics to Cover

**Midterm 1:**
- Acentuação (accent rules)
- Gênero (noun gender)
- Plural (plural formation)
- Advérbios (adverbs)
- Porquês (why/because variants)
- Presente do Indicativo (present tense)
- Pretérito (past tense)
- Particípio (past participle)

**Midterm 2:**
- Preposições (prepositions)
- Regência (verb/noun government)
- Subjuntivo (subjunctive mood)
- Imperativo (imperative mood)
- Pronomes (pronouns)

## Request Examples

- *"Create the acentuação page with rules for oxítonas, paroxítonas, and proparoxítonas"*
- *"Build the main navigation page"*
- *"Set up the shared CSS file with the dark theme"*
- *"Create exercises for the plural formation page"*

## Technical Notes

- Use semantic HTML5
- Keep JavaScript minimal and vanilla
- Ensure accessibility (proper heading structure, alt text)
- Test on mobile devices