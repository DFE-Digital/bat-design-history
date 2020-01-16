---
title: Terms agreement
description: A user must agree to terms before enriching.
tags:
---

Before each user can begin enriching their course data we need them to agree to our terms and conditions.

If a user isn’t part of an organisation, they will still see the [no organisation page](/publish-teacher-training-courses/no-known-organisation).

Once a user has logged in, if they have access to an organisation and if they haven’t already agreed to the terms, they will see the page below.

While a user hasn’t agree to the terms, the only pages they can access are this one, terms and conditions, privacy policy and cookies (ie the footer links). Access to any other valid URL should redirect them back to here.

[View design in prototype](https://manage-courses-prototype.herokuapp.com/onboarding/accept-terms)

[Story map](https://trello.com/c/fnReQwNM/121-dont-allow-publishing-until-a-publisher-has-accepted-terms-and-conditions), [Trello ticket](https://trello.com/c/QVVSINV5/135-design-terms-and-conditions-acceptance-flow-when-a-user-signs-in-to-publish-courses)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Before you begin",
      img: { src: "before-you-begin.png" }
    },
    {
      text: "Before you begin with error",
      img: { src: "before-you-begin-with-error.png" }
    }
  ]
}) }}
