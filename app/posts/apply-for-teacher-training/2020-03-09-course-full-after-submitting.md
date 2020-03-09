---
title: Courses that become full after submission
description: Considerations for when a course becomes full between submission and the provider receiving it
date: 2020-03-09
related:
  items:
    - text: Trello
      href: https://trello.com/c/Iz9hu9JT/1102-design-when-a-course-becomes-full-between-submission-provider-receiving-application
    - text: Google Doc
      href: https://docs.google.com/document/d/1kx2GDiQ3GnPwShA6-Y906wTZRr27VMFoMD3aVyjVYtY
---

Consider this scenario:

> A candidate chooses a course, the course has spaces at submission but becomes full whilst waiting for references or during the 5 day holding period

Courses mostly get marked as full from May until the end of year. There’s a lot just before summer as providers stop recruiting – their courses aren’t full, but they have no one to do interviews over summer. Courses with the highest demand and fewest places, ie salaried and PE courses, can get marked as full at any time.

Right now, if a course becomes full then:

- we do not tell the candidate
- the application is forwarded to the provider as normal when references are received and the 5 day holding period has passed

This might be ok, if the provider will still consider the application. It depends on what we discover in research with providers.

## Questions for research

### What do providers expect?

What is a provider’s expectation when they mark a course as full? Do they expect a trickle of in-progress applications to still come through?

[We’ve seen 1 provider say this](https://lookback.io/watch/kQjSYuhwEcT8iwHoh?t=9m15s), but we don’t know if that’s representative:
> “If you’re just waiting for your references on UCAS, and then [I, the provider] close [the course], that application can still come through”

### Will these applications be considered?

If an application comes in just after a course is marked as full, will it be considered?

What are the reasons for marking a course as full? For example, it’s not just that it’s full, they might expect it to be full based on interview volumes, maybe it’s not possible to recruit at the moment – staff holiday, staff sickness, summer, or some other reason.

How often does a provider reopen a course? Is it common? Is it prevalent for a certain type of course?

### Can we explicitly ask the provider?

We expect providers to respond to this situation differently.

When a provider is closing their course, if we added a feature that asked: “Do you want to accept submitted applications that are pending references?”, would that be useful? ([Design for closing a course](/publish-teacher-training-courses/vacancies-iteration-14-jan))

## Notifying candidates

We could notify the candidate of the situation, and give them the opportunity to edit their application.

We won't know how a provider will respond to their pending application.

If we knew it would be considered we would not need to send this email at all.

If we knew it would not be considered, the messaging can be firmer – you should change to a new course.

As we don’t know, we can suggest they edit their choices but without much conviction.

We could also suggest they contact the provider, but time is also an element here – the candidate will have between 1 and 7 days to make their edits.

We also don’t know how important the course is to a candidate – if it's their first choice, they might want to take a risk and submit their application anyway.

## Example email

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "A course you’ve applied to is full",
  content: "You applied to the course [provider] – [course] ([code]). The provider marked this course as full before we received your references.

If you do nothing your application will be sent. Some providers will still consider your application because it was submitted before they marked the course as full.

You still have [X days] to edit your application. You can:

* add another course [ if less than 3 courses ]
* change this course to another one [ if 3 courses ]
* do nothing and we will still send your application to your training provider

[link to application]"
}) }}
