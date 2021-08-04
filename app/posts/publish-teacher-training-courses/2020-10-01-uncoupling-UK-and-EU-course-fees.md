---
title: Uncoupling UK and EU course fees
description: Allowing providers to specify different course fees for UK and EU/international students
date: 2020-10-01
---

In late September and early October 2020 we received enquiries from organisations querying how to add separate course fees for UK and EU students.

> UK/EU fees appear together in Publish, however, EU fees for the UoB will be the same as International. For now, I've put the EU fee in the Fee details (optional) box, but I think this needs to be amended!

[Support ticket](https://becomingateacher.zendesk.com/agent/tickets/9381)

> I am trying to update the fees information for our courses on the Publish portal but only seem to be able to enter fees for two categories: UK/EU students and International students.
>
> However, post Brexit, for the 2021/2 cycle, fees for EU students will be different from UK students. There doesn’t seem to be an option to enter distinct fees for EU students and they just show the same as UK students.

[Support ticket](https://becomingateacher.zendesk.com/agent/tickets/9380)

## Before the update

Publish previously allowed organisations to provide a common fee for UK and EU students as a required field and an optional fee for international students.

![Screenshot the original edit course length and fees page.](/publish-teacher-training-courses/uncoupling-UK-and-EU-course-fees/original-edit-course-fees.png)

## Design notes

This update uncouples EU student fees from UK fees, leaving the optional international field for fees for students from any non-UK location.

## Further questions

If there are no international fees displayed, is the course still open to international students? The Find course pages currently do not address this scenario and this is an additional piece of work that will need to follow.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Course description tab"
    },
    {
      text: "Edit course length and fees"
    },
    {
      text: "Preview of a course page with UK and international fees"
    },
    {
      text: "Preview of a course page with only UK fees"
    }
  ]
}) }}
