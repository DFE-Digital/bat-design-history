---
title: Updating the service to improve accessibility
description: We have made some changes to the service, which aren’t visually apparent but improve accessibility
date: 2022-11-11
related:
  items:
    - text: Expanding abbreviations to improve accessibility
      href: /find-teacher-training/expanding-abbreviations-to-improve-accessibility/
    - text: Adding a submit button to the ‘sort by’ form to improve accessibility
      Href: /find-teacher-training/adding-a-submit-button-to-the-sort-by-form-to-improve-accessibility/
---

We regularly review Find postgraduate teacher training (Find) to ensure it meets accessibility standards.

The latest review revealed several changes were needed, which are not visually apparent but improve the accessibility of Find.

## What we changed

We have updated:

- the close filters button
- individual filter headings
- page titles
- error messages
- the ‘change’ search link

### Close filters button

Screen reader users navigating the expanded filters panel on a mobile device will notice a button with the name ‘Close’.

It is unclear to users that they can use the button to close the filter options, as we need to mark the filter content as a `dialog` element.

We have updated the close filters button to include the visually hidden text ‘Close filter menu’.

![Close filters button](close-filters-button.png "Close filters button")

In future, we will consider updating the filters panel to be a [`dialog` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

### Individual filter headings

The filter panel includes grouped filter options such as study type, qualifications and degree type. These options do not contain descriptive headings for screen reader users to understand that they are related to filtering the course results list.

We have updated the filter legends to include the visually hidden text ‘filter’.

For example:

```html
<legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
  Special educational needs<span class="govuk-visually-hidden"> filter</span>
</legend>
```

![Course results filters](course-results-filters.png "Course results filters")

### Page titles

All page titles (meta titles) should include the heading and service name, and end with GOV.UK.

The primary and secondary subject page titles are not unique, as they do not use the page heading. We have updated the titles to fix this.

For example:

```html
<title>
Primary courses with subject specialisms - Find postgraduate teacher training - GOV.UK
</title>
```

![Page title](page-title.png "Page title")

### Error messages

Some of the error messages used in Find do not comply with the GOV.UK Design System.

When an error occurs, we must show:

- a summary of the errors above the page heading, even if there is only one
- a message in red after the question text and hint text

We have:

- updated the error messages shown adjacent to the question with visually hidden ‘Error:’ text.
- made the error summaries shown above the page heading full width
- made sure the error messages in the error summary are worded the same as those which appear next to the inputs with errors

For example:

```html
<p class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Select find courses by location or by training provider
</p>
```

![Find courses by location or training provider error message](error-message--find-by-location-or-provider.png "Find courses by location or training provider error message")

![Which age group error message](error-message--age-group.png "Which age group error message")

![Primary specialisms error message](error-message--primary-specialisms.png "Primary specialisms error message")

![Secondary subjects error message](error-message--secondary-subjects.png "Secondary subjects error message")

### ‘Change’ search link

Screen reader users can notice that some links on the page contain text that is merged.

For example, the link ‘Change’ on the course results list is announced by screen readers as ‘Changesubject or location’ because there is no non-breaking space to break up ‘Change’ and ‘subject’. This can make it difficult for some users to understand the words being announced.

We have added non-breaking space between ‘Change’ and the visually hidden text on the search results page.

The space needs to be within the visually hidden text, not outside it.

```html
<a class="govuk-link govuk-link--no-visited-state" href="#">
  Change<span class="govuk-visually-hidden"> subject or location</span>
</a>
```

![Change search link](change-search.png "Change search link")

*[CSS]: cascading style sheets
