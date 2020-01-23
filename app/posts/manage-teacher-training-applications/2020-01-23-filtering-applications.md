---
title: Filtering applications
description: Let users find items a long list of applications by status and provider
date: 2020-01-23
tags: awaiting-validation
---

Let users find applications quickly and easily within a very long list.

## Hypothesis

Currently, providers see 1 long list of applications. This works okay for now because there's only a few applications being submitted and users are only currently assigned to 1 provider.

But users will have to manage hundreds of applications including applications across multiple providers like those that are part of a School Direct family or universities that accredit multiple School Directs.

This makes the page slower to load and makes it harder to find applications.

### Filtering by status and provider

If we let users filter by status and provider
Then it'll be easier to find applications
We’ll know this works when:
- research shows there's a need to see applications for different providers at the same time
- users are able to select the statuses they want to see

### Pagination

If we let users paginate
Then pages will be shorter and quicker to load

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Application list"
    },
    {
      text: "Filtering by status"
    },
    {
      text: "Filtering by provider"
    },
    {
      text: "Filtering by status and provider"
    }
  ]
}) }}
