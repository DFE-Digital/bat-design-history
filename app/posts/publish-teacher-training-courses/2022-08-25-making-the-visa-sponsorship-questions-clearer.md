---
title: Making the visa sponsorship questions clearer
description: We improved the clarity of the visa sponsorship questions and made them more specific
date: 2022-08-25
related:
  items:
    - text: Adding questions about visa sponsorship to courses
      href: /publish-teacher-training-courses/adding-questions-about-visa-sponsorship-to-courses/
    - text: Visa sponsorship question wording change
      href: /publish-teacher-training-courses/visa-question-wording-change/
screenshots:
  items:
    - text: Organisation details - accredited body - student visas
      src: organisation-details--accredited-body-student-visas.png
    - text: Organisation details - accredited body - skilled worker visas
      src: organisation-details--accredited-body-skilled-worker-visas.png
    - text: Add course - accredited body - student visas
      src: add-course--accredited-body-student-visas.png
    - text: Add course - accredited body - skilled worker visas
      src: add-course--accredited-body-skilled-worker-visas.png
    - text: Add course - lead school - student visas
      src: add-course--lead-school-student-visas.png
    - text: Add course - lead school - student visas
      src: add-course--lead-school-skilled-worker-visas.png
    - text: Edit course - accredited body - student visas
      src: edit-course--accredited-body-student-visas.png
    - text: Edit course - accredited body - skilled worker visas
      src: edit-course--accredited-body-skilled-worker-visas.png
    - text: Edit course - lead school - student visas
      src: edit-course--lead-school-student-visas.png
    - text: Edit course - lead school - student visas
      src: edit-course--lead-school-skilled-worker-visas.png
---

In a recent round of research, we found that some users were confused by the wording of the questions in the visa sponsorship flow. We assume that the questions were too broad and aimed at many user groups.

To account for this, we have changed the questions depending on the type of provider the user is. Changing the question means we can be more direct and only show information relevant to specific user groups.

## What we changed

We have:

- updated the visa questions in the organisation details and course details sections
- added help text to the questions in ‘Organisation details’
- updated all page titles to the plural ‘visas’, for example, ‘Skilled Worker visas’

### Organisation details

The way the visa questions are worded and displayed depends on the provider type.

#### Higher Education Institute (HEI)

We updated the student visa questions in ‘Organisation details’ to:

- ‘Can your organisation sponsor Student visas for courses run by you or your training partners?’
- ‘Can your organisation sponsor Skilled Worker visas for courses you run?’

HEI users can change the answer to the Student visa and Skilled Worker visa questions, so we show a ‘Change’ link for both in the summary list.

User research found that some users might expect that changing the answer to these questions at an organisational level would change the answer they provided at a course level - this is not the case.

The answers the user gives to visa questions in ‘Organisation details’ allow us to show the correct defaults and hint texts when a user is creating a course. The answer they give to the visa questions in the ‘Add course’ and edit course flows will override the answer at an organisational level.

To clarify this, we added inset text above the button, for example, ‘Changing your answer will not change visa information for courses you or your training partners have already created.’

#### School Centred Initial Teacher Training (SCITT)

As SCITTs cannot sponsor Student visas, they do not see a ‘Change’ link in the ‘Student visas’ row in the summary list. These users see the answer their partner accredited body has given, for example, ‘No - cannot sponsor’.

They will see a ‘Change’ link for ‘Skilled Worker visas’. We updated the Skilled Worker visa question to:

- ‘Can your organisation sponsor Skilled Worker visas for courses you run?’

We added hint text above the button to clarify that changing the answer in ‘Organisation details’ will not change the answer they’ve given at a course level.

### Course details

In the ‘Add course’ and edit course flows, we updated the visa sponsorship questions to make them more direct and specific.

#### Student visas

If the user is an HEI, we ask:

- ‘Can your organisation sponsor Student visas for this course?’

If the user is a SCITT or Lead school, we ask:

- ‘Is Student visa sponsorship available for this course?’

#### Skilled Worker visas

For all provider types, we ask:

- ‘Can your organisation sponsor Skilled Worker visas for this course?’

#### Inset text

We updated the inset text shown to Lead schools when creating a course.

If the HEI can sponsor Student visas, we show:

‘[accredited body name] can sponsor Student visas for some of their courses’.

The answer is defaulted to ‘Yes’.

If the HEI cannot sponsor Student visas, we show:

‘[accredited body name] have said they cannot sponsor Student visas so we have defaulted your answer to ‘No’.

If your organisation would like to sponsor Student visas, contact [accredited body name].’

The answer is defaulted to ‘No’.

#### ‘Learn more’ link

If the HEI has answered ‘No’ to the visa questions in ‘Organisation details’, we include an extra line of content on the pages in the ‘Add course’ and edit course flows. We show:

‘Learn more about [recruiting trainee teachers from overseas](https://www.gov.uk/guidance/recruit-trainee-teachers-from-overseas-accredited-itt-providers).’

| Provider type | Teaching apprenticeship | Visa sponsorship | Show learn more link? |
|---|---|---|---|
| HEI | Yes | No - Skilled Worker | Yes |
| HEI | No | No - Student | Yes |
| HEI | Yes | Yes - Skilled Worker | No |
| HEI | No | Yes - Student | No |
| SCITT | Yes | No - Skilled Worker | Yes |
| SCITT | No | No - Student | No |
| SCITT | Yes | Yes - Skilled Worker | No |
| SCITT | No | Yes - Student | No |

## Further considerations

There is no visa information for Lead schools in ‘Organisation details’. We will consider adding a ‘Skilled Worker’ row to the summary list.

Some users felt that they should not be able to change visa information after they had published the a course. Some users were confused about the absence of the ‘Change’ link. We need to look at the value of allowing users to change this information for published courses.

At the moment, changing visa sponsorship information at an organisational level will not affect the answers given at a course level. We need to investigate the risks and benefits of allowing users to change visa sponsorship information for all courses.
