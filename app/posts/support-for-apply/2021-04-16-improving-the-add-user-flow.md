---
title: Improving the add user flow
Description: Make it quicker and easier for DfE support users to add provider users to Manage
date: 2021-04-16
---
{% from "figure/macro.njk" import appFigure with context %}

We’ve been considering improvements to how we invite and set up higher education institutions (HEIs) and their school direct partners (SDs) in Manage.

We started by designing a [small online service that allowed HEIs to set themselves up and invite SDs](https://bat-design-history.netlify.app/manage-teacher-training-applications/self-service-registration/).

After testing that design we decided to explore a simpler approach, focusing on [gathering contact details for SDs from HEIs](https://bat-design-history.netlify.app/manage-teacher-training-applications/gathering-school-direct-contact-details-from-higher-education-institutions/).

The research suggested that the simpler approach would work. However since the transition team already gathers data from HEIs in an existing spreadsheet, we are not sure we’ll need to send a separate one.

The next step is to make improvements to the support service, so that contact details can be added easily regardless of how they’re gathered.

## Why we did this work

Adding users in support is currently slow and prone to errors because:

- it’s only possible to add one user at a time
- the service lists all providers every time a user is added - the list loads slowly and is difficult to navigate

## User data analysis

Looking at the data, we found that:

- 80% of users only need to be linked to one provider
- roughly half the users have all permissions, while the other half have a mixture of permissions

This data may change once we start to add more providers, particularly HEIs as they typically have a lot more users than other types of provider.

### Number of providers per user

- 80% of users are linked to 1 provider
- 14% of users are linked to 2 providers
- 6% of users are linked to 3 or more providers

This suggests that we should add a user to a provider, rather than adding providers to users.

### Number of users per provider

- 20% of providers have 1 user
- 36% of providers have 2 users
- 24% of providers have 3 users
- 8% of providers have 4 users
- 12% of providers have more than 4 users

This suggests that the priority should be to focus on improving the add single user flow. The advantages of being able to add multiple users are not so great when only adding a small number.

### Number of users per provider type

- Average number of users in an HEI: 6
- Average number of users in a SCITT: 3
- Average number of users in a SD: 2

This suggests that the main use for adding multiple users will be when setting up HEIs. There are only 87 HEIs and some are already using Manage.

### Permissions

There are 5 permissions in the Manage service:

- manage organisational permissions
- manage users
- make decisions and set up interviews
- view safeguarding information
- view diversity information

We found that:

- 52% of users have all permissions
- 48% of users have a range of permissions

This suggests that in the add multiple users flow we should show permission choices per user, rather than apply a single set of permissions to all users.

## What we changed and why

Currently, clicking on ‘add provider user’ takes the DfE support user out of the provider section of the support service. This means that they have to choose which provider they want to add the user to.

We moved the function of adding a user to within the provider section. The user will be added to the provider which has already been selected.

We also created a way to add multiple users.

If there’s already a user with the same email address as the user being added, the existing user will be added to the selected provider. This applies in both the single and multiple user flows.

### Adding a single user

We simplified the add user form, removing the need to choose a provider. The form now only includes:

- first name
- last name
- email address
- permissions

We did not add anything which was not already in the form. For example, we do not ask for:

- DfE unique identifier
- notification settings

We provided a way to save and add another user, so that DfE support users can quickly add more than one user to a provider.

An email will be sent to the new user as soon as they are added. This will be the same email which is currently sent to new users.

### Adding multiple users

We introduced a way for DfE support users to copy and paste information from a spreadsheet or CSV file into the service.

This allows DfE support users to quickly and easily enter new user information in bulk, using data they have previously collected from providers.

After data has been entered, we present a series of screens showing each user’s contact information and allowing DfE support users to set their permissions.

At the end of the flow, DfE support users can check their answers before saving the users. This will also trigger the sending of emails to the new users.

## How it works

{{ appFigure({
  image: {
    file: "adding-users-01.png",
    alt: "Provider’s user list page"
  },
  caption: "Figure 1: Provider’s user list page"
}) }}

We introduced the ‘add multiple users’ button as a secondary action alongside the main action of ‘add user’.

Clicking ‘add user’ takes the DfE support user to the add single user form.

Clicking ‘add multiple users’ takes the DfE support user to the add multiple users form.

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
  caption: "Figure 3: Add user and set permissions page"
}) }}

The DfE support user doesn’t need to choose which provider the user belongs to. They reached this page through the 2Schools consortium provider page, so the user will be added to that provider.

We introduced ‘Save user and add another’ to simplify the addition of multiple users. Clicking this button saves the user details and returns the DfE support user back to this page.

Adding permissions is optional. If none are added, the user will only be able to view applications.

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

User details can be copy and pasted into this form field from a CSV file or spreadsheet. The form field accepts comma-separated and tab-separated values.

The details of each user must be on a new line.

{{ appFigure({
  image: {
    file: "adding-multiple-users-02.png",
    alt: "Add user details and set their permissions page"
  },
  caption: "Figure 6: Add user details and set permissions page"
}) }}

For each user entered into the ‘add users’ form field, we show the add user page pre-filled with their first name, last name and email address.

If the user’s details are missing or the email address is incorrect, we display an error message.

Adding permissions is optional. If none are added, the user will only be able to view applications.

{{ appFigure({
  image: {
    file: "adding-multiple-users-03.png",
    alt: "Check details and add users page"
  },
  caption: "Figure 7: Check details and add users page"
}) }}

## Future considerations

We considered some changes which were not implemented. We could consider them for a future iteration.

### Uploading a CSV file

We could reduce the work for DfE support users further if we allowed them to upload a file, rather than copying and pasting the data.

There is not a strong need for this since:

- we will not be adding a very large numbers of users at one time
- the providers with the largest number of users are HEIs, and there’s only a small number of them
- once all providers have been added to Manage, the multiple user upload will not be used regularly

### Accepting permissions information within the copy and pasted data

We could extend the format of accepted data to include permissions, for example by entering “true” or “false” in a specified order.

We decided that this adds unnecessary complications. For example, we’d need to handle DfE support users entering “true” or “false” too few or too many times.

### Providing a way to see and manage all users in the service

We could provide a central place for DfE support users to manage users.

There is not a strong need for this since:

- the number of users and frequency of change is low
- providing two places to manage users is unnecessary
- over time provider users with sufficient permissions should become more comfortable with managing their own users

### Removing a user from the ‘add multiple user’ flow

In the new design, the DfE user cannot change their mind about how many users to add.

If they paste in the details of 10 users and later decide they only need to add 9, they will need to cancel and start again.

We could add the ability to remove a user from the list of those to be added, either on the ‘Add user details and set permissions’ page or on the check answers page.
