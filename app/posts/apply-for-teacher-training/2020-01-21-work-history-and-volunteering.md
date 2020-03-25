---
title: Work history and volunteering guidance
description: Making sure providers get the information they need about a candidate's (unpaid) work history.
date: 2020-01-21
tags:
- AN011
- MN007
---

We want candidates to tell us about their paid work experience on one page and their unpaid experience or volunteering on another page.

This is one way of presenting work history to providers.

We need candidates to input their work history correctly so that we can assess whether this approach is useful for providers.

Clarifying the guidance on these pages should ensure that candidates do not:

* duplicate information across both pages
* omit information which could be relevant to their application

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Hypothesis

### Context

We launched Apply for teacher training with some potentially problematic guidance in the [work history page](/apply-for-teacher-training/work-history-and-volunteering#old-guidance-on-work-history-page) and [volunteering page](/apply-for-teacher-training/work-history-and-volunteering#old-guidance-on-volunteering-page).

Both sections suggested that we only want to know about school experience or experience working with children.

Teacher training providers are not allowed to make school experience a prerequisite for teacher training anymore.

Presenting the application form in a way that values school experience over other types of experience isn't fair on the candidate. It makes it more likely that the candidate omits other types of experience.

A couple of providers echoed these concerns. For example, Bedfordshire University said that the guidance could discourage candidates from including some types of work. This is the opposite of what they want to achieve: a big picture of the candidate.

### Our hypothesis

**If** we clarify the guidance on the [work history page](/apply-for-teacher-training/work-history-and-volunteering#new-guidance-on-work-history-page) and the [volunteering page](/apply-for-teacher-training/work-history-and-volunteering#new-guidance-on-volunteering-page)

**Then** candidates will show their potential for teaching

**Because** they will be encouraged to include all their experience, even if it wasn't working with children or in a school

### How will we know this works?

We’ll know this works when:

* candidates have no difficulty filling out these sections of the application form
* providers have a big picture of a candidate's work history

We'll test the new content (refer to screenshots below) with users to see if we get the right results.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Old guidance on work history page" },
    { text: "Old guidance on volunteering page" },
    { text: "New guidance on work history page" },
    { text: "New guidance on volunteering page" }
  ]
}) }}
