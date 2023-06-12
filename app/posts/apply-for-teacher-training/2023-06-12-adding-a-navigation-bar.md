---
title: Adding a navigation bar
description: Why we added a new navigation bar to the candidate interface
date: 2023-06-12
tags:
  - navigation
ogImage:
  src: /apply-for-teacher-training/adding-a-navigation-bar/navigation-bar.png
  alt: "Illustration showing 3 horizontal elements: a bar with a black background and a crown and GOV.UK in white, a bar with a white background and a blue 'BETA' badge, and a bar with a grey background and 'Your applications' and 'Sign out' links in blue text."
---

![Illustration showing 3 horizontal elements: a bar with a black background and a crown and GOV.UK in white, a bar with a white background and a blue 'BETA' badge, and a bar with a grey background and 'Your applications' and 'Sign out' links in blue text.](navigation-bar.png)

We added a navigation bar to the candidate interface.

Currently, this only contains 2 items, but we added the navigation bar to enable us to add additional navigation opens as we [change the application process](/apply-for-teacher-training/changing-application-process/) in future.

This change was made on 8 June 2023.

## The issue

We started exploring how we might change the application process to allow candidate to send additional applications whilst waiting for existing applications to be responded to. We realised that this would require having access to both the pre-offer and post-offer interfaces simultaneously.

![Screenshot showing a bar with a black background, and the following elements in white: a crown, 'GOV.UK', 'Apply for teacher training', an email address (non-bold) and a 'Sign out' link (in bold).](previous-header.png)

The previous design included the user’s email address and a ‘sign out’ link within the black GOVUK header bar. We could not find a strong user need for always displaying the user’s email address. Research from other teams has also shown in the past that users sometimes do not spot navigation links within the black header bar (although this may be less true for sign out links).

## What we did

We re-used the same navigation bar design that was already used on the provider-facing Manage interface.

![Screenshot showing a bar with a black background, and just the crown, ’GOV.UK' and 'Apply for teacher training' in white text. Beneath that is a bar with a grey background. On the left is a link in blue text with a blue border beneath labelled 'Your applications'. On the right is blue text labelled 'Sign out'](new-header.png)

Initially, the navigation bar has a single item on the left labelled ’Your application’. This changes to ’Your offer’ if a candidate accepts an offer.

If the user has submitted their application and applied for more than one course, the label is pluralised to ‘Your applications’, matching the page title, as at this point we now treat each course as a separate application.

The ‘Sign out’ link is right-aligned on the right hand side of the navigation bar.

The black GOVUK header bar has been simplified to just show the crown, GOV.UK and the service name. This now takes up less vertical room.

The border under the beta banner was removed. This is no longer needed as separation from the rest of the page, as the navigation bar does this.

The blue GOVUK brand border beneath the black GOVUK header was made to stretch to the width of the screen, for visual consistency with the navigation bar.

### Mobile view

Previously, the email address and Sign out link used the standard [Header with service name and navigation component](https://design-system.service.gov.uk/components/header/#header-with-service-name-and-navigation) from the GOV.UK Design System.

This meant that on mobile views, a ‘Menu’ button appears which toggles the display of the 2 items. Initially, the email address and sign out button is hidden:

<div class="app-images--two-thirds-width">

![Screenshot of a narrower window showing a black bar with a 'Menu' button in white at the top right. This has a downwards-pointing arrow to the right of it.](previous-mobile-collapsed.png)

Clicking the menu button revealed the email address and sign out link:

![Screenshot of a narrower window showing a black bar with a 'Menu' button in white at the top right, this time with an updwards-pointing arrow to the right of it. Beneath the 'Apply for teacher training' bold text, 2 rows have been revealed. The first contains an email address (non-bold), the second row contains 'Sign out' (bold)](previous-mobile-open.png)

In the new design, there’s no need for any collapsing of items into a menu button toggle:

![Screenshot of a narrower window, this time with no 'Menu' button at the top right. Instead the same bar with a grey background beneath it appears as in the desktop version above, with both 'Your application' and 'Sign out' links visible.](new-mobile.png)
</div>

## Further considerations

The pronoun ‘Your’ was included as ‘Application’ has multiple meanings and would be ambiguous if used on its own. In future it may be worth considering alternative words or phrases.

The GOV.UK One Login service team are currently exploring a [new header design for government services](https://github.com/alphagov/di-govuk-one-login-service-header). This could potentially be adopted in future.
