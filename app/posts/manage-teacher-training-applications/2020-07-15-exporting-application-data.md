---
title: Exporting application data
description: Let users export application data as a CSV
date: 2020-07-15
tags:
- MN021
- MN022
---


## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

Users can click on ‘Export data’ in the top right of the navigation bar.

This takes them to a page where they can download all applications as a CSV file.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Navigation link to export",
    img: {
      src: "application-list.png"
    }
  }, {
    text: "Export page",
    img: {
      src: "export-page.png"
    }
  }]
}) }}
