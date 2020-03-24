---
title: Email with video of new vacancies feature
description: Watch our video about the new Publish teacher training courses.
date: 2019-04-08
---

{% set videoContent %}
Dear colleague,

We contacted you recently about the new features we’re introducing to [Publish teacher training courses](https://publish-teacher-training-courses.education.gov.uk) from April - which will enable you to add and edit your courses entirely within Publish.

To give you a preview of the expanded service, we’ve put together a video. This takes you through one of the new tasks you’ll be able to carry out: updating the vacancy status of a course.

[Watch the video on our guidance page](https://www.publish-teacher-training-courses.service.gov.uk/guidance) or [follow this link to watch on Youtube](https://www.youtube.com/watch?v=nxmtXGy1cCY&feature=youtu.be)

### What you need to do next

We’ll contact you shortly to confirm when we’ll start transferring your courses to Publish (and when you’ll lose access to current course management functions in [UCAS Web-link](https://www.ucas.com/sign-web-link)). We’re transferring all course information as a key part of the transition from UCAS.

You don’t need to do anything to prepare for this. We’ll transfer your courses automatically, and for now you can continue to use Web-link as normal.

If you have any questions about the new features, contact <becomingateacher@digital.education.gov.uk>. If anyone else in your organisation needs to see this email, please forward it to them.

Regards,
Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Watch our video about the new Publish teacher training courses",
  content: videoContent
}) }}

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  embed: {
    youtubeId: "nxmtXGy1cCY",
    title: "Vacancies editing - Publish teacher training courses"
  },
  caption: "Guidance video"
}) }}

{{ appFigure({
  image: {
    file: "guidance-for-publish-teacher-training-courses.png"
  },
  caption: "Guidance page with video"
}) }}
