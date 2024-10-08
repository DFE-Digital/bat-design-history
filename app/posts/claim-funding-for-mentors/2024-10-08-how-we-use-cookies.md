---
title: How we use cookies
description: We only use essential cookies to make the service work
date: 2024-10-08
tags:
  - cookies
  - privacy
related:
  items:
    - text: GOV.UK Design System cookies page pattern
      href: https://design-system.service.gov.uk/patterns/cookies-page/
    - text: GOV.UK Design System cookie banner component
      href: https://design-system.service.gov.uk/components/cookie-banner/
    - text: DfE Analytics GitHub repository
      href: https://github.com/DFE-Digital/dfe-analytics
    - text: Information Commissioner’s Office - Lawful basis for processing public data
      href: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/lawful-basis-for-processing/public-task/
    - text: Claim funding for mentor training cookies page
      href: https://claim-funding-for-mentor-training.education.gov.uk/cookies
# screenshots:
#   items:
#     - text: Cookies page
#       src: cookies-page.png
---

Claim funding for mentor training only uses essential cookies, so [our cookies page](https://claim-funding-for-mentor-training.education.gov.uk/cookies) is relatively short, and we do not need to use a [cookie banner](https://design-system.service.gov.uk/components/cookie-banner/).

![Image showing the cookies page that describes how we only use essential cookies to make the service work](cookies-page.png "Cookies page")

Unlike other DfE services, we use an in-house analytics platform. The DfE Analytics platform does not use cookies, so an opt-out mechanism is unnecessary.

The [DfE Analytics gem](https://github.com/DFE-Digital/dfe-analytics) is a custom solution designed to collect and send data directly to Google BigQuery from the server side of our Ruby on Rails applications. It works differently from Google Analytics, which works on the client side via scripts embedded in web pages.

The General Data Protection Regulations (GDPR) require opt-in for cookies, but server-side tracking (as used by DfE analytics) works by logging requests, user actions, or metadata directly from the server without needing Cookies stored in the user’s browser.

The analytics we use are backend, and most of [the data we collect is for a Public Task](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/lawful-basis-for-processing/public-task/), which means we use the data in Google BigQuery for reporting and improving public services, funding, etc. Users cannot opt out of data used for a Public Task.
