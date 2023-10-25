---
title: "Experiment 4: Finding mentors if you’re an ITT provider"
description: We iterated our second experiment, exploring how providers might find information about mentors
date: 2023-08-21
tags:
  - school placements
  - alpha
related:
  items:
    - text: "Experiment 1b: Finding school placements if you’re an ITT provider"
      href: /school-placements/experiment-1-finding-school-placements-if-youre-an-itt-provider/
    - text: "Experiment 2b: Iterating what we show to ITT providers when they search for school placements"
      href: /school-placements/experiment-2-iterating-what-we-show-to-itt-providers-when-they-search-for-school-placements/
---

In this experiment, we again addressed problem statement 2, [problems with mentor availability](/school-placements/defining-our-problem-statements/#2.-problems-with-mentor-availability):

> Providers need high-quality mentors for Initial Teacher Training (ITT) trainees.
>
> They need help finding mentors within their networks, limiting how many trainees they can recruit.
>
> **How might we** support providers to find enough mentors to maximise trainee capacity?

This is the third iteration in our approach to ‘Finding a school placement’.

## Experiment goals

The experiment had 2 goals:

- general fact-finding about mentors
- understanding how a provider might find a mentor

### General fact-finding about mentors

The fact-finding part of the research included:

- a general discussion about the participant’s role, their organisation and their partner school network
- a run-through of their pain points, core needs and any specific challenges they face with finding mentors

### Understanding how a provider might find a mentor

We showed participants a prototype journey of how they could search for a mentor based on chosen criteria.

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

![Image showing the location autocomplete](experiment-4-find-mentors--location-autocomplete.png 'Location autocomplete')

We display the list of schools in an autocomplete. We populate the list of schools from [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/) data.

![Image showing the school autocomplete](experiment-4-find-mentors--school-autocomplete.png 'School autocomplete')

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

#### Filters

The filter panel includes example ‘contrast factors’:

- age range
- key stage
- gender
- school type
- religious character
- SEND provision
- Ofsted rating
- admissions policy
- ECF training

We used data from GIAS to populate the school type, religious character, SEND provision and admissions policy filters.

‘Contrast factors’ allow ITT providers to filter the type of mentors and focus the results on what they need.

The filters in the filter panel correspond to the information displayed in the individual mentor list item.

#### List item

We separated the search results item into two parts:

- school details
- mentor details

We separated the details because ITT providers:

- need to select a placement school based on criteria that create a contrast between two placements - this information is separate from selecting a mentor
- must select a subject-related mentor to support a trainee during a placement
- need specific information regarding the mentors within the school to match them to a trainee

The school details include:

- school name
- subject
- age range
- key stage
- school type
- school gender
- religious character
- Ofsted rating
- admissions policy

The mentor details include:

- mentor name
- years mentoring
- years teaching
- which providers they trained with
- ECF training

#### Iteration of search results page

The search results list item has changed extensively between experiments 2 and 4.

![Image showing the change in search results content and layout between experiments 2 and 4](experiment-4-progression--search-result-item.png 'The change in search results content and layout between experiments 2 and 4')

We also changed the search results filters between experiments 2 and 4 to reflect the changes in the content we show on the search results list items.

![Image showing the change in search results filters between experiments 2 and 4](experiment-4-progression--search-results-filters.png 'The change in search results filters between experiments 2 and 4')

### Mentor details page

![Image showing mentor details page](experiment-4-find-mentors--details.png 'Mentor details')

Selecting the school name or subject in the individual school placement list items takes the user to the school placement details page.

The mentor details page is split into two sections:

- mentor details
- school details

#### Mentor details

The mentor details are split into two further sections:

- general mentor information
- lead mentor information

The general mentor information includes:

- mentor name
- years teaching
- years mentoring
- ITT provider training
- ECF training

The lead mentor information includes:

- mentor name
- email address

Lead mentors are also known as:

- ITT coordinator
- ITT lead

In the future, we must evaluate which term is the most appropriate for all our ITT providers and schools.

#### School details

The school details are split into two further sections:

- contrast factors
- contact details

The contrast factors include:

- age range
- key stage
- school type
- school gender
- religious character
- Ofsted rating
- admissions policy

The contact details include:

- email address
- telephone number
- website
- address

#### Iteration of the mentor details page

![Image showing the change in the details page content and layout between experiments 2 and 4](experiment-4-progression--details-page.png 'The change in the details page content between experiments 2 and 4')

The mentor details page has changed significantly between experiments 2 and 4. We have:

- split the page between mentor content and school content
- removed the section called ‘training with disabilities and other needs’
- updated the information we display about a school (the ‘contrast factors’) and the mentor.

## What we found

When asking schools about their mentors, providers often get a generic list back and don't know who the mentors are.

When asking schools about their mentors, schools can take a varying amount of time to respond, which affects planning placements.

Participants said our proposed service could reduce administration time and disparate email contact.

A lead mentor explained that our proposed service could help filter out requests on placements their school can't fulfil – for example, a subject they don’t have a mentor for.

*[ECF]: Early Career Framework
*[ITT]: Initial Teacher Training
