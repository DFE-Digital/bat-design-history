---
title: Know when an application has been transferred to another provider
description: As an application can be moved between providers, it’s useful for their users to know what’s happened
date: 2021-03-22
related:
  items:
  - text: Spreadsheet explaining who can see what and why
    href: https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0
---

The Manage service lets users transfer an application to a different course which could end up being at a different provider. For example:

- users at an accredited body can make or change an offer to any course that they ratify regardless of whether those courses are run by different training providers
- users at a training provider can make or change an offer to any course that they run irrespective of whether those courses are ratified by different accredited bodies
- users who belong to more than one provider can make or change an offer to a course at those providers

Users can only change the course if they can ‘make decisions’ on the original and new course.

When an application is transferred, users at the old provider will no longer be able to see the application in their application list - even though they may have links to the application in old email notifications and in the activity log.

Users at the new provider will now be able to see the application in their application list - this may be unsettling.

There’s also the question of what users see when they browse to an application they no longer own or newly own.

## What users at the old provider can see

We originally had the idea to continue showing as much information to old provider users as possible. For example, continuing to show work history and qualifications.

We thought this because these users once had access to the information and could have downloaded the application as a PDF or put the details into a spreadsheet. Also, we couldn’t think of any harm from the provider point of view of continuing to show it.

But from the candidate’s point of view we think it’s best to protect their privacy by showing the minimum amount of information. At least until there’s a clear need from providers to continue seeing the information.

However, we have decided that any information created by the provider such as notes, interviews and offers will still be available to see.

We also decided to:

- change the `h1` to say, for example, ‘Barbara Morse - application transferred to another organisation’
- remove the status tag
- remove any prompt that sits just underneath the h1

You can take a look at [the spreadsheet explaining what users at the old provider can see exactly](https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0).

## What users at the new provider can see

Users at the new provider can see everything except any interviews, notes and events created by the old provider.

You can take a look at [the spreadsheet explaining what users at the new provider can see exactly](https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0).

## Other things we did

We also:

- added the accredited body next to each radio button on the course list page
- added ‘Accredited body’ to the offer details page and panel when the training provider is not the accredited body
- changed the ‘Provider’ label to ‘Training provider’ on the offer page and panel
- removed the note about ‘guaranteeing a place on the course’ when making or changing an offer

## Future considerations

In future, we’ll research or consider:

- whether we need to add guidance to the ‘check answers’ pages to explain that notifications will be sent to users at the old and new provider
- automatically cancelling upcoming interviews when an application is transferred to another provider
- asking users to explain why the application is being transferred to a new provider

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application page (transferred)",
    img: {
      src: "application-page--transferred.png"
    }
  }, {
    text: "Offer page (transferred)",
    img: {
      src: "offer-page--transferred.png"
    }
  }, {
    text: "Interviews page (transferred)",
    img: {
      src: "interviews-page--transferred.png"
    }
  }, {
    text: "Timeline page (transferred)",
    img: {
      src: "timeline-page--transferred.png"
    }
  }, {
    text: "Make Offer: conditions",
    img: {
      src: "make-offer--conditions.png"
    }
  }, {
    text: "Make Offer: check answers",
    img: {
      src: "make-offer--check-answers.png"
    }
  }, {
    text: "Make Offer: success",
    img: {
      src: "make-offer--success.png"
    }
  }, {
    text: "Offer page",
    img: {
      src: "offer-page.png"
    }
  }, {
    text: "Change offer: training provider",
    img: {
      src: "change-offer--provider.png"
    }
  }, {
    text: "Change offer: course",
    img: {
      src: "change-offer--course.png"
    }
  }, {
    text: "Change offer: location",
    img: {
      src: "change-offer--location.png"
    }
  }, {
    text: "Change offer: check answers",
    img: {
      src: "change-offer--check-answers.png"
    }
  }, {
    text: "Change offer: success",
    img: {
      src: "change-offer--success.png"
    }
  }]
}) }}
