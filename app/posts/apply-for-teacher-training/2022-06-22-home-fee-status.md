---
title: Helping providers assess a candidate’s fee status
description: We designed nationality and residency questions to help providers assess fee status.
date: 2022-06-28
ogImage:
  src: /apply-for-teacher-training/home-fee-status/nationality-and-residency.png
  alt: "Flow diagram showing questions related to home fee status"
related:
  items:
    - text: Pull request adding nationality and residency section to the prototype
      href: https://github.com/DFE-Digital/apply-for-teacher-training-prototype/pull/646
---



## Contents

* [Overview](/apply-for-teacher-training/home-fee-status/#overview)
* [User need](/apply-for-teacher-training/home-fee-status/#user-need)
* [Hypothesis](/apply-for-teacher-training/home-fee-status/#hypothesis)
* [Nationality and residency section](/apply-for-teacher-training/home-fee-status/#nationality-and-residency-section)
* [British and Irish nationals](/apply-for-teacher-training/home-fee-status/#british-and-irish-nationals)
* [EU nationals with EU settled status](/apply-for-teacher-training/home-fee-status/#eu-nationals-with-eu-settled-status)
* [EU nationals with EU pre-settled status](/apply-for-teacher-training/home-fee-status/#eu-nationals-with-eu-pre-settled-status)
* [Candidates with indefinite leave to remain or right of abode](/apply-for-teacher-training/home-fee-status/#candidates-with-indefinite-leave-to-remain-or-right-of-abode)
* [Another immigration status](/apply-for-teacher-training/home-fee-status/#another-immigration-status)
* [Resources](/apply-for-teacher-training/home-fee-status/#resources)
* [Next steps](/apply-for-teacher-training/home-fee-status/#next-steps)


## Overview

We designed a new nationality and residency section to help providers assess candidates' fee status.

![Flow diagram showing questions related to nationality and residency](nationality-and-residency.png)

## User need

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

## British and Irish nationals

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

So our first idea was to ask British/Irish candidates the following question, with the option to respond 'Yes' or 'No':

<div class="govuk-inset-text">
Will you have been living in the UK, Ireland, Channel Islands, Isle of Man, EU, Switzerland, Iceland, Liechtenstein, Norway or British Overseas Territories for 3 years before the course starts?
</div>

We decided against this because:

* it may be inaccessible due to the length of the question
* most British/Irish candidates live permanently in the UK or Ireland - so listing all these places is unnecessary for most candidates

Instead, we divided the question into 2. Firstly, we just ask about the UK and Ireland:

![Screenshot showing the question 'Will you have been living in the UK or Ireland for 3 years by the time the course starts?'](uk-or-ireland.png)

Answering yes takes you straight to the check answers page because you’re likely to be eligible for home fee status.

We only ask about the full list of places if you answer ‘No’:

![Screenshot showing the question 'Where will you have been living for the 3 years before the course starts?'](british-irish-list.png)

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

![Screenshot showing the question 'Give details about where you’ll have been living for the 3 years before the course starts'.](detail-living.png)

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

![Screenshot showing the question 'Will you have been living in the UK or Ireland for 3 years by the time the course starts?' pointing out hint text about gap years.](hint-text-gap-year.png)

In the question with the full list of places, however, we do not mention temporary absences. It would add an extra layer to the question (which already has hint text) making it more complicated.

We tried and decided against the following hint text:

![Screenshot showing the question 'Where will you have been living for the 3 years before the course starts?' pointing out the hint text about gap years that we tried.](gap-year-hint-text.png)

Even if you select ‘Somewhere else’ when you do not need to (for example, you lived away for only a couple of months), your answer to the [give details question](detail-living.png) should help clarify things.

</div>
</details>

## EU nationals with EU settled status

EU nationals with EU settled status are also likely to be eligible for home fees if they’ve been permanently resident in any combination of the places listed above (the same list as for [British and Irish nationals](#british-and-irish-nationals)).

So, in addition to nationality, we need to find out about a candidate’s immigration status.

If you do not select British or Irish in the nationality question, we ask whether you have the right to work in the UK:

![Screenshot showing the question 'What's your nationality?' when 'Other' and 'French' are selected](nationality-other.png)

![Screenshot showing the question 'Do you already have the right to work or study in the UK for the duration of this course?'](right-to-work-in-uk.png)

If you say ‘No’ you go to the check answers page because you’re unlikely to be eligible for home fees.

<details class="govuk-details" data-module="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      What else happens if you say 'No'
    </span>
  </summary>
  <div class="govuk-details__text">

If you say that you do not have the right to work or study in the UK, and you also select a course which does not sponsor visas, you get the following warning message in the course choices section:

![Screenshot showing warning message when a course without visa sponsorship has been selected and user has selected that they do not yet have the right to work or study in the UK.](visa-warning.png)

This is because international candidates often need a student or skilled worker visa to get the right to work or study in the UK - only some courses sponsor these visas, so we need to warn candidates if they select a course which does not.

You can find out more about this warning message in our entry about [moving the personal details section to the top of the application form](/apply-for-teacher-training/moving-personal-details-to-top/).

</div>
</details>

If you say ‘Yes’, we ask for your immigration status:

![Screenshot showing the question 'What's your immigration status?'](immigration-status-eu-settled.png)

Selecting both an EU nationality like ‘French’ and ‘EU settled status’ takes you to the [UK or Ireland question](uk-or-ireland.png).

You're now on the same path as British/Irish nationals (saying 'Yes' takes you to the check answers page; saying 'No' takes you to the same [list of places that British/Irish nationals see](british-irish-list.png).

## EU nationals with EU pre-settled status

EU nationals with EU pre-settled status are likely to be eligible for home fees if they’ve been permanently resident in any combination of the following countries for the 3 years before the course starts:

• UK
• Ireland
• EU
• Switzerland
• Iceland
• Liechtenstein
• Norway
• British Overseas Territories

This is not the same list as for British/Irish candidates and EU nationals with EU settled status, as it does not contain the Channel Islands and Isle of Man.

So candidates who [select an EU nationality](nationality-other.png) like ‘French’ and ‘EU pre-settled status’ from the [immigration status question](immigration-status-eu-settled.png) see a different list of places if they reach the following question:

![Screenshot showing the question 'Where will you have been living for the 3 years before the course starts?' showing the list of places for EU nationals with EU pre-settled status.](eu-pre-settled-list.png)

<details class="govuk-details" data-module="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      What happens if you do not select an EU nationality
    </span>
  </summary>
  <div class="govuk-details__text">

  If you select a nationality that is not an EU nationality, and you also select 'EU settled status' or 'EU pre-settled status', you go straight to the check answers page rather than being asked about where you've been living.

  This is because you can only be eligible for home fees with settled or pre-settled status if you're an EU national.

  (It's possible to have EU settled or pre-settled status without an EU nationality.)

  </div>
  </details>

## Candidates with indefinite leave to remain or right of abode

Candidates with indefinite leave to remain or right of abode are likely to be eligible for home fees if they’ve been permanently resident in any combination of the following countries for the 3 years before the course starts:

* UK
* Ireland
* Channel Islands
* Isle of Man
* British Overseas Territories

This list is shorter than for British/Irish candidates or EU nationals with EU settled status.

So candidates who select ‘Indefinite leave to remain’ or ‘Right of abode’ from the immigration status question see a different list of places if they reach the following question:

![Screenshot showing the question 'Where will you have been living for the 3 years before the course starts?' showing the list of places for people with indefinite leave to remain or right of abode.](leave-to-remain-list.png)

## Another immigration status

We list only the immigration statuses which are most likely to make you eligible for home fees, and include 'Another immigration status' to capture other cases:

![Screenshot showing the question 'What's your immigration status?' when 'Another immigration status' is selected.](another-immigration-status.png)

For example, if a candidate is a refugee or holder of humanitarian protection, they may also be eligible for home fees. The text box allows candidates to elaborate on their immigration status.

## Resources

Not all parts of the [prototype](https://github.com/DFE-Digital/apply-for-teacher-training-prototype/pull/646) work as intended yet.

Refer to the following map for the intended user journey:

![Screenshot showing the full user journey map of the nationality and residency section.](home-fee-status.png)

## Next steps

The 'Nationality and residency' section was not implemented due to changing priorities.

If we reprioritise this work, we should test it with both candidates and providers.

The design is intended to support providers, rather than candidates. It could introduce a barrier for candidates, as it means they have more questions to answer - and giving details about where they've been living may be off-putting for some.

We tried to keep candidate questions to a minimum to reduce this burden (we think most people will only need to answer 2 questions).

As a result, the design will not give providers everything they need to know to make an assessment of fee status. It's merely intended to reduce the burden that providers currently experience in collecting this information off the service - signalling when further questions need to be asked.

If we implement this design we need to ensure that it's clear on the provider interface that candidates' answers to these questions will not necessarily be enough to assess their fee status.

We also need to assess whether it gives providers enough detail to have value. Otherwise, it does not merit the additional burden for candidates.
