---
title: Reasons for rejection iteration 6
description: Getting the new flow ready for production.
date: 2021-12-02
tags:
  - AN029
screenshots:
  items:
    - text: Reject - reasons (collapsed)
      src: rejection-reasons--collapsed.png
    - text: Reject - reasons (expanded)
      src: rejection-reasons--expanded.png
    - text: Reject - check answers
      src: rejection-check-answers.png
    - text: Reject - feedback
      src: rejection-feedback.png
    - text: Give feedback - reasons (collapsed)
      src: give-feedback-reasons--collapsed.png
    - text: Give feedback - reasons (expanded)
      src: give-feedback-reasons--expanded.png
    - text: Give feedback - check answer
      src: give-feedback-check-answers.png
    - text: Give feedback - feedback
      src: give-feedback-feedback.png
related:
  items:
    - text: Research playback slides
      href: https://docs.google.com/presentation/u/1/d/1XX9FH8yW2MLC8kiypKzS5ax81PMC-eq_36e3ZUkggO0/edit#slide=id.g100bb4a0b51_1_113
---

We recently redesigned the way users [reject applications and give feedback to candidates](/manage-teacher-training-applications/reasons-for-rejection-iteration-5/).

The candidate user need this meets is:

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

We tested our new approach with 11 users in person and by sending 61 users a tree test.

It tested very well in comparison with the [previous version](/manage-teacher-training-applications/reasons-for-rejection-iteration-5/). However, we have made some changes.

## What we changed

We have:

- changed the wording of some of the reasons
- decided to only show certain reasons when they’re relevant to the application

### Changing the reasons within “Qualifications”

We changed:

- “No maths GCSE grade 4 &#40;C&#41; or above, or accepted equivalent” to “No maths GCSE at minimum grade 4 or C, or equivalent”
- “No English GCSE grade 4 &#40;C&#41; or above, or accepted equivalent” to “No English GCSE at minimum grade 4 or C, or equivalent”
- “No science GCSE grade 4 &#40;C&#41; or above, or accepted equivalent” to “No science GCSE at minimum grade 4 or C, or equivalent”

The new labels are clearer and more concise.

We changed “No degree” to “No bachelor’s degree, or equivalent” because:

- matches what candidate’s are asked
- it’s more specific - for example, a foundation degree is not accepted, for

### Changing “Communication and scheduling” to “Communication, attendance and scheduling”

In the tree test, we asked users to select the right option for when the candidate did not show up for their interview.

44 people took the correct path. But 17 people chose ‘other’ indicating that the label did not work well enough.

So we changed “Communication and scheduling” to “Communication, attendance and scheduling” to make it clearer.

### Changing “Presentation skills” to “Teaching demonstration”

Our analysis shows that 14% of applications are rejected due to performance at interview.

We asked users to reject an application on the basis that the candidate did not perform well at interview. Some users did not instantly tick “Teaching knowledge and ability”. They said that most of the reasons are applicable before the interview.

We considered changing the label to “Teaching knowledge, ability and interview”. But we decided not to because it could cause hesitation. For example, if the reason the user is looking for is “Did not attend interview” which is within “Communication, attendance and scheduling”.

We did change “Presentation skills” to “Teaching demonstration” to broaden the reason so that it can be used for different things relating to the candidate’s demonstration.

### Changing the reasons within “Teaching knowledge and ability”

We changed:

- “Understanding of subject” to “Subject knowledge”
- “Understanding of safeguarding to “Safeguarding knowledge”
- “Understanding of teaching method” to “Teaching method knowledge”
- “Understanding of teaching role to “Teaching role knowledge”

This makes the reasons easier to distinguish.

### Changing “Give details” to “Details”

We changed all instances of “Give details” to “Details”. This is more concise.

### Showing certain reasons when they’re relevant to the application

We’ll only show:

- “No science GCSE at minimum grade 4 or C, or equivalent” when the candidate is applying to a primary course
- “Subject knowledge” when the candidate is applying to a primary course
- “Visa sponsorship” when the candidate does not have British citizenship

### Deciding not to change “safeguarding” to “possible risk to children”

We considered changing:

- “Safeguarding” to “Possible risk to children”
- “Understanding of safeguarding” to “Understanding about child safety in schools”

We think this is clearer and avoids jargon.

But we decided not to make this change because safeguarding as a term is well understood and would require a significant effort to apply this change across the service.

### Deciding not to add an option “Other candidates are better and placed are limited”

Some providers tell candidates that their application was rejected due to having better candidates.

And prior to launching structured reasons for rejection, 33 out of 660 applications were rejected due to this reason.

We considered adding a new reason for this but we decided not to because:

- users should give candidates feedback about how they can improve
- “Other” can be used to give feedback
- it has not been used much since launching structured reasons for rejection

## Emails

The way we present feedback is based on what reasons providers tick.

If the user only ticks “Other” then a heading will not be shown.

EXAMPLE

If the user ticks “Other” as well as other categories like “Qualifications”, a heading of “Other” will be shown.

EXAMPLE

If the user only ticks “Other” as reason within a category like “Qualifications”, the lede paragraph will not be shown.

EXAMPLE

If the user ticks “Other” as well as other reasons within a category like “Qualifications”, a lede paragraph of “Other:” will be shown.

EXAMPLE
