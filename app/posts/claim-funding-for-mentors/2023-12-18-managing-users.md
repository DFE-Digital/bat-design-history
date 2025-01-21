---
title: Managing users
description: We added a way for school users to manage other users in their organisation
date: 2023-12-18T12:02:00+00:00
tags:
  - users
related:
  items:
    - text: Managing organisation users in Support
      href: /claim-funding-for-mentors/managing-organisation-users-in-support/
    - text: Switching between organisations
      href: /claim-funding-for-mentors/switching-between-organisations/
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

We added a way for school users to manage users belonging to their organisation.

This functionality allows organisations to self-manage without intervention from DfE.

## How it works

### User list

On the user list page, we show:

- an ‘Add user’ button
- a list of users in alphabetical order - ordered by their first name, then last name

For each user in the list, we show:

- full name - including a link to the user details page
- email address

We paginate the list if the user list contains more than 25 users.

When a user is added to or removed, we show a success message above the page heading.

### User details

On the user details page, we show a summary list of the user’s details, including:

- first name
- last name
- email address

This page also includes a ‘Remove user’ link, which allows the support team to remove the user from the organisation.

Organisation users cannot change a user’s first name, last name, or email address, as this information will be derived from the new user’s DfE Sign-in once the new user accepts the invite.

### Adding a user

Selecting ‘Add user’ starts the add user flow.

The personal details form includes:

- first name
- last name
- email address

We show an error message if:

- information is missing from the form
- the email address is entered incorrectly - for example, invalid characters are used
- an email address already used by another user

Users can check their answers at the end of the flow before saving the new user.

Adding the user triggers an email with sign-in details for the new user.

### Removing a user

When someone clicks ‘Remove user’, they must confirm the removal.

Removing a user triggers sending an email to the user to tell them that someone removed them from the organisation. If the user did this incorrectly, the user could get help.

### Editing a user

We do not allow editing a user. This restriction is because:

- when the user accepts the invite to the service, their details are linked to their DfE Sign-in
- it is easy to remove the user and add a new one if the original details are incorrect

### Data validation rules

#### First name

A first name is required. If the user does not enter a first name, we show the error message:

> Enter a first name

#### Last name

A last name is required. If the user does not enter a last name, we show the error message:

> Enter a last name

#### Email address

An email address is required. If the user does not enter an email address, we show the error message:

> Enter an email address

The email address must be valid. If the user does not enter a valid email address, we show the error:

> Enter an email address in the correct format, like <name@example.com>

The email address must be unique to the organisation. If the user enters an email address that is already in use by another user, we show the error:

> Email address already in use
