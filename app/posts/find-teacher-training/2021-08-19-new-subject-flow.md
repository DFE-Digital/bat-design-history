---
title: New subject flow
description: Why we changed how users select course subjects
date: 2021-08-19
related:
  items:
    - text: Special educational needs (SEN) filter
      href: /find-teacher-training/sen-filter/
    - text: SEND survey and updates
      href: /find-teacher-training/send-survey/

---

We have improved the way that we ask uses which course subjects they are interested in.

## Previous design

Previously, this was done via an [Accordion component](https://design-system.service.gov.uk/components/accordion/). This had sections for Primary, Secondary, Secondary: Modern languages, Further education and Special educations needs and disability (SEND).

![](select-subject-old-closed.png)

Opening these sections revealed a set of checkboxes for individual subjects.

![](select-subject-old-all-open.png)

## Issues with the previous design

Whilst users were generally able to select the subjects they were interested in, the design had some issues:

* Users can’t see the subjects until they interact with the page, which slows things down and can be confusing
* The page heading only mentions subjects, but ‘Primary’ and ‘Further education’ are not really subjects
* ‘Modern languages’ and ‘Further education’ can be unfamiliar terms
* The ‘Show only courses with a SEND specialism’ checkbox works in a different way from all the other checkboxes

The design also had some suspected accessibility issues. Each of the sections was marked up as a separate list of checkboxes, with a visually-hidden legend of ‘Choose from the following [section name] subjects’, in addition to the accordion section header. This may be confusing or unexpected.

The accordion design we were using had some [known accessibility issues](https://design-system.service.gov.uk/components/accordion/#known-issues-and-gaps):

> The section headings can be mistaken for links, but are treated as buttons. This fails WCAG 2.1 success criterion 1.3.1 Info and Relationships. We plan to fix this issue by the end of June 2021.
>
> The plus and minus icon is on the right side of the component, which means users of screen magnifiers might not see it.
>
> The ‘Open all’ button reads out as ‘Open all sections’ for screen readers. This is potentially confusing for users as the visual content is different to what screen readers read out.

## New flow

To resolve the issues, we have added an initial question about age group. This allows us to then present a different list of subjects depending upon which age group was selected.

![](subject-flow.png)

If a user selects ‘Primary’, we ask a follow-up question about whether they would like to see specialist subjects or not. If they answer Yes, we show the primary specialist subjects, as well as the option to see primary courses without a specialist subject.

If a user selects ‘Secondary’, we show all the secondary subjects a single alphabetical list. This proved to be simpler and quicker than separating out the language subjects.

If a user selects ‘Further education’, then no further course subject questions are required.

![Screenshot of new page askind users what age group they are interested in teaching](age-group.png)

## Special educational needs and disability (SEND)

Previously, the ‘Show only courses with a SEND specialism’ checkbox worked as [an additional filter](/find-teacher-training/sen-filter/) to the other subject checkboxes. This meant that if you ticked it as well as a subject, only courses had that subject AND a SEND-specialism were shown. This makes it behave differently from the other subject checkboxes.

We initially explored whether we could treat SEND as a subject, and have it behave the same way as other subjects. This makes some sense for primary courses which have specialisms, but less sense for secondary courses.

Instead, the simplest initial thing to do is to remove SEND as a checkbox from both the subject pages altogether, and keep it as a separate filter on the results page.

In future, we can review usage of this filter, alongside other issues around SEND-specialist courses (such as whether it is used consistently by providers) to decide whether or not to make further changes.

## Primary courses

If someone wants to teach the primary age group, we ask them if want to find courses with a specialist subject. Having this as a separate question lets us explain what this means, and also means that users who answer ‘No’ can skip straight to the list of courses.

![](primary.png)

If a user answers yes, they are shown a list of the specialist subjects. A checkbox at the bottom allows them to also see primary courses without a specialist subject.

![](primary-specialist.png)

## Secondary courses

If someone wants to teach the secondary age group, we show them a list of all the subjects in alphabetical order. Whilst this is a long list, we found in usability tests that users were able to find the subjects they were interested in quickly.

![](secondary.png)
