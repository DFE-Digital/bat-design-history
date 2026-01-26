---
title: How to document email templates
description: A guide to documenting GOV.UK Notify emails in your design history posts
date: 2025-01-24
related:
  items:
    - text: How to use Nunjucks macros in your design history posts
      href: /how-to/how-to-use-nunjucks-macros-in-your-design-history-posts/
    - text: What to include in a design history post
      href: /how-to/what-to-include-in-a-design-history-post/
---

Emails are an important part of many services. Documenting email templates in your design history helps others understand the communications users receive. This guide explains how to use the `appEmail` macro to display emails.

## When to document emails

Include email templates when:

- introducing new transactional emails
- changing the content or structure of existing emails
- documenting the full user journey, including communications
- showing how emails relate to service interactions

## Using the appEmail macro

The `appEmail` macro displays email content in a styled format that resembles [GOV.UK Notify](https://www.notifications.service.gov.uk/) emails.

### Basic usage

{% raw %}

```nunjucks
{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Your application has been submitted",
  content: "
Dear ((firstName))

Your application to ((provider)) has been submitted.

# What happens next

The provider will review your application and contact you within 40 working days.

If you have any questions, contact us at <support@example.com>.
"
}) }}
```

{% endraw %}

### Using placeholders

GOV.UK Notify uses double parentheses for personalisation placeholders. The macro automatically styles these:

{% raw %}

```nunjucks
{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Reference request for ((candidateName))",
  content: "
Dear ((refereeName))

((candidateName)) has given your details as a referee for their application to become a teacher.

Please give a reference by ((deadline)).

((link))
"
}) }}
```

{% endraw %}

Placeholders like `((candidateName))` and `((link))` will be highlighted in the output.

### Longer email content

For longer emails, use a Nunjucks variable to keep the code readable:

{% raw %}

```nunjucks
{% set emailContent %}
Dear ((firstName))

Thank you for submitting your application.

## Your application details

- Provider: ((provider))
- Course: ((courseName))
- Start date: ((startDate))

## What happens next

The provider will review your application. They will contact you within 40 working days to let you know their decision.

## If you're offered a place

You'll have 10 working days to accept or decline the offer.

## Get help

If you have questions about your application, contact us at <support@example.com>.

Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Application submitted - ((provider))",
  content: emailContent
}) }}
```

{% endraw %}

## Markdown in emails

The email content supports Markdown formatting:

### Headings

Use `#` for headings within emails. Note that GOV.UK Notify renders these as bold text, not HTML headings:

```markdown
# Main heading

## Subheading
```

### Lists

Use standard Markdown list syntax:

```markdown
You need to:

- complete your personal details
- add 2 references
- submit your application
```

### Links

For links, use angle brackets or Markdown link syntax:

```markdown
Contact us at <support@example.com>

[View your application](https://example.com)
```

## Documenting multiple emails

When documenting a series of emails (for example, a notification workflow), include each one with context:

```markdown
## Email 1: Application received

This email is sent immediately after a candidate submits their application.

{% raw %}{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Application received",
  content: "..."
}) }}{% endraw %}

## Email 2: Application reviewed

This email is sent when the provider makes a decision.

{% raw %}{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Update on your application",
  content: "..."
}) }}{% endraw %}
```

## Best practices

### Include context

Explain when the email is sent and why:

```markdown
## Application reminder email

This email is sent 7 days after a candidate starts an application but has not submitted it.
```

### Document all variants

If an email has different versions based on conditions, document each:

```markdown
## Offer email - single offer

Sent when a candidate receives one offer.

{% raw %}{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "You have an offer",
  content: "..."
}) }}{% endraw %}

## Offer email - multiple offers

Sent when a candidate receives more than one offer.

{% raw %}{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "You have ((numberOfOffers)) offers",
  content: "..."
}) }}{% endraw %}
```

### Use realistic placeholder values

When describing placeholders, give examples of what they might contain:

```markdown
The email includes these personalisation fields:

| Placeholder | Example value |
| --- | --- |
| `((firstName))` | Sarah |
| `((provider))` | University of Leeds |
| `((deadline))` | 15 February 2025 |
```

### Follow GOV.UK Notify conventions

Write email content following [GOV.UK Notify best practices](https://www.notifications.service.gov.uk/using-notify/guidance):

- keep sentences short
- use simple language
- put the most important information first
- include a clear call to action

### Link to the actual template

If possible, link to the GOV.UK Notify template:

```markdown
[View this template in GOV.UK Notify](https://www.notifications.service.gov.uk/...)
```

## Disabling markdownlint

The email macro may trigger markdownlint warnings about heading levels. Disable these at the start and end of your post:

```markdown
<!-- markdownlint-disable MD001 -->

... your email content ...

<!-- markdownlint-enable MD001 -->
```
