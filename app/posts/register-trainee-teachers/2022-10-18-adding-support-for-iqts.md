---
title: Adding support for iQTS
description: Adding support for registering trainees studying international qualified teacher status (iQTS)
date: 2022-10-18
---

International qualified teacher status (iQTS) is a new teaching qualification currently being piloted by the DfE.

From the [introduction policy paper](https://www.gov.uk/government/publications/international-qualified-teacher-status-iqts/introducing-the-international-qualified-teacher-status-iqts-pilot):

{% set insetContent %}

iQTS is a new, UK government-backed international teaching qualification which will be recognised by DfE as equivalent to English qualified teacher status (QTS) (via an amendment to regulations). Accredited English initial teacher training (ITT) providers will offer iQTS to trainees all over the world. It will lead to the automatic award of English QTS on successful completion.

iQTS aims to:

* provide opportunities for accredited English ITT providers to expand into the growing international teacher training market
* make high quality training accessible around the world and allow trainees to benefit from evidence-based ITT
* support schools outside the UK to recruit, retain and develop local talent
* increase the global pool of quality teachers and support global mobility within the teaching profession

{% endset %}

{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}
{{ govukInsetText({
  text: insetContent
}) }}


## Registering trainees on iQTS

We’re updating Register to support registering these iQTS trainees. Having met with the iQTS team, we don’t think that many changes will be required to support this new qualification. While the pilot is running, providers will register their trainees manually in Register – just like they do for Early years and Assessment only routes.

## How we’re treating iQTS

We think it will make sense to model iQTS as a new training route - like School Direct or Provider led. Once we know it’s iQTS we can ask for appropriate details about the training. Our task list pattern is already set up to show or hide sections depending on route.

## Changes we’ve made

We’ve added a new route to the route selection page, and a new task list section ‘International training details’ to collect any iQTS specific information we need. Although this is a new qualification, trainees will be granted QTS at the end. This means our existing ‘Recommend trainee for QTS’ flow does not need to be updated.

We decided to separate this new iQTS section from the ‘Course details’ section in the task list for a few reasons, including:

* it will give us the flexibility to add more details if we need to collect them, like the language the trainee is studying in
* the course details section in the task list is already quite complicated, especially when a provider needs to change a trainee’s course so adding in more complexity didn’t make sense

Originally we called this new section ‘iQTS details’ however, because it follows on from a section called ‘Course details’ it felt like a duplication. We decided to call the new section ‘International training details’ because we’re only asking about the international aspect of the course but not its specific details like what the trainee has chosen to study.

## Sections not included

We’ve removed several sections from the standard record because they won’t make sense for iQTS. These include funding, schools, and placements.

There may be a need to collect placement information in the future - we’d have to do further design work to support international locations.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 2,
  items: [
  {
    id: "1. route selection",
    text: "Route selection page"
  },
  {
    id: "2. task-list",
    text: "Task list with new section for ‘International training details’"
  },
  {
    id: "3. country of training",
    text: "New question asking country of training"
  },
  {
    id: "4. confirmation page",
    text: "International training details confirmation page"
  }]
}) }}
