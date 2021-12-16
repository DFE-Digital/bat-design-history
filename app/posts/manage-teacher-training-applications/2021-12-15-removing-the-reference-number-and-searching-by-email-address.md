---
title: Removing the reference number and searching by email address
description: As candidates no longer get a reference number for their application, we have removed it. Users can now search by email address instead.
date: 2021-12-09
screenshots:
  items:
    - text: Application list
      src: application-list.png
    - text: Application details
      src: application-details.png
---

When making an application, a candidate can choose up to 3 courses.

Once the candidate submits their application, each choice becomes a separate application that is sent to the provider.

Candidates used to be given a reference number for their main application. But the [reference number was removed](/apply-for-teacher-training/dashboard-changes/) because:

- very few candidates ever quoted it when contacting support
- the support team use the candidate’s name or email address and the course to find their application

For these reasons, we want to prototype:

- removing the reference number from the application list and details pages
- removing the ability to search by reference number
- adding the ability to search by email address

## Helping users find an application

If a candidate applies to more than one course at the same provider, searching by reference number, candidate name or email address will return multiple applications.

To select the right application, the user would need additional information like the course name. And they would have to ask the candidate for it.

We want to find out how much of a problem this is and if it would be better to let users search by a unique ID for the application.

## Finding out if providers need the reference number

Given that the reference number relates to multiple applications, we don’t think it’s useful to know. We want to find out to what extent providers are using the reference number.

For example, perhaps providers need to quote the reference number when contacting support.

## Helping users find an application without personally identifiable information

We want to consider the impact of sharing a candidate's personal details, like email address, when contacting support and whether this is GDPR compliant.

## Helping users find related applications

We want to consider whether it would be useful to give users the ability to see all related applications that belong to the same candidate.

## Finding out whether it’s okay to retain reference number just for student record systems

The API currently contains the reference number and vendors have been encouraged to use it.

While we do not think providers need the reference number in Manage, we want to make sure they are not confused about it continuing to appear in student record systems.
