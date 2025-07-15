---
title: "Find candidates: application banners"
description: Helping providers to see when an application has come from an invited candidate 
date: 2025-07-15
tags:
  - find a candidate
  - tracking
eleventyComputed:
  eleventyNavigation:
    key: manage-teacher-training-find-a-candidate
---

## Background

We conducted a round of user research with 8 training providers between 9 and 13 June 2025.

They told us that they had no way of knowing if the applications they review in Manage have come from an invitation in Find candidates.  

This is a problem because:

* they don’t want to duplicate effort by inviting the same candidate more than once

* they sometimes ask at interview why someone has applied to them and would need to know that the invited them

* someone else in their organisation or a partner organisation may have invited them to another course and they wouldn’t want to compete

* they want to know how effective Find candidates is as a recruitment tool to know whether to invest time in it.

There is also a need to know if a candidate a provider are considering inviting has applied to them in the past. We [hide candidates who have been rejected by an organisation in the past](https://becoming-a-teacher.design-history.education.gov.uk/manage-teacher-training-applications/find-candidates-statuses/#rejected-candidates), but there are other statuses an application can be in that mean it wouldn’t be hidden from search results.  

## What have we done

We have implemented a new ‘invited’ status and tab view, which you can read about in [this design history](https://becoming-a-teacher.design-history.education.gov.uk/manage-teacher-training-applications/find-candidates-statuses/) which will show providers candidates that they have invited to apply.

However we also felt that there was a need for this to be indicated both in Manage on the application list view, and on individual applications.

### In Find candidates

When a provider clicks through to a candidate’s profile and they have already invited them to a course, they will see this banner:

![banner showing that a candidate has been invited to a single course](banner1.png)

The banner will include the provider name as well if the user has access to more than one provider profile.

When a candidate has been invited to multiple courses at the same organisation the banner will stack them in order of newest to oldest:

![banner showing that a candidate has been invited to multiple courses](banner2.png)

If the candidate has submitted an application to a course that they have been invited to, there will be a link to view the application:

![banner showing that a candidate has applied to a course](banner3.png)

If a provider tries to view the profile of a candidate who they have invited to apply, but who has since dropped out of the pool, they will see this message:

![page explainign why a candidate's details are no longer visible](candidate unavailable.png)

Although they cannot see the candidate’s profile information anymore, the candidate could still submit an application to them. They would see confirmation that they are an invited candidate in Manage.

### In Manage

When a provider is viewing an application from someone who has been invited to apply through Find candidates they will see this banner:

![banner in manage showing that a candidate has been invited to the course](banner4.png)

The banner will include the name of the person who invited them.

We also introduced a filter in Manage so that providers can see only applications from candidates that have been invited to apply:

![filter for providers to see only invited candidates](filter in manage.png)

This could help providers to prioritise the applications that they have already reviewed as part of Find candidates and speed up the recruitment process.  

## What’s next

We will monitor use of this feature and feedback from providers to understand whether it’s solving the problems that came up in UR.  
