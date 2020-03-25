---
title: Stop applications to full or unavailable courses
description: Prevent them from adding a full course, or submitting with a full course.
date: 2020-03-02
related:
  items:
    - text: Pull request
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/356
    - text: Trello
      href: https://trello.com/c/Ffktb1Rq/1098-stop-candidates-from-applying-to-courses-that-are-full-or-closed
---

We’ve divided the designs for full courses into two parts:

1. Stop users from applying to courses that can’t accept them
2. Warn users about a choice they’ve made that’s no longer available

Here we are focusing on the first part, specifically, stopping candidates from:

* picking a course that’s full
* submitting an application with a course that’s full
* submitting an application with a location that’s full

## Scenarios

The following scenarios could happen:

1. Candidate chooses a course that is already full when they start their application
2. Candidate chooses a course, works on their application and the course subsequently becomes full before submission
3. Candidate chooses a course, the course becomes full while they’re working on their application but reopens before submission
4. Candidate chooses a course, course has spaces at submission but becomes full whilst waiting for references or during the 5 day holding period
5. Candidate chooses a course, course has spaces at submission, becomes full during references/5 day hold period, but spaces become available again during this window

## Picking a course

We need to stop candidates from choosing courses that can’t accept them.

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(['AN017', 'AN018'])}) }}

### Hypothesis

We considered hiding full courses from the list of courses. However, if a candidate is looking for a specific course that’s full they won’t be able to find it, they might think they’ve typed something wrong or selected the wrong provider – they could waste time trying to find it elsewhere.

If we let them find the course, but tell them why they can’t apply to it, they’ll save time and have the information they need to decide what to do next.

## Course has become unavailable

We need to stop candidates from applying to courses that can’t accept them.

Either:

* the course is now full
* the location is full
* [the course has been withdrawn](/publish-teacher-training-courses/deleting-and-withdrawing) (maybe it’s no longer running, or was published by mistake)

{{ appUserNeeds({ items: collections['user-need'] | slugs(['AN019'])}) }}

### Hypothesis

If we warn the user when they are reviewing their application, then they will know that they should delete or change that course before they try to continue. If they try and continue regardless, we can prevent them using validation and show the same messages as errors.

This is a prevention technique at the most appropriate point. We can nudge users earlier on in their journey, which would mean these messages are less likely to be seen. We aren’t designing these warnings yet.

## Contacting a provider

Some providers close a course when they think they have enough interviews lined up. Not all of these interviews will be successful, and there’s a chance the course will reopen.

{{ appUserNeeds({ items: collections['user-need'] | slugs(['AN020'])}) }}

### Hypothesis

If we give candidates the contact details for a provider, they will contact the provider if the course is important enough to them.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Try to add a course that’s full",
    img: { src: "01-try-to-add-a-course-thats-full.png" }
  }, {
    text: "Review application with full or unavailable courses",
    img: { src: "02-review-application-with-full-or-unavailable-courses.png" }
  }, {
    text: "Try to continue with full or unavailable courses",
    img: { src: "03-try-to-continue-with-full-or-unavailable-courses.png" }
  }]
}) }}
