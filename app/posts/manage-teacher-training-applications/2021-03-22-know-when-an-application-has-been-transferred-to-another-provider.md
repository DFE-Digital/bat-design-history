---
title: Know when an application has been transferred to another provider
description: As an application can be moved between providers, it’s useful for their users to know what’s happened
date: 2021-03-22
related:
  items:
  - text: Spreadsheet explaining who can see what and why
    href: https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0
---

The Manage service lets users transfer an application to a different course. That course could end up being at a different provider. For example:

- users at an accredited body can make or change an offer to any course that they ratify irrespective or whether those courses are run by different training providers
- users at a training provider can make or change an offer to any course that they run irrespective of whether those courses are ratified by different accredited bodies
- users who belong to more than one provider can make or change an offer to a course at those providers

Users can only change the course if they can ‘make decisions’ on the original and new course.

When an application is transferred, users at the old provider will no longer be able to see the application in their application list - even though they may have links to the application in old email notifications and in the activity log.

Users at the new provider will now be able to see the application in their application list - t may be unsettling.

There’s also the question of what users see when browse to an application they no longer own or newly own.

## What users at the old provider can see

We originally had the idea to continue showing as much information to old provider users as possible. For example, continuing to show work history and qualifications.

We thought this because:

- these users once had access to it
- we coudln’t think of any harm by continuing to show it - at least from the provider point of view

But in the end we think it’s best to show minimal data and protect the candidate’s privacy. At least until there’s a clear need from providers to continue seeing this information.

Any information that was created by the provider such as notes, interviews and offers should still be visible to them.

You can take a look at [the spreadsheet explaining what users at the old provider can see exactly](https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0).

We also decided to:

- change the h1 to say, for example, ‘Barbara Morse - application transferred to another organisation’
- remove the status tag
- remove any prompt that sits just underneath the h1

## What users at the new provider can see

Users at the new provider can see everything except interviews, notes and events created by the old provider.

You can take a look at [the spreadsheet explaining what users at the new provider can see exactly](https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0).

## Other things we did

We also:

- added the accredited body next to each radio button on the course list page
- changed the ‘Provider’ label to ‘Training provider’ on the offer page and panel
- added ‘Accredited body’ to the offer details page and panel when the training provider is not the accredited body
- removed the note about ‘guaranteeing a place on the course’ when making or changing an offer

## Future considerations

We’ll research or consider:

- whether we need to add guidance to the ‘check answers’ pages to explain that notifications will be sent to users at the old and new provider
- automatically cancelling upcoming interviews when an application is transferred to another provider
- asking users to explain why the application is being transferred to a new provider

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "alt",
    img: {
      src: "image.png"
    }
  }]
}) }}
