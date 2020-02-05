---
title: International address
description: Initial designs for capturing international addresses
date: 2020-02-05
---
Initial designs for capturing international addresses.

We ask if a candidate lives in the UK before showing address fields. For an international address we give a free text field without trying to guess the format of addresses in other countries.

[Design system guidance](https://design-system.service.gov.uk/patterns/addresses/#textarea) on this pattern.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Where do you live?",
      img: { src: "01-where-do-you-live.png" }
    }, {
      text: "What is your address?",
      img: { src: "02-what-is-your-address.png" }
    }]
}) }}
