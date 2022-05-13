---
title: Updating how organisations manage their users
description: We simplified the process of managing users and removed the need for Support team involvement
date: 2022-04-11
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

When a provider adds a user to their organisation, they must request the addition, which goes via the Support team.

We wanted to simplify adding and managing users, removing the need for Support team involvement.

## What we changed

We simplified the add user form, removing the need to give an organisation name and a reason why Support should add the user.

The form now only includes:

- first name
- last name
- email address

We will send an email to the new user as soon as they are added.

We also provided a way for providers to remove users from their organisation.

## How it works

On the user list page, we show:

- an ‘Add user’ button
- a list of users in alphabetical order - ordered by their first name, then last name

If the user list contains more than 50 users, we paginate the list.

When a user is added to the organisation or removed from the organisation, we show a success message above the page heading.

### Adding a user

We replaced the ‘Request access for someone else’ button with ‘Add user’. Clicking this button takes the user to the add user flow.

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

## Further considerations

### Uploading users in bulk

We considered allowing providers to add users in bulk, either via a file upload or copy and paste the data.

There is not a strong need for this since providers will not be adding large numbers of users at any one time.

### DfE Sign-in

Users cannot sign in to the service without using a DfE Sign-in account.

The email address entered must match the one used in the invitation. This is because we use the email address to link the organisation to the user.

If the email address does not match, the user:

- may not be able to sign in to the service
- may be able to sign in to the service but not see the inviting provider’s part of the service

We need to consider how we communicate this in our email notifications.
