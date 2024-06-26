---
layout: collection
title: How to
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan odio in nulla eleifend, ut pulvinar dui fringilla.
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
