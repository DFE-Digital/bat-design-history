---
title: How to review a pull request
description: A guide to reviewing design history pull requests, giving feedback, and approving changes
date: 2025-01-29
related:
  items:
    - text: How to publish a design history post using the GitHub website
      href: /how-to/how-to-publish-a-design-history-post-using-the-github-website/
    - text: How to publish a design history post using a text editor
      href: /how-to/how-to-publish-a-design-history-post-using-a-text-editor/
---

Reviewing pull requests helps ensure design history posts are clear, accurate, and well-structured. This guide explains what to look for and how to give useful feedback.

## Why we review pull requests

Reviewing posts before they are published helps:

- catch errors in content, formatting, or links
- improve clarity and readability
- ensure posts follow our conventions and style guides
- share knowledge across the team

## Checking the deploy preview

Every pull request automatically generates a deploy preview on Netlify. Start your review by checking the preview:

1. Open the pull request on GitHub.
2. Find the Netlify deploy preview link in the pull request comments or checks section.
3. Open the preview and navigate to the new or updated post.
4. Read the post as a user would, checking that it displays correctly.

## What to check

### Content

- Does the post clearly explain what changed and why?
- Is the context sufficient for someone unfamiliar with the project?
- Are design decisions explained, not just described?
- Is there anything missing that would help the reader?

### Structure

- Does the post use headings to break up content logically?
- Are headings in the correct order (no skipped levels)?
- Is the post a reasonable length? Could it be shorter?
- Do lists, tables, and other formatting aid readability?

### Writing style

- Does the content follow the [GOV.UK style guide](https://www.gov.uk/guidance/style-guide)?
- Is the writing clear and concise?
- Are sentences short enough to scan easily?
- Is jargon avoided or explained?

### Screenshots and images

- Do all images display correctly in the deploy preview?
- Do images have appropriate alt text?
- Are screenshots clear and legible?
- Do captions add useful context?

### Front matter

- Is the title descriptive and concise?
- Does the description accurately summarise the post?
- Is the date correct?
- Are related links relevant and working?

### Links

- Do internal links point to the correct pages?
- Do external links work and point to the intended destinations?
- Is link text descriptive (not "click here" or "this page")?

### Accessibility

- Are heading levels used correctly?
- Do images have meaningful alt text?
- Is link text descriptive?
- Are tables used for data, not layout?

## Giving feedback

### Be specific

Point to the exact text or section you are commenting on:

> In the "How it works" section, the second paragraph mentions "the old design" without explaining what it looked like. Could you add a brief description or link to the previous post?

### Suggest improvements

Where possible, suggest alternative wording or approaches:

> "We updated the page" could be more specific. For example: "We added an error summary to the top of the page to highlight missing fields."

### Distinguish between required and optional changes

Make it clear which comments are blocking and which are suggestions:

- Required: "The link to the GOV.UK Design System is broken. Please fix before merging."
- Suggestion: "You could consider adding a screenshot of the error state here, but the post works without it."

### Be constructive

Focus on improving the post, not criticising the author:

- Instead of: "This section is confusing."
- Try: "I found it hard to follow the reasoning in this section. Could you add a sentence explaining why you chose option A over option B?"

### Acknowledge good work

If the post is well-written or covers an important topic, say so. Positive feedback helps build a culture of sharing.

## Approving a pull request

When you are happy with the post:

1. Select the 'Review changes' button on the 'Files changed' tab.
2. Select 'Approve'.
3. Optionally add a comment, such as "Looks good, clear explanation of the design decisions."
4. Select 'Submit review'.

The author can then merge the pull request.

## Requesting changes

If the post needs updates before publishing:

1. Select the 'Review changes' button.
2. Select 'Request changes'.
3. Add a summary of what needs to be addressed.
4. Select 'Submit review'.

The author will update the post and request another review when ready.

## Tips for a good review

- Read the whole post before commenting
- Check the deploy preview, not just the raw Markdown
- Consider the audience - would someone outside the team understand the post?
- Keep your review focused - a few clear comments are better than many minor ones
- Respond to reviews promptly to keep the publishing process moving
