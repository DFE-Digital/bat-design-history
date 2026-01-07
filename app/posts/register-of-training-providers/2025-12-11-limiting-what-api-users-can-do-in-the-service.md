---
title: Limiting what API users can do in the service
description: We added a way for the support team to manage access to the service for API users
date: 2025-12-11
tags:
  - users
  - api
related:
  items:
    - text: Managing support users
      href: /register-of-training-providers/managing-support-users/
    - text: Service error pages
      href: /register-of-training-providers/service-error-pages/
    - text: Updating the ‘Your account’ and ‘Support user’ pages
      href: /register-of-training-providers/updating-the-your-account-and-support-user-pages/
    - text: Adding service navigation to the service error pages
      href: /register-of-training-providers/adding-service-navigation-to-the-service-error-pages/
screenshots:
  items:
    - text: List of users
      src: users-list.png
    - text: Add user - form
      src: add-user--form.png
    - text: Add user - form with errors
      src: add-user--form-error.png
    - text: Add user - check your answers
      src: add-user--check-your-answers.png
    - text: Add user - success
      src: add-user--success.png
    - text: User details
      src: user-details.png
    - text: Edit user - form
      src: edit-user--form.png
    - text: Edit user - check your answers
      src: edit-user--check-your-answers.png
    - text: Edit user - success
      src: edit-user--success.png
---

We added a way for the support team to limit access to the service for API users.

## What we changed

We have:

- renamed the section from “Support users” to “Users”
- added a question – “Is the account an API user” –  to distinguish API users from support users
- added status tags to the users list

We made these changes to support the introduction of the API and API clients. We do not want API-only users to have access to all service features.

We also restrict who can create API clients to DfE users only. We may change this policy in the future to allow third-party users to access training provider data.

## How it works

### Users list

On the user list page, we show:

- an ‘Add user’ button
- a list of users in alphabetical order - ordered by their first name, then last name

For each user in the list, we show:

- full name - including a link to the user details page
- email address
- status

We paginate the list if the user list contains more than 25 users.

When a user is added to or removed from the service, we show a success message above the page heading.

### User details

On the user details page, we show a summary list of the user’s details, including:

- first name
- last name
- email address
- is the account an API user?
- is the account active?

This page also includes a ‘Delete user’ link, which allows the support team to remove the user from the service.

Support users can change all user details if the user has not signed in previously. Otherwise, they can only change whether the user is API-only or whether the account is active.

### Adding a user

Selecting ‘Add user’ starts the ‘Add user’ flow.

The personal details form includes:

- first name
- last name
- email address
- is the account an API user?

We show an error message if:

- information is missing from the form
- the email address is entered incorrectly - for example, invalid characters are used, or it is not a Department for Education (DfE) email address
- an email address already used by another user

The support user can check their answers at the end of the flow before saving the new user.

Adding the user triggers an email with sign-in details for the new user.

### Editing a user

Support users can edit the user’s details.

Selecting ‘Change’ next to any user’s details takes the support user to a form to update the user’s details.

We show an error message if:

- information is missing from the form
- the email address is entered incorrectly - for example, invalid characters are used, or it is not a Department for Education (DfE) email address
- an email address already used by another user

The support team user can check their answers at the end of the flow before saving the user.

If the support user changes the user’s email address, we email the new one with sign-in details.

Once the user has signed in to the service for the first time, the support user cannot change the user’s first name, last name or email address. This is because the user account is tied to their DfE Sign-in account.

### Deleting a user

When someone clicks ‘Delete user’, they must confirm the deletion.

Deleting a user triggers an email to the user notifying them that they have been removed from the service. If the support user did this incorrectly, the user could get help.

The confirmation page warns that deleting a user cannot be undone.

### Data validation rules

#### First name

A first name is required. If the support user does not enter a first name, we show the error message:

> Enter first name

#### Last name

A last name is required. If the support user does not enter a last name, we show the error message:

> Enter last name

#### Email address

An email address is required. If the support user does not enter an email address, we show the error message:

> Enter email address

The email address must be a valid DfE email address. If the user does not enter a valid email address, we show the error:

> Enter a Department for Education email address in the correct format, like <name@education.gov.uk>

The email address must be unique to the organisation. If the support user enters an email address that is already in use by another user, we show the error:

> Email address already in use

#### Is the account an API user?

Selecting whether the account is an API user is required. If the support user does not answer, we show:

> Select if the account is an API user

#### Is the account active?

Selecting whether the account is active is required. If the support user does not answer, we show:

> Select if the account is active

*[API]: application programming interface
