---
title: Round 9 support console research findings
description: Understanding how support users will use the payment, sampling and clawback processes
date: 2024-11-13
tags:
  - research
  - claims
  - support
related:
  items:
    - text: Round 7 payment and sampling research findings
      href: /claim-funding-for-mentors/round-7-payment-and-sampling-research-findings/
    - text: Showing all claims in support
      href: /claim-funding-for-mentors/showing-all-claims-in-support/
    - text: Updating how we show all claims in support
      href: /claim-funding-for-mentors/updating-how-we-show-all-claims-in-support/
    - text: Managing payments in support
      href: /claim-funding-for-mentors/managing-payments-in-support/
    - text: Auditing claims in support
      href: /claim-funding-for-mentors/auditing-claims-in-support/
    - text: Clawing back claims via Support after they have been paid
      href: /claim-funding-for-mentors/clawing-back-claims-via-support-after-they-have-been-paid/
---

## Goals of the research

This research aimed to test the user journeys for payments, sampling and clawbacks within the support console.

## Who we spoke to

We spoke to 3 members of the support team who will be managing claims for the Claim funding for mentor training service via the support console.

## Methodology

We carried out task-based usability testing with participants to test the main tasks that will be completed within the support console to manage claims.

We used example CSV files, allowing participants to upload to the support console as part of the user journeys.

## Limitations

Several steps within the payments, sampling and clawback journeys are carried out off-service.

This round of research did not include several user groups involved in the end-to-end journey, including:

- schools
- accredited providers
- Education and Skills Funding Agency (ESFA)

In the absence of these user groups, we could not test:

- communication with schools and providers relating to claims
- communication with ESFA relating to payments and clawbacks
- interactions with Zendesk relating to the above communications
- interactions and usability of the CSV files

Therefore, this round of research did not test the full end-to-end journey.

All research took place within the support console prototype.

## Key insights

### Download CSV button

When asked how users would send claims to ESFA for payment, the ‘Download CSV’ button on the ‘All claims’ page caused confusion.

Because the ‘Download CSV’ is the first call to action they see when on the ‘All claims’ page, they thought this was the action they needed to take to send claims to ESFA.

Participants did not initially see the ‘Payments’ section in the sub-navigation adjacent to the ‘All claims’ section.

#### Recommendations

The ‘Download CSV’ button would only be used when an accredited provider asks to see a list of claims associated with them. Our research findings with accredited providers show that this user need is a low priority.

We recommend exploring the following options:

- changing the primary call to action to a secondary call to action, making it grey instead of green, which users associate with an action to take
- improving the content on the page when they select the call to action, including text informing them where to send payments to ESFA
- removing the call to action completely and giving access to accredited providers to view claims

### How to action claims

There needed to be more clarity on how to action claims within the support console.

Participants expected to be able to perform all actions on the 'All claims' page. They needed help understanding why and how to perform actions within each section.

However, they said that they would better understand how it worked once they had training.

#### Recommendations

Explore the purpose and need for an ‘all claims’ page. It is currently assumed that support users would want to see a list of all claims, but there is no evidence of a user's need for this. The primary purpose of the ‘All claims’ page is for providers to gain access to claims associated with them.

Include a prompt on the page to help users understand where to go to act on a claim.

### Status labels

Some status labels needed to be clarified.

Specifically, the ‘information requested’ and ‘information sent’ statuses were not apparent to the participants regarding who acted. “Has the information been sent to them by us, or have they sent it to us?”

#### Recommendations

Make the label content more descriptive, and clarify who requested or sent the information.

### Rejecting claims

When a user rejects a claim, it doesn’t mean the whole claim is wrong.

We need to be clear that this is how it works, as not all participants realised this.

One participant spotted this and said they would have assumed the whole claim was incorrect based on rejection. This requires an action from the support user to specify which mentor is incorrect within the clawback process. It was difficult to test whether they would be aware to do this or do this correctly within a UR session.

We need to be made aware of which mentor is incorrect for validation to work correctly within the service,

##### Problem to solve

How do we help users understand that a claim can be partially wrong and that they must state the incorrect mentor as the reason for the clawback?

## Next steps:

Further testing is required on the payments, sampling, and clawbacks sections, as well as how we can make it easier and clearer for users when actioning claims.

Conduct unmoderated testing so that we can test the end-to-end journey.

Further research on the need for the ‘all claims’ page. Is it needed?

Explore the possibility of accredited providers accessing the service to view claims.
