---
title: As launched on 26 November 2019
description: An MVP support tool, showing essential application information.
---

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Applications",
      img: { src: "01-applications.png" }
    },
    {
      text: "Unsubmitted application",
      img: { src: "02-unsubmitted-application.png" }
    },
    {
      text: "Submitted application awaiting references",
      img: { src: "03-submitted-application-awaiting-references.png" }
    },
    {
      text: "Application history",
      img: { src: "04-application-history.png" }
    },
    {
      text: "Import references",
      img: { src: "05-import-references.png" }
    },
    {
      text: "Imported references",
      img: { src: "06-imported-references.png" }
    },
    {
      text: "Feature flags",
      img: { src: "07-feature-flags.png" }
    },
    {
      text: "Service performance",
      img: { src: "08-service-performance.png" }
    },
    {
      text: "Providers",
      img: { src: "09-providers.png" }
    },
    {
      text: "Provider courses",
      img: { src: "10-provider-courses.png" }
    },
    {
      text: "API tokens",
      img: { src: "11-api-tokens.png" }
    },
    {
      text: "API token created",
      img: { src: "12-api-token-created.png" }
    }
  ]
}) }}
