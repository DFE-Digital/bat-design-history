---
layout: collection
title: Becoming a teacher
description: A collection of services supporting the recruitment and training of trainee teachers
pagination:
  data: collections.becoming-a-teacher
  reverse: true
  size: 50
permalink: "becoming-a-teacher/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 0
---
