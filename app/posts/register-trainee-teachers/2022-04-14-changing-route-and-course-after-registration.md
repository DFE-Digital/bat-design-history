---
title: Changing route and courses for registered trainees
description:
date: 2022-04-14
related:
  items:
  - text: Picking courses from Publish
    href: /register-trainee-teachers/picking-publish-courses/
---
{% from "screenshots/macro.njk" import appScreenshots with context %}

Since Register started operating with real users registering real trainees, one of the more common requests to our support team has been to change the route or course on a trainee record. Until now, we have not supported changing the training route for registered trainees because it has been a data and user interface challenge. To make the change, our developers manually update the record. This is a burden we’d like to remove.

## Why routes and courses change

We’ve received requests to change route or course for two reasons:

* correcting mistakes made at registration
* the trainee has asked to move course or the provider needs to move them

Our launch coincided with the October ITT census and when the new cohort of trainees was being registered. The majority of change requests in this time were correcting mistakes made during registration. A provider might have registered the trainee as undergraduate rather than postgraduate, or school direct fee-funded rather than salaried.

Since January 2022, most of our course change requests are because of the trainee changing from one course to another or one route to another. Sometimes for financial reasons, or sometimes they may decide to learn to teach a different subject.

## Why this has been a challenge for us

The route is the core data item on which much of the record relies. Changing it has been a challenge because of the consequences this has on the record. We only collect the data needed by a route, but if the route changes, we may now be missing the data needed for a complete record. Or worse, the data we have may now be invalid — and we need to delete this invalid data and ask the user to update the record.

For example, if a trainee moves:

* from a provider-led course to a school direct course, then the record will now be missing school details, which are needed to correctly pay funding to the lead school
* from a course without funding to one with funding available, we should check whether the trainee should be receiving any funding
* from a course with a bursary to one that doesn’t have funding, then the existing funding source is invalid

## New designs

Previously the training route and course details were separate — now we’ll consider training route part of the course. We’ll ask about the route as the first question when setting course details.

### Course details summary card

We’ve combined the existing route and course rows into a single course row. This shows the trainee’s route and relevant course information. If it’s a Publish course, we show the Publish course name and course code. If not, we show the course subjects.

Our Publish course picking page shows just those courses for the current route — so when changing course, we’ll first ask the user to select (or reconfirm) the route.

![The course details summary card with a row that is labelled ‘Course’. Inside the row the route ‘Provider-led’ is shown, together with the the Publish course.](1-new-course-details-summary-card.png "Ammended course row")

## Flow

Selecting ‘change’ on the course row takes the user to our existing route selection page.

After picking the new route we do a number of things:

* if the new route does not have Publish courses, we delete any existing Publish information we have on the trainees' course details such as course code and course name.
* if the new route has changed, we check for incompatible course data and delete it. For example deleting study mode when moving to assessment only courses, or deleting Early years subjects when moving away from Early years courses.
* if the new route has Publish courses, we then show the Publish course picking flow.
* if the new route does not have Publish courses, we show the manual course details flow.

The user will finish with a course details confirmation page which captures their new route or course information.

After confirming the new course details, we need to compare what’s changed and make sure other incompatible data on the trainee is deleted.

If the record no longer requires these items we’ll delete:

* degrees
* schools
* placements

If the route or the allocation subject has changed, we’ll delete the funding source — as the existing answer to this is no longer reliable.

## Collecting new trainee information

Depending on the type of change, the record may now be missing:

* degrees
* schools
* funding information

Our first release of course changes will likely have these shown as ‘missing data’ on the record. In a future design history we’ll look at designs to collect this as part of the course change flow.

## How it will look on a trainee

### A trainee before a course change

![A trainee record before a course change.](2-trainee-before-course-change.png "A trainee record before a course change")

### A trainee after a course change

![A trainee record after a course change.](3-trainee-after-course-change.png "A trainee record after a course change")

In this example, the trainee has moved from a provider-led course to a school direct course. As a result, the provider now needs to give us school information, and reconfirm the funding.
