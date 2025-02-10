---
title: Round 11 support console research findings
description: Second round of research to understand how support users will use the payment, sampling and clawback processes
date: 2025-02-10
tags:
  - research
  - claims
  - support
related:
  items:
    - text: Round 10 support console research findings
      href: /claim-funding-for-mentors/round-10-support-console-research-findings/
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

This research aimed to test the iterations made based on the [research findings](/claim-funding-for-mentors/round-10-support-console-research-findings/) from the previous round of research on the payments, sampling and clawback journeys.

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

We spoke to 6 members of the support team who will be managing claims for the Claim funding for mentor training service via the support console.

2 of the participants were the operations manager and product liaison lead.

## Methodology

Similar to the previous round of research [Round 10 support console research findings](/claim-funding-for-mentors/round-10-support-console-research-findings/), we performed task-based usability testing with participants to help them better understand the main tasks they must complete within the support console to manage claims.

Testing the same tasks as the previous round of research allowed us to understand the iterations made to the usability of the tasks were effective or not.

We used example comma separated values (CSV) files, allowing participants to upload to the support console as part of the user journeys.

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

All research took place within the support console test environment.

## Scenarios we tested

### Scenario 1: Sending claims to the ESFA for payment

> Imagine that schools have submitted their claims, and the claim window is now closed.
> In order for the ESFA to pay schools their funding, the first step is for you to send them the submitted claims.
> Can you show me how you would do this?

### Scenario 2: Sending claims to providers for assurance

> Imagine several months have passed, schools have been paid, and we now need to sample some of the claims (15%) to check that they are accurate.
> The claims need to be sent to providers for sampling.
> Please show me how you would go about doing this.

### Scenario 3: Uploading a provider’s sampling response

> Imagine that the providers have now sent you their response via CSV in Zendesk.
> You now need to update the support console with the provider’s response.
> How would you do this?

### Scenario 4: Rejecting claims for clawback

> Imagine a claim is incorrect, and it needs to be rejected in the support console.
> Please show me how you would do this.

### Scenario 5: Sending claims to the ESFA for clawback

> You have rejected several claims based on the outcome of sampling, which means the funding needs to be reimbursed to ESFA.
> Please show me how you would begin this process.

## Finding 1

The playbook reduced the need for assistance when completing tasks.

In the previous round of research, participants didn’t have any instructions or training on how to use the support console.

We observed support users being able to complete tasks without the need to ask questions. Instead they referred to the playbook.

The users reported:

- The playbook is easy to follow, but it would be improved if the contents page linked to the content
- It contains lots of information
- The screenshots are really helpful

> *Playbook was useful, there was a lot of information and it's good to have it side by side whilst going through the process. Very thorough and easy to follow.*

### Recommend action

Insert anchor links to contents page to prevent the need to scroll through lots of information in the playbook.

## Finding 2

Despite including information on how to navigate around the console within the playbook, participants still got confused.

They did not understand why they could not action a claim from the ‘All claims’ menu.

### Recommend action

Add warning component/content within claims in 'All claims' area to make support users aware that they need to go to the correct area within console, for example ‘Payments’ to action a payment related task within a claim.

## Finding 3

It isn't clear from the 'All claims' page which claims are to be sent to ESFA ahead of sending them.

The operations manager expects to be able to check this before completing this action.

Support users expected to be able to filter all claims to find claims that are to be sent to ESFA.

### Recommended actions

- Explore the use of a banner
- Explore claims that have been sent to ESFA to be shown in payments sub menu, even though there is no action to take
- Improve 'there are no claims waiting to be processed' content as this caused confusion
- Provide additional guidance that all claims with the status "Submitted" are to be sent to the ESFA

## Finding 4

Support users need to be able to quickly and easily understand the history of a claim and what actions have been taken by other support staff.

They expected to be able to view the claim history from each individual claim.

When we asked how they would expect this to work they suggested:

- To see the history displayed within the claim
- A link to Zendesk of the history for the specific claim

> *I have no way of confirming if this claim has been paid, where do I see that?*

> *Other services we have a place to put the Zendesk ticket - that can be good to keep track.*

### Key considerations for Finding 4

- The testing took place without interacting with Zendesk. If they had this open, would this reduce this need?
- Support users said flicking between the 2 services might be a bit confusing. However, this wasn't tested so it's an assumption, not an evidence based need.

## Finding 5

Head of operations and product lead were concerned about how multiple agents are going to manage a high volume of claims.

They expect to be able to assign claims to agents to help distribute the load.

> *On our other claims service we can assign things to ourselves or give support to other agents. So how do we know who's working on what?*

>*How will we know which support agents are working on what? The activity log doesn’t cover this.*

### Recommended actions

Further discussions with the support team to understand what is in scope for the private and public beta.

For example, how much information is required to display the history of a claim? Is the Activity Log sufficient?

## Findings 6

Support users expect to contact the school after rejecting a claim, not before as per our ‘to reject this claim, you must have’ instructions.

> *If in communication with school, they'd say whether they agree or disagree. So I'd finish this process **then** send them an email saying it should be clawed back.*

### Recommended action

Change the content when a support user is rejecting a claim so it is clear when they should be contacting the school.

## Finding 7

All users acknowledged that accuracy when performing clawbacks is key. Therefore, they need an easy way of knowing the number of hours mentoring the mentor completed on the screen to be able to carry out the clawback calculation accurately.

> *I can't remember from last time in relation to number of hours to clawback.*

> *Link to Zendesk would be useful here.*

> *It should be clearer on this page to see the number of hours they actually did. I need to be sure I'm deducting the right amount of hours.*

### Recommended action

There is already information displayed on the page relating to the number of hours they can clawback, for example: “Enter whole numbers up to 5 hours”. However, the participants didn’t associate the number of hours with the number of hours the mentor did.

Therefore, the content needs to be clearer that this is number of hours the school originally claimed, rather than saying this is the maximum number of hours which can be clawed back.

## Next steps

Once the actions are completed, a workshop should be carried out with the support team to ensure they are aware of the changes and are able to ask any questions relating to how the support console works.

As the changes are relatively minor, a further round of research may not be required.
