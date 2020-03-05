---
title: Giving details about disability (iteration)
description: An iteration of the disability section
date: 2020-02-11
tags:
 - AN007
 - AN008
 - MN005
related:
  items:
    - text: 'Provider research playback'
      href: https://docs.google.com/presentation/d/1Im8T9MkiuyvPnkHa4tOeZU9M-Sl_E10Zkv2mrn6lEJY/edit#slide=id.p
---
This design is [an iteration of the question as designed for the pilot](/apply-for-teacher-training/training-with-a-disability). This question was removed prior to launch due to a lack of confidence in how we were asking a sensitive and possibly contentious question.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Hypotheses

### Using ‘extra assistance’ in the title

Using the word ‘disability’ in the title excluded candidates that have short-term physical or mental health conditions, or a condition they don’t regard as a disability.

If the question mentions ‘extra assistance’ instead of ‘disability’
Then candidates with access needs will be more compelled to enter their condition(s)
We’ll know this works when more candidates provide relevant details of their particular needs

### Using a more supportive and reassuring guidance tone (option one)

The original design used content largely adapted from that used on the Get into Teaching website.

If we use more supportive and reassuring guidance, that includes examples of the type of support a provider can offer
Then a candidate will feel more comfortable providing an answer

### Reaffirming legal rights and protections against discrimination (option two)

The original design used content largely adapted from that used on the Get into Teaching website.

If the guidance states that it's against the law for a provider to discriminate against candidates with access needs
Then a candidate will feel more comfortable providing an answer

## Findings

* Candidates read ‘extra assistance’ as meaning financial assistance.
* Candidates wanted links to information about financial assistance for training with a disability.
* Candidates wanted a mix of reassurance, and also information about their legal standing.
* Candidates were unclear what would happen with this information, or unsure if they would need to contact a provider directly as well.
* Providers asked for more varied examples of the types of support available (ie mental health).

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Get extra assistance to become a teacher (with supportive guidance)"
  }, {
    text: "Get extra assistance to become a teacher (stating legal position)"
  }, {
    text: "Review answer"
  }, {
    id: "provider-view",
    text: "What providers see",
    caption: "Answer is shown to providers with a succinct and actionable label. If no needs are disclosed, we show ‘Not specified’."
  }]
}) }}
