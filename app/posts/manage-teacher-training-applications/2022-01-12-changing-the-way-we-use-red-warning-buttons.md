---
title: Changing the way we use red warning buttons
description: We decided to check how we’re using red warning buttons to make sure we’re using them in the right way consistently within the service.
date: 2022-01-20
screenshots:
  items:
    - text: Marking a condition as not met
      src: marking-a-condition-as-not-met.png
    - text: Removing a user from an organisation
      src: removing-a-user-from-an-organisation.png
---

The GOV.UK Design System contains the following [guidance about red warning buttons]((https://design-system.service.gov.uk/components/button/#warning-buttons)):

> Warning buttons are designed to make users think carefully before they use them. They only work if used very sparingly. Most services should not need one.
>
> Only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account.

But we’ve not been consistent in how we follow this guidance in the service.

For example:

- we do not use a warning button when rejecting an application
- we do use a warning button when marking a condition as not met

Whilst rejecting an application and marking a condition as not met are negative outcomes for an application, they’re actions that users are expected to perform regularly.

Using warning buttons for this may alarm users unnecessarily and means they’re less useful in making users pause.

We’ll only use warning buttons when removing a user. Whilst a user can be added back, removing them will unassign them from any applications which cannot be undone.
