---
layout: collection
title: How to
description: Guides for writing, formatting, and publishing design history posts.
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
