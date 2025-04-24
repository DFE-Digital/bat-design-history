---
title: Communicating API and CSV changes
description: Informing the sector of changes to the Register API and CSV
date: 2025-04-01
tags:
  - trainees
  - providers
  - vendors
  - API
  - CSV
screenshots:
  items:
    - text: Proposed footer with news and updates link
      src: proposed-footer.png
    - text: Proposed news and updates list
      src: news-and-updates-index.png
    - text: Proposed news and updates post item
      src: news-and-updates-post.png
    - text: How to use this service
      src: how-to-use-this-service.png
    - text: Navigation exploration
      src: navigation-exploration.png
    - text: Existing footer and link to the news page
      src: existing-footer-and-link-to-news.png
    - text: Existing news and updates page
      src: existing-news-and-updates-page.png
---

Register currently sends email notifications to providers, and we have a basic news and updates page for the service; however, this needs to be enhanced to accommodate our new role in communicating changes to the sector.

## What we did

We began by examining the guidance, news, and updates currently available on Register. While functional, we wanted to know if we could integrate it more cohesively within the service.

It became clear that the existing single page for news and updates would not be sufficient in the future.

In terms of navigation, we investigated adding a ‘Documentation’ link to the main header and then utilising secondary navigation to access ‘News and updates’, ‘How to use this service’, ‘API documentation’ and ‘CSV documentation’.

![Screenshot showing an alternative navigation](navigation-exploration.png "Exploration of navigation options")

This proved unviable because:

- the documentation is not available to users who are logged out of the service
- the header navigation has been deprecated for a separate [service navigation component](https://design-system.service.gov.uk/components/service-navigation/), which we’re adopting.

## Our proposed solutions

We intend to move the secondary navigation into an expanded footer using the standard [GOV.UK component](https://design-system.service.gov.uk/components/footer/).

![Screenshot showing the proposed expanded footer including news and updates link](proposed-footer.png "Proposed footer with news and updates link")

This approach to navigation:

- allows the user to access the information without needing to log in
- allows the user to access the information from any page within the service
- allows the navigation to scale when further documentation is added

We also plan to enhance scalability by creating a post list page linked to individual post pages. This approach will allow us to include more detailed content that supplements the high-level changes communicated to providers via email.

![Screenshot showing the proposed news and updates list](news-and-updates-index.png "Proposed news and updates list")

![Screenshot showing an example news and updates post item](news-and-updates-post.png "Proposed news and updates post item")
