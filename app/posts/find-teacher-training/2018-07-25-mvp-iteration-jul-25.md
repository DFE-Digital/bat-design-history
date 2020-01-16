---
title: Just the UCAS data – 25 July iteration
description: Tweaks to the minimum viable service including improved subject selection.
---
Improvements to the [minimum viable service](/find-teacher-training/all-courses-minimum) include:

*   separating and classifying UCAS course subjects
*   tweaked distance copy in search results
*   added ‘address’ to location field in results
*   removed the sort by controls above search results
*   changed ‘at’ to ‘with’ in search results
*   highlighted course website on course details view
*   changed schools you can apply to, to ‘places’

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Find by subject collapsed",
      img: { src: "find-by-subject-collapsed.png" },
      caption: 'Rather than listing alphabetically, group subjects by categories.

### Results

Users found and searched for the subjects they wanted.

Participant 2 questioned the modern languages group, “[it’s not clear if modern languages is primary or secondary or both](https://lookback.io/watch/QCBC3KYjNxtEuQH5R?t=15m21s)”

As expected, some of the subject names weren’t clear. For example: “[I’m not sure what Social science means](https://lookback.io/watch/QCBC3KYjNxtEuQH5R?t=16m22s)”'
    },
    {
      text: "Find by subject expanded",
      img: { src: "find-by-subject-expanded.png" },
      caption: ''
    },
    {
      text: "Teacher training courses",
      img: { src: "teacher-training-courses.png" },
      caption: ''
    },
    {
      text: "Minimum course page",
      img: { src: "minimum-course-page.png" },
      caption: ''
    }
  ]
}) }}
