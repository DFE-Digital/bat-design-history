---
title: Giving teacher training providers longer to make decisions on applications because of coronavirus (COVID-19)
description: Communicating temporary changes to the decline by default and reject by default decision dates.
date: 2020-03-24
---

On 18 March 2020, the government announced that [schools, colleges and early years settings](https://www.gov.uk/government/news/schools-colleges-and-early-years-settings-to-close) would close as part of a broader range of measures to reduce the spread of the coronavirus (COVID-19).

Given the impact on teacher training providers, [UCAS and the department agreed](/apply-for-teacher-training/ucas/coronavirus) to extend all decline by default (DBD) and reject by default (RBD) decision dates for a period of 4 weeks, up until 20 April 2020 at the earliest.

We communicated this change to providers by:

* creating a webpage with guidance about how the service is changing during this period
* adding a banner linking to this guidance to the signed out marketing page
* adding a banner on the signed in dashboard informing users of these changes with a link to the guidance
* updating emails, replacing references to remaining working days with the currently calculated RBD or DBD date
* emailing providers asking them to look at the guidance and to refer to new dates in the manage interface

## Email sent to providers

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Coronavirus: how Apply for teacher training is adapting",
  content: "Dear [providerName]

  You may have heard from UCAS that we won’t be rejecting or declining any offers automatically until 20 April 2020.

  This is to give you more time to make decisions on applications.

  [Our guidance explains how this change will affect you](http://www.apply-for-teacher-traning.education.gov.uk/provider/covid-19-guidance).

  We’ll update this guidance if anything changes, and notify you by email.

  If you have any questions about this, you can contact us at <becomingateacher@digital.education.gov.uk>"
}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Guidance page"
  }, {
    text: "Information banner on signed out landing page"
  }, {
    text: "Information banner on ‘Applications’ page"
  }]
}) }}
