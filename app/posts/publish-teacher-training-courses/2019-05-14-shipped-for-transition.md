---
title: What we shipped for UCAS transition
description: Locations, location editing and vacancies.
---
Based on our [transition MVP designs](/publish-teacher-training-courses/first-transition-mvp), when we transitioned all providers away from UCAS we’d shipped the following features:

* a locations page
* a location page with location editing
* a Google form for adding new locations
* a courses page with vacancies link
* a Google form for adding new courses
* an edit vacancies page (without [refinements for courses with a single training location](/publish-teacher-training-courses/first-transition-mvp#edit-vacancies-for-a-course-with-one-location))
* a course page with tabs
* a basic details course tab

We didn’t ship pages for:

* deleting a course
* withdrawing a course
* editing any basic course details
* [anything we’d already descoped](/publish-teacher-training-courses/first-transition-mvp)

## Fallout

The biggest support requests have been for:

* changing locations for a course (or change the courses running at a location)
* [changing the UCAS eligibility settings to allow certain applicants to apply](https://becomingateacher.zendesk.com/agent/search/1?q=coursedataproblem)
* setting courses to running
* setting locations to running for a course that is running
* [adding locations](https://becomingateacher.zendesk.com/agent/search/1?q=newlocationcreated)
* [adding courses](https://becomingateacher.zendesk.com/agent/search/1?q=newcoursecreated)
* [deleting locations](https://becomingateacher.zendesk.com/agent/search/1?q=deletions)
* [edit course outcome](https://becomingateacher.zendesk.com/agent/search/1?q=courseoutcomes)
* [new access requests](https://becomingateacher.zendesk.com/agent/search/1?q=accessrequest)

Some providers have been using the add course form to try and edit existing courses.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Transition information" },
    { text: "Organisation" },
    { text: "Locations" },
    { text: "Edit location" },
    { text: "Courses" },
    { text: "Draft course" },
    { text: "Published course" },
    { text: "Basic details tab" },
    { text: "Not running course" },
    { text: "Editing vacancies" }
  ]
}) }}
