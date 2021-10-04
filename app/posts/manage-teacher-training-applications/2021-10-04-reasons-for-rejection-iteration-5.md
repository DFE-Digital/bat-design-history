---
title: Reasons for rejection iteration 5
description: A major change to the categorisation and interaction for giving feedback when rejecting an application.
date: 2021-10-04
tags:
  - AN029
screenshots:
  items:
    - text: Reasons closed
      src: reasons--closed.png
    - text: Reasons open
      src: reasons--open.png
    - text: Check answers
      src: check-answers.png
    - text: Feedback page
      src: feedback-page.png
related:
  items:
    - text: Research playback slides
      href: https://docs.google.com/presentation/d/1G-DHodmyaZ-59ljLewJIT9Ir1NuDKr5deaKCl-X1zME/edit#slide=id.g87a1bae6f6_0_15
    - text: Research summary document
      href: https://docs.google.com/document/d/1k3eJha7w0_bZi2JGVNmVhMlh3IAGYq0qa7wKeKy4yAY/edit#
    - text: Analysis of applications rejected automatically
      href: https://docs.google.com/document/u/2/d/1ON91Cc_2mjqNNG0OUPdqP3qP_HyJ6S9iMYo71MVUrh0/edit#
    - text: Analysis of ‘other’ free text reasons for rejection
      href: https://docs.google.com/document/u/2/d/1ON91Cc_2mjqNNG0OUPdqP3qP_HyJ6S9iMYo71MVUrh0/edit#
---

We launched [structured reasons for rejection](/manage-teacher-training-applications/reasons-for-rejection-iteration-4/) on 14 January 2021.

Since then, our research and analysis found that some:

- users find the categorisation confusing - for example, it’s not clear what ‘candidate behaviour’ means and what sub reasons it contains
- common reasons are missing - for example, ‘could not schedule an interview’
- users do not think of ‘course full’ as a reason to reject an application
- users think it takes too much effort to give feedback

This can result in poor or no feedback and may mean that candidates:

- do not know why their application was unsuccessful
- are not encouraged to apply again
- find it harder to improve any future applications

## User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Measuring success

We took a baseline of data from January 2021 to September 2021.

| Description | Rate |
|------------|-----------|
| Rate candidates apply again | 1% <br>901 out of 3000 |
| Rate candidates receive offer after applying again | 1% <br>901 out of 3000 |
| Rate candidates receive feedback after automatic rejection | 1% <br>901 out of 3000 |
| Rate ‘other’ is used | 1% <br>901 out of 3000 |
| Average time taken to get through the rejection joruney | 62 seconds |

We’ll know that the new design is better if:

- the rate candidates apply again increases
- the rate candidates receive an offer after applying again increases
- the rate candidates receive feedback after automatic rejection increases
- the rate ‘other’ is used decreases
- the average time it takes to get through the rejection journey decreases

We also plan to add a link to a satisfaction survey at the bottom of the email candidates receive when their application is rejected.

## Analysis of which categories and sub reasons were given

As part of our analysis, we documented how often certain structured reasons for rejection were used between January 2021 and September 2021.

### Categories

| Category | Rate |
|------------|----------|
| Course full | 24.7% <br>999 out of 4045 |
| Qualifications | 18.1% <br>733 out of 4045 |
| Performance at interview | 14.4% <br>581 out of 4045 |
| Quality of application | 14.1% <br>573 out of 4045 |
| Offered another course | 3.7% <br>153 out of 4045 |
| Candidate behaviour | 2.8% <br>115 out of 4045 |
| Cannot sponsor visa | 2.2% <br>87 out of 4045 |
| Honesty and professionalism | 0.5% <br>20 out of 4045 |
| Safeguarding | 0.4% <br>15 out of 4045 |
| Other | 26% <br>X out of 4045 |

### Qualifications

| Reason | Rate |
|------------|----------|
| No degree | 4.4% <br>37 out of 4045 |
| No English GCSE grade 4 	&#40;C&#41; or above, or valid equivalent | 12.5% <br>104 out of 4045 |
| No Maths GCSE grade 4 	&#40;C&#41; or above, or valid equivalent | 10.3% <br>86 out of 4045 |
| No Science GCSE grade 4 	&#40;C&#41; or above, or valid equivalent (for primary applicants) | 4.3% <br>36 out of 4045 |
| Other | 68.4% <br>570 out of 4045 |

### Quality of application

| Reason | Rate |
|------------|----------|
| Personal statement | 53.5% <br> 357 out of 4045 |
| Subject knowledge | 23.2% <br> 155 out of 4045 |
| Other | 23.4% <br> 156 out of 4045 |

### Candidate behaviour

| Reason | Rate |
|------------|----------|
| Didn't attend interview | 56% <br> 69 out of 4045 |
| Didn't reply to our interview offer | 15% <br> 19 out of 4045 |
| Other | 29% <br> 36 out of 4045 |

### Honesty and professionalism

| Reason | Rate |
|------------|----------|
| Information given on application form false or inaccurate | 3.92% <br> 1 out of 4045 |
| Evidence of plagiarism in personal statement or elsewhere | 3.92% <br> 1 out of 4045 |
| References didn’t support application | 13.7% <br> 3 out of 4045 |
| Other | 78% <br> 16 out of 4045 |

### Safeguarding

| Category | Rate |
|------------|----------|
| Information disclosed by candidate makes them unsuitable to work with children | 18.9% <br> 3 out of 4045 |
| Information revealed by our vetting process makes the candidate unsuitable to work with children | 0% |
| Other | 81.1% <br> 12 out of 4045 |

## How it works

When the user selects ‘reject application’ they’re taken to a page with a list of categories as checkboxes. At least one category must be selected.

Some categories reveal a list of sub reasons. At least one sub reason must be selected.

Most sub reasons reveal a ‘give details’ field which is required.

Categories that do not contain sub reasons reveal a ‘give details’ textarea which is required.

The following sub reasons within ‘qualifications’ do not reveal anything:

- No English GCSE grade 4 &#40;C&#41; or above, or accepted equivalent
- No maths GCSE grade 4 &#40;C&#41; or above, or accepted equivalent
- No science GCSE grade 4 &#40;C&#41; or above, or accepted equivalent
- No degree

After the user selects ‘Continue’ they’re taken to a ‘check answers’ page.

Each row represents a category. The category is shown in bold.

The description contains any sub reason or details given.

If the sub reason contains further details it will have a colon on the end. If it doesn’t it will have a period.

After the user selects ‘Send feedback and reject application’ the feedback is sent to the candidate and the user is taken to the feedback page showing a record of the feedback.



## What we changed

We made several changes to the design.

### Using checkboxes instead of radio buttons for categories

Up to now, we’ve used yes-no radio buttons for the top-level categories.

We did this because our research showed that providers do not like to give feedback - using radio buttons makes sure users read and answer each question.

But we’re now changing to a single group of checkboxes because they’re much easier to scan and read and they do not force users to select ‘no’ for each category that does not apply.

We think that making it easier and quicker to use will increase the chance of users giving useful feedback.

Using checkboxes has also meant that we can put all of the reasons for rejection on one page. Previously if ‘No’ was answered for every yes-no question, the user would be taken to another page with a textarea so they could tell the candidate why they’re rejecting the application.

### Showing the reasons in the order in which users check details

We found it difficult to order the categories. Ordering by frequency of use alone means, for example, ‘Other’ goes to the top even though it is best positioned at the bottom.

Ordering alphabetically means, for example, ‘Teaching knowledge and ability’ is toward the bottom even though it’s a commonly used reason.

So we ordered the reasons in roughly the order in which users check details as well as how often they’re used.

### Not hiding reasons based on details or stage of application

We decided not to hide certain reasons based on the details or stage of the application.

Doing so could make it harder for users to familiarise themselves with the structure. There’s also a risk that we have considered why a user may still want to use those reasons in certain cases.

### Describing reasons as either facts or topics

We have 2 different ways of labelling reasons.

We use terms like ‘did not attend interview’ for reasons that are facts.

We use ‘Spelling and grammar’ (not ‘Poor spelling and grammar’) to avoid terms that may not be factual and can demoralise the candidate.

### Using just one ‘give details’ field per reason

At the moment, the ‘other’ checkbox within ‘candidate behaviour’ reveals 2 text fields: ‘give details‘ and ‘what could they do to improve?’.

This is unnecessary as both fields will probably contain the same information.

Also recent research from GDS shows that [conditionally revealing more than one field is inaccessible].

### Changing the h1 heading from ‘Reasons for rejecting this application’ to ‘Tell the candidate why you’re rejecting their application’

At the moment, the h1 says ‘Reasons for rejecting this application’ and there’s hint text which says ‘This feedback will be sent to the candidate’.

This to help users realise this feedback will be sent to the candidate. We think this helps users to write directly to the candidate in a constructive way.

But hint text is not always noticed, so we changed the h1 to ‘Tell the candidate why you’re rejecting their application’.

### Creating a ‘personal statement’ category

We previously had ‘personal statement’ within ‘quality of application’.

But we made this a top level section because it’s used a lot in its own right during the sift and interview stages of the application process.

It contains:

- Quality of writing
- Other

We decided not to include ‘evidence of plagiarism’ as a sub reason because it's only been used once.

### Creating a ‘teaching knowledge and ability’ category

We replaced the existing ‘performance at interview’ and ‘quality of application’ sections with ‘teaching knowledge and ability’.

This means the same category can be used regardless of when or how the information was found out.

It contains:

- Understanding of subject
- Understanding of safeguarding
- Understanding of teaching methods
- Understanding of teaching role
- Presentation skills
- Other

All of these reasons have been used as a reason for rejection.

### Creating a ‘communication and scheduling’ category

We moved sub reasons from ‘candidate behaviour’ and ‘honesty and professionalism’ to ‘communication and scheduling’.

This better describes the commonly used reasons within the category.

It contains:

- Did not reply to messages
- Did not attend interview
- Could not arrange interview
- Other

We added ‘Could not arrange interview’ as it’s [commonly used as a reason for rejection](https://docs.google.com/document/d/1pSGebtmnm0Gg3ROaqVX96nUvimFY71bfRKlbVhWPobU/edit#) and [tagged adam](https://docs.google.com/document/d/1ON91Cc_2mjqNNG0OUPdqP3qP_HyJ6S9iMYo71MVUrh0/edit# )

### Creating a ‘references’ category

We previously had ‘references did not support the application’ within ‘honesty and professionalism’.

But as that category no longer exists we created a ‘references’ top level category.

We decided not to add the following sub reasons:

- The references do not meet our requirements
- Work history does not correspond to the reference
- The references indicated that the candidate was unsuitable to work with children

This is because:

- the reasons have been very rarely used
- the reference may relate to safeguarding which is already a category of its own and could cause users to be confused as to which one to use

### Removing sub reasons from ‘safeguarding’

We decided not to include the following sub reasons:

- The candidate disclosed information which makes them unsuitable to work with children
- The vetting process found information which makes the candidate unsuitable to work with children

This is because they’re very rarely used.

### Changing ‘Cannot sponsor visa’ to ‘Visa sponsorship’

We changed ‘cannot sponsor visa’ to ‘Visa sponsorship because:

- there may be other reasons relating to visa sponsorship
- it better matches the other top level categories like ‘qualifications’

### Changes to the ‘qualifications’ category

We added a ‘give details’ field to the ‘degree does not meet course requirements’ to let providers give further details.

We also added ‘could not verify qualifications’ with a ‘give details’ field because:

- it may give candidates clearer feedback
- for example, the candidate may have a maths GCSE but cannot prove it

We decided not to add ‘qualifications found to be incorrect’ because:

- it’s rarely used
- it could make it harder to choose between it and other reasons like ‘No maths GCSE grade 4 &#40;C&#41; or above, or accepted equivalent’

We removed ‘for primary applicants’ from ‘No science GCSE grade 4 &#40;C&#41; or above, or accepted equivalent’ because it may be asked for non primary courses.

### Added ‘give details’ to the ‘course full’ category

We added a conditionally revealed ‘give details’ field because some users have used the ‘other advice or feedback’ to tell candidates to apply again next year due to the course being full.

### Removed ‘make offer on other course’ category

We removed ‘offered a place on another course’ because:

- it was only needed in case the provider made an offer to an application made through UCAS
- it’s unnecessary - if a provider has multiple applications from the same candidate, then the reason one application was unsuccessful was probably not because one of the others was successful

### Removed ‘other advice or feedback’ category

We removed ‘other advice or feedback’ because:

- every category or relevant sub reason has a field to provide detail
- it makes the rejection process quicker
- the ‘other’ category can be used which is always available

### Removed ‘honesty and professionalism’ category

We removed ‘honest and professionalism’ as it was very rarely used.

Also this section was mostly used as a way to state that the candidate did not attend interview which is now a sub reason under ‘communication and scheduling’.

### Other reasons we did not add

We considered adding a ‘work history’ top level category. But this would be rarely used. We also have ‘teaching knowledge and ability’ and ‘safeguarding’ that can be used to describe reasons relating to work history.

We considered adding ‘lack of relevant experience’. But it’s a policy requirement that training providers do not use this as a reason for rejection.

### Changes to the check answers page

At the moment we use inset text to give users a preview of what their feedback will look like for candidates.

This helps users realise their feedback is going to be sent to the candidate and how it’ll look.

The problem is that we do not display exactly how it will look because we put change links within the preview area.

So we have changed this to a standard summary list. We think this will work fine because the h1 on the first page is ‘Tell the candidate why you’re rejecting their application’.

We removed the line that says ‘Your feedback will be given to the candidate in the format below.’ as it’s also unnecessary.

## Future considerations

In future we’ll consider:

- how to help users flag safeguarding concerns to DfE to avoid dangerous candidates from proceeding with other unaware training providers
- adding ‘knowledge of primary’ as a reason when a candidate applies to a primary course
- whether ‘Visa sponsorship’ should only be shown for candidates without British nationality
