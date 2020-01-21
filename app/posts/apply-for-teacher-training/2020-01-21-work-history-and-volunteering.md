---
title: The difference between work history and volunteering
description: The content on the work history and volunteering pages had conflicting information.
---
We want candidates to tell us about their paid work experience on one page and their unpaid experience or volunteering on another page.

This is one way of presenting work history to providers.

We need candidates to input their work history correctly so that we can assess whether this approach is useful for providers.

Clarifying the guidance on these pages should ensure that candidates do not:

* duplicate information across both pages
* omit information which could be relevant to their application

## User needs

As a provider, I need enough detail about a candidate’s work history, unpaid experience and volunteering so that I can make decisions on their application.

As a candidate, I need to show my work history, unpaid experience and volunteering so that I can demonstrate my potential for teaching.

## Hypotheses

**Context**

We launched Apply for teacher training with some potentially problematic guidance in the [work history page](http://localhost:8080/apply-for-teacher-training/work-history-and-volunteering#guidance-on-work-history-page) and [volunteering page](http://localhost:8080/apply-for-teacher-training/work-history-and-volunteering#guidance-on-volunteering-page).

Both sections suggested that we only want to know about school experience or experience working with children.

Teacher training providers are not allowed to make school experience a prerequisite for teacher training anymore.

Presenting the application form in a way that values school experience over other types of experience isn't fair on the candidate. It makes it more likely that the candidate omits other types of experience.

A couple of providers echoed these concerns. For example, Bedfordshire University said that the guidance could discourage candidates from including some types of work. This is the opposite of what they want to achieve: a big picture of the candidate.   

**If** we clarify the guidance on the [work history page](http://localhost:8080/apply-for-teacher-training/work-history-and-volunteering#guidance-on-work-history-page) and the [volunteering page](http://localhost:8080/apply-for-teacher-training/work-history-and-volunteering#guidance-on-volunteering-page)

**Then** candidates will show their potential for teaching

**Because** they will be encouraged to include all their experience, even if it wasn't working with children or in a school

## How will we know it works?

 We’ll know this works when:

 * candidates have no difficulty filling out these sections of the application form
 * providers have a big picture of a candidate's work history

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Guidance on work history page" },
    { text: "Guidance on volunteering page" },
    { text: "New guidance on work history page" },
    { text: "New guidance on volunteering page" }
  ]
}) }}
