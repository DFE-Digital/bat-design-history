---
title: Investigating free text responses from Apply
description: Looking at data submitted to Apply and how it might impact Register
date: 2021-04-20
tags:
  - applications
  - text fields
  - analysis
---

As part of importing applications from Apply, we have a challenge that some of the data we get may not meet the requirements of our downstream systems. In particular, for some fields applicants can give free text responses, where we (currently) require an answer from a fixed list.

As an example - in Apply an applicant is asked for the subject of their degree. There’s a long list of subjects in an autocomplete, but this list could never list all possible degree subjects so applicants can provide free text answers.

Register’s list of subjects matches Apply’s list, but we do not (currently) support free text. It’s good that applicants can provide the subject as written on their degree - but ultimately Register right now needs the nearest subject to be picked because this is all that the data model can accommodate at this point in time.

There are some fields where we require a response from a fixed list, where Apply allows free text:

- degree institution
- degree subject
- degree type
- nationality

## Looking at free text responses from Apply so far

### Top free text entries for degree type

| Free text input | Frequency |
| --- | --- |
| BA | 110 |
| Bachelor degree | 65 |
| BA Hons | 52 |
| BSc | 45 |
| BA | 32 |
| Bachelor Degree | 31 |
| BA (Hons) | 29 |
| Foundation Degree | 23 |
| BSc (Hons) | 19 |
| Bachelor of Arts | 13 |

We can see that the majority of these most common free text entries are things a human might understand (and do correspond to one of our fixed values), but for some reason the relevant autocomplete option was not picked.

The Apply candidate team have already done work to improve the chances that the correct answer is selected - including better validation and improvements to the autocomplete.

However, where Register does receive responses like this, if we believe the answer unambiguously maps to one of our fixed options, we’ll automatically convert them.

If we exclude free text responses where it’s unambiguous which answer should have been selected, the top entries are:

### Top free text entries for degree type, excluding unambiguous answers

| Free text input | Frequency |
| --- | --- |
| Bachelor degree | 65 |
| Bachelor Degree | 31 |
| Foundation Degree | 23 |
| Foundation degree | 11 |
| Masters | 10 |
| PGCE | 9 |
| Diploma | 7 |
| Licenciatura | 6 |
| Master degree | 6 |
| Master’s Degree | 6 |

We can see that most of the remaining free text answers are where the user did not provide enough detail - or perhaps entered a qualification that was not a degree. Where the applicant’s qualification is not a degree it’s unlikely the record would end up in Register - as they would likely not be eligible for the course (for courses that require a degree). For the remaining ones we may need providers to amend the record to give the detail required.

### Top free text entries for degree subject

| Free text input | Frequency |
| --- | --- |
| English | 35 |
| Physical Education | 9 |
| English Language and Literature | 9 |
| Accounting and Finance | 9 |
| History and Politics | 7 |
| Sport Science | 5 |
| Teaching and Learning | 5 |
| Mechanical Engineering | 5 |
| English Language and Linguistics | 5 |
| Mathematics and Physics | 5 |

The free text inputs for subjects are largely a mix of subjects which are not listed in the fixed list (English, physical education), or degrees where the candidate has done a mix of subjects (Mathematics and physics).

We’ll look at whether we’re able to add the common subjects that are not in the current degree subject list. We can do the same for the common dual subjects, but there are lots of dual subject combinations. We need to do do analysis on these to work out what would be the best thing for Register to store.

## Next steps

- Apply candidate team are working to help users pick the correct options
- We will look at how we can automatically map unambiguous options
- We will investigate design solutions for the remaining free text responses
