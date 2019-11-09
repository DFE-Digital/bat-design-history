---
title: Closing search for the end of cycle
description: Now Apply is closed, disable search until the new cycle begins.
tags: find-teacher-training
---
A follow-up to our original [end of cycle notice](/find-teacher-training/end-of-cycle-notice). Now that nobody can apply to the 2019/2020 cycle we need to disable search until the new cycle opens on 1 October.

It is confusing to allow users to search for courses in the current cycle. Find returns a small set of courses that haven’t been filled, this will mislead candidates about their options for 2020/21. It is not clear that results shown are just for 2019/20.

{% from "figure/macro.njk" import appFigure %}
{{ appFigure({
  image: {
    path: page.filePathStem | replace("/posts", "/images"),
    file: "course-search-disabled.png"
  },
  caption: "Course search disabled page"
}) }}
