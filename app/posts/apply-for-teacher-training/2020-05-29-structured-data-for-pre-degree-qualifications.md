---
title: Structured data for pre-degree qualifications
description: Capturing structured answers for GCSE and other pre-degree qualifications.
date: 2020-05-29
related:
  items:
    - text: Ofqual’s register of qualifications
      href: https://register.ofqual.gov.uk/Download
    - text: Pull request
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/389
---
<div class="govuk-inset-text">
  <p>This follows on from the work to <a href="/apply-for-teacher-training/structured-data-for-degrees">allow degree qualifications to use structured data</a>.</p>
</div>

Since the service launched in November, candidates have been able to enter details about their academic and other relevant qualifications using free text answers for most questions.

We’ve seen that free-text answers can often lead to candidates submitting applications with spelling errors, which may reduce their chances of being offered an interview.

There is also some complexity around entering GCSE standard equivalent qualifications; there are a number of different English GCSE exams (of which English and English language are preferred), and science GCSEs can be awarded in a number of different ways.

We also know that providers appreciate having information presented clearly and consistently, as it helps them sift candidates.

## User needs

**As a candidate**
I need to provide the required information efficiently and accurately
So that I can complete my application

**As a provider**
I need to see qualifications presented in a clear and consistent manner
So that I can easily review an application and understand whether a candidate has the relevant qualifications

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Add maths GCSE grade 4 (C) or above, or equivalent",
    caption: "A reminder of the different GCSE standard equivalent options we show candidates (in this case for maths). The label for ‘GCE O level’ is changed to ‘O level’ to avoid confusion with GCSE."
  }, {
    text: "What grade is your maths GCSE?",
    caption: "This question is unchanged, except that the grade field now uses an autocomplete that gives options from 9 to 1, A\* to G, and U."
  }, {
    text: "What English GCSE did you do?",
    caption: "For an English GCSE, we ask candidates to enter each of their GCSE qualifications in this subject area. When entering grades, an autocomplete gives a list of options from 9 to 1, A\* to G, and U. For English and English Studies, as both single and double awards are available, these options go from 9-9 to 1-1, A\*A\\* to GG, 9 to 1, A to G, and U. If they select ‘Other English subject’, we also ask for the name of the exam."
  }, {
    text: "What science GCSEs did you do?",
    caption: "For science GCSEs, we ask candidates to tell us how many science GCSEs they did. When entering grades, an autocomplete gives a list of options. For a single award, options go from 9 to 1, A* to G, and U. For a double award, options go from 9-9 to 1-1, A\*A\\* to GG, and U. For a triple award, we ask for a grade for each subject – Biology, Chemistry and Physics – and single grade options are given."
  }, {
    text: "Reviewing GCSEs",
    caption: "Where applicable, we show the exam type alongside each grade."
  }, {
    text: "Academic and other relevant qualifications",
    caption: "A reminder of the different qualification options we show candidates. If you select ‘Other UK qualification’ suggestions are given for the following from this list of common Scottish and vocational qualifications:

* BTEC
* GCE O level
* NVQ
* Scottish National 5
* Scottish Higher
* Scottish Advanced Higher
* SVQ
* VRQ"
  }, {
    text: "Add GCSE qualification",
    caption: "Candidates can enter free text for a subject, but GCSE subjects are suggested. When entering grades, an autocomplete gives a list of options, with both single and double award grades available (9-9 to 1-1, A\*A\* to GG, 9 to 1, A to G, and U)."
  }, {
    text: "Add AS level qualification",
    caption: "Candidates can enter free text for a subject, but AS level subjects are suggested. When entering grades, an autocomplete gives a list of options, with both single and double award grades available (AA to DE, A to E, and U)."
  }, {
    text: "Add A level qualification",
    caption: "Candidates can enter free text for a subject, but A level subjects are suggested. When entering grades, an autocomplete gives a list of options, with both single and double award grades available (A\*A\\* to DE, A to E, and U)."
  }, {
    text: "Add BTEC, NVQ or VRQ qualification",
    caption: "When entering grades, an autocomplete gives a list of options, with both single and double award grades available (Distinction, Merit, Pass, Unclassified and Not applicable)."
  }]
}) }}
