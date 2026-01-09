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

API clients allow external systems to access and update data in the Register of Training Providers. Because these clients have privileged access, it's important to maintain a complete audit trail of all changes to them.

We log all changes to API clients, including when they are created, updated, revoked, or deleted. This helps support users and administrators:

- understand who made changes and when
- identify potential security issues
- meet audit and compliance requirements
- troubleshoot problems with API integrations

[Read more about tracking activity across the service](/register-of-training-providers/tracking-activity-across-the-service/).

## How it works

### API client added

When a user creates a new API client, we show a summary card containing:

- client name
- expiry date

![Screenshot showing the ‘API client added’ activity on the global activity log](activity-log--api-client-added.png "Screenshot showing the ‘API client added’ activity on the global activity log")

### API client updated

If a user updates the API client name, we show a summary card containing:

- client name
- expiry date

Currently, we do not show what has changed from the previous version of the API client.

![Screenshot showing the ‘API client updated’ activity on the global activity log](activity-log--api-client-updated.png "Screenshot showing the ‘API client updated’ activity on the global activity log")

### API client revoked

When a user revokes an API client, we show a summary card containing the following:

- client name
- expiry date

![Screenshot showing the ‘API client revoked’ activity on the global activity log](activity-log--api-client-revoked.png "Screenshot showing the ‘API client revoked’ activity on the global activity log")

### API client deleted

When a user deletes an API client, we show a summary card containing the following:

- client name
- expiry date

![Screenshot showing the ‘API client deleted’ activity on the global activity log](activity-log--api-client-deleted.png "Screenshot showing the ‘API client deleted’ activity on the global activity log")

*[API]: application programming interface
