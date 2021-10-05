---
title: Reasons for rejection iteration 5
description: Changing the categorisation, content and interaction of selecting reasons for rejection.
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

Since then, our research and analysis has shown that some:

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

We took a baseline of data between January 2021 and September 2021.

| Description | Rate |
|------------|-----------|
| Rate of candidates who apply again | 1% <br>901 out of 3000 |
| Rate of candidates who receive offer after applying again | 1% <br>901 out of 3000 |
| Rate of candidates who receive feedback after automatic rejection | 1% <br>901 out of 3000 |
| Rate ‘other’ is used | 1% <br>901 out of 3000 |
| Average time taken to get through the rejection journey | 62 seconds |

We’ll know that the new design is better if:

- the rate of candidates who apply again increases
- the rate of candidates who receive an offer after applying again increases
- the rate of candidates receive feedback after automatic rejection increases
- the rate ‘other’ is used decreases
- the average time it takes to get through the rejection journey decreases

We may also start sending a survey to candidates when they receive feedback. This would give us a way to track the quality of feedback candidates are receiving.

## Analysis of reasons used to reject applications

We looked at how often each reason was used to reject an application between January 2021 and September 2021.

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

Categories that do not contain sub reasons reveal a ‘give details’ field which is required.

The following sub reasons within ‘qualifications’ do not reveal a field:

- No English GCSE grade 4 &#40;C&#41; or above, or accepted equivalent
- No maths GCSE grade 4 &#40;C&#41; or above, or accepted equivalent
- No science GCSE grade 4 &#40;C&#41; or above, or accepted equivalent
- No degree

After the user selects ‘continue’ they’re taken to a ‘check answers’ page.

Each row in the summary list represents a category. The category is shown in bold.

The description contains any selected sub reasons and further details.

If the sub reason contains further details it will have a colon on the end. If it doesn’t it will have a period.

After the user selects ‘send feedback and reject application’ the feedback is sent to the candidate and the user is taken to the feedback page.

## What we changed

We made several changes to the design.

### Using checkboxes instead of radio buttons for categories

Up to now, we’ve used yes-no radio buttons for the top-level categories.

We did this because our research showed that providers do not like to give feedback - using radio buttons makes sure users read and answer each question.

But we’re now changing the radio buttons into checkboxes because:

- they’re easier to scan and read
- they do not force users to select ‘no’ for each non-applicable category

We think that making it easier and quicker to reject an application, will increase the chance of users giving useful feedback.

Using checkboxes also means we’re able to show all possible reasons on one page. At the moment, if ‘no’ was answered for every yes-no question, the user would be taken to a page with a free text ‘other’ field.

### Showing reasons in the order they’re checked

We tried ordering the categories by frequency of use. But this would, for example, put ‘other’ at the top which would be confusing.

We tried ordering the categories alphabetically. But this would, for example, put ‘teaching knowledge and ability’ at the bottom even though it’s frequently used.

So we put the reasons in rougly the order they’re checked as well as how often they’re used.

### Not hiding reasons based on details or stage of application

We decided not to hide certain reasons based on the details or stage of the application because:

- it could make it harder for users to familiarise themselves with the structure
- there’s a risk that we move a reason that could still be of use in those cases

### Phrasing reasons based on fact or topic

We have 2 different ways of phrasing reasons. For example, we’re using phrases like:

- ‘did not attend interview’ for facts
- ‘spelling and grammar’ (not ‘Poor spelling and grammar’) to avoid critical judgments that may demoralise candidates

### Using only one ‘give details’ field per reason

At the moment, the ‘other’ checkbox within ‘candidate behaviour’ reveals 2 text fields: ‘give details‘ and ‘what could they do to improve?’.

But:

- this is unnecessary because both fields would probably contain the same information
- research by GDS shows that [conditionally revealing more than one field is inaccessible](https://accessibility.blog.gov.uk/2021/09/21/an-update-on-the-accessibility-of-conditionally-revealed-questions/)

So we’ve changed it so that only one ‘give details’ field is revealed.

### Changing the h1 heading to ‘tell the candidate why you’re rejecting their application’

At the moment, the h1 says ‘reasons for rejecting this application’ and we rely on hint text which says ‘this feedback will be sent to the candidate’ to help users:

- realise their feedback will be sent to the candidate
- write constructively

But as hint text is not always read, we changed the h1 to ‘tell the candidate why you’re rejecting their application’.

### Creating a ‘personal statement’ category

We previously had ‘personal statement’ as a reason within ‘quality of application’.

But as the ‘personal statement’ is often given as a reason to reject an application, we’ve made it a top level category to make it easy to find.

It contains:

- quality of writing
- other

We decided not to include ‘evidence of plagiarism’ as a sub reason because it's only been used once.

### Creating a ‘teaching knowledge and ability’ category

We replaced the ‘performance at interview’ and ‘quality of application’ categories with ‘teaching knowledge and ability’.

This means the same category can be used regardless of when or how the information was discovered.

It contains:

- understanding of subject
- understanding of safeguarding
- understanding of teaching methods
- understanding of teaching role
- presentation skills
- other

All of these reasons have been used as a reason for rejection.

### Creating a ‘communication and scheduling’ category

We moved sub reasons from ‘candidate behaviour’ and ‘honesty and professionalism’ to ‘communication and scheduling’.

We did this because ‘communication and scheduling’ better describes the reasons within.

It contains:

- did not reply to messages
- did not attend interview
- could not arrange interview
- other

We added ‘could not arrange interview’ becaue it’s [commonly used as a reason for rejection](https://docs.google.com/document/d/1pSGebtmnm0Gg3ROaqVX96nUvimFY71bfRKlbVhWPobU/edit#).

### Creating a ‘references’ category

We currently have ‘references did not support the application’ within ‘honesty and professionalism’.

But we now have a ‘references’ top level category instead which will make it easier to find.

We decided not to add these sub reasons:

- the references do not meet our requirements
- work history does not correspond to the reference
- the references indicated that the candidate was unsuitable to work with children

This is because:

- the reasons have been rarely used
- the reason may relate to safeguarding - as this is a separate category it could cause users to be confused about which to choose

### Removing sub reasons from ‘safeguarding’

We decided not to include these sub reasons:

- the candidate disclosed information which makes them unsuitable to work with children
- the vetting process found information which makes the candidate unsuitable to work with children

This is because they’re rarely used.

### Changing ‘cannot sponsor visa’ to ‘visa sponsorship’

We changed ‘cannot sponsor visa’ to ‘visa sponsorship’ because:

- there may be other reasons relating to visa sponsorship
- it’s phrased as a topic which is consistent with the other categories

### Changes to the ‘qualifications’ category

We added a ‘give details’ field to the ‘degree does not meet course requirements’ to let providers give further details.

We added ‘could not verify qualifications’. This should help users clearly distinguish between, for example:

- not having a maths GCSE
- not being able to verify their maths GCSE

When selected, it reveals a ‘give details’ field in order to give details as to how the qualification could not be verified.

We decided not to add ‘qualifications found to be incorrect’ because it:

- is rarely used
- would not be obvious whether it should be used instead of, for example, ‘no maths GCSE grade 4 &#40;C&#41; or above, or accepted equivalent’

We removed ‘for primary applicants’ from ‘no science GCSE grade 4 &#40;C&#41; or above, or accepted equivalent’ because it may be asked for non primary courses.

### Added ‘give details’ to the ‘course full’ category

We added a conditionally revealed ‘give details’ field because some users have used the ‘other advice or feedback’ to encourage candidates to apply again in the next recruitment cycle due to the course being full.

### Removed ‘make offer on other course’ category

We removed ‘offered a place on another course’ because:

- it was only needed if the provider made an offer through UCAS
- offering a place on one course should not be a reason for not offering a place on another

### Removed ‘other advice or feedback’ category

We removed ‘other advice or feedback’ because:

- it makes the rejection flow less onerous
- every reason has a ‘give details’ field to provide further detail
- the ‘other’ category can be used which is now always available

### Removed ‘honesty and professionalism’ category

We removed ‘honesty and professionalism’ because:

- it’s rarely used.
- the category was mostly used to state that the candidate did not attend interview which is now a sub reason within ‘communication and scheduling’

### Other reasons we did not add

We decided not to add a ‘work history’ category because:

- it’s rarely used
- the ‘teaching knowledge and ability’ and ‘safeguarding’ categories can be used to enter reasons that relate to work history

We decided not to add ‘lack of relevant experience’ within ‘teaching knowledge and ability’ because policy states that training providers must not use this as a reason for rejection.

### Changes to the check answers page

At the moment we use inset text to give users a preview of what their feedback will look like for candidates.

This helps users realise their feedback is going to be sent to the candidate. But this is problematic because we have change links within the preview area which makes the preview misleading.

So we changed this to show the answers in a standard summary list. We think this will be fine because the h1 on the first page is ‘tell the candidate why you’re rejecting their application’.

For the same reason, we also removed ‘your feedback will be given to the candidate in the format below.’

## Future considerations

In future we’ll consider:

- notifying DfE about dangerous candidates in order to stop them from proceeding with other unaware training providers
- adding ‘knowledge of primary’ as a reason when a candidate applies to a primary course
- whether ‘visa sponsorship’ should only be shown for candidates without British nationality
