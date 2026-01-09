---
title: Logging changes to API clients
description: We log all changes to API clients
date: 2025-12-09
tags:
  - api
  - api clients
  - activity log
related:
  items:
    - text: Adding a way for users to create API clients
      href: /register-of-training-providers/adding-a-way-for-users-to-create-api-clients/
    - text: Limiting what API users can do in the service
      href: /register-of-training-providers/limiting-what-api-users-can-do-in-the-service/
    - text: Tracking activity across the service
      href: /register-of-training-providers/tracking-activity-across-the-service/
---

API clients allow external systems to access and update data in the Register of training providers. Because these clients have privileged access, it's important to maintain a complete audit trail of all changes to them.

We log all changes to API clients, including when they are created, updated, revoked, or deleted. This helps support users and administrators:

- understand who made changes and when
- identify potential security issues
- meet audit and compliance requirements
- troubleshoot problems with API integrations

[Read more about tracking activity across the service](/register-of-training-providers/tracking-activity-across-the-service/).

## How it works

### API client added

When a user creates a new API client, we show a summary card containing the following:

- client name
- expiry date

We link to the API client details via the summary card title.

![Activity log entry showing 'API client added' with a summary card displaying the client name and expiry date](activity-log--api-client-added.png "Activity log entry showing 'API client added'")

### API client updated

If a user updates the API client name, we show a summary card containing the following:

- client name
- expiry date

Currently, we do not show what has changed from the previous version of the API client.

![Activity log entry showing 'API client updated' with a summary card displaying the client name and expiry date](activity-log--api-client-updated.png "Activity log entry showing 'API client updated'")

### API client revoked

When a user revokes an API client, we change its status to prevent the API key from being used to access the service. The client remains visible in the system.

We show a summary card containing the following:

- client name
- expiry date

![Activity log entry showing 'API client revoked' with a summary card displaying the client name and expiry date](activity-log--api-client-revoked.png "Activity log entry showing 'API client revoked'")

### API client deleted

When a user deletes an API client, we soft-delete the record. This hides it from the user interface and prevents the API token from being used to access the service. Users typically delete clients that were revoked and are no longer needed.

We show a summary card containing the following:

- client name
- expiry date

When a user deletes an API client, we can no longer link to it via the summary card title.

![Activity log entry showing 'API client deleted' with a summary card displaying the client name and expiry date](activity-log--api-client-deleted.png "Activity log entry showing 'API client deleted'")

## Future considerations

We could improve the logging for API client updates by showing what has changed. For example, if a user renames a client, we could display:

- the previous client name
- the new client name
- which specific fields were modified

This would make it easier to understand the full history of changes to an API client and provide a more complete audit trail.

*[API]: application programming interface
