---
title: Adding academic and other relevant qualifications
description: Encourage candidates to demonstrate their subject knowledge and broader academic achievements.
date: 2020-03-16
tags:
- AN021
---
Beyond the qualifications required for teacher training, candidates should provide details of other qualifications they have to demonstrate their subject knowledge and broader academic achievements. Giving this information is not mandatory, but it will likely improve a candidate’s chance of being invited to interview.

Since the service launched in November, candidates have not felt compelled to complete this section fully. We initially tried to address the issue by renaming the section from ‘Other relevant qualifications’ to ‘Academic and other relevant qualifications’. However, some candidates were still not listing all their other qualifications, in particular A Levels and other GCSEs.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Design considerations

The design has been updated so that we ask for qualifications over two steps.

In the first step, we ask a candidate what type of qualification they want to add and give them the choice of ‘GCSE’, ‘AS Level’, ‘A Level’ or ‘Other’.

In the second step, we ask a candidate for details of this qualification (subject, grade, year the qualification was awarded etc). Asking for the type of qualification in the first step means that, in the future, we can provide structured responses if a certain type of qualification can only be awarded for a known number of subjects, using data provided by Ofqual.

Finally, to make it easier for candidates to enter multiple qualifications (and encourage this behaviour), we ask them if they want to add another qualification of the same type, add another qualification of a different type, or finish adding qualifications for now. We also prefill the values for institution and year using the answers they gave previously.

## Hypotheses

* If we ask candidates to choose from a range of common qualification types
  Then they will have a better idea of what qualifications they should enter.

* If we ask candidates if they want to add another qualification
  Then they will enter multiple qualifications.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Qualification type",
    caption: "Start by asking for the type of qualification. Options include the most common English qualifications (GCSE, AS Level and A Level) as well as an option to add a qualification of another type."
  }, {
    text: "Qualification details",
    caption: "Candidates are prompted to add another qualification, with the question defaulting to adding another qualification of the current type."
  }]
}) }}
