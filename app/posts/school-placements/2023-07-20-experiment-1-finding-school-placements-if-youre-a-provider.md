---
title: "Experiment 1: Finding school placements if you’re an ITT provider"
description: Exploring how providers might find information about school placements
date: 2023-07-20T12:01:00+00:00
tags:
  - school placements
  - alpha
related:
  items:
    - text: Adding school placements if you’re a school
      href: /school-placements/experiment-1-adding-school-placements-if-youre-a-school/
---

[Preamble]

## What we did

This post is the second of two parts:

1. [Adding school placements if you’re a school](/school-placements/experiment-1-adding-school-placements-if-youre-a-school/)
2. Finding school placements if you’re an ITT provider

### Experiment goals

The experiment had two goals:

- general fact-finding about school placements
- understanding how a provider might find a school placement

#### General fact-finding about school placements

General overview of their role, their organisation and their partner school network. A run-through of their pain points, core needs, and any specific challenges they face.

#### Understanding how a provider might find a school placement

Taking the provider through the journey of how they could search for a placement based on chosen criteria.

### How the prototype works

![Find a school placement flow](experiment-1-find-school-placements-flow.png 'Find a school placement flow')

Finding a school placement has 5 steps:

1. Find school placements by location or by school
2. Select an age group
3. Select a subject
4. View a list of school placements
5. View an individual school placement

#### Find school placements by location or by school

![Image showing find school placements by location or by school page](experiment-1-find-placement--school-or-location.png 'Find school placements by location or by school')

We display the list of locations in an autocomplete. The Google Places API provides locations.

We display the list of schools in an autocomplete. We populate the schools list from Get information about schools (GIAS) data.

#### Age group

![Image showing age group question](experiment-1-find-placement--age-group.png 'Age group question')

The question has 3 options:

- primary
- secondary
- further education

#### Subject

We show a list of subjects depending on the age group previously selected.

Users must select at least one subject.

![Image showing primary subject specialism question](experiment-1-find-placement--subject-primary.png 'Primary subject specialism question')

If a user selects the ‘primary’ age group, we show a list of primary subject specialisms. These include:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

![Image showing secondary subject question](experiment-1-find-placement--subject-secondary.png 'Secondary subject question')

If a user selects the ‘secondary’ age group, we show a list of secondary subjects. These include:

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

#### List of school placements

![Image showing the list of school placements page](experiment-1-find-placement--results.png 'List of school placements')

#### School placements details

![Image showing school placement details page](experiment-1-find-placement--details.png 'School placement details')

### Further considerations

[Describe what we didn't do and why.]

Reconciling age group, subject level and education phase

## What we found

[Describe research findings.]

Users saw value in being able to search for placement capacity within certain difficult-to-place subjects. For example, modern foreign languages

## Next steps

[Describe what we will do next - leads into a subsequent experiment/fact-find.]
