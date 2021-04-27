---
title: Withdrawing an application iteration 2
description: Getting the withdraw application flow ready for first release
date: 2021-04-15
---

{% from "email/macro.njk" import appEmail %}

The [first iteration of withdrawing an application](/manage-teacher-training-applications/withdrawing-an-application) tested whether users could:

- find the ‘Withdraw at candidate’s request’ link
- understand the difference between rejecting an application, withdrawing an offer and withdrawing at the candidate’s request

As the design tested well, this iteration is to tidy the rest of the flow and get it ready for first release.

## How it works

Users can click a ‘Withdraw at candidate’s request’ link from the application details page unless:

- the application has already been rejected or withdrawn
- any offer has been withdrawn or declined

When clicked, the user is taken to a page asking them to confirm that they want to withdraw the application. If there are any upcoming interviews then the page explains that they’ll be cancelled.

Clicking ‘Cancel’ or ‘Back’ takes the user to the application details page.

Clicking ‘Withdraw application’:

- withdraws the application
- cancels any upcoming interviews - this does not include interviews scheduled for the day on which the application is withdrawn
- takes the user to the application details page with a notification banner saying ‘Application withdrawn’
- sends an email to the candidate to confirm their application has been withdrawn
- sends an email to the candidate for each of their cancelled interviews

## Future considerations

We’re not asking for a reason for withdrawing the application because:

- the candidate may not give a reason
- if the candidate does give a reason, there’s no need to replay it to them
- we don’t know what users or the DfE would do with the reason

We do have a concern that some providers may withdraw an application instead of rejecting it. If this happens, we may explore capturing a reason as a potential solution.

We'll look out for unexpectedly high levels of use of this new feature.

## Emails

### When all applications have been rejected

{% set template1 %}
<!-- markdownlint-disable MD024 -->
Dear ((name))

# Update on your application

At your request, ((provider)) has withdrawn your application to study ((course)).

If you did not ask them to withdraw the application, contact a Get Into Teaching adviser:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).

# You can apply again

If now’s the right time for you, you can apply for teacher training again this year.

Your last application has been saved. You can make changes and choose a different course before you submit a new application.

Sign in to apply again:

((link))

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/lp/live-chat

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).
{% endset %}

{{ appEmail({
  subject: "Update on your application - all decisions now made",
  content: template1
}) }}

### When waiting for one decision and has one offer

{% set template2 %}
Dear ((name))

# Update on your application

At your request, ((provider)) has withdrawn your application to study ((course)).

If you did not ask them to withdraw the application, contact a Get Into Teaching adviser:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).

# You have an offer and are waiting for a decision about another course

You have an offer from ((provider1)) to study ((course1)).

((provider2)) has until ((date)) to make a decision about your application to study ((course2)).

You can wait until you’ve received both decisions before you respond. Alternatively you can sign in to you account and accept the offer you’ve already got:

((link))

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/lp/live-chat

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).
{% endset %}

{{ appEmail({
  subject: "Update on your application - decide what to do",
  content: template2
}) }}

### When waiting for one or two decisions and no offers made

{% set template3 %}
Dear ((name))

# Update on your application

At your request, ((provider)) has withdrawn your application to study ((course)).

If you did not ask them to withdraw the application, contact a Get Into Teaching adviser:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).

((if one??

# You’re waiting for a decision

You’re waiting for ((provider)) to make a decision about your application to study ((course)). They should do this by ((date)).

((else??

# You’re waiting for decisions

You’re waiting for decisions about your applications to:

- ((provider)) to study ((course))
- ((provider)) to study ((course))

They should make their decisions by ((date)).

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/lp/live-chat

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).
{% endset %}

{{ appEmail({
  subject: "Update on your application",
  content: template3
}) }}

### When received one or two offers, not waiting for any decisions

{% set template4 %}
Dear ((name))

# Update on your application

At your request, ((provider)) has withdrawn your application to study ((course)).

If you did not ask them to withdraw the application, contact a Get Into Teaching adviser:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).

((if one??

# Respond to your offer by ((date))

You’ve received an offer from ((provider)) to study ((course)). You’re not waiting for any other decisions.

The offer will automatically be withdrawn if you do not respond by ((date)).

Sign in to your account to respond:

((link))

((else??

# Respond to your offers by ((date))

You’ve received offers from:

- ((provider)) to study ((course))
- ((provider)) to study ((course))

You’re not waiting for any other decisions.

The offers will automatically be withdrawn if you do not respond by ((date)).

Sign in to your account to respond:

((link))

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/lp/live-chat

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).
{% endset %}

{{ appEmail({
  subject: "Update on your application - respond by ((date))",
  content: template4
}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Withdraw link on application details",
    img: {
      src: "application-details.png"
    }
  }, {
    text: "Confirm withdrawal",
    img: {
      src: "confirm-withdrawal.png"
    }
  }, {
    text: "Notification banner",
    img: {
      src: "notification-banner.png"
    }
  }]
}) }}
