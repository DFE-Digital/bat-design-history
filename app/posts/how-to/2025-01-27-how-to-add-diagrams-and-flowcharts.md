---
title: How to add diagrams and flowcharts
description: Options for creating and embedding diagrams in your design history posts
date: 2025-01-27
related:
  items:
    - text: How to add screenshots
      href: /how-to/how-to-add-screenshots/
    - text: How to add images using the GitHub website
      href: /how-to/how-to-add-images-using-the-github-website/
---

Diagrams and flowcharts help readers understand user journeys, system architecture, and decision logic. This guide covers how to create and include them in your posts.

## When to use diagrams

Diagrams are useful for showing:

- user journey flows through a service
- decision trees and branching logic
- system architecture or data flows
- process maps for how work is done
- relationships between services or components

## Creating diagrams

### Tools for creating diagrams

Several tools are available for creating diagrams:

- [Lucidchart](https://www.lucidchart.com/) - collaborative diagramming tool
- [Miro](https://miro.com/) - online whiteboard with diagramming features
- [Figma](https://www.figma.com/) - design tool that can create flowcharts
- [draw.io](https://app.diagrams.net/) - free, open source diagramming tool
- [Excalidraw](https://excalidraw.com/) - simple, hand-drawn style diagrams

### Exporting diagrams

When exporting your diagram:

1. Use PNG format for most diagrams
2. Use SVG format if the diagram contains text that should remain sharp at any size
3. Set a reasonable width - aim for 800-1200 pixels wide
4. Use a white or transparent background to match the site design
5. Compress the file before adding it to the repository

## Adding diagrams to your post

### Using Markdown

For a single diagram, use Markdown image syntax:

```markdown
![User journey showing the 5 steps from account creation to application submission](user-journey.png)
```

### Making diagrams clickable

Wrap the image in a link so readers can view the full-size version:

```markdown
[![User journey showing the 5 steps from account creation to application submission](user-journey.png)](user-journey.png)
```

### Using the appScreenshots macro

If you have multiple diagrams to show, use the `appScreenshots` macro:

{% raw %}

```nunjucks
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "User journey maps",
  items: [
    {
      text: "Current user journey",
      caption: "The existing flow has 8 steps and 2 decision points."
    },
    {
      text: "Proposed user journey",
      caption: "The new flow reduces this to 5 steps with a single decision point."
    }
  ]
}) }}
```

{% endraw %}

## Writing good alt text for diagrams

Diagrams need descriptive alt text because they often convey complex information.

### For simple flowcharts

Summarise the key steps and decisions:

```markdown
![Flowchart showing: user submits application, provider reviews within 40 days, then either makes an offer or rejects](application-flow.png)
```

### For complex diagrams

If the diagram is too complex for a short alt text, summarise the key point and explain the detail in the surrounding text:

```markdown
![Overview of the application process showing 3 stages and 12 steps](application-process.png)

The application process has 3 stages:

1. **Preparation** - the candidate creates an account, adds personal details, qualifications, and work history
2. **Submission** - the candidate adds references, reviews their answers, and submits
3. **Decision** - the provider reviews, interviews if needed, and makes a decision
```

### For architecture diagrams

Describe the key components and relationships:

```markdown
![System architecture showing Apply, Manage, and Publish services connected through a shared API](system-architecture.png)
```

## Best practices

### Keep diagrams simple

- Focus on the key information
- Remove unnecessary detail
- Use clear labels
- Limit the number of elements

### Use consistent styling

- Follow your team's conventions for colours and shapes
- Use the same style across related diagrams in a post

### Explain the diagram in text

Do not rely on the diagram alone to communicate information. Include a written explanation that covers the key points, so readers who cannot see the diagram still understand the content.

### Consider colour contrast

- Do not use colour alone to convey meaning
- Use labels, patterns, or shapes alongside colour
- Ensure text on coloured backgrounds has sufficient contrast

### Store source files

If possible, keep the source files for your diagrams (for example, `.drawio` or `.fig` files) so they can be updated later. Store these alongside your exported images or in a shared team location.
