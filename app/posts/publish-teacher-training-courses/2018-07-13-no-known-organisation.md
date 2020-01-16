---
title: When a user isn’t recognised
description: Designs for when a user’s email isn’t in our whitelist.
tags:
---

If a user signs up who isn’t on our whitelist we don’t know much about them. We can’t give them access to anyone’s courses. We need to know which organisation they should be part of and then validate that.

This can happen if the invite email gets shared or forwarded, or if the user’s email address is different to the one we emailed.

This design explains the situation to the user and asks for the details we need. A quick design to unblock onboarding, a later version could incorporate a request access form – a more direct approach for users.

[BATSA-422](https://dfedigital.atlassian.net/browse/BATSA-422)
[Page in prototype](/no-access)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  hideContents: true,
  items: [
    {
      text: "Which organisation?",
      img: { src: "01-no-known-organisation.png" }
    }
  ]
}) }}
