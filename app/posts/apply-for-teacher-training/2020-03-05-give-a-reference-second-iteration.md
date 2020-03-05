---
title: Give a reference (second iteration)
description: Asking for more information from referees.
date: 2020-03-05
tags:
 - MN010
 - MN011
---
Following user testing with providers, we identified two new user needs. We iterated [the previous design](/apply-for-teacher-training/give-a-reference-iteration), adding two additional questions (and a review step) to make sure we gather the information needed.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Confirm relationship",
    caption: "Start by asking the referee to confirm that the candidate’s description of the relationship is correct."
  }, {
    text: "Safeguarding concerns",
    caption: "Ask the referee if they have any reason to believe the candidate isn’t safe to work with children."
  }, {
    text: "Reference",
    caption: "The question prompting for a reference remains broadly similar to what appeared in the previous iteration."
  }, {
    text: "Reference (for an academic referee)",
    caption: "If the requested reference is an acamedic one, then we show additional guidance."
  }, {
    text: "Check your answers",
    caption: "Referees can review their answer before submitting their response."
  }, {
    text: "Confirmation and feedback survey",
    caption: "The question asking if the referee would feel able to answer a safeguarding question is removed from the feedback form."
  }, {
    text: "Request email",
    caption: "The courses a candidate has applied to are no longer shown in the reference journey, but provided in the email instead."
  }, {
    text: "Chaser email",
    caption: "The courses a candidate has applied to are no longer shown in the reference journey, but provided in the email instead."
  }, {
    text: "Provider view (with amended relationship)",
    caption: "If the referee provides a correction for their relationship to the candidate, we show their answer in the ‘Relationship confirmed by referee’ item. Otherwise, we show ‘Yes’."
  }, {
    text: "Provider view (with safeguarding concern)",
    caption: "If the referee has a safeguarding concern, we show their response against the ‘Does referee know of any reason why this candidate should not work with children’. Otherwise, we show ‘No’."
  }]
}) }}
