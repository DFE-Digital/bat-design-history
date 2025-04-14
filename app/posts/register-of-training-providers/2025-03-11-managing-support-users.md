---
title: Managing support users
description: We added a way for Support users to add other DfE users to the service
date: 2025-03-11
tags:
  - users
related:
  items:
    - text: Why we will not reinstate deleted user accounts
      href: /register-of-training-providers/why-we-will-not-reinstate-deleted-user-accounts/
    - text: Managing support users in Claim funding for mentor training
      href: /claim-funding-for-mentors/managing-support-users/
    - text: Managing support users in Manage school placements
      href: /manage-school-placements/managing-support-users/
    - text: Managing organisation users in Support for Claim funding for mentor training
      href: /claim-funding-for-mentors/managing-organisation-users-in-support/
    - text: Managing organisation users in Support for Manage school placements
      href: /manage-school-placements/managing-organisation-users-in-support/
    - text: Adding users to an organisation in Support for Publish teacher training courses
      href: /support-for-publish/adding-users-to-an-organisation/
    - text: Simplifying how organisations manage their users in Publish teacher training courses
      href: /publish-teacher-training-courses/simplifying-how-organisations-manage-users/
screenshots:
  items:
    - text: List of support users
      src: support-users-list.png
    - text: Add support user - question page
      src: add-support-user--form.png
    - text: Add support user - question page with error
      src: add-support-user--form-error.png
    - text: Add support user - question page with email error
      src: add-support-user--form-error-email-domain.png
    - text: Add support user - question page with email in use error
      src: add-support-user--form-error-email-in-use.png
    - text: Add support user - check your answers
      src: add-support-user--check-your-answers.png
    - text: Support user added success message
      src: add-support-user--success.png
    - text: Support user details page
      src: support-user-details.png
    - text: Edit support user - question page
      src: edit-support-user--form.png
    - text: Edit support user - question page with error
      src: edit-support-user--form-error.png
    - text: Edit support user - question page with email error
      src: edit-support-user--form-error-email-domain.png
    - text: Edit support user - question page with email in use error
      src: edit-support-user--form-error-email-in-use.png
    - text: Edit support user - check your answers
      src: edit-support-user--check-your-answers.png
    - text: Support user added success message
      src: edit-support-user--success.png
    - text: Confirm deletion of support user
      src: delete-support-user--confirm.png
    - text: Support user deleted success message
      src: delete-support-user--success.png
eleventyComputed:
  eleventyNavigation:
    key: register-training-providers-managing-support-users
---

We added a way for the support team to manage access to the Register of training providers.

## How it works

### Support users list

On the support user list page, we show:

- an ‘Add user’ button
- a list of support users in alphabetical order - ordered by their first name, then last name

For each user in the list, we show:

- full name - including a link to the user details page
- email address

We paginate the list if the user list contains more than 25 users.

When a user is added to or removed from Support, we show a success message above the page heading.

### User details

On the user details page, we show a summary list of the user’s details, including:

- first name
- last name
- email address

This page also includes a ‘Delete user’ link, which allows the support team to remove the user from Support.

The support team can change the first name, last name and email address.

### Adding a user

Selecting ‘Add user’ starts the ‘Add user’ flow.

The personal details form includes:

- first name
- last name
- email address

We show an error message if:

- information is missing from the form
- the email address is entered incorrectly - for example, invalid characters are used or it is not a Department for Education (DfE) email address
- an email address already used by another user

The support team user can check their answers at the end of the flow before saving the new user.

Adding the user triggers an email with sign-in details for the new user.

### Editing a user

Support users can edit the user’s details.

Selecting ‘Change’ next to the first name, last name, or email address takes the support user to a form where they can change the user’s details.

We show an error message if:

- information is missing from the form
- the email address is entered incorrectly - for example, invalid characters are used or it is not a Department for Education (DfE) email address
- an email address already used by another user

The support team user can check their answers at the end of the flow before saving the user.

If the support user changes the user’s email address, we email the new one with sign-in details.

Once the user has signed in to the service for the first time, the support user cannot change the user’s first name, last name and email address. This is because the user account is tied to their DfE Sign-in account.

### Deleting a user

When someone clicks ‘Delete user’, they must confirm the deletion.

Deleting a user triggers sending an email to the user to tell them that someone removed them from Support. If the support user did this incorrectly, the user could get help.

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

## Further considerations

Support users can only sign in to the service with a DfE Sign-in account.

The email address entered must match the one used in the invitation. We use the email address to link the service to the user.

If the email address does not match, the user:

- may not be able to sign in to the service
- may be able to sign in to the service but not see the support part of the service

We need to consider how we communicate this in our email notifications.
