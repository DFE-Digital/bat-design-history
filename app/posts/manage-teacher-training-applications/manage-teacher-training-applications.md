---
layout: collection
title: Manage teacher training applications
description: A service for training providers to see, manage and make decisions on applications they receive
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://manage-applications-beta.herokuapp.com
    - text: Prototype GitHub repository
      href: https://github.com/DFE-Digital/manage-teacher-training-applications-prototype
    - text: Live service GitHub repository
      description: Manage teacher training applications uses the same codebase as Apply for teacher training
      href: https://github.com/DFE-Digital/apply-for-teacher-training
pagination:
  data: collections.manage-teacher-training-applications
  reverse: true
  size: 50
permalink: "manage-teacher-training-applications/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 4
---
