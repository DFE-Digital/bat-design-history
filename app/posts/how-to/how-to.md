---
layout: collection
title: How to
description: A collection of guides to help you build and document Becoming a teacher services.
pagination:
  data: collections.how-to
  reverse: true
  size: 50
permalink: "how-to/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
---
