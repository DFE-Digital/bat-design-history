---
title: Make an offer iteration
description: Let users make offers to different training providers, courses, locations
date: 2020-04-01
---

Currently providers can only make an offer to the course the candidate applied to.

But sometimes providers need to make changes to the offer like the course or location. To do this they currently have to go through support.

If we let providers change details of an offer as they make it then providers will be able to make suitable offers without relying on support.

## How it works

Users choose an option at the beginning of the flow to decide what attributes of the offer they want to change.

They can change the provider, course and location.

They can only change the provider if the user belongs to multiple providers.

They can only change course if the provider offers multiple courses.

They can only change location if the provider offers the course in multiple locations.

And the flow is dependent on previous answers. For example, if the user chooses to change the course and that course has multiple locations, they’ll be prompted to choose a location.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Making an offer",
  items: [{
    text: "Respond to application",
    img: {
      src: "respond-to-application.png"
    }
  }, {
    text: "Set conditions",
    img: {
      src: "conditions.png"
    }
  }, {
    text: "Check offer",
    img: {
      src: "check.png"
    }
  }, {
    text: "Success message",
    img: {
      src: "flash.png"
    }
  }]
}) }}

{{ appScreenshots({
  title: "Making an offer but change provider",
  items: [{
    text: "Respond to application",
    img: {
      src: "respond-to-application.png"
    }
  }, {
    text: "Select provider",
    img: {
      src: "provider.png"
    }
  }, {
    text: "Select course",
    img: {
      src: "course.png"
    }
  }, {
    text: "Select location",
    img: {
      src: "location.png"
    }
  }, {
    text: "Set conditions",
    img: {
      src: "conditions.png"
    }
  }, {
    text: "Check offer",
    img: {
      src: "check-4.png"
    }
  }, {
    text: "Success message",
    img: {
      src: "flash.png"
    }
  }]
}) }}


{{ appScreenshots({
  title: "Making an offer but change course",
  items: [{
    text: "Respond to application",
    img: {
      src: "respond-to-application.png"
    }
  }, {
    text: "Select course",
    img: {
      src: "course.png"
    }
  }, {
    text: "Select location",
    img: {
      src: "location.png"
    }
  }, {
    text: "Set conditions",
    img: {
      src: "conditions.png"
    }
  }, {
    text: "Check offer",
    img: {
      src: "check-2.png"
    }
  }, {
    text: "Success message",
    img: {
      src: "flash.png"
    }
  }]
}) }}

{{ appScreenshots({
  title: "Making an offer but change location",
  items: [{
    text: "Respond to application",
    img: {
      src: "respond-to-application.png"
    }
  }, {
    text: "Select location",
    img: {
      src: "location.png"
    }
  }, {
    text: "Set conditions",
    img: {
      src: "conditions.png"
    }
  }, {
    text: "Check offer",
    img: {
      src: "check-3.png"
    }
  }, {
    text: "Success message",
    img: {
      src: "flash.png"
    }
  }]
}) }}
