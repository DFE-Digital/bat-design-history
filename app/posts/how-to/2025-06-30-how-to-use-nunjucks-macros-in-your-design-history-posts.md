---
title: How to use Nunjucks macros in your design history posts
description: A guide to using built-in and GOV.UK Design System Nunjucks macros
date: 2025-06-30
related:
  items:
    - text: How to write Markdown
      href: /how-to/how-to-write-markdown/
---

<!-- markdownlint-disable MD001 MD025 -->

We use [Nunjucks](https://mozilla.github.io/nunjucks/)  to render pages on the design history site. Nunjucks is a templating language that lets you mix HTML and Markdown with reusable components called macros.

A macro is like a shortcut. It wraps up a common piece of code, allowing you to reuse it without having to repeat yourself. This helps keep your content consistent and easy to update.

Nunjucks is used across government in tools like the [GOV.UK Design System](https://design-system.service.gov.uk/) and the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/). If you have created a prototype using either of those tools, you may already be familiar with how macros work.

On the design history site, you can use Nunjucks macros alongside Markdown to do things like:

- show a screenshot with a caption
- highlight a user need
- format an email
- display a bar chart

This post demonstrates how to use the built-in macros and when to use those from the GOV.UK Design System.

## Macros available on the design history site

We’ve created four custom macros to help you present common content types:

### 1. Screenshots

Use the `appScreenshot` macro to display an image with a caption.

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 2,
  items: [
  {
    id: "my-image-01",
    text: "A helpful caption for image 1"
  },
  {
    id: "my-image-02",
    text: "A helpful caption for image 2"
  },
  {
    id: "my-image-03",
    text: "A helpful caption for image 3"
  },
  {
    id: "my-image-04",
    text: "A helpful caption for image 4"
  }]
}) }}
```

{% endraw %}

This will render a screenshot image from the post’s images folder with the given caption.

> If you do not need to show screenshots within the flow of the post, you can list the screenshots in the post’s metadata instead.

Other examples:

- [Adding support for iQTS](/register-trainee-teachers/adding-support-for-iqts/)
- [Prompting candidates to review their answers before submitting](/apply-for-teacher-training/flight-check/)
- [What to show when an application has been transferred to another provider](/manage-teacher-training-applications/what-to-show-when-an-application-has-been-transferred-to-another-provider/)

### 2. User needs

Use the `appUserNeed` macro to highlight a user need.

{% raw %}

```nunjucks
{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a user of the Wimbledon website
I need to find highlights and replays easily
So that I can catch up on matches I missed."
}) }}
```

{% endraw %}

This renders a GOV.UK-style blockquote to emphasise the user need, for example:

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a user of the Wimbledon website
I need to find highlights and replays easily
So that I can catch up on matches I missed."
}) }}

Other examples:

- [Giving accredited bodies the ability to manage courses they ratify](/publish-teacher-training-courses/giving-accredited-bodies-the-ability-to-manage-courses-they-ratify/)
- [Round 11 research with accredited providers](/claim-funding-for-mentors/round-11-research-with-accredited-providers/)
- [Getting references before submitting an application](/apply-for-teacher-training/getting-references-before-submitting/)

### 3. Emails

Use the `appEmail` macro to show email content in a styled format.

{% raw %}

```nunjucks

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
subject: "Wimbledon Championships schedule",
content: "
Dear ((firstname))

The schedule for this year’s Wimbledon Championships is now available.

You can view the full order of play and match times on the Wimbledon website.

((link))

Information will be updated daily throughout the tournament.

# Get help

If you need help, contact us at <help@example.com>.
"
}) }}
```

{% endraw %}

This formats the message with a subject line and message body in a [GOV.UK Notify](https://www.notifications.service.gov.uk/) email-style block, for example:

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
subject: "Wimbledon Championships schedule",
content: "
Dear ((firstname))

The schedule for this year’s Wimbledon Championships is now available.

You can view the full order of play and match times on the Wimbledon website.

((link))

Information will be updated daily throughout the tournament.

# Get help

If you need help, contact us at <help@example.com>.
"
}) }}

Other examples:

- [Creating a new provider onboarding form and accompanying email](/publish-teacher-training-courses/creating-a-new-provider-onboarding-form-and-accompanying-email/)
- [Managing and communicating rollover in 2024](/publish-teacher-training-courses/managing-and-communicating-rollover-2024/)
- [Payment, sampling and clawback emails](/claim-funding-for-mentors/payment-sampling-and-clawback-emails/)

### 4. Bar charts

Use the `appBarChart` macro to show simple bar charts. This is useful for summarising qualitative feedback or small datasets.

{% raw %}

```nunjucks
{% from "bar-chart/macro.njk" import appBarChart %}
{{ appBarChart({
  headers: ["Option", "Count"],
  rows: [
    ["Yes, never in doubt", 74],
    ["No, not a chance", 60]
  ]
}) }}
```

{% endraw %}

This creates a horizontal bar chart using accessible HTML and inline styles, for example:

**Will Carlos Alcaraz win the 2025 Wimbledon Championships?**

{% from "bar-chart/macro.njk" import appBarChart %}
{{ appBarChart({
  headers: ["Answer", "Percentage"],
  rows: [
    ["Yes, never in doubt", 60],
    ["No, not a chance", 74]
  ]
}) }}

Other examples:

- [UCAS Apply preferences](/publish-teacher-training-courses/ucas-apply-preferences/)

## Using GOV.UK Design System macros

You can also use GOV.UK Design System macros, such as the `govukTable` macro, if there is no suitable Markdown alternative.

For example, to add a table:

{% raw %}

```nunjucks
{% from "dist/govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  head: [
    { text: "Seeding" },
    { text: "Name" }
  ],
  rows: [
    [
      { text: "1" },
      { text: "Sabalenka, Aryna" }
    ],
    [
      { text: "2" },
      { text: "Gauff, Coco" }
    ],
    [
      { text: "3" },
      { text: "Pegula, Jessica" }
    ],
    [
      { text: "4" },
      { text: "Paolini, Jasmine" }
    ],
    [
      { text: "5" },
      { text: "Zheng, Qinwen" }
    ]
  ]
}) }}
```

{% endraw %}

Use these macros only if Markdown cannot do the job clearly or accessibly.

*[HTML]: hypertext markup language

<!-- markdownlint-enable MD001 MD025 -->
