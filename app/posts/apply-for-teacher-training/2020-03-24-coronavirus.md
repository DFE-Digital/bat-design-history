---
title: Informing candidates about the impact of coronavirus (COVID-19)
description: Communicating temporary changes to the decline by default and reject by default decision dates.
date: 2020-03-24
screenshots:
  items:
    - Information banner on ‘Your application’ page
    - Information banner on ‘Application dashboard’ page
    - Updated confirmation page
---

On 18 March 2020, the government announced that [schools, colleges and early years settings](https://www.gov.uk/government/news/schools-colleges-and-early-years-settings-to-close) would close as part of a broader range of measures to reduce the spread of the coronavirus (COVID-19).

Given the impact on teacher training providers, [UCAS and the department agreed](/apply-for-teacher-training/ucas/coronavirus) to extend all decline by default (DBD) and reject by default (RBD) decision dates for a period of 4 weeks, up until 20 April 2020 at the earliest.

We communicated this information to candidates by:

* sending an emailing warning them that their applications may be processed slower, and to check the deadlines on their application dashboard
* adding banners to the application and dashboard pages informing candidates that applications may be processed more slowly
* adding information about extended deadlines to confirmation page
* updating notification emails, replacing references to remaining working days with less precise language

## Email sent to candidates

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "There might be a delay in processing your teacher training application",
  content: "Dear ((candidate_name))

  Given the impact of coronavirus (COVID-19) on schools and universities, your teacher training application might be processed more slowly than usual.

  To check the status of your application, sign in to Apply for teacher training https://www.apply-for-teacher-training.education.gov.uk/candidate/sign-in?u=[token]

  If you have any questions about this, you can contact us at <becomingateacher@digital.education.gov.uk>"
}) }}
