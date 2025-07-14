---
title: Find candidates statuses
description: Helping providers to keep track of who they have viewed and invited in Find candidates
date: 2025-07-02
tags:
  - find a candidate
  - statuses
  - tracking
eleventyComputed:
  eleventyNavigation:
    key: manage-teacher-training-find-a-candidate
---
## Background

We conducted a round of user research with 8 training providers between 9 and 13 June 2025.

One of the biggest pain points that they raised with Find candidates is that they are unable to keep track of who they have viewed and who they have invited to apply to courses.

Some of them are keeping a record in spreadsheets or other offline systems, but this was flagged as both time-consuming, inefficient and unsafe from a data protection point of view.

> "But again, there should be a digital system here. There should be a digital way of tracking them. I'm logged in, so there should be a way of me saying, I've read this person."

> “If I've got 80 candidates that I've invited (it's hard) to remember who I've invited. So that makes me hesitant to use it because I don't want to invite a candidate several times”

## What we did

We had prototyped a statuses idea to share with training providers at the end of each research session to collect their feedback.

![screenshot of prototyped all candidates tab](prototyped-all-tab.jpg)
![screenshot of prototyped new candidates tab](prototyped-new-tab.jpg)
![screenshot of prototyped invited candidates tab](prototyped-invited-tab.jpg)

The new design included status tags for:

- 'new' candidates which would apply to any candidate profile that an individual provider user had not viewed yet.

- 'viewed' candidates which would apply to any candidate profile that an individual provider user had viewed

- 'rejected' candidates who have previously been rejected by your organisation

- 'invited' candidates who you have invited to apply to courses at your organisation.

These tags would all be shown on the main Find candidates search results page. We also designed two other tabs to view only new and only invited candidates.

Most participants were very positive about the changes we were proposing and said it would really support them in their use of Find candidates:

> “Having a way to know which I've viewed is exactly what I want to see”

> “Would make my life much easier because I no longer need a paper copy”

## Changes post-testing

### Rejected candidates

We found that the rejected tag wasn’t well understood by participants. They were unclear whether it meant that the candidate had been rejected by them or any other training provider. We experimented with changing the tag to previously rejected but there was still some ambiguity.

We were showing candidates in the list even when they had been rejected by that provider in the past, because we had an assumption that providers might want to reengage candidates who have acted on any feedback they had received at a past rejection.

However, most participants told us that they would not want to see candidates in the list that they have rejected from their courses in the past.

> “One of my concerns with that is these could be applicants that we've already rejected. I don't wish to ask them to reapply. We rejected them for a reason and it really is a concern from a professional and, you know, reputation that if we rejected them, it doesn't really make sense for us to be reinviting them”

Our data shows that some providers have invited candidates to apply for courses that they have previously been rejected from.

If they were looking to reengage with a previously rejected candidate, they would have an existing relationship with them and encourage a reapplication directly by emailing, or asking them to get back in touch with them.

We made the decision to hide candidates that an organisation have previously rejected an application from from the search results in Find candidates. If a Manage user has access to multiple provider organisations we will only hide candidates rejected from all the organisations they access. If a candidate in the list is only rejected from one organisation we plan to show this detail in the candidate profile page in the previous applications section.

### Invited tab

The statuses on the invited tab include Invited and Application received. When an application has been received, there is a link through to the application. The candidate’s name is also revealed once they submit an application. There are filters on this tab to allow users to see only specific subjects or statuses, so they could see everyone they’ve invited to a biology course, or everyone who has applied.

![screenshot of the invited tab](invited-tab.jpg)

### Statuses per user or per organisation?

The insights from research were inconclusive when it came to whether the statuses should apply individually per user, or across an organisation. The participants were split fairly evenly on their preference, there was no commonality depending on the provider type either.

> "This status should reflect internal decisions and ideally be visible to colleagues to avoid duplication of effort."

> “I think it would need to be as an individual. As a user, as opposed to that somebody in your organisation has made that decision. Because otherwise it would become quite unmanageable with six people looking at it.”

We took the decision to make the ‘viewed’ and ‘new’ statuses apply to the individual user for now. We think that this will have some value for all users, whilst balancing technical effort to implement. ‘Invited’ and ‘application received’ statuses are visible to all users in the same organisation.

We will need more insight about organisational requirements before designing and building a workflow for this user need.
