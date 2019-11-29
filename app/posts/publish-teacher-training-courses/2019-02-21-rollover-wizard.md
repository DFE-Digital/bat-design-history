---
title: Rollover wizard
description: A full rollover wizard, ending in a page with current and next cycles.
tags: publish-teacher-training-courses
---
Following on from [rollover reckons](/publish-teacher-training-courses/rollover-reckons), this shows a full rollover wizard.

Steps are:

* begin rollover, explain anything that’s new in this cycle
* pick the courses to copy
* pick the locations to copy
* check your answers
* confirm and redirect to a new top-level cycles page
* two cycles now available: current and next

## User research

[Playback presentation](https://docs.google.com/presentation/d/1JafwFWO0gDUT2wicnHhTwGJx7T0RCZuOOgzGlJcJWZU/edit#slide=id.g51d4c235e9_1_99). Findings are discussed alongside screenshots below.

We researched this with:

* [Surrey South Farnham SCITT](https://lookback.io/watch/Dudq3X8QvtiwsNvbk)
* [Prince Henry’s High Scool and South Worcestershire SCITT](https://lookback.io/watch/bKs8CaeNHE8MCdY4B)
* [Oxford University](https://lookback.io/watch/Dg3mjn74DyCCyzxRk)
* [Cabot Learning Federation SCITT](https://lookback.io/watch/jYqw2TnGXjM9geySx)
* [Edge Hill University](https://lookback.io/watch/8ia5o6EEmMt3Td8DR)
* [The Northworthy Alliance](https://lookback.io/watch/Kqn9JdJnrbRBoPNxG)
* [University of Exeter](https://lookback.io/watch/dnLAXAszhNxmFByMy)

### Repeating rollover

2 providers wanted to go through rollover again. Reasons given were:

* any mistakes made
* last minute changes
* receiving unexpected allocations
* a new school in their partnership
* deleting courses which may not apply

### Should we stick with a wizard?

Providers copied all their courses and locations. They also expressed a need to repeat rollover. The route into the wizard wasn’t spotted. Using the beginning of rollover to talk about What’s new didn’t work.

We could copy everything, show two cycles and emphasise a new delete course feature for anything that shouldn’t be copied.

This is more in keeping with the way UCAS has done rollover until now. It also gives us less to build.

We would need to think of another way to encourage providers to review and fix their courses for the next cycle.

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Organisation with rollover prompt"},
    {text: "Start rollover"},
    {text: "Pick courses"},
    {text: "Pick locations"},
    {text: "Confirm"},
    {text: "Organisation after rollover"},
    {text: "Current cycle after rollover"},
    {text: "Next cycle after rollover"}
  ]
}) }}
