---
title: Work history iteration
description: Moving the work history within Safeguarding section
date: 2021-01-08
related:
  items:
  - text: Work history breaks
    href: https://bat-design-history.netlify.app/apply-for-teacher-training/work-history-breaks/
    description: Previous post about breaks in work history
  - text: Work history - August iteration
    href: https://bat-design-history.netlify.app/apply-for-teacher-training/work-history/
    description: Previous change to the work history flow
---
Discussions with providers revealed that many of them require a “full” work history, rather than just work within the past 5 years, for safeguarding reasons.

Candidates were spending a significant amount of time filling in the “Skills and experience relevant to teaching” question for each job, treating these as a “mini personal statement”. However providers indicated that they didn’t always read these in detail.

Analysis of validation errors also revealed that candidates were often leaving the “Skills and experience relevant to teaching” question blank, which then displays an error. Our hypothesis was because they wanted to come back and write this section later.

## What we did

The work history section was moved beneath the “Safeguarding” heading on the application review page. This was to try and communicate to candidates that the purpose of the work history was mainly for safeguarding, rather than something used to direct assess them.

We changed the “How long have you been working?” question to “Do you have any work history?” as we no longer needed to guide candidates they only needed to enter their past 5 years of work history.

An answer to this question was added of “No, I have always been in full time education”. This was based on analysis showing that around 20% of candidates are 20 or 21 years old, and have likely gone straight from A-Levels to University, which may explain their lack of work history. Adding this option avoids the need to them to have to explain this in their own words.

If someone selected “No, I do not have any work history”, then we revealed a textbox asking “Tell us why you’ve been out of the workplace” with some hint text which gave three examples. These were very brief, to indicate to candidates that they did not need to be super detailed.

When someone indicated they did have work history, we took them to a page with an empty table and some guidance that they needed to add their full work history. They could then add a first job.

On the Add a job form, we made a number of minor changes and one significant change.

The most significant change was to remove the textbox asking candidates to describe their job and the skills and experience relevant to teaching. This was to reduce the burden on candidates, particularly those with a long work history which may include many jobs done long ago which are completely unrelated to teaching (such as bar or retail work). We did consider making this field optional instead, but considered that many candidate would feel they _ought_ to write something anyway, which likely wouldn’t get read or be helpful.

Minor changes included:

* Removing the working pattern question for part time jobs – as this didn’t seem to be strongly required, and would be a complicated to answer for part time or casual jobs done a long time ago..
* Removing the hint text suggesting candidates add the name of their own company if self-employed, as this didn’t seem to be required.
* Changing the end date from “End date (leave blank if this is your current role)” to “Are you still working in this job?”. If the candidate answered “No” then a ”When did you leave this job?” question was revealed.
* Changing the start date from “Start date” to “When did you start this job?”, for consistency with the “When did you leave this job?” question, and to better reflect the fact that we don’t ask for a full date, only month and year.

Upon adding a job, candidates were returned to the Work history review page, rather than being asked whether or not they wanted to add another job. This was partly to solve an issue seen in production where candidates go to add another job, but then leave all the fields blank and submit the form, causing validation errors. Our hypothesis was that this is because they either changed their mind or didn’t realise that they would need to add another job immediately. Additionally, by taking candidates back to the review page after adding each job, they are able to review their progress in adding jobs so far, and can remind themselves where they’ve got to – which may be more important when adding lots and lots of jobs.

The review page was redesigned. Instead of using summary cards for each job, the jobs were presented in a table format. This was intended to remove the duplicatation caused by repeating the field names in each summary card, and make it easier for candidates to scan the page, as each job takes up less vertical height.

Pull request: https://github.com/DFE-Digital/apply-for-teacher-training-prototype/pull/434

## Results of the user research

We tested a prototype with XX candidates. We recruited older candidates so that we could test the new section with people who likely had a longer work history.

We also tested a mock-up of applications showing long work histories with providers, in order to check our assumptions.

We found that moving the work history section beneath the Safeguarding heading did not communicate to candidates why we were asking for this information. If anything, they assumed that we might be asking for experience of doing safeguarding within their work (in part because many of them had some awareness of safeguarding from working in schools or with children).

Candidates were able to add lots of jobs fairly quickly - likely much more quickly than if they were still being asked for skills and experience relevant to teaching for each job.

Some candidates were unclear that they needed to add their complete work history, either not reading or ignoring the guidance. Instead they only added 'relevant' or 'proper' jobs, and omitting their first jobs working in bars or in retail.

Some candidates experessed surprise that they weren’t asked for more details. Whilst some were happy with how quick it was, others wanted to be able to explain more about their roles to support their application.

Some candidates hesitated when it came to entering the start and end year and months for some of their early roles, and had to spend some time thinking about this. When asked, they suggested that they weren’t completely certain, but were able to either work it out or enter a reasonable guess by anchoring their early jobs to other significant events in their lives.

One candidate consistently entered their employers’ names within the Job title field, and then had to correct themselves. Other candidates entered the employer names first, and then returned to the job title field later having had to give it more thought.

Some candidates suggested that they would be able to get the relevant information from their CV, but no candidates had a CV that included their complete work history.

Not all candidates responded to the prompts to enter explanations of breaks within their work history. Those that did were able to explain their break, eg by mentioning unemployment or raising children, with no stress and using only a brief explanation.

----


## Screenshots

TODO
