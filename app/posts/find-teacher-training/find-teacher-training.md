---
tags: false
layout: collection
title: Find postgraduate teacher training
description: A service for candidates to find courses by location, provider or subject
related:
  items:
  - text: Prototype
    href: https://search-and-compare-prototype.herokuapp.com/
  - text: Team Trello
    href: https://trello.com/b/fXA6ioZN/team-board-find-team
  - text: Performance dashboard
    href: https://datastudio.google.com/reporting/1M4DgevUBtTVwS09bEpWbkhPxxFqNOBjt
pagination:
  data: collections.find-teacher-training
  reverse: true
  size: 50
permalink: "find-teacher-training/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
    order: 1
---
