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
pagination:
  data: collections.publish-teacher-training-courses
  reverse: true
  size: 50
permalink: "publish-teacher-training-courses/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
ogImage:
  src: opengraph-image--publish-teacher-training-courses.png
  alt: "{{ description }}"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 3
---
