---
title: Improving the add user flow
Description:
date: 2021-04-16
---

{% from "figure/macro.njk" import appFigure with context %}

We’ve been looking at ways to improve the invitation and set up process for higher education institutions (HEIs) and their school direct partners (SDs) in Manage.

We started by designing a [small online service that allowed HEIs to set themselves up and invite SDs](https://bat-design-history.netlify.app/manage-teacher-training-applications/self-service-registration/).

After testing that design we decided to explore a simpler approach, focusing on [gathering contact details for SDs from HEIs](https://bat-design-history.netlify.app/manage-teacher-training-applications/gathering-school-direct-contact-details-from-higher-education-institutions/).

## User data analysis

### Number of providers per user

80% of users are linked to 1 provider
14% of users are linked to 2 providers
6% of users have more than 2 providers



### Number of users per provider

20% of providers have 1 user
36% of providers have 2 users
24% of providers have 3 users
8% of providers have 4 users
12% of providers have more than 4 users



### Permissions

52% of users have all permissions and the remaining 48% have a variety of permissions.



## What we changed and why

### Adding a single user


### Adding multiple users


## How it works

{{ appFigure({
  image: {
    file: "adding-users-01.png",
    alt: "Provider’s user list page"
  },
  caption: "Figure 1: Provider’s user list page"
}) }}

### Adding a single user

{{ appFigure({
  image: {
    file: "adding-single-user-flow.png",
    alt: "Adding a single user to a provider"
  },
  caption: "Figure 2: Adding a single user to a provider"
}) }}

{{ appFigure({
  image: {
    file: "adding-single-user-01.png",
    alt: "Add user and set their permissions page"
  },
  caption: "Figure 3: Add user and set their permissions page"
}) }}

### Adding multiple users

{{ appFigure({
  image: {
    file: "adding-multiple-users-flow.png",
    alt: "Adding multiple users to a provider"
  },
  caption: "Figure 4: Adding multiple users to a provider"
}) }}


{{ appFigure({
  image: {
    file: "adding-multiple-users-01.png",
    alt: "Adding multiple users page"
  },
  caption: "Figure 5: Adding multiple users page"
}) }}

{{ appFigure({
  image: {
    file: "adding-multiple-users-02.png",
    alt: "Add user details and set their permissions page"
  },
  caption: "Figure 6: Add user details and set their permissions page"
}) }}

{{ appFigure({
  image: {
    file: "adding-multiple-users-03.png",
    alt: "Check details and add users page"
  },
  caption: "Figure 7: Check details and add users page"
}) }}

## Other considerations

We considered some changes which were not implemented.

- Adding permissions data to the copy-pasted CSV data
- Uploading a CSV file
- Adding users at the top level
