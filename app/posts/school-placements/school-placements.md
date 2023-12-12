---
layout: collection
title: Manage school placements
description: A service for training providers and schools to manage their participation in ITT, view mentors and ITT partnerships
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
    order: 8
---
