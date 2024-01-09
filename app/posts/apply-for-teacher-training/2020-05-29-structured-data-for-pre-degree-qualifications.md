---
title: Structured data for pre-degree qualifications
description: Capturing structured answers for GCSE and other pre-degree qualifications.
date: 2020-05-29
tags:
  - qualifications
screenshots:
  items:
  - text: Add maths GCSE grade 4 (C) or above, or equivalent
    caption: A reminder of the different GCSE standard equivalent options we show candidates (in this case for maths). The label for ‘GCE O level’ is changed to ‘O level’ to avoid confusion with GCSE.
  - text: What grade is your maths GCSE?
    caption: This question is unchanged, except that the grade field now uses an autocomplete that gives options from 9 to 1, A\* to G, and U.
  - text: What English GCSE did you do?
    caption: For an English GCSE, we ask candidates to enter each of their GCSE qualifications in this subject area. When entering grades, an autocomplete gives a list of options from 9 to 1, A\* to G, and U. For English and English Studies, as both single and double awards are available, these options go from 9-9 to 1-1, A\*A\* to GG, 9 to 1, A to G, and U. If they select ‘Other English subject’, we also ask for the name of the exam.
  - text: What science GCSEs did you do?
    caption: For science GCSEs, we ask candidates to tell us how many science GCSEs they did. When entering grades, an autocomplete gives a list of options. For a single award, options go from 9 to 1, A* to G, and U. For a double award, options go from 9-9 to 1-1, A\*A\* to GG, and U. For a triple award, we ask for a grade for each subject – Biology, Chemistry and Physics – and single grade options are given.
  - text: Reviewing GCSEs
    caption: Where applicable, we show the exam type alongside each grade.
  - text: Academic and other relevant qualifications
    caption: |
      A reminder of the different qualification options we show candidates. If you select ‘Other UK qualification’ suggestions are given for the following from this list of common Scottish and vocational qualifications:

      * BTEC
      * GCE O level
      * NVQ
      * Scottish National 5
      * Scottish Higher
      * Scottish Advanced Higher
      * SVQ
      * VRQ
  - text: Add GCSE qualification
    caption: Candidates can enter free text for a subject, but GCSE subjects are suggested. We de-duplicate qualifications with similar names, and while we include pilot qualifications, don’t display or store this information. When entering grades, an autocomplete gives a list of options, with both single and double award grades available (9-9 to 1-1, A\*A\* to GG, 9 to 1, A to G, and U).
  - text: Add AS level qualification
    caption: Candidates can enter free text for a subject, but AS level subjects are suggested. We de-duplicate qualifications with similar names, and while we include pilot qualifications, don’t display or store this information. When entering grades, an autocomplete gives a list of options, with both single and double award grades available (AA to DE, A to E, and U).
  - text: Add A level qualification
    caption: Candidates can enter free text for a subject, but A level subjects are suggested. We de-duplicate qualifications with similar names, and while we include pilot qualifications, don’t display or store this information. When entering grades, an autocomplete gives a list of options, with both single and double award grades available (A\*A\* to DE, A* to E, and U).
  - text: Add BTEC, NVQ or VRQ qualification
    caption: "When entering grades, an autocomplete gives a list of grade options: Distinction, Merit, Pass, Unclassified and Not applicable."
related:
  items:
    - text: Ofqual’s register of qualifications
      href: https://register.ofqual.gov.uk/Download
    - text: Pull request
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/389
    - text: Structured data for qualifications (Google Sheet)
      href: https://docs.google.com/spreadsheets/d/1F-Rrk3d732ep6ifc5-KdDi9zlgo9lBVk1Z8-sOElgVg
---

{% from "dist/govuk/components/inset-text/macro.njk" import govukInsetText %}
{{ govukInsetText({
  html: "This follows on from the work to [allow degree qualifications to use structured data](/apply-for-teacher-training/structured-data-for-degrees)." | markdown
}) }}

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

## Analysis

There are a wide range of qualifications that candidates could receive which are not degree level qualifications. [Ofqual](https://www.gov.uk/government/organisations/ofqual) is the regulator for qualifications in the UK. Their ‘canonical’ register of qualifications totals nearly 43,000 individual qualifications pre-degree.

In 2019, the most common types of qualification pre-degree awarded are:

* GCSE (9-1)
* Vocational qualifications
  * BTEC
  * RQF/VRQ (formerly named and now colloquially known as NVQs)
  * NVQ
* A level
* GCSE (A*-G)
* AS level

There is then a second tier of qualifications which are common but less than the above:

* Scottish higher
* International baccalaureate

A more detailed breakdown can be found in the [annual qualifications market report for 2018/19](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/863891/Annual_Qualifications_Market_Report_academic_year_2018_to_2019.pdf).

Statistically, it is more likely that candidates with GCSEs, A levels and International baccalaureates will go on to study for a degree, than vocational qualifications, thus making up a higher percentage of our potential user base.

In 2016, 10.5% of university students held a BTEC qualification and in 2018 less than 60% completed their studies.

### GCSE

GCSEs are the most qualification to be held by candidates and therefore our initial priority for structuring.

Recent changes to the grading structure require multiple options for candidates to select from.

After 2017, candidates taking single GCSEs receive a single grade from 9 to 1 for each subject. If a candidate takes a combined science qualification, they receive an award worth 2 GCSEs that consists of two equal or adjacent grades from 9 to 1, giving [17 possible grade combinations](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/693519/Combined_science_grading.pdf). Prior to 2017, double award consisted of two equal or adjacent grades from A\*A\* to GG (and the non-grade U).

### A level and AS level

Pass grades for A and AS levels range from A to E. Those who do not reach the minimum standard required for a grade E receive the non-grade U. The A\* grade was introduced in 2010 for A levels only. A levels offering double awards consist of two equal or adjacent grades from A\*A\* to DE.

### NVQ (and equivalents)

Although NVQs are vocational qualifications, they can be measured against a number of other certifications, allowing a range of career and education opportunities:

* NVQ Level 1 equivalent – 3/4 GCSE grades D-G
* NVQ Level 2 equivalent – 4-5 GCSE grades A*-C
* NVQ Level 3 equivalent – 2 A levels
* NVQ Level 4 equivalent – Higher Education Certificate/BTEC
* NVQ Level 5 equivalent – Higher Education Diploma/Foundation Degree

There are no grades for NVQ, you either pass or do not meet the level required (there is no fail).

### BTEC (and equivalents)

BTECs can simarly be measured against a number of other certifications:

* Entry Level - Below GCSE
* Level 1-2 - GCSE
* Level 3 - A level
* Level 4-5 - Years 1 and 2 of an undergraduate degree

Possible grades are distinction, merit, pass, or unclassified.
