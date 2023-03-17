---
title: Making subject knowledge enhancement courses an offer condition
description: How we improved the process of requiring candidates to do a subject knowledge enhancement course before starting their training.
date: 2023-03-17
tags:
  - subject knowledge enhancement courses
ogImage:
  src: /manage-teacher-training-applications/subject-knowledge-enhancement-course-conditions/ske-condition-cover-image.png
  alt: "TODO"
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

![TODO](ske-2-languages-length.png)

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

We tested this flow with participants from 8 providers. 5 of these worked at a school-based training provider, and 3 worked for a university.

In the usability research, providers were able to complete the flow easily. They commented that being able to select options and not having to write the condition as text gave them ‘one less thing to think about the wording of’.

Providers indicated that they would have all the information to answer the questions about the SKE conditions, as these are usually discussed at an interview.

Some providers said that they did not specify the length of the SKE course, and left this up to the candidate. However the SKE policy states this must be set by the provider, so we were comfortable making this a required question.

There was a small amount of ambiguity around the degree criteria, as some providers were not sure exactly how to assess whether the candidate’s degree matched the course subject applied to or not. This can become complicated with non-UK degrees, joint honours degrees and other mixed degree subjects. We decided not to tackle this within the interface but instead handle these queries through other channels.

We also discovered a wider variety of findings about the SKE course policy itself, how providers assess whether candidates should take these, and how providers feel about the different providers of these courses. We have fed these findings back separately to the relevant policy teams.

### Asking when SKE courses need to be finished by

In the prototype we tested, we included an additional question, which asked providers whether they required the candidate to finish the SKE course before they started their teacher training course or not.

![TODO](ske-deadline.png)

We found that most providers wanted to strongly encourage trainees to complete the SKE course before their training, but that they would allow some overlap in exceptional circumstances. This meant they didn’t feel it was a straight yes or no answer.

We also subsequently discovered that when a trainee starts their teacher training course, they lose their entitlement to the £175 per week bursary for any remaining weeks.

For these reasons, we decided to drop this question. We will instead give all candidates the same guidance about aiming to complete their SKE course before they start training.

## Future considerations

The changes we’ve made only apply to those providers who make offers using the Manage interface. Providers making offers using their own student record system using our API will continue to send us conditions as a free text.

In future, we hope to enhance the API to also include SKE courses as structured offer conditions.

We also have concerns that the policy around SKE courses, such as the subjects it is available for, and the exact eligibility criteria, may change from year to year. We will need to update the flow whenever there are any changes.
