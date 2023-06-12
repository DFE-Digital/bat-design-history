---
title: Request PE courses as launched for accredited bodies
description: The allocations process for the 2021 – 2022 recruitment cycle is now available to accredited bodies
date: 2020-06-15
tags:
  - allocations
  - accreditied providers
screenshots:
  items:
    - Request PE courses
    - Do you want to request PE for this organisation
    - Intends to offer fee-funded PE
    - Not offering fee-funded PE
    - Who are you requesting a course for
    - How many places would you like to request
    - Check your information
    - New organisation added
    - The request window has closed
    - Number of places confirmed
    - No PE requests were made
---

The allocations process for the 2021 – 2022 recruitment cycle is now available to accredited bodies.

Following the [allocations alpha](/publish-teacher-training-courses/allocations-alpha/), the request Physical Education (PE) feature was implemented in Publish teacher training courses (Publish). Development began in [April 2020](https://github.com/DFE-Digital/publish-teacher-training/pulls?page=2&q=allocation) and we launched the feature to accredited bodies in early June 2020.

## Design notes

The allocations user journey did not change post-alpha.

Content was significantly refined to improve guidance for users and updates such as increasing sub heading sizes were made to improve readability on pages with large amounts of content.

## Missing data

A number of instances were encountered where an organisation had a historical allocation but no corresponding PE course or vice versa. Considering this, we were required to omit displaying last year's allocation figure on [confirmation screens](/publish-teacher-training-courses/allocations-alpha/#intends-to-offer-fee-funded-pe) as the data was inaccurate for some organisations.

The allocations team will be in contact with these organisations individually.

[Trello card](https://trello.com/c/5YfNXZ89/2402-investigate-how-many-allocations-miss-match-with-the-funded-pe-courses-in-our-system?menu=filter&filter=allocations%20landing)

## Email to accredited bodies

This email was sent to accredited bodies on 8 June 2020.

{% set requestPeEmail %}
Dear Colleague

In April, we contacted you about requesting teacher training courses for the 2021/22 recruitment cycle.

As we set out in our email, for 2021/22 you only need to request:

- fee-funded PE courses (ones without a salary)
- early years initial teacher training (EYITT) courses
- any undergraduate teacher training courses

We also mentioned that, as an accredited body, you’ll need to request these courses on behalf of your training partners.

You are now able to request these courses. To do this, follow the steps below. The deadline for requests is midday on Friday 10 July. You’ll receive confirmation of how many places you’ve been allocated in September.

### Request PE

You should send your requests for fee-funded PE courses via [Publish teacher training courses](https://www.publish-teacher-training-courses.service.gov.uk/), the publishing service for [Find postgraduate teacher training](https://find-postgraduate-teacher-training.education.gov.uk/).

Go to the section titled ‘Request PE courses for 2021 – 2022’. You’ll find clear instructions on what to do.

### Request EYITT and undergraduate

You’ll need to complete a Google form to request any EYITT or undergraduate courses. In each case, you’ll be asked to specify trainee numbers.

- [Complete the Google form for EYITT courses](https://docs.google.com/forms/d/e/1FAIpQLSeHmeVJgyRrC3RpJMYnK1zEpjFsVn8xJfck_4bhvggjm6bozQ/viewform)
- [Complete the Google form for undergraduate teacher training courses](https://docs.google.com/forms/d/e/1FAIpQLSeE1poBDwObc-YchKxPMzEJjCRPX7b5XHZcYXIkOfo3zJRNfA/viewform)

### All other courses

You do not need to request any other courses. You’ll automatically get permission to recruit to them in September 2020. This will happen after your 2020/21 courses have been copied over in Publish (this is sometimes known as ‘rollover’), and you’ve confirmed they’re correct for the next cycle.

You do not need to take any action yet in relation to these courses. However, we’d recommend that you contact your training partners to agree what you’d like to offer for 2021/22.

In July we’ll write to you again, to tell you when your current courses will be copied over, and how you can publish them on Find.

### Get in touch

If you have any questions, contact us at becomingateacher@digital.education.gov.uk. If anyone else in your organisation needs to be aware of this email, please forward it to them.

Regards,
Becoming a Teacher team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Request teacher training courses for 2021/22",
  content: requestPeEmail
}) }}
