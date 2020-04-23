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

We’ve seen that free-text answers can often lead to candidates submitting applications with spelling errors, which may reduce their chances of being offered an interview.

We also know that providers appreciate having information presented clearly and consistently, as it helps them sift candidates.

However, the primary need for collecting structured answers is ultimately one that comes from the department wanting an overview of the qualifications of teachers. At the moment, this data is collected in a roundabout way and is reported via [HESA](https://www.hesa.ac.uk) (Higher Education Statistics Agency). Post transition, it should be possible for the Apply service to collect this data and report directly to internal teams, rather than require providers or third-party agencies to collect it on our behalf.

## User needs

**As a candidate**
I need to provide the required information efficiently and accurately
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
    text: "Add first degree",
    caption: "For the first degree entered, only undergraduate and postgraduate [degree types](https://www.hesa.ac.uk/collection/c20053/e/degtype) are suggested (postgraduate degree types are included because a first degree can be an integrated masters)."
  }, {
    text: "Add another degree",
    caption: "For subsequent degrees, we no longer show guidance about needing an undergraduate degree. All [degree types](https://www.hesa.ac.uk/collection/c20053/e/degtype) – including doctorates – are suggested."
  }, {
    text: "What subject is your degree?",
    caption: "Candidate can enter free text, but suggestions from HESA’s list of [degree subjects](https://www.hesa.ac.uk/collection/c20053/e/degsbj) are provided."
  }, {
    text: "Which institution did you study at?",
    caption: "The candidate can enter free text, but suggestions from HESA’s list of [degree establishments](https://www.hesa.ac.uk/collection/c20053/e/degest) are provided."
  }, {
    text: "What grade is your degree? (Baccalaureates)",
    caption: "Baccalaureate [degree classes](https://www.hesa.ac.uk/collection/c20053/e/degclss) are shown, but candidates can choose and specify ‘Other’."
  }, {
    text: "What grade is your degree? (Masters and doctorates)",
    caption: "[Degree classes](https://www.hesa.ac.uk/collection/c20053/e/degclss) for all degree types are shown (to account for integrated masters degrees). Candidates can also choose ‘Not applicable’, ‘Unknown’ or specify ‘Other’."
  }, {
    text: "What grade is your degree? (Other)",
    caption: "In both cases, if ‘Other’ is chosen, we accept a free text answer, but suggest other known degree grades."
  }, {
    text: "When did you study for your degree?",
    caption: "Hint text gives examples of expected values."
  }, {
    text: "When did you study for your degree? (First degree with a pending grade)",
    caption: "If this is the first degree entered, and if the candidate hasn’t completed their degree yet, the hint text reinforces the degree requirement. Example values are also updated, with dates based on graduating in the current year."
  }, {
    text: "Review answers",
    caption: "If a baccalaureate degree grade includes honours, the title for the summary card shows ‘(Hons)’ between degree type and subject."
  }]
}) }}
