---
title: Making subject knowledge enhancement courses an offer condition
description: How we improved the process of requiring candidates to do a subject knowledge enhancement course before starting their training.
date: 2023-03-17
tags:
  - subject knowledge enhancement courses
---

![TODO](ske-condition-cover-image.png)

We’ve made some changes to allow providers to require candidates to take a subject knowledge enhancement course as a condition of their offer.

## The issue

Previously, providers could add ‘conditions’ to an offer using as many separate text boxes as they needed. One commonly added condition was to require candidates to take a [subject knowledge enhancement (SKE) course](https://www.gov.uk/guidance/subject-knowledge-enhancement-an-introduction) before doing their training. This is a DfE funded scheme which aims to support recruitment of teachers in hard-to-recruit priority subjects.

Adding these courses as conditions using free text posed a number of issues:

* we could not automatically detect these conditions and then show candidates some useful information about the SKE courses
* it was harder for DfE to analyse the impact of adding these conditions
* the description of the condition was inconsistent across providers, with some providing more details than others
* some providers may not have been aware of the scheme and its eligibility criteria

## What we changed

We changed the flow when making an offer, so that, depending on the course subject, providers are asked some additional questions about SKE courses.

![TODO](ske-condition-flow.png)

When making an offer for a course which is eligible for a funded SKE course, we ask whether to add this as a condition. This page also reminds providers of the eligibility conditions (having a 2:2 degree or higher).

![TODO](make-offer.png)

If the provider says a SKE course is required, they are asked to specify the reason for this. These reasons are taken from the SKE course funding criteria and are either:

* they do not have a degree in the course subject
* their degree was from more than 5 years ago (from course start date)

![TODO](ske-reason.png)

Providers are then asked how long the course needs to be. The SKE policy says this must be set by the provider, not the candidate, and in 4 week increments from 8 to 28 weeks.

![TODO](ske-length.png)

After this, providers are shown the existing conditions page, where they can add any other conditions using text boxes. We updated the example in the hint text to no longer mention SKE courses.

![TODO](other-conditions.png)

Before sending the offer, providers are shown a summary of all the conditions they’ve added, with a last chance to change or remove them.

![TODO](check-and-send.png)

### Languages courses

For training courses that teach languages (other than English or ancient languages), the flow is slightly different. With these courses, providers are able to require candidate to take up to 2 SKE courses in 2 different languages. This is to enable trainees to able to teach an additional language.

To support this, we first show a set of checkboxes for the SKE language courses currently available, and allow providers to select up to 2.

![TODO](ske-languages.png)

If they select 2, the following screen asks for the reason for both languages:

![TODO](language-reasons.png)

They’ll then be asked for the length of both courses. Here one of the courses has to be exactly 8 weeks, and the other one can up to to 28 weeks:


In the check answers screen, both language courses are shown:

![TODO](check-2-languages.png)

### Religious education

For religious education (RE) courses, DfE will only fund an 8 week SKE course.

For these courses, we do not show the screen where providers can pick the length of the course. In the ‘check and send’ screen, we show the length as 8 weeks but do not allow them to change it.

![TODO](check-re-condition.png)

### PE with an Ebacc subject

There are some Physical Education (PE) courses which also allow trainees to train to teach an English Baccalaureate (EBacc) subject (English, maths, science, geography, history and languages).

These courses are eligible for funding for an 8 week SKE course in the EBacc subject.

However, we decided not support these within the new flow, as the numbers of people applying for these course is very low. Providers can continue to specify the SKE course as a condition using the free text conditions functionality.

### Primary mathematics

There is also funding for a "primary maths" SKE courses of between 8 and 28 weeks, for primary teacher trainees who specialise in maths.

However, we also decided not support these within the new flow, as the numbers of people taking these SKE courses is very low.

## Research

TODO

## Future considerations

TODO
