---
title: Structured data for degree qualifications
description: Capturing structured answers for degree qualifications to facilitate reporting to HESA.
date: 2020-04-16
related:
  title: HESA data items for the Initial Teacher Training record 2020/21
  items:
    - text: Previous degree type
      href: https://www.hesa.ac.uk/collection/c20053/e/degtype
    - text: Previous degree subject
      href: https://www.hesa.ac.uk/collection/c20053/e/degsbj
    - text: Previous degree establishment
      href: https://www.hesa.ac.uk/collection/c20053/e/degest
    - text: Previous degree class
      href: https://www.hesa.ac.uk/collection/c20053/e/degclss
---

Since the service launched in November, candidates have been able to enter details about their degrees using free text answers for most questions, and without the full range of degree grades to choose from.

We’ve seen that free text answers can often lead to candidates submitting applications with spelling errors, which may reduce their chances of being offered an interview.

We also know that providers appreciate having information presented clearly and consistently, as it helps them sift candidates.

However, the primary need for collecting structured answers is ultimately one that comes from inside the department, and wanting to have an overview of the qualifications of teachers. At the moment, this data is collected in a roundabout way and is reported via [HESA](https://www.hesa.ac.uk) (Higher Education Statistics Agency). Post transition, it should be possible for the Apply service to collect this data and report directly to internal teams, rather than require providers or third-party agencies to collect it on our behalf.

## User needs

**As a candidate**
I need to provide required information efficiently and accurately
So that I can complete my application

**As a provider**
I need to see qualifications presented in a clear and consistent manner
So that I can easily review an application and understand whether a candidate has the relevant qualifications

**As a provider**
I need to be able to provide HESA with structured reporting data
So that I can meet my data reporting obligations

**As the Department for Education**
We need to collect structured data on degree qualifications from HESA
So that the department has data on the qualifications of teachers

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Add undergraduate degree",
    caption: "For the first degree entered, the candidate can choose only an undergraduate degree type."
  }, {
    text: "Add another degree",
    caption: "For subsequent degrees, we no longer show hint text about needing an undergraduate degree, and the candidate can choose any degree type."
  }, {
    text: "What subject is your degree?",
    caption: "The candidate can enter free text, but suggestions from HESA’s list of degree subjects are provided."
  }, {
    text: "What institution did you go to?",
    caption: "The candidate can enter free text, but suggestions from HESA’s list of degree establishments are provided."
  }, {
    text: "What grade is your degree? (Undergraduate degree)",
    caption: "Undergraduate degree grades are provided, but candidates can choose and specify ‘Other’"
  }, {
    text: "What grade is your degree? (Undergraduate degree) – Other",
    caption: "If ‘Other’ is choosen, we allow a free text answer, but suggest other known (but little used) undergraduate degree types."
  }, {
    text: "What grade is your degree? (Postgraduate degree)",
    caption: "Postgraduate degree grades are provided, but candidates can choose ‘Unknown’ or specify ‘Other’"
  }, {
    text: "When did you study for your degree?",
    caption: "If the candidate hasn’t graduated yet, the ‘Year graduated’ label changes to ‘When will you graduate?’"
  }, {
    text: "Review answers",
    caption: "If the degree grade includes honours, the title for the summary card shows ‘(Hons)’ between degree type and subject."
  }]
}) }}
