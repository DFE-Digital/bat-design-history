---
title: Email asking for providers who are available 15-18 April for our first UCAS transition group
description: Sent on Thursday 7 March.
date: 2019-03-08
---

{% set emailContent %}
Dear colleague,

Thanks for getting in touch and offering to take part in our pilot relating to new features of [Publish teacher training courses](https://publish-teacher-training-courses.education.gov.uk/).

These features allow you to add new courses, add and change locations, change the vacancy status of courses, and change other details (eg names, outcomes and fee/salary status).

We’re currently looking for participants who are available between Monday 15 April and Thursday 18 April. Please let us know if you’re able to take part - and, if so, on which day.

We ask participants to be available on the morning of their chosen date. The test will involve making a small change using one of the new features (all changes are reversible).

We may then follow up with a quick call to hear about your experiences and to check that you didn’t face any problems.

In total, the test and call should take no longer than one hour. If you’re unable to participate on the above dates (and we appreciate that these may coincide with the Easter break), you will still be able to take part in the pilot at other times during April - we’ll be in touch with more information soon.

To confirm that you can take part, or if you have any questions, please respond to this email at <becomingateacher@digital.education.gov.uk>.
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Publishing pilot: please confirm if you’re available 15 to 18 April",
  content: emailContent
}) }}
