---
title: Revisiting reasons for rejection
description: TODO
date: 2023-03-13
tags:
  - rejections
ogImage:
  src: /manage-teacher-training-applications/revisiting-reasons-for-rejection/reasons-for-rejection-revisited.png
  alt: "Illustration containing two headings: ‘Before’ and ’After’. Beneath the ‘Before’ heading are two checked boxes, where under each checked box, a ‘Reasons’ sub-heading is shown above some additional unchecked boxes. Beneath the ’After’ heading is just a set of boxes with no nested checkboxes."
---

![Illustration containing two headings: ‘Before’ and ’After’. Beneath the ‘Before’ heading are two checked boxes, where under each checked box, a ‘Reasons’ sub-heading is shown above some additional unchecked boxes. Beneath the ’After’ heading is just a set of boxes with no nested checkboxes.](reasons-for-rejection-revisited.png)

As part of some wider research and design work around the application criteria, we revisited the reasons that providers can select when rejecting a candidate, simplifying the interface and reducing the number of options.

## The issue

In April 2022, the reasons for rejections were changed following several rounds of research and iteration. The final [design that we shipped](/manage-teacher-training-applications/reasons-for-rejection-iteration-6/) contained a set of checkboxes with category labels. When checked, most of the categories revealed a further set of checkboxes with more specific reasons. Checking these revealed a text input labelled ‘Details’.

Unfortunately, whilst this tested well in usability sessions, since we launched this design we’ve found that ‘Other’ has been the most selected option.

## What we researched

We decided to try simplifying the design by removing the nested checkboxes, and instead only have a single list of checkboxes, which each still reveal a single ‘Details’ field.

![Screenshot showing a page with the heading ‘Feedback for Peter Essien’. Beneath the heading is a exclaimation mark icon and the bolded text ‘You must not reject candidates for a lack of experience working in a school’. Beaneath this is the subheading ‘Tell Peter Essien why you are rejecting their application’. Beneath this is a set of 9 checkboxes labelled with different reasons. Beneath this is text box with the label ‘Give Peter Essien advice on what to do next. For example, “You should apply again to a different course”’. Beneath this is a green ‘Continue’ button.](updated-rejection-reasons.png "New design for the candidate feedback screen")

We reduced the total number of checkboxes from 28 to 9, by grouping some of the checkboxes that we considered very similar.

The reasons that related to the statutory criteria for initial teacher training (having a degree and GCSE minimum grades, or equivalent) were moved onto separate pages.

The ‘Other’ option was removed – in part so that we could see within the usability research whether participants thought there were any additional options needed.

The content was also edited to have a consistent style and be more descriptive, for example ‘We cannot sponsor a visa’ instead of ‘Visa sponsorship’.

{% set oldList %}
<h3 class="govuk-heading-s">Qualifications</h3>
<ul class="govuk-list govuk-list--bullet">
  <li>No maths GCSE at minimum grade 4 or C, or equivalent</li>
  <li>No English GCSE at minimum grade 4 or C, or equivalent</li>
  <li>No science GCSE at minimum grade 4 or C, or equivalent</li>
  <li>No bachelor’s degree or equivalent</li>
  <li>Degree does not meet course requirements</li>
  <li>Could not verify qualifications</li>
  <li>Other</li>
</ul>

<h3 class="govuk-heading-s">Personal statement</h3>
<ul class="govuk-list govuk-list--bullet">
  <li>Quality of writing</li>
  <li>Other</li>
</ul>

<h3 class="govuk-heading-s">Teaching knowledge, ability and interview performance</h3>
<ul class="govuk-list govuk-list--bullet">
  <li>Teaching knowledge, ability and interview performance</li>
  <li>Reasons</li>
  <li>Subject knowledge</li>
  <li>Safeguarding knowledge</li>
  <li>Teaching method knowledge</li>
  <li>Teaching role knowledge</li>
  <li>Teaching demonstration</li>
  <li>Other</li>
</ul>

<h3 class="govuk-heading-s">Communication, interview attendance and scheduling</h3>
<ul class="govuk-list govuk-list--bullet">
  <li>Did not reply to messages</li>
  <li>Did not attend interview</li>
  <li>Could not arrange interview</li>
  <li>Other</li>
</ul>

<ul class="govuk-list govuk-list--bullet">
  <li>Safeguarding</li>
  <li>Visa sponsorship</li>
  <li>Course full</li>
  <li>Other</li>
</ul>
{% endset %}

{% set newList %}
  <ul class="govuk-list govuk-list--bullet">
    <li>Does not have a degree or A level in [course subject]</li>
    <li>Degree class does not meet course requirements</li>
    <li>Personal statement did not demonstrate they are suitable to teach</li>
    <li>Could not get in touch with them</li>
    <li>Could not arrange an interview</li>
    <li>Interview performance was not strong enough</li>
    <li>We have safeguarding concerns</li>
    <li>We cannot sponsor a visa</li>
    <li>The course is now full</li>
  </ul>
{% endset %}

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-half">
  <h3 class="govuk-heading-m">Before</h3>
    {{ oldList | safe }}
  </div>
  <div class="govuk-grid-column-one-half">
  <h3 class="govuk-heading-m">After</h3>
    {{newList | safe }}
  </div>
</div>

We added some warning text at the top to remind providers that they must not reject candidates for having a lack of experience working in a school.

Beneath the reasons for rejection, we added a text box where providers could give the candidate advice on what to do next.

## Research

We tested the changed designs in usability sessions with participants from 9 providers.

Most participants did not notice the change, or the lack of an ‘other’ option.

All participants said that the options covered all the rejection reasons they could think of, and could not suggest any missing ones.

They were mixed reactions to the warning content about not rejecting candidates due to a lack of experience working in a school. Some were already aware of this guidance, others suggested that this experience was still helpful for candidates, and one suggested it was almost essential.

Most providers liked the idea of the ‘advice on what to do next’ box, and suggested that it might:

* be helpful for candidates
* lead to fewer candidate requests for additional feedback from providers
* allow a more human, friendly approach

2 providers were not keen, and suggested that candidates should be looking elsewhere for this advice.

Participants suggested that there might be some cases where it would be difficult to give the candidate advice on what to do next, such as when applications were exceptionally poor, or the issue was that an interview could not be arranged.

Participants also suggested that there might be some overlap between content written in the advice box, and detail given in the boxes about why a candidate was not successful. However they thought they would be able to separate this out once they got used to the new design.

## Future considerations

Before we make these changes to the live service, we need to consider:

* how we would update the rejection reasons in the candidate interface and emails
* whether or not we should go ahead with the separate advice box, and if it should be optional
* what the impact on the [rejection codes in the API](https://www.apply-for-teacher-training.service.gov.uk/api-docs/v1.3/reference#rejectionreason-object) would be

