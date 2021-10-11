---
title: Updating the service unavailable pages
description: Improving how we show the service is offline for planned maintenance or that there’s a problem
date: 2021-10-06
screenshots:
  items:
    - text: There’s a problem with the service
      src: problem-with-the-service-page.png
    - text: The service is offline for planned maintenance
      src: service-unavailable-page.png
---

We updated the service unavailable pages used when:

- there’s a problem with the service - this is known as a 500 page or internal server error page
- the service is offline for planned maintenance - this is known as a 503 page or a shutter page

We wanted to make the design consistent between these pages.

## How it works

The pages do not include any elements which require the service to be available. This means that they do not include:

- account navigation
- feedback banner
- primary navigation
- chat widget
- footer navigation links

### There’s a problem with the service

This page includes:

- the page title “Sorry, there’s a problem with the service – Manage teacher training applications – GOV&#46;UK”
- the heading “Sorry, there’s a problem with the service”
- content telling the user to try again later and that any information they’ve entered has not been saved
- an email address for the user to contact us

### The service is offline for planned maintenance

This page includes:

- the page title “Sorry, the service is unavailable – Manage teacher training applications – GOV&#46;UK”
- the heading “Sorry, the service is unavailable”
- content telling the user when the service will be available if we know it, for example “You’ll be able to use the service from 3pm on Monday 11 October 2021.”
- content telling the user to try again later if we do not know when the service will be available
- content saying that any information the user has entered has not been saved
- an email address for the user to contact us
