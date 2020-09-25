---
title: Dense application list layout
description: A more dense layout for each application card in the application list.
date: 2020-09-25
---

{% from "figure/macro.njk" import appFigure with context %}

Previously each application in the application list took up a lot of vertical space.

This means less applications are within the viewport at any one time.

Some users have also said periodically they’d they like a more dense layout – something that the UCAS UI provides.

If we give users a more dense application list
Then users will be able to see more information with less effort

### Before

{{ appFigure({
  image: {
    file: "application-list--before.png"
  }
}) }}

### After

{{ appFigure({
  image: {
    file: "application-list--after.png"
  }
}) }}
