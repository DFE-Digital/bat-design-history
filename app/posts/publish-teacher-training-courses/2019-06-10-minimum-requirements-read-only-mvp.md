---
title: UCAS GCSE requirements – A read only MVP
description: Show the codes and their meanings to ship earlier.
date: 2019-06-10
---

To implement the [full design](/publish-teacher-training-courses/minimum-course-requirements-logic) we need to fix the data and coerce the model into our representation. The stories are large and sequential.

Not showing the values of these settings to providers creates a risk – a provider can’t see an incorrect setting, they won’t know to fix it, meaning some people might not be able to apply. We needed to show the provider’s choices straight away.

To ship the read-only version of this feature earlier we updated the design. It will now show the UCAS codes (1, 2, 3 and 9) and the meanings of those codes.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Code 1 – Must have" },
    { text: "Code 2 – Taking" },
    { text: "Code 3 – Equivalence test" }
  ]
}) }}
