---
title: Giving all users access to view their organisation’s users and permissions
description: Giving all users the ability to view their organisation’s users and permissions regardless of their own permissions
date: 2021-05-07
---

At the moment, users need to have:

- manage users permission to view the users area, which includes user permissions
- manage organisation permissions to view the organisational permissions area

A large number of users have sent support requests to find out what permissions have been set up for their users and their organisation.

We think that letting all users view the users and organisational permissions areas will help them understand their permissions and reduce support requests.

## What we changed

### Organisational permissions page

Users who cannot manage organisational permissions will:

- see a message saying ‘You cannot change these permissions because you do not have permission to manage organisations.’
- not see the ‘Change permissions’ links

![Screenshot of organisational permissions page.](organisational-permissions.png)

### User list page

Users who cannot manage users will:

- see a message saying ‘You cannot invite users to the service because you do not have permission to manage users.’
- not see the ‘Invite user’ button

![Screenshot of users list page.](user-list.png)

### User details page

Users who cannot manage users will:

- see a message saying ‘You cannot change these details because you do not have permission to manage users.’
- not see the ‘change’ links

![Screenshot of user details page.](user-details.png)

### Remove descriptions for profile, email notifications, users and organisational permissions

We removed the descriptions because:

- we never a tested a version without them
- we think they’re understandable without the descriptions
- it’s easier for users to scan a simple list of links
- the descriptions would need to be customised based on whether the user has the appropriate permissions

![Screenshot of account page.](account.png)

![Screenshot of organisation settings page.](organisation-settings.png)

### Separate organisational settings from account settings

We put ‘Organisational permissions’ and ‘Users’ into a new section called ‘Organisation settings’ because they’re not related to the user’s account.

![Screenshot of organisation settings page.](organisation-settings.png)

### Separate user’s permissions from their profile

We moved the user’s permissions out of their profile into a new page called ‘user permissions’.

![Screenshot of user permissions page.](user-permissions.png)

We renamed the profile page to ‘personal details’ as it’s a better description of the contents.

![Screenshot of personal details page.](personal-details.png)
