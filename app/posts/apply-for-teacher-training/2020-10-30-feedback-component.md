---
title: Prompting for feedback throughout the application journey
description: Inviting candidates to provide feedback on the current page.
date: 2020-10-30
screenshots:
  items:
    - text: Prompt
      caption: The feedback prompt appears below any question or page content. Unlike the component used on GOV.​UK, the background is grey to lessen its prominence.
    - text: Feedback form
      caption: If a candidate selects ‘Yes’, a feedback form is revealed. This provides three structured responses and a text area to add a free text response.
    - text: Success message
      caption: If a candidate selects ‘No’, or selects ‘Yes’ and then submits the feedback form, we replace the prompt with a success message.
    - text: Feedback form (no JavaScript)
      caption: If the candidate does not have JavaScript enabled, or the script fails to run, show the feedback form instead.
    - text: Success message (no JavaScript)
      caption: Upon submitting the feedback form, the candidate is taken to a thank-you page, which includes a link back to the page they came from.
related:
  items:
    - text: Surveying users holistically
      href: https://docs.google.com/presentation/d/1x8TB_b0D_7crZ_gYo_e1eJXu_U2tp5z6y3f7tOaHD-A/
      description: Our approach to gathering feedback across Find and Apply services.
---

As the volume of users applying on the service increases from ~10% to 100% of teacher training applicants, we need a way to gather feedback systematically so that we can:

* understand and hopefully preempt drop off
* check that improvements and fixes are working

We already ask for feedback once candidates submit an application, but some never submit. Others use the service for months before – and after – they submit. We need a way to collect feedback at other points along the journey.

GOV.​UK uses a component that may help us achieve this. The [feedback component](https://components.publishing.service.gov.uk/component-guide/feedback). It is designed to sit just above the footer invites user feedback on the current page:

![Screenshot of a banner informing candidates of the upcoming deadline for applications.](govuk-component.png)

Pages on GOV.​UK tend to revolve around guidance, whereas many pages within our service tend to be form-based. However, we can adapt this component by using a prompt question that works better given the context of a section within a form.

We can also update the design so that it’s not as prominent on pages, where the question should have focus.

{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}
{{ govukInsetText({
  html: "To ensure we gather feedback consistently, we will use <a href=\"/find-teacher-training/feedback-component\">the same component on the Find service</a>, too"
}) }}

## Hypotheses

If we show a feedback component above the footer on certain points along the journey
Then candidates will be more likely to tell us what issues they are having
Because they will find it easier to give feedback at the moment they come across a problem
