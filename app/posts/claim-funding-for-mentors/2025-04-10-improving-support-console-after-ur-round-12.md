---
title: Improving the support console following on from round 12 of research with support agents
description: Improvements made to the Claim support console following round 12 of research
date: 2025-04-10
tags:
  - support console
  - user research
related:
  items:
    - text: Round 12 support console research findings
      href: /claim-funding-for-mentors/round-12-support-console-research-findings/
---

Design iterations were made following recommendations from [user research round 12](/claim-funding-for-mentors/round-12-support-console-research-findings/).

The key areas of research continued to be usability during:

- payments
- auditing
- clawback

The areas of design improved during this iterative period include:

- allowing actions via the 'all claim' index page
- better navigation during the payments process
- adding Zendesk links and assigning a support agent
- improved clarification when a school agrees to reject an audited claim
- improved clarification of original claim amount during clawback process

## Allowing actions via the 'all claim' index page

Users consistently navigated to specific claims via the ‘all claims' tab. The design was original set so that the ‘all claims’ index page only provides an overview function with no ability to edit. Originally, managing could only be done in the relevant sections. It was assumed this would be helpful in managing the various stages of the processes however testing revealed this was not the users’ natural behaviour. The design solution enables users to access and take necessary action on claims through ‘all claims’.

![Before details page](a-before-details.png)”Screenshot shows the before version of the details page”

![After details page](b-after-details.png)”Screenshot shows the after version of the details page”

## Better navigation during the payments process

This iteration aims to help with users needing to know what has previously happened with payments, and what actions are still outstanding. This was an area of confusion for some users during testing as ‘x claims need processing’ was not helpful to know what action needs to take place. To help with way finding we have added a calculator style function where the page previously stated whether claims needed to be processed.

![Before payments page](c-before-payments.png)”Screenshot shows the before version of the payments page”

![After payments page](d-after-payments.png)”Screenshot shows the after version of the payments page”

## Adding Zendesk links and assigning a support agent

In user testing, there were concerns around managing a high volume of claims across support staff. Support Team agents expressed a desire to be able to assign claims to support staff. Some agents also noted that they would expect to link an associated Zendesk ticket with the relevant claim, as that is what they’re used to.

We designed the ability to add these features as part of the ‘show page’ for each claim. Further investigation is still needed with Support Team users to see whether this serves their need for logging.

![Support details unassigned](e-support.png)”Screenshot shows support details unassigned”

![User adding Zendesk ticket](f-zendesk.png)”Screenshot shows a question screen where users can add zendesk links”

![Zendesk ticket added](g-zendesk-added.png)”Screenshot shows a Zendesk link is added”

![User assigning a support agent](h-support.png)”Screenshot shows a question screen where a user can associate a support agent to a claim”

![Support agent assigned](i-support-added.png)”Screenshot shows an agent associated with a claim”

## Clarification when a school agrees to reject an audited claim

At the point of speaking to the school about a claim a provider rejected, Support Team users were confused when they clicked 'reject school' and read the task list on the ‘are you sure’ screen. Specifically, users mentioned they would complete this process and then tell the school, as the rejection process calculates the clawback amount for them.

What caused further confusion is that since adding the ‘are you sure’, there is a specific place in the console to add information about the school, making the act of going through the screens the assurance process in itself.

We decided to remove this screen as it was not helping users to complete the task. We made one small change to the ‘check answers’ screen for school rejection, by adding the line “The information you have entered will inform the clawback process’ as this helps users confirm this is the final step of the rejection process, and doing this starts a clawback process.

![Removed screen during reject journey](j-rejected.png)”Screenshot shows a deleted screen during the reject journey detailing confusing steps”

![Additional text on check answers screen](k-rejected-checkanswer.png)”Screenshot shows the additional text added to the check answer screen”

## Display original claim information during clawback process for better comparison

In the second round of research users missed the hint text showing them the original amount of hours claimed. To make this clearer, we changed the copy from ‘Enter a whole number up to a maximum of x hours’ to ‘London Marquez’s original claim was for X hours’.

It was also noted in a design crit that just by isolating this page, a user may not be able to recall the provider name or school name. These have been added in alongside the inset text function to show which organisation is associated with the comments

We used a dropdown component for these comments because if the user has just completed the auditing they may be familiar with the information, whereas if a gap has taken place, they can expand the information to support them with understanding how much needs to be clawed back.

![Updated clawback information](l-clawback.png)”Screenshot shows the updates made to the clawback screen”

We also added information about the original claim in the ‘check answers’ screen as users wanted to double check everything was correct if they are to be responsible for processing financial information.

![Updated check answers page for clawback journey](m-clawback-checkanswers.png)”Screenshot shows the updated check answers screen for the clawback journey”
