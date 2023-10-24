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
      href: /school-placements/experiment-1-finding-school-placements-if-youre-an-itt-provider/
    - text: Defining our problem statements
      href: /school-placements/defining-our-problem-statements/
---

This post is the first of 2 parts:

1. Adding school placements if you’re a school
2. [Finding school placements if you’re an ITT provider](/school-placements/experiment-1-finding-school-placements-if-youre-an-itt-provider/)

In this part of the experiment, we wanted to address problem statement 1, [problems with reporting data](/school-placements/defining-our-problem-statements/#1.-problems-with-reporting-data):

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

![Image showing the flow diagram for adding a school placement](experiment-1-add-school-placements-flow.png 'Add a school placement flow')

Adding a school placement has 6 steps:

1. Subject level
2. Subject
3. Age range
4. Class size
5. Training pattern
6. Check your answers

Selecting ‘Add placement’ takes the user to the start of the flow.

### Subject level

![Image showing the subject level question](experiment-1-add-placement--subject-level.png 'Subject level question')

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

![Image showing the primary subject specialism question](experiment-1-add-placement--subject-primary.png 'Primary subject specialism question')

If the user has selected the ‘Primary’ subject level, we show primary subject options:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

#### Secondary subject

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

### Age range

We show different age range options if the user has previously chosen the ‘Primary’ or ‘Secondary’ subject levels.

#### Primary age range

![Image showing the primary age range question](experiment-1-add-placement--age-range-primary.png 'Primary age range question')

If the user has selected the ‘Primary’ subject level, we show:

- 3 to 7
- 5 to 11
- 7 to 11
- 7 to 14 - middle years

#### Secondary age range

![Image showing the secondary age range question](experiment-1-add-placement--age-range-secondary.png 'Secondary age range question')

If the user has selected the ‘Secondary’ subject level, we show:

- 11 to 16
- 11 to 18
- 14 to 19

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select an age range

### Class size

![Image showing the class size question](experiment-1-add-placement--class-size.png 'Class size question')

We show a small text input for class size.

If the user has not answered the question, we show an error message:

> Enter a class size

### Training pattern

![Image showing the training pattern question](experiment-1-add-placement--training-pattern.png 'Training pattern question')

We show 5 options for the training pattern, which correspond to the days of the week:

- Monday
- Tuesday
- Wednesday
- Thursday
- Friday

If the user has not answered the question, we show an error message:

> Select a training pattern

### Check your answers

![Image showing the check your answers page](experiment-1-add-placement--check-your-answers.png 'Check your answers page')

The final step is the ‘Check your answers’ page. The user can change:

- subject level
- subject
- age range
- class size
- training pattern

If the user changes the subject level, they must also change the subject and age range before returning to the ‘Check your answers’ page.

## Further considerations

We considered some changes that we did not implement. These included:

- reconciling age group and subject level
- showing ‘7 to 14 - middle years’ for both subject levels
- skipping questions if we already know the answer - for example, subject level

### Reconciling age group and subject level

We use ‘age group’ and ‘subject level’ interchangeably in the prototype, but they mean the same thing. Furthermore, [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) names these two things ‘education phase’.

We will reconcile the terms and decide whether the variability is okay or the language should be consistent.

### Showing ‘7 to 14 - middle years’ for both subject levels

Regardless of subject level, we should always show the ‘7 to 14 - middle years’ age range option since it applies to both ‘primary’ and ‘secondary’ subject levels.

### Skipping questions if we already know the answer

We will know a lot of information about the schools from GIAS. This means we can skip questions in the ‘Add placement’ flow for which we know the answers, such as subject level and age range.

## What we found

### School placement needs

Schools don’t have placement needs. Instead, ITT providers need to place trainees each academic cycle.

Providers control the trainee numbers through the application process.

Schools may be able to mentor trainees in an academic cycle, but they don’t have control over recruitment. They can control whether they accept a trainee onto a placement.

Schools and their partner providers negotiate the numbers and types of trainees they can mentor each recruitment cycle.

Schools might sometimes have spare capacity because their partner providers don’t offer courses in subjects the school has mentored for.

### Mentor details are important

ITT providers require mentor information when arranging placements each academic cycle.

This is because they want to:

- keep an accurate record of who is mentoring in their partner schools
- find new placements based on mentor attributes

Schools are frequently asked to share mentor details with their partner and prospective providers.

Storing mentor information in one place, as a single source of truth, has a lot of utility.

### Training pattern

Entering the desired 'training pattern' (for example, days per week a trainee is on-site) is not something schools do. Although this may have utility when partnering with several providers or being open to doing so, at present, it isn’t behaviour schools are used to.

The ITT provider defines the trainees' training pattern as this is derived from their courses. A placement school must agree to these parameters when partnering with a provider, but these terms will be discussed during onboarding.

### Class size

Entering the subject 'class size' isn’t helpful as this would vary between classes and schools.

Trainees will teach various class sizes within a subject, depending on the school demographics.
