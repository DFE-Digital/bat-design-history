---
title: Changes to the sign in flow when DfE Sign-in is unavailable
description: We made several changes to the content in the sign in flow when DfE Sign-in is unavailable.
date: 2022-01-24
screenshots:
  items:
    - text: Sign in page
      src: sign-in.png
    - text: Confirmation page
      src: confirmation.png
tags:
  - sign in
---

We redesigned the normal sign in flow as part of [creating a start page on GOV.UK](/manage-teacher-training-applications/starting-the-manage-service-on-govuk/).

While doing this work, we noticed some ways to improve the sign in flow when DfE Sign-in is unavailable.

For example:

- the content could be more consistent and clearer
- the notification banner should be full width

## What we changed

We changed:

- the notification banner and its content
- the content on the sign in and confirmation pages

### Notification banner changes

The notification banner had a width which was two-thirds of the page. We changed it to be full width as standard.

The title was “Information”. We changed this to “Important” as standard.

The content used to consist of:

- a heading which said “Temporary login”
- text which said “DfE Sign-in is experiencing problems. You need to sign in using your email address.”

We combined this into standard heading text which says “DfE Sign-in is currently unavailable.”

### Content changes

We changed:

- “You must sign in to your account to manage teacher training applications.” to “You need to request an email with a link to sign in.” - this indicates that the flow is different to the normal DfE Sign-in flow
- the button label from “Continue” to “Request link to sign in”, which more clearly describes the action

We also updated the content under the form about getting an account to match the changes we made when we created the start page on GOV.UK.

We made the content on the confirmation page clearer by changing:

- “We’ve sent you an email. Click on the link to confirm your address and return to this service.” to “Sign in by clicking the link in the email you’ve been sent.”
- “If our email does not arrive within 5 minutes, check your spam and trash folder, or [try again].” to “Check your spam and trash folder if you cannot find the email. You can also [request another link to sign in].”

## How it works

If the user leaves the email address blank, an error will be shown saying “Enter an email address”.

If the user enters an invalid email address, an error will be shown saying “Enter an email address in the correct format, like name@example.com”.

If the user enters a valid email address, they will be taken to the confirmation page.
