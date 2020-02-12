---
title: Giving details about disability
description: Training with a disability and reasonable adjustments course choices.
date: 2019-12-06
---
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "[See previous iteration here](/apply-for-teacher-training/training-with-a-disability-iteration)" | markdown("inline"),
  iconFallbackText: "Warning"
}) }}

Disclosing a disability is a way for candidates to present their disability and needs to a provider, with the potential benefit of making training easier and more accessible.

But disclosure could also put the candidate at risk of unconscious bias and discrimination from providers.

The later a candidate finds out their access needs can’t be adequately met, or that a provider has the wrong attitude towards meeting them, the more pain that candidate will go through.

Encouraging early conversation (perhaps anonymously) between candidates with disabilities and the right people at their potential training providers will help.

## Reasonable adjustments

People with disabilities sometimes need reasonable adjustments so they can complete their training. An example of a reasonable adjustment is fitting an [audio induction loop](https://en.wikipedia.org/wiki/Audio_induction_loop) to assist people with reduced hearing ranges who use hearing aids. If someone is completely deaf and needs a full time British Sign Language interpreter, this is very expensive and could be considered unreasonable.

[More about reasonable adjustments](https://www.gov.uk/reasonable-adjustments-for-disabled-workers)

## Descoped from MVP

We descoped this feature from MVP for the following reasons:

* We haven’t researched this question properly, from a user, policy and legal perspective
* Candidates can use the interview preferences field to declare interview needs, and could use the catch-all “Anything else” section at the end to talk about their disability in a wider context (though they won’t know this beforehand).
* We will plan and carry out proper research with the right cohort of participants, both those who have previously applied, and potentially by finding those that have been unsuccessful/rejected

We need to speak to current trainees with disabilities and find out what worked for them and what didn’t during their application process.

## Advice from the Equality and Human Rights Commission on encouraging disability disclosure

From a lawyer at EHRC we found out that:

* under section 60 of the Equality Act you shouldn’t normally encourage disability disclosure before offering a job (relevant to salaried teacher training routes)
* however, there are exceptions under the Education Act 2002 and the The Education (Health Standards) (England) Regulations 2003
* when read together, these bits of legislation say that schools can ask relevant questions about disability/health
* the same goes if a candidate is going down a non salaried route – providers can ask relevant questions so they can take reasonable steps to accommodate a candidate/ascertain the candidate’s ability to carry out the post
* encouraging disability disclosure in this context is not unlawful but it’s a good idea to be explicit about why we’re encouraging it and to make providers and candidates aware of their duties/rights – for example, are providers asking relevant questions? Do candidates know what kind of questions are appropriate?

“Relevant” is subjective, but see [sections 5 and 6 of the The Education (Health Standards) (England) Regulations 2003](http://www.legislation.gov.uk/uksi/2003/3139/regulation/5/made).

Essentially, we can ask questions if it’s regarding an applicant’s ability to do the activities outlined in this legislation.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Training with a disability" },
    { text: "Review when disability given" },
    { text: "Review without disability" }
  ]
}) }}
