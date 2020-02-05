---
title: Replace a referee
description: Let a candidate add a new referee
date: 2020-01-30
related:
  items:
    - text: Pull request
      href: https://github.com/DFE-Digital/apply-for-postgraduate-teacher-training-prototype/pull/329
    - text: Trello
      href: https://trello.com/c/7XTngHUS/787-enable-candidates-to-add-new-referee-design
    - text: Updated email content
      href: https://docs.google.com/document/d/1vTLpM9_la1nPnVV_W35oCT9qjC-vMop7bn3pi-rGulI
    - text: Email templates
      href: https://qa.apply-for-teacher-training.education.gov.uk/rails/mailers
---
If a referee declines a request or doesn’t respond then we automatically send an email to the candidate to inform them. The candidate currently needs to reply to that email with a new referee's name, email address and their relationship to them.

There are three reasons a candidate might need to do this:
1. No response from a referee after 10 working days
2. Our email to their referee bounced
3. The referee declined to give a reference

This design lets candidates add a new referee for an application that’s already been submitted.

There's a [follow up design for adding 2 new referees](/apply-for-teacher-training/add-2-new-referees).

## User needs

As a candidate
I need to provide an alternative referee if my original referees have not responded or have declined
So that my application can progress

## Hypothesis

Currently we ask users to provide a new referee by responding to an email we send them. This is error prone and requires a support agent to manually update the application with the new referee.

If we ask candidates to give us a new referee when they sign in, then they will immediately give us new details, because it will be the most obvious and important action.

If we ask candidates to review their referee details before submitting, then they will have a chance to spot and fix any mistakes before we contact the new referee, which will reduce the likelihood of an email bouncing.

We’ll know this works when referee’s provide a new application when they sign in.

## What does the email link do?

We need candidates to give us a new referee as soon as possible, so we can progress their application. We already prompt this as soon as we can with an automatic email. We'll update those emails to contain a link back to the service.

We considered a few ways this link could work.

### Use a token and link directly to a form without sign in

Behaves in a similar way to the request reference link we send to referees. There's no sign in required. But this is more complex to build than deep linking (see below). If the link with a token fails (maybe the token is invalidated somehow) then it's difficult for the user to recover (they would need to contact support and request a new link, or try to find the form after logging in).

### Make it a deep link to a part of the application

A link that would take them directly to where they can add a new referee.

Being able to link to any part of an application, so that when a candidate signs in they are taken directly there, would be a useful feature. If we built it we could use it in other communications and for support.

The flow is a little more convoluted:
* Receive email asking for new referee
* Click link in email
* Sign in
* Click link in sign in email
* Get redirected to the form

But if a user hasn't seen the email, and they are signing in for another purpose, we need to prompt them too.

### Don't do anything smart with the link

This is the version we're going for, we only need to link to sign in.

Instead of making a smart link, we could put the candidate’s account into a "mode". That mode would mean they'll be requested to add a new referee as soon as they sign in. We could toggle this mode when we send the automatic email.

This means a candidate will be prompted to add a new referee if they are responding to that email, or if they're looking to sign in for any other purpose (ie to check their application status).

It makes the add a new referee form the most obvious thing for everyone.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "You need to add a new referee",
      img: { src: "01-you-need-to-add-a-new-referee.png" },
      caption: "
* Show this page instead of the default home page
* Give the reason why they need to replace a referee, matching the words used in emails:
  * Our email requesting a reference didn’t reach Glinda Baumbach.
  * We haven’t had a reference from Doyle Denesik.
  * Carmel Kohler said they won’t give a reference.
* Allow users to skip the step, but show it again next time they sign in
      "
    }, {
      text: "Add a new referee",
      img: { src: "02-add-a-new-referee.png" },
      caption: "
* Same as referee form with minor changes
* Removes hint text about when we will contact them
* Asks that a referee could give their reference as soon as possible
* Has a descriptive title that matches button used to reach here (and no caption)
      "
    }, {
      text: "Check your referees details",
      img: { src: "03-check-your-referees-details.png" },
      caption: "
* Because the action is immediate, we will automatically email their new referee, we need a review step
* Give the candidate a chance to catch any errors
* Confirming will send the reference request email and return the candidate to their application dashboard
      "
    }, {
      text: "Application dashboard after adding a referee",
      img: { src: "04-application-dashboard-after-adding-referee.png" }
    }, {
      text: "Application dashboard with warning",
      img: { src: "05-application-dashboard-with-warning.png" },
      caption: "
If they skipped the first screen, or didn't add a referee, maintain a warning on the dashboard
      "
    }]
}) }}
