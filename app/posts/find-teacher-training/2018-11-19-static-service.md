---
title: Static failover service
description: If we had to provide a site without any dynamic features, how would it look.
date: 2018-11-19
screenshots:
  items:
    - text: Initial sketch
      src: initial-sketch.jpg
    - text: Find by location
    - text: Pick a location
    - text: Pick a subject
    - text: Results without filters
---

When there is a catastrophic failure with Find and the team’s not around to pair on fixing the issue (eg near Christmas when lots of people have leave), it’s desirable to have a way to meet user needs without dynamic code. For example some linked static pages that allow candidates to browse courses. Having a static failover would allow a simple disaster recovery process eg. flip the DNS to point to the static site.

Below are designs for what this static failover might look like.

[Trello](https://trello.com/c/3HzliBXo/705-design-static-failover-for-find)
