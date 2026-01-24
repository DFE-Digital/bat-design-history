---
title: How to add related links
description: A guide to adding related links to your design history posts
date: 2025-01-21
related:
  items:
    - text: What to include in a design history post
      href: /how-to/what-to-include-in-a-design-history-post/
    - text: How to write Markdown
      href: /how-to/how-to-write-markdown/
---

Related links help readers discover relevant content. They appear in a sidebar on the right side of your post (on larger screens) or at the bottom of the post (on smaller screens).

## Adding related links

Add related links in the front matter of your post using the `related` field:

```yaml
---
title: Your post title
description: A description of your post
date: 2025-01-21
related:
  items:
    - text: First related link
      href: /path/to/first-page/
    - text: Second related link
      href: /path/to/second-page/
---
```

Each item needs:

- `text` - the link text that readers will see
- `href` - the URL or path to the linked page

## Linking to internal pages

When linking to other design history posts, use the path format:

```yaml
related:
  items:
    - text: Why we write design histories
      href: /how-to/why-we-write-design-histories/
    - text: Adding support for iQTS
      href: /register-trainee-teachers/adding-support-for-iqts/
```

The path follows the pattern `/{service-name}/{post-slug}/`, where the post slug is the filename without the date prefix and `.md` extension.

## Linking to external pages

You can also link to external websites:

```yaml
related:
  items:
    - text: GOV.UK Design System
      href: https://design-system.service.gov.uk/
    - text: DfE Digital blog
      href: https://dfedigital.blog.gov.uk/
```

## Combining internal and external links

You can mix internal and external links:

```yaml
related:
  items:
    - text: Why we write design histories
      href: /how-to/why-we-write-design-histories/
    - text: Government design principles
      href: https://www.gov.uk/guidance/government-design-principles
    - text: What is a design history?
      href: https://x-govuk.github.io/govuk-design-history/introduction/
```

## Best practices

### Choose relevant links

Include links that help readers understand the context or find related information:

- Previous posts about the same feature
- Research findings that informed the design
- Related guidance or documentation
- Posts from other services solving similar problems

### Keep the list focused

Aim for 2-5 related links. Too many links can overwhelm readers and reduce their usefulness.

### Use clear link text

Write link text that describes the destination:

**Good:**

```yaml
- text: How to write Markdown
  href: /how-to/how-to-write-markdown/
```

**Avoid:**

```yaml
- text: Click here
  href: /how-to/how-to-write-markdown/
```

### Check your links work

Before submitting your post, verify that:

- Internal paths are correct and the target pages exist
- External URLs are valid and accessible
- Link text accurately describes the destination

## Common mistakes

### Incorrect indentation

YAML requires consistent indentation using spaces:

**Incorrect:**

```yaml
related:
items:
- text: Link text
href: /path/
```

**Correct:**

```yaml
related:
  items:
    - text: Link text
      href: /path/
```

### Missing the `/how-to/` prefix

Posts in the how-to section need the `/how-to/` prefix:

**Incorrect:**

```yaml
- text: How to write Markdown
  href: /how-to-write-markdown/
```

**Correct:**

```yaml
- text: How to write Markdown
  href: /how-to/how-to-write-markdown/
```

### Forgetting the trailing slash

Internal paths should end with a trailing slash:

**Incorrect:**

```yaml
- text: Example post
  href: /service-name/example-post
```

**Correct:**

```yaml
- text: Example post
  href: /service-name/example-post/
```
