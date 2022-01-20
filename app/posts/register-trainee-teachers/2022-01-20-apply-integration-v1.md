---
title: Apply integration - version 1
description: Exploring how we’ll import records from Apply
date: 2022-01-20
related:
  items:
    - text: Investigating free text responses from Apply
      href: /register-trainee-teachers/investigating-free-text-responses-from-apply/
---

This post looks at our first design iteration of our Apply integration — where we’ll automatically import applications from our companion service, DfE Apply for teacher training service (Apply).

Previously, all records in Register needed to be added manually. When a candidate applies via Apply, the DfE gets most of the same data as requested by Register. We want to avoid providers needing to tell us details we already know (in many cases retyping by hand or copying and pasting from their internal spreadsheets and candidate applications).

Our Apply integration launched some months ago, but this looks at the first design iteration. In a followup post we’ll explore the changes we made as a result of research ahead of launch.

## Could we automate registering trainees via Apply?

We can not fully automate registering trainees as the data we get from Apply is not the complete data set Register needs. This is for 2 main reasons:

1. It tells us about the course the trainee applied to, not what they start

We’ve heard that sometimes providers may need to change or update course details.

2. It’s incomplete — some information needs to come from the provider

In the data from Apply we get details about the course they applied to and, their personal details and education, but only the provider knows:

* schools the trainee might be working at
* placement details
* finance information — bursaries and initiatives
* details specific to each trainee — the provider’s ID for the trainee and trainee’s start date
* specifics of course being studied. Publish tells us some information, but not options chosen by the trainee

## Could we use our existing pages?

If we built nothing new, a record imported from Apply might look like the below screenshot — with most sections starting off as ‘in progress’ as there’s already some data:

![What our task list might look like with no changes.](1-task-list-view-with-no-changes.png)

We do not think this is terrible, but it doesn’t give any context to our user: Why do the sections start in progress? What does our user need to do next?

We want our users to confirm the data submitted by the trainee in their application, check the course details and amend if necessary, then fill in the missing sections. This would not be clear with our existing draft page.

We expect that most records will not need changes,requiring our providers to confirm 4 separate sections is burdensome.

## A new task list page for records imported from Apply

For drafts imported from Apply, we’re going to grouping several sections together and set the status to `review` - to match the action we want our providers to do. This is similar to some work done by the DfE Apply service on their candidate dashboard.

![Revised task list with review sections](2-task-list-with-new-review-sections.png)

When visiting the new ‘Review the trainee’s details’ section, we group together all the data the trainee provided.

![A summary page for the trainee’s application](3-trainee-application-summary-page.png)

The confirm checkbox now asks the provider to confirm they’ve reviewed the application, instead of telling us the section is complete.

Draft apply records are shown with other drafts in the records list, but with a modified status `Apply draft` to distinguish them from regular drafts.

## Telling providers when records have been imported

Automatically importing records from Apply will be quite a process change for providers — how will they know we’ve done this? Would records appearing as drafts be enough?

One thing we’re trying is a new section on the home page to highlight new records that have been imported.

## What we found in user research

Overall, the testing went well — providers understood the concept of drafts being brought over from Apply (in fact they expected it), and that they need to check the records.

The `review` label worked especially well — providers seemed clear what we were asking of them, and talked to us about the different reasons they might want to make changes.

We learned that there may be more needs around changing courses or course details than we originally expected. A common example was that a trainee might have applied for a School direct salaried course, but after accepting an unconditional offer had moved over to a School direct fee funded course. Our service supports changing the course, but for records imported from Apply it seems like it will be a more common need than we first expected.

### Things that did not work so well

#### Status tag

The status tag of `Apply draft` was not well understood. Our users came up with several interesting interpretations of what it might mean — only sometimes guessing that it meant the draft originated in the Apply service.

#### Status of the applications

Multiple participants expressed concern that we might import all applications made through Apply, rather than just those that had been offered places and met all their conditions.

We will only import applications of trainees that have met all conditions (the same as what providers want), but this was not clear to them from the interface. 

#### Issues with nested confirmation pages

After collecting several sections into a new one, there are some flows that mean you can see several confirmation pages that look nearly identical to the user. We have an idea for fixing this.
