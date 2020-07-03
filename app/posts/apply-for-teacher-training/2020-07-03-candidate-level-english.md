---
title: Is your English good enough to be a teacher?
description: We’re asking international candidates to give details about their English language qualifications.
date: 2020-07-03
tags:
- AN026
- MN015
---

Candidates need to have good English to be a teacher.

Providers assess English language ability through:
* personal statements
* communication at interview
* qualifications like English GCSEs or English language tests

So far, our design work has focussed on [asking candidates about their English GCSEs](/apply-for-teacher-training/structured-data-for-pre-degree-qualifications/#what-english-gcse-did-you-do).

International candidates are less likely to have an English GCSE, so we needed a new design.

[We’ve tried one design to help providers assess international candidates’ level of English, but research suggested that it was not quite right](/apply-for-teacher-training/international-candidates/#english-language-proficiency).

[Our new design](/apply-for-teacher-training/candidate-level-english/#our-new-design) has a different focus: asking international candidates to give details about their English language qualifications.

This gives providers evidence-based information about candidates, no matter where they’re from.

The challenge: designing something that works for everyone.

## Our new design

[We ask candidates who are not British or Irish if they have any ‘English as a foreign language’ qualifications](/apply-for-teacher-training/international-candidates/#english-as-a-foreign-language).

### User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

### Problems with this design
Showing [the 'English as a foreign language' question](/apply-for-teacher-training/international-candidates/#english-as-a-foreign-language) only to candidates who are not British or Irish means we’re treating candidates differently depending on where they’re from.

It may appear that we’re making assumptions about a candidate’s English proficiency based on their nationality.

The design also does not follow through in its logic. The logic suggests we should not show this question to candidates from any English speaking country - not just the UK and Ireland.

We could follow the Home Office's approach to student visas, where [nationals from English speaking countries do not have to prove their level of English when applying](https://www.gov.uk/tier-4-general-visa/knowledge-of-english).

Finally, the question has the potential to deter candidates whose first language is not English from applying.

## Other ways to address this design challenge

### Bringing all English qualifications into one section

We could bring the ‘English GCSE or equivalent’ and ‘English as a foreign language’ questions into one question - which every candidate must answer.

This would not disrupt our existing designs very much.

For example:

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  content: "

> ### English GCSE or equivalent, or other evidence of ability in English

> What type of English qualification do you have?

> Select all that apply.

> [  ] GCSE

> [  ] O level

> [  ] Scottish National 5

> [  ] English Language Test
>For example, IELTS, LanguageCert International ESOL,TOEFL, Duolingo English Test, CPE,  CAE

> [  ] Other

> [  ] I do not have an English qualification
> Talk to your provider about showing your level of English.
"
}) }}

This approach does not make assumptions about a candidate's ability based on their background.

It also does not imply that one qualification is more valuable than another. (International candidates may not even realise that their language qualification is equivalent to an English GCSE.)

### Asking candidates to indicate their own ability

We also considered asking candidates to indicate their own ability on a proficiency scale, but quickly dismissed this idea.

We were concerned that candidates are not necessarily the best judge of their own ability.

It could also deter candidates from applying if they did not think their level was good enough.
