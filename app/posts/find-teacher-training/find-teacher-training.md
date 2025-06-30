---
layout: collection
title: Find teacher training courses
description: A service for candidates to find courses by location, training provider or subject
related:
  items:
    - text: Prototype
      description: |
        Username: `find`
        Password: `bat`
      href: https://find-training-prototype.herokuapp.com
    - text: Prototype GitHub repository
      href: https://github.com/DFE-Digital/find-teacher-training-prototype
    - text: Live service GitHub repository
      description: Find teacher training courses uses the same codebase as Publish teacher training courses
      href: https://github.com/DFE-Digital/publish-teacher-training
pagination:
  data: collections.find-teacher-training
  reverse: true
  size: 50
permalink: "find-teacher-training/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 2
---
