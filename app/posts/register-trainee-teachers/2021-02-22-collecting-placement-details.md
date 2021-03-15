---
title: Collecting placement details
description: A first pass at collecting a trainees’ placement details 
date: 2021-02-22
---

{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "figure/macro.njk" import appFigure with context %}

Our internal data consumers need us to make inputting training placement details mandatory  before recommending trainees for their qualifications. There is a need to ensure there are enough ITT placement opportunities to meet the potential rise in trainee teachers from 2021 onwards yet there is currently a significant knowledge gap in relation to the current placement capacity and behaviour of the ITT market.

DTTP allows users to input placement details but the fields are optional and, as a result, data is rarely entered. Additionally, the majority of data is inputted in DTTP before providers know the details of all trainee placements so entering placement data would require the providers to revisit the record at a later date.

## Training placement criteria

Experience of teaching in schools is a requirement to receive qualified teacher status. For the vast majority of trainees, this experience is acquired through training placements. 

Due to COVID-19 and the resulting disruption of schools across England, it has not been possible for many trainee teachers to be physically placed in schools. 

Current guidance in regards to training in schools states:

>“..training programmes are designed to provide trainee teachers with sufficient time being trained in schools (see note 5), early years and/or further education settings to enable them to demonstrate that they have met all the standards for QTS. This means they would typically be structured to include at least the following periods of time to be spent in training in schools, early years or further education settings (see note 6):
>
>* a four-year undergraduate programme - 160 days (32 weeks)
>* a one, two or three-year undergraduate programme - 120 days (24 weeks)
>* a secondary graduate (non-employment-based) programme - 120 days (24 weeks)
>* a primary graduate (non-employment-based) programme - 120 days (24 weeks)
>* employment-based programme - as determined by the training programme”

Source: [Initial teacher training (ITT): criteria and supporting advice](https://www.gov.uk/government/publications/initial-teacher-training-criteria/initial-teacher-training-itt-criteria-and-supporting-advice#c23-training-in-schools)

However, the pre-COVID guidance is far more specific about the number of schools that trainee must have taught in:

>“Trainees must have taught in 2 schools prior to the award of QTS. It is not sufficient for trainees only to have had experience of working in 2 schools. Providers may wish to consider whether a trainee with prior assessed experience of teaching in a school has gained enough relevant teaching experience to allow the provider confidently to count that previous teaching as one of the 2 schools specified.”

We do not know what the guidance will be in the next academic year. This will have a significant impact on how  we collect placement details.

## Designs

### When adding a new trainee

{{ appFigure({
  image: {
    file: "adding-a-new-trainee.png",
    alt: "Adding a new trainee"
  },
  caption: "‘Placement details’ has been added to the ‘About their Training’ section on the draft overview screen for all routes except assessment only."
}) }}

#### Does the user have placement details yet?

When do users know placement details? It differs. We need to take 3 potential scenarios into consideration at the time a draft is created:

* all placements details are known
* some placement details are known
* no placement details are known

Answering ‘No, I’ll add them later’ marks the section complete, while answering ‘Yes, I can add at least one of them now’ takes the user to the ‘Placement details’ section.

{{ appFigure({
  image: {
    file: "does-the-user-have-placement-details-yet.png",
    alt: "Do you have the trainee's placement details?"
  }
}) }}

#### Adding a placement

We ask for the placement school’s unique reference number (URN) in a plain text field. We assume there are many schools with similar names so we need a unique identifier to tell them apart. 

The next iteration on this field will most likely be a search with autocomplete results.

In DTTP, placement duration is recorded in total number of days. We’re assuming, however, that some users might not have start and finish dates or know the exact number of days at the time of inputting the data.  We also don’t think it’s clear whether users should only count weekdays or full weeks.

By asking for a start month and duration in weeks, we’re hoping to satisfy the need for placement data whilst not hindering our users’ ability to complete the tasks of creating and managing trainee records in a timely manner.

{{ appFigure({
  image: {
    file: "placement-details.png",
    alt: "Placement detail"
  },
  caption: "Users need to confirm they have completed adding all known placement details at the time of editing this draft."
}) }}

#### Confirm placement details

{{ appFigure({
  image: {
    file: "confirm-placement-details.png",
    alt: "Confirm placement details"
  },
  caption: "Users need to confirm they have completed adding all known placement details at the time of editing this draft."
}) }}

{{ appFigure({
  image: {
    file: "confirm-placement-details-not-known.png",
    alt: "Confirm placement details - placements not known"
  },
  caption: "An alternative summary card on the ‘Confirm placement details’ page is displayed if the user has answered ‘No, I’ll add them later’."
}) }}

### After the record has been submitted for TRN

We’ve introduced a banner to draw the user’s attention to the fact that further details are required before an outcome can be recorded.


{{ appFigure({
  image: {
    file: "trainee-record.png",
    alt: "Trainee record"
  },
  caption: "This record requires additional details before an outcome can be recorded"
}) }}

{{ appFigure({
  image: {
    file: "confirm-placements-on-record.png",
    alt: "Confirm placement details"
  },
  caption: "The ‘Confirm placement details’ page when only one placement has been recorded."
}) }}

#### Confirm placements details are complete

Once a record has had the minimum required number of placements added (currently set to 2), the prompt in the banner changes from ‘Add placement details’ to ‘Confirm training placement details are complete’.

{{ appFigure({
  image: {
    file: "confirm-placements-on-record.png",
    alt: "Trainee record: confirm placements"
  }
}) }}

#### Have all placements been added?

Once 2 or more placements have been added, the ‘Confirm placement details’ page changes state. The user can now confirm that all placements have been added by checking the ‘Have all placements been added?’ input.

{{ appFigure({
  image: {
    file: "confirm-placement-details-minimum-added.png",
    alt: "Confirm placement details"
  }
}) }}

#### Ready to recommend for QTS

Once the minimum number of placements has been added and the user has confirmed that all placements have been added the trainee can now be recommended for QTS.   

{{ appFigure({
  image: {
    file: "trainee-record-ready-to-recommend.png",
    alt: "Trainee record: ready to recommend"
  }
}) }}

## Testing these designs

Providing placement details has never been mandatory in the process of recommending a trainee for QTS. We’re curious to see how our users respond to this change in process.

Will our users notice the banner prompting for placement details? We hope to validate this.

We also want to understand more about the details providers keep, for example:

* do they know the placement location’s URN?
* do they know the start and end dates for each placement?  

## Future work

We’ll look into:

* accommodating for trainees who got their teaching experience abroad
* accomodating for the scenario where a trainee with enough prior teaching experience does not need placements in order to satisfy the criteria for QTS
