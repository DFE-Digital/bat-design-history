---
title: Reasons for rejection iteration 6
description: We made a few changes to the reasons for rejection flow to ready it for production.
date: 2021-12-02
tags:
  - AN029
screenshots:
  items:
    - text: Reasons closed
      src: reasons--closed.png
    - text: Reasons open
      src: reasons--open.png
    - text: Check answers
      src: check-answers.png
    - text: Feedback page
      src: feedback-page.png
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

It tested very well in comparison with the [previous version](/manage-teacher-training-applications/reasons-for-rejection-iteration-5/).

However, we made some changes based on some of the issues we did find.

### Changing “Communication and scheduling” to “Communication, attendance and scheduling”

In the tree test, we told users to imagine they had an application where the candidate did not show up for their interview. And then to choose a reason for rejection.

44 people took the correct path. But 17 people chose ‘other’ indicating that the label did not work well enough.

We changed the from “Communication and scheduling” to “Communication, attendance and scheduling” to give users the best chance of understanding the options that are inside.

### Changing “Presentation skills” to “Teaching demonstration”

We asked some users in person to reject an application on the basis that they did not perform well at interview.

We noticed that users did not instantly tick “Teaching knowledge and ability”. When probed, users said that most of the options relate to issues found before candidates are invited for interview.

We know that 14% of applications are rejected due to the candidate’s performance at interview.

We considered changing the label to “Teaching knowledge, ability and interview”. But we decided not to change this because it could cause hesitation for users if the reason was to do with not attending interview which is part of “Communication, attendance and scheduling”.

We did change “Presentation skills” to “Teaching demonstration” to broaden the reason so that it can be used for different things relating to the candidate’s demonstration.

### Deciding not to add an option “Other candidates are better and placed are limited”

Some providers tell candidates that their application was rejected due to having better candidates.

And prior to launching structured reasons for rejection, 33 out of approximately 500 applications were rejected due to this reason.

We considered adding a new reason for this but we decided not to because:

- users should give candidates clear feedback about what they can do to improve
- “Other” can be used to give feedback
- it has not been used a lot since launching structured reasons for rejection

### Changing ‘accepted equivalent’ to ‘equivalent’

Within the qualifications section, we have reasons such as “No maths GCSE grade 4 (C)or above, or accepted equivalent”.

We dropped “accepted” because it’s unnecessary.

### Only showing reasons if they are applicable to the type of application

We will only show:

- “No science GCSE grade (C) or above, or equivalent” when the candidate is not applying to a primary course§
- “Subject knowledge” when the candidate is not applying to a primary course
- “Visa sponsorship” when the candidate does not have british citizenship

### Changing “No degree” to “No bachelor’s degree, or equivalent”

We changed “No degree” to “No bachelor’s degree, or equivalent” because:

- it’s more specific - for example, a foundation degree is not eligible
- matches what candidate’s are asked

### Changing “Give details” to “Details”

We try to avoid giving users instructions like ‘select’, ‘enter’ in order to be more concise.

So we changed the label to “Details”.

### Frontloading the reasons withing “Teaching knowledge and ability”

To make the reasons easier to distinguis, we changed:

- “Understanding of subject” to “Subject knowledge”
- “Understanding of safeguarding to “Safeguarding knowledge”
- “Understanding of teaching method” to “Teaching method knowledge”
- “Understanding of teaching role to “Teaching role knowledge”

### Improving the words for no maths, English and science GCSE reasons

...

### We decided not to change “safeguarding” to “possible risk to children”

...

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
