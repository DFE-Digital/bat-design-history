---
title: Managing organisation users in Support
description: Giving the support team the ability to manage users belonging to an organisation
date: 2023-12-18T12:01:00+00:00
tags:
  - users
related:
  items:
    - text: Managing support users
      href: /manage-school-placements/managing-support-users/
    - text: Adding users to an organisation in Support for Publish teacher training courses
      href: /support-for-publish/adding-users-to-an-organisation/
    - text: Simplifying how organisations manage their users in Publish teacher training courses
      href: /publish-teacher-training-courses/simplifying-how-organisations-manage-users/
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
    - text: Edit user - personal details
      src: users--edit-user.png
    - text: Edit user - error messages
      src: users--edit-user-error-messages.png
    - text: Edit user - duplicate account error
      src: users--edit-user-duplicate-account-error.png
    - text: Edit user - check your answers
      src: users--edit-user-check-your-answers.png
    - text: Edit user - check your answers (new email)
      src: users--edit-user-check-your-answers-new-email.png
    - text: User updated success message
      src: users--edit-user-success.png
    - text: Remove user
      src: users--remove-user.png
    - text: User removed success message
      src: users--remove-user-success.png
eleventyComputed:
  eleventyNavigation:
    key: school-placements-support-managing-organisation-users
---

We added a way for support team users to manage users belonging to an organisation.

## How it works

### User list

On the user list page, we show:

- an ‘Add user’ button
- a list of users in alphabetical order - ordered by their first name, then last name

For each user in the list, we show:

- full name - including a link to the user details page
- email address

We paginate the list if the user list contains more than 25 users.

When a user is added to or removed from the organisation, we show a success message above the page heading.

### User details

On the user details page, we show a summary list of the user’s details, including:

- first name
- last name
- email address
- organisations they belong to
- last sign-in date and time

This page also includes a ‘Remove user’ link, which allows the support team to remove the user from the organisation.

The support team can change the first name, last name and email address. They cannot change the organisations a user belongs to, except by adding or removing the user from an organisation.

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

The support team user can check their answers at the end of the flow before saving the new user.

Adding the user triggers an email to the new user with sign-in details.

If the support team adds the same user to a different organisation, we link the user to the new organisation. We do not create a new user record.

### Editing a user

Support users can edit the details of the organisation user.

Selecting ‘Change’ next to the first name, last name, or email address takes the support user to a form where they can change the user’s details.

We show an error message if:

- information is missing from the form
- the email address is entered incorrectly - for example, invalid characters are used
- an email address already used by another user

The support team user can check their answers at the end of the flow before saving the new user.

If the support user changes the user’s email address, we email the new one with sign-in details.

Once the user has signed in to the service for the first time, the support user cannot change the user’s first name, last name and email address.

### Removing a user

When someone clicks ‘Remove user’, they must confirm the removal.

Removing a user triggers sending an email to the user to tell them they have been removed from the organisation. If the support user did this incorrectly, the user could get help.

### Data validation rules

#### First name

A first name is required. If the support user does not enter a first name, we show the error message:

> Enter a first name

#### Last name

A last name is required. If the support user does not enter a last name, we show the error message:

> Enter a last name

#### Email address

An email address is required. If the support user does not enter an email address, we show the error message:

> Enter an email address

The email address must be valid. If the support user does not enter a valid email address, we show the error:

> Enter an email address in the correct format, like <name@example.com>

The email address must be unique to the organisation. If the support user enters an email address that is already in use by another user, we show the error:

> Email address already in use

## Further considerations

We considered preventing free email accounts like AOL, Gmail, Hotmail, Outlook and Yahoo. We did not implement this change as we did not observe a user need.

### DfE Sign-in

Users can only sign in to the service with a DfE Sign-in account.

The email address entered must match the one used in the invitation. We use the email address to link the organisation to the user.

If the email address does not match, the user:

- may not be able to sign in to the service
- may be able to sign in to the service but not see the organisation’s part of the service

We need to consider how we communicate this in our email notifications.
