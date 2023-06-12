---
title: Emails for the new 2019/20 cycle
description: Prompts and updates for providers
date: 2019-09-20
tags:
  - notifications
  - emails
---

In the lead up to the opening of the new recruitment cycle on 1 October 2019, we sent these emails.

## Prompting providers to complete their courses

Sent on Wednesday 18 September to providers without any enriched content.

{% set updateCoursesContent %}
Dear colleague,

Last week we emailed to tell you that you can now publish your courses for the 2020/21 recruitment cycle in [Publish teacher training courses](https://www.publish-teacher-training-courses.service.gov.uk). Published courses will appear on [Find postgraduate teacher training](https://find-postgraduate-teacher-training.education.gov.uk) on Tuesday 1 October, when the new cycle opens.

To publish a course, you must add all the mandatory information in Publish. This includes:

- a course description
- details about school placements
- a profile of you as a provider

If any of this is missing, you will not be able to publish the course, and it will not appear on Find.

### Add your content to Publish now

If you have not added content to the mandatory fields in Publish, we strongly advise you to do this as soon as possible. Any courses without this information - even if they appeared on Find for the 2019/20 cycle - cannot be published for the upcoming cycle, and candidates will not be able to apply to them via Gov.uk. You must add your content and publish the course before 1 October to ensure it appears on Find when the new cycle opens.

If you have any questions, or need any help in adding your content, please contact us at <becomingateacher@digital.education.gov.uk>. If anyone else in your organisation needs to be aware of this email, please forward it to them.

Regards,
Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Update your courses on GOV.UK before October 2019",
  content: updateCoursesContent
}) }}

## Removing mentions of the skills test

Sent on Friday 20 September to providers we’d identified as having skills tests in their course content.

{% set skillsTestContent %}
Dear colleague,

As you may know, for courses starting in 2020, candidates will no longer need to pass [professional skills tests](https://www.gov.uk/government/news/changes-to-the-professional-skills-test-for-teachers) in literacy and numeracy before beginning teacher training.

We’ve noticed that some of your courses on [Find postgraduate teacher training](https://find-postgraduate-teacher-training.education.gov.uk) for the last recruitment cycle (2019/20) mentioned skills tests. These courses, which have been copied over to [Publish teacher training courses](https://www.publish-teacher-training-courses.service.gov.uk) for the 2020/21 cycle, should be updated to ensure that no references to skills tests are included.

### How to update your courses

To update your courses, go to the section titled ‘Next cycle (2020 - 2021)’ on your organisation’s homepage in Publish and click on the individual course. References to skills tests are most likely to appear in the ‘Interview process‘ and ‘Requirements and eligibility’ sections.

You should make these changes before your 2020/21 courses appear on Find on 1 October 2019. If you’ve already published your courses (by clicking the green ‘Publish in October’ button), you can make the changes and then publish them again.

You can ignore this email if you’ve already removed references to skills tests from your courses.

If you have any questions, please contact <becomingateacher@digital.education.gov.uk>. If anyone else in your organisation needs to be aware of this email, please forward it to them.

Regards,
Becoming a Teacher team
{% endset %}
{{ appEmail({
  subject: "Remove skills tests from your course profiles before October",
  content: skillsTestContent
}) }}
