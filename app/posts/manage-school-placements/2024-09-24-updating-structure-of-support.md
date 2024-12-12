---
title: Updating the structure of the support user’s service
description: Changes to the structure of our support site to allow for continued feature parity with all user groups
date: 2024-08-15
tags:
  - support users
---

The Manage school placements service relies on schools recording and updating information about their placements. Schools have limited time to do this, so it is important that we are able to advise them quickly and accurately when they need help or support. This is why we want to ensure that support users can undertake all the tasks that a school or provider user can.

To do this, we found that the existing structure of the support console needed to change.

We implemented some small changes to the interface to enable support users to better understand user problems and made our design and development process more efficient at the same time.

## Why did things change?

Up until now the support console has had different navigation to the main service. The primary navigation users see was translated to secondary navigation within the support console, where the primary navigation showed support user options.

With new features introducing secondary navigation into the main service, we had to look at whether the existing design within the support console was still the best for users.

Doing so identified three possible routes:

- Keep the existing structure and introduce tertiary navigation for support users. This complicated the interface, and reduced screen space available on pages that displayed tabulated data.
- Rework the changes for provider and school users so not to use secondary navigation. These changes tested well so we did not want to change them unless absolutely necessary. Changing them would be a short-term fix as it would mean limiting our future design options for our main user groups to not use secondary navigation at any point.
- Change the support console structure so that when using the service as a provider or school user they see the same thing that user sees. When new features are designed, they look the same for all users.

## What are the changes?

- Support users now choose which organisation they want to sign in as by using the same organisation selector as multi-org users. This has been tested and works well.
- In line with the use of the organisation selector used by multi-org users, we have brought in a horizontal bar below the phase banner that shows the name of the organisation the user is signed in as, and a link allowing them to select another user.
- All users now have the same levels of menus so the 'settings' and 'support users' buttons which only appear to support users have now moved into the header.

## What are the benefits?

The key benefits of the new structure are:

- Simplified navigation for support users.
- The support user now sees the same screens as the user they’re supporting, meaning they’re better able to understand and explain things.
- More efficient delivery of new features. As we design features for provider and school users they’re automatically added in the support console, meaning quicker delivery times.

![Support users' organisation selector](support-org-selector.png "Support users' organisation selector")

The screenshots below demonstrate the identical navigation for support users to the users they're helping.

![Support users' navigation](support-nav.png "Support users' navigation")

![School users' navigation](school-nav.png "School users' navigation")
