---
title: Copy content from another course (Live)
description: We changed this feature when we built it.
date: 2018-09-12
---

When we initially designed and tested the [copy content feature](/publish-teacher-training-courses/copy-content-from-another-course) we expected the backend to be a bottleneck:

> We needed an alternative to templates … without depending on backend development too heavily – which is our current bottleneck.

This assumption was wrong: we made good progress with course enrichment and it was faster and easier to [build this without frontend dependencies](https://github.com/DFE-Digital/manage-courses-ui/pull/143).

Because the feature now operates with a form submit and a full page reload we had to make some design iterations.

## What we changed

### Moving the list of copied fields

In the original we listed the copied fields [by the copy course form](/publish-teacher-training-courses/copy-content-from-another-course#content-copied-from-another-course). This makes sense when the frontend does a seamless update. On a full page reload however these messages get lost.

We updated the design by moving the alert and the copied fields to the top of the page, like success and error summaries. And like on an error summary, we link to each of the fields that’s been updated.

### Your changes are not yet saved

In the original when the fields were updated by JavaScript it was intuitive that users needed to save to continue. This had tested well. If they tried to leave without saving the ‘unsaved changes’ dialogue would warn them.

Doing the same thing with a form submission and page reload is less intuitive. We could immediately save changes and show a success message, or we could request that users review what’s been copied and ask them to save. The second option is preferable as we’d like users to review and make changes before saving.

To emphasise that ‘this isn’t quite done’, we introduced a new alert state – an orange intermediate alert. It’s not an error, it’s not successful yet, it’s sort like a draft – which is also orange. The colour doesn’t fit quite right but it seems to work.

### JavaScript prompts

If a user makes changes to any fields and then tries to copy we warn about losing unsaved changes.

If a user copies a course and tries to leave without saving we also warn about losing unsaved changes.

## People aren’t finding the feature

We’ve had support requests asking where the feature is. In research people have been looking for this on:

* the course overview
* the course listing
* their first course, thinking they copy from it to another

We’ve made some copy changes to better highlight the feature but we need to reassess where this lives. Does a full course copy make sense now? Would that live on the course overview?

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "About this course before copying",
    img: { src: "about-this-course-before-copying.png" }
  }, {
    text: "Copying content on about this course",
    img: { src: "copying-content-on-about-this-course.png" }
  }, {
    text: "Copying content on fees and length",
    img: { src: "copying-content-on-fees-and-length.png" }
  }, {
    text: "Copying content on requirements",
    img: { src: "copying-content-on-requirements.png" }
  }, {
    text: "Nothing to copy",
    img: { src: "nothing-to-copy.png" }
  }]
}) }}
