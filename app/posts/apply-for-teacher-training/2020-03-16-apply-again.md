---
title: Applying again (Apply 2)
description: Providing an option for unsuccessful applicants to apply again.
date: 2020-03-16
tags:
  - apply again
screenshots:
  items:
    - text: Apply again banner
      src: 01-apply-again-banner.png
    - text: Do you want to apply again?
      caption: |
        [We’ve iterated this page](/apply-for-teacher-training/apply-again-course-first#do-you-want-to-apply-again) to make it more aspirational and to suggest that applying again is a continuation from the first application.
      src: 02-apply-again-page.png
    - text: Your new application (application copied)
      src: 03-application-copied.png
    - text: With one previous application
      src: 04-with-one-previous-application.png
    - text: A single course choice
      src: 05-a-single-course-choice.png
    - text: A single course added
      src: 06-a-single-course-added.png
    - text: A single course in review
      src: 07-a-single-course-in-review.png
    - text: References, 1 received and 1 replaced
      src: 08-references-received-or-replaced.png
related:
  items:
    - text: Prototype pull request
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/363
    - text: Research playback
      href: https://docs.google.com/presentation/d/18Jsb3Z55caFXD_3KatlHaqdwFClCdZeLYxi_QtCRmho/edit
---

If a candidate is not offered an interview by any of their initial 3 choices (or chooses not to accept an offer or withdraws their application), they can move to a secondary application phase. UCAS calls this ‘Apply 2’.

72% of candidates without an initial offer don’t go on to apply again.

When applying again, a candidate can make an unlimited number of applications, one after another, but only one course choice is allowed. If the candidate is again unsuccessful (or chooses not to accept an offer or withdraws) they can keep applying until they do accept an offer, or until the application cycle for the academic year closes. They must wait up to 40 days before they know if their latest application was successful.

{% from "dist/govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "[We iterated this design after the first round of research](/apply-for-teacher-training/applying-again-iteration)" | markdown("inline"),
  iconFallbackText: "Warning"
}) }}

### Reasons why a candidate might need to apply again

* Withdrew choice(s)
* Declined offer(s)
* Declined by default
* Rejected by provider(s)
* Rejected by default

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## User research

* [Research playback deck](https://docs.google.com/presentation/d/18Jsb3Z55caFXD_3KatlHaqdwFClCdZeLYxi_QtCRmho/edit)
* [Lookback recordings from first iteration](https://lookback.io/dfe-digital/candidates-apply-2-research-round-10)
* [Lookback recordings from second iteration](https://lookback.io/dfe-digital/candidates-apply-2-part-2-round-13)
* [Discussion guide](https://docs.google.com/spreadsheets/d/1pFiuoqEqqkZDQJZksrciMab6O3_RI8LbixwwuuecfSA/edit)

### Apply 2 naming

The term ‘Apply 2’ isn’t helpful in creating awareness or understanding of the opportunity. Instead of introducing the concept of a different named step or feature, we could invite candidates to see Apply 2 as a continuation of their initial application.

### Encouraging the discouraged

After months of preparation, volunteering, and statement-polishing, not receiving an offer can deter people from applying again.

> “The emotional turmoil you go through with it… it’s quite harrowing.”
> “I’m not going to lie, I sat there and cried.”

We tested a message that reaches candidates at just the right time –when they find out that their application is unsuccessful - and that includes a positive productive call to action. And we think it’s working!

> “I would probably think: there is an option of hope, not to give up.”
> “I’ve been rejected but there’s still some hope.”
> “I can see that there is still an option.”

### Prompting users to review and update application content

The design prompts users to review or update each section of their initial application before applying again. This addresses a need to tailor personal statements to new course choices and add experience they acquired since their initial application. Users understand the prompts and progress indicators and can step through them. On the other hand, the obligation to click in and out of each section regardless of whether it needs to change makes the process repetitive and considerably more time consuming than it is currently.

> “I thought I could go specifically to the sections you wanted to edit.”
> “I find this frustrating.”

### Facing obstacles

As ever, at Apply 2, candidates face obstacles that thwart their teaching plans: For one thing, it can be tricky to understand reasons for rejection and to learn what to do differently. For another, uncertainty about real course availability and entry requirements leads candidates to “waste a chance” on an application that’s bound to be unsuccessful.  This, and having to wait 40 days for a response - which may be a rather uninformative rejection by default - can stop candidates from succeeding.

Although they contend with these obstacles, response to Apply Again screens was positive.

> “Compared to the first one [UCAS], this is much more friendly.  The first one I felt like I was in a courtroom, I’m going through this and I can feel that I have my freedom.”
> “it’s good, super clear.”
> “It seems fairly straightforward.”

## User journey

![User journey flow diagram](flow.svg)

### A note on journeys from Find

It might be possible for a candidate to apply to a course from Find when they are eligible for this second phase, but haven’t opted in to it yet. This scenario (and others) are something we may want to consider later.

## Design changes

* Course choices becomes Course choice
* 3 choices becomes 1 choice in guidance
* The ‘add another course’ flow doesn’t happen
* Add an apply again page and link to it in a banner on the dashboard
* Show a ‘Your application was copied’ banner when a new application is made
* Tweak the title of the application page to be "Your new application"
* Show previous applications in the right column
* Show reference statuses to indicate if a reference has been received or not
* Make received references read only (you can delete but not change any other aspect)

[Our review of the service](/apply-for-teacher-training/changes-for-apply-2) highlighted further changes for the ‘Apply again’ context.
