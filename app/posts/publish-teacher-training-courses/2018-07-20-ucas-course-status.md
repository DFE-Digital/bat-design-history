---
title: UCAS course status
description: An iteration on the onboarding design (read-only) to include course status.
tags:
---

We show all UCAS courses rather than just the published ones. This means we are displaying courses that should go live but also those which have been suspended. Users need to see the status of their courses so they know what will be shown to candidates. The status needs to match the UCAS status.

Add a status column to the course table, and add a row to the metadata on the course detail page.

Statuses can be one of:

* Running
* Suspended
* New
* Discontinued

View design:
[https://publish-courses-check-ucas.herokuapp.com/courses](https://publish-courses-check-ucas.herokuapp.com/courses)
(bat/beta)

## UCAS guidance on status

[UCAS Teacher training set up guide](https://www.ucas.com/sites/default/files/utt-set-up-guide-2015.pdf)

### Running

Running means the training programme is running and you are ready and able to receive applications. If combined with Yes as the setting in Publish, the training programme will appear in the search tool.

### New

New is used for a new training programme. The default is set to No in Publish and so will not appear in the search tool. If you are ready to start receiving applications then you should change the setting to Yes in Publish.

### Discontinued

Discontinued means that the training programme is no longer available or perhaps set up incorrectly. Discontinued training programmes will not be rolled over to the next application cycle in May each year.

### Suspended

Suspended means that you will not be running your training programme in the current cycle, for any reason, but may run it again the future. The programme will not be displayed in the search tool for applicants to research. Suspended training programmes will be rolled over to the next application cycle in May each year.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Courses",
      img: { src: "courses.png" }
    },
    {
      text: "Course",
      img: { src: "course.png" }
    }
  ]
}) }}
