---
title: "Experiment 5: Managing mentors if you’re a school"
description: Iterating how schools manage their mentors’ information
date: 2023-09-06
tags:
  - school placements
  - alpha
  - mentors
related:
  items:
    - text: "Experiment 1a: Adding school placements if you’re a school"
      href: /school-placements/experiment-1-adding-school-placements-if-youre-a-school/
    - text: "Experiment 1b: Finding school placements if you’re an ITT provider"
      href: /school-placements/experiment-1-finding-school-placements-if-youre-an-itt-provider/
    - text: "Experiment 2a: Iterating how schools add school placements"
      href: /school-placements/experiment-2-iterating-how-schools-add-school-placements/
    - text: "Experiment 2b: Iterating what we show to ITT providers when they search for school placements"
      href: /school-placements/experiment-2-iterating-what-we-show-to-itt-providers-when-they-search-for-school-placements/
    - text: "Experiment 4: Finding mentors if you’re an ITT provider"
      href: /school-placements/experiment-4-finding-mentors-if-youre-an-itt-provider/
---

The focus of this experiment was on how schools manage their mentors’ information. This included:

- adding new mentors to the service
- updating existing mentor information
- removing mentors

In this iteration, we again focused our efforts on problem statement 1, [problems with reporting data](/school-placements/defining-our-problem-statements/#1.-problems-with-reporting-data):

> DfE needs a data reporting service to help share data between School Centred Initial Teacher Training (SCITTs), Higher Education Institutions (HEIs), and the DfE.
>
> We aren’t sharing data, so we don’t have the complete picture of school placement activity and can’t intervene when help is needed.
>
> **How might we** create a data reporting service so stakeholders can report complete placement data using standardised and easily accessible platforms?

## Experiment goals

The experiment had 2 goals:

- general fact-finding about school placements and mentors
- understanding how a school might advertise a school placement

### General fact-finding about school placements and mentors

The fact-finding part of the research included:

- a general discussion about the participant’s role, their organisation and their ITT provider relationships
- a run-through of their pain points, core needs and any specific challenges they face with school placements and mentors

### Understanding how a school might advertise a school placement

We showed the participant a prototype journey of how a school could post an opening for a placement for ITT providers to view, focusing on mentor details.

## Mentor list

![Image showing the mentor list page](experiment-5-manage-mentors--list.png 'Mentor list page')

The mentor list includes:

- mentor name
- teacher reference number (TRN)
- status
- subject
- age range
- key stage

We will paginate the list if it contains greater than 20 items.

From the mentor list, users can:

- add new mentors
- view existing mentors


## Adding mentors

![Image showing the flow diagram for adding mentors](experiment-5-add-mentor-flow.png 'Adding mentors flow')

Finding a mentor has 5 steps:

1. Personal details
2. Subject
3. Age range
4. Key stage
5. Check your answers

### Personal details

![Image showing personal details page](experiment-5-add-mentor--personal-details.png 'Personal details page')

The personal details page includes:

- first name
- last name
- teacher reference number (TRN)
- email address

#### Error messages

![Image showing personal details page with errors](experiment-5-add-mentor--personal-details-error.png 'Personal details page with errors')

All fields are required.

If the user has not entered a first name, we show an error message:

> Enter a first name

If the user has not entered a last name, we show an error message:

> Enter a last name

If the user has not entered a teacher reference number (TRN), we show an error message:

> Enter a teacher reference number (TRN)

If the user has not entered an email address, we show an error message:

> Enter an email address

If the user has not entered a valid email address format, we show the error message:

> Enter an email address in the correct format, like name@example.com

### Subject

We show a list of subjects depending on the education phase of the school.

#### Primary subject specialism

We list primary subject specialisms if the school is in the ‘primary’ education phase. These include:

- Primary
- Primary with English
- Primary with geography and history
- Primary with mathematics
- Primary with modern languages
- Primary with physical education
- Primary with science

#### Secondary subject

![Image showing secondary subject question](experiment-5-add-mentor--subject-secondary.png 'Secondary subject question')

We list secondary subjects if the school is in the ‘secondary’ education phase. These include:

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

#### Error message

![Image showing secondary subject question with an error](experiment-5-add-mentor--subject-secondary-error.png 'Secondary subject question with an error')

If the user has not answered the question, we show an error message:

> Select a subject

### Age range

We show a list of age ranges depending on the education phase of the school.

#### Primary age range

If the school’s education phase is primary, we show:

- 3 to 7
- 5 to 11
- 7 to 11
- 7 to 14 - middle years

#### Secondary age range

![Image showing the secondary age range question](experiment-5-add-mentor--age-range-secondary.png 'Secondary age range question')

If the school’s education phase is secondary, we show:

- 11 to 16
- 11 to 18
- 14 to 19

#### Error message

![Image showing the secondary age range question with an error](experiment-5-add-mentor--age-range-secondary-error.png 'Secondary age range question with an error')

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select an age range

### Key stage

We show a list of key stages depending on the education phase of the school.

#### Primary key stage

If the school’s education phase is primary, we show:

- Early years
- Key stage 1
- Key stage 2

#### Secondary key stage

![Image showing the secondary key stage question](experiment-5-add-mentor--key-stage-secondary.png 'Secondary key stage question')

If the school’s education phase is secondary, we show:

- Key stage 3
- Key stage 4
- Key stage 5

#### Error message

![Image showing the secondary key stage question with an error](experiment-5-add-mentor--key-stage-secondary-error.png 'Secondary key stage question with an error')

We do not default the question to a specific answer.

If the user has not answered the question, we show an error message:

> Select a key stage

### Check your answers

![Image showing check your answers page](experiment-5-add-mentor--check-your-answers.png 'Check your answers page')

The final step is the ‘Check your answers’ page. The user can change:

- first name
- last name
- teacher reference number (TRN)
- email address
- subject
- age range
- key stage

When the user adds a mentor, we send a confirmation email to the mentor.

## Updating mentors

### Mentor details

We split the mentor details page into 2 parts:

- basic details
- additional details

Users can change all the mentor’s details. Doing so will show similar pages to those used in the ‘Add mentor’ flow.

#### Basic details

![Image showing a mentor’s basic details](experiment-5-view-mentor--details.png 'Mentor’s basic details')

A mentor’s basic details include:

- first name
- last name
- teacher reference number (TRN)
- email address
- subject
- age range
- key stage

#### Additional details

![Image showing a mentor’s additional details](experiment-5-view-mentor--additional-details.png 'Mentor’s additional details')

A mentor’s additional details include:

- date qualified as a teacher
- qualifications
- date started mentoring
- provider training
- SEND training
- subject networks and associations
- other experiences

We use the Database of Qualified Teachers (DQT) to populate:

- date qualified as a teacher
- qualifications

## Removing mentors

![Image showing the remove mentor page](experiment-5-remove-mentor.png 'Remove mentor page')

A user can remove a mentor from the school because the mentor have left the school, decided not to be a mentor or for another reason.

When the user removes a mentor, we send a confirmation email to the mentor.

## Further considerations

We considered some changes that we did not implement. These included:

- finding the mentor’s details using the Database of Qualified Teachers (DQT)
- showing ‘7 to 14 - middle years’ for both education phases (primary and secondary)
- showing ‘Key stage 2’ if ‘7 to 14 - middle years’ age range is chosen
- skipping questions if we already know the answer - for example, age range
- filtering the mentor list

### Finding the mentor’s details using DQT

In the add user flow, we ask for a mentor’s name, email address and TRN. We can use the name and TRN to look up the mentor details in DQT, so we do not need to duplicate information, for example, the date they qualified as a teacher and their qualifications.

### Showing ‘7 to 14 - middle years’ for both subject levels

Regardless of the education phase, we should always show the ‘7 to 14 - middle years’ age range option since it applies to both ‘primary’ and ‘secondary’ phases.

### Showing ‘Key stage 2’ if ‘7 to 14 - middle years’ age range is chosen

Key stages and age ranges are linked. If the user has chosen the ‘7 to 14 - middle years’ age range, we must show ‘Key stage 2’ in the list of key stage options.

### Skipping questions if we already know the answer

We will know a lot of information about the schools from [Get information about schools (GIAS)](https://get-information-schools.service.gov.uk/). This information means we can skip questions in the ‘Add mentor’ flow for which we know the answers, such as age range.

### Filtering the mentor list

For schools with a long list of mentors, we will paginate the information. There is also utility in being able to filter the list of mentors to make it easier for users to find the mentor they require.

## What we found

Lead mentors would update information about their mentors each term, typically after each placement has concluded..

Linking school placements with trainee information would be very useful. Both ITT providers and schools need to record this information for auditing and tracking purposes. By holding this information centrally, it would make it easier for ITT providers and schools to meet their obligations.

Participants like the idea of having a status for each mentor. However, if it is related to the mentor’s availability, we need to take into account which placement the mentor is assigned (busy).

There is value in showing what additional needs a school and mentor can support. One particpanted talked about how hard it was for them to find a placement that supported a partially sighted trainee.

A future service could formalise the mentor profession with standard qualifications, which would help them be more accountable and appear more official.

*[DQT]: Database of Qualified Teachers
*[GIAS]: Get information about schools
*[ITT]: Initial Teacher Training
*[SEND]: Special Educational Needs and Disabilities
*[TRN]: Teacher Reference Number
