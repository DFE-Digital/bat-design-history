---
layout: collection
title: Claim funding for mentor training
description: A service for placement partners to claim funding for their general mentors’ training
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://itt-mentoring-beta-94341ca35a2c.herokuapp.com
    - text: Prototype GitHub repository (public archive)
      href: https://github.com/DFE-Digital/itt-mentoring-beta-prototype
    - text: Live service GitHub repository
      description: Claim funding for mentor training uses the same codebase as Manage school placements
      href: https://github.com/DFE-Digital/itt-mentor-services
pagination:
  data: collections.claim-funding-for-mentors
  reverse: true
  size: 50
permalink: "claim-funding-for-mentors/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 7
---
