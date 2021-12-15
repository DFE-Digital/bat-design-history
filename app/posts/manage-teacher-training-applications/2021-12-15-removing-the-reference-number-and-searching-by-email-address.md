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

Once the candidate submits their application, each choice becomes an application that the provider receives.

Candidates used to be given a reference number for their main application. But the [reference number was removed](/apply-for-teacher-training/dashboard-changes/) because:

- very few candidates ever quoted it when contacting support
- the support team use the candidate’s email address to find their application

Additionally, if a candidate applies to more than one course at the same provider, searching by the reference number will result in multiple applications.

For these reasons, we want to try:

- removing the reference number from the application list and details pages
- removing the ability to search by reference number
- adding the ability to search by email address

Before making any changes to the live service, we want to find out if:

- providers need the reference number
- if it’s helpful to search by email address
- support users ever need the reference number
- it would be better to search for an application that lets them find a specific application

## Future considerations

### Helping users find a unique application in Manage

Searching by reference number and email address may bring back multiple applications. To pick the right one the user needs to know the course.

If we want to let users find an application without knowing the course then we’d need to let users find an application by something that identifies the individual application.

We want to understand the user needs around this further.

### Helping users find an application without personally identifiable information

We want to consider the impact of sharing a candidate's personal details, like email address, when contacting support and whether this is GDPR compliant.

### Helping users find related applications

We want to consider whether it would be useful to give users the ability to see all related applications that belong to the same candidate.

### Finding out whether it’s okay to retain reference number just for student record systems

The API currently contains the reference number and vendors have been encouraged to use it.

While we do not think providers need the reference number in Manage, we want to make sure they are not confused about it continuing to appear in student record systems.
