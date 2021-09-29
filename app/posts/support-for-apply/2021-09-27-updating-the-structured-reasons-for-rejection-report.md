---
title: Updating the structured reasons for rejection report
description: Improving how we show the reasons why an application was rejected
date: 2021-09-27
tags:
  - SN001
screenshots:
  items:
    - text: Screenshot 1
      src:
    - text: Screenshot 2
      src:
---

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}
