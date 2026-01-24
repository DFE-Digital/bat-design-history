---
title: How to add screenshots
description: A guide to adding screenshots to your design history posts using frontmatter or the appScreenshots macro
date: 2025-01-22
related:
  items:
    - text: How to add images using the GitHub website
      href: /how-to/how-to-add-images-using-the-github-website/
    - text: How to use Nunjucks macros in your design history posts
      href: /how-to/how-to-use-nunjucks-macros-in-your-design-history-posts/
---

Screenshots help readers understand your design changes. This guide explains several ways to add screenshots to your posts:

- **Frontmatter screenshots** - list screenshots in the post metadata, displayed at the end of the post
- **The appScreenshots macro** - display multiple screenshots with titles, captions, and a contents list
- **Markdown images** - add individual images inline using simple Markdown syntax
- **HTML images** - use HTML for more control over image display

## When to use screenshots

Include screenshots when:

- showing new or changed screens in your service
- documenting a user journey through multiple steps
- comparing before and after designs
- illustrating different states (for example, error messages, empty states)

## Preparing your screenshots

Before adding screenshots to your post:

1. **Take clear screenshots** - capture the full screen or the relevant section
2. **Use descriptive filenames** - use lowercase with hyphens, for example `application-summary.png`
3. **Compress large images** - use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to reduce file size
4. **Save as PNG** - use PNG format for screenshots of interfaces

## Where to store screenshots

Place your screenshot files in the images folder for your post:

```text
app/images/{service-name}/{post-name}/
```

For example, for a post called `2025-01-22-new-application-form.md` in the Apply for teacher training service:

```text
app/images/apply-for-teacher-training/new-application-form/
```

## Method 1: Frontmatter screenshots

The simplest way to add screenshots is to list them in the post's frontmatter. Screenshots added this way appear automatically at the end of the post, after your written content.

### Basic frontmatter usage

Add a `screenshots` section to your post's frontmatter:

```yaml
---
title: Creating a service start page
description: We created a simple start page as an entry point to the service
date: 2025-04-24
screenshots:
  items:
    - text: Start page
      src: start-page.png
---
```

The screenshots will be displayed with a "Screenshots" heading after your post content.

### Multiple screenshots in frontmatter

List multiple screenshots as separate items:

```yaml
---
title: New application journey
description: We redesigned the application journey
date: 2025-04-24
screenshots:
  items:
    - text: Start page
      src: start-page.png
    - text: Personal details
      src: personal-details.png
    - text: Check your answers
      src: check-your-answers.png
---
```

### When to use frontmatter screenshots

Use frontmatter screenshots when:

- your screenshots are supplementary to the main content
- you want to show the final designs without interrupting the narrative
- the post focuses on the reasoning, with screenshots as reference
- you have a simple list of screens to show

### When not to use frontmatter screenshots

Consider using the `appScreenshots` macro instead when:

- you need to show screenshots at specific points in your narrative
- you want to compare before and after designs inline
- you need captions explaining each screenshot
- screenshots need to appear in multiple sections of your post

## Method 2: Using the appScreenshots macro

The `appScreenshots` macro displays screenshots with titles, generates a contents list, and makes images clickable.

### Basic usage

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Application summary" },
    { text: "Personal details" },
    { text: "Contact information" }
  ]
}) }}
```

{% endraw %}

This expects files named:

- `application-summary.png`
- `personal-details.png`
- `contact-information.png`

The macro automatically converts the title text to a filename by making it lowercase and replacing spaces with hyphens.

### Specifying custom image IDs

If your filename does not match the title, use the `id` parameter:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      id: "summary-page",
      text: "Application summary page"
    },
    {
      id: "details-v2",
      text: "Personal details (version 2)"
    }
  ]
}) }}
```

{% endraw %}

This expects files named `summary-page.png` and `details-v2.png`.

### Adding captions

Add explanatory text below a screenshot using the `caption` parameter:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Error message",
      caption: "This error appears when the user submits the form without completing required fields."
    }
  ]
}) }}
```

{% endraw %}

Captions support Markdown formatting, so you can include links and emphasis.

### Custom alt text

By default, the macro generates alt text as "Screenshot of {title}". For more descriptive alt text, use the `alt` parameter:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Dashboard",
      alt: "Dashboard showing 3 applications in progress and 2 completed applications"
    }
  ]
}) }}
```

{% endraw %}

### Using a different file format

If your image is not a PNG, specify the full filename with the `src` parameter:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "User flow diagram",
      src: "user-flow.jpg"
    }
  ]
}) }}
```

{% endraw %}

### Changing the section title

By default, the macro creates a "Screenshots" heading. Change this with the `title` parameter:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "New designs",
  items: [
    { text: "Homepage" },
    { text: "Search results" }
  ]
}) }}
```

{% endraw %}

### Changing the heading level

By default, the section uses a level 2 heading (`<h2>`). Adjust this with `headingLevel`:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  headingLevel: 3,
  items: [
    { text: "Homepage" }
  ]
}) }}
```

{% endraw %}

## Complete example

Here is an example showing multiple parameters:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Updated application journey",
  headingLevel: 2,
  items: [
    {
      id: "start-page",
      text: "Start page",
      caption: "We simplified the start page content based on user research."
    },
    {
      id: "personal-details",
      text: "Personal details",
      alt: "Form asking for name, date of birth, and nationality"
    },
    {
      id: "review-answers",
      text: "Check your answers",
      caption: "Users can review all their answers before submitting."
    }
  ]
}) }}
```

{% endraw %}

## Method 3: Markdown images

For individual images within your content, use standard Markdown image syntax. This is useful for diagrams, illustrations, or single screenshots that do not need the structure of the `appScreenshots` macro.

### Basic Markdown image

```markdown
![Description of the image](filename.png)
```

For example:

```markdown
![User flow showing the application journey from start to submission](user-flow.png)
```

### Adding a title attribute

You can add a title that appears as a tooltip when users hover over the image:

```markdown
![Application dashboard](dashboard.png "Screenshot of the application dashboard")
```

### Making images clickable

Wrap the image in a link to make it clickable, allowing users to view the full-size version:

```markdown
[![Application dashboard](dashboard.png)](dashboard.png)
```

### When to use Markdown images

Use Markdown images when:

- you need a single image at a specific point in your content
- the image is a diagram, flowchart, or illustration rather than a UI screenshot
- you do not need the structured layout that `appScreenshots` provides

## Method 4: HTML images

For more control over image display, you can use HTML. This is rarely needed but can be useful in specific situations.

### Basic HTML image

```html
<img src="dashboard.png" alt="Application dashboard showing 3 pending applications">
```

### Clickable HTML image

Wrap the image in an anchor tag to make it clickable:

```html
<a href="dashboard.png">
  <img src="dashboard.png" alt="Application dashboard showing 3 pending applications">
</a>
```

### When to use HTML images

Use HTML images when:

- you need attributes not supported by Markdown (such as `width` or `loading`)
- you are embedding images in complex HTML structures
- Markdown syntax does not meet your specific requirements

In most cases, Markdown images or the `appScreenshots` macro will be sufficient.

## Choosing the right method

| Method | Best for |
| --- | --- |
| Frontmatter | Gallery of final designs at the end of the post |
| appScreenshots macro | Multiple related screenshots with titles and captions |
| Markdown images | Single images, diagrams, or illustrations inline |
| HTML images | Special cases needing attributes like width |

You can combine methods in the same post. For example, use Markdown for a diagram in your explanation, the macro for a set of journey screenshots, and frontmatter for a gallery of all final designs.

## Best practices

### Writing good titles

- Use clear, descriptive titles that explain what the screenshot shows
- Keep titles concise
- Use sentence case (capitalise only the first word)

### Writing alt text

- Describe what the screenshot shows, not just what it is
- Include relevant details that help readers understand the content
- Keep alt text concise but informative

### Organising screenshots

- Order screenshots to follow the user journey
- Group related screenshots together
- Consider splitting very long screenshot lists across multiple sections

### File naming

- Use lowercase letters and hyphens
- Avoid spaces and special characters
- Use descriptive names that indicate the content
