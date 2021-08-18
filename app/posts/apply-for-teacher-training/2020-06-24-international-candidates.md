---
title: Opening up the service to international candidates
description: Allowing international candidates to give details about their residency status, address, language skills and academic qualifications.
date: 2020-06-24
tags:
  - AN025
  - AN026
  - AN027
  - MN015
related:
  items:
    - text: "International candidates: Analysis"
      href: https://docs.google.com/presentation/d/1k6yi90ywhOt8yDjSZBNa7k0xmrbVQbmZd_ymvAC1KaE
    - text: "International candidates: User research findings"
      href: https://docs.google.com/presentation/d/1HLxjU9sidIpKRupV_9g8yVFLOHWZNBdEG_k4X4QH0Mk
---

When we launched the service in November, we de-scoped all features related to international recruitment.

[We asked users if they were a UK/EU citizen and if they gained all their qualifications at UK-based institutions](/apply-for-teacher-training/apply-launch/#03-check-eligibility). If they answered no to one or both questions, they could not use our service, and were directed to UCAS.

We’re now removing these restrictions to deliver a service that works for everyone.

## Why is international recruitment an issue?

International recruitment is an area of increasing focus for the department.

International candidates currently account for a small proportion of applicants, and many do not get offered a place.

In 2018, 43% of EU candidates and 70% of non-EU candidates were not placed, compared to 35% of UK candidates.

The barriers international candidates face when applying may be affecting this.

### Barriers for international candidates

International candidates need to understand more, give more information, spend more money and wait around more than domestic candidates. For example they need to:

* understand the teacher training system – the [Aspiring Teacher Facebook Forum](https://www.facebook.com/groups/1357146377672255/) and [Get Into Teaching](https://getintoteaching.education.gov.uk/) website are not optimised to appear in search results outside of the UK

* give information about residency status and qualification equivalencies

* spend money on things like equivalency statements, document translation and travel to interviews

* wait around for translations and equivalence certificates

Some of this friction is inevitable. Other parts are being addressed by our colleagues in Get Into Teaching, Find and international policy.

There are some aspects we can address through the application process.

## Residency and visa status

{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "[We later iterated how we ask for nationality in this section](/apply-for-teacher-training/nationality)" | markdown("inline"),
  iconFallbackText: "Warning"
}) }}

If a candidate does not already have the right to work or study in the UK there are 2 visa routes: a general work visa ([Tier 2](https://www.gov.uk/tier-2-general)) for salaried courses, or a general student visa ([Tier 4](https://www.gov.uk/tier-4-general-visa)).

Our [initial design for residency status](/apply-for-teacher-training/residency-status/) assumed that candidates would know which visa they require.

However, research with international candidates suggested that it’s too early in the process to ask this question. Candidates have not necessarily considered these details yet, and financial circumstances (and therefore visa requirements) might change between application and acceptance.

It may be useful for international applicants to know which providers can sponsor a visa, but this information should be available earlier in the journey – possibly on Find.

### User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({
  items: collections['user-need'] | slugs(['AN025'])
}) }}

### Hypothesis

If we allow international candidates to defer entering details about visas
Then they can continue with their application
We’ll know this works when the proportion of international candidates who submit a complete application compared to those who start, is comparable to the same value for domestic candidates.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 3,
  items: [{
    text: "Personal details",
    caption: "Ask the nationality question in a separate step and remove the question about languages spoken."
  }, {
    text: "What is your nationality?",
    caption: "* British and Irish – no further questions are asked\n* Other – candidate asked to select nationality from structured list\n* I have multiple nationalities – candidate can give details as free text"
  }, {
    text: "Do you have the right to work or study in the UK? (Yes)",
    caption: "Candidates who are not British or Irish are asked to give details about their residency status, if they know it. They can give details of their residency, or indicate that this is something they will need to consider later."
  }, {
    text: "Do you have the right to work or study in the UK? (Not yet)",
    caption: "They can also indicate that this is something they will need to consider later by selecting ‘Not yet’ or ‘I do not know’."
  }, {
    text: "Reviewing personal details"
  }]
}) }}

## International addresses

This section remains largely unchanged from the [original design for capturing international addresses](/apply-for-teacher-training/international-address/). However, so that we can derive a candidate’s domicile from the information given in this section, we ask for the country a candidate lives in before they give their address.

{{ appScreenshots({
  headingLevel: 3,
  items: [{
    text: "Where do you live?"
  }, {
    text: "What is your address"
  }]
}) }}

## English language proficiency

Our [original design for English language proficiency](/apply-for-teacher-training/apply-launch/#30-personal-details) asked candidates to tell us if their main language is English. If yes, we asked them if they spoke any other languages. If no, we asked for details of any English language qualifications they have, as well as other languages spoken.

This design caused a number of questions.

What counts as a main language?
: In our user research, international candidates found this question confusing. [See P1 on Lookback](https://lookback.io/watch/XWuzeuQ5Rky8QSBCg).

Do we really need to ask about other languages spoken?
: Or is this only relevant for certain courses/providers?

Does it give providers the information they need?
: The original design did not capture English language qualifications in a structured way. Providers tend to look for evidence of ability – such as a GCSE English equivalent or an English language qualification such as IELTS or TOEFL – so structured data is useful.

### User needs

{{ appUserNeeds({
  items: collections['user-need'] | slugs(['AN026'])
}) }}

{{ appUserNeeds({
  items: collections['user-need'] | slugs(['MN015'])
}) }}

### Hypothesis

If we allow international candidates to enter an English language qualification
Then they can better understand the eligibility criteria and what’s needed of them
We’ll know this works when providers get the information they need to decide whether to make an offer.

{{ appScreenshots({
  headingLevel: 3,
  items: [{
    text: "Your application – qualifications",
    caption: "If the nationality is not British or Irish, we show an ‘English as a foreign language section under the qualifications title on the application."
  }, {
    text: "English as a foreign language",
    caption: "We ask candidates if they have an English as a foreign language qualification. If yes, we ask them for details in the next step. If no, they can provide further details about working towards getting one. Candidates can also respond by saying that they don’t consider English to be a foreign language to them."
  }, {
    text: "What English language qualification do you have?",
    caption: "The 2 most common qualifications are shown, as well as an option for other."
  }, {
    text: "Add IELTS qualification",
    caption: "We ask for a Test Report Form (TRF) number and overall band score, as well as the year the qualification was awarded."
  }, {
    text: "Add TOEFL qualification",
    caption: "We ask for a registration number and total score, as well as the year the qualification was awarded."
  }, {
    text: "Add English language qualification",
    caption: "For any other english language qualification, we ask for its name, a score or grade, as well as the year the qualification was awarded."
  }, {
    text: "Reviewing English as a foreign language"
  }, {
    text: "Reviewing English as a foreign language (Don’t have)",
    caption: "If a cadidate doesn’t yet have a qualification, we show any reason they’ve given."
  }, {
    text: "Reviewing English as a foreign language (Don’t need)",
    caption: "If a cadidate doesn’t need a qualification because English is not a foreign language, we show that response."
  }]
}) }}

## International qualifications

Our [original design around international qualifications](/apply-for-teacher-training/international-qualifications/) asked candidates if they knew how their degree and GCSE equivalent qualifications compared to UK qualifications, and to enter a NARIC statement of comparability number if they had one.

In our user research however, many candidates either did not understand or were unable to respond to these and other questions in this section.

Terms like ‘GCSE’, ‘grade’, ‘subject’, and ‘awarding body’ were either unfamiliar or had a different meaning to what is understood in the UK. For example:

* ‘Grade 4’ means Year 4 in Canada and the US

* some countries do not use the term subject, but instead use terms like ‘minors’ and ‘majors’

* not all qualifications have grades – it could be pass or fail, a GPA (grade point average) or a percentage

### User need

{{ appUserNeeds({
  items: collections['user-need'] | slugs(['AN027'])
}) }}

### Hypothesis

If we provide examples of the type of answer required for qualification type, subject taken and grade
Then candidates with international qualifications will be better able to answer
We’ll know this works when providers are able to make an informed decision.

If we explicitly ask candidates with international qualifications for a NARIC statement of comparability
Then they will better understand how to prove that their qualification is valid
We’ll know this works when providers are able to make an informed decision.

{{ appScreenshots({
  title: "Screenshots: Degrees",
  headingLevel: 3,
  items: [{
    text: "Add undergraduate degree",
    caption: "When selecting the ‘Non-UK degree’ option, we ask for the type of qualification, giving examples from the United States, India, France and Spain."
  }, {
    text: "What subject is your degree?",
    caption: "Give examples, including major/minor subject degrees."
  }, {
    text: "Which institution did you study at?",
    caption: "For international degrees, we also ask for the country the institution is based in, with selection from a structured list of countries."
  }, {
    text: "Do you have a NARIC statement of comparability for your degree? (Yes)",
    caption: "If yes, we ask for a NARIC reference number as well as the comparable qualification shown on the certificate (up to integrated masters degree). We only ask this for the first undergraduate degree entered."
  }, {
    text: "Do you have a NARIC statement of comparability for your degree? (No)",
    caption: "If no, we advise candidates to check with their provider if this is needed, and Get Into Teaching."
  }, {
    text: "What grade is your degree?",
    caption: "When asking for a grade, we give the following options: ‘Not applicable’, ‘Unknown’, ‘Other’ and ‘I’m still studying for my degree‘. If ‘Other’ is selected, hint text gives example grade values."
  }, {
    text: "What grade is your degree? (I’m still studying for my degree)",
    caption: "‘I’m still studying for my degree’ shows the same guidance as that for domestic candidates."
  }, {
    text: "When did you study for your degree?",
    caption: "Same as for a UK degree."
  }, {
    text: "Reviewing degrees"
  }]
}) }}

{{ appScreenshots({
  title: "Screenshots: GCSE or equivalent",
  headingLevel: 3,
  items: [{
    text: "Add maths GCSE grade 4 (C) or above, or equivalent",
    caption: "When selecting the ‘Non-UK qualification’ option, we ask for the type of qualification, giving examples from the United States, India, France and Spain."
  }, {
    text: "In which country did you study for your maths qualification?",
    caption: "Selection is from a structured list of countries."
  }, {
    text: "Do you have a NARIC statement of comparability for your maths qualification? (Yes)",
    caption: "If yes, we ask for a NARIC reference number as well as the comparable qualification shown on the certificate (up to GCE Advanced (A) Level)."
  }, {
    text: "Do you have a NARIC statement of comparability for your maths qualification? (No)",
    caption: "If no, we advise candidates to check with their provider if this is needed, and Get Into Teaching."
  }, {
    text: "What grade is your maths qualification?",
    caption: "When asking for a grade, we give the following options: ‘Not applicable’, ‘Unknown’ and ‘Other’. If ‘Other’ is selected, hint text gives example grade values."
  }, {
    text: "When was your maths qualification awarded?",
    caption: "Same as for a UK qualification."
  }, {
    text: "Reviewing maths GCSE or equivalent"
  }]
}) }}

{{ appScreenshots({
  title: "Screenshots: other qualifications",
  headingLevel: 3,
  items: [{
    text: "Academic and other relevant qualifications",
    caption: "When selecting the ‘Non-UK qualification’ option, we ask for the type of qualification, giving examples from the United States, India, France and Spain."
  }, {
    text: "Add non-UK qualification",
    caption: "We ask for the country where you studied (with selection from a structured list) while grade is optional."
  }, {
    text: "Reviewing academic and other relevant qualifications"
  }]
}) }}
