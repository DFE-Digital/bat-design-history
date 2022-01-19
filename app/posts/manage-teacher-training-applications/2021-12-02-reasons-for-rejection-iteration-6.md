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
    - text: Give feedback - check answers
      src: give-feedback-check-answers.png
    - text: Give feedback - feedback
      src: give-feedback-feedback.png
related:
  items:
    - text: Research playback slides
      href: https://docs.google.com/presentation/u/1/d/1XX9FH8yW2MLC8kiypKzS5ax81PMC-eq_36e3ZUkggO0/edit#slide=id.g100bb4a0b51_1_113
---

{% from "email/macro.njk" import appEmail %}

We recently redesigned the way users [reject applications and give feedback to candidates](/manage-teacher-training-applications/reasons-for-rejection-iteration-5/).

The user need this meets is:

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

In our service we divide reasons for rejection into categories, some of which have sub-categories.

We tested a revised set of categories and sub-categories with 11 users in person. We also sent a tree test to 61 users, giving them scenarios and asking them which reason they would choose for each.

The new design tested very well but we decided to make some changes. Some of these were in response to the research findings and others were due to things we spotted during a review of the design.

## What we changed

We have:

- changed the wording of some of the reasons
- decided to show certain reasons only if they’re relevant to the application

### Changing the sub-categories within “qualifications”

We changed:

- “No maths GCSE grade 4 &#40;C&#41; or above, or accepted equivalent” to “No maths GCSE at minimum grade 4 or C, or equivalent”
- “No English GCSE grade 4 &#40;C&#41; or above, or accepted equivalent” to “No English GCSE at minimum grade 4 or C, or equivalent”
- “No science GCSE grade 4 &#40;C&#41; or above, or accepted equivalent” to “No science GCSE at minimum grade 4 or C, or equivalent”

The new labels are clearer and avoid the need to use brackets.

We changed “No degree” to “No bachelor’s degree, or equivalent” because it:

- matches what candidates are asked
- is more specific - for example, a foundation degree is not accepted

### Changing “Communication and scheduling” to “Communication, attendance and scheduling”

In the tree test, we asked participants what reason they would choose if a candidate did not show up for their interview.

We intended for participants to choose the category “Communication and scheduling” and then the sub-category “Did not attend interview”. We found that 44 participants did so.

Since 17 people instead chose the category “Other”, however, we felt that the name of the category did not work well enough.

We changed “Communication and scheduling” to “Communication, attendance and scheduling” to make it clearer.

### Changing the sub-categories within “Teaching knowledge and ability”

We changed:

- “Understanding of subject” to “Subject knowledge”
- “Understanding of safeguarding to “Safeguarding knowledge”
- “Understanding of teaching method” to “Teaching method knowledge”
- “Understanding of teaching role to “Teaching role knowledge”

This makes it easier to distinguish the sub-categories from each other.

We also changed “Presentation skills” to “Teaching demonstration” so that it can be used in a broader range of situations.

### Changing “Give details” to “Details”

We changed all instances of “Give details” to “Details”. This is more concise.

### Showing certain reasons only if they’re relevant to the application

We’ll only show:

- “No science GCSE at minimum grade 4 or C, or equivalent” if the candidate is applying to a primary course
- “Subject knowledge” if the candidate is applying to a secondary course
- “Visa sponsorship” if the candidate is not a British or Irish citizen

This will avoid the possibility of users being distracted or confused by being shown reasons which are not relevant.

### Deciding not to change “Teaching knowledge and ability” to “Teaching knowledge, ability and interview”

Our analysis shows that 14% of applications are rejected due to performance at interview.

We asked participants to reject an application on the basis that the candidate did not perform well at interview. Some participants did not instantly select “Teaching knowledge and ability”.

We considered changing the label to “Teaching knowledge, ability and interview”. But we decided not to because it could cause hesitation. For example, a user may expect it to contain “Did not attend interview” which is actually within “Communication, attendance and scheduling”.

### Deciding not to change “Safeguarding” to “Possible risk to children”

We considered changing:

- “Safeguarding” to “Possible risk to children”
- “Understanding of safeguarding” to “Understanding about keeping children safe”

We think this would be clearer, avoiding jargon which could have various interpretations.

We decided not to propose this change. Safeguarding is a widely used term and it would require a significant effort to agree and apply this change across the service.

### Deciding not to add an option “Other candidates are better and places are limited”

Some providers tell candidates that their application was rejected because other candidates were better. Before we launched structured reasons for rejection, 33 out of 660 applications were rejected for this reason.

We considered adding a new reason to cover this but we decided not to because:

- users should give candidates feedback about how the candidate can improve, rather than just saying that they’re not quite good enough
- we have not seen this reason used much in the “Other” category since we launched structured reasons for rejection

## Emails

We send an email to rejected candidates, with the reasons given in inset text to separate then from the rest of the content.

For each reason we include the category as a heading, followed by:

- the details entered by the provider - if the category does not include any sub-categories
- the sub-category with a full stop at the end, for example “No degree.” - if details were not required for the sub-category
- the sub-category with a colon at the end, for example “Could not verify qualifications:”, followed by the details in a new paragraph - if details were required for the sub-category

<!-- markdownlint-disable MD025 MD001 -->

{{ appEmail({
  subject: "Update on your application",
  content: "Dear ((first_name))

((provider1)) has decided not to make you an offer to study ((subject_and_code1)). They’ve given feedback to explain this decision.

> # Qualifications
>
> No degree.
>
> Could not verify qualifications:
>
> The certificate you provided was not enough for us to confirm that your maths qualification is the equivalent of a GCSE.
>
> # References
>
> Your references did not suggest that you would be a suitable candidate.
>
>

As we discussed at the interview, we thought you were a strong candidate but were concerned that you would not be able to commit enough time to training.

Contact ((provider)) directly if you have any questions about their feedback.

# You’re waiting for decisions

You’re waiting for decisions about your applications to:

- ((provider2)) to study ((subject_and_code2))
- ((provider3)) to study ((subject_and_code3))

They should make their decisions by ((date)).

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8:30am to 5:30pm (except public holidays).
"
}) }}

<!-- markdownlint-enable MD025 -->

### When we show “Other” in the email

We have rules about when we show the:

- “Other” category
- “Other” sub-category which appears in several categories

If the only category is “Other” then we do not include a heading.

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "Update on your application",
  content: "Dear ((first_name))

((provider1)) has decided not to make you an offer to study ((subject_and_code1)). They’ve given feedback to explain this decision.

> As we discussed at the interview, we thought you were a strong candidate but were concerned that you would not be able to commit enough time to training.

Contact ((provider)) directly if you have any questions about their feedback.

# You’re waiting for decisions

You’re waiting for decisions about your applications to:

- ((provider2)) to study ((subject_and_code2))
- ((provider3)) to study ((subject_and_code3))

They should make their decisions by ((date)).

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8:30am to 5:30pm (except public holidays).
"
}) }}

<!-- markdownlint-enable MD025 -->

If the the “Other” category appears with other categories then we‘ll show the heading “Other”.

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "Update on your application",
  content: "Dear ((first_name))

((provider1)) has decided not to make you an offer to study ((subject_and_code1)). They’ve given feedback to explain this decision.

> # Qualifications
>
> No bachelor’s degree, or equivalent.
>
> # Other
>
> We were concerned about your timekeeping and general professionalism.

Contact ((provider)) directly if you have any questions about their feedback.

# You’re waiting for decisions

You’re waiting for decisions about your applications to:

- ((provider2)) to study ((subject_and_code2))
- ((provider3)) to study ((subject_and_code3))

They should make their decisions by ((date)).

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8:30am to 5:30pm (except public holidays).
"
}) }}

<!-- markdownlint-enable MD025 -->

If the user only ticks “Other” as the sub-category within a category like “Qualifications”, the lead-in line will not be shown.

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "Update on your application",
  content: "Dear ((first_name))

((provider1)) has decided not to make you an offer to study ((subject_and_code1)). They’ve given feedback to explain this decision.

> # Qualifications
>
> Your degree is not relevant to the subject you want to teach.

Contact ((provider)) directly if you have any questions about their feedback.

# You’re waiting for decisions

You’re waiting for decisions about your applications to:

- ((provider2)) to study ((subject_and_code2))
- ((provider3)) to study ((subject_and_code3))

They should make their decisions by ((date)).

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8:30am to 5:30pm (except public holidays).
"
}) }}

<!-- markdownlint-enable MD025 -->

If the user ticks an “Other” sub-category as well as another sub-category within the same category, we‘ll show the lead-in line “Other:”.

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "Update on your application",
  content: "Dear ((first_name))

((provider1)) has decided not to make you an offer to study ((subject_and_code1)). They’ve given feedback to explain this decision.

> # Qualifications
>
> No maths GCSE at minimum grade 4 or C, or equivalent.
>
> Other:
>
> Your degree is not relevant to the subject you want to teach.

Contact ((provider)) directly if you have any questions about their feedback.

# You’re waiting for decisions

You’re waiting for decisions about your applications to:

- ((provider2)) to study ((subject_and_code2))
- ((provider3)) to study ((subject_and_code3))

They should make their decisions by ((date)).

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8:30am to 5:30pm (except public holidays).
"
}) }}

<!-- markdownlint-enable MD025 -->
