---
title: What needs to change if you’re applying again
description: What guidance, content and designs need to be tweaked when we build Apply 2.
date: 2020-03-23
related:
  items:
    - text: Review in a Google Doc
      href: https://docs.google.com/document/d/1mXGfITybz6qdnVlxSs7mllWm7fbg8FYeFQEN8OPmdl8/edit#
    - text: Trello
      href: https://trello.com/c/iejnCui3/1179-apply-2-review-of-service-through-apply-2-perspective
    - text: Initial prototype PR
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/363
---

A review of the service, [following our initial designs](/apply-for-teacher-training/apply-again), looking for anything we have missed that might need to change when we build Apply 2.

This does not include [things we already know about](https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/363):

* linking to starting a new application in emails and dashboard
* the interstitial for starting a new application
* reviewing previous applications once you’ve started a new application
* course choices referring to 1 choice rather than 3

## Candidate interface

### Primary courses

When you apply to a primary course you need to have a GCSE grade C or above in Science. If a candidate previously applied to a primary course, will we prefill these values? Will they show from the beginning, or only when a primary course gets added?

The guidance for subject knowledge will be different for primary. Consider candidates that apply to:

* primary courses in Apply 1, secondary course in Apply 2
* secondary courses in Apply 1, primary course in Apply 2
* mixed primary and secondary courses in Apply 1

Do we need to flag this? When would we flag it? How would we flag the changes needed to their subject knowledge section?

### Subject knowledge

The content entered when applying in Apply 1 will relate to the courses they choose. In Apply 2 there is no guarantee that they will apply to the same subjects again. If they choose a different subject, then they will probably need to update this section.

### Personal statement

If we implement tailoring, we will need to consider how tailored applications get copied.

### Interview needs

Needs will depend on where and when you are applying. When they apply again:

* any dates entered before may no longer be relevant
* new dates they are unavailable might need to be added
* locations might be different – they might be travelling much further for this interview (for example – a provider that wasn’t their first choice because it was further away)

Should we still prefill this section?
Should we flag it for review?

### Equality and diversity

If the candidate filled this in before, we should show them the “check your answers” page at the beginning of the flow, rather than asking all the questions again.

### Anything else you need to tell us

This question appears at the end. Would we also prefill this? It’s a catch-all so it’s hard to know if the content here will still be relevant. Would candidates expect this bit to be copied?

### You’ve submitted page

We have guidance here about contacting references. If references weren’t changed, we can omit or say something different.

Same goes for the plurals used in the track, edit or withdraw guidance here.

### Editing your application guidance page

Is this page still relevant? Will we keep the 5 day window? How would we update this guidance?

### Dashboard

* “Courses you’ve applied to” should be singular
* “All your training providers have now reached a decision” should also be singular

### Accepting or rejecting offers

“Are you sure you want to accept offer” has guidance on withdrawing other choices that’s not relevant

“Are you sure you want to decline offer” – has details about applying again through UCAS which will need updating to reference Apply 2.

## Emails

### Application submitted email

* might need to remove the section on Amending, if we’re not doing the 5 day thing
* withdrawn courses needs to be singular, also remove (s)
* if the candidate kept their references, we shouldn’t include the references section

### Rejected email

Update the Apply for more courses section or remove altogether if a separate email will go out – we need to decide our strategy here.

[Example email](https://qa.apply-for-teacher-training.education.gov.uk/rails/mailers/candidate_mailer/application_rejected_all_rejected)

## Tickets created from this review

* https://trello.com/c/wbmtsFzn/1233-apply-2-show-journey-for-completing-equality-questionnaire-when-answers-already-given
* https://trello.com/c/oEMPAxzK/1235-dev-add-logic-to-pluralize-training-providers-on-you-submitted-your-application-page
* https://trello.com/c/2i3hw1lz/1234-apply-2-update-references-guidance-on-you-submitted-your-application-page
* https://trello.com/c/oEMPAxzK/1235-dev-add-logic-to-pluralize-training-providers-on-dashboard
* https://trello.com/c/FNV1k2V8/1237-apply-2-update-guidance-on-accepting-or-rejecting-offers
* https://trello.com/c/0rkgjeLO/1238-apply-2-anything-else-does-that-get-pre-filled
* https://trello.com/c/CnYMXzRi/1239-apply-2-do-we-pre-fill-or-flag-interview-needs
* https://trello.com/c/VdV5CGhz/1240-apply-2-how-do-we-handle-choosing-different-subjects-or-phases-in-apply-2
* https://trello.com/c/oa6PiYAq/1241-apply-2-update-application-submitted-and-application-rejected-emails
