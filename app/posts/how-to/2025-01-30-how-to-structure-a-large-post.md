---
title: How to structure a large post
description: A guide to organising complex design history posts so they are easy to read and navigate
date: 2025-01-30
related:
  items:
    - text: What to include in a design history post
      href: /how-to/what-to-include-in-a-design-history-post/
    - text: How to write accessible content
      href: /how-to/how-to-write-accessible-content/
---

Some design changes are complex and need longer posts to explain. This guide helps you structure large posts so they remain clear and easy to navigate.

## When a post is too large

Consider restructuring if your post:

- covers more than one distinct change
- is difficult to summarise in a single sentence
- takes a long time to scroll through
- mixes unrelated topics

In these cases, you might split the content into multiple posts. But if the changes are closely related and make more sense together, a well-structured long post is better than several fragmented ones.

## Structuring your post

### Start with context

Open with a brief explanation of what prompted the work:

```markdown
## Why we did this

We found through user research that candidates were abandoning the
application form at the work history section. Analytics showed a
40% drop-off rate at this step.
```

### Explain what changed

Describe the changes, grouping related items under clear headings:

```markdown
## What we changed

### Simplified the work history form

We reduced the number of required fields from 12 to 5...

### Added guidance for gaps in work history

We added hint text explaining that candidates do not need to
account for every gap...

### Removed the employer address field

User research showed this field caused confusion because
many candidates had multiple work locations...
```

### Cover design decisions

Explain why you chose this approach over alternatives:

```markdown
## Design decisions

### Why we chose a single-page form

We considered both a multi-page and single-page approach...

### Why we removed the employer address

We weighed the data needs against the user burden...
```

### Show the outcome

If you have data or research findings, include them:

```markdown
## What we found

We tested the new design with 6 participants. Key findings:

- all 6 completed the work history section without difficulty
- average completion time reduced from 12 minutes to 6 minutes
- no participants asked for help with the simplified form
```

## Common structures

### The problem-solution structure

Works well for posts about fixing issues:

```markdown
## The problem
## What we tried
## What we changed
## What we found
```

### The iteration structure

Works well for posts about refining a design:

```markdown
## Where we started
## What we learned
## What we changed
## Next steps
```

### The feature structure

Works well for posts about new functionality:

```markdown
## Why we did this
## How it works
## Design decisions
## Further considerations
```

### The research structure

Works well for posts focused on research findings:

```markdown
## What we wanted to learn
## How we tested
## What we found
## What we changed
```

## Using headings effectively

### Follow the heading hierarchy

Start with level 2 headings (`##`) for main sections and level 3 (`###`) for subsections. Do not skip levels.

### Write descriptive headings

Headings should tell the reader what to expect:

| Instead of... | Try... |
| --- | --- |
| Background | Why we redesigned the application form |
| Changes | What we changed in the work history section |
| Research | What we learned from usability testing |
| Next steps | What we plan to do next |

### Keep headings concise

Aim for headings that are specific but not overly long. A heading should make sense on its own, without needing the surrounding text.

## Breaking up long sections

### Use bullet points and numbered lists

Lists are easier to scan than long paragraphs:

```markdown
We changed the form to:

- reduce the number of required fields from 12 to 5
- add hint text for each field
- remove the employer address field
- group related fields together
```

### Use screenshots at key points

Place screenshots where they help illustrate the text, rather than grouping them all at the end:

```markdown
### The new work history form

We simplified the form to focus on the essential information.

![The redesigned work history form showing 5 fields](new-work-history-form.png)

Users now only need to provide...
```

### Use tables for comparisons

Tables work well for before-and-after comparisons:

```markdown
| Aspect | Before | After |
| --- | --- | --- |
| Required fields | 12 | 5 |
| Pages | 3 | 1 |
| Average completion time | 12 minutes | 6 minutes |
```

## When to split into multiple posts

Consider separate posts when:

- the changes cover different parts of the service
- the work happened at different times
- each change has its own research and rationale
- the post would be very long even with good structure

Link between related posts so readers can follow the full story.

## Best practices

- Write for people in a hurry - put the most important information first
- Use the simplest structure that works for your content
- Read through the post from start to finish before publishing
- Ask a colleague to review the structure as well as the content
- Check the deploy preview to see how the post reads in context
