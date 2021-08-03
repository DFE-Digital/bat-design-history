---
title: Reconfirming a deferred offer (iteration 2)
description: Prompt providers to reconfirm a deferred offer from the previous cycle
date: 2020-08-14
---

Given that DfE don’t have a confirmed set of courses until rollover occurs, providers need to reconfirm deferred applications when the new cycle starts.

## Changes from the previous iteration

We made the following content tweaks from the [previous iteration](/manage-teacher-training-applications/reconfirming-a-deferred-application/):

The button now says ‘Review offer’ instead of ‘Check and confirm’ which confused some participants.

The proceeding page h1 is similar to the button text with ‘Review deferred offer’ and is now using the warning text component to explain the specific situation to users.

The check answers page says ‘Review offer’ so that it matches the button and is consistent when the course is available in the next cycle without requiring any changes.

The application page now uses the task view so there’s a heading at the top of the list prompting users there in addition to the application details page.

## How it works

When the next cycle begins any deferred offered will be at the top of the application list.

![](application-list.png)

Clicking on an application will show a prompt under the h1 to review and confirm the deferred offer.

![](reconfirm-banner.png)

There are 3 flows we’ve prototyped to help with the initial round of user research:

1. The same course is available in the next cycle
2. The course no longer runs in the next cycle
3. The location for a course is no longer available in the next cycle

## 1. The same course is available in the next cycle

This is the most common scenario and is easiest to deal with.

When the user clicks the ‘Review offer’ button they jump straight to the check answers screen.

![](1-check-answers.png)

They have an opportunity to change details or add a conditon if they need.

The new offer is shown above the old offer on the offer page.

![](1-success.png)

## 2. The course no longer runs in the next cycle

When the user clicks the ‘Review offer’ button they’re told they need to choose another course.

![](2-step1.png)

Clicking continue lets users choose another course.

![](2-step2.png)

If the user belongs to multiple providers they see the provider page otherwise they skip this page.

Then they see the course page.

![](2-step3.png)

Then they see the location page.

![](2-step4.png)

Then they see the conditions page.

![](2-step5.png)

Then they see the check answers page.

![](2-step6.png)

## 3. The location for a course is no longer available in the next cycle

When the user clicks the ‘Review offer’ button they’re told they need to choose another location or another course.

![](3-step1.png)

Clicking choose course takes the user down the same flow as above.

Clicking choose location takes the user directly to choosing a location.
