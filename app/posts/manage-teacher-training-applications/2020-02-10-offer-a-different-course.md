---
title: Offer a different course
description: First iteration of making an offer to a different course
date: 2020-02-10
tags: awaiting-validation
---

First iteration for letting providers make an offer to a different course as part of making sure the provider interface has parity with the API.

This option to make an offer to a different course would be available when the application is in the ‘New’ and ‘Offered’ states.

## User needs

As a provider
I need to be able to change the course
So that I can ensure candidates get a place even if other courses are full up

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Details page"
    },
    {
      text: "Edit response"
    },
    {
      text: "Make a different offer"
    },
    {
      text: "Change provider"
    },
    {
      text: "Change course"
    },
    {
      text: "Change location"
    },
    {
      text: "Change conditions"
    },
    {
      text: "Confirm new offer"
    },
    {
      text: "Flash message"
    }
  ]
}) }}
