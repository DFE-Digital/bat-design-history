---
title: "Experiment 4: Finding mentors if you’re an ITT provider"
description: XXXX
date: 2023-08-21
tags:
  - school placements
  - alpha
related:
  items:
    - text: "Experiment 1: Finding school placements if you’re an ITT provider"
      href: /school-placements/experiment-1-finding-school-placements-if-youre-an-itt-provider/
    - text: "Experiment 2: Iterating what we show to ITT providers when they search for school placements"
      href: /school-placements/experiment-2-iterating-what-we-show-to-itt-providers-when-they-search-for-school-placements/
---

[Preamble]

## Experiment goals

The experiment had X goals:

- GOAL 1
- GOAL 2

### Goal 1

### Goal 2

## How the prototype works

![Image showing the flow diagram for finding mentors](experiment-4-find-mentors-flow.png 'Finding mentors flow')

Finding a mentor has 5 steps:

1. Find a mentor by location or by school
2. Select an age group
3. Select a subject
4. View a list of mentors
5. View an individual mentor

### Find a mentor by location or by school

![Image showing find a mentor by location or by school page](experiment-4-find-mentors--school-or-location.png 'Find a mentor by location or by school')

We display the list of locations in an autocomplete. We populate the list of places using the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview).

We display the list of schools in an autocomplete. We populate the list of schools from [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) data.

### Age group

![Image showing age group question](experiment-4-find-mentors--age-group.png 'Age group question')

The question has 3 options:

- primary
- secondary
- further education

If the user has not answered the question, we show an error message:

> Select an age group

### Subject

We show a list of subjects depending on the age group previously selected.

#### Primary subject specialism

![Image showing primary subject specialism question](experiment-4-find-mentors--subject-primary.png 'Primary subject specialism question')

We show a list of primary subject specialisms if a user selects the ‘primary’ age group. These include:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

#### Secondary subject

![Image showing secondary subject question](experiment-4-find-mentors--subject-secondary.png 'Secondary subject question')

We show a list of secondary subjects if a user selects the ‘secondary’ age group. These include:

- Ancient Greek
- Ancient Hebrew
- Art and design
- Biology
- Business studies
- Chemistry
- Citizenship
- Classics
- Communication and media studies
- Computing
- Dance
- Design and technology
- Drama
- Economics
- English
- English as a second or other language
- French
- Geography
- German
- Health and social care
- History
- Italian
- Japanese
- Latin
- Mandarin
- Mathematics
- Music
- Philosophy
- Physical education
- Physics
- Psychology
- Religious education
- Russian
- Science
- Social sciences
- Spanish

If the user has not answered the question, we show an error message:

> Select a subject

### List of mentors

![Image showing the list of mentors page](experiment-4-find-mentors--results.png 'List of mentors')

Once the user has selected their location, subject level and subject, we show them a list of relevant mentors.

The list page includes:

- filters
- a list of individual mentors
- pagination - if the list contains greater than 20 items

The filter panel includes example ‘contrast factors’:

- FACTOR 1
- FACTOR 2
- FACTOR 3

‘Contrast factors’ allow ITT providers to filter the type of mentors and focus the results on what they need.

The filters in the filter panel correspond to the information displayed in the individual mentor list item.

An individual mentor item on the list includes:

[Show iteration of the results list item between experiments 1, 2 and 4]


[Show iteration of the results filters - ‘Contrast factors’ between experiments 1, 2 and 4]

### Mentor details

![Image showing mentor details page](experiment-4-find-mentors--details.png 'Mentor details')

Selecting the school name or subject in the individual school placement list items takes the user to the school placement details page.

The school placement details page includes:


[Show iteration of the summary details between experiments 1, 2 and 4]

## Further considerations

[Describe what we didn't do and why.]

## What we found

[Describe research findings.]

## Next steps

[Describe what we will do next - leads into a subsequent experiment/fact-find.]
