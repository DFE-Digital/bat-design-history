---
layout: collection
title: Apply for teacher training
description: A service for candidates to submit an application to their chosen teacher training courses
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://apply-beta-prototype.herokuapp.com
    - text: Prototype GitHub repository
      href: https://github.com/DFE-Digital/apply-for-teacher-training-prototype
    - text: Live service GitHub repository
      description: Apply for teacher training uses the same codebase as Manage teacher training applications
      href: https://github.com/DFE-Digital/apply-for-teacher-training
pagination:
  data: collections.apply-for-teacher-training
  reverse: true
  size: 50
permalink: "apply-for-teacher-training/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 3
---
