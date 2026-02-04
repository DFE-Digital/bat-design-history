---
title: Changes to the way we talk about qualified teacher status (QTS)
description: In 2025, the Department for Education (DfE) changed the way it talked about QTS across all its services
date: 2026-02-04
tags:
  - qts
  - content
  - policy
---

In 2025, the Department for Education (DfE) changed how it spoke about QTS across all its services.

The Register trainee teachers service is one of the only places where we follow a trainee's progression throughout their QTS journey. This meant we had to find additional wording to use alongside the policy team's recommended wording.

We completed several activities to determine the best way to add new wording without causing a large-scale change. We then agreed on the changes with policy.

We worked alongside content designers from other teams to ensure consistency across DfE.

## Recommending and bulk recommending

One of the largest features of the Register service is a journey named recommending trainees for QTS.

'Recommend' was one of the words we could no longer use, but it was a key part of how the Register service works. Our users are familiar with using the 'recommend' feature as part of yearly academic activities.

## Workshopping new language

The first suggested change proved awkward and caused problems when trying to fit it into the rest of the service. So we organised a user-centred design (UCD) workshop.

Three members of the UCD team joined the workshop. Each person had a role:

- one person clicked through the prototype and talked out loud about what they were doing and thinking
- 2 designers took notes in Lucid, writing down anything that explained the process without using the current language

This is when we came up with the idea of a trainee 'changing status'. A trainee's journey is focused on gaining Qualified Teacher Status or Early Years Teacher Status. The new wording seemed to fit the idea of a trainee changing state from unqualified to qualified.

## Other language changes

We agreed that once the trainee has passed their initial teacher training (ITT), they will 'gain' QTS. Having QTS is referred to as 'holding' QTS.

We have completely removed the previous words around 'award', 'awarding' and 'awarded'. They are no longer policy compliant.

## Where changes have been made

We have made changes to:

- the front-end of the service
- header names in CSVs and APIs
- URL strings
- guidance

We have not yet made changes to:

- the code
- API endpoints, for example ,`recommend-for-qts`
- internal values for trainee state, for exampl,e `recommend_for_award` and `awarded`

We will make these changes in due course. We decided that making small, gradual changes to the code would cause more issues in the short term.

## Summary of the changes

| Previous wording | New wording |
| --- | --- |
| Recommend | Change status to QTS or EYTS<br>Changing a trainee's status<br>Change trainee statuses |
| Award, awarding, awarded | Gained QTS<br>Gaining QTS<br>Holds QTS<br>Holding QTS |
| Bulk recommend | Bulk change status<br>Update trainee statuses<br>Bulk upload trainee status changes |
| Check you you'll recommend | Check whose status has changed |
| Meet standards | Meet requirements (meet standards - still acceptable too) |
