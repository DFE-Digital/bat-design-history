---
title: How to write Markdown
description: A short guide to using Markdown to format your content
date: 2025-01-17
related:
  items:
    - text: How to use Nunjucks macros in your design history posts
      href: /how-to/how-to-use-nunjucks-macros-in-your-design-history-posts/
    - text: What to include in a design history post
      href: /how-to/what-to-include-in-a-design-history-post/
---

<!-- markdownlint-disable MD040 MD049 MD050 -->

We write design history posts in Markdown, a lightweight markup language that uses special characters to format plain text. The website converts the Markdown into HTML for display on the site.

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

### Heading best practice

Heading level 1 can only be used once on a page.

Always put a space between the hashes and the heading name. For example:

```
# This is a heading
```

You should also put blank lines before and after a heading for compatibility.

```
Put a blank line before

## This is a heading

And after a heading.
```

Do not use headings to resize text.

Do not skip heading levels. For example, heading level 3 follows heading level 2, etc.

## Paragraphs

Use a blank line to separate one or more lines of text to create paragraphs.

```
I like using Markdown.

I’ll use it to format all of my documents from now on.
```

### Paragraph best practice

Do not indent paragraphs with spaces or tabs unless the paragraph is in a list.

## Emphasis

You can emphasise text by making it bold or italic.

### Bold text

Add two asterisks or underscores before and after a word or phrase to mark the text in bold.

Add two asterisks without spaces around the letters to bold the middle of a word for emphasis.

```
This is **bold text**.

This is also __bold text__.
```

The output looks like this:

This is **bold text**.

This is also __bold text__.

#### Bold text best practice

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

#### Italic text best practice

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

### Blockquote best practice

Put blank lines before and after blockquotes.

## Lists

You can organise items into ordered and unordered lists.

### Ordered lists

To create an ordered list, add line items with numbers followed by periods. The numbers do not have to be in numerical order, but the list should start with the number one. For example:

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

#### Ordered list best practice

Put blank lines before and after ordered lists.

### Unordered lists

To create an unordered list, add dashes (`-`), asterisks (`*`), or plus signs (`+`) in front of line items. For example:

```
- first item
- second item
- third item
- fourth item
```

The output looks like this:

- first item
- second item
- third item
- fourth item

Indent one or more items to create a nested list. For example:

```
- first item
- second item
  - first nested item
  - second nested item
- third item
- fourth item
```

The output looks like this:

- first item
- second item
  - first nested item
  - second nested item
- third item
- fourth item

If you need to start an unordered list item with a number followed by a period (`.`), you can use a backslash (`\`) to escape the period.

#### Unordered list best practice

For compatibility, use hyphens to create unordered lists.

Put blank lines before and after ordered lists.

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

The output looks like this (hover over the link to see the tooltip):

[GOV.UK Design System](https://design-system.service.gov.uk/ "Design your service using GOV.UK styles, components and patterns")

### Link best practice

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

To add an image, add an exclamation mark (!), followed by alt text in square brackets, and the path or URL to the image asset in parentheses. After the path or URL, you can optionally add a title in quotation marks. For example:

```
![Becoming a teacher design history opengraph image](opengraph-image.png)
```

The output looks like this:

![Becoming a teacher design history open graph image](opengraph-image.png)

### Image best practice

For accessibility, make sure you [describe the contents of the image with alt text](https://design-system.service.gov.uk/styles/images/#alt-text).

## Tables

To add a table, use three or more hyphens (`---`) to create each column’s header and use pipes (`|`) to separate each column. You should also add a pipe on either end of the row for compatibility. For example:

```
| Name | Elevation | Continent | First summit |
| --- | --- | --- | --- |
| Aconcagua | 6,961 meters | South America | 1897 |
| Denali | 6,194 meters | North America | 1913 |
| Elbrus | 5,642 meters | Europe | 1874 |
| Everest | 8,850 meters | Asia | 1953 |
| Kilimanjaro | 5,895 meters | Africa | 1889 |
| Puncak Jaya | 4,884 meters | Australia | 1962 |
| Vinson | 4,897 meters | Antarctica | 1966 |
```

The output looks like this:

| Name | Elevation | Continent | First summit |
| --- | --- | --- | --- |
| Aconcagua | 6,961 meters | South America | 1897 |
| Denali | 6,194 meters | North America | 1913 |
| Elbrus | 5,642 meters | Europe | 1874 |
| Everest | 8,850 meters | Asia | 1953 |
| Kilimanjaro | 5,895 meters | Africa | 1889 |
| Puncak Jaya | 4,884 meters | Australia | 1962 |
| Vinson | 4,897 meters | Antarctica | 1966 |

### Alignment

You can align text in the columns to the left, right, or centre by adding a colon (`:`) to the left, right, or both sides of the hyphens within the header row. For example:

```
| Name | Elevation (meters) | Continent | First summit |
| :--- | ---: | :---: | ---: |
| Aconcagua | 6,961 | South America | 1897 |
| Denali | 6,194 | North America | 1913 |
| Elbrus | 5,642 | Europe | 1874 |
| Everest | 8,850 | Asia | 1953 |
| Kilimanjaro | 5,895 | Africa | 1889 |
| Puncak Jaya | 4,884 | Australia | 1962 |
| Vinson | 4,897 | Antarctica | 1966 |
```

The output looks like this:

| Name | Elevation (meters) | Continent | First summit |
| :--- | ---: | :---: | ---: |
| Aconcagua | 6,961 | South America | 1897 |
| Denali | 6,194 | North America | 1913 |
| Elbrus | 5,642 | Europe | 1874 |
| Everest | 8,850 | Asia | 1953 |
| Kilimanjaro | 5,895 | Africa | 1889 |
| Puncak Jaya | 4,884 | Australia | 1962 |
| Vinson | 4,897 | Antarctica | 1966 |

### Table best practice

You can format the text within tables. For example, you can add [emphasis](#emphasis), [links](#links), [images](#images), and [inline code](#inline-code) (not code blocks).

You cannot use headings, blockquotes, lists, horizontal rules, or HTML tags.

## Horizontal rules

To create a horizontal rule, use three or more dashes (`---`), asterisks (`***`), or underscores (`___`) on a line by themselves. For example:

```
---
```

The output looks like this:

---

### Horizontal rule best practice

You should also put blank lines before and after a horizontal rule for compatibility.

```
Put a blank line before

---

And after a horizontal rule.
```

## Code blocks

Markdown supports placing code blocks inline in a sentence and as separate “fenced” blocks between sentences. This article uses code blocks to demonstrate markdown.

### Inline code

Use backticks (`) to create inline code styles within a paragraph.

```
This is `inline code` within a paragraph of text.
```

The output looks like this:

This is `inline code` within a paragraph of text.

### Fenced code block

To create a specific multi-line code block, add three backticks (\```) before and after the code block (called a “fenced code block” in Markdown).

Add the code language after the first set of backticks for fenced code blocks so that Markdown correctly highlights code syntax. For example: \```javascript

This is a fenced code block using the JavaScript syntax:

```javascript
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
```

### Code block best practice

You should put blank lines before and after a horizontal rule for fenced code blocks.

<!-- markdownlint-enable MD040 MD049 MD050 -->
