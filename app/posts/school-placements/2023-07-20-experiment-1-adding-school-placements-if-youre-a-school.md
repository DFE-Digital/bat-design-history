---
title: "Experiment 1: Adding school placements if you’re a school"
description: Exploring how schools might add information about school placements
date: 2023-07-20T12:00:00+00:00
tags:
  - school placements
  - alpha
related:
  items:
    - text: Finding school placements if you’re an ITT provider
      href: /school-placements/experiment-1-finding-school-placements-if-youre-a-provider/
    - text: Defining our problem statements
      href: /school-placements/defining-our-problem-statements/
---

This post is the first of 2 parts:

1. Adding school placements if you’re a school
2. [Finding school placements if you’re an ITT provider](/school-placements/experiment-1-finding-school-placements-if-youre-a-provider/)

In this part of the experiment, we wanted to address problem statement 1, [problems with reporting data](/school-placements/defining-our-problem-statements/#1.-problems-with-reporting-data):

> DfE needs a data reporting service to help share data between School Centred Initial Teacher Training (SCITTs), Higher Education Institutions (HEIs), and the DfE.
>
> We aren’t sharing data, so we don’t have the complete picture of school placement activity and can’t intervene when help is needed.
>
> **How might we** create a data reporting service so stakeholders can report complete placement data using standardised and easily accessible platforms?

## What we did

### Experiment goals

The experiment had two goals:

- general fact-finding about school placements
- understanding how a school might advertise a school placement

#### General fact-finding about school placements

General overview of their role, their organisation and their partner school network. A run-through of their pain points, core needs, and any specific challenges they face.

#### Understanding how a school might advertise a school placement

Taking the provider through how a school could post an opening for a placement for providers to view.


### How the prototype works

![Add a school placement flow](experiment-1-add-school-placements-flow.png 'Add a school placement flow')

Adding a school placement has 6 steps:

1. Subject level
2. Subject
3. Age range
4. Class size
5. Training pattern
6. Check your answers

Selecting ‘Add placement’ takes the user to the start of the flow.

#### Subject level

![Image showing the subject level question](experiment-1-add-placement--subject-level.png 'Subject level question')

The question has 3 options:

- primary
- secondary
- further education

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select a subject level

We do not show the subject level question if we know the school’s education phase - primary or secondary. Instead, we default the answer.

#### Subject

We show different subject options if the user has previously chosen the ‘Primary’ subject level or ‘Secondary’ subject level.

Users can only select one subject.

![Image showing the primary subject specialism question](experiment-1-add-placement--subject-primary.png 'Primary subject specialism question')

If the user has selected the ‘Primary’ subject level, we show primary subject options:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

![Image showing the secondary subject question](experiment-1-add-placement--subject-secondary.png 'Secondary subject question')

If the user has selected the ‘Secondary’ subject level, we show secondary subject options:

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

#### Age range

We show different age range options if the user has previously chosen the ‘Primary’ subject level or ‘Secondary’ subject level.

![Image showing the primary age range question](experiment-1-add-placement--age-range-primary.png 'Primary age range question')

If the user has selected the ‘Primary’ subject level, we show:

- 3 to 7
- 5 to 11
- 7 to 11
- 7 to 14 - middle years

![Image showing the secondary age range question](experiment-1-add-placement--age-range-secondary.png 'Secondary age range question')

If the user has selected the ‘Secondary’ subject level, we show:

- 11 to 16
- 11 to 18
- 14 to 19

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select an age range

#### Class size

![Image showing the class size question](experiment-1-add-placement--class-size.png 'Class size question')

We show a small text input for class size.

If the user has not answered the question, we show an error message:

> Enter a class size

#### Training pattern

![Image showing the training pattern question](experiment-1-add-placement--training-pattern.png 'Training pattern question')

We show 5 options for the training pattern, which correspond to the days of the week:

- Monday
- Tuesday
- Wednesday
- Thursday
- Friday

If the user has not answered the question, we show an error message:

> Select a training pattern

#### Check your answers

![Image showing the check your answers page](experiment-1-add-placement--check-your-answers.png 'Check your answers page')

The final step is the ‘Check your answers’ page. The user can change:

- subject level
- subject
- age range
- class size
- training pattern

If the user changes the subject level, they must also change the subject and age range before returning to the ‘Check your answers’ page.

### Further considerations

[Describe what we didn't do and why.]

Reconciling age group, subject level and education phase
Showing middle years for both subject levels

## What we found

[Describe research findings.]

Inputting desired 'training pattern' (for example, days per week a trainee is on-site) is not something schools would do. Training pattern is defined by the university or SCITT.

Inputting the subject 'class size' wouldn't be a helpful field as this would vary between classes and schools. The trainee will be teaching various class sizes within a subject, it is not a static figure


## Next steps

[Describe what we will do next - leads into a subsequent experiment/fact-find.]
