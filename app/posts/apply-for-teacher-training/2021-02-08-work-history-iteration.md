---
title: Improving work history
description: Asking for a full work history and simplifying the section by removing skills and experience.
date: 2021-01-08
screenshots:
  items:
    - text: Initial branching question
    - text: Initial branching question - no work history
    - id: work-history-blank-state
      text: Work history review (initial blank state)
    - text: Add a job (blank)
    - text: Add a job (filled in)
    - id: work-history-showing-break-prompt
      text: Work history - with prompt to explain a break
    - id: tell-us-what-you-were-doing-over-this-period
      text: Please tell us what you were doing over this period"
    - id: completed-work-history-showing-break
      text: Work history - completed
related:
  items:
    - text: Work history breaks
      href: /apply-for-teacher-training/work-history-breaks/
      description: Previous post about breaks in work history
    - text: Work history - August iteration
      href: /apply-for-teacher-training/work-history/
      description: Previous change to the work history flow
    - text: Work history
      href: /apply-for-teacher-training/apply-june-2019/work-history
      description: Initial implementation of work history
---

Many providers told us that they need to see a candidate’s full work history, not just the last 5 years, in order to meet policies around safeguarding.

Candidates were spending a significant amount of time filling in the “Skills and experience relevant to teaching” question for each job, treating these as a “mini personal statement”. However, providers indicated that they didn’t always read these in detail, possibly because roles weren’t relevant to teaching, or because the text was too long and overlapped with a personal statement.

Analysis of validation errors also revealed that candidates were often leaving the “Skills and experience relevant to teaching” question blank. Our hypothesis was that they wanted to come back and write this section later.

## What we did

We moved the work history section beneath the “Safeguarding” heading on the application review page. This was to try and communicate to candidates that the purpose of the work history was mainly for safeguarding, rather than something used to directly assess them.

We changed the “How long have you been working?” question to “Do you have any work history?”. We didn’t need to guide candidates towards entering only their last 5 years of work history anymore.

We added an answer to this question – “No, I have always been in full time education”. This was based on analysis showing that around 20% of candidates are 20 or 21 years old, and have likely gone straight from A-Levels to University, which may explain their lack of work history. Adding this option means that they don’t have to explain this in their own words.

If someone selected “No, I do not have any work history”, we revealed a textbox asking “Tell us why you’ve been out of the workplace” – previously this was on a separate follow-up page. We also added hint text which gave three examples of reasons for not having any work history. These were very brief, to indicate to candidates that they did not need to be super detailed.

When someone indicated they did have work history, we took them to an empty table and guidance to add their full work history. They could then add a first job.

On the Add a job form, we made a number of minor changes and one significant change.

The most significant change was to remove the textbox asking candidates to describe their job and the skills and experience relevant to teaching. This was to reduce the burden on candidates, particularly those with long work histories which may include many jobs done long ago that are unrelated to teaching - like bar or retail work. We did consider making this field optional instead, but considered that many candidates would feel they _ought_ to write something anyway, which likely wouldn’t get read or be helpful.

Minor changes included:

* Removing the working pattern question for part time jobs – this didn’t seem to be strongly required, and would be complicated to answer for part time or casual jobs done a long time ago.
* Removing the hint text suggesting candidates add the name of their own company if self-employed – this didn’t seem to be required.
* Changing the end date from “End date (leave blank if this is your current role)” to “Are you still working in this job?”. If the candidate answered “No” then a ”When did you leave this job?” question was revealed. This was remove the cognitive burden of the ”leave blank if…” line.
* Changing the start date from “Start date” to “When did you start this job?”, for consistency with the “When did you leave this job?” question, and to better reflect the fact that we don’t ask for a full date, only month and year.

When a candidate added a job, they were returned to the Work history review page, rather than being asked whether or not they wanted to add another job. This was partly to solve an issue seen in production where candidates go to add another job, but then leave all the fields blank and submit the form, causing validation errors.

Our hypothesis was that this is because they either changed their mind or didn’t realise that they would need to add another job immediately. Additionally, by taking candidates back to the review page after adding each job, they are able to review their progress in adding jobs so far, and can remind themselves where they’ve got to – which may be more important when adding lots and lots of jobs.

We redesigned the review page. Instead of using summary cards for each job, the jobs were presented in a table format. This was intended to remove the duplication caused by repeating the field names in each summary card, and make it easier for candidates to scan the page, as each job takes up less vertical height.

## Results of the user research

We tested a prototype with 7 candidates. We recruited older candidates so that we could test the new section with people who likely had a longer work history.

We also tested a mock-up of applications showing long work histories with providers, to check our assumptions.

We found that moving the work history section beneath the Safeguarding heading did not communicate to candidates why we were asking for this information. If anything, they assumed that we might be asking for experience of safeguarding within their work (in part because many of them had some awareness of safeguarding from working in schools or with children).

Candidates were able to add lots of jobs fairly quickly - likely much more quickly than if they were still being asked for skills and experience relevant to teaching for each job.

Some candidates were unclear that they needed to add their complete work history, either not reading or ignoring the guidance. Instead they only added “relevant” or “proper” jobs, and omitting their first jobs working in bars or in retail.

Some candidates expressed surprise that they weren’t asked for more details. Whilst some were happy with how quick it was, others wanted to be able to explain more about their roles to support their application.

Some candidates hesitated when it came to entering the start and end year and month for some of their early roles, and had to spend some time thinking about this. When asked, they suggested that they weren’t completely certain, but were able to either work it out or enter a reasonable guess by anchoring their early jobs to other significant events in their lives.

One candidate consistently entered their employers’ names within the Job title field, and then had to correct themselves. Other candidates entered the employer names first, and then returned to the job title field later having had to give it more thought.

Some candidates suggested that they would be able to get the relevant information from their CV, but no candidates had a CV that included their complete work history.

Not all candidates responded to the prompts to enter explanations of breaks within their work history. Those that did were able to explain their break, for example by mentioning unemployment or raising children, with no stress and using only a brief explanation.

## What we changed

We moved the section back underneath the Work experience section, and reinstated the Unpaid experience section.

We reordered the Add job form, to make the ‘Name of employer’ the first field, as this was often what candidates recalled first.

We renamed ‘Job title’ to ‘Role’, as candidates may not remember their exact job title (or even have had one), and so ‘Role’ implies they can use a short description instead.

We added hint text to ‘Role’ saying “If you had more than one role with this employer, enter your last role.” as feedback from providers suggested that listing out each promotion within a employment was unnecessary.

We added a checkbox labelled “I’m not sure of the exact month or year I started” and ”I’m not sure of the exact month or year I left” for candidates who struggled with the exact months and years.

We renamed “Did this job involve working in a school or with children?” to “Did you use skills relevant to teaching in this job?” as providers indicated that they were most interested in ‘relevant’ work history, which could encompass a wider variety of jobs.

We added the hint text “You can go into more detail about this in your personal statement.” to the ”Did this job involve working in a school or with children?” question to encourage candidates to give more details about relevant jobs in their personal statement.

On the review page, we switched from a table to headings with horizontal lines between jobs, enclosed within a bordered section. This removed the need to include column headings and a table caption, and addressed accessibility issues with having used a row of merged cells for the break in history prompts.

The Add another job button was moved to the top of the page, for consistency with other sections.
