---
title: Requesting a title
description: What happens when a provider asks for a custom title.
---

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Confirming a course with requested title",
    caption: "This shows a ‘requested title’, which is also shown in the preview. We probably also need to include the current title somewhere."
  }, {
    text: "Course created with title request",
    caption: "In research we’ve seen providers ask about timescales. How long will a request take?"
  }, {
    text: "Courses table showing requested title"
  }, {
    text: "A course with a pending title request"
  }]
}) }}

## Email: Title approved

[Google doc](https://docs.google.com/document/d/1d826D4c74V0MJ6UtuEOPDtmPn94nuoZWh58UsCGRlDI)

{% set approvedContent %}
Dear colleague,

Your request to change the title of course [insert code] has been approved. The course is now listed in Find postgraduate teacher training as [insert new name]. [OR:] The course will be listed in Find postgraduate teacher training as [insert new name] as soon as you publish it.

Regards,
Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Your course title has been approved",
  content: approvedContent
}) }}

## Email: Title not approved

[Google doc](https://docs.google.com/document/d/1d826D4c74V0MJ6UtuEOPDtmPn94nuoZWh58UsCGRlDI)

{% set notApprovedContent %}
Dear colleague,

Your request to change the title of course [insert code] has not been approved, as your suggested title does not meet our guidelines. [IF published:] The course will continue to be listed in Find postgraduate teacher training as [insert name].

You can still change the course title in Publish teacher training courses, but please follow the guidelines to ensure that your request is approved.

Regards,
Becoming a Teacher team
{% endset %}

{{ appEmail({
  subject: "Your course title has not been approved",
  content: approvedContent
}) }}
