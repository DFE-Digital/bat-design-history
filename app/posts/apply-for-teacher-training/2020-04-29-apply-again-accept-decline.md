---
title: 'Apply again: Accept or decline an offer and withdrawing'
description: Tweaks to the language used when responding to offers or withdrawing.
date: 2020-04-29
related:
  items:
  - text: Trello
    href: https://trello.com/c/FNV1k2V8/1237-apply-2-update-guidance-on-accepting-or-rejecting-offers
  - text: Pull request
    href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/386
---

“Are you sure you want to accept offer” contained guidance on withdrawing other choices that’s not relevant when applying again (there's only 1 choice).

“Are you sure you want to decline offer” contains guidance about applying again through UCAS, when this feature is launched apply again will not be specific to UCAS.

The updated content removes mention of:

- UCAS when suggesting a candidate can apply again after declining or withdrawing
- the caveat about "all other offers" when declining an offer and "all other choices" when withdrawing, for an application with 1 choice
- automatically withdrawing other choices when accepting an offer on an application with 1 choice

These changes should also apply to first applications that have only 1 choice.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Accept an offer on an application with multiple choices",
      img: { src: "01-accept-offer-on-first-application.png" }
    }, {
      text: "Accept an offer on an application with 1 choice",
      img: { src: "02-accept-offer-on-second-application.png" }
    }, {
      text: "Decline an offer on an application with multiple choices",
      img: { src: "03-decline-offer-on-first-application.png" }
    }, {
      text: "Decline an offer on an application with 1 choice",
      img: { src: "04-decline-offer-on-second-application.png" }
    }, {
      text: "Withdraw choice on an application with multiple choices",
      img: { src: "05-withdraw-choice-on-first-application.png" }
    }, {
      text: "Withdraw choice on an application with 1 choice",
      img: { src: "06-withdraw-choice-on-second-application.png" }
    }]
}) }}
