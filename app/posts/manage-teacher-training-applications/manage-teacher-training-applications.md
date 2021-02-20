---
layout: collection
title: Manage teacher training applications
description: A service for training providers to see, manage and make decisions on applications they receive
related:
  items:
  - text: Prototype
    description: |
      Username: `apply`
      Password: `bat`
    href: https://manage-applications-beta.herokuapp.com/
  - text: User needs
    href: /manage-teacher-training-applications/user-needs
pagination:
  data: collections.manage-teacher-training-applications
  reverse: true
  size: 50
permalink: "manage-teacher-training-applications/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
override:tags:
  - post
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 4
---
