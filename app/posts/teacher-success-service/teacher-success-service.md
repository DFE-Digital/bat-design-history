---
layout: collection
title: Teacher success service
description: A service for trainee teachers undergoing ITT to improve their training experience and get support and resources they need to succeed

pagination:
  data: collections.teacher-success
  reverse: true
  size: 50
permalink: "teacher-success/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 2
---
