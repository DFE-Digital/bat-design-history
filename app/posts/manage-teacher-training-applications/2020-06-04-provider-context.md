---
title: More context for providers
description: Help providers make sense of application form responses by showing them guidance to candidates
date: 2020-06-03
screenshots:
  items:
    - Provider context 1
    - Provider context 2
---

## Hypotheses

Providers do not have easy access to the candidate-facing application form.

They only see candidate answers, not the way the question is asked or what guidance is given.

This can lead to problems, for example:

When candidates fail to enter all their relevant qualifications, providers worry this is because the form does not ask for them.

When candidates disclose sensitive information, providers are not sure if they understand the implications/what they are being asked.

When candidates ‘get things wrong’ in other ways, providers do not know if it’s because the guidance is unclear.

If we show providers the guidance and questions to candidates in context, as they read an application, we can help them understand the candidate response

## Design proposal

We added a details component to the provider-facing application form labelled ‘View guidance to candidate’. Selecting the component allows providers to see what the candidate sees as they complete the form.

## Technical considerations

We considered having these components automatically update with changes on the candidate side before rejecting this as too developer labour intensive.

Instead, we’ll need to find a way to check in with the candidate-side changes on a regular basis so we can update accordingly.
