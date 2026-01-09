---
title: Managing API and support user accounts
description: We added a way for the support team to manage both API and support user accounts, with different access levels for each user type
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

We added a way for the support team to manage user accounts and control access to the service for both API users and support users.

## Why we did this

With the introduction of the API, we needed to distinguish between two types of users:

- **Support users** - DfE staff who need to sign in to the service interface to manage training provider data
- **API users** - systems and applications that access training provider data programmatically through the API

API users should only access data through API endpoints and do not need access to the web interface. By distinguishing between these user types, we can:

- prevent API-only accounts from accessing the full service interface
- allow the support team to manage both types of users in one place
- control who can create and manage API clients
- ensure appropriate access levels for different use cases

## What we changed

We have:

- renamed the section from "Support users" to "Users"
- added a question – "Is the account an API user?" – to distinguish API users from support users
- added status tags to the users list to show whether an account is active or inactive

### Access restrictions for API users

API users have limited access to the service. They can:

- authenticate using their account credentials
- access training provider data through API endpoints
- create and manage API clients (if they have the appropriate permissions)

API users cannot:

- sign in to the web interface
- view or use any pages in the service
- manually edit training provider data through forms
- access the support user administration area

This ensures that API-only accounts are used solely for programmatic access and cannot be misused to access the service interface.

### Who can create API clients

We restrict who can create API clients to DfE users only. This allows us to:

- maintain control over who accesses training provider data through the API
- ensure proper governance and oversight of API usage
- track and audit all API client creation and usage

We may change this policy in the future to allow third-party users to access training provider data through the API.

## How it works

### Users list

On the user list page, we show:

- an ‘Add user’ button
- a list of users in alphabetical order - ordered by their first name, then last name

For each user in the list, we show:

- full name - including a link to the user details page
- email address
- status - either 'Active' or 'Inactive'

The status indicates whether the account is currently able to access the service. Inactive accounts cannot sign in or use the API until they are reactivated by a support user.

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

## Future considerations

As the API and user management features mature, we may need to:

### Third-party API access

Allow third-party organisations to create and manage their own API clients. This would require:

- a self-service registration process for external users
- additional security measures and authentication methods
- rate limiting and usage quotas per organisation
- enhanced monitoring and audit capabilities
- legal agreements and terms of service

### Granular permissions

Introduce more fine-grained permission levels for both API and support users, such as:

- read-only access to specific data sets
- write access limited to certain fields or provider types
- regional or organisational restrictions
- time-limited access for temporary users

### User role management

Expand beyond the simple API user vs support user distinction to include:

- different support user roles (viewer, editor, administrator)
- API client scopes and permissions
- delegated administration for multi-organisation access

### API key rotation

Implement automatic API key rotation and expiry policies to improve security.

*[API]: application programming interface
