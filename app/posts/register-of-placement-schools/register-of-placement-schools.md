---
layout: collection
title: Register of placement schools
description: A service for managing a single source of truth for all ITT placement schools
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://register-placement-schools-b999e71414a1.herokuapp.com/
    - text: Prototype GitHub repository
      href: https://github.com/DFE-Digital/register-placement-schools-prototype
pagination:
  data: collections.register-of-placement-schools
  reverse: true
  size: 50
permalink: "register-of-placement-schools/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 9
---
