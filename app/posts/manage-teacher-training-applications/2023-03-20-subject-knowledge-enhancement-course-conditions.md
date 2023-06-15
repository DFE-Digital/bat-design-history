---
title: Making subject knowledge enhancement courses an offer condition
description: How we improved the process of requiring candidates to do a subject knowledge enhancement course before starting their training.
date: 2023-03-20
tags:
  - subject knowledge enhancements
ogImage:
  src: ske-condition-cover-image.png
  alt: "Illustration showing a table with the heading ‘Subject knowledge enhancement’. Beneath it there are 3 rows with the headings Subject, Length and Reason. The values for each of these is represented by a line."
---

![Illustration showing a table with the heading ‘Subject knowledge enhancement’. Beneath it there are 3 rows with the headings Subject, Length and Reason. The values for each of these is represented by a line.](ske-condition-cover-image.png)

We’ve made some changes to allow providers to require candidates to take a subject knowledge enhancement course as a condition of their offer.

This feature was released to users on 20 March 2023.

## The issue

Previously, providers could add ‘conditions’ to an offer using as many separate text boxes as they needed. One commonly added condition was to require candidates to take a [subject knowledge enhancement (SKE) course](https://www.gov.uk/guidance/subject-knowledge-enhancement-an-introduction) before doing their training. This is a DfE funded scheme which aims to support recruitment of teachers in hard-to-recruit priority subjects.

Adding these courses as conditions using free text posed a number of issues:

- we could not automatically detect these conditions and then show candidates some useful information about the SKE courses
- it was harder for DfE to analyse the impact of adding these conditions
- the description of the condition was inconsistent across providers, with some providing more details than others
- some providers may not have been aware of the scheme and its eligibility criteria

## What we changed

We changed the flow when making an offer, so that, depending on the course subject, providers are asked some additional questions about SKE courses.

![Flow diagram with the heading ‘Making an offer’. The starting line splits into 3 ways. The first is labelled ‘English, science, maths, design and technology, religious education’, the second is labelled ‘Modern foreign languages’ and the third is labelled ‘All other subjects’. The first branch leads to 3 screens in sequence with the questions ‘Do you require them to take a SKE course?’, then ‘Why do they need to take a SKE course?’ and then ‘How long must the SKE course be?’. The second branch asks an alternative first question of ‘Do you require them to take a SKE course in these languages?’ with checkboxes for the answers. The final branch skips all the questions and goes straight to the end.](ske-condition-flow.png)

When making an offer for a course which is eligible for a funded SKE course, we ask whether to add this as a condition. This page also reminds providers of the eligibility conditions (having a 2:2 degree or higher).

![Screenshot with the heading ‘Subject knowledge enhancement (SKE) courses’. The page has a single question on it: ‘Do you require Laika Mante to take a SKE course in Physics that will be funded by the DfE?’ with radio button answers for Yes and No.](make-offer.png)

If the provider says a SKE course is required, they are asked to specify the reason for this. These reasons are taken from the SKE course funding criteria and are either:

- they do not have a degree in the course subject
- their degree was from more than 5 years ago (from course start date)

![Screenshot with the heading ‘Why do they need to take a subject knowledge enhancement (SKE) course?’ with radio button answers for ‘They degree was not Physics’ and ‘Their degree subject was Physics but they graduated before September 2018’.](ske-reason.png)

Providers are then asked how long the course needs to be. The SKE policy says this must be set by the provider, not the candidate, and in 4 week increments from 8 to 28 weeks.

![Screenshot with the heading ‘How long must their SKE course be?’ with radio button answers for 8 weeks, 12 weeks, 16 weeks, 20 weeks, 24 weeks and 28 weeks.](ske-length.png)

After this, providers are shown the existing conditions page, where they can add any other conditions using text boxes. We updated the example in the hint text to no longer mention SKE courses.

![Screenshot with the heading ‘Conditions of offer’. On the page are subheadings for ‘Standard conditions’, ‘References’ and ‘Further conditions’. Under standard conditons, there are 2 checkboxes for Fitness to train to teach check, and Disclosure and Barring Service (DBS) check. Under Further conditions there is a button labelled ‘Add another condition’.](other-conditions.png)

Before sending the offer, providers are shown a summary of all the conditions they’ve added, with a last chance to change or remove them.

![Screenshot with the heading ‘Check and send offer’. On the page is a box containing details of the course and conditions of the offer. Within conditions of the offer there is a box labelled ‘Subject knowledge enhancement course’ which contains rows for subject, length and reason. The length and reason rows have links labelled ‘Change’.](check-and-send.png)

### Languages courses

For training courses that teach languages (other than English or ancient languages), the flow is slightly different. With these courses, providers are able to require candidate to take up to 2 SKE courses in 2 different languages. This is to enable trainees to able to teach an additional language.

To support this, we first show a set of checkboxes for the SKE language courses currently available, and allow providers to select up to 2.

![Screenshot with the heading ‘Subject knowledge enhancement (SKE) courses’. Beneath this is the question ‘Do you require Laike Mante to take a SKE course in any of these languages?’. There are then checkboxes for French, Spanish, German, Ancient languages, and ‘No, a SKE course is not required’](ske-languages.png)

If they select 2, the following screen asks for the reason for both languages:

![Screenshot with the heading ‘Reasons for needing to take a subject knowledge enhancement (SKE) course’. Beneath this there are two subheadings labelled ‘Why do they need to take a course in French?’ and ‘Why do they need to take a course in Spanish?’. Each question has the same 2 answers as radio buttons: ‘Their degree subject was not (language)’ and ‘Their degree subject was (language) but they graduated before September 2018’](language-reasons.png)

They’ll then be asked for the length of both courses. Here one of the courses has to be exactly 8 weeks, and the other one can up to to 28 weeks:

![Screenshot with the heading ‘Subject knowledge enhancement (SKE) course requirements’. Beneath this there are two subheadings labelled ‘How long must their French course be?’ and ‘How long must their Spaniish course be?’. Each question has the same 6 answers as radio buttons: 8 weeks, 12 weeks, 16 weeks, 20 weeks, 24 weeks and 28 weeks.](ske-2-languages-length.png)

In the check answers screen, both language courses are shown:

![Screenshot showing tables with the headings ‘Subject knowledge enhancement course’ with rows for Subject, Length and Reason. One has the subject of French, the other one is for Spanish. Both have Change links.](check-2-languages.png)

### Religious education

For religious education (RE) courses, DfE will only fund an 8 week SKE course.

For these courses, we do not show the screen where providers can pick the length of the course. In the ‘check and send’ screen, we show the length as 8 weeks but do not allow them to change it.

![Screenshot showing table with the heading ‘Subject knowledge enhancement course’ with rows for Subject, Length and Reason. The subject is Religious Education and the Length is 8 weeks. Only the Reason row has a change link.](check-re-condition.png)

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

![Screenshot with the heading ‘Does their SKE course have to be completed before their training coruse starts, in September 2023?’ with 2 radio button answers: ‘Yes’ and ‘No, so long as they’ve started it by then’](ske-deadline.png)

We found that most providers wanted to strongly encourage trainees to complete the SKE course before their training, but that they would allow some overlap in exceptional circumstances. This meant they didn’t feel it was a straight yes or no answer.

We also subsequently discovered that when a trainee starts their teacher training course, they lose their entitlement to the £175 per week bursary for any remaining weeks.

For these reasons, we decided to drop this question. We will instead give all candidates the same guidance about aiming to complete their SKE course before they start training.

## Future considerations

The changes we’ve made only apply to those providers who make offers using the Manage interface. Providers making offers using their own student record system using our API will continue to send us conditions as a free text.

In future, we hope to enhance the API to also include SKE courses as structured offer conditions.

We also have concerns that the policy around SKE courses, such as the subjects it is available for, and the exact eligibility criteria, may change from year to year. We will need to update the flow whenever there are any changes.
