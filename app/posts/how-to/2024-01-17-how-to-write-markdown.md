---
title: How to write Markdown
description: A short guide to using Markdown to format your content
date: 2025-01-17
---

We write design history posts in Markdown, a lightweight markup language. The website converts the Markdown into HTML for display on the site.

The following sections describe the basics of writing content in Markdown.

Contents:

- [Headings](#headings)
- [Paragraphs](#paragraphs)
- [Emphasis](#emphasis) - bold and italic
- [Blockquotes](#blockquotes)
- [Lists](#lists) - ordered and unordered
- [Links](#links)
- [Images](#images)
- [Tables](#tables)
- [Horizontal rules](#horizontal-rules)
- [Code blocks](#code-blocks) - inline and fenced

## Headings

Add hashes (`#`) before a word or phrase to create a heading. The number of hashes you use should correspond to the heading level. For example:

```
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
```

### Heading best practices

Always put a space between the hashes and the heading name. For example:

```
# This is a heading
```

You should also put blank lines before and after a heading for compatibility.

```
Put a blank line before...

## This is a heading

...and after a heading.
```

## Paragraphs

Use a blank line to separate one or more lines of text to create paragraphs.

```
I like using Markdown.

I’ll use it to format all of my documents from now on.
```

### Paragraph best practices

Do not indent paragraphs with spaces or tabs unless the paragraph is in a list.

## Emphasis

You can emphasise text by making it bold or italic.

### Bold text

To bold the text, add two asterisks or underscores before and after a word or phrase.

Add two asterisks without spaces around the letters to bold the middle of a word for emphasis.

```
This is **bold text**.

This is also __bold text__.
```

The output looks like this:

This is **bold text**.

This is also __bold text__.

#### Bold text best practices

For compatibility, use asterisks to bold your text.

Do not use bold text as a substitute for headings.

### Italic text

Add one asterisk or underscore before and after a word or phrase to italicise text.

Add one asterisk without spaces around the letters to italicise the middle of a word for emphasis.

```
This is *italic text*.

This is also _italic text_.
```

The output looks like this:

This is *italic text*.

This is also _italic text_.

#### Italic text best practices

For compatibility, use asterisks to make your text italic.

## Blockquotes

Add a `>` before a paragraph to create a blockquote.

```
> Art is very important, but design shapes our world.—Paola Antonelli
```

The output looks like this:

> Art is very important, but design shapes our world.—Paola Antonelli

### Blockquotes with multiple paragraphs

Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.

```
> Fall in love with some activity, and do it! Nobody ever figures out what life is all about, and it doesn't matter. Explore the world.
>
> Nearly everything is really interesting if you go into it deeply enough. Work as hard and as much as you want to on the things you like to do the best.
>
> Don’t think about what you want to be, but what you want to do. Keep up some kind of a minimum with other things so that society doesn’t stop you from doing anything at all.
>
> —Richard P. Feynman
```

The output looks like this:

> Fall in love with some activity, and do it! Nobody ever figures out what life is all about, and it doesn't matter. Explore the world.
>
> Nearly everything is really interesting if you go into it deeply enough. Work as hard and as much as you want to on the things you like to do the best.
>
> Don’t think about what you want to be, but what you want to do. Keep up some kind of a minimum with other things so that society doesn’t stop you from doing anything at all.
>
> —Richard P. Feynman

### Block quotes with other markdown elements

Blockquotes can contain other Markdown-formatted elements. However, you cannot use all of them; experiment to see which ones work.

```
> Good design:
>
> 1. Fulfils its function
> 2. Respects its materials
> 3. Is suited to method of production
> 4. Combines these in imaginative expression
>
> —Eliot Noyes, 1938
```

The output looks like this:

> Good design:
>
> 1. Fulfils its function
> 2. Respects its materials
> 3. Is suited to method of production
> 4. Combines these in imaginative expression
>
> —Eliot Noyes, 1938

### Blockquote best practices

Put blank lines before and after blockquotes.

## Lists

You can organise items into ordered and unordered lists.

### Ordered lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one. For example:

```
1. First item
2. Second item
3. Third item
4. Fourth item
```

The output looks like this:

1. First item
2. Second item
3. Third item
4. Fourth item

#### Ordered list best practices


### Unordered lists

To create an unordered list, add dashes (`-`), asterisks (`*`), or plus signs (`+`) in front of line items. For example:

```
- First item
- Second item
- Third item
- Fourth item
```

The output looks like this:

- First item
- Second item
- Third item
- Fourth item

Indent one or more items to create a nested list. For example:

```
- First item
- Second item
  - First nested item
  - Second nested item
- Third item
- Fourth item
```

The output looks like this:

- First item
- Second item
  - First nested item
  - Second nested item
- Third item
- Fourth item

If you need to start an unordered list item with a number followed by a period (`.`), you can use a backslash (`\`) to escape the period.

#### Unordered list best practices


## Links

To create a link, enclose the link text in brackets and follow it immediately with the URL in parentheses. For example:

```
[GOV.UK Design System](https://design-system.service.gov.uk/)
```

The output looks like this:

[GOV.UK Design System](https://design-system.service.gov.uk/)

### Adding titles

You can optionally add titles to a link. This will appear as a tooltip when users hover over the link.

To add a title, enclose it in straight quotation marks after the URL. For example:

```
[GOV.UK Design System](https://design-system.service.gov.uk/ "Design your service using GOV.UK styles, components and patterns")
```

The output looks like this:

[GOV.UK Design System](https://design-system.service.gov.uk/ "Design your service using GOV.UK styles, components and patterns")

### Link best practices

For compatibility, try to URL encode any spaces in your URL with `%20`.

Parentheses in the middle of a URL can also cause problems. For compatibility, try to encode the opening parenthesis (`(`) with `%28` and the closing parenthesis (`)`) with `%29`.

## URLs and emails

To quickly turn a URL or email address into a link, enclose it in angle brackets. For example:

```
<https://www.example.com>

<hello@example.com>
```

The output looks like this:

<https://www.example.com>

<hello@example.com>

## Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. After the path or URL, you can optionally add a title in quotation marks. For example:

```
![Becoming a teacher design history opengraph image](opengraph-image.png)
```

The output looks like this:

![Becoming a teacher design history opengraph image](opengraph-image.png)

### Image best practices


## Tables

### Table best practices


## Horizontal rules

To create a horizontal rule, use three or more dashes (`---`), asterisks (`***`), or underscores (`___`) on a line by themselves. For example:

```
---
```

The output looks like this:

---

### Horizontal rule best practices

For compatibility, you should also put blank lines before and after a horizontal rule.

```
Put a blank line before...

---

...and after a horizontal rule.
```

## Code blocks

Markdown supports placing code blocks inline in a sentence and as a separate “fenced” block between sentences.

### Inline code

Use back ticks (`) to create inline code styles within a paragraph.

```
This is `inline code` within a paragraph of text.
```

The output looks like this:

This is `inline code` within a paragraph of text.

### Fenced code block

To create a specific multi-line code block, add three back ticks (\```) before and after the code block (called a “fenced code block” in Markdown).

Add the code language after the first set of back ticks for fenced code blocks so that Markdown correctly highlights code syntax. For example: \```javascript

This is a fenced code block:

```javascript
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
```
