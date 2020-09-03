---
tags: false
layout: collection
title: Register trainee teachers
description: A service for collecting and maintaing trainee teacher registration data
# related:
#   items:
#   - text: Prototype
#     href: https://manage-courses-prototype.herokuapp.com
#   - text: User needs
#     href: /register-trainee-teachers/user-needs
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
    order: 6
---
