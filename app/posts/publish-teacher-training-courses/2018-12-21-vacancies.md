---
title: Vacancies
description: First design for changing vacancies at each training location on a course.
date: 2018-12-21
screenshots:
  items:
    - Organisation table showing link to edit vacancies
    - Multiple training locations
    - Multiple training locations (two columns)
    - Multiple training locations with no vacancies
    - Single training location with vacancies
    - Single training location no vacancies
---

{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "There’s <a href=\"/publish-teacher-training-courses/vacancies-iteration-14-jan\">an updated design</a>.",
  iconFallbackText: "Warning"
}) }}

We don’t know how providers use vacancies yet. This design assumes that closing a course (eg there are no vacancies at any training location) is the most common action.

The design for editing vacancies must account for the following scenarios:

- a course with one training location
- a part time or full time course with one training location
- a course with many training locations
- a part time or full time course with many training locations

Vacancies could sit within a course, alongside the enrichment fields, or separate to it. If vacancies were alongside enrichment then either; vacancies would need to be published after editing; or vacancies would behave differently to the other form. For this reason vacancies has been put elsewhere, and the design tries to make it clear that these changes will be immediate.

## User research

We found that putting vacancies in the Courses table worked well – all participants were able to find the feature easily. They understood that their changes were immediate.

When we tried removing the message about the UCAS Apply delay it wasn’t clear to users that this would affect UCAS Apply.

- [Suffolk and Norfolk Primary SCITT](https://lookback.io/watch/ud8KczRqKKAexox28)
- [The Downland Alliance](https://lookback.io/watch/E8MxZYHrmy7E7q85w)

*[UCAS]: Universities and colleges admissions service
