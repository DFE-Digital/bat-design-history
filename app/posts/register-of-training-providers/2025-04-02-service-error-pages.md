---
title: Service error pages
description: We added error pages shown when a page is not found or when there is a problem with the service
date: 2025-04-02
tags:
  - error pages
  - service unavailable
related:
  items:
    - text: Getting help
      href: /register-of-training-providers/getting-help/
    - text: Updating the error pages on Publish teacher training courses
      href: /publish-teacher-training-courses/updating-error-pages/
    - text: Updating the error pages on Find postgraduate teacher training
      href: /find-teacher-training/updating-error-pages/
    - text: Updating the service unavailable pages on Manage teacher training applications
      href: /manage-teacher-training-applications/updating-the-service-unavailable-pages/
    - text: Service error pages
      href: /claim-funding-for-mentors/service-error-pages/
screenshots:
  items:
    - text: Page not found - signed in
      src: page-not-found--signed-in.png
    - text: Page not found - signed out
      src: page-not-found--signed-out.png
    - text: There’s a problem with the service
      src: problem-with-the-service.png
    - text: Service unavailable
      src: service-unavailable.png
    - text: Account not authorised
      src: account-not-authorised.png
    - text: Account not recognised
      src: account-not-recognised.png
    - text: Account not linked to an organisation
      src: account-no-organisation.png
eleventyComputed:
  eleventyNavigation:
    key: register-training-providers-error-pages
---

We added the service error pages used when:

- a page is not found - this is known as a 404 page
- there’s a problem with the service - this is known as a 500 page or internal server error page
- the service is unavailable - this is known as a 503 page or a shutter page
- users are not authorised to access the service
- users are not linked to an organisation in the service
- users are not recognised

## How it works

The ‘Page not found’ page tells the user we cannot find the page they were trying to view. We include navigation to allow the user to continue using the service.

The service unavailable pages do not include any elements which require the service to be available. This means that they do not include:

- account navigation
- feedback banner
- organisation switcher
- primary navigation
- breadcrumbs and back links
- footer navigation links

### Page not found

This page includes:

- the page title - ‘Page not found - Register of training providers - GOV.UK’
- the heading - ‘Page not found’
- content telling the user to check the web address
- an email address for the user to contact us

### There’s a problem with the service

This page includes:

- the page title - ‘Sorry, there’s a problem with the service - Register of training providers - GOV.UK’
- the heading - ‘Sorry, there’s a problem with the service’
- content telling the user to try again later and that any information they’ve entered has not been saved
- an email address for the user to contact us

### The service is unavailable

This page includes:

- the page title - ‘Sorry, the service is unavailable – Register of training providers – GOV.UK’
- the heading - ‘Sorry, the service is unavailable’
- content telling the user when the service will be available if we know it, for example, “You will be able to use the service from 3pm on Wednesday 16 April 2025.”
- content telling the user to try again later if we do not know when the service will be available - this should not usually be the case for planned maintenance
- content saying that any information the user has entered has not been saved
- an email address for the user to contact us

### Account not authorised

This page includes:

- the page title - ‘Your account is not authorised - Register of training providers - GOV.UK’
- the heading - ‘Your account is not authorised’
- content telling the user they are not authorised to access the service
- an email address for the user to contact us

### Account not recognised

This page includes:

- the page title - ‘Ask for an account to access the Register of training providers - Register of training providers - GOV.UK’
- the heading - ‘Ask for an account to access the Register of training providers’
- content telling the user they need an account to access the service
- an email address for the user to contact us

### Account not linked to an organisation

This page includes:

- the page title - ‘You have not been linked to an organisation yet - Register of training providers - GOV.UK’
- the heading - ‘You have not been linked to an organisation yet’
- content telling the user they’ve successfully signed in to the service but their account has not been linked to an organisation
- an email address for the user to contact us
