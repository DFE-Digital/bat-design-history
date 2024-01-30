---
title: Reasons for rejection iteration 5
description: Changing the categorisation, content and interaction of selecting reasons for rejection.
date: 2021-10-04
user_needs:
  - AN029
tags:
  - rejections
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
    - text: Metrics taken between January 2021 and September 2021
      href: https://docs.google.com/document/u/2/d/1frRtggMYqO_KG46vDto3MvZ041TfhsMZRcZghR-hvzs/edit#
---

We launched [structured reasons for rejection](/manage-teacher-training-applications/reasons-for-rejection-iteration-4/) on 14 January 2021. Users must select from a range of reasons when they reject an application, rather than just entering free text.

The candidate user need this meets is:

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works currently

When a user selects ‘reject application’ they’re taken to a page with a list of categories and yes/no radio buttons.

Saying yes to some categories reveals a list of sub-categories with checkboxes. The user must select at least one of these unless they change their answer to say no to the category.

Categories that do not contain sub-categories reveal a ‘give details’ field. Most sub-categories also reveal a ‘give details’ field. The user must complete this field.

If the user says no to all the categories then on the next page they're given a field asking them why they’re rejecting the application. The category is considered to be ‘other’.

The user can also add ‘other advice and feedback’ as part of the rejection flow.

## Why we made changes

Our research and analysis has shown that some users:

- find the categorisation confusing - for example, it’s not clear what ‘candidate behaviour’ means and what sub-categories it contains
- want to enter reasons which are missing, such as ‘could not schedule an interview’
- do not think of ‘course full’ as a reason to reject an application
- think it takes too much effort to give feedback

This can result in poor or no feedback and may mean that candidates:

- do not know why their application was unsuccessful
- are not encouraged to apply again
- find it hard to know how to improve for any future applications

## Analysis of reasons used to reject applications

We looked at how often each reason was used to reject an application between January 2021 and September 2021.

### Categories

| Category | Percentage of all rejections |
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
| Other | 26% <br>1064 out of 4045 |

### Qualifications

| Reason | Percentage of all rejections | Percentage of all rejections within this category |
|------------|----------|----------|
| No English GCSE grade 4 &#40;C&#41; or above, or valid equivalent | 2.6% <br> 104 out of 4045 | 12.5% <br>104 out of 833  |
| No Maths GCSE grade 4 &#40;C&#41; or above, or valid equivalent | 2.1% <br> 86 out of 4045 | 10.3% <br>86 out of 833 |
| No Science GCSE grade 4 &#40;C&#41; or above, or valid equivalent (for primary applicants) | 0.9% <br> 36 out of 4045 | 4.3% <br>36 out of 833 |
| No degree | 0.9% <br> 37 out of 4045 | 4.4% <br>37 out of 833 |
| Other | 14% <br> 570 out of 4045 | 68.4% <br>570 out of 833 |

### Quality of application

| Reason | Percentage of all rejections | Percentage of all rejections within this category |
|------------|----------|----------|
| Personal statement | 8.8% <br> 357 out of 4045 | 53.5% <br> 357 out of 668 |
| Subject knowledge | 3.8% <br> 155 out of 4045 | 23.2%<br> 155 out of 668 |
| Other | 3.9% <br> 156 out of 4045 | 23.4% <br> 156 out of 668 |

### Candidate behaviour

| Reason | Percentage of all rejections | Percentage of all rejections within this category |
|------------|----------|----------|
| Didn't reply to our interview offer | 0.47% <br> 19 out of 4045 | 15% <br> 19 out of 124 |
| Didn't attend interview | 1.71% <br> 69 out of 4045 | 55% <br> 69 out of 124 |
| Other | 0.89% <br> 36 out of 4045 | 30% <br> 39 out of 124 |

### Honesty and professionalism

| Reason | Percentage of all rejections | Percentage of all rejections within this category |
|------------|----------|----------|
| Information given on application form false or inaccurate | 0.03% <br> 1 out of 4045 | 3.92% <br> 1 out of 21 |
| Evidence of plagiarism in personal statement or elsewhere | 0.03% <br> 1 out of 4045 | 3.92% <br> 1 out of 21 |
| References didn’t support application | 0.07% <br> 3 out of 4045 | 3.92% <br> 3 out of 21 |
| Other | 0.4% <br> 16 out of 4045 | 3.92% <br> 16 out of 21 |

### Safeguarding

| Reason | Percentage of all rejections | Percentage of all rejections within this category |
|------------|----------|----------|
| Information disclosed by candidate makes them unsuitable to work with children | 0.07% <br> 3 out of 4045 | 18.9% <br> 3 out of 15 |
| Information revealed by our vetting process makes the candidate unsuitable to work with children | 0% | 0% |
| Other | 0.3% <br> 12 out of 4045 | 81.1% <br> 12 out of 15 |

## Measuring whether our changes are successful

We’ll know that the new design is better if:

- a larger proportion of candidates apply again
- a larger proportion of candidates receive an offer after applying again
- a smaller proportion of rejected applications that only use the ‘other’ category
- the average time to get through the rejection journey decreases

We looked at data from January 2021 and September 2021.

| Description | Rate or amount |
|------------|-----------|
| Candidates who apply again | 20.8% <br>617 out of 2972 |
| Candidates who receive an offer after applying again | 32.1% <br> 198 out of 617 |
| Rejected applications that only use the ‘other’ category | 26.6% <br>1075 out of 4045 |
| Average time taken for a user to get through the rejection journey | 62 seconds |

We may also start sending a survey to candidates when they receive feedback. This would give us a way to track the quality of feedback which candidates are receiving.

## What we changed

### Using checkboxes instead of radio buttons for rejection categories

At the moment, we use yes/no radio buttons for the categories.

We designed it like this because our research showed that many providers do not like to give feedback. Using radio buttons makes sure users read and answer each question.

We’re now switching from radio buttons to checkboxes because:

- they’re easier to scan and read
- they do not require users to select ‘no’ for each category which does not apply

We think that making it easier and quicker to reject an application will increase the chance of users giving useful feedback.

Using checkboxes also means we’ll be able to show all possible categories on one page, including ‘other’. At the moment ‘other’ is shown on a second page if the user answers no to all the other categories.

The user must select at least one category. If any sub-categories are revealed, they must select at least one of them. If a ‘give details’ field is revealed, they must complete it.

### Changing the order in which the categories are shown

We tried ordering the categories by frequency of use. But this would, for example, put ‘other’ at the top which would be confusing.

We tried ordering the categories alphabetically. But this would, for example, put ‘teaching knowledge and ability’ at the bottom even though it’s frequently used.

So we put the reasons in an order which balances:

- the order they’re likely to be checked by a provider - for example, references come later than qualifications
- how often they’re used

### Not hiding reasons based on the details or stage of application

We decided not to hide certain reasons based on the details or stage of the application because:

- it could make it harder for users to familiarise themselves with the order in which reasons appear
- there’s a risk that we hide a reason that the user wants to use

At the moment, we hide ‘cannot sponsor visa’ when the candidate is a British citizen. We’ll no longer do so.

### Phrasing reasons based on whether they’re factual or subjective

We want to be consistent with how we phrase reasons, but some are factual while others are subjective.

We have decided to avoid negative wording where the reason is subjective. For example, we use:

- ‘did not attend interview’
- ‘spelling and grammar’

We do not use ’poor spelling and grammar’ since this is subjective. The user can decide how critical they should be in the details they give.

### Using only one ‘give details’ field per reason

At the moment, the ‘other’ checkbox within ‘candidate behaviour’ reveals 2 text fields: ‘give details‘ and ‘what could they do to improve?’

We’ve changed this so that only one ‘give details’ field is revealed, because:

- both fields would usually contain very similar information
- research by GDS shows that [conditionally revealing more than one field is inaccessible](https://accessibility.blog.gov.uk/2021/09/21/an-update-on-the-accessibility-of-conditionally-revealed-questions/)

### Changing the h1 heading to ‘tell the candidate why you’re rejecting their application’

At the moment, the h1 says ‘reasons for rejecting this application’.

We rely on hint text which says ‘this feedback will be sent to the candidate’ to encourage users to write clearly and constructively.

But as hint text is not always read, we changed the h1 to ‘tell the candidate why you’re rejecting their application’.

### Creating a ‘personal statement’ category

At the moment, ‘personal statement’ is a reason within ‘quality of application’.

But as the personal statement is often given as a reason to reject an application, we’ve made it a top level category to make it easy to find.

It contains:

- quality of writing
- other

We decided not to include ‘evidence of plagiarism’ as a sub-category because it's only been used once.

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

All of these have been used by providers as reasons for rejection.

### Creating a ‘communication and scheduling’ category

We moved sub-categories from ‘candidate behaviour’ and ‘honesty and professionalism’ to ‘communication and scheduling’.

We did this because ‘communication and scheduling’ better describes the sub-categories.

It contains:

- did not reply to messages
- did not attend interview
- could not arrange interview
- other

We added ‘could not arrange interview’ because it’s [commonly used as a reason for rejection](https://docs.google.com/document/d/1pSGebtmnm0Gg3ROaqVX96nUvimFY71bfRKlbVhWPobU/edit#).

### Creating a ‘references’ category

We currently have ‘references did not support the application’ within ‘honesty and professionalism’.

But we now have a ‘references’ category instead which will make it easier to find.

We decided not to add these sub-categories:

- the references do not meet our requirements
- work history does not correspond to the reference
- the references indicated that the candidate was unsuitable to work with children

This is because:

- the reasons have rarely been used
- the reason may relate to safeguarding, which is a separate category - users could be confused about which to choose

### Removing sub-categories from ‘safeguarding’

We decided to remove these sub-categories:

- the candidate disclosed information which makes them unsuitable to work with children
- the vetting process found information which makes the candidate unsuitable to work with children

This is because they’re rarely used.

### Changing ‘cannot sponsor visa’ to ‘visa sponsorship’

We changed ‘cannot sponsor visa’ to ‘visa sponsorship’ because:

- there may be other reasons relating to visa sponsorship
- it’s more consistent with the names of other categories

### Changes to the ‘qualifications’ category

We added a ‘give details’ field to ‘degree does not meet course requirements’. We think that further details will be useful for candidates.

We added ‘could not verify qualifications’ and a ‘give details’ field. This should help users clearly distinguish between, for example:

- not having a maths GCSE
- not being able to prove that they have a maths GCSE or what grade it is

We decided not to add ‘qualifications found to be incorrect’ because it’s:

- rarely used
- not suffiently different to reasons such as ‘no maths GCSE grade 4 &#40;C&#41; or above, or accepted equivalent’

We removed ‘for primary applicants’ from ‘no science GCSE grade 4 &#40;C&#41; or above, or accepted equivalent’. Science GCSE is required for some secondary courses.

### Removed ‘make offer on another course’ category

We removed ‘offered a place on another course’ because:

- it was only needed if the provider made an offer through UCAS
- offering a place on one course should not be a reason for not offering a place on another

### Removed ‘other advice or feedback’ category

We removed ‘other advice or feedback’ because:

- it makes the rejection flow easier for users
- most reasons have a ‘give details’ field to provide further detail
- the ‘other’ category is now always available, even if a user has chosen another reason for rejection

### Removed ‘honesty and professionalism’ category

We removed ‘honesty and professionalism’ because:

- it’s rarely used
- the category was mostly used to state that the candidate did not attend interview - this is now a sub-category within ‘communication and scheduling’

### Other reasons we did not add

We decided not to add a ‘work history’ category because:

- it’s rarely used
- the ‘teaching knowledge and ability’ and ‘safeguarding’ categories can be used to enter reasons that relate to work history

We decided not to add ‘lack of relevant experience’ within ‘teaching knowledge and ability’ because training providers are not supposed to use this as a reason for rejection.

### Changes to the check answers page

Previously we used inset text to give users a preview of what their feedback would look like for candidates.

This helped make sure users understood that their feedback was going to be sent to the candidate. But it was problematic because we had change links within the preview area, making the preview misleading.

We changed this to show the answers in a standard summary list. We think this will be clear enough now that the h1 heading on the first page is ‘tell the candidate why you’re rejecting their application’.

We also removed the line saying that ‘your feedback will be given to the candidate in the format below’.

Each row in the summary list represents a category, which is shown in bold text.

The description contains any selected sub-category and further details.

If the sub-category contains further details it has a colon at the end. If it doesn’t it has a full stop.

After the user selects ‘send feedback and reject application’ the feedback is sent to the candidate and the user is taken to the feedback page.

### Keeping ‘course full’ as a reason for rejection

We considered moving ‘course full’ to being a choice alongside ‘make offer’ and ‘reject application’.

We decided not to do that because:

- we’re concerned that some users might use it as a way to keep places for better candidates
- we’d have to mark the application as ‘withdrawn’, which is currently something triggered by candidates

We may consider letting training providers withdraw their course or mark it as full within our service. But this might be better left as a feature of the ‘Publish teacher training courses’ service.

### Deciding not to add a 'give details' field to the 'course full' category

We considered adding a 'give details' field because a few users had added comments to 'other advice or feedback' encouraging candidates to apply next year.

We decided not to include the field because most users do not have anything else to add. Since the course is full they may not have read the application.

## Future considerations

In future we’ll consider:

- notifying DfE about candidates with safeguarding issues, in case they need to be prevented from proceeding with other training providers
- adding ‘knowledge of primary teaching’ as a reason when a candidate applies to a primary course
- whether ‘visa sponsorship’ should only be shown for candidates without British nationality
