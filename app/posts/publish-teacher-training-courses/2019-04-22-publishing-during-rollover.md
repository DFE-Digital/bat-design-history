---
layout: page
title: Publishing during rollover
description: What does Publish do, what changes?
date: 2019-04-22
screenshots:
  items:
    - Courses for next cycle
    - Draft course with publish messaging
    - Course just published
    - Published course
    - Course with unpublished changes
---
<!-- markdownlint-disable MD051 -->

During rollover there are two cycles: the current cycle, and another that’s being prepared for the next cycle. Courses in the next cycle cannot go live until the cycle begins, which is usually in October.

## Setting publish context

There will still be a ‘Publish’ button, but instead of putting a course onto Find postgraduate teacher training (Find), it’ll not go live until October. We need to tell users this.

On publishing [we will reiterate this](#course-just-published).

<div class="govuk-grid-row govuk-!-margin-bottom-7">
  <div class="govuk-grid-column-one-third">
    <h3 class="govuk-heading-m">Current cycle</h3>
    <div class="govuk-inset-text">
      <p>Publish your changes.</p>
      <a href="#" class="govuk-button">Publish</a>
    </div>
  </div>
  <div class="govuk-grid-column-one-third">
    <h3 class="govuk-heading-m">During rollover</h3>
    <div class="govuk-inset-text">
      <p>Publish this course and it will appear on Find when the cycle opens in October.</p>
      <a href="#" class="govuk-button">Publish in October</a>
    </div>
  </div>
  <div class="govuk-grid-column-one-third">
    <h3 class="govuk-heading-m">Unpublished changes</h3>
    <div class="govuk-inset-text">
      <p>Publish your changes and they will appear on Find when the cycle opens in October.</p>
      <a href="#" class="govuk-button">Publish in October</a>
    </div>
  </div>
</div>

## Will it be on Find?

We need to change the column title on the courses table and the corresponding section on the course page. None of the courses are on Find until October, Is it on Find? does not make sense.

The question becomes: Will it be on Find?

| State | Cycle | Find title | Course value |
|-|-|-|-|
|<span class="govuk-tag" style="background-color: #00703c">Published</span>| Current | Is it on Find? | [Yes – view online](#main-content) |
|<span class="govuk-tag" style="background-color: #00703c">Published</span>| Next | Will it be on Find? | Yes – in October |
|<span class="govuk-tag" style="background-color: #f47738">Draft</span>| Current | Is it on Find? | No – still in draft |
|<span class="govuk-tag" style="background-color: #f47738">Draft</span>| Next | Will it be on Find? | No – still in draft |

Only the text for a Published course needs to change in the Find? column.

## Applications in courses table

This should [behave as originally designed](/publish-teacher-training-courses/publish-states) – if the open date is in the future, a message shows:

> Opening on [10 October]

This has not been built on Live yet, instead the column currently says Closed until applications have opened.

## Logic for showing rollover version

If the following are true:

- the user is viewing the next cycle
- the next cycle has not opened yet

Once a cycle has opened all changes should revert.

## Missing from this design

We probably need a way for providers to preview their course after it’s been published, as View on website will not be a thing.

The preview links could persist on the course page and not be dependent on the course’s state.

<!-- markdownlint-ensable MD051 -->
