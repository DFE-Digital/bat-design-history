---
title: How to add tables
description: A guide to adding tables to your design history posts using Markdown or the govukTable macro
date: 2025-01-26
related:
  items:
    - text: How to write Markdown
      href: /how-to/how-to-write-markdown/
    - text: How to use Nunjucks macros in your design history posts
      href: /how-to/how-to-use-nunjucks-macros-in-your-design-history-posts/
---

Tables help present structured data clearly. This guide explains two ways to add tables to your posts and when to use each.

## Method 1: Markdown tables

Markdown tables are the simplest option. They work well for straightforward data.

### Basic Markdown table

Use pipes (`|`) to separate columns and hyphens (`---`) for the header row:

```markdown
| Name | Role |
| --- | --- |
| Apply | Candidate-facing service |
| Manage | Provider-facing service |
| Publish | Course management |
```

This renders as:

| Name | Role |
| --- | --- |
| Apply | Candidate-facing service |
| Manage | Provider-facing service |
| Publish | Course management |

### Aligning columns

Add colons to the header separator to align text:

```markdown
| Service | Users | Satisfaction |
| :--- | ---: | :---: |
| Apply | 12,500 | 85% |
| Manage | 3,200 | 78% |
| Publish | 1,800 | 82% |
```

- `:---` aligns left (default)
- `---:` aligns right
- `:---:` centres text

### Formatting within Markdown tables

You can use inline formatting inside table cells:

```markdown
| Feature | Status |
| --- | --- |
| Personal details | **Complete** |
| Work history | *In progress* |
| References | [Not started](/path/) |
```

### Limitations of Markdown tables

Markdown tables cannot:

- span cells across rows or columns
- include block-level content like lists or paragraphs
- have captions
- apply custom styles or classes

If you need any of these, use the `govukTable` macro.

## Method 2: The govukTable macro

The `govukTable` macro from the GOV.UK Design System provides more features and follows GOV.UK styling conventions.

### Basic govukTable

{% raw %}

```nunjucks
{% from "dist/govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  head: [
    { text: "Service" },
    { text: "Users" },
    { text: "Satisfaction" }
  ],
  rows: [
    [
      { text: "Apply" },
      { text: "12,500" },
      { text: "85%" }
    ],
    [
      { text: "Manage" },
      { text: "3,200" },
      { text: "78%" }
    ]
  ]
}) }}
```

{% endraw %}

### Adding a caption

{% raw %}

```nunjucks
{% from "dist/govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Service usage summary for 2024 to 2025",
  head: [
    { text: "Service" },
    { text: "Users" }
  ],
  rows: [
    [
      { text: "Apply" },
      { text: "12,500" }
    ]
  ]
}) }}
```

{% endraw %}

### Using row headers

Set `firstCellIsHeader` to make the first column a row header. This improves accessibility for screen readers:

{% raw %}

```nunjucks
{% from "dist/govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Application statuses",
  firstCellIsHeader: true,
  head: [
    { text: "Status" },
    { text: "Count" }
  ],
  rows: [
    [
      { text: "Received" },
      { text: "45" }
    ],
    [
      { text: "Interviewing" },
      { text: "12" }
    ],
    [
      { text: "Offered" },
      { text: "8" }
    ]
  ]
}) }}
```

{% endraw %}

### Formatting numeric data

Use `format: "numeric"` to right-align numbers:

{% raw %}

```nunjucks
{% from "dist/govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  head: [
    { text: "Month" },
    { text: "Applications", format: "numeric" },
    { text: "Offers", format: "numeric" }
  ],
  rows: [
    [
      { text: "January" },
      { text: "1,234", format: "numeric" },
      { text: "567", format: "numeric" }
    ],
    [
      { text: "February" },
      { text: "1,456", format: "numeric" },
      { text: "623", format: "numeric" }
    ]
  ]
}) }}
```

{% endraw %}

## Choosing between Markdown and govukTable

| Use Markdown when... | Use govukTable when... |
| --- | --- |
| Data is simple text | You need a table caption |
| No special formatting needed | Numbers should be right-aligned |
| Quick and easy to write | Row headers improve accessibility |
| Few columns and rows | Data follows GOV.UK conventions |

## Best practices

### Keep tables simple

- Avoid tables with many columns, as they can be hard to read on smaller screens
- If a table is getting complex, consider whether the data could be presented differently

### Use clear headings

- Make column headers descriptive
- Avoid abbreviations unless they are widely understood

### Include a caption when useful

A caption helps readers understand what the table shows, especially if the table is not immediately preceded by explanatory text.

### Right-align numbers

Right-aligning numeric data makes it easier to compare values. Use `format: "numeric"` with `govukTable` or `---:` alignment with Markdown.

### Consider accessibility

- Use row headers when the first column identifies each row
- Do not use tables for layout
- Make sure the data makes sense when read in order (left to right, top to bottom)
