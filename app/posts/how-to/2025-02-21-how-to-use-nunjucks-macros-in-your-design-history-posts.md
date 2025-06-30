---
title: How to use Nunjucks macros in your design history posts
description: A guide to using built-in and GOV.UK Design System Nunjucks macros
date: 2025-02-21
---

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

<pre class="language-nunjucks">
<code class="language-nunjucks">
&#123;% from "screenshots/macro.njk" import appScreenshots with context %&#125;
&#123;&#123; appScreenshots(&#123;
  headingLevel: 2,
  items: [
  &#123;
    id: "my-image-01",
    text: "A helpful caption for image 1"
  &#125;,
  &#123;
    id: "my-image-02",
    text: "A helpful caption for image 2"
  &#125;,
  &#123;
    id: "my-image-03",
    text: "A helpful caption for image 3"
  &#125;,
  &#123;
    id: "my-image-04",
    text: "A helpful caption for image 4"
  &#125;]
&#125;) &#125;&#125;
</code>
</pre>

This will render a screenshot image from the post’s images folder with the given caption.

> You no longer need to use this macro. You can list the screenshots in the post’s metadata instead.

Examples:

- [Adding support for iQTS](/register-trainee-teachers/adding-support-for-iqts/)
- [Prompting candidates to review their answers before submitting](/apply-for-teacher-training/flight-check/)
- [What to show when an application has been transferred to another provider](/manage-teacher-training-applications/what-to-show-when-an-application-has-been-transferred-to-another-provider/)

### 2. User needs

Use the `appUserNeed` macro to highlight a user need.

<pre class="language-nunjucks">
<code class="language-nunjucks">
&#123;% from "user-need/macro.njk" import appUserNeed %&#125;
&#123;&#123; appUserNeed(&#123;
  description: "As an ITT placement school,
We need teachers to sign up to become mentors,
So that our trainee teachers are supported throughout their placements to become successful teachers."
&#125;) &#125;&#125;
</code>
</pre>

This renders a GOV.UK-style blockquote to emphasise the user need.

Examples:

- [Giving accredited bodies the ability to manage courses they ratify](/publish-teacher-training-courses/giving-accredited-bodies-the-ability-to-manage-courses-they-ratify/)
- [Round 11 research with accredited providers](/claim-funding-for-mentors/round-11-research-with-accredited-providers/)
- [Getting references before submitting an application](/apply-for-teacher-training/getting-references-before-submitting/)

### 3. Emails

Use the `appEmail` macro to show email content in a styled format.

<pre class="language-nunjucks">
<code class="language-nunjucks">
&#123;% from "email/macro.njk" import appEmail %&#125;
&#123;&#123; appEmail(&#123;
subject: "An important email",
content: "
Dear ((firstname))

Something important the person needs to know.

# Get help

If you need help, contact us at &lt;becomingateacher@digital.education.gov.uk&gt;.
"
&#125;) &#125;&#125;
</code>
</pre>
</pre>

This formats the message with a subject line and message body in a GOV.UK Notify email-style block.

Examples:

- [Creating a new provider onboarding form and accompanying email](/publish-teacher-training-courses/creating-a-new-provider-onboarding-form-and-accompanying-email/)
- [Managing and communicating rollover in 2024](/publish-teacher-training-courses/managing-and-communicating-rollover-2024/)
- [Payment, sampling and clawback emails](/claim-funding-for-mentors/payment-sampling-and-clawback-emails/)

### 4. Bar charts

Use the `appBarChart` macro to show simple bar charts. This is useful for summarising qualitative feedback or small datasets.

<pre class="language-nunjucks">
<code class="language-nunjucks">
&#123;% from "bar-chart/macro.njk" import appBarChart %&#125;
&#123;&#123; appBarChart(&#123;
  headers: ["Option", "Count"],
  rows: [
    ["Yes, required", 607],
    ["No, not required", 747]
  ]
&#125;) &#125;&#125;
</code>
</pre>

This creates a horizontal bar chart using accessible HTML and inline styles.

Example:

- [UCAS Apply preferences](/publish-teacher-training-courses/ucas-apply-preferences/)

## Using GOV.UK Design System macros

You can also use GOV.UK Design System macros, such as the `govukTable` macro, if there is no good Markdown alternative.

For example, to add a table:

<pre class="language-nunjucks">
<code class="language-nunjucks">
&#123;% from "dist/govuk/components/table/macro.njk" import govukTable %&#125;
&#123;&#123; govukTable(&#123;
  head: [
    &#123; text: "Name" &#125;,
    &#123; text: "Role" &#125;
  ],
  rows: [
    [
      &#123; text: "Oli" &#125;,
      &#123; text: "Product manager" &#125;
    ],
    [
      &#123; text: "Simon" &#125;,
      &#123; text: "Service designer" &#125;
    ]
  ]
&#125;) &#125;&#125;
</code>
</pre>

Use these macros only if Markdown cannot do the job clearly or accessibly.
