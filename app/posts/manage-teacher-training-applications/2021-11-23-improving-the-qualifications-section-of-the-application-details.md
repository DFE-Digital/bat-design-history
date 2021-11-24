---
title: Improving the qualifications section of the application details
description: We moved the qualifications from cards to summary lists and made various improvements to how we display this information.
date: 2021-11-23
---

Providers check the candidate’s qualifications when assessing their application, particularly in the early ‘sift’ to check that the candidate meets the minimum requirements.

We started this piece of work because in some circumstances the service did not play back information given by candidates about GCSEs or equivalents.

Fixing this problem led to us working on the rest of the qualifications section of the application.

## What candidates are asked when they apply

Candidates are asked about:

- English and maths GCSE or equivalent qualifications
- science GCSE or equivalent qualification, if they’re applying for a primary course
- English as a foreign language qualification, if they are not British or Irish
- A levels and other qualifications - adding these is optional
- degrees

The wording given here is not always exactly as it is in the candidate service.

### GCSEs or equivalent qualifications

Candidates are asked about their English and maths qualifications. They’re also asked about science if they’re applying for a primary course.

The options for each qualification are:

- GCSE
- O level
- Scottish National 5
- another UK qualification
- a non-UK qualification
- I do not have a GCSE in [subject] (or equivalent) yet

#### UK qualification

Candidates who have a GCSE, O level, Scottish National 5 or another UK qualification are asked to enter:

- qualification name - if they answered ‘another UK qualification’
- grade
- year awarded
- whether they’re currently studying to retake the qualification - if their grade was below C or 4
- evidence of having English skills at the required standard - if they said they are not studying to retake the qualification

#### Non-UK qualification

Candidates who have a non-UK qualification are asked whether they have a statement of comparability from UK ENIC. If they do, they’re asked for:

- UK ENIC reference number
- the comparable UK qualification

The options for comparable qualifications are:

- GCSE (grades A*-C / 9-4)
- Between GCSE and GCE AS level
- GCE Advanced Subsidiary (AS) level
- GCE Advanced (A) level

Whether or not they have a statement of comparability, they’re asked for:

- qualification name, for example Baccalauréat Général
- the country or territory in which they studied
- if they have a statement of comparability from UK ENIC
- grade - the options are ‘Not applicable’, ‘Unknown’ or ‘Other’, with the last of these leading to entering a grade
- year awarded

#### No GCSE or equivalent qualification

Candidates who do not have a GCSE or equivalent qualification are asked “Are you currently studying for a GCSE in [subject], or equivalent?”

If they are studying, they are asked to enter details of the qualification they’re studying for.

If they are not studying, they’re asked for evidence of having skills at the required standard.

### English as a foreign language qualification

Candidates who are not British or Irish are asked “Have you done an English as a foreign language assessment?”

The options are:

- Yes
- No, English is not a foreign language to me
- No, I have not done an English as a foreign language assessment

#### Has done an English as a foreign language assessment

If the candidate answered “yes” they’re asked, “What English language assessment did you do?”

The options are:

- International English Language Testing System (IELTS)
- Test of English as a Foreign Language (TOEFL)
- other

If they did an IELTS assessment, they’re asked for:

- test report form (TRF) number
- overall band score
- year of assessment

If they did a TOEFL assessment, they’re asked for:

- TOEFL registration number
- total score
- year of assessment

If they did another assessment, they’re asked for:

- assessment name
- score or grade
- year of assessment

#### English is not a foreign language to the candidate

If the candidate answered “No, English is not a foreign language to me” they do not need to answer any more questions.

#### Candidate has not done an English as a foreign language assessment

If the candidate answered “No, I have not done an English as a foreign language assessment”, they’re asked to enter details of any assessment they’re planning to take.

### A levels and other qualifications

Candidates are asked “Do you want to add any A levels and other qualifications?” The options are:

- A level
- AS level
- GCSE
- Other UK qualification
- Non-UK qualification
- I do not want to add any other qualifications

If the candidate wants to add a qualification, they must enter the details of the qualification.

For A level, AS level, GCSE and other UK qualifications, the candidate is asked for:

- qualification name - for other UK qualifications only
- subject
- grade
- year awarded

For non-UK qualifications, the candidate is asked for:

- qualification name
- subject (optional)
- country or territory where they studied
- grade (optional)
- year awarded

### Degrees

Candidates are asked to add at least one undergraduate degree. The options are:

- UK degree
- Non-UK degree

#### UK degree

Candidates are asked to enter:

- degree type, for example, “BSc Bachelor of Science”
- subject
- institution
- whether they have completed the degree
- grade - or the grade they expect they’ll get if they haven’t completed the degree
- start year
- graduation year

#### Non-UK degree

Candidates are asked to enter:

- type of qualification, for example, “Diplôme”
- subject
- institution name
- country or territory in which the institution is based
- whether they have a statement of comparability from UK ENIC - if so then they’re asked for the UK ENIC reference number and comparable UK degree
- whether they have completed the degree
- grade - or the grade they expect they’ll get if they haven’t completed the degree
- start year
- graduation year

The list of comparable UK degrees is:

- bachelor (ordinary) degree
- bachelor (honours) degree
- postgraduate certificate or postgraduate diploma
- master’s degree or integrated master’s degree
- doctor of philosophy degree
- post doctoral award

## What we changed

This piece of work was initially intended to improve how we show GCSEs, particularly where candidates may have entered a large amount of text.

We decided to show GCSEs in summary lists, rather than in cards. We did this because a summary list is:

- easier to understand because questions can be replayed alongside answers
- more capable of displaying long answers
- consistent with the rest of the application details
- a standard pattern in the design system

We decided to also use summary lists for degrees and English as a foreign language assessments.

We also made changes to make sure the service accurately replays the information which candidates entered.

To ensure consistency we decided to create some rules about how we play back information. We will:

- keep separate questions and answers separate rather than combining them into a single line when we replay them
- leave out questions where the answer just allows the candidate to give details - for example, we do not replay “Do you have a UK ENIC statement of comparability?” if the answer is yes since we can just replay the details
- shorten simple questions - for example “What is your email address?” is shown as “Email address”
- show questions in full if doing so will help providers understand what was asked - for example, we show “Have you completed this degree?” as “Completed” could be ambiguous

## How it works

We show details of the candidate’s qualifications in this order:

- degrees
- GCSEs or equivalents
- English as a foreign language qualification - if the candidate is not British or Irish, and did not say that English is not a foreign language to them
- A levels and other qualifications

### Degrees

If the candidate has one degree, this section has the h3 heading “Degree”.

If the candidate has more than one degree, we show them in chronological order with the heading “First degree”, “Second degree” and so on.

We now show the full degree type, for example “Bachelor of Science (BSc)” rather than just “BSc”.

If the candidate’s grade is predicted, we show the label “Predicted grade” instead of “Grade”.

#### UK degree

For a UK degree, the fields we show are:

- Degree type
- Subject
- Institution
- Have you completed this degree? - we do not show this if they answered ‘yes’ to the question
- Grade - or predicted grade if they said that they have not completed the degree
- Start year
- Graduation year

![Candidate with one degree](qualifications-degree--one-degree.png "Candidate with one degree")

![Candidate with multiple degrees](qualifications-degree--multiple-degrees.png "Candidate with multiple degrees")

#### Non-UK degree

For a non-UK degree, the fields we show are:

- Degree type
- Subject
- Institution name
- Country or territory - this is where the institution is based
- Have you completed this degree? - we do not show this if they answered ‘yes’ to the question
- Grade - or predicted grade if they said that they have not completed the degree
- Start year
- Graduation year
- Do you have a UK ENIC statement of comparability? - we do not show this if they answered ‘yes’ to the question
- UK ENIC reference number - if they said they have a statement of comparability
- Comparable UK degree - if they said they have a statement of comparability

![International candidate degree](qualifications-degree--international.png "International candidate")


![International candidate degree without UK ENIC statement of comparability](qualifications-degree--international-no-uk-enic.png "International candidate degree without UK ENIC statement of comparability")


<!-- ![Candidate who hasn’t completed their degree](qualifications-degree--incomplete.png "Candidate who hasn’t completed their degree")

![International candidate who hasn’t completed their degree](qualifications-degree--international-incomplete.png "International candidate who hasn’t completed their degree") -->

### GCSEs or equivalent

We now show GCSEs or equivalents in summary lists, rather than in cards. We have separate headings for English, maths and science.

Previously we did not show all the questions and answers when a candidate did not have a GCSE or equivalent qualification. We now replay them.

#### GCSE, O level, Scottish National 5 or other UK qualification

If the candidate has a UK qualification we show:

- Qualification type
- Grade
- Year awarded

![Candidate with single award GCSE](qualifications-gcse--single-award.png "Candidate with single award GCSE")

![Candidate with double award GCSE](qualifications-gcse--double-award.png "Candidate with double award GCSE")

If the candidate has a qualification but did not get a grade C or 4, or the equivalent, they have to answer extra questions. We show:

- Qualification type
- Grade
- Year awarded
- Are you currently studying to retake this qualification?
- Evidence of having [subject] skills at the right level - this is “Not provided” if the candidate did not enter anything

We show ‘Are you currently studying to retake this qualification?’ even if they say ‘yes’ because they are not asked for details.

![Candidate retaking GCSE qualification](qualifications-gcse--retaking.png "Candidate retaking GCSE qualification")

![Candidate not retaking GCSE qualification](qualifications-gcse--not-retaking.png "Candidate not retaking GCSE qualification")

#### Non-UK qualification

If the candidate has a non-UK qualification, we show:

- Qualification type
- Country or territory
- Grade - this can be ‘Not applicable’, ‘Unknown’ or free text entry
- Year awarded
- Do you have a UK ENIC statement of comparability? - we do not show this if they answered ‘yes’ to the question
- UK ENIC reference number - if they said they have a statement of comparability
- Comparable UK qualification - if they said they have a statement of comparability

![International candidate with equivalent qualification](qualifications-gcse--international.png "International candidate with equivalent qualification")

![International candidate without comparable qualification](qualifications-gcse--international-no-uk-enic.png "International candidate without comparable qualification")

#### No GCSE or equivalent

If the candidate said that they do not have an English qualification yet, we show:

- What type of English qualification do you have? - the answer will be “I do not have a GCSE in [subject] (or equivalent) yet”
- Are you currently studying for this qualification?
- Details of the qualification you’re studying for - if they said they’re studying for it
- Evidence of having [subject] skills at the right level

We decided to show ‘Are you currently studying for this qualification?’ even if they say ‘yes’ because we think the answer is more than just a way to give details.

![International candidate studying for equivalent qualification](qualifications-gcse--studying.png "International candidate studying for equivalent qualification")

![International candidate not studying for equivalent qualification](qualifications-gcse--not-studying.png "International candidate not studying for equivalent qualification")

### English as a foreign language qualification

Candidates who are not from the UK or Ireland are asked whether they’ve done an English as a foreign language assessment.

If the candidate answers “No, English is not a foreign language to me” then we do not show this section in the application details.

![International candidate doesn’t need an English as a foreign language qualification](qualifications-english-assessment--not-needed.png "International candidate doesn’t need English as a foreign language qualification")

We do show the section in the application details for candidates who answer:

- yes
- no, I have not done an English as a foreign language assessment

#### Candidates who have done an English as a foreign language assessment

If the candidate says that they did an English as a foreign language assessment, they’re asked what type it was.

Previously if the candidate answered ‘other’ we replayed this answer. We then replayed the assessment name on a separate line.

We will now not show ‘other’ because it has no meaning in itself. It is only an option to allow the candidate to enter details. So we just replay the assessment name.

If the candidate said they did an IELTS assessment, we show:

- Assessment type
- Test report form (TRF) number
- Overall band score
- Year completed

![International candidate has English as an IELTS foreign language assessment](qualifications-english-assessment--IELTS.png "International candidate has English as an IELTS foreign language assessment")

If the candidate said they did a TOEFL assessment, we show:

- Assessment type
- TOEFL registration number
- Total score
- Year completed

![International candidate has English as an TOEFL foreign language assessment](qualifications-english-assessment--TOEFL.png "International candidate has English as an TOEFL foreign language assessment")

If the candidate said they did another type of assessment, we show:

- Assessment type
- Score or grade
- Year completed

![International candidate has English as another type of foreign language assessment](qualifications-english-assessment--other.png "International candidate has English as another type of foreign language assessment")

#### Candidates who have not done an English as a foreign language assessment

If the candidate has not done an English as a foreign language assessment, we show:

- Have you done an English as a foreign language assessment?
- If you’re planning on doing an assessment, give details

![International candidate doesn’t have an English as a foreign language qualification](qualifications-english-assessment--no.png "International candidate doesn’t have an English as a foreign language qualification")

### A levels and other qualifications

The A levels and other qualifications section was changed recently and now uses a table. Using a summary list could make the section very long for some users.

We will no longer play back the question “Do you want to add A levels and other qualifications?” if the answer was “yes”. This is because the answer was only given so that the candidate could give details.

We also changed the table heading “Qualification” to “Qualification type”. This was to make it consistent with the other parts of this section of the application details.

![Candidate has added A levels and other qualifications](qualifications-other--yes.png "Candidate has added A levels and other qualifications")

![Candidate doesn’t want to add A levels and other qualifications](qualifications-other--no.png "Candidate doesn’t want to add A levels and other qualifications")

## Other considerations
