---
title: What to show when an application has been transferred to another provider
description: We need to show users the appropriate information when an application is transferred to or from their provider.
date: 2021-03-22
related:
  items:
  - text: Spreadsheet explaining who can see what and why
    href: https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0
---

The Manage service lets users transfer an application to a different course, which could be at a different provider. For example:

- users at an accredited body can make or change an offer to any course that they ratify, regardless of which training provider runs it
- users at a training provider can make or change an offer to any course that they run, regardless of which accredited body ratifies it
- users who belong to more than one provider can make or change an offer to a course run by any provider they belong to

Users can only change the course if they have permission to make decisions for both the old and new courses.

## What we did

We made changes to what we show to the old and new providers.

When an application is transferred to a different provider, users at the old provider will no longer be able to see the application in their application list. They will still be able to reach the application through links in old emails or the activity log.

Users at the new provider will be able to see the application in their application list. 

### What users at the old provider will see

We originally intended to continue showing as much information as possible to users at the old provider. For example, we would continue to show work history and qualifications.

We thought this would be appropriate since these users might already have downloaded the application as a PDF or put the details into a spreadsheet. Continuing to make the information available causes no obvious harm to the old provider, since they can ignore it.

But looking at it from the candidate’s point of view instead, we think it’s best to protect their privacy by showing as little as possible of the information they entered when applying. We’ll follow this approach until we identify a clear need for providers to continue seeing the information.

We've decided that any information created by the old provider such as notes, interviews and offers will still be available for them to see.

We also decided to:

- change the `h1` to say, for example, ‘Barbara Morse - application transferred to another organisation’ so it’s clear what has happened
- remove the status tag since the application is no longer in the old provider’s application list
- remove any prompt that sits just underneath the h1 since the user cannot take any action

There’s a [spreadsheet explaining what users at the old provider can see](https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0).

### What users at the new provider will see

Users at the new provider will see everything except any interviews, notes and events created by the old provider.

There’s a [spreadsheet explaining what users at the new provider can see](https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0).

### Other changes

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
- allowing applications to be transferred before an offer has been made

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
    text: "Notes page (transferred)",
    img: {
      src: "notes-page--transferred.png"
    }
  }, {
    text: "Timeline page (transferred)",
    img: {
      src: "timeline-page--transferred.png"
    }
  }, {
    text: "Make decision",
    img: {
      src: "make-decision.png"
    }
  }, {
    text: "Make offer: conditions",
    img: {
      src: "make-offer--conditions.png"
    }
  }, {
    text: "Make offer: check answers",
    img: {
      src: "make-offer--check-answers.png"
    }
  }, {
    text: "Make offer: success",
    img: {
      src: "make-offer--success.png"
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
