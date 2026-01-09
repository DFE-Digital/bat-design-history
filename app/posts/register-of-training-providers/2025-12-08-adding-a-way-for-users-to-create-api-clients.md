---
title: Adding a way for users to create API clients
description: We added a way for users to create API clients to access the register’s API securely
date: 2025-12-08
tags:
  - api
  - api clients
  - security
related:
  items:
    - text: Limiting what API users can do in the service
      href: /register-of-training-providers/limiting-what-api-users-can-do-in-the-service/
    - text: Logging changes to API clients
      href: /register-of-training-providers/logging-changes-to-api-clients/
    - text: API technical and data standards
      href: https://www.gov.uk/guidance/gds-api-technical-and-data-standards
screenshots:
  items:
    - text: List of API clients
      src: api-client--list.png
    - text: List of API clients - empty
      src: api-client--list-empty.png
    - text: Add API client - form
      src: add-api-client--form.png
    - text: Add API client - form with errors
      src: add-api-client--form-errors.png
    - text: Add API client - check your answers
      src: add-api-client--check-your-answers.png
    - text: Add API client - confirmation
      src: add-api-client--confirmation.png
    - text: API client details
      src: api-client--details.png
    - text: Edit API client - form
      src: edit-api-client--form.png
    - text: Edit API client - form with errors
      src: edit-api-client--form-errors.png
    - text: Edit API client - check your answers
      src: edit-api-client--check-your-answers.png
    - text: Edit API client - success
      src: edit-api-client--success.png
    - text: Revoke API client
      src: revoke-api-client--confirm.png
    - text: Revoke API client - success
      src: revoke-api-client--success.png
    - text: Delete API client
      src: delete-api-client--confirm.png
    - text: Delete API client - success
      src: delete-api-client--success.png
---

## What we did

We added a way for users to create API clients to access the register's API securely.

## Why we did this

Third-party systems and services need programmatic access to the register of training providers data. For example, Department for Education (DfE) services may need to verify provider details or retrieve training provider information for their applications.

Previously, there was no secure, self-service way for users to generate credentials for API access. This meant:

- we had to manually provision API access for each third party
- it was difficult to track which third parties were accessing the data
- we could not easily revoke or expire access when it was no longer needed
- there was no audit trail of API access

By allowing users to create their own API clients, we enable third parties to integrate with the register while maintaining security and oversight of who is accessing the data.

## How API clients work

API clients consist of 3 attributes:

- client name - to identify the third party or system using the API
- expiry date - to ensure access is reviewed and renewed periodically
- secure token - to authenticate API requests

The secure token must be used by the third party every time they want to access the data held in the register.

We require API clients so that we can:

- identify which third parties are accessing the service
- track what data they access and when
- revoke access when it is no longer needed
- ensure access is reviewed regularly through expiry dates

## How it works

### Viewing a list of API clients

Users can access the list of API clients via the ‘API clients’ option in the service navigation.

If the user has general access to the register, we show a list of all API clients. The list includes:

- client name
- expiry date
- status

If the user is an API only user, they can only see the API clients they have created.

We link the client name to a details page where users can change, revoke or delete the API client.

We paginate the list if it contains more than 15 API clients.

### API client details

The API client details page includes:

- status of the API client - active, expired, revoked
- ‘Revoke API client’ button
- ‘Delete API client’ link
- summary list containing the client name and expiry date

If the API client is ‘active’, we include a change link next to the client name. Users cannot change expired or revoked API clients.

### Adding an API client

[![Add API client flow](add-api-client--flow.png 'Add API client flow (select image to see a larger version)')](add-api-client--flow.png)

Adding an API client is a 3-step process:

1. Enter client details
2. Check your answers
3. Confirmation - copying the API token

Users start the flow by selecting the ‘Add API client’ button on the API clients list page.

#### Enter client details

The API client details form includes fields for:

- client name
- expiry date

The API client’s name is required. If users do not enter a name, we show an error message:

> Enter client name

The expiry date is required. If the user does not enter a date, we show the error message:

> Enter expiry date

If the user enters an incomplete or incorrect date on which the API client started, we follow the [GOV.UK design system guidance on validating dates](https://design-system.service.gov.uk/components/date-input/#error-messages).

#### Check your answers

The next step is the ‘Check your answers’ page. We show a summary list containing the following:

- client name
- expiry date

We also include a warning message:

> An authentication token will be created and shown once on the next page.

Users can change any of their answers before continuing to create the API token.

#### Confirmation

The final step is the confirmation page.

At this point, we have created the API token, and we display it in a [GOV.UK panel](https://design-system.service.gov.uk/components/panel/).

The panel includes:

- confirmation message: “API client token created”
- client name
- token - displayed in a monospace font

For security reasons, users cannot return to this page; they must make a copy of the API token before continuing to another part of the service.

You can read more about the [API technical and data standards guidance](https://www.gov.uk/guidance/gds-api-technical-and-data-standards) on GOV.UK.

### Updating an API client

Updating an API client is a 2-step process:

1. Change client name
2. Check your answers

For security purposes, users cannot change the API client’s expiry date. If the client expires, users will need to create a new token.

### Revoking an API client

Users can revoke API clients to immediately stop them from accessing the API.

Revoking is used when:

- access needs to be suspended temporarily or permanently
- there's a security concern with a token
- a third party no longer needs access but you want to keep a record of the API client

When an API client is revoked:

- it remains visible in the API clients list with a 'Revoked' status
- the audit history is preserved
- the API client cannot be edited or reactivated
- the third party can no longer use the token to access the API

When users select the 'Revoke API client' button on the API client details page, we show a confirmation page to ensure they want to revoke the API client. This confirmation step ensures they do not accidentally rescind the API client.

We show a message on the confirmation page warning that revoking an API client cannot be undone.

Selecting the red 'Revoke API client' button will complete the process.

We show a success message on the API client details page saying 'API client revoked'.

On the API client list and details pages, we include a 'Revoked' status tag next to the API client's name.

We remove all change links.

### Deleting an API client

Users can delete API clients to permanently remove them from the system.

Deleting is used when:

- an API client was created in error
- you want to completely remove the record from the system
- the API client is no longer needed and there's no requirement to keep its history

When an API client is deleted:

- it is completely removed from the API clients list
- the audit history is still preserved (see [logging changes to API clients](/register-of-training-providers/logging-changes-to-api-clients/))
- the action cannot be undone
- the third party can no longer use the token to access the API

Users should revoke rather than delete API clients if they want to maintain a visible record of third-party access in the API clients list.

When users select the 'Delete API client' link on the API client details page, we show a confirmation page to ensure they want to delete the API client. This confirmation step ensures they do not accidentally delete the API client.

We show a message on the confirmation page warning that deleting an API client cannot be undone.

Selecting the red 'Delete API client' button will complete the process.

We show a success message on the API clients list page saying 'API client deleted'.

*[API]: application programming interface
