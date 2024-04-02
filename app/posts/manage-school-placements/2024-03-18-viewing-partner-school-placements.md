---
title: Viewing partner school placements
description: Exploring how we might show partner school placements to ITT providers
date: 2024-03-18
tags:
  - placements
related:
  items:
    - text: Finding new school placements
      href: /manage-school-placements/finding-new-school-placements/
    - text: Adding placements
      href: /manage-school-placements/adding-placements/
    - text: Viewing partner schools
      href: /manage-school-placements/viewing-partner-schools/
screenshots:
  items:
    - text: Partner schools placements list
      src: partner-schools-placements--list.png
    - text: Partner schools placements list - empty
      src: partner-schools-placements--list-empty.png
    - text: Partner schools placements details
      src: partner-schools-placement--details.png
---

In Alpha, we ran two experiments to understand how ITT providers might find school placements:

- [Experiment 1b: Finding school placements if you’re an ITT provider](https://becoming-a-teacher.design-history.education.gov.uk/manage-school-placements/experiment-1-finding-school-placements-if-youre-an-itt-provider/)
- [Experiment 2b: Iterating what we show to ITT providers when they search for school placements](https://becoming-a-teacher.design-history.education.gov.uk/manage-school-placements/experiment-2-iterating-what-we-show-to-itt-providers-when-they-search-for-school-placements/)

Based on these experiments, we wanted to explore how we might show partner school placements to ITT providers and how they might manage placements in their network of schools.

We added a way for accredited providers and lead schools to search and filter placements from their partner schools.

We display a list of placements that users can filter by:

- subject
- school type
- gender
- religious character
- Ofsted rating

This placements list is separate from the list in the ‘Find new placement’ journey, as users can assign trainees to placements from partner schools.

We did not have time to design the concept entirely, but we had enough to explore the idea.

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

We chose to display these details and filters because providers use them as contrast factors (trainees need to do two contrasting placements).

### Placement details

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
- Address

We included an ‘Assign trainee’ button in the prototype to test how users felt about managing and assigning placements through this service.

We assumed that providers would assign a trainee to a placement if they already had a relationship with the school. We also wanted to understand what they expected the process of appointing a trainee to look like.

## Further considerations

We considered some changes that we did not implement. These included:

- focusing on managing placements
- introducing placement statuses
- searching by trainee location

### Focusing on managing placements

From previous research, we know that schools and ITT providers manage the placement process using spreadsheets and forms often shared via email. Some ITT providers also use off-the-shelf software.

We considered replicating, in part, the process of managing placements, but we needed to understand more about how ITT providers work with their partner schools and send trainees to the schools.

### Introducing placement statuses

Placements have a life cycle, moving from least well-defined to fully defined. For example, when a school creates a placement, it may only know the placement subject. Later, the school may allocate a mentor to the placement, and the ITT provider may offer a trainee. We will send the information to Register trainee teachers when the placement is complete.

We considered capturing this process in a series of statuses, but we need to understand how schools and providers manage the placement life cycle before implementing something.

### Searching by trainee location

We considered adding a search by trainee location, but because of time constraints, we could not implement this type of search. We will implement this in a future piece of work.
