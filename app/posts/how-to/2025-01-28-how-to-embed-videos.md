---
title: How to embed videos
description: A guide to embedding YouTube videos in your design history posts
date: 2025-01-28
related:
  items:
    - text: How to add screenshots
      href: /how-to/how-to-add-screenshots/
    - text: How to use Nunjucks macros in your design history posts
      href: /how-to/how-to-use-nunjucks-macros-in-your-design-history-posts/
---

Videos can be useful for demonstrating interactions, walkthroughs, or presenting research findings. This guide explains how to embed videos in your design history posts.

## When to use videos

Consider including a video when:

- showing an interactive prototype in action
- demonstrating a user journey that is difficult to convey with static screenshots
- sharing a recorded presentation or walkthrough
- illustrating animations or transitions

Videos should complement your written content, not replace it. Always include a written explanation alongside any video.

## Using the appEmbed macro

The design history site includes an `appEmbed` macro for embedding YouTube videos. It uses a privacy-enhanced embed URL and displays a thumbnail with a play button.

### Embedding a YouTube video

{% raw %}

```nunjucks
{% from "embed/macro.njk" import appEmbed %}
{{ appEmbed({
  youtubeId: "nxmtXGy1cCY",
  title: "How to edit vacancies in Publish teacher training courses"
}) }}
```

{% endraw %}

The `youtubeId` is the part of the YouTube URL after `v=`. For example, for `https://www.youtube.com/watch?v=nxmtXGy1cCY`, the ID is `nxmtXGy1cCY`.

The `title` is important for accessibility. It should describe the video content so that screen reader users understand what the video shows.

### Embedding a custom video source

If the video is not on YouTube, use the `src` and `placeholder` parameters:

{% raw %}

```nunjucks
{% from "embed/macro.njk" import appEmbed %}
{{ appEmbed({
  src: "https://example.com/video.mp4",
  placeholder: "video-thumbnail.png",
  title: "Prototype walkthrough of the new application form"
}) }}
```

{% endraw %}

## Best practices

### Always include a title

The `title` parameter is used as the iframe's title attribute, which is essential for accessibility. Describe what the video shows:

- "Prototype walkthrough of the application summary page"
- "User research session showing the references journey"
- "Demonstration of the new search feature"

### Provide a written summary

Not all readers will watch the video. Include a written summary of the key points:

```markdown
The video below demonstrates the new application form. Key changes include:

- a simplified personal details section
- inline validation on required fields
- a progress indicator at the top of each page
```

### Use YouTube's privacy-enhanced mode

The `appEmbed` macro automatically uses YouTube's privacy-enhanced embed URL (`youtube-nocookie.com`), which reduces tracking. Use the macro rather than pasting raw embed code.

### Consider video length

- Keep videos short and focused
- For longer content, consider breaking it into separate videos
- If a video is long, note the key timestamps in your written content

### Check video accessibility

- Ensure videos have captions or subtitles
- Provide a transcript if possible
- Make sure the video title clearly describes the content

### Use videos sparingly

Videos add significant file size and require an internet connection to view. Use them when they add genuine value that screenshots and text cannot provide.
