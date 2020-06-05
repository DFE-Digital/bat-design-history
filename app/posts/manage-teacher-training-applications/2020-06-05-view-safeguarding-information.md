---
title: Displaying safeguarding information
description: The way we show sensitive material to users differs, depending on whether or not they have permission to view
date: 2020-06-05
---

{% from "figure/macro.njk" import appFigure with context %}

## Problem statement

On our provider-facing application form, we created detail components so providers can choose to view our guidance to candidates.

In the 'Criminal convictions and professional misconduct' section, for users with permission to view the material, we also used a detail component to indicate the candidate has disclosed information.

This design added privacy to the display of information, useful even for users with permission.

To avoid confusion, however, we needed to separate these 2 detail components and give some explanation for the latter's use.

We also needed to design a different user journey for users without permissions.

## Design proposals

1. Users with permission to view sensitive material

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "For users with permission to view sensitive material",
    img: {
        src: "for-users-with-permission-to-view-safeguarding-information.png"
      }
}]

2. Users without permission to view sensitive material

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "For users without permission to view sensitive material",
    img: {
        src: "for-users-without-permission-to-view-safeguarding-information.png"
      }
}]
}) }}
