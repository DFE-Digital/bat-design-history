---
title: Internal accessibility testing using JAWS
description: We carried out an internal accessibility review using the JAWS screen reader and found a number of issues we plan to resolve
date: 2025-07-30
tags:
  - accessibility
---

## What we did

Recently we carried out a round of internal accessibility testing using the JAWS screen reader to identify how well the service works for users who rely on assistive technology.

We focused on the homepage, content pages with side navigation, and common components used across the service. This was a manual test using a staging version of the site.

## What we found

The review highlighted a number of areas that would benefit from changes to improve the experience for screen reader users.

### Missing or unclear alt text

- The teaching logo on the homepage doesn’t have any alt text or isn't marked as decorative.
- The how to preapre for teacher training content block image also lacks alt text and could similarly be decorative.

### Colour contrast issues

- The phase banner feedback link fails WCAG 2.1 AA contrast requirements due to the banner background colour.

### Link expectations

- The DfE logo currently links to the homepage of this service. We need to confirm whether it should instead link to the main DfE website.
- Some external links do not make it clear that they lead to another website. These should include visually hidden text for screen readers or use a visible indicator like “(opens in new tab)” where appropriate.

### Heading structure and navigation

- On content pages, such as 'How to prepare for training', both the side navigation header and main content header are marked as `<h2>`. This creates confusion for screen reader users as visually the two headings are different in size.
- The side navigation heading should be a lower heading level or be more clearly marked as navigational content.
- The side navigation section itself could be more clearly described using ARIA attributes or more descriptive headings to signal its purpose.
- On pages like 'Prepare for school placement', the main content starts directly with a paragraph. Without a heading above it, this content is harder to locate when navigating by heading levels.

## What we’ll do next

We plan to:

- Add or update alt text for logos and banners, or correctly mark them as decorative.
- Adjust the background colour to ensure the phase banner meets colour contrast requirements.
- Confirm the correct destination for the DfE logo link.
- Review and improve heading structures to better reflect page layout and visual hierarchy.
- Add appropriate markup or text to identify side navigation areas.
- Add accessible text to external links to make them clearer to screen reader users.

This testing was a helpful reminder of how small implementation decisions can have a big impact on accessibility. We’ll continue reviewing the service using assistive technologies and aim to address the issues found as part of our next iteration.
