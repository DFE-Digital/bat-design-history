---
title: Helping providers assess a candidate’s fee status
description: We designed nationality and residency questions to help providers assess fee status.
date: 2022-06-22
---

Teacher training providers need to know if a candidate should pay home or international course fees before they make an offer.

This is so that they can quote the course fees when they make the offer.

## Hypothesis

If we ask candidates about their nationality and residency in the application form, we can give providers an indication of candidates’ fee status.

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

![x.](british-irish-full-place-list.png)
