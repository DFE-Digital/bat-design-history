---
title: Sub navigation iteration (moving away from tabs)
description: Improvements to sub navigation
date: 2020-08-21
---

Improving the styling of the sub navigation component.

## Before

Previously the sub navigation was styled like this:

![](old.png "Old sub navigation styles look like tabs")

Even though they look like tabs, they do not behave like tabs which could cause confusion.

True [tabs](https://design-system.service.gov.uk/components/tabs/) change the content dynamically with JavaScript and have certain keyboard behaviours.

## After

But our tabs are regular links that navigate to pages with a page refresh.

We agree with the GOV.UK Design System [working group that potential confusion should be avoided and make regular sub navigation look different to tabs](https://github.com/alphagov/govuk-design-system-backlog/issues/138#issuecomment-391748131).

So we changed the styles of the sub navigation to avoid looking like tabs like this:

![](new.png "New sub navigation styles do not look like tabs")
