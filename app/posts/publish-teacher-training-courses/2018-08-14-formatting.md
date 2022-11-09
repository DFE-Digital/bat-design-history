---
title: Formatting
description: Paragraphs, lists and links.
date: 2018-08-14
screenshots:
  items:
    - text: Animation showing editor features
      src: markdown-editor.gif
    - text: Course with Simple MDE editor
      src: course.png
    - text: Preview of markdown
      src: preview.png
    - text: About your organisation with Simple MDE editor
      src: about-your-organisation.png
---

From user research we’ve found that users need to format their text using paragraphs, lists and links.

Most users have naturally formatted their content into paragraphs without further guidance. They assume that paragraphs will just work.

Users asked about lists, and looked for guidance. Without guidance users have tried to guess how lists would format, using dashes, asterisks and copied bullet points to create them.

Users have requested links so they can point to existing text on their or their accrediting provider’s website. eg For information about disabled access. They have not guessed how to input links.

## Pasting URLs

We could allow users to paste URLs into the textarea. If the URL is valid then it can become clickable.

Something like this:
[/publish-teacher-training-courses/formatting](/publish-teacher-training-courses/formatting)

The problem with these sorts of links is that they aren’t accessible. They don’t have any useful labels to indicate what the link is for. The URL is often long and hard to read.

## HTML

We could allow users to use raw HTML: `<a href="/path/to/file">Link</a>`. This is prone to more user error than markdown.

It is the undocumented approach used by users on the existing UCAS system.

## Markdown

We could use markdown. An off-the-shelf library could render our markdown. [A parser exists in search-and-compare-ui](https://github.com/DFE-Digital/search-and-compare-ui/blob/6c14c801c0b89e3f96effe9f25d5f66a5832e5fe/src/Utils/MarkdownFormatter.cs).

Markdown works with dashes and asterisks for lists which matches our user’s expectations.

Links in markdown can be confusing. It’s hard to remember which way around the brackets go, is it: \[\]() or ()\[\] – it’s the first one.

Preview would need to render markdown.

Markdown would let us add more complex features easily in the future.

We need to test the link syntax with users to see how easy it is to use. We might need to provide tools to make it more easy to add links in the future.

### Simple MDE

Simple MDE (markdown editor) is a frontend library that enhances textareas to make writing markdown easier. It includes syntax highlighting and buttons for inserting different features. [Simple MDE on Github](https://github.com/sparksuite/simplemde-markdown-editor).

We can restrict features down to paragraphs, lists and links only. The library also provides an inline preview of how the markdown will render.

We’ll test how this library performs out of the box in user research.

*[HTML]: Hyper Text Markup Language
*[MDE]: Markdown Editor
*[URL]: Universal Resource Locator
*[URLs]: Universal Resource Locators
