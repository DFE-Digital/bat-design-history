---
title: Removing the highest academic qualification question
description: Why we think we do not need this question and an alternate design if we do
date: 2021-08-03
tags:
  - qualifications
---

For trainees on undergraduate courses we ask for the trainee’s highest academic qualification, for example most trainees have ‘A levels’ or ‘Scottish Highers’.

The question was causing users confusion. It seems to be because it’s inconsistent with how users think about academic qualifications. A teacher training provider thinks about a trainee’s qualifications as the measure of whether a trainee is qualified for their course. This is often measured in ‘UCAS tariff points’ and often several types of qualification in combination make up the right amount for eligibility. In research sessions users tried to give the trainee’s actual qualifications. When users found they could only provide a single qualification most users re-read the question but did not have the correct answer to hand. Instead they would try using the UCAS tariff points calculator to determine the highest qualification.

> “I assume the DFE wants to know the range of all the qualifications trainees have to have in order to be eligible for training on our course [...] and usually that would be a combination of qualifications. But this – this is a bewildering list of too many things and you can't do them in combination!”

> “Oh it’s only asking for the highest, I didn't read the question. I'd look at the grade values and weighting [...] I'd look at tariffs and see what was highest. I'd Google the UCAS calculator, it looks at what everything is worth.”

![Screenshot of ‘What is the trainee’s highest academic qualification?’ question and answers](highest-academic-qualification-v1.png "Highest academic qualification — first iteration.")

The options we gave as answers confused the users too. It’s a long list that includes qualifications that were too low level to be relevant.

> “This is asking for ‘the highest’ but a lot of these are at the same level. This list for an undergrad doesn’t make sense because you have to have a level 3 qual to go onto a UG course. Here I wouldn't know what you'd want from me. We wouldn't register someone with just level 2 or level 3 because that's not high enough for training with us.”

## DTTP data

This spreadsheet of [Early years undergraduate by ‘Highest qualification on entry’](https://docs.google.com/spreadsheets/u/1/d/1fb2ialqhFKxVh8WZ8yeoeKkJrtcJNnUm/edit#gid=1730684280) has 67 records for the last 2 years.

### Early years undergraduates with data on highest qualification

| Qualification | Frequency |
| --- | --- |
| Highest qualification recorded | 58 |
| No highest qualification recorded | 9 |

### Early years undergraduates with data on highest qualification

Of the 58 records:

| Qualification | Percentage of trainees |
| --- | --- |
| Any combinations of GCE ‘A’/SQA ‘Higher’/SQA ‘Advanced Higher’ & GNVQ/GSVQ or NVQ/SVQ at level 3 | 26 |
| 'A' level equivalent qualification not elsewhere specified | 11 |
| Other higher qualification | 11 |
| ONC or OND (including BTEC & SQA equivalents) | 5 |
| Foundation course at FE level | 3 |
| NVQ/SVQ level 3 | 1 |
| Baccalaureate | 1 |

### Early years undergraduates by qualification

| Qualification | Percentage of trainees |
| --- | --- |
| Any combinations of GCE ‘A’/SQA ‘Higher’/SQA ‘Advanced Higher’ & GNVQ/GSVQ or NVQ/SVQ at level 3 | 45% |
| ‘A’ level equivalent qualification not elsewhere specified | 19% |
| Other higher qualification | 19% |
| ONC or OND (including BTEC & SQA equivalents) | 9% |
| Foundation course at FE level | 5% |
| NVQ/SVQ level 3 | 2% |
| Baccalaureate | 2% |

### Early years undergraduates by qualification level

Using this page on [qualification levels](https://www.gov.uk/what-different-qualification-levels-mean) you can group them into levels.

| Qualification | Percentage of trainees |
| --- | --- |
| Level 3 | 75% |
| Other | 19% |
| Foundation course at FE level | 5% |
| Baccalaureate | 2% |

It’s hard to see how this data is useful to the providers or trainees. For example, it’s not detailed enough to be used on a teacher’s record in the Database of Qualified Teachers (DQT).

It’s also hard to see how this can be useful statistically. The number of trainees on undergraduate courses going through Register compared to HESA is very small (less than 2% of the total undergraduate trainees in 2020). In addition to that, the small percentage of the second largest cohort is ‘other’, offering no information about the trainee’s qualification.

On the basis that we cannot see how the question is useful, we’re speaking to Teacher analytics and data (TAD) and recommending that we leave it out.

## Alternate question

In case we need this question, we have an alternate design. It splits the qualifications into levels (something we’ve seen some familiarity with in research). The hypothesis is this will work for users because:

- it’s easier to understand that we’re not asking for the exact qualification if the options are grouped by level
- it makes the most common option of level 3 qualifications much more prominent, rather than split across a number of options
- we’re not giving users a the option of lower than level 3, which caused confusion but the ‘Other qualification’ gives all users a way forward

![Screenshot of ‘What is the trainee’s highest academic qualification?’ question and answers](highest-academic-qualification-v2.png "Highest academic qualification — second iteration.")
