---
layout: collection
title: Manage school placements
description: A service for training providers and schools to manage their mentors and placements
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://school-placements-beta-4330a9a75ffc.herokuapp.com/
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
