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
      href: https://register-prototype.herokuapp.com
    - text: Withdrawals prototype
      description: |
        Password: `bat`
      href: https://bat-register-withdrawals-proto-e06d4bd8ada2.herokuapp.com
    - text: Prototype GitHub repository
      href: https://github.com/DFE-Digital/register-trainee-teachers-prototype
    - text: Live service GitHub repository
      href: https://github.com/DFE-Digital/register-trainee-teachers
pagination:
  data: collections.register-trainee-teachers
  reverse: true
  size: 50
permalink: "register-trainee-teachers/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 5
---
