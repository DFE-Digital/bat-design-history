---
title: "Experiment 3: Exploring how providers might report information about school placements"
description: We changed our approach from schools and providers adding and finding school placements to providers reporting their school placement needs to DfE
date: 2023-08-03
tags:
  - school placements
  - alpha
  - reporting
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
---

In our previous 2 experiments, we focused on collecting data from schools to present to ITT providers in a search interface.

In this experiment, we changed our approach from schools and providers adding and finding school placements to providers reporting their school placement needs to DfE.

If the primary reason for collecting school placement data was so that DfE could understand the placements market and create targeted interventions, we decided to create an experiment that focused on the periodic collection of data.

This experiment also helped us understand if our first approach was valid.

## Problem statement

In this experiment, we addressed problem statement 1, [problems with reporting data](/school-placements/defining-our-problem-statements/#1.-problems-with-reporting-data):

> DfE needs a data reporting service to help share data between School Centred Initial Teacher Training (SCITTs), Higher Education Institutions (HEIs), and the DfE.
>
> We aren’t sharing data, so we don’t have the complete picture of school placement activity and can’t intervene when help is needed.
>
> **How might we** create a data reporting service so stakeholders can report complete placement data using standardised and easily accessible platforms?

## Experiment goals

The experiment had 2 goals:

1. understand if providers would be interested in contributing to a localised reporting tool
2. identify what results or information would be desired from providers

## How the prototype works

[![Image showing the flow diagram for reporting information about school placements](experiment-3-report-information-flow.png 'Reporting information about school placements')](/school-placements/experiment-3-exploring-how-providers-might-report-information-about-school-placements/experiment-3-report-information-flow.png)

Reporting information about school placements has a minimum of 13 steps:

1. start page
2. do you have a shortage of mentors or trainees?
3. what subjects does this shortage apply to?
4. intermediate check your answers - shortages
5. do you have a surplus of mentors or trainees?
6. what subjects does this surplus apply to?
7. intermediate check your answers - surpluses
8. which primary subject specialisms are hard to find placements for?
9. which secondary subjects are hard to find placements for?
10. what are the biggest challenges for you in managing ITT?
11. what are the biggest barriers to providing ITT placements for schools in your area?
12. final check your answers
13. confirmation page

### Start page

![Image showing the start page](experiment-3-report-information--start.png 'Start page')

This is the start of the report information journey.

The page explains why DfE needs the ITT provider to report information.

### Do you have a shortage of mentors or trainees?

![Image showing the shortage gaet question](experiment-3-report-information--shortage-question.png 'Question page: Do you have a shortage of mentors or trainees?')

The question has 3 options:

- mentors
- trainees
- none

If the user selects ‘none’, we move them to the next section.

### What subjects does this shortage apply to?

![Image showing the shortage subjects question](experiment-3-report-information--shortage-subjects.png 'Question page: What subjects does this shortage apply to?')

For this prototype, we only showed secondary subjects. However, the list will include all subjects for which the provider can create courses on Publish teacher training courses (Publish).

The shortage subjects question is repeated if the user has previously selected mentors and trainees (once for each option).

### Intermediate check your answers - shortages

![Image showing the intermediate check your answers page for reporting shortages](experiment-3-report-information--shortage-check-your-answers.png 'Intermediate check your answers page for reporting shortages')

On this intermediate check your answers page, the user can change:

- whether they have a shortage of mentors, trainees or neither
- subjects with a shortage

### Do you have a surplus of mentors or trainees?

![Image showing the surplus gate question](experiment-3-report-information--surplus-question.png 'Question page: Do you have a surplus of mentors or trainees?')

The question has 3 options:

- mentors
- trainees
- none

If the user selects ‘none’, we move them to the next section.

### What subjects does this surplus apply to?

![Image showing the surplus subjects](experiment-3-report-information--surplus-subjects.png 'Question page: What subjects does this surplus apply to?')

As with the shortage subjects list, we only showed secondary subjects for this prototype. However, the list will include all subjects for which the provider can create courses on Publish.

The surplus subjects question is repeated if the user has previously selected mentors and trainees (once for each option).

### Intermediate check your answers - surpluses

![Image showing the intermediate check your answers page for reporting surpluses](experiment-3-report-information--surplus-check-your-answers.png 'Intermediate check your answers page for reporting surpluses')

On this intermediate check your answers page, the user can change:

- whether they have surplus mentors, trainees or neither
- subjects with a surplus

### Which primary subject specialisms are hard to find placements for?

![Image showing the primary subject specialisms question it’s difficult to find placements for](experiment-3-report-information--difficulties-subjects-primary.png 'Question page: Which primary subject specialisms are hard to find placements for?')

The question includes a list of all primary subjects specialisms providers can use to create courses on Publish.

We also include a ‘none’ option. This is because some providers may not have any issues placing their trainees and are satisfied with the number of placements available within their partner network.

### Which secondary subjects are hard to find placements for?

![Image showing the secondary subjects question it’s difficult to find placements for](experiment-3-report-information--difficulties-subjects-secondary.png 'Question page: Which secondary subjects are hard to find placements for?')

The question includes a list of all secondary subjects providers can use to create courses on Publish.

We also include a ‘none’ option. This is because some providers may not have any issues placing their trainees and are satisfied with the number of placements available within their partner network.

### What are the biggest challenges for you in managing ITT?

![Image showing the question “What are the biggest challenges for you in managing ITT?”](experiment-3-report-information--challenges.png 'Question page: What are the biggest challenges for you in managing ITT?')

The question has 6 options:

- school awareness
- funding
- mentor availability
- school capacity
- Ofsted rating
- geographic area
- other

If the user chooses ‘other’, we show a text field for them to answer.

### What are the biggest barriers to providing ITT placements for schools in your area?

![Image showing the question “What are the biggest barriers to providing ITT placements for schools in your area?”](experiment-3-report-information--barriers.png 'Question page: What are the biggest barriers to providing ITT placements for schools in your area?')

The question has 5 options:

- funding
- mentor availability
- school capacity
- Ofsted rating
- geographic area
- other

If the user chooses ‘other’, we show a text field for them to answer.

### Final check your answers

![Image showing the final check your answers page](experiment-3-report-information--check-your-answers.png 'Final check your answers page')

The penultimate step is the ‘Check your answers’ page.

The page is split into 4 sections:

- shortage of mentors or trainees
- surplus of mentors or trainees
- difficulties finding placements
- challenges managing and barriers to providing placements

Users can change their answers to each section. When they have completed their change, we return them to this check your answers page.

### Confirmation page

![Image showing the confirmation page](experiment-3-report-information--confirmation.png 'Confirmation page')

The confirmation page is the final step in the reporting information journey.

## Further considerations

We need to consider the outcome of this version of the service. We did not have time to prototype something meaningful and instead focused on participant feedback.

## What we found

Participants suggested that there are never really any surpluses. This may be because they are only concerned with shortages.

Participants are happy to report problems facing their organisation if the information was used to solve them.

Some providers suggested a report on ITT in their local area would be valuable and help them make decisions.
