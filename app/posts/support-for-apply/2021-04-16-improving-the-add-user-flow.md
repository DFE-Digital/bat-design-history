---
title: Improving the add user flow
Description: Make it quicker and easier for DfE support users to add provider users to Manage
date: 2021-04-16
---
{% from "figure/macro.njk" import appFigure with context %}

We’ve been looking at ways to improve the invitation and set up a process for higher education institutions (HEIs) and their school direct partners (SDs) in Manage.

We started by designing a [small online service that allowed HEIs to set themselves up and invite SDs](https://bat-design-history.netlify.app/manage-teacher-training-applications/self-service-registration/).

After testing that design we decided to explore a simpler approach, focusing on [gathering contact details for SDs from HEIs](https://bat-design-history.netlify.app/manage-teacher-training-applications/gathering-school-direct-contact-details-from-higher-education-institutions/).

The research suggested that the simpler approach would work. However since the transition team already gathers data from HEIs in an existing spreadsheet, we are not sure we’ll need to send a separate one.

The next step was to make improvements to the support service so that contact details can be easily added regardless of how they are gathered.

## Why we did this work

Adding users in support is slow and prone to errors because:

- the service lists all providers every time a user is added - this list is slow to load and difficult to navigate
- it’s only possible to add one user at a time

## User data analysis

Looking at the data, we found that:

- 80% of users only need to be linked to one provider
- roughly half the users have all permissions, while the other half have a mixture of permissions

This data may change once we start to add more providers, particularly higher education institutions (HEIs) that typically have a lot more users than other types of provider. There are, however, only 87 HEIs and some are already using the service.

### Number of providers per user

80% of users are linked to 1 provider
14% of users are linked to 2 providers
6% of users have more than 2 providers

This suggests that we should add a user to a provider, rather than adding providers to users.

### Number of users per provider

20% of providers have 1 user
36% of providers have 2 users
24% of providers have 3 users
8% of providers have 4 users
12% of providers have more than 4 users

This suggests that the priority should be to focus on improving the add single user flow.

### Number of users per provider type

Average number of users in an HEI: 6
Average number of users in a SCITT: 3
Average number of users in a SD: 2

This suggests that the main use for adding multiple users will be when setting up HEIs. There are far fewer HEIs than SCITTS or SDs.

### Permissions

There are 5 permissions in the Manage service:

- manage organisational permissions
- manage users
- make decisions and set up interviews
- view safeguarding information
- view diversity information

52% of users have all permissions
48% of users have a range of permissions

This suggests that we should show permission choices per user, rather than apply a single set of permissions to all users in the add multiple users flow.

## What we changed and why

We moved adding a user to within the providers’ section, removing the need to choose a provider in the add user flow.

We also created a way to add multiple users.

### Adding a single user

We simplified the add user form, removing the need to choose a provider. The form now only includes:

- first name
- last name
- email address
- permissions

We did not add anything which was not already in the form. For example, we do not ask for:

- DfE unique identifier
- notification settings

We provided a way to save and add another user so that DfE support users can quickly add more than one user to a provider.

### Adding multiple users

We introduced a way for DfE support users to copy and paste information from a spreadsheet or CSV file into the service.

This allows DfE support users to quickly and easily enter new user information in bulk using data they have previously collected from providers.

After data has been entered, we present a series of screens showing each user’s contact information and allowing DfE support users to set their permissions.

At the end of the flow, DfE support users can check their answers before saving the users.

As in the previous add user flow, this will trigger the sending of emails to the new users.

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
  caption: "Figure 2: Adding a single user to a provider flow"
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
  caption: "Figure 4: Adding multiple users to a provider flow"
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

### Uploading a CSV file

We could reduce the work for DfE support users further if we allowed them to upload a file, rather than copying and pasting the data.

There is not a strong need for this since:

- we will not be adding very large numbers of users
- the providers with the largest number of users are HEIs, and there’s only a small number of them
- once all providers have been added to Manage, the multiple user upload will not be used regularly

### Accepting permissions information within the copy and pasted CSV data.

We could extend the format of accepted data to include permissions, for example by entering “true” or “false” in a specified order.

We decided that this adds unnecessary complications. For example, we’d have to handle DfE support users entering “true” or “false” too few or too many times.

### Providing a way to see and manage all users in the service

We could provide a central place for DfE support users to manage users.

There is not a strong need for this since:

- over time the need for the users section should diminish as more users are onboarded and the provider admins become comfortable with managing their own users in Manage
- the number of users and frequency of change is low
- providing two places to manage users is unnecessary
