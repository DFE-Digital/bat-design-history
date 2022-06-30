---
title: Adding users to an organisation
description: Giving support users the ability to add users to an organisation
date: 2022-06-22
screenshots:
  items:
    - text: Users list
      src: users--list.png
    - text: Add user - personal details
      src: users--add-user.png
    - text: Add user - error messages
      src: users--add-user-error-messages.png
    - text: Add user - duplicate account error
      src: users--add-user-duplicate-account-error.png
    - text: Add user - check your answers
      src: users--add-user-check-your-answers.png
    - text: User added success message
      src: users--add-user-success.png
    - text: User details
      src: users--user-details.png
    - text: Remove user
      src: users--remove-user.png
    - text: User removed success message
      src: users--remove-user-success.png
---

Currently, providers cannot add users to their organisation, they can only request that a new user is added. This request needs to be approved by the support team.

As part of the approval process, a developer needs to link the user to the organisation.

We wanted to reduce the burden on the support team and developers by introducing a simple way of adding a user to an organisation.

This work builds upon the work we have done to [simplify how organisations manage their users](/publish-teacher-training-courses/simplifying-how-organisations-manage-users/).

## What we changed


## How it works

### List of users

On the user list page, we show:

- an ‘Add user’ button
- a list of users in alphabetical order - ordered by their first name, then last name

For each user in the list, we show:

- full name - including a link to the user details page
- email address

If the user list contains more than 50 users, we paginate the list.

When a user is added to the organisation or removed from the organisation, we show a success message above the page heading.

### User details

On the user details page, we show a summary list of the user’s details, including:

- first name
- last name
- email address
- organisations they belong to
- last sign in date and time

This page also includes a ‘Remove user’ link, which allows the support user to remove the user from the organisation.

#### Changing a user’s details

The first name, last name and email address fields can be changed, but the organisations they belong to and their last sign in date and time cannot be changed.
### Adding a user

Clicking ‘Add user’ takes the support user to the add user flow.

The personal details form includes:

- first name
- last name
- email address

We show an error message if the user:

- does not enter all the information in the form
- enters an incorrect email address - for example, they use invalid characters
- enters an email address already used by another user

Users can check their answers at the end of the flow before saving the new user.

Adding the user triggers sending an email to the new user with sign in details.

### Removing a user

We introduced the ability to remove a user from the organisation.

When someone clicks ‘Remove user’, they must confirm the removal.

Removing a user triggers the sending of an email to the user to tell them they have been removed from the organisation. If the provider did this incorrectly, the user could get help.

Users cannot remove themselves from the organisation.
