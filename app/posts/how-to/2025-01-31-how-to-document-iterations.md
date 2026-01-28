---
title: How to document iterations
description: A guide to showing design evolution, before and after changes, and linking related posts chronologically
date: 2025-01-31
related:
  items:
    - text: What to include in a design history post
      href: /how-to/what-to-include-in-a-design-history-post/
    - text: How to add screenshots
      href: /how-to/how-to-add-screenshots/
    - text: How to add related links
      href: /how-to/how-to-add-related-links/
---

Design work happens in iterations. Documenting how a design evolves over time helps readers understand the full story behind your decisions. This guide explains how to show iterations effectively.

## Why document iterations

Recording iterations helps others:

- understand why a design looks the way it does today
- avoid repeating approaches that did not work
- learn from the reasoning behind each change
- follow the evolution of a feature over time

## Showing before and after

### Using screenshots

Show the previous and new designs side by side in your post:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Previous design",
  items: [
    { text: "Application summary (before)" }
  ]
}) }}

{{ appScreenshots({
  title: "New design",
  items: [
    { text: "Application summary (after)" }
  ]
}) }}
```

{% endraw %}

### Using descriptions

Describe what changed and why:

```markdown
## What we changed

### Before

The application summary showed all sections on a single page with
status tags. Users had to scroll through the entire page to find
the section they wanted to edit.

### After

We moved to a task list pattern with expandable sections. Users
can now see their progress at a glance and go directly to the
section they need.
```

### Using tables for comparison

A table can summarise the key differences:

```markdown
| Aspect | Before | After |
| --- | --- | --- |
| Layout | Single page | Task list |
| Navigation | Scroll to find sections | Select section directly |
| Progress | Status tags only | Progress bar and tags |
| Completion time | 25 minutes | 18 minutes |
```

## Linking related posts

### Using related links

Add links to previous iterations in the frontmatter:

```yaml
related:
  items:
    - text: "Application form: round 1 research"
      href: /apply-for-teacher-training/application-form-round-1/
    - text: "Application form: initial design"
      href: /apply-for-teacher-training/application-form-initial-design/
```

### Linking within the post body

Reference previous posts in your content to provide context:

```markdown
## Background

In [our initial design](/apply-for-teacher-training/application-form-initial-design/),
we used a single-page form. [Round 1 research](/apply-for-teacher-training/application-form-round-1/)
showed that users found this overwhelming, so we moved to a
multi-page approach.

This post covers the third iteration of the form, based on
further testing with 8 candidates.
```

### Using tags

Tags help readers find all posts related to a feature. Add relevant tags in the frontmatter:

```yaml
tags:
  - application form
  - work history
```

Readers can then select a tag to see all posts using it.

## Structuring an iteration post

A clear structure for iteration posts helps readers understand the context:

### 1. Start with the background

Explain where the design was before this iteration. Link to previous posts:

```markdown
## Background

We first introduced the work history section in
[our initial application form design](/apply-for-teacher-training/initial-application-form/).
Since then, we've iterated based on 2 rounds of user research.
```

### 2. Explain what prompted the iteration

Describe the evidence that led to this change:

```markdown
## Why we iterated

In round 2 testing, we found that:

- 4 out of 6 users struggled to add gaps in their work history
- users were unsure whether to include part-time work
- the date picker caused errors on mobile devices
```

### 3. Describe what changed

Show the specific changes, ideally with screenshots:

```markdown
## What we changed

### Replaced the date picker with text inputs

We replaced the date picker component with separate text inputs
for month and year. This matches the pattern used across GOV.UK
services and tested well in previous research.

### Added guidance for gaps

We added content above the work history section explaining
that users should include gaps and part-time work.
```

### 4. Show the outcome

If you tested the iteration, share the results:

```markdown
## What we found

We tested the updated design with 6 candidates:

- all 6 completed the section without assistance
- no users had difficulty with the date inputs
- 5 out of 6 users noticed and read the guidance about gaps
```

### 5. Note next steps

Explain what comes next:

```markdown
## Next steps

We plan to:

- monitor completion rates after the changes go live
- test with users who have complex work histories
- consider whether to add the ability to import work history
  from a LinkedIn profile
```

## Naming conventions for iteration posts

When a feature goes through multiple iterations, use consistent naming:

```text
2025-01-15-redesigning-the-work-history-section.md
2025-03-10-iterating-the-work-history-section.md
2025-05-20-simplifying-work-history-date-entry.md
```

Each title should describe what the post covers, not just its sequence number. Avoid titles like "Work history v2" or "Work history iteration 3" because they do not help readers understand the content.

## Best practices

### Link backwards, not forwards

Each new post should link to previous iterations. Avoid going back to update old posts with forward links, as this changes published content.

### Be specific about what changed

Do not just say "we iterated the design." Explain exactly what changed and why:

- Instead of: "We updated the form based on user research."
- Try: "We removed the employer address field because 5 out of 6 users found it confusing, and the data was not used in the application decision."

### Include evidence

Reference the research, data, or feedback that prompted the iteration. This helps readers understand the reasoning, not just the outcome.

### Show the design, not just the decision

Include screenshots or descriptions of both the previous and new designs. This helps readers see the actual change, not just read about it.

### Document unsuccessful iterations

If you tried something that did not work, document it. These posts are often the most valuable because they help others avoid the same approach:

```markdown
## What we tried

We tested a wizard-style form that guided users through each field
one at a time. However, users found this slower and more frustrating
than the single-page approach because they could not easily review
their answers.

We reverted to the single-page form and focused on improving the
guidance and field labels instead.
```
