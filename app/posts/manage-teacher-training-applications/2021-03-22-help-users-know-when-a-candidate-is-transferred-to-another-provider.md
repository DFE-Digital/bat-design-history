---
title: Help users know when a candidate is transferred to another provider
description: As a candidate can be moved between organisations, it’s useful for users at those organisations to know what’s happened
date: 2021-03-22
related:
  items:
  - text: Spreadsheet explaining who can see what and why
    href: https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0
---

The Manage service lets users transfer a candidate to a different course. That course could end up being at a different provider. For example, as long as they have the right permissions (make decisions on the courses being moved from and to):

- users at an accredited body which ratifies courses at more than one training provider can move a candidate to a course at a different training provider
- users at a training provider which runs courses ratified by more than one accredited body can move a candidate to a course at a different accredited body
- users who belong to more than one provider can move candidates between them

When a candidate is transferred users at the old provider will no longer be able to see the application in their application list even though they may have links to the application in old email notifications and in the activity log.

Also, users at the new provider will suddenly be able to see the application in their application list. This may be disconcerting.

There is also the question of what these users see when they do browse to an application they no longer own or newly own.

## Notifying users at the old and new provider

To help the user understand the implications of making or changing an offer to a new provider, we added content to the check answers page to explain that notifications will be sent to users at the old and new provider to explain what’s happened.

## What users at the old provider should be able to see

We originally had the idea to keep showing as much information to old provider users as possible. For example, showing them work history and qualifications.

We thought that this made sense as they once had access to it and that we couldn’t think of any harm with this approach from the point of view of providers.

But we think it’s better for candidates to show minimal data and protect their privacy. At least until there’s a clear need from providers that they need access to this old information.

But we also felt that any information that was a result of the provider such as previous notes, interviews and offers should still be visible to them.

See details of exactly what users at the old provider can see:
[https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0](https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0)

We also decided to:

- change the h1 to say, for example, ‘Barbara Morse - this application has been transferred to another organisation’
- remove the status tag
- remove any prompt

## What users at the new provider should be able to see

Users at the new provider can see everything except:

- interviews that were arranged with the old provider
- notes made when the coursethe old provider made
- events relating to a course at the old provider

See details of exactly what users at the new provider can see:
[https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0](https://docs.google.com/spreadsheets/d/1X7WpeElTngGI41eQ8rDselJQVgOB_u8JZmJFo_F0OMU/edit#gid=0)

## Other things we did:

- Added the accredited body next to each radio button on the course list page
- Change ‘Provider’ to ‘Training provider’
- Add ‘Accredited Body’ to the offer details panel when the training provider is not the accredited body (to match prod)

## Future considerations

- automatically cancelling upcoming interviews when the candidate is transferred
- asking users to explain why the candidate is being transferred to a new provider (perhaps this could appear in the notes section)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "alt",
    img: {
      src: "image.png"
    }
  }]
}) }}
