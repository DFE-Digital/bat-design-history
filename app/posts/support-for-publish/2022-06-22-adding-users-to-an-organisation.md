---
title: Adding users to an organisation
description: Giving the support team the ability to add users to an organisation
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

Currently, providers cannot add users to their organisation themselves. They must complete an invite form in Publish teacher training courses to request that a new user is added to their organisation.

The support team can approve the request if a user is invited via the form. However, if the support team need to add a user that has not been invited via the invite form, the development team needs to link the new user to the organisation.

We wanted to reduce the burden on the support team and developers by introducing a simple way for the support team to add a user to an organisation.

This work builds upon our work to [simplify how organisations manage their users](/publish-teacher-training-courses/simplifying-how-organisations-manage-users/).

## What we changed

We added a two step process to enable the support team to add users to an organisation.

We moved the ‘Remove user’ button next to each user on the users' list to the user details page and changed it to a link.

## How it works

### User list

On the user list page, we show:

- an ‘Add user’ button
- a list of users in alphabetical order - ordered by their first name, then last name

For each user in the list, we show:

- full name - including a link to the user details page
- email address

We paginate the list if the user list contains more than 50 users.

When a user is added to the organisation or removed from the organisation, we show a success message above the page heading.

### User details

On the user details page, we show a summary list of the user’s details, including:

- first name
- last name
- email address
- organisations they belong to
- last sign in date and time

This page also includes a ‘Remove user’ link, which allows the support team to remove the user from the organisation.

The support team can change the first name, last name and email address fields. They cannot change the organisations a user belongs to, except by adding or removing the user from an organisation.

### Adding a user

Clicking ‘Add user’ starts the add user flow.

The personal details form includes:

- first name
- last name
- email address

We show an error message if:

- information is missing from the form
- the email address is entered incorrectly - for example, invalid characters are used
- an email address already used by another user

The support team user can check their answers at the end of the flow before saving the new user.

Adding the user triggers sending an email to the new user with sign in details.

If the support team adds the same user to a different organisation, we link the user to the new organisation. We don’t create a new user record.

### Removing a user

We introduced the ability to remove a user from the organisation.

When someone clicks ‘Remove user’, they must confirm the removal.

Removing a user triggers sending an email to the user to tell them they have been removed from the organisation.
