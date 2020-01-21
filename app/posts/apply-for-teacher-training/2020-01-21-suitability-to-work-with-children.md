---
title: Suitability to work with children
description: Add a section to disclose convictions or anything that could affect suitability to work with children.
related:
  items:
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
---

Universities have given us some "red flag" feedback that we are not doing enough to capture information about criminal convictions in our application form.

Until now we were only subtly referencing criminal records in the final [Anything else to add? section](/apply-for-teacher-training/apply-launch#88-submit-application) of the application form. This comes without any warning to a candidate.

Examples of feedback we received:

* A section for convictions or cautions? In regards to safeguarding and sex offences. They think it is good practice to ask this question. This seems to be a deal-breaker.
* A major red flag was that we don’t ask about unspent criminal convictions/or if someone is on sex offender register. Although a DBS would filter out these candidates later down the line many interview days involve children and so an early question may filter out some unsuitable candidates. [UCAS ask this question](/apply-for-teacher-training/ucas/application#criminal-declaration-in-course-choice) in some form.
* Would like criminal record, honesty is important, they want it as an integrity check

Providers interview before requesting a DBS check. Interviews will often involve working with children. However, during an interview a candidate should never be left unattended – and if they will be, then a DBS check must be requested beforehand.

However, not all universities agree – this is feedback based on an early design where we asked explicitly, like UCAS do:

> We do not undertake safeguarding obligations for interview. We do prior to placement in the school and ultimately continuation on the PGCE programme. We use enhanced DBS, check the Children's Barred List (list 99) and check the prohibition list. We found the [original] question on the form on safeguarding unhelpful. It would create more work as we would have to track what they answered and when, check that with their DBS outcome. What would the provider do if the candidate said 'no' if the DBS was 'yes' or visa versa? This creates an unnecessary step. Indeed the question does not really enable the candidate to 'disclose' anything.
Any 'disclosure' would be superseded by the DBS so it is rather redundant.

## User needs

As a provider I need to know if a candidate has a history that might affect their application because they are unsuitable to work with children, so that I can either discuss and assist them in their journey, or reject them, if appropriate.

As a candidate with a checkered history I need an opportunity to disclose something that might affect my suitability to work with children, so that I can be honest about my past, and discuss it openly with a provider.

As a candidate with a checkered history I need to know what a DBS check is, and what it will say about me, so that I can make a decision about what to disclose beforehand.

## Hypotheses

If we create an explicit section related to safeguarding, then candidates who have something to disclose:

* will know they can disclose if they feel they should
* will have a place to be open and honest about their history

If we encourage candidates to speak directly to their providers before applying then candidates will know:

* how their provider might assist them
* whether their past will affect their application
* whether they would be rejected because of their past (for example a serious sex offence meaning they could never become a teacher)

If we show this information to providers then they can use it to make a decision about the candidate.

If we put the information at the bottom of the provider form, then providers will be less likely to dismiss candidates who disclose something out of hand, because they will have reviewed the rest of their application already.

## Findings

When we demo’d this design to a university (15 Jan) – they said this design would meet their needs. We added the paragraph about checking other sources based on their feedback.

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
