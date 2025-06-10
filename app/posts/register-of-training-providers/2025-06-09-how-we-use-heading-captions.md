---
title: How we use heading captions
description: Making sure it’s clear what the user is doing at all times
date: 2025-06-09
tags:
  - user interface
  - headings
  - captions
related:
  items:
    - text: Changes to headings, caption text, success messages and timeline event titles
      description: Manage teacher training applications
      href: /manage-teacher-training-applications/changes-to-headings-caption-text-success-messages-and-timeline-event-titles/
    - text: Making page titles consistent and more meaningful
      description: Manage teacher training applications
      href: /manage-teacher-training-applications/making-page-titles-consistent-and-more-meaningful/
---

We use heading captions in the Register of training providers to help users stay oriented, especially when completing multi-step flows or editing data linked to specific providers.

Captions provide essential context. They show what the user is doing and who or what they are interacting with. This enhances clarity and confidence, particularly when users manage multiple providers or switch between different actions within the service.

## Why captions matter

The [GOV.UK Design System](https://design-system.service.gov.uk/styles/headings/#headings-with-captions) recommends using a caption when you need to make it clear that a page is part of a wider section or group. Captions are placed above the page heading and are often nested inside the heading element for accessibility and screen reader support.

In our service, captions:

- set context - helping users understand what they are doing and where they are
- maintain consistency - each flow has a caption pattern that is repeated at every step
- aid accessibility - when included in the `<h1>`, they make each page heading unique
- support findability - we include captions in the page `<title>`, so users can identify open tabs or navigate their history

## How we structure captions

We follow two main formats, depending on whether the user is creating a new item or editing an existing one.

### For new things

We include:

- flow name
- action or question

#### Example

- Caption: “Add provider”
- Title: “Is the provider accredited?”

This keeps the caption short and action-based. It matches the language on buttons and links, helping users stay in flow.

### For existing things

We include:

- flow name
- _thing_ name
- Action or question

#### Example

- Caption: “Add partnership - National Institute of Teaching”
- Title: “Enter training partner name, UKPRN or URN”

This format helps the user see what they are working on and which provider it relates to.

## Examples from the service

### 1. Adding a provider

![Add provider caption](heading-caption--add-provider.png)

Caption: “Add provider”
Title: “Is the provider accredited?”

This caption matches the action the user chose on the previous page and confirms they are in the correct flow.

### 2. Changing provider details

![Change provider details caption](heading-caption--change-provider-details.png)

Caption: “National Institute of Teaching”
Title: “Provider details”

We omit the flow name here. “Change provider - National Institute of Teaching” adds no extra value and makes the caption harder to scan.

### 3. Adding a partnership

![Add provider partnership caption](heading-caption--add-provider-partnership.png)

Caption: “Add partnership - National Institute of Teaching”
Title: “Enter training partner name, UKPRN or URN”

This indicates to the user that they are still in the partnership flow and reminds them of the provider they are currently working with.

## Additional considerations

### Use consistent captions across steps

Once a flow starts, we carry the same caption through to every step. This reassures users they are in the right place, even when the questions or content change.

### Use a summary if more detail is needed

If more context is needed than the caption allows, we introduce a summary between the heading and the question. This is useful in review steps or when we show related data from other parts of the service.

### Include captions in the page title

To improve accessibility and make browser tabs easier to identify, we include captions in the page `<title>` element in the following format, separated by hyphens:

- heading
- caption
- Register of training providers
- GOV.UK

For example:

```text
Enter training partner name, UKPRN or URN - Add partnership - National Institute of Teaching - Register of training providers - GOV.UK
```

This makes it easier for users to return to the correct tab when switching between systems or working across providers.

## Summary

Captions help users stay oriented and confident while using the service. They are especially helpful in flows that involve creating or editing records for specific providers. By following a consistent structure, aligning with the GOV.UK Design System, and integrating captions into both the interface and the page title, we help users stay on task and reduce confusion.
