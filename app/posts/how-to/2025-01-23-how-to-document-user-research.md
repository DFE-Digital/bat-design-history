---
title: How to document user research
description: A guide to including user needs, research findings, and evidence in your design history posts
date: 2025-01-23
related:
  items:
    - text: What to include in a design history post
      href: /how-to/what-to-include-in-a-design-history-post/
    - text: How to use Nunjucks macros in your design history posts
      href: /how-to/how-to-use-nunjucks-macros-in-your-design-history-posts/
---

Design history posts are more valuable when they include the research that informed design decisions. This guide explains how to document user research effectively.

## Why document research

Including research in your design history helps readers understand:

- the problems you were trying to solve
- what evidence supported your design decisions
- how user feedback shaped iterations
- what you learned that might help others

## Documenting user needs

### Using the appUserNeed macro

Use the `appUserNeed` macro to highlight user needs in a consistent, styled format:

{% raw %}

```nunjucks
{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a candidate
I need to track the status of my application
So that I know what action I need to take next"
}) }}
```

{% endraw %}

This renders as a styled blockquote that stands out from the surrounding text.

### Writing good user needs

Follow the standard format:

```text
As a [type of user]
I need [something]
So that [benefit or goal]
```

Be specific about:

- **Who** - the type of user (candidate, provider, referee)
- **What** - what they need to do or know
- **Why** - the underlying goal or benefit

**Example:**

{% raw %}

```nunjucks
{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a training provider
I need to see which candidates have accepted an offer
So that I can plan my cohort for the next academic year"
}) }}
```

{% endraw %}

### Multiple user needs

If your design addresses several user needs, include each one separately:

{% raw %}

```nunjucks
{% from "user-need/macro.njk" import appUserNeed %}

{{ appUserNeed({
  description: "As a candidate
I need to know why my application was rejected
So that I can improve future applications"
}) }}

{{ appUserNeed({
  description: "As a provider
I need to give specific feedback on rejections
So that candidates understand how to improve"
}) }}
```

{% endraw %}

## Structuring research findings

### Summarise key insights

Start with a summary of what you learned:

```markdown
## What we learned

We tested the new application summary with 8 candidates. Key findings:

- 6 out of 8 users found the status labels clear
- Users expected to see their referee's contact details
- The 'withdraw' button was overlooked by most participants
```

### Use hypotheses

Frame your design decisions as hypotheses that you tested:

```markdown
## Our hypothesis

If we show candidates a progress tracker
Then they will feel more confident about their application status
Because they can see what stages remain
```

Then document what you learned:

```markdown
## What we found

The progress tracker tested well. Participants said it helped them understand where they were in the process. However, 3 users were confused about the difference between 'submitted' and 'received'.
```

### Include quotes

Direct quotes from users add authenticity and help readers understand the user perspective:

```markdown
## User feedback

> "I kept checking back every day because I didn't know if anything had changed."

— Participant 4, round 2 testing

> "This makes it really clear what I need to do next."

— Participant 7, round 2 testing
```

### Document what did not work

Failed experiments are valuable. They help others avoid the same mistakes:

```markdown
## What we tried but did not work

### Collapsible sections

We tested using collapsible sections to reduce page length. Users found this confusing because:

- they did not realise there was more content
- some users thought collapsed sections were not relevant to them
- it added extra clicks to complete tasks

We reverted to showing all content expanded.
```

## Linking to evidence

### Reference research reports

If you have separate research reports or slide decks, link to them:

```markdown
## Research

We conducted usability testing with 6 candidates between 15-22 January 2025.

- [Research findings report (PDF)](/path/to/report.pdf)
- [Session recordings (internal only)](https://example.com/recordings)
```

### Link to related posts

If research spans multiple design iterations, link between posts:

```markdown
## Previous research

This builds on findings from [round 1 testing](/apply-for-teacher-training/round-1-application-testing/), where we identified issues with the personal details section.
```

## Showing research data

### Using tables for findings

Summarise quantitative findings in tables:

```markdown
| Task | Success rate | Average time |
| --- | --- | --- |
| Find application status | 8/8 (100%) | 12 seconds |
| Add a new referee | 6/8 (75%) | 45 seconds |
| Withdraw application | 5/8 (63%) | 28 seconds |
```

### Using bar charts

For survey results or simple data, use the `appBarChart` macro:

{% raw %}

```nunjucks
{% from "bar-chart/macro.njk" import appBarChart %}
{{ appBarChart({
  headers: ["Response", "Count"],
  rows: [
    ["Very satisfied", 12],
    ["Satisfied", 8],
    ["Neutral", 3],
    ["Dissatisfied", 1]
  ]
}) }}
```

{% endraw %}

## Best practices

### Be honest about limitations

Acknowledge the limitations of your research:

```markdown
## Limitations

- We only tested with candidates who had previously applied
- Testing was conducted remotely, which may have affected responses
- Sample size was small (6 participants)
```

### Protect participant privacy

- Never include personally identifiable information
- Use generic labels like "Participant 4" rather than names
- Remove or blur any personal data in screenshots

### Keep it concise

Focus on insights that directly informed design decisions. You do not need to include everything from your research sessions.

### Connect research to design

Always explain how research findings led to design changes:

```markdown
## What we changed

Based on the finding that users overlooked the withdraw button, we:

- moved it to a more prominent position
- changed the button style from secondary to warning
- added a confirmation step to prevent accidental withdrawals
```
