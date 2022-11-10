---
title: Copy content from another course
description: Design for copying form values from one course to another
date: 2018-08-17
screenshots:
  items:
    - text: Animation showing content copying
      src: copy-content-demo.gif
    - text: Use this content again
      caption: When no course has been completed yet, we prompt as a heads up that this feature is there but not yet usable.
    - text: Use content from another course
      caption: |
        The form shows once another course has some of those fields.

        The select dropdown lists only courses that have been completed.

        On submit it copies all the content from that course into the form fields on the page. They are not persisted until the user saves. Feedback displays which fields were copied, an error shows if nothing is copied.
    - text: Content copied from another course
    - text: Nothing copied from another course
---

## We tried templates

From our investigation into [sharing content using templates](/publish-teacher-training-courses/templates):

> For many training providers there is great similarity between the courses they offer for different subjects. Users need an easy way to share information between these courses so they do not have to copy and paste content between them. Users also need to easily update all courses that share information, so that they all remain consistent, again without needing to copy and paste.
>
> We’ve observed in user research that without the ability to share information users are likely to use copy and paste.

Findings from templates research revealed that templates were largely well understood but that users also wanted to apply a template and then tweak it, to alter the small details that do differ.

[We considered iterating templates](https://dfedigital.atlassian.net/browse/BATSA-459) to better handle content tweaks. The biggest benefit of templates is to have them available when providers are writing course content for the first time. We found that we would not have enough time to build a templating system before September.

We needed an alternative to templates, one that would alleviate the pain of copying and pasting without depending on backend development too heavily – which is our current bottleneck. ([Trello](https://trello.com/c/cm9Y7cx9/120-design-improvements-over-copying-and-pasting-between-fields))

In [user research](https://lookback.io/watch/kY9HWu5MJiJhgJ5yC) this need continues to surface:

- [“It’s quite repetitive”](https://lookback.io/watch/kY9HWu5MJiJhgJ5yC?t=11m31s)
- [“Is it going to be able to copy information from one course to another?”](https://lookback.io/watch/kY9HWu5MJiJhgJ5yC?t=13m34s)
- [“There is not a mechanism to duplicate the information”](https://lookback.io/watch/kY9HWu5MJiJhgJ5yC?t=22m20s)

## Copying fields from another course

This design makes it possible to fill in the values of a course based on another course that’s already been completed.

It is largely frontend and JavaScript based and is an enhancement for those with JavaScript over the baseline form. It’s expected that the content to copy will be easily retrievable. Building the list of courses that can be copied and making the content retrievable are the main backend features to build.

The list of courses to copy from should match the order on the courses tab. They should be grouped by accrediting provider using an ["optgroup" element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup).

There is still some repetition for users – they need to go into each course page and choose what to copy. They cannot simply copy a course wholesale. However the point at which content is copied makes it easy to tweak the content before saving.

Users may not want to copy all the fields, if this is the case we can iterate the feature to allow selection of what gets copied.

## Warn before overwriting

If the form already contains content, when they attempt to copy content a JavaScript confirmation dialogue should warn them that their content will be overwritten and ask them if they want to proceed.

This part of the design has not been built in the prototype.
