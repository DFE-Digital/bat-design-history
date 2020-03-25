---
title: Suitability to work with children
description: Add a section to disclose convictions or anything that could affect suitability to work with children.
date: 2020-01-21
tags:
- MN009
- AN015
- AN016
related:
  items:
  - text: Survey playback
    href: https://docs.google.com/presentation/d/1sPxwjerXVdunLLzjwSSTOZyT9j9s_xfF_hRf9W412c0/edit#slide=id.p
  - text: Trello ticket
    href: https://trello.com/c/hkMU3bDS/744-re-evaluate-designs-for-criminal-conviction-declarations-feedback-from-providers
  - text: Earlier trello ticket
    href: https://trello.com/c/InaE3OPE/101-dbs-guidance-and-criminal-records-checks
  - text: Candidate PR
    href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/323
  - text: Provider PR
    href: https://github.com/DFE-Digital/manage-teacher-training-applications-prototype/pull/28
  - text: What UCAS do
    href: /apply-for-teacher-training/ucas/application#criminal-declaration-in-course-choice
  - text: List of offences that will never be filtered from a DBS certificate
    href: https://www.gov.uk/government/publications/dbs-list-of-offences-that-will-never-be-filtered-from-a-criminal-record-check
  - text: What will show up on a DBS check
    href: https://www.mind.org.uk/information-support/legal-rights/dbs-checks-and-your-mental-health/what-will-show-up-on-a-dbs-check
  - text: 'Provider research playback'
    href: https://docs.google.com/presentation/d/1Im8T9MkiuyvPnkHa4tOeZU9M-Sl_E10Zkv2mrn6lEJY/edit#slide=id.p
---

{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "[We iterated this design](/apply-for-teacher-training/declaring-safeguarding-concerns)" | markdown("inline"),
  iconFallbackText: "Warning"
}) }}

Universities have given us some "red flag" feedback that we are not doing enough to capture information about criminal convictions in our application form.

Until now we were only subtly referencing criminal records in the final [Anything else to add? section](/apply-for-teacher-training/apply-launch#88-submit-application) of the application form. This comes without any warning to a candidate.

A summary of feedback we’ve received:

* A section for convictions or cautions? In regards to safeguarding and sex offences. They think it is good practice to ask this question. This seems to be a deal-breaker.
* A major red flag was that we don’t ask about unspent criminal convictions/or if someone is on sex offender register. Although a DBS would filter out these candidates later down the line many interview days involve children and so an early question may filter out some unsuitable candidates. [UCAS ask this question](/apply-for-teacher-training/ucas/application#criminal-declaration-in-course-choice) in some form.
* Would like criminal record, honesty is important, they want it as an integrity check

Providers interview before requesting a DBS check. Interviews will often involve working with children.

Some universities disagree – this is feedback based on an early design where we asked explicitly about convictions (like UCAS do):

> We do not undertake safeguarding obligations for interview. We do prior to placement in the school and ultimately continuation on the PGCE programme. We use enhanced DBS, check the Children's Barred List (list 99) and check the prohibition list. We found the [original] question on the form on safeguarding unhelpful. It would create more work as we would have to track what they answered and when, check that with their DBS outcome. What would the provider do if the candidate said 'no' if the DBS was 'yes' or visa versa? This creates an unnecessary step. Indeed the question does not really enable the candidate to 'disclose' anything.

Any 'disclosure' would be superseded by the DBS so it is rather redundant.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Hypotheses

If we create an explicit section related to safeguarding, then candidates who have something to disclose:

* will know they can disclose if they feel they should
* will have a place to be open and honest about their history

If we encourage candidates to speak directly to their providers before applying then candidates will know:

* how their provider might assist them
* whether their past will affect their application
* whether they would be rejected because of their past (for example a serious sex offence meaning they could never become a teacher)

If we tell candidates that providers will check other sources as well as the DBS check, then they will be more likely to disclose something, because they know a provider’s checks are thorough.

If we show this information to providers then they can use it to make a decision about the candidate.

If we put the information at the bottom of the provider form, then providers will be less likely to dismiss candidates who disclose something out of hand, because they will have reviewed the rest of their application already.

(Note: Putting the section at the bottom won’t prevent users from looking at that section first and making a decision, but it should help with a user’s unconscious bias – those who might unknowingly dismiss someone because they disclosed something.)

## Questions

This design is ready for research, but not ready for development.

* How do people respond to this design?
* Do we need to include some examples of things to disclose or not disclose?
* What would those examples be?
* Do we need further details about DBS checks and lists?
* This doesn't have an explicit declaration, is that enough for providers?

## Findings

When we demo’d this design to a university (15 Jan) – they said this design would meet their needs.

### Survey

Because recruiting users for this feature is difficult, we sent a survey out to users of the following forums to get quick responses from a large target audience:

* Online aspiring teachers
* Get into teaching support teaching
* Career changer

We had 39 responses.

42% of respondents correctly judged the title "Your suitability to work with children" related to DBS and safeguarding. But 53% thought it would be a section about experience and personal skills.

Respondents disliked that there were no examples of things that should be included. The purpose of responding to this question and its effect on an application were not clear (it’ll depend on what’s disclosed). They liked that the guidance was clear and concise and thought the tone was right, “It encourages people to be open in a non-forceful way”.

Most respondents said they had nothing to share, 1 shared a health related issue and another said they wouldn't be comfortable sharing, “I would want to be certain that any information I shared would not hinder my application”.

82% of respondents agreed that this question should be asked in the "About you" section.

[Read the full playback](https://docs.google.com/presentation/d/1sPxwjerXVdunLLzjwSSTOZyT9j9s_xfF_hRf9W412c0/edit#slide=id.p)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application with suitability section",
    img: { src: "01-application-with-suitability-section.png" }
  }, {
    text: "Your suitability to work with children",
    img: { src: "02-your-suitability-to-work-with-children.png" }
  }, {
    text: "With yes option selected",
    img: { src: "03-with-yes-option-selected.png" }
  }, {
    text: "Review section",
    img: { src: "04-review-section.png" }
  }, {
    text: "How providers see this",
    img: { src: "05-how-providers-see-this.png" }
  }]
}) }}
