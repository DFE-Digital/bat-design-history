---
layout: collection
title: Support for Apply
description: A tool for support agents to manage the Apply for teacher training service
related:
  items:
    - text: Prototype
      description: |
        Username: `apply`
        Password: `bat`
      href: https://support-apply-prototype.herokuapp.com
    - text: User needs
      href: /support-for-apply/user-needs
pagination:
  data: collections.support-for-apply
  reverse: true
  size: 50
permalink: "support-for-apply/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
override:tags:
  - post
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 6
---
