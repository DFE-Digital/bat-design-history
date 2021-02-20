---
layout: collection
title: Apply for teacher training
description: A service for candidates to submit an application to their chosen teacher training courses
related:
  items:
  - text: Prototype
    description: |
      Username: `apply`
      Password: `bat`
    href: https://apply-beta-prototype.herokuapp.com/
  - text: User needs
    href: /apply-for-teacher-training/user-needs
pagination:
  data: collections.apply-for-teacher-training
  reverse: true
  size: 50
permalink: "apply-for-teacher-training/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
override:tags:
  - post
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 3
---
