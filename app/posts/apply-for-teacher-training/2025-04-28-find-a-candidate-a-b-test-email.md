---
title: A/B testing the launch email for Find a candidate
description: Optimising the content for higher conversion rates.
date: 2025-04-28
tags:
  - candidate emails
  - find a candidate
  - testing
---

{% from "email/macro.njk" import appEmail %}

## What we did

We wanted to experiment with A/B testing the content in the Find a candidate launch email to see which version would have the highest conversion rate (both click through from the email and opt-in to Find a candidate).

We had already split our candidate audience into 3 tiers who we would be contacting in a staggered rollout throughout April:

* Tier 1 - candidates who have recently become unsuccessful in the last 30 days, and do not require visa sponsorship,  

* Tier 2 - candidates who are unsuccessful, do not require visa sponsorship and weren't in tier 1

* Tier 3 - any candidate who has not already been recruited to train to teach and has submitted at least one application

We decided to send the 2 variations to a segment of 1,000 candidates from tier 1 (total 1,974 candidates).  

We hoped this would give us a clear steer on which content variation to send to the other 974 candidates in tier 1, as well as those in tiers 2 and 3 (approximately 17,000 candidates) to optimise this launch email for the highest conversion rate possible.

### Variant A

Variant A prioritises sharing your information with providers in the subject line and introductory paragraph.

{{ appEmail({
subject: "Make your application details visible to more training providers",
content: "
  
  Dear Jim,

  There is a new feature in Apply for teacher training.

  You can choose to make your application details visible to training providers who you have not submitted an application to.

  They can search a list of candidates and view their application details. If they think you are suitable for their course, they can invite you to apply directly.

  [Allow other providers to view your application details](https://www.apply-for-teacher-training.service.gov.uk/support/sign-in)

## How this works with the current application process

  This feature should be used alongside the [current application](https://www.apply-for-teacher-training.service.gov.uk/candidate/about-the-teacher-training-application-process) process. You must continue to choose courses and submit applications yourself.

  > Candidates who submit 4 or more applications are more likely to receive an offer to train to teach.

  You can still submit up to 4 application choices at a time. If a provider invites you to apply and you submit an application, it will count towards your total.

  You can change your decisions to share your application details at any time by following the link at the bottom of your applications page
" }) }}

## Variant B

Variant B prioritises providers inviting you to courses in the introductory paragraph and a new way to apply in the subject line.

{{ appEmail({
  subject: A new way to apply for initial teacher training courses
  content: "
  
  Dear Jane,

  There is a new way to apply for teacher training courses.

  From May, training providers can invite you to apply directly to courses.

  If you choose to share your application details, providers can search for and review your information. If they think you are suitable for their course, they can invite you to apply directly.

  [Share your application details with other providers](https://www.apply-for-teacher-training.service.gov.uk/support/sign-in)

  You can decide which locations you want to appear in searches for, so you will only be invited to apply to courses in areas you have chosen yourself.

## How this works with the current application process

  This feature should be used alongside the [current application](https://www.apply-for-teacher-training.service.gov.uk/candidate/about-the-teacher-training-application-process) process. You must continue to choose courses and submit applications yourself.

  > Candidates who submit 4 or more applications are more likely to receive an offer to train to teach.

  You can still submit up to 4 application choices at a time. If a provider invites you to apply and you submit an application, it will count towards your total.

  You can change your decisions to share your application details at any time by following the link at the bottom of your applications page
" }) }}

## How the experiment was set up

Based on previous investigations, we chose to implement the Field Test gem. Field Test provided us with the framework and vocabulary to describe the experiment, with minimal setup.

We set up an experiment named “find_a_candidate/candidate_feature_launch_email” which had 2 variants “share_details” (A) and “invitation” (B). These variants relate to the email content that we would send to candidates.  
Each candidate (participant) would be randomly assigned a variant before the email was sent.

The experiment was measured against 3 goals, “link_clicked”, “opt_in” and “opt_out”. A participant would covert against these goals when they completed an action, clicking the link in the email they were sent (taking them to the “set preferences” page), and opting in to or out of the Find a candidate feature.  

Field Test provided a secure dashboard where it was possible to view how many participants were assigned to each variant, and on which goals they had converted against.  
An overview of the experiment was also available, showing the overall conversion rates of each variant and goal combination.  

## Results

At the end of 4 days variant B (invitation) had a 3.59% conversion rate compared to variant A’s 2.49%.

However, the volume of engagement was less than expected. We had not taken into account the low open rate of emails (2-3%) which meant that our sample of 1,000 only generated a total of 31 opt-ins across both variants (12:19 A:B).

Variant A also saw the only opt-out of Find a candidate coming from the email.

Despite the difficulty in identifying statistical significance between the variants due to low volumes,  we opted to send variant B to the rest of the mailing list.

## Lessons for next time

We need to take the low open rate of emails into account when selecting a sample size in future. 1,000 participants did not yield high enough conversions to be able to identify a winner with statistical significance.  

It’s possible to apply demographic data to the results which would be interesting for a bigger sample size, or if we were targeting specific demographics with our communications in future. If this were needed it would need to be considered in advance in order to be useful.

This was reasonably straightforward to set up from a development point of view. It would be interesting to include A/B testing of both communications and in-service content in our research and continual improvement plans for the service.
