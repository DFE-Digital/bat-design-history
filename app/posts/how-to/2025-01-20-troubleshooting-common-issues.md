---
title: Troubleshooting common issues
description: Solutions to common problems when writing and publishing design history posts
date: 2025-01-20
related:
  items:
    - text: How to run the site locally
      href: /how-to/how-to-run-the-site-locally/
    - text: How to write Markdown
      href: /how-to/how-to-write-markdown/
---

This guide covers common issues you might encounter when writing and publishing design history posts, and how to fix them.

## Build errors

### The site fails to build

If you see an error when running `npm run dev` or when the Netlify build fails:

1. Check the error message for the file and line number causing the problem.
2. Common causes include:
   - Invalid YAML in the front matter (missing colons, incorrect indentation)
   - Unclosed quotes in the front matter
   - Invalid Nunjucks syntax

**Example of invalid front matter:**

```yaml
---
title: My post title
description  A description without a colon
---
```

**Fixed version:**

```yaml
---
title: My post title
description: A description with a colon
---
```

### YAML indentation errors

YAML is sensitive to indentation. Use spaces, not tabs, and keep indentation consistent.

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

## Image problems

### Images not displaying

If your images are not showing:

1. Check the image filename matches exactly (including case sensitivity).
2. Verify the image is in the correct folder: `app/images/{service-name}/{post-name}/`.
3. Make sure the folder name matches the post filename (without the date prefix and `.md` extension).

**Example:**

For a post named `2025-01-20-my-new-feature.md`, images should be in `app/images/{service-name}/my-new-feature/`.

### Image path is wrong

When referencing images in your post, use just the filename:

**Incorrect:**

```markdown
![Screenshot](app/images/service/post/screenshot.png)
```

**Correct:**

```markdown
![Screenshot](screenshot.png)
```

### Images are too large

Large images slow down the site. Before uploading:

- Resize images to a reasonable width (1200-1600 pixels is usually sufficient)
- Compress images using a tool like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Use PNG for screenshots and JPEG for photographs

## Link problems

### Broken internal links

If links to other posts are not working:

1. Check the path starts with the correct prefix (for example, `/how-to/` for how-to posts).
2. Verify the post slug matches the filename (without the date and `.md`).
3. Make sure the target post exists.

**Example:**

For a post at `app/posts/how-to/2025-01-15-why-we-write-design-histories.md`, the correct link is:

```markdown
[Why we write design histories](/how-to/why-we-write-design-histories/)
```

### Related links not appearing

If your related links are not displaying:

1. Check the indentation in your front matter.
2. Make sure each item has both `text` and `href` fields.

**Correct format:**

```yaml
related:
  items:
    - text: Link text
      href: /path/to/page/
    - text: Another link
      href: /another/path/
```

## Formatting problems

### Markdown not rendering

If your Markdown is displaying as plain text:

1. Make sure there is a blank line after the closing `---` of the front matter.
2. Check for missing blank lines between paragraphs or before lists.
3. Verify you are using the correct Markdown syntax.

### Code blocks not highlighting

For syntax highlighting to work, specify the language after the opening backticks:

**Without highlighting:**

````markdown
```
const x = 1;
```
````

**With highlighting:**

````markdown
```javascript
const x = 1;
```
````

### Lists not formatting correctly

Lists need a blank line before them and consistent indentation:

**Incorrect:**

```markdown
Some text
- Item 1
- Item 2
```

**Correct:**

```markdown
Some text

- Item 1
- Item 2
```

## GitHub and pull request issues

### Cannot create a branch

If you cannot create a branch:

1. Check you have write access to the repository.
2. Make sure you are not trying to use a branch name that already exists.
3. Contact a team member if you need access.

### Merge conflicts

If GitHub shows merge conflicts:

1. This usually means someone else has edited the same file.
2. You will need to resolve the conflicts by choosing which changes to keep.
3. Ask a team member for help if you are unsure how to resolve conflicts.

### Deploy preview not updating

If your changes are not appearing in the deploy preview:

1. Check the Netlify build status on the pull request.
2. If the build failed, click on the details to see the error.
3. Wait a few minutes - builds can sometimes be slow.
4. Try adding a new commit to trigger a fresh build.

## Getting help

If you are stuck:

1. Check the error message carefully - it often tells you exactly what is wrong.
2. Search for similar issues in previous pull requests.
3. Ask a team member for help.
