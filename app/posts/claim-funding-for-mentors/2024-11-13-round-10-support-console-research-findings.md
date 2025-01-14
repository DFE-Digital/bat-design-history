---
title: Round 10 support console research findings
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

## User needs addressed by this research

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a support user, 
  I need guidance on how to use the support console for payments, sampling and clawbacks,
  So that I am able to successfully complete the required tasks."
}) }}

{{ appUserNeed({
  description: "As a support user, 
  I need to know how to action claims, 
  So that I am able to complete tasks payments, sampling and clawbacks tasks relating to claims."
}) }}

## Who we spoke to

We spoke to 3 members of the support team who will be managing claims for the Claim funding for mentor training service via the support console.

## Methodology

We performed task-based usability testing with participants to better understand the main tasks they must complete within the support console to manage claims.

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

Therefore, this round of research only tests part of the end-to-end journey.

All research took place within the support console prototype.

## Scenarios we tested

### Scenario 1: Seeing all claims

Imagine that the claims window is closed, and you need to start managing the claims.

Please show me where you would go to do this.

### Scenario 2: Sending claims to the ESFA for payment

Imagine that schools have submitted their claims, and the claim window is now closed.

In order for the ESFA to pay schools their funding, the first step is for you to send them the submitted claims. Can you show me how you would do this?

### Scenario 3: Sending claims to providers for assurance

Imagine several months have passed, schools have been paid, and we now need to sample some of the claims (15%) to check that they are accurate.

The claims need to be sent to providers for sampling. Please show me how you would go about doing this.

### Scenario 4: Uploading a provider’s sampling response

Imagine that the providers have now sent you their response via CSV in Zendesk.

You now need to update the support console with the provider's response. How would you do this?

### Scenario 5: Rejecting claims for clawback

Imagine a claim is incorrect, and it needs to be rejected in the support console.

Please show me how you would do this.

### Scenario 6: Sending claims to the ESFA for clawback

You have rejected several claims based on the outcome of sampling, which means the funding needs to be reimbursed to ESFA.

Please show me how you would begin this process.

## Key insights

### Contextualising the service

This was the first time some of the support users had undertaken processes relating to payments, sampling and clawbacks, and therefore, they needed to familiarise themselves with what we needed and expected. Typically, support colleagues would refer to a playbook to guide them through new processes and services.

A playbook is particularly important for this service. We have developed a minimum viable product for the Support console based on the assumption that the service will be used only for one academic year due to funding constraints. Some of the processes, such as producing the list of claims to be sampled, are undertaken off-service, and with a playbook, it would be easier for support users to know this.

#### Recommendations

Write and share an updated playbook with support colleagues before the next round of testing to help them understand how to undertake the payment, sampling and clawback processes easily and efficiently.

### Download CSV button

When asked how they would send claims to ESFA for payment, the ‘Download CSV’ button on the ‘All claims’ page confused participants.

Because the ‘Download CSV’ is the first call to action they see when on the ‘All claims’ page, they thought this was the action they needed to take to send claims to ESFA.

Participants did not initially see the ‘Payments’ section in the sub-navigation adjacent to the ‘All claims’ section.

#### Recommendations

Support users would only use the ‘Download CSV’ button when an accredited provider asks to see a list of claims associated with them. Our research findings with accredited providers show that this user need is a low priority.

We recommend exploring the following options:

- changing the primary call to action to a secondary call to action, making it grey instead of green, which users associate with an action to take
- improving the content on the page when they select the call to action, including text informing them where to send payments to ESFA
- removing the call to action completely and giving access to accredited providers to view claims

### How to action claims

There needed to be more clarity on how to action claims within the support console.

Participants thought they could perform all actions on the 'All claims' page. They needed help understanding why and how to perform actions within each section.

However, they said they would better understand how it worked after training.

#### Recommendations

Explore the purpose of the ‘All claims’ page.

Provide better sign-posting for the payments, sampling, and clawback sections.

Consider including prompts on the claim details page, accessed via ‘All claims’, to help users understand where to act on a claim.

### Status labels

Some status labels needed to be clarified.

Specifically, the ‘information requested’ and ‘information sent’ statuses were not apparent to the participants regarding who acted. “Has the information been sent to them by us, or have they sent it to us?”

#### Recommendations

Make the label content more descriptive, and clarify who requested or sent the information.

### Rejecting claims

When a user rejects a claim, it doesn’t mean the whole claim is wrong.

We need to be clear that this is how it works, as not all participants realised this.

One participant spotted this and said they would have assumed the whole claim needed to be corrected based on rejection. This requires an action from the support user to specify which mentor is incorrect within the clawback process. It was difficult to test whether they would be aware to do this or do this correctly within a UR session.

We need to be made aware of which mentor is incorrect for validation to work correctly within the service,

#### Problem to solve

How do we help users understand that a claim can be partially wrong and that they must state the incorrect mentor as the reason for the clawback?

## Next steps

Further testing is required on the payments, sampling, and clawbacks sections, as well as how we can make it easier and clearer for users when actioning claims.

Conduct unmoderated testing so that we can test the end-to-end journey.

Further research on the need for the ‘all claims’ page. Is it needed?

Explore the possibility of accredited providers accessing the service to view claims.
