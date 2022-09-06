---
title: Updating the ‘ITT end date’ field
description: Improving the tools and interface our support staff use to administer Register
date: 2022-09-06
related:
  items:
  - text: Pull request adding renaming field
    href: https://github.com/DFE-Digital/register-trainee-teachers-prototype/pull/556
  - text: Pull request adding page to reinstatement flow
    href: https://github.com/DFE-Digital/register-trainee-teachers-prototype/pull/558

---

We’ve made some changes to the ‘ITT end date’ field to make it more useful and accurate.

We’ve renamed it ‘Expected end date’ to better reflect that we want providers to keep it up to date. This also aligns with what HESA call this field so is less confusing for users who use HESA and Register..

We’ve also introduced a new page into the flow where a provider can reinstate (return) a trainee from being deferred. In the flow we ask for a new ‘expected end date’ when a trainee returns from deferral.

## What we mean by ‘ITT end date’

When providers add trainees on courses in Register, we collect the ‘ITT start date’ and ‘ITT end date’. These will usually be the official start and end dates of the course. Most trainees are expected to finish in the same academic year as their ‘ITT end date’ unless they withdraw, defer, or need more time to complete their training.

## Why do we care about ‘ITT end date’?

The ‘ITT end date’ gives us an estimation of when the trainee is likely to be finishing training.

Combined with ‘ITT start date’, it gives us the duration of the course, and lets us know what academic year the trainee will likely finish. In the future this might be used to filter trainees ‘finishing this year’ or in their ‘final year’. These are helpful groups for providers who might want to be awarding QTS to their final year trainees.

## Problems with‘ ITT end date’

For SCITT users the main problems have been that if a trainee is reinstated from deferral, then the ‘ITT end date’ is likely wrong. A provider could update the date themselves, but nothing prompts them to, it’s unlikely they will. This means we cannot give an accurate view of trainees likely to finish this year.

For HESA trainees, HESA previously didn’t collect an end date - they only collected a course duration. We used this duration to infer an end year for a trainee, but there’s lots of ways it could be wrong, and was not likely to get updated if a trainee deferred. For 2022 to 2023 academic year, HESA now asks for ‘Expected end date’ instead, and asks providers to keep it up to date.

## Screenshots

### Referring to estimated end date

![A screenshot of two sets of date inputs. The first is 'ITT start date', and the second is 'Estimated end date'.](1.manual-course-details-form.png)
![A screenshot of the course itt dates form, showing two sets of date inputs. The first is 'ITT start date', and the second is 'Estimated end date'.](2.publish-course-dates-form.png)
![A screenshot of a summary card showing completed course details. The last row shows 'expected end date'.](3.course-details-summary-card.png)


### Asking for updated estimated date when reinstating

![Screenshot of a page titled 'What is the expected end date for their course?' with a date input.](4.updating-estimated-end-date-after-deferral.png)
![Screenshot of the confirm page for reinstatement after deferral. The last row includes 'expected end date'.](5.summary-card-reinstatement.png)
