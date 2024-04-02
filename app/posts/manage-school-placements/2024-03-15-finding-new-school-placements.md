---
title: Finding new school placements
description: Exploring how ITT providers might find new school placements for their trainees
date: 2024-03-15
tags:
  - placements
related:
  items:
    - text: Viewing partner school placements
      href: /manage-school-placements/viewing-partner-school-placements/
    - text: Adding placements
      href: /manage-school-placements/adding-placements/
    - text: Adding mentors
      href: /manage-school-placements/adding-mentors/
screenshots:
  items:
    - text: Find school placements by location or by school
      src: find-placements--school-or-location.png
    - text: Find school placements by location or by school - select an option error
      src: find-placements--school-or-location-error.png
    - text: Find school placements by location or by school - enter a city, town or postcode error
      src: find-placements--location-error.png
    - text: Find school placements by location or by school - enter a school name, URN or postcode error
      src: find-placements--school-error.png
    - text: Subject level
      src: find-placements--subject-level.png
    - text: Subject level - error
      src: find-placements--subject-level-error.png
    - text: Primary subject specialisms
      src: find-placements--subject-primary.png
    - text: Primary subject specialisms - error
      src: find-placements--subject-primary-error.png
    - text: Secondary subjects
      src: find-placements--subject-secondary.png
    - text: Secondary subjects - error
      src: find-placements--subject-secondary-error.png
    - text: Placements list
      src: placements--list.png
    - text: Placements list - empty
      src: placements--list-empty.png
    - text: Placement details
      src: placement--details.png
---

In Alpha, we ran two experiments to understand how ITT providers might find school placements:

- [Experiment 1b: Finding school placements if you’re an ITT provider](https://becoming-a-teacher.design-history.education.gov.uk/manage-school-placements/experiment-1-finding-school-placements-if-youre-an-itt-provider/)
- [Experiment 2b: Iterating what we show to ITT providers when they search for school placements](https://becoming-a-teacher.design-history.education.gov.uk/manage-school-placements/experiment-2-iterating-what-we-show-to-itt-providers-when-they-search-for-school-placements/)

Based on these experiments, we refined the journey for ITT providers to find placements in Manage school placements (Placements).

We collect information about location, subject level and subject to show a list of placements that users can filter. The results are placements that schools have created through the service.

## How it works

### Placement list

On the placements list page, we show:

- a ‘Find new placement’ button
- a list of placements in alphabetical order, ordered by subject and then partner school, for each partner school in the ITT provider’s network.
- a school search - by school name, unique reference number (URN) or postcode
- filters

The filters include:

- subject
- school type
- gender
- religious character
- Ofsted rating

In the subject filter, we use subject data from [Publish teacher training courses (Publish)](https://www.publish-teacher-training-courses.service.gov.uk/).

We use data from [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) in the school type, gender, religious character, and Ofsted rating filters.

For each placement in the list, we show:

- school name
- subject(s)
- age range
- school type
- gender
- religious character
- urban or rural location
- Ofsted rating
- mentor name(s) - if known
- trainee - if assigned

We link the school name and subject to the placement details page.

We paginate the list if the placements list contains more than 25 placements.

### Finding a new placement

Selecting ‘Find new placement’ on the placements list starts the find placement flow.

[![Find new placement flow](find-placements--flow.png 'Find new placement flow')](find-placements--flow.png)

The ‘Find new placement’ flow has five steps:

1. Find a placement by location or by school
2. Subject level
3. Subject
4. Search results
5. Placement details

#### Find a placement by location or by school

The first step in the ‘Find new placement’ flow is to select whether to search by location or school.

We show three radio button options:

- By city, town or postcode
- Across England
- By school

If the user selects ‘By city, town or postcode’, we show an autocomplete using the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/autocomplete).

If the user selects ‘By school’, we show an autocomplete that includes all open schools in England using data from GIAS.

##### Validation rules

Users must answer the question. If they do not select any option, we show an error message:

> Select find a placement by location or by school

If a user selects ‘By city, town or postcode’ but does not enter anything into the autocomplete, we show an error message:

> Enter a city, town or postcode

If a user selects ‘By school’ but does not enter anything into the autocomplete, we show an error message:

> Enter a school name, URN or postcode

#### Subject level

The second step is to select the subject level. We show two radio button options:

- primary
- secondary

##### Validation rules

If a user does not select a subject level, we show an error message:

> Select a subject level

#### Subject

The third step is to select the subject.

If the user has previously chosen the ‘Primary’ or ‘Secondary’ subject levels, we show different subject options.

We use the list of subjects from Publish.

We show the subject options as checkboxes.

If the subject level is ‘Primary’, we show:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

If the subject level is ‘Secondary’, we show:

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

##### Validation rules

If a user does not select a primary subject specialism, we show an error message:

> Select at least one primary subject specialism

If a user does not select a secondary subject, we show an error message:

> Select at least one secondary subject

#### Search results

On the search results page, we show:

- the number of placements found
- the search criteria - including a ‘Change’ link
- a list of placements in alphabetical order -  ordered by subject and then school.
- filters

The filters include:

- school type
- gender
- religious character
- Ofsted rating

For each placement in the list, we show:

- school name
- subject(s)
- age range
- school type
- gender
- religious character
- urban or rural location
- Ofsted rating
- mentor name(s) - if known

We link the school name and subject to the placement details page.

We paginate the list if the placements list contains more than 25 placements.

We chose to display these details and filters because providers use them as contrast factors (trainees need to do two contrasting placements).

#### Placement details

The placement details page contains three sections:

- school details - also known as ‘Contrast factors’
- mentor details
- contact details

The school details include:

- school type
- school phase
- gender
- age range
- religious character
- urban or rural
- admission policy
- percentage of free school meals
- Ofsted rating

We show the school name and subject(s) in the page heading.

The mentor details include:

- mentor name - if known

The contact details include:

- placement coordinator - this is who the ITT provider will typically contact to arrange the placement
- email address of the placement coordinator
- website
- school address

## Further considerations

We considered some changes that we did not implement. These included:

- including distance information
- not making location and subject criteria mandatory

### Including distance information

We considered including distance information in the search results if the user had selected to search by a postcode or town. We also considered sorting the results by distance.

It was unclear what distance measure was most helpful to the user in this context, so we excluded it to see how users responded to the research.

### Not making location and subject criteria mandatory

We considered displaying all placement results and including a location search and subject filter. However, we chose to test the journey where users must select location and subject before seeing the search results.

We believe users will always want to search by these two parameters, as it makes the results more meaningful.
