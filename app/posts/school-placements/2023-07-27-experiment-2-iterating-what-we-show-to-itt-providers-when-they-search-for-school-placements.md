---
title: "Experiment 2: Iterating what we show to ITT providers when they search for school placements"
description: We iterated our first experiment exploring how providers might find information about school placements
date: 2023-07-27T12:01:00+00:00
tags:
  - school placements
  - alpha
related:
  items:
    - text: "Experiment 2: Iterating how schools add school placements"
      href: /school-placements/experiment-2-iterating-how-schools-add-school-placements/
    - text: "Experiment 1: Finding school placements if you’re an ITT provider"
      href: /school-placements/experiment-1-finding-school-placements-if-youre-an-itt-provider/
---

In the first experiment we found x and so we wanted to explore y

This post is the second of 2 parts:

1. [Iterating how schools add school placements](/school-placements/experiment-2-iterating-how-schools-add-school-placements/)
2. Iterating what we show to ITT providers when they search for school placements

In this second part of the experiment, we again addressed problem statement 2, [problems with mentor availability](/school-placements/defining-our-problem-statements/#2.-problems-with-mentor-availability):

> Providers need high-quality mentors for their Initial Teacher Training (ITT) trainees.
>
> They need help finding mentors within their networks, limiting how many trainees they can recruit.
>
> **How might we** support providers to find enough mentors to maximise trainee capacity?

## Experiment goals

The experiment had 2 goals:

- general fact-finding about school placements
- understanding how a provider might find a school placement

### General fact-finding about school placements

The fact-finding part of the research included:

- a general discussion about the participant’s role, their organisation and their partner school network
- a run-through of their pain points, core needs and any specific challenges they face with school placements

### Understanding how a provider might find a school placement

Taking the research through a prototype journey of how they could search for a placement based on chosen criteria.

## How the prototype works

From the first iteration we:

-

We made these changes because:

-

![Find a school placement flow](experiment-2-find-school-placements-flow.png 'Find a school placement flow')

Finding a school placement has 5 steps:

1. Find school placements by location or by school
2. Select an age group
3. Select a subject
4. View a list of school placements
5. View an individual school placement

### Find school placements by location or by school

![Image showing find school placements by location or by school page](experiment-2-find-placement--school-or-location.png 'Find school placements by location or by school')

We display the list of locations in an autocomplete. We populate the list of places using the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview).

We display the list of schools in an autocomplete. We populate the list of schools from [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) data.

### Age group

![Image showing age group question](experiment-2-find-placement--age-group.png 'Age group question')

The question has 3 options:

- primary
- secondary
- further education

If the user has not answered the question, we show an error message:

> Select an age group

### Subject

We show a list of subjects depending on the age group previously selected.

#### Primary subject specialism

![Image showing primary subject specialism question](experiment-2-find-placement--subject-primary.png 'Primary subject specialism question')

We show a list of primary subject specialisms if a user selects the ‘primary’ age group. These include:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

#### Secondary subject

![Image showing secondary subject question](experiment-2-find-placement--subject-secondary.png 'Secondary subject question')

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

### List of school placements

![Image showing the list of school placements page](experiment-2-find-placement--results.png 'List of school placements')

Once the user has selected their location, subject level and subject, we show them a list of relevant school placements.

The list page includes:

- filters
- a list of individual placements
- pagination - if the list contains greater than 20 items

The filter panel includes example ‘contrast factors’:

- age group
- key stage
- gender

‘Contrast factors’ allow ITT providers to filter the type of school placement and focus the results on what they need.

The filters in the filter panel correspond to the information displayed in the individual school placement list item.

An individual placement item on the list includes:

- school name
- subject
- age range
- key stage
- school gender
- mentor name
- mentor availability

Show iteration of the results list item


Show iteration of the results filters - ‘Contrast factors’

### School placements details

![Image showing school placement details page](experiment-2-find-placement--details.png 'School placement details')

Selecting the school name or subject in the individual school placement list items takes the user to the school placement details page.

The school placement details page includes:

- school name
- subject
- a summary list containing age range, key stage, school gender, mentor name and mentor availability
- contact details
- information about training with disabilities and other needs

Show iteration of the summary details

## Further considerations

We considered some changes that we did not implement. These included:

- whether the service is behind a DfE Sign-in screen
-

## What we found

[Describe research findings.]

## Next steps

[Describe what we will do next - leads into a subsequent experiment/fact-find.]
