---
title: Collecting more useful information about why trainees withdraw
description: We made it possible for providers to give more accurate and detailed information about why trainee teachers withdraw from courses.
date: 2022-11-29
related:
  items:
    - text: Withdrawal reasons for trainees who started in the 2021 to 2022 academic year
      href: https://docs.google.com/spreadsheets/d/1-2aCKmjnfVbgyiGMM8V_xYzjnYYfk56WPP01i9lN7EQ/edit?pli=1#gid=303708079

---

We want to understand more about why trainee teachers withdraw from courses. This could help the Department for Education to support trainees better and reduce the number of people who withdraw.

The current withdrawal journey:

- uses the list of withdrawal reasons from the old database of trainee teachers and providers (DTTP) - some of these reasons are unclear, very similar or rarely used
- only collects more details if the user selects ‘for another reason’, so usually we only know the general reason why a trainee withdrew
- only allows the user to select one reason
- is only used for trainees added manually, which means that it excludes most trainees on courses run by higher education institutions - but we expect it to be used by all training providers eventually

## Analysis

We looked at the withdrawal reasons used in the 2021 to 2022 academic year. With the most common listed first, they were:

- personal reasons
- unknown
- for another reason
- health reasons
- gone into employment
- financial reasons
- did not pass exams
- written off after lapse of time
- transferred to another provider
- did not pass assessment
- exclusion
- death

## What we changed

We have:

- moved the date question to its own page
- changed the list of reasons for withdrawal
- allowed users to choose multiple reasons for withdrawal
- added a page letting users give more details about why a trainee withdrew
- changed the check answers page to reflect the changes to the withdrawal journey
- added a summary of the withdrawal to the trainee record and removed some details from the timeline

### Moving the date question

We previously had a single page which asked users to give:

- the date of withdrawal
- a reason for withdrawal

Since there are several possible reasons for withdrawal, this was quite a long page.

We’ve moved the question about the date of withdrawal to its own page. This should make it easier for users to focus on each question in turn.

If we know the date when the trainee started initial teacher training (ITT), then this new page will be the first which the user sees after clicking ‘withdraw’ on the trainee’s record. Otherwise, the user will first be asked when the trainee started ITT.

### Changing the list of reasons for withdrawal

When deciding on the new reasons for withdrawal, we looked at:

- how often the existing reasons for withdrawal were used
- the additional details entered where ‘for another reason’ had been chosen

We want to cover most of the reasons used by training providers. This will allow them to be accurate without needing to choose ‘for another reason’ and will also improve the quality of the data which we receive.

For example, we found that in ‘for another reason’ users often mentioned that a trainee had decided not to become a teacher. So we decided to add that as a reason.

However, we do not want the list to be so long that it’s hard to read and choose from. Some reasons such as ‘death’ have been used very rarely, so we decided to remove this reason and let users choose ‘another reason’.

The new reasons for withdrawal are:

- could not give enough time to course
- course was not suitable for them
- did not make progress in course
- did not meet course entry requirements
- does not want to become a teacher
- family problems
- financial problems
- got a job
- problems with their health
- stopped responding to messages
- teaching placement problems
- unacceptable behaviour
- unhappy with course, provider or employing school
- another reason
- unknown

The reasons are listed alphabetically, except for ‘another reason’ and ‘unknown’.

### Letting users choose multiple reasons

We think that trainees may withdraw from a course for a combination of reasons.

We decided to let providers choose more than one reason. This means that we now use checkboxes instead of radio buttons.

A user should not be able to choose ‘unknown’ and another reason. If they choose ‘unknown’ then any other selected reasons are unselected. If they choose another reason then ‘unknown’ is unselected.

If the user does not have Javascript enabled then they will be able to choose ‘unknown’ and another reason. When they click to continue, they will see the error message ‘Select why the trainee withdrew from the course or select “Unknown”’.

### Asking users for more details

Previously, users were only asked to give more details if they selected ‘for another reason’. This meant that we only had a limited understanding of why most trainees withdrew.

For example, a user might have picked ‘financial reasons’ but we would not know whether that was related to bursaries, transport costs or something else.

We decided to always allow users to give additional information. We show them an optional field for “details about why the trainee withdrew”. We hope that this additional information can be used to improve our analysis of the reasons for withdrawal.

We also added an optional question, “Could the Department for Education have done anything to avoid the candidate withdrawing?”

We want to understand whether the department could make improvements, and this is a good opportunity to collect suggestions from providers.

We’ve set a limit of 1000 characters for each response. The number of characters remaining is displayed once they reach 750.

If they exceed the limit, the warning turns from grey to red and shows how many characters over the limit the answer is.

If the user submits an answer which is too long, they get an error message which is either:

- Details about why the trainee withdrew must be 1000 characters or less
- What the Department for Education could have done must be 1000 characters or less

### Changing the check answers page

The check answers page can now show multiple reasons for withdrawal, each on its own line.

The information we replay on this page is:

- date the trainee withdrew
- why the trainee withdrew
- details about why the trainee withdrew
- could the Department for Education have done anything to avoid the candidate withdrawing? - this only appears if the answer to the question is ‘no’
- what the Department for Education could have done - this only appears if the user said that the department could have done something

### Showing withdrawal details in the trainee record

We added a ‘withdrawal details’ box to the trainee record, which appears between the ‘trainee progress’ and ‘course details’ boxes.

The new box only appears if the trainee has withdrawn from their course. It includes the same information which is shown to users when they check their answers before marking the candidate as withdrawn.

The timeline for the trainee’s record now shows only:

- which user marked the trainee as withdrawn
- the date and time when the trainee was marked as withdrawn
- the date when the trainee withdrew

## Further work

After the new reasons for withdrawal have been available to users for a few months, we’ll analyse how they’ve been used. This will help us to decide whether to make further changes to the list of reasons.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 2,
  items: [
  {
    id: "1-when-did-trainee-withdraw",
    text: "Asking when the trainee withdrew"
  },
  {
    id: "2-why-did-trainee-withdraw",
    text: "New list of reasons for rejection, using checkboxes so that users can select more than one"
  },
  {
    id: "3-more-details",
    text: "Asking for more details about why the trainee withdrew and whether the Department for Education could have done anything to avoid it"
  },
  {
    id: "4-confirm",
    text: "Check details page with a red button allowing the user to withdraw the trainee"
  },
  {
    id: "5-trainee-page",
    text: "Trainee record with a message saying that the trainee has withdrawn, plus a box showing the withdrawal details"
  },
  {
    id: "6-timeline",
    text: "Timeline showing when the user marked the trainee as withdrawn and when the trainee actually withdrew"
  }]
}) }}