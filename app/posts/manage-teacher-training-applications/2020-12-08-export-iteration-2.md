---
title: Exporting data iteration 2
description: Giving users a dedicated way to export HESA and other improvements
date: 2020-12-08
---

This post documents how we have introduced manual export alongside the existing HESA export.

## Current HESA export

A HESA export is currently available in production:

![Screenhost of export page for HESA data.](hesa-export--current.png "Export page for HESA data")

We originally planned to replace the HESA export with a [manual export we designed previously](/manage-teacher-training-applications/export/).

But as there’s utility in giving users a dedicated HESA export we’re offering users manual export in addition to the HESA export.

## How it works

When the user clicks ‘Export data’ they arrive at the manual export page.

From here they can click a link at the top of the page to take them to the HESA export.

The HESA export has breadcrumbs so users can get back easily to the manual export page.

We have removed the ability for users to opt out of receiving diversity information as part of the export. Instead, they will get it if they have permission.

## Things to address in future

Currently, the HESA export includes data for all years. This means users will have to remove rows from the export manually.

We think it should only include data for the previous year to prevent users from having to remove the data manually.

We’ll look to address this as a separate piece of work.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Manual export",
    img: {
      src: "manual-export.png"
    }
  }, {
    text: "HESA export",
    img: {
      src: "hesa-export--new.png"
    }
  }]
}) }}
