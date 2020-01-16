---
title: Check your UCAS data (Initial launch)
description: A read-only version of the tool where users can validate their imported courses and request access for users.
tags:
---

When onboarding users to the publish courses tool, to begin with they’ll only have access to the data we've imported from UCAS.

Users need to check their courses are there and showing correctly to validate our import. If there are problems we need users to report them to us.

Providers need access for multiple users, we’re creating a secure mechanism to request access for these users.

See [prototype on Heroku](https://publish-courses-check-ucas.herokuapp.com/we-imported) or the [](#)branch \`[check-ucas](https://github.com/fofr/manage-courses-prototype/tree/check-ucas)\` on Github.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "First screen",
      img: { src: "we-imported.png" },
      caption: '
The screen a user will see the first time they log in to the service.
      '
    },
    {
      text: "Courses",
      img: { src: "courses.png" },
      caption: '
A list of all the provider’s courses, separated by accrediting provider where appropriate.
      '
    },
    {
      text: "Courses by accrediting provider",
      img: { src: "courses-by-accrediting-provider.png" }
    },
    {
      text: "Request access for someone",
      img: { src: "request-access.png" },
      caption: '
This will be a Google Form to begin with.

We used first name and last name as that’s a requirement of DFE Sign-in.
      '
    },
    {
      text: "View course",
      img: { src: "view-course.png" },
      caption: '
In user research we found that having [multiple sets of UCAS course information on one page](/publish-teacher-training-courses/school-direct-view#course-details-from-ucas) and deep linking to them was confusing. This design splits them out into a single page per course.
      '
    }
  ]
}) }}
