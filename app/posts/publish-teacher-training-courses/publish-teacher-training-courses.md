---
layout: collection
title: Publish teacher training courses
description: A service for training providers to publish and manage their courses
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://publish-courses-prototype.herokuapp.com
    - text: Prototype GitHub repository
      href: https://github.com/DFE-Digital/publish-teacher-training-prototype
    - text: Live service GitHub repository
      description: Publish teacher training courses uses the same codebase as Find teacher training courses
      href: https://github.com/DFE-Digital/publish-teacher-training
pagination:
  data: collections.publish-teacher-training-courses
  reverse: true
  size: 50
permalink: "publish-teacher-training-courses/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 1
---
