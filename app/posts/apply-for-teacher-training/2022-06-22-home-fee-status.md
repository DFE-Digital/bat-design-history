---
title: Helping providers assess a candidate’s fee status
description: We designed nationality and residency questions to help providers assess fee status.
date: 2022-06-22
---

Teacher training providers need to know if a candidate should pay home or international course fees before they make an offer.

This is so that they can quote the course fees when they make the offer.

## Hypothesis

If we ask candidates about their nationality and residency in the application form, we can give providers an indication of their fee status.

Providers can ask further questions outside of the service, before making an offer, to accurately assess fee status.

## Nationality and residency section

We added a new section about nationality and residency:

![Screenshot showing the new nationality and residency section.](new-nationality-residency-section.png)

The first question asks for your nationality:

![Screenshot showing the question 'What's your nationality?'](your-nationality.png)

The nationality question was previously located in the ‘personal information’ section:

![Screenshot showing where the nationality question was previously located.](personal-information-section.png)

## British/Irish nationals

British/Irish nationals who’ve been permanently resident in any combination of the following places for the 3 years before the course starts are usually eligible for home fees:

* UK
* Ireland
* Channel Islands
* Isle of Man
* EU
* Switzerland
* Iceland
* Liechtenstein
* Norway
* British Overseas Territories   

So our first idea was to ask British/Irish candidates the following question:

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  content: "

  Will you have been living in the UK, Ireland, Channel Islands, Isle of Man, EU, Switzerland, Iceland, Liechtenstein, Norway or British Overseas Territories for 3 years before the course starts?

  ( ) Yes
  ( ) No
"
}) }}

We decided against this because:

* it may be inaccessible due to the length of the question
* most British/Irish candidates live permanently in the UK or Ireland - so listing all these places is unnecessary for most candidates

Instead, we divided the question into 2. Firstly, we just ask about the UK and Ireland:

![x.](uk-or-ireland.png)

Answering yes takes you straight to the check answers page because you’re likely to be eligible for home fee status.

We only ask about the full list of places if you answer ‘No’:

![x.](british-irish-list.png)

<details class="govuk-details" data-module="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Why we used checkboxes
    </span>
  </summary>
  <div class="govuk-details__text">

  We listed the places as checkboxes to try to make the question easy to answer.

  It does not matter to the provider precisely which places from the list you've been living in - they all make you eligible for home fees (except 'Somewhere else').

  So in listing the places as checkboxes we’re asking for more data than we need in favour of usability.

  We need to test this with candidates to see if it’s the right approach.

  </div>
</details>

If ‘Somewhere else' is not part of your selection, you go to the check answers page - you should be eligible for home fee status.

If ‘Somewhere else’ is part of your selection, we ask for more detail:

![x.](detail-living.png)

This is because you’re unlikely to be eligible for home fees if you’ve lived outside the listed places for a significant period of time, so providers need to find out more.

<details class="govuk-details" data-module="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Temporary absences
    </span>
  </summary>
  <div class="govuk-details__text">

If you've lived outside the listed places temporarily, for example for a gap year, you’re still likely to be eligible for home fees.

In this question we discourage candidates from treating gap years as time spent away:

![x.](hint-text-gap-year.png)

In the [question with the full list of places](/british-irish-list.png), however, we do not mention temporary absences.

It would add an extra layer to the question (which already has hint text) making it more complicated.

We tried and decided against the following hint text:  

![x.](gap-year-hint-text.png)

Even if you select ‘Somewhere else’ when you do not need to (for example, you lived away for only a couple of months), your answer to the [give details question](/detail-living.png) should help clarify things.

</div>
</details>
