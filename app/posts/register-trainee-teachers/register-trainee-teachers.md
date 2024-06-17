---
layout: collection
title: Register trainee teachers
description: A service for collecting and managing trainee teacher registration data
related:
  items:
    - text: Prototype
      description: |
        Username: `register`
        Password: `bat`
      href: https://register-prototype.herokuapp.com/records
pagination:
  data: collections.register-trainee-teachers
  reverse: true
  size: 50
permalink: "register-trainee-teachers/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
ogImage:
  src: opengraph-image--register-trainee-teachers.png
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 5
---
