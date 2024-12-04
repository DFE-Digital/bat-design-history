---
title: Updating the structure of the support user’s service
description: Changes to the structure of our support site to allow for continued feature parity with all user groups
date: 2024-08-15
tags:
  - support users
---

As part of our regular work looking at ensuring support user’s are able to undertake all tasks that provider and school users do, we found that the existing structure was no longer working.

We implemented some small changes to the interface that enable support users to better understand user problems and made our design and development process more efficient at the same time.

## Why did things change?

Up until now the support user service has had different navigation to the main service. The primary navigation users see was translated to secondary navigation within the support space, where the primary navigation showed support user options.

With new features introducing secondary navigation into the main service, we had to look at whether the existing approach to the support service was still the best for users.

Doing so identified three possible routes:

- Keep the existing structure and introduce tertiary navigation for support users. This complicated the interface, and reduced screen space available on pages that displayed tabulated data.
- Rework the changes for provider and school users so not to use secondary navigation. These changes tested well so we did not want to change them unless absolutely necessary. Changing them would be a short term fix as it would mean limiting our future design options for our main user groups to not use secondary navigation at any point.
- Change the support user structure so that when using the service as a provider or school user they see the same thing that user sees. When new features are designed they would look the same for all users.

## What are the changes?

- Support users now choose which organisation they want to sign in as by using the same organisation selector as multi-org users. This is tested and works well.
- In line with the use of the organisation selector used by multi-org users we have brought in a horizontal bar below the phase banner that shows the name of the organisation the user is signed in as, and a link allowing them to select another user.
- Because all users now have the same levels of menus, the support only options for ‘settings’ and ‘support users’ have now moved into the header.

## What are the benefits?

The key benefits of the new structure are:

- Simplified navigation for support users.
- The support user now sees the same screens as the user they’re supporting, meaning they’re better able to understand and explain things.
- More efficient delivery of new features. As we design features for provider and school users they’re automatically added in the support console, meaning quicker delivery times.

![Support users' organisation selector](support-org-selector.png "Support users' organisation selector")

The screenshots below demonstrate the identical navigation for support users to the users they're helping.

![Support users' navigation](support-nav.png "Support users' navigation")

![School users' navigation](school-nav.png "School users' navigation")

Change
