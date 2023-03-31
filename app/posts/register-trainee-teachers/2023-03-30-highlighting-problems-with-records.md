---
title: Highlighting problems with trainee records
description: Helping providers fix their own data so that they do not need to contact the support team.
date: 2023-03-30
---

The number of trainee records held by Register increases by about 40,000 each academic year. We try to identify problems when records are added or imported, but some records have data issues that we cannot identify.

We also inherited many records from the database of trainee teachers and providers (DTTP), the service which Register has replaced. Those records are more likely to have data issues.

We’ve designed a new feature to help users find problems and then fix them.

## Why we’re doing this

When providers contact us about problems with trainee records, they can require a lot of work for the support team to investigate and resolve. Sometimes the support team cannot make corrections themselves and must ask a developer to make the change.

Our analysts also often identify problems with trainee data. At the moment we either need to fix the problems ourselves or contact providers to ask them to do it.

In many cases providers are better placed than us to know what to do but it can be hard for them to spot problems. For example, when we asked providers to sign off their trainee data for the previous year many of them noticed problems they had not seen before.

It was good that this sign off process allowed users to spot mistakes but we’d like to help them to do so sooner. We’d also like to give them enough information to fix their own problems wherever possible.

## Where problems come from

We aim to have good validation to ensure we collect good data. This seems to be working, as errors in trainee data are down to 10% of their level when providers used DTTP.

However, records imported from the Higher Education Statistics Agency (HESA) cannot be validated in the same way as records imported from Apply or manually created in Register.

We’ve found that many problems with trainee records are caused by:

* different DfE systems having different data that can conflict or be out of sync
* data that passes validation but is likely to be incorrect, such as a course start date far in the future
* misunderstandings about how HESA works, leading to the wrong trainee statuses being submitted
* duplicate records
* poor quality data imported from DTTP
* details not being updated correctly when trainees change or leave courses

## Problems we’ll highlight

We started by identifying different trainee data problems which we’ve seen or which are commonly checked for by colleagues in analysis or funding teams.

From this list, we picked 2 common problems to highlight initially. They are:

* duplicate records
* records which may have been forgotten

### Duplicate records

Sometimes we suspect that 2 or more records refer to the same trainee. This can happen for a variety of reasons.

For example, a school centred initial teacher training (SCITT) provider can manually register a trainee. If they later mark that trainee as having met conditions in the Manage service, then our Apply import will automatically create a draft trainee in register.

 We currently need to contact the provider when we find a duplicate. We ask them to confirm that the records are duplicates and ask them which record we should keep.

### Records which have been forgotten

We believe that a number of trainee records in Register have been forgotten. Some possible reasons are that a trainee:

* never started the course and was accidentally registered
* deferred and then withdrew from the course
* started and then withdrew from the course

There may be a duplicate record showing that the trainee withdrew or was awarded teaching status.

The design of DTTP made it easy to lose track of records. Providers might not have spotted a trainee unless they actively looked for them. As a result, many forgotten records were imported from DTTP.

Register does a better job of highlighting these trainees and several providers have contacted us to clean up forgotten records. However we know that more remain and we expect that the problem will continue to occur.

We’re currently planning on identifying forgotten records by searching for trainees who:

* have deferred and have an estimated end date of more than 2 years ago
* have not deferred and have an estimated end date of more than a year ago

Some of these trainees will still be on courses. This is fine but we’ll ask providers to update their estimated end dates.

## How it works

To help users find and fixed problems, we've:

- added a home page card
- changed the filters on the registered trainees page
- changed the banner on registered trainee records so that it includes any problems
- changed the filters on the draft trainees page
- added a banner to draft trainee records which have problems

### Home page card

We added a card to the home page, which appears if at least one trainee has a problem. It shows the number of trainees who have problems.

If a user clicks on the card, they’re taken to the registered trainees page with a filter applied so that they see only trainees with problems.

![A new red card has been added to the homepage. It shows the number 44 and has a link on the phrase ‘trainees with problems’.](1.homepage-tiles.png)

### Filters on the registered trainees page

We previously let users filter by whether a record was complete or incomplete. We don’t know of a reason why users would need to see only complete trainee records, so we’ve changed this to show either ‘incomplete’ or ‘has problems’.

We’ve called the filter section ‘available to do’. This is because both ‘records you can complete’ and ‘trainees with problems’ appear as cards in the ‘available to do’ section of the home page.

![Some records on the trainees list have a new tag ‘problem’.](2.trainees-list-filtered.png)

### Banner on registered trainee records

Registered trainee records already have a banner when they’re incomplete. We now also show problems in a banner, which we’ve updated to use the GOV.UK notification banner component.

If the trainee may have been forgotten, we tell the user that they should have finished their training and give the end date for the course. We tell the user to decide whether to:

- recommend the trainee for teaching status
- withdraw the trainee
- update the end date for the course

![A banner is shown on a trainee record, warning the provider that the trainee may have been forgotten.](3.trainee-problem-forgotten.png)

If the trainee record is a duplicate we show a link to the other records for the same trainee. We tell the user to withdraw one or more trainees so that only one remains.

![A banner is shown on a trainee record, warning the provider that the trainee is a duplicate.](4.trainee-problem-duplicate.png)

Rather than adding another banner when a record has problems, we combine messages about problems and incomplete records.

![A banner is shown on a trainee record, warning the provider that the record has a problem and is incomplete.](5.trianee-problem-multiple.png)

### Filters on the draft trainees page

We’ve added a new ‘has problems’ filter to the draft records page.

![Draft list showing new filter for ‘has probem’](6.draft-list-filtered.png)

### Banner on draft trainee records

We do not show a banner to indicate that a draft record is incomplete. We instead have tags showing that each item in the task list is incomplete, in progress or completed.

A draft trainee page will now show a banner if there’s a problem.

![A banner is shown, warning that the draft is a duplicate](7.draft-problem-duplicate.png)

## Next steps

These designs could be used to highlight other types of problems, such as trainees with suspected incorrect dates or where there’s a data mismatch.

We’ll also consider:

* notifying providers when they have records with problems
* preventing a trainee being awarded qualified teacher status or early years teacher status if there’s a problem with their record
* creating a separate page which lists all records with problems and indicates what the problems are - this might also be useful for the support team
