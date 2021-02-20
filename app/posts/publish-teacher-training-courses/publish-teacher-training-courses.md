---
layout: collection
title: Publish teacher training courses
description: A service for training providers to publish and manage their courses
related:
  items:
  - text: Prototype
    href: https://manage-courses-prototype.herokuapp.com
  - text: User needs
    href: /publish-teacher-training-courses/user-needs
pagination:
  data: collections.publish-teacher-training-courses
  reverse: true
  size: 50
permalink: "publish-teacher-training-courses/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
override:tags:
  - post
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 2
---
