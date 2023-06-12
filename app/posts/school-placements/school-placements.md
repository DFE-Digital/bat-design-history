---
layout: collection
title: School placements alpha
description: Something
related:
  items:
    - text: Prototype
      description: |
        Username: `placements`
        Password: `bat`
      href: https://school-placements-alpha.herokuapp.com
pagination:
  data: collections.school-placements
  reverse: true
  size: 50
permalink: "school-placements/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 6
---
