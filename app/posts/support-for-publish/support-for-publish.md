---
layout: collection
title: Support for Publish
description: A tool for support agents to manage the Publish postgraduate teacher training service
related:
  items:
    - text: Prototype
      description: |
        Username: `publish`
        Password: `bat`
      href: https://support-for-publish.herokuapp.com
    - text: User needs
      href: /support-for-publish/user-needs
pagination:
  data: collections.support-for-publish
  reverse: true
  size: 50
permalink: "support-for-publish/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
override:tags:
  - post
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 7
---
