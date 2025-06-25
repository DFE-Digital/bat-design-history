---
layout: collection
title: Manage school placements
description: A service for training providers and placement partners to manage their mentors and placements
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://school-placements-beta-4330a9a75ffc.herokuapp.com
    - text: Prototype GitHub repository (public archive)
      href: https://github.com/DFE-Digital/school-placements-beta-prototype
    - text: Live service GitHub repository
      description: Manage school placements uses the same codebase as Claim funding for mentor training
      href: https://github.com/DFE-Digital/itt-mentor-services
pagination:
  data: collections.manage-school-placements
  reverse: true
  size: 50
permalink: "manage-school-placements/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 8
---
