---
title: "Experiment 2: Iterating how schools add school placements"
description: We iterated our first experiment exploring how schools might add information about school placements
date: 2023-07-27T12:00:00+00:00
tags:
  - school placements
  - alpha
related:
  items:
    - text: "Experiment 2: Iterating what we show to ITT providers when they search for school placements"
      href: /school-placements/experiment-2-iterating-what-we-show-to-itt-providers-when-they-search-for-school-placements/
    - text: "Experiment 1: Adding school placements if you’re a school"
      href: /school-placements/experiment-1-adding-school-placements-if-youre-a-school/
---

This post is the first of 2 parts:

1. Iterating how schools add school placements
2. [Iterating what we show to ITT providers when they search for school placements](/school-placements/experiment-2-iterating-what-we-show-to-itt-providers-when-they-search-for-school-placements/)

In this part of the experiment, we again addressed problem statement 1, [problems with reporting data](/school-placements/defining-our-problem-statements/#1.-problems-with-reporting-data):

> DfE needs a data reporting service to help share data between School Centred Initial Teacher Training (SCITTs), Higher Education Institutions (HEIs), and the DfE.
>
> We aren’t sharing data, so we don’t have the complete picture of school placement activity and can’t intervene when help is needed.
>
> **How might we** create a data reporting service so stakeholders can report complete placement data using standardised and easily accessible platforms?

## Experiment goals

The experiment had 2 goals:

- general fact-finding about school placements
- understanding how a school might advertise a school placement

### General fact-finding about school placements

The fact-finding part of the research included:

- a general discussion about the participant’s role, their organisation and their ITT provider relationships
- a run-through of their pain points, core needs and any specific challenges they face with school placements

### Understanding how a school might advertise a school placement

Taking the participant through a prototype journey to show how a school could post an opening for a placement for ITT providers to view.

## How the prototype works

From the first iteration we:

- removed questions about class size and training pattern
- added questions about key stage, mentor and mentor availability

We made these changes because:

-

### Adding a school placement

![Add a school placement flow](experiment-2-add-school-placements-flow.png 'Add a school placement flow')

In this iteration, adding a school placement has 7 steps:

1. Subject level
2. Subject
3. Age range
4. Key stage
5. Mentor
6. Mentor availability
7. Check your answers

Selecting ‘Add placement’ takes the user to the start of the flow.

### Subject level

![Image showing the subject level question](experiment-2-add-placement--subject-level.png 'Subject level question')

The question has 3 options:

- primary
- secondary
- further education

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select a subject level

We do not show the subject level question if we know the school’s education phase - primary or secondary. Instead, we default the answer.

### Subject

We show different subject options if the user has previously chosen the ‘Primary’ or ‘Secondary’ subject levels.

Users can only select one subject.

#### Primary subject specialism

![Image showing the primary subject specialism question](experiment-2-add-placement--subject-primary.png 'Primary subject specialism question')

If the user has selected the ‘Primary’ subject level, we show:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

#### Secondary subject

![Image showing the secondary subject question](experiment-2-add-placement--subject-secondary.png 'Secondary subject question')

If the user has selected the ‘Secondary’ subject level, we show:

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

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select a subject

### Age range

We show different age range options if the user has previously chosen the ‘Primary’ or ‘Secondary’ subject levels.

#### Primary age range

![Image showing the primary age range question](experiment-2-add-placement--age-range-primary.png 'Primary age range question')

If the user has selected the ‘Primary’ subject level, we show:

- 3 to 7
- 5 to 11
- 7 to 11
- 7 to 14 - middle years

#### Secondary age range

![Image showing the secondary age range question](experiment-2-add-placement--age-range-secondary.png 'Secondary age range question')

If the user has selected the ‘Secondary’ subject level, we show:

- 11 to 16
- 11 to 18
- 14 to 19

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select an age range

### Key stage

In this iteration, we added a question about key stage. We added this question because

We show different key stage options if the user has previously chosen the ‘Primary’ or ‘Secondary’ subject levels.

#### Primary key stage

![Image showing the primary key stage question](experiment-2-add-placement--key-stage-primary.png 'Primary key stage question')

If the user has selected the ‘Primary’ subject level, we show:

- Early years
- Key stage 1
- Key stage 2

#### Secondary key stage

![Image showing the secondary key stage question](experiment-2-add-placement--key-stage-secondary.png 'Secondary key stage question')

If the user has selected the ‘Secondary’ subject level, we show:

- Key stage 3
- Key stage 4
- Key stage 5

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select a key stage

### Mentor

In this iteration, we added a question about the mentor for the school placement.

![Image showing the mentor question](experiment-2-add-placement--mentor.png 'Mentor question')

We show a list of mentors that correspond to the subject chosen.

If the user has not answered the question, we show an error message:

> Select a mentor

### Mentor availability

In this iteration, we changed the ‘Training pattern’ question to ‘Mentor availability’. We made this change because

![Image showing the mentor availability question](experiment-2-add-placement--mentor-availability.png 'Mentor availability question')

We show 5 options for mentor availability, which correspond to the days of the week:

- Monday
- Tuesday
- Wednesday
- Thursday
- Friday

If the user has not answered the question, we show an error message:

> Select mentor availability

### Check your answers

![Image showing the check your answers page](experiment-2-add-placement--check-your-answers.png 'Check your answers page')

The final step is the ‘Check your answers’ page. The user can change:

- subject level
- subject
- age range
- key stage
- mentor
- mentor availability

If the user changes the subject level, they must also change the subject, age range and key stage before returning to the ‘Check your answers’ page.

## Further considerations

We considered some changes that we did not implement. These included:

- reconciling age group and subject level
- showing ‘7 to 14 - middle years’ for both subject levels
- showing ‘Key stage 2’ if ‘7 to 14 - middle years’ age range is chosen
- skipping questions if we already know the answer - for example, subject level
- linking age range and Key Stage questions

### Reconciling age group and subject level

We use ‘age group’ and ‘subject level’ interchangeably in the prototype, but they mean the same thing. Furthermore, [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) names these two things ‘education phase’.

We will reconcile the terms and decide whether the variability is okay or the language should be consistent.

### Showing ‘7 to 14 - middle years’ for both subject levels

Regardless of subject level, we should always show the ‘7 to 14 - middle years’ age range option since it applies to both ‘primary’ and ‘secondary’ subject levels.

### Showing ‘Key stage 2’ if ‘7 to 14 - middle years’ age range is chosen

Key stages and age ranges are linked. If the user has chosen the ‘7 to 14 - middle years’ age range, we must show ‘Key stage 2’ in the list of key stage options.

### Skipping questions if we already know the answer

We will know a lot of information about the schools from GIAS. This means we can skip questions in the ‘Add placement’ flow for which we know the answers, such as subject level and age range.

### Linking age range and key stage questions

Whilst age range and Key Stages are linked, mentors might only mentor a specific key stage. We need to validate whether this is true.

## What we found
[Describe research findings.]

## Next steps
[Describe what we will do next - leads into a subsequent experiment/fact-find.]
