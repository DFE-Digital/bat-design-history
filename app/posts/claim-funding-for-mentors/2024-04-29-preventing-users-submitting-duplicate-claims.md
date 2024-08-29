---
title: Preventing users submitting duplicate claims
description: We updated how we prevent duplicate mentor-provider claims to include a check at the end of the claim submission flow
date: 2024-04-29T12:01:00+00:00
tags:
  - duplication
  - claims
related:
  items:
    - text: Preventing duplicate mentor-provider claims
      href: /claim-funding-for-mentors/preventing-duplicate-mentor-provider-claims/
    - text: Submitting claims for funding
      href: /claim-funding-for-mentors/submitting-claims-for-funding/
---

Previously, we created a way to [prevent schools from submitting claims for funding](/claim-funding-for-mentors/preventing-duplicate-mentor-provider-claims/) mentor training that exceeded the hours for a mentor’s training with a single provider.

However, it is still possible for two users at a school to submit identical claims if they are processing the claim simultaneously.

To address this, we have introduced a new check at the end of the claim flow. This check is designed to identify if a user has already submitted an identical claim. If a duplicate claim is detected, we display a message stating, “You cannot submit the claim because your mentors' information has recently changed.” Users can view the claims and try again.

![Preventing duplicate claims being submitted](cannot-submit-claim.png)
