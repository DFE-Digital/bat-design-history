---
title: Work history breaks
description: How we built work history breaks (previously ‘gaps’)
date: 2020-03-04
related:
  items:
    - text: Trello
      href: https://trello.com/c/jIWipybM/732-calculate-work-gaps
    - text: Scenarios Google Doc
      href: https://docs.google.com/document/d/1JbHFaGlF8HDqQ1bajnhWhaB1QYjWTByIEAqAcKE1evQ/edit
---

We detect breaks in work history automatically based on the months entered in the jobs a candidate adds.

## Avoid asking about breaks until work history is complete

We wanted to avoid candidates reaching the review screen (where we show generated breaks) too early. We generate breaks based on the jobs that have been entered. If a candidate hasn’t entered most of their work history yet then the breaks we generate won’t be valid.

We updated the design so that after adding a job, we ask a candidate if they want to add another, rather than taking them straight to the review screen.

## What happens to breaks when editing jobs

A generated break will update based on the jobs around it. So if I have a break of 1 year, then I change an earlier job to end 1 month later, the break will automatically change to 11 months. If I change an earlier job to end exactly as my next job began, then the break disappears – there is no longer a break.

Having a break disappear when it’s just been generated is expected. But if a candidate has taken time to explain a break, then it’s reasonable to assume that something of value has been added. To delete this explanation without warning, or to silently edit its date range may produce errors.

When a candidate has explained a break, we don’t want to ever magically delete or change this entry. Once explained we instead rely on the candidate to make any further changes – this means that once explained the dates don’t change and the explanation always shows, which will mean breaks and jobs could overlap.

We trust that what the candidate entered is correct and we do not modify it.

## How far back do we generate breaks

We only generate breaks within the last 5 years as that’s all the providers need. The beginning of the first break will always be within 5 years.

A candidate could edit the dates for a break to go beyond the 5 years.

Context on the importance of 5 years is already set when starting the work history section.

## Adding a job to fill a break

When a candidate clicks ‘Add another job’ from the break, we pre-fill the start and end dates to match.

If the break would pre-fill up until today, then instead of putting today’s date in, we leave it blank – as that’s the default behaviour. This means that a delay of 1 month or more in submitting an application after completing would not generate an unexpected break.

## Work breaks don’t need to be explained

We do not validate that all breaks have been explained. We encourage explanations but don’t force them – we don’t want to prevent them submitting an application over this. Providers can choose to discuss or ask about breaks at interview.

We might re-asses this decision when we have evidence for how the feature is being used.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Work history containing breaks",
      img: { src: "01-work-history-containing-breaks.png" }
    }, {
      text: "Explaining a break",
      img: { src: "02-explaining-a-break.png" }
    }, {
      text: "First break explained",
      img: { src: "03-first-break-explained.png" }
    }, {
      text: "Deleting a break",
      img: { src: "04-deleting-a-break.png" }
    }, {
      text: "Do you want to add another job?",
      img: { src: "05-do-you-want-to-add-another-job.png" }
    }]
}) }}
