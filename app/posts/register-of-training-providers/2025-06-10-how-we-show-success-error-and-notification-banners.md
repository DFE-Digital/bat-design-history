---
title: How we show success, error and notification banners
description: We use banners to provide users with timely and clear feedback as they interact with the service
date: 2025-06-10
tags:
  - notification banners
  - success messages
  - error summaries
related:
  items:
    - text: Error summary component
      href: https://design-system.service.gov.uk/components/error-summary/
    - text: Notification banner component
      href: https://design-system.service.gov.uk/components/notification-banner/
---

We use banners to provide users with timely and clear feedback as they interact with the service.

Following the [GOV.UK Design System guidance](https://design-system.service.gov.uk/components/), we use three types of banners:

- error summaries - telling users when something has gone wrong
- notification banners - alerting users to something important
- success messages - confirming the user has completed something

Each type plays a different role. We aim to use banners consistently and clearly to help users stay informed.

## Error summaries

We display an error summary at the top of the page, above the main heading, whenever a user submits a form with validation errors. We also show an inline error message next to each field that contains an error.

This approach follows the GOV.UK Design System’s advice: always show both the error summary and inline messages, even if there is only one error.

We use this to:

- help users understand there is a problem
- make it easy to scan the list of errors
- guide users directly to the field that needs fixing

Example: If a user forgets to enter an operating name when adding a new provider, we show an error summary at the top with a message like “Enter an operating name”. The same message is also displayed next to the empty input field.

![Example error summary](error-summary.png)

## Notification banners

We use notification banners to inform users of important information that is not directly related to the action they are currently taking.

They appear at the top of the page, just above the main heading, and remain visible until we update or remove them. Users cannot dismiss notification banners.

We use this pattern to:

- warn about service-wide issues (such as maintenance or outages)
- remind users of important deadlines or actions
- flag something relevant to the user across multiple pages

We use them sparingly. GOV.UK guidance indicates that users tend to overlook banners when they are overused.

Example: When a deadline is approaching or a broader service change occurs, such as moving user authentication from DfE Sign-in to GOV.UK One Login, we may display a notification banner to warn users.

![Example notification](notification-banner.png)

## Success banners

We use success banners (also known as success messages) to confirm that an action has been completed, such as after a user adds a provider or updates their contact details.

These are flash messages that appear on the page to which we redirect the user after submitting a form. They disappear when users refresh the page or move to another page.

Success banners use the same GOV.UK component as notification banners, but with the ‘success’ style. They are green and begin with the heading “Success”.

Example: “Provider added”

![Example success message](success-message.png)

We avoid sending users to a separate confirmation page. Instead, the success banner gives immediate feedback and keeps the user in the task flow.

## Our approach to layout

The GOV.UK Design System recommends that banners match the width of the main page content. In our service, this is not always possible. Many of our layouts, including the provider list and provider details pages, utilise full-width designs. Others, such as forms, use two-thirds of the width.

To avoid inconsistency and unexpected layout shifts, we made a deliberate design decision:

> We display all banners (success, error, and notification) in full width, regardless of the page layout.

This decision gives users a consistent experience and ensures that banners always align with the most prominent elements on the page.

### Problems with full-width error banners

The error summary component was designed to sit within a two-thirds layout. When stretched to full width, the text does not wrap neatly, unlike the notification banner.

Despite this issue, we chose to keep all banners full-width for now to maintain consistency.

We plan to monitor this and may revisit the styling in future.
