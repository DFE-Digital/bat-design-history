---
title: Subjects, bursaries and SKE courses
description: An iteration on the MVP, with full course pages and a subject filter with bursary and SKE information.
---
We tested this design with 4 users:

*   [Participant 1](https://lookback.io/watch/az5TkZTc9rwgyoheL)
*   [Participant 2 (Multiple sclerosis)](https://lookback.io/watch/K6SmyEx5Kz76j6TAf)
*   [Participant 3](https://lookback.io/watch/YSyCpM8ERpT7oFEAK)
*   [Participant 4](https://lookback.io/watch/Qm2gKZJYCTopwAKNM)

[User research findings](https://docs.google.com/spreadsheets/d/1EEpqT5u2GLr3wJyk_SnKiysTtf5s88gYGiYqmWzNjl4/)

## Choosing a subject behaviour

The text above the subject listing was hardly read. Nobody read the information about SKE courses. One user responded to the financial support information.

Information alongside each subject was usually noted, we observed some users changing their choices based on inline text.

“I would be interested in History the most because I could get a bursary”

We observed many users selecting more subjects than they initially considered.

There were no problems with the accordion pattern.

We [iterated the design](/find-teacher-training/live-launch#find-by-subject) to remove the SKE text at the top and shortened and simplified the financial support details. We added jumping off links to Get into Teaching. SKE information was added to each of the subjects, where it is more likely to be noticed.

## You can’t apply yet

In lieu of the "Apply on UCAS" link, users frequently clicked through to the Get into Teaching guidance, which was deemed to be useful.

One user was confused about how to apply, they’d contact the provider for more information.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Start page", img: { src: "start-page.png" } },
    { text: "Find by location", img: { src: "find-by-location.png" } },
    { text: "Find by subject", img: { src: "find-by-subject.png" } },
    { text: "Search results", img: { src: "search-results.png" } },
    { text: "Salary filter", img: { src: "salary-filter.png" } },
    { text: "Full course page", img: { src: "full-course-page.png" } }
  ]
}) }}
