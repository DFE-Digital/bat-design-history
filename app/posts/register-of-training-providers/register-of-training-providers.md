---
layout: collection
title: Register of training providers
description: A service for managing a single source of truth for all ITT training providers
related:
  items:
    - text: Prototype
      description: |
        Password: `bat`
      href: https://register-training-providers-1729bf793dfb.herokuapp.com/
    - text: Prototype GitHub repository
      href: https://github.com/DFE-Digital/register-training-providers-prototype
pagination:
  data: collections.register-of-training-providers
  reverse: true
  size: 50
permalink: "register-of-training-providers/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 8
---
