---
title: Helping candidates work on an application across 2 recruitment cycles
description: Applying again when a recruitment cycle has ended.
date: 2020-10-06
tags:
  - AN028
---

## Our initial designs

We previously made some changes to [how Apply for teacher training works at the end of a recruitment cycle](/apply-for-teacher-training/end-of-cycle/).

For example, we informed candidates about upcoming application deadlines and advised them to talk to teacher training providers about course availability:

![Screenshot of a banner informing candidates of the upcoming deadline for applications.](/apply-for-teacher-training/end-of-cycle/your-application-with-first-deadline.png)

![Screenshot of a banner informing candidates of the upcoming deadline for applying again.](/apply-for-teacher-training/end-of-cycle/your-application-with-second-deadline.png)

We also started to think about how to communicate with candidates once deadlines had passed:

![Screenshot of a banner informing candidates that applications for courses starting in this academic year have now closed.](/apply-for-teacher-training/end-of-cycle/application-dashboard-with-opening-date.png)

Our initial designs focussed on letting candidates know about key dates so that they know when they can and cannot apply.

## The problem with our initial designs

We did not fully consider the experience of candidates after the 18 September, when various deadlines and dates start to have a real impact on how applications look and behave.

For example, candidates cannot submit between 18 September and 13 October. They also cannot know for sure which courses will be available for the next academic year between 18 September and 6 October.

## How we approached the problem

To help users navigate through a complicated system – and for technical simplicity – we decided to treat all applications which do not lead to a place by the end of a recruitment cycle (either on or after 18 September) as “ended” (a state which, to the candidate, may be reflected in different ways depending on their circumstance – from “application not sent” to “unsuccessful”).

Candidates have to initiate applying again, like they do in the existing journey to apply again _within_ a recruitment cycle:

![Screenshot of ‘Application dashboard’ with banner asking candidate if they want to apply again.](/apply-for-teacher-training/apply-again/01-apply-again-banner.png "Within a recruitment cycle, a candidate is asked “Do you want to apply again”?")

![Screenshot of interstitial page explaining to candidate how applying again works.](/apply-for-teacher-training/apply-again/02-apply-again-page.png "If they click the link, an intersitital page explains how applying again works.")

![Screenshot of ‘Your new application’ page with banner that informs the candidate that we’ve copied their application.](/apply-for-teacher-training/applying-again-iteration/banner.png "If they click ‘Start now’, we show them their new application, with information copied over from their last one.")

However, we needed to adapt this journey to help users in a more complicated situation – progressing an application across 2 recruitment cycles.

To help us prioritise what to design, we identified 3 scenarios a candidate is most likely to be in from 18 September:

1. I submitted an application before 18 September but my references did not come back by 18 September

2. I submitted an application before 18 September but but I got a rejection after 18 September

3. I started an application before 18 September but did not submit by 18 September

## Hypothesis

If we design tailored user journeys for candidates in the 3 scenarios
Then most candidates will be able to progress their application across 2 recruitment cycles, understand what’s going on, and know what to do next.

## User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({
  items: collections['user-need'] | slugs(['AN028'])
}) }}

## What we designed

### For candidates who do not get references back by 18 September

On the 18 September, candidates get an email:

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Your references did not come back in time",
  content: "Dear ((candidate))

#### Your references did not come back in time

Your referees did not respond in time for courses starting in the 2020 to 2021 academic year.

You can update your referees and apply again for courses starting in the 2021 to 2022 academic year.

((dashboard_url))

#### Get support

We’re here to help you get a place on a course. Call Get Into Teaching for free on 0800 389 2500 or chat to an adviser online:

<https://getintoteaching.education.gov.uk/contacts>

For any technical issues using Apply for teacher training, contact us at <becomingateacher@digital.education.gov.uk>"
}) }}

If a candidate clicks on the link in the email or logs into their account directly, they see a banner:

![Screenshot of a banner informing candidates that their references did not come back in time but they can still apply again.](apply-again-banner-references.png)

If they click on the link in the banner, they see an interstitial page:

![Screenshot of interstitial page explaining to candidate how applying again works.](apply-again-interstitial.png)

The content of this page changes depending on whether a candidate sees it before or after the start of the new cycle:

```html
<!-- if before 6 October -->
Applications for courses starting in the 2020 to 2021 academic year
are closed.
<!-- endif -->

Carry on with your application for courses starting in the 2021 to
2022 year.

<!-- if before 13 October -->
You can submit your application from 13 October 2020.
<!-- endif -->

<!-- if before 6 October -->
Your course choices have been removed. You can add them again later.
<!-- else -->
Your course choices have been removed. You can add them again now.
<!-- endif -->
```

### For candidates who get a rejection after 18 September

When a teacher training provider rejects an application, the candidate gets an email:

{{ appEmail({
  subject: "Your application was unsuccessful but you can apply again",
  content: "Dear ((candidate))

#### Application decision

((rejected_automatically??((provider)) did not respond to your application for ((course_and_code)) in time.))

((rejected_by_provider??((provider)) decided not to progress your teacher training application for ((course_and_code)) on this occasion.))

#### You can apply again

It’s easy to apply again. We’ve saved your last application, so all you have to do is make any changes and submit.

((has_feedback??Review your feedback and apply again:))

((no_feedback??Apply again:))

((dashboard_url))

#### Get support

We’re here to help you get a place on a course. Call Get Into Teaching for free on 0800 389 2500 or chat to an adviser online:

<https://getintoteaching.education.gov.uk/contacts>

For any technical issues using Apply for teacher training, contact us at <becomingateacher@digital.education.gov.uk>"
}) }}

If a candidate clicks on the link in the email or logs into their account directly, they’ll see a banner:

![Screenshot of a banner informing candidates that their application did not lead to a place but they can still apply again.](apply-again-banner-unsuccessful.png)

If they click on the link to apply again, they’ll see an interstitial page:

![Screenshot of interstitial page explaining to candidate how applying again works.](apply-again-interstitial.png)

The content of this page changes depending on whether a candidate sees it before or after the start of the new cycle:

```html
<!-- if before 6 October -->
Applications for courses starting in the 2020 to 2021 academic year
are closed.
<!-- endif -->

Carry on with your application for courses starting in the 2021 to
2022 year.

<!-- if before 13 October -->
You can submit your application from 13 October 2020.
<!-- endif -->

<!-- if before 6 October -->
Your course choices have been removed. You can add them again later.
<!-- else -->
Your course choices have been removed. You can add them again now.
<!-- endif -->
```

### For candidates who do not submit by 18 September

Before 18 September, candidates get an email:

{{ appEmail({
  subject: "Submit your application no later than 18 September",
  content: "Dear ((candidate))

#### Submit your application no later than 18 September

If you’re hoping to start a course this academic year, submit your application no later than 18 September.

Review and submit your application:

((sign_in_url))

#### Ask your provider how quickly you need to submit: courses are filling up

Although 18 September is the last day you can submit your application, courses can become full before then.

Contact your teacher training provider to check availability.

((provider_contact_details))

#### Get support

We’re here to help you get a place on a course. Call Get Into Teaching for free on 0800 389 2500 or chat to an adviser online:

<https://getintoteaching.education.gov.uk/contacts>

For any technical issues using Apply for teacher training, contact us at <becomingateacher@digital.education.gov.uk>"
}) }}

If the candidate does not submit by 18 September, they see an interstitial if they sign back in:

![Screenshot of interstitial page explaining to candidate how applying again works.](apply-again-interstitial-not-submitted.png)

The content of this page changes depending on whether a candidate sees it before or after the start of the new cycle:

```html
You did not submit your application in time to start a course in the
2020 to 2021 academic year.

However, you can carry on with your application for courses starting
in the 2021 to 2022 academic year.

<!-- if before 13 October -->
You can submit your application from 13 October 2020.
<!-- endif -->

<!-- if before 6 October -->
Your course choices have been removed. You can add them again later.
<!-- else -->
Your course choices have been removed. You can add them again now.
<!-- endif -->
```

### Task list changes for candidates in all 3 scenarios

Candidates get messages on their task list to let them know what’s going on.

![The ‘Your application’ page.](your-application.png "The task list shows a message under ‘Course choices’ and the page’s call to action is revised to explain the situation to candidate, allowing them to review their application, but not submit it at this time.")
