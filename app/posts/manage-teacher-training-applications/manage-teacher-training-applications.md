---
layout: collection
title: Manage teacher training applications
description: A service for training providers to see, manage and make decisions on applications they receive
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://manage-applications-beta.herokuapp.com/
pagination:
  data: collections.manage-teacher-training-applications
  reverse: true
  size: 50
permalink: "manage-teacher-training-applications/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
ogImage:
  src: opengraph-image--manage-teacher-training-applications.png
  alt: "{{ description }}"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 4
---
