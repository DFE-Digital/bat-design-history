---
title: How to write accessible content
description: A guide to making your design history posts accessible to all readers
date: 2025-01-25
related:
  items:
    - text: How to write Markdown
      href: /how-to/how-to-write-markdown/
    - text: How to add screenshots
      href: /how-to/how-to-add-screenshots/
    - text: GOV.UK Design System - Images
      href: https://design-system.service.gov.uk/styles/images/
---

Design history posts should be accessible to everyone, including people who use assistive technologies. This guide covers key accessibility practices for writing content.

## Writing good alt text

Alt text (alternative text) describes images for people who cannot see them, including those using screen readers.

### When to use alt text

Every image needs alt text. The `appScreenshots` macro generates default alt text, but you should provide custom alt text when the default is not descriptive enough.

### Writing descriptive alt text

Good alt text describes what the image shows, not just what it is.

**Poor alt text:**

```markdown
![Screenshot](dashboard.png)
```

**Better alt text:**

```markdown
![Dashboard showing 3 applications: 2 pending review and 1 offer made](dashboard.png)
```

### Alt text for screenshots

For screenshots of interfaces, describe the key content:

```markdown
![Application form showing personal details section with fields for name, date of birth, and nationality](personal-details.png)
```

For the `appScreenshots` macro, use the `alt` parameter:

{% raw %}

```nunjucks
{{ appScreenshots({
  items: [
    {
      text: "Personal details form",
      alt: "Form with fields for first name, last name, date of birth, and nationality, all marked as required"
    }
  ]
}) }}
```

{% endraw %}

### Alt text tips

- Be concise but informative
- Describe the content, not the appearance ("photo of" or "image of" is unnecessary)
- Include relevant text shown in the image
- For complex images like charts, summarise the key data

### When to use empty alt text

Use empty alt text (`alt=""`) only for decorative images that add no information. Most images in design history posts are informative and need alt text.

## Structuring content with headings

Headings help all users scan content, and they allow screen reader users to navigate between sections.

### Use headings in order

Start with heading level 2 (`##`) and follow the hierarchy. Do not skip levels.

**Correct:**

```markdown
## Main section

### Subsection

### Another subsection

## Next main section
```

**Incorrect:**

```markdown
## Main section

#### Skipped to level 4

## Back to level 2
```

### Write descriptive headings

Headings should describe the content that follows:

**Good:**

```markdown
## Why we changed the application form
```

**Avoid:**

```markdown
## Changes
```

### Do not use headings for styling

If you want text to stand out, use bold or other formatting. Headings should only be used for structure.

## Writing clear link text

Link text should describe where the link goes.

### Be specific

**Good:**

```markdown
Read the [GOV.UK style guide](https://www.gov.uk/guidance/style-guide)
```

**Avoid:**

```markdown
Read the GOV.UK style guide [here](https://www.gov.uk/guidance/style-guide)
```

### Avoid generic link text

Screen reader users often navigate by links alone. Generic text like "click here" or "read more" does not help them understand where the link goes.

**Good:**

```markdown
[How to publish a design history post](/how-to/how-to-publish-a-design-history-post-using-the-github-website/)
```

**Avoid:**

```markdown
[Click here](/how-to/how-to-publish-a-design-history-post-using-the-github-website/) to learn how to publish a post.
```

## Using lists effectively

Lists help break up content and make it easier to scan.

### Use lists for related items

```markdown
The form includes:

- personal details
- contact information
- work history
- references
```

### Use numbered lists for sequences

```markdown
To submit your application:

1. Check your answers
2. Read the declaration
3. Select 'Submit application'
```

### Keep list items parallel

Start each item with the same part of speech (verb, noun, etc.):

**Good:**

```markdown
Users can:

- view their applications
- edit draft applications
- withdraw submitted applications
```

**Avoid:**

```markdown
Users can:

- view their applications
- editing draft applications is possible
- withdrawal of submitted applications
```

## Tables

Tables should be used for data, not for layout.

### Include a header row

Always include a header row that describes each column:

```markdown
| Status | Count |
| --- | --- |
| Pending | 5 |
| Accepted | 3 |
| Rejected | 2 |
```

### Keep tables simple

Avoid complex tables with merged cells. If you need to present complex data, consider breaking it into multiple simpler tables or using a different format.

## Plain language

Write in clear, simple language that everyone can understand.

### Use short sentences

Break long sentences into shorter ones:

**Before:**

```markdown
When a candidate submits their application, the provider receives a notification and has 40 working days to review the application and make a decision, which they communicate to the candidate via email.
```

**After:**

```markdown
When a candidate submits their application, the provider receives a notification. The provider has 40 working days to review the application and make a decision. They communicate their decision to the candidate by email.
```

### Avoid jargon

Explain technical terms or use simpler alternatives:

```markdown
The API (application programming interface) returns data in JSON format.
```

### Follow the GOV.UK style guide

The [GOV.UK style guide](https://www.gov.uk/guidance/style-guide) and [DfE style guide](https://design.education.gov.uk/content-design/style-guide) provide detailed guidance on writing clearly.

## Colour and contrast

If you include diagrams or images you have created:

- do not rely on colour alone to convey information
- ensure text has sufficient contrast against the background
- use patterns or labels in addition to colour in charts

## Testing your content

Before publishing:

- read your content aloud to check it flows naturally
- check that all images have appropriate alt text
- verify heading levels are in order
- ensure links have descriptive text
- run your content through a readability checker if available
