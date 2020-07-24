---
title: Showing international candidate and structured qualifications data
description: Updating the provider interface to show new information about international candidates and support changes to how we collect qualifications data.
date: 2020-07-27
---

We’ve recently enabled candidates to use structured data to select their qualifications on Apply for teacher training. This includes [international qualifications](/apply-for-teacher-training/international-candidates/#international-qualifications).

The service has also been updated to allow international candidates to give details of their residency status and their English as a foreign language qualifications, if they have any.

We need to ensure these changes are reflected in the provider interface.

## Nationality

[Candidates can now add multiple nationalities](/apply-for-teacher-training/nationality) (up to 5). Manage teacher training applications will be updated to ensure that all nationalities can be shown.

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "nationalities.png"
  },
  caption: "Personal details with 3 nationalities shown."
}) }}

## Residency status

We’ve recently made [changes to the residency section on the candidate interface](/apply-for-teacher-training/international-candidates/#residency-and-visa-status). Candidates who do not have British or Irish nationality can now say that they:

* have the right to work in the UK
* do not have the right to work in the UK yet
* do not know whether they have the right to work in the UK

The provider interface will show a new ‘Has the right to work or study in the UK?’ field in the personal details section. This will show one of the following, depending on the candidate’s answer:

* ‘Yes’
* ‘Not yet’
* ‘Candidate does not know’

If the candidate indicates that they have the right to work or study in the UK, we show an additional ‘Residency status’ field on the provider interface which displays the free text answer given by the candidate that gives more details about their circumstances.

{{ appFigure({
  image: {
    file: "residency.png"
  },
  caption: "Personal details with residency status and additional details shown."
}) }}

## Degree(s)

Candidates can now [enter details about a UK degree using structured data](/apply-for-teacher-training/structured-data-for-degrees/) for subject, institution and grade. The same information will be shown in the provider interface, but now the underlying data will include the codes needed for a HESA return.

International candidates can include information from a NARIC statement of comparability if they have one. [A NARIC statement of comparability shows what UK qualification a candidate’s qualification is comparable to](https://www.naric.org.uk/naric/Individuals/Compare%20Qualifications/documents/SoC.pdf).

We need to show this information in a way that makes sense to providers, alongside other qualifications data.

We will display this information in the format of a card, or multiple cards, showing the following information where relevant:

* ### Degree type and subject

  For example, ‘BA (Hons) Graphic design’, ‘BSc Physics’, ‘Diplôme Population ecology’. ‘(Hons)’ is shown after the degree type if the candidate was awarded an honours grade.

* ### Institution and county

  For example ‘University of Paris, France’. This information is only shown for international degrees.

* ### Year started and year graduated

  For example, ‘1999 to 2002’.

* ### Grade

  For example, ‘Upper second-class honours (2:1)’, ‘Predicted: First class honours’, ‘Pass’. This value is prefixed by ‘Predicted:’ if predicted grade was given.

* ### NARIC statement and comparability

  For example, ‘NARIC statement #4000228363 says this is comparable to a Bachelor (Honours) degree.’ This is only shown for international degrees, and if details have been given by the candidate.

{{ appFigure({
  image: {
    file: "qualification-card-uk-degree.png"
  },
  caption: "Qualification card showing a UK degree."
}) }}

{{ appFigure({
  image: {
    file: "qualification-card-international-degree.png"
  },
  caption: "Qualification card showing an international degree."
}) }}

## GCSE equivalents

Candidates can now [enter details about GCSEs using structured data](/apply-for-teacher-training/structured-data-for-pre-degree-qualifications/) for subject and grade.

For English GCSEs, they can give details of each English exam taken (for example, English Language and English Literature).

For science GCSEs, candidates can indicate whether they got a single or double award grade, or grades from 3 separate science subjects.

The provider interface needs to be updated to account for these changes.

International candidates can also now [include information from a NARIC statement of comparability](/apply-for-teacher-training/international-candidates/#international-qualifications) (if they have one).

We will display this information within a card, showing the following information where relevant:

* ### Subject and qualification name

  For example, ‘English GCSE’, ‘Maths Scottish National 5, ‘Science Baccalauréat Général’. A qualification name is not shown if the candidate does not have this qualification yet.

* ### Year awarded and county

  For example, ‘1996’, ‘2014, France’. Country is only shown for international qualifications.

* ### Grade

  The display of this information depends on the subject:

  For maths, this will always be a single grade or value. Examples:

  * A
  * 8
  * Pass

  For most English qualifications this will be a single grade or value. For GCSEs, multiple exams can be taken or a combined grade can be awarded. Examples:

  * A (English Language)
    B (English Literature)
  * 8-7 (English)
  * 92%

  For most science qualifications this will be a single grade or value. For GCSEs, single or double (combined) awards, or three separate science grades can be given. Example:

  * A (Single award)
  * 8-7 (Double award)
  * A (Biology)
    A (Chemistry)
    B (Physics)

* ### NARIC statement and comparability

  For example, ‘NARIC statement #4000228363 says this is comparable to a GCSE (grades A*-C / 9-4).’ This is only shown for international qualifications, and if details have been given by the candidate.

* ### Missing qualification

  If a candidate does not have an equivalent qualification, we say ‘Candidate does not have this qualification yet’, alongside the reason given.

{{ appFigure({
  image: {
    file: "qualification-card-uk-gcse.png"
  },
  caption: "Qualification cards showing UK GCSEs, with one missing."
}) }}

{{ appFigure({
  image: {
    file: "qualification-card-international-gcse-equivalent.png"
  },
  caption: "Qualification cards showing international GCSE equivalent qualifications."
}) }}

## English as a foreign language

[International candidates are asked if they have an English as a foreign language qualification](/apply-for-teacher-training/international-candidates/#english-language-proficiency).

They can also give details of how they expect to get this qualification, or indicate that they do not consider English to be a foreign language.

On the provider interface, under the heading ‘English as a foreign language’, we will show one of the following statements:

* ‘Candidate has an English as a foreign language qualification.’
* ‘Candidate does not have an English as a foreign language qualification yet.’
* ‘Candidate said that English is not a foreign language to them.’

If the candidate has a qualification, we’ll show a qualification card below the corresponding statement. If they do not have a qualification yet, we’ll show the reason they’ve given.

{{ appFigure({
  image: {
    file: "efl-qualification.png"
  },
  caption: "English as a foreign language showing qualification gained."
}) }}

{{ appFigure({
  image: {
    file: "efl-missing.png"
  },
  caption: "English as a foreign language showing reason why they do not have this qualification yet."
}) }}

{{ appFigure({
  image: {
    file: "efl-not-applicable.png"
  },
  caption: "English as a foreign language for a candidate that does not consider English to be a foreign language."
}) }}
