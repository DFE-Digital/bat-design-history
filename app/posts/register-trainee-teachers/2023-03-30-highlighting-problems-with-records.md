---
title: Highlighting problems with trainee records
description: A new feature to help providers fix their own data
date: 2023-03-30
---

As the number of records in Register grows we continue to discover problems with trainee data.

We’ve designed a new feature to help highlight these problems. This will make it easier for users to find problems and then fix them.

## Why we’re doing this

The number of trainee records held by Register increases by about 40,000 each academic year. We try to identify problems when records are added or imported, but some records will have data issues that we cannot identify.

We also inherited many records from the database of trainee teachers and providers (DTTP), the service which Register has replaced. Those records are more likely to have problems.

When providers contact us about problems with trainee records, they can require a lot of work for the support team to investigate and resolve. Sometimes the support team cannot make corrections themselves and must ask a developer to make the change.

Our analysts also often identify issues with trainee data. At the moment we either need to fix the problems ourselves or contact providers to ask them to do it.

In many cases providers are better placed than us to know what to do but it can be hard for them to spot problems. For example, when we asked providers to sign off their trainee data for the previous year many of them noticed problems they had not seen before.

It was good that this process allowed users to spot mistakes but we’d like to help them to do so sooner. We’d also like to give them enough information to fix their own problems wherever possible.

## Where problems come from

We aim to have good validation to ensure we collect good data. This seems to be working, as errors in trainee data are down by 10 times. However, records imported from the Higher Education Statistics Agency (HESA) cannot be validated in the same way.

We’ve found that many problems with trainee records are caused by:

* different DfE systems having different data that can conflict or be out of sync
* data that passes validation but is likely to be incorrect, such as a course start date far in the future
* misunderstandings about how HESA works, leading to the wrong statuses being submitted
* duplicate records
* poor quality data imported from DTTP
* details not being updated correctly when trainees change or leave courses

## Problems we’ll highlight

We started by identifying different trainee data problems which we’ve seen or which colleagues in analysis or funding teams commonly check for.

From this list, we picked 2 problems which are different in type and both quite common. They are:

* duplicate records
* records which may have been forgotten

### Duplicate records

Sometimes we suspect that 2 or more records both refer to the same trainee. This can happen for both SCITT and HEI users but for different reasons. For SCITTs it can happen when a provider has manually registered a trainee, and then later marks that trainee’s application as met conditions - our Apply import will make a draft.

When we find a duplicate, we currently need to contact the provider. We ask them to confirm the records are duplicates and ask which record should be kept.

### Records which have been forgotten

We believe that a number of trainee records in Register have been forgotten. Some possible reasons are that a trainee:

* never started their course and was registered by accident
* deferred and then withdrew from their course
* started and then withdrew from their course

There may be a duplicate record showing that the trainee withdrew or was awarded teaching status.

The design of DTTP made it easy to lose track of records. Providers might not have spotted a trainee unless they actively looked for them. As a result, many forgotten records were imported from DTTP.

Register does a better job of highlighting these trainees and several providers have contacted us to clean up old forgotten records. However we know that more remain and we expect that the problem will continue to occur.

We’re currently planning on identifying forgotten records by searching for trainees who:

* have deferred and have an estimated end date of more than 2 years ago
* have not deferred and have an estimated end date of more than a year ago

Some of these trainees will still be on courses. This is fine but we’ll ask providers to update their estimated end dates.

## How it works

### Home page card

![A new red card is added to the homepage that says ‘44 trainees with problems’.](1.homepage-tiles.png)

We added a card to the home page, which appears if at least one trainee has a problem. It shows the number of trainees who have problems.

If a user clicks on the card, they’re taken to the registered trainees page with a filter applied so that they see only trainees with problems.


### Updated filters on registered trainees page

![Records on the trainees list have a new tag ‘problem’](2.trainees-list-filtered.png)

We previously let users filter by whether a record was complete or incomplete. We don’t know of a good reason why users would need to see only complete trainee records, so we’ve changed this to show either ‘incomplete’ or ‘has problems’.

We’ve called the filter section ‘available to do’. This is because both ‘records you can complete’ and ‘trainees with problems’ appear as cards in the ‘available to do’ section of the home page.

### Banner for registered trainee records

Registered trainee records already have a banner when they are incomplete. 

Rather than adding another banner when there are problems on a record, we’ll combine messages about problems and incomplete records. The content will be dynamic depending on whether the banner includes one thing or multiple things.

We’ve also updated the banner to use the GOV.UK notification banner component.

#### Forgotten records

![A banner is shown, warning the provider the trainee is forgotten](3.trainee-problem-forgotten.png)

#### Duplicates

![A banner is shown, warning the provider hte trainee is a duplicate](4.trainee-problem-duplicate.png)


#### Combining multiple things in one banner

![A banner is shown that has items: a problem and a warning that the record is incomplete](5.trianee-problem-multiple.png)

### Updated filters on draft records page

![Draft list showing new filter for ‘has probem’](6.draft-list-filtered.png)

We’ve added a new ‘has problems’ filter to the draft records page.

### Banner for draft trainee pages

![A banner is shown, warning that the draft is a duplicate](7.draft-problem-duplicate.png)

We do not show a banner to indicate that a draft record is incomplete. We instead have tags showing that each item in the task list is incomplete, in progress or completed.

A draft trainee page will now show a banner if there’s a problem.

## Next steps

These designs could be used to highlight other types of problems, such as trainees with suspected incorrect dates or where there’s a data mismatch.

We’ll also consider:

* notifying providers when they have records with problems
* preventing a trainee being awarded qualified teacher status or early years teacher status if there’s a problem with their record
* creating a separate page which lists all records with problems and indicates what the problems are - this might also be useful for the support team
