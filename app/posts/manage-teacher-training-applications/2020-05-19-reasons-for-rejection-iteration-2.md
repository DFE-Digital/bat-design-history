---
title: Reasons for rejection iteration 2
description: Helping providers give useful feedback to candidates who’ve been rejected
date: 2020-05-12
screenshots:
  items:
    - text: Step 1
      src: respond.png
    - text: Step 2
      src: questions-1.png
    - text: Step 3
      src: questions-2.png
    - text: Step 4
      src: questions-3.png
    - text: Step 5
      src: preview.png
    - text: Step 5 (not interested in future applications)
      src: preview-not-interested.png
tags:
  - AN029
---

## Hypotheses

### Tell candidates how they can improve certain aspects of their application

The previous iteration had [labels for certain fields like ‘Please give details’](/manage-teacher-training-applications/reasons-for-rejection/).

But this mean providers can only say what’s wrong and not how they could improve. This could result in demoralised candidates who decide not to apply again.

If we ask providers how the candidate can improve
Then they’ll be more inclined to apply again

### Add a question in relation to interview performance

The previous iteration didn’t include a question for interview performance which is a possible reason for rejection.

If we include this question
Then providers won't have to type this manually

### Add a question in relation to whether they were only rejected because they were offered a different course by the same provider

The previous iteration didn’t include a question for when the application was rejected due to being offered one of their other choices.

If we include this question
Then providers won't have to type this manually

### Stop providers from answering ‘No’ to every question

The previous iteration meant that users could say no to every question. If they did this, they’d see an error message saying they can’t answer no to every question.

But this isn’t ideal because the UI gives the illusion that selecting no to all questions is okay. Also it wouldn’t follow the standard validation pattern from the GOV.UK Design System where an error should be related to a specific field.

If we require providers to provide a reason in a free text box when they select no to all other questions
Then the UI won’t be deceptive and error messages will be more useful

### Speed up the flow when the application is being rejected due to a safeguarding issue

The previous iteration had all questions on one page which meant that if safeguarding was selected as a reason to reject the application, the provider still had to answer the following questions:

1. Was it related to an issue we haven’t covered
2. Is there any other advice or feedback you’d like to give the candidate
3. Would you be interested in future applications from the candidate

But we know that if the provider selects safeguarding, then they don’t need to be asked these questions.

If we put the above questions onto a separate page
Then we can skip these questions for the provider to speed up their journey

### Show a preview of the candidate feedback

The previous iteration used a standard check answers page which meant provider’s didn’t know how their feedback would be shown to candidates.

If we show providers how their feedback will be shown to candidates
Then providers will be able to provide feedback in the right format without worrying how it might come across to candidates.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
