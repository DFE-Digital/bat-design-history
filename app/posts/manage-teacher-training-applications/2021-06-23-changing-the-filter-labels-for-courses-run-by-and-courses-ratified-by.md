---
title: Changing the filter labels for ‘courses run by’ and ‘courses ratified by’
description: Avoiding certains words to describe relationships in the service
date: 2021-06-21
---

For the recent changes to permissions, we’ve [stopped using the words ‘ratified by’ or ‘run by’](/manage-teacher-training-applications/moving-organisational-permissions-guidance-above-the-form/#no-longer-distinguishing-between-the-training-provider-and-accredited-body-within-a-relationship).

To make sure we’re being consistent, we’ve updated the application list page by changing:

- the ‘Courses run by’ filter to ‘Training provider’
- the ‘Courses ratified by’ filter to ‘Accredited body’
- the line ‘[training provider name] - ratified by [accredited body name]’ to ‘[training provider name] ([accredited body name])’

## Only showing filters when there are multiple options

We’ve also changed the training provider and accredited body filters so that they only show when they contain multiple options.

This is because if there’s only one option, selecting it would not affect the list of applications.

For example, if the user belongs to Endeavour TSA, then the list would already be showing applications to Endeavour TSA.

Note that the locations filter should be automatically shown in this case.

## Changing the location filter label

At the moment, the location filter label says, for example ’Training locations for Endeavour TSA’.

But as we usually just say ‘location’ we’ve changed this to ‘Locations for Endeavour TSA’.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application list (belongs to a single training provider)",
    img: {
      src: "application-list--training-provider.png"
    },
    caption: 'In this set up the user belongs to Endeavour TSA who has 6 accredited body partners. As the user belongs to just one training provider, the locations filter is showing automatically.'
  }, {
    text: "Application list (belongs to a single accredited body)",
    img: {
      src: "application-list--accredited-body.png"
    },
    caption: 'In this set up the user belongs to the University of Leicester who has 4 partner schools. And the University of Leicester do not run their own courses.'
  }, {
    text: "Application list (belongs to a training provider and accredited body)",
    img: {
      src: "application-list--both.png"
    },
    caption: 'In this set up the user belongs to Endeavour TSA who has 6 accredited body partners one of which is Essex Teacher Training. The user also belongs to Essex Teacher Training who run their own courses and ratify courses for Academies Enterprise Trust: Eastern.'
  }]
}) }}
