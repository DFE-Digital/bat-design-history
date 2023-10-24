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
    - text: Defining our problem statements
      href: /school-placements/defining-our-problem-statements/
---

This post is the second of 2 parts:

1. [Adding school placements if you’re a school](/school-placements/experiment-1-adding-school-placements-if-youre-a-school/)
2. Finding school placements if you’re an ITT provider

In this part of the experiment, we wanted to address problem statement 2, [problems with mentor availability](/school-placements/defining-our-problem-statements/#2.-problems-with-mentor-availability):

> Providers need high-quality mentors for Initial Teacher Training (ITT) trainees.
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

We showed participants a prototype journey of how they could search for a placement based on chosen criteria.

## How the prototype works

![Image showing the flow diagram for finding a school placement](experiment-1-find-school-placements-flow.png 'Find a school placement flow')

Finding a school placement has 5 steps:

1. Find school placements by location or by school
2. Select an age group
3. Select a subject
4. View a list of school placements
5. View an individual school placement

### Find school placements by location or by school

![Image showing find school placements by location or by school page](experiment-1-find-placement--school-or-location.png 'Find school placements by location or by school')

We display the list of locations in an autocomplete. We populate the list of places using the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview).

We display the list of schools in an autocomplete. We populate the list of schools from [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) data.

### Age group

![Image showing age group question](experiment-1-find-placement--age-group.png 'Age group question')

The question has 3 options:

- primary
- secondary
- further education

If the user has not answered the question, we show an error message:

> Select an age group

### Subject

We show a list of subjects depending on the age group previously selected.

Users must select at least one subject.

#### Primary subject specialism

![Image showing primary subject specialism question](experiment-1-find-placement--subject-primary.png 'Primary subject specialism question')

We show a list of primary subject specialisms if a user selects the ‘primary’ age group. These include:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

#### Secondary subject

![Image showing secondary subject question](experiment-1-find-placement--subject-secondary.png 'Secondary subject question')

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

![Image showing the list of school placements page](experiment-1-find-placement--results.png 'List of school placements')

Once the user has selected their location, subject level and subject, we show them a list of relevant school placements.

The list page includes:

- filters
- a list of individual placements
- pagination - if the list contains greater than 20 items

The filter panel includes example ‘contrast factors’:

- age group
- gender
- admissions policy

‘Contrast factors’ allow ITT providers to filter the type of school placement and focus the results on what they need.

The filters in the filter panel correspond to the information displayed in the individual school placement list item.

An individual placement item on the list includes:

- school name
- subject
- age range
- gender
- class size

### School placement details

![Image showing school placement details page](experiment-1-find-placement--details.png 'School placement details')

Selecting the school name or subject in the individual school placement list items takes the user to the school placement details page.

The school placement details page includes:

- school name
- subject
- a summary list containing age range, gender and class size
- contact details
- information about training with disabilities and other needs

## Further considerations

We considered some changes that we did not implement. These included:

- whether the service is behind a DfE Sign-in screen
- skipping questions if we already know the answer - for example, age group

## What we found

### Using GIAS to find new placements

ITT providers often use GIAS to generate a list of schools to place a trainee. Downloading data from GIAS and finding the correct person to contact is arduous, slowing down a provider’s ability to place trainees quickly and easily.

### ITT provider-school partnerships

ITT providers must establish whether the partnership is viable when they partner with a school.

Once providers and schools decide the partnership is viable, they carry out an onboarding process. Onboarding is a process that takes time, and providers prefer to do this off-service.

Not all provider curricula are the same. As part of the onboarding process, providers must train school-based mentors in their curriculum before the mentor and school can host trainees.

These constraints mean we cannot have a ‘Place trainee’ action on the ‘School placement details’ page.

### Mentor details are important

Mentor details are essential for ITT providers when arranging placements because it allows them to:

- keep accurate information on who is mentoring their trainees
- find new placement schools to work with

ITT providers often ask schools to share their mentors’ details. Showing them in service has significant utility.

### Difficult to place subjects

Participants saw value in being able to search for placement capacity within certain difficult-to-place subjects—for example, modern foreign languages.

## Next steps

Mentors are essential to a placement (the others being school and time).

Showing a mentor’s availability is helpful information for ITT providers to know so they can decide which schools to contact when placing a trainee.

Since mentors also have teaching commitments and different work patterns, it is helpful for a school to set the availability of a mentor for a specific placement.
