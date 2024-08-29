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
      href: https://find-training-prototype.herokuapp.com/
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
    order: 1
---
