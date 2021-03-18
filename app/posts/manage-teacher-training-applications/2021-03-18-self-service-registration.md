---
title: Self-service registration for accrediting bodies and their training providers
description: Let higher education institutions register on Manage and invite their school direct partners
date: 2021-03-18
---

{% from "figure/macro.njk" import appFigure with context %}

The aim of the work was to answer the following question:

How might we provide a self-service journey for higher education institutions (HEIs) and their school direct partners (SDs) to register on the Manage service?

## Why we are doing this

Around 70 HEIs have not yet registered to use Manage. On average each of them accredits courses for 10 SDs, many of which are also not registered on Manage. We do not have contact details for all the SDs.

We need to make sure that all these organisations have registered to use Manage before the UCAS service is turned off in October 2021.

Adding them all manually will be a great deal of work for the transition team. We want to make the process more efficient, while not placing a significant burden on HEIs or SDs.
## Requirements
Before we started designing possible solutions, we found out about what the process needs to include.

These requirements are not presented as user needs, since this work is being done primarily for the benefit of teams within DfE.

### Data sharing agreement

We need to:

- make sure that HEIs and SDs sign a data sharing agreement (DSA)
- record who signed the DSA
- only show any personal data to HEIs and SDs after they’ve sign the DSA, so we do not violate data protection rules

### Getting contact details

We need to make sure we have an up to date list of the contact names and email addresses for each SD.

### Inviting training providers

We need to:

- reduce the amount of manual work done by the transition team, to save team effort and reduce the risk of errors
- know which HEIs are on Manage
- know which SDs have been set up for each HEI
- know which SDs have set up and opened courses on Manage

## Provider data analysis

There are 87 HEIs in the Manage database. 22 HEIs are set up to use Manage and the remaining 65 are not.

### Number of SDs connected to each HEI

Using the Publish database, we looked at how many SDs are connected to each HEI.

- 25% of HEIs have no SDs
- 24% of HEIs have between 1 and 10 SDs
- 36% of HEIs have between 11 and 20 SDs
- 15% of HEIs have more than 20 SDs

Average number of SDs per HEI: 10
Maximum number of SDs per HEI: 33
Minimum number of SDs per HEI: 0

This is particularly relevant for the use of a one-thing-per-page design. If we ask an HEI user separately about each SD then on average they will see 10 pages of questions. If we ask about all the contact details on a single page then on average there will be 10 items in the list.

### Number of HEIs connected to each SD

- 77% of SDs have only 1 HEI
- 14% have 2 HEIs
- 6% have 3 HEIs
- 3% have more than 3 HEIs

This is important since if an SD has multiple HEIs, they only need to be onboarded once so the other HEIs do not need to provide onboarding information.

### Cross-over between users of Manage and Publish

#### Manage users in publish

- 59% of Manage users are in Publish
- 68% of active Manage users are in Publish
- 63% of active Manage users are active in Publish

#### Publish users in Manage

- 20% of Publish users are also in Manage
- 27% of active Publish users are in Manage
- 23% of active Publish users are active in Manage

Since there are a lot of users in Publish who are not set up in Manage, we have a large pool of contact details to draw from. These users will already have DfE sign in accounts.

## Iteration 1

We decided to start by prototyping a small service which would allow HEI users to provide us with the information we need.

### What we did and why

In our first iteration, we wanted HEI users to answer two questions:

- Do you want to open courses at the training provider?
- Who do you want to manage teacher training applications at the provider?

This would allow us to invite the right people and leave the HEI in control of when courses they accredit become available.

{{ appFigure({
  image: {
    file: "self-service-registration-v1-flow.png",
    alt: "Iteration 1 user flow"
  },
  caption: "Figure 1: Iteration 1 user flow"
}) }}

The journey began on a ‘start page’ listing the SDs working with the HEI and setting out the steps involved in creating an account.

The aim was to give the user a chance to gather information before starting, which is particularly important since it is not possible to save and return to the process.

Users would reach the start page from an email. For this iteration we did not include DfE Sign In account creation, as we assumed that the email would contain a ‘magic link’ bypassing it.

{{ appFigure({
  image: {
    file: "self-service-registration-v1-01.png",
    alt: "Start page asking user to set up their account"
  },
  caption: "Figure 2: Set up your account"
}) }}

In this iteration we assumed that HEIs may not want to make courses available on Find straight away.

After the start page, the user was asked whether they would like to open courses at each SD. For this iteration we set this out as one SD per page.

If the user said yes, they were asked for contact details. No fields were pre-filled as we assumed we wanted to gather fresh information.

{{ appFigure({
  image: {
    file: "self-service-registration-v1-02.png",
    alt: "Question page asking ‘do you want to open courses at the school direct?’"
  },
  caption: "Figure 3: Question page asking ‘Do you want to open courses at the school direct?’"
}) }}

Once the user had decided whether or not to open courses for each SD, they were asked to complete a data sharing agreement (DSA).

We took the existing DSA directly from Manage without any changes. We didn’t want to check how readable it was, we wanted to find out whether users in research felt they could sign it or would need to refer to someone else.

{{ appFigure({
  image: {
    file: "self-service-registration-v1-03.png",
    alt: "Data sharing agreement"
  },
  caption: "Figure 4: Data sharing agreement"
}) }}

The check answers page was straightforward. We needed to make it clear that clicking the green button would send invitations to SDs. We also decided to remind the user that they would also be agreeing to the DSA.

{{ appFigure({
  image: {
    file: "self-service-registration-v1-04.png",
    alt: "Check your answers page"
  },
  caption: "Figure 5: Check your answers page"
}) }}

{{ appFigure({
  image: {
    file: "self-service-registration-v1-05.png",
    alt: "Success page"
  },
  caption: "Figure 6: Success page"
}) }}

## Iteration 2: using the task list pattern

For this version, we explored using the task list pattern to allow a non-linear journey. Users could use the task list to choose the order in which to provide contact details.

{{ appFigure({
  image: {
    file: "self-service-registration-v2-flow.png",
    alt: "Iteration 2 user flow"
  },
  caption: "Figure 7: Iteration 2 user flow"
}) }}

The task list page gave two tasks for each SD:

- decide whether to make courses available
- decide who to invite

The user could only complete the second task once the first had been completed.

{{ appFigure({
  image: {
    file: "self-service-registration-v2-02.png",
    alt: "The task list"
  },
  caption: "Figure 8: The task list"
}) }}

## Iteration 3: assuming courses will be opened

We created a third iteration to test with users.

In this iteration we assumed that all courses would automatically be opened once the relevant HEI and SD were registered on Manage.

We removed the ‘Do you want to open courses at the training provider?’ question and went straight to asking for contact details.

We did not use the task list pattern as we decided it added unnecessary complications.

### What we did and why

{{ appFigure({
  image: {
    file: "self-service-registration-v3-flow.png",
    alt: "Iteration 3 user flow"
  },
  caption: "Figure 9: Iteration 3 user flow"
}) }}

The start page listed the SDs we needed contact details for. We only asked about SDs which are not already using Manage, reducing the effort required by the HEIs to complete the process.

We also listed the SDs which are already using Manage, so that the user would not think we’d missed them out.

{{ appFigure({
  image: {
    file: "self-service-registration-v3-01.png",
    alt: "Start page inviting providers to manage teacher training applications"
  },
  caption: "Figure 10: Start page inviting providers to manage teacher training applications"
}) }}

For each of the SDs that needed to be onboarded, we included a list of people we knew were already in the Apply service on the Publish side. This was intended to further reduce the effort needed to complete the form.

Users could either choose one of these people or add new contact details.

{{ appFigure({
  image: {
    file: "self-service-registration-v3-02a.png",
    alt: "Question page asking ‘Who do you want to invite to manage applications at the training provider?’ and showing pre-defined list of people"
  },
  caption: "Figure 11: Question page asking ‘Who do you want to invite to manage applications at the training provider?’ and showing pre-defined list of people"
}) }}

{{ appFigure({
  image: {
    file: "self-service-registration-v3-02b.png",
    alt: "Question page asking ‘Who do you want to invite to manage applications at the training provider?’ and showing the ‘someone else’ option fields"
  },
  caption: "Figure 12: Question page asking ‘Who do you want to invite to manage applications at the training provider?’ and showing the ‘someone else’ option fields"
}) }}

{{ appFigure({
  image: {
    file: "self-service-registration-v3-02c.png",
    alt: "Question page asking ‘Who do you want to invite to manage applications at the training provider?’ only showing name and email fields as there are no known people in the organisation"
  },
  caption: "Figure 13: Question page asking ‘Who do you want to invite to manage applications at the training provider?’ only showing name and email fields as there are no known people in the organisation"
}) }}

The data sharing agreement remained the same as in Manage.

{{ appFigure({
  image: {
    file: "self-service-registration-v3-03.png",
    alt: "Data sharing agreement"
  },
  caption: "Figure 14: Data sharing agreement"
}) }}

We removed mention of the DSA from the ‘check your answers’ page since there’s already a check box at the end of the DSA itself. That should be enough to confirm that the user has agreed to the DSA.

{{ appFigure({
  image: {
    file: "self-service-registration-v3-04.png",
    alt: "Check your answers page"
  },
  caption: "Figure 15: Check your answers page"
}) }}

The success page had minimal content, saying that:

- invitations had been sent to SDs
- courses would be made available once the SDs set up accounts
- the user would receive an email telling them how to finish setting up their account

We were still assuming that the user would have entered this service through a ‘magic link’ and so would have to do further things to finish setting up their account.

{{ appFigure({
  image: {
    file: "self-service-registration-v3-05.png",
    alt: "Success page"
  },
  caption: "Figure 16: Success page"
}) }}

### What we learned

#### General

- Some users expected permissions to be handled as part of this process.
- Users may be able to complete the task in a single session, but they’d need to gather contact details first (possibly from colleagues).
- Some HEIs would like an overview of the SD journey. They would like to speak to their SDs before providing their details to DfE.

#### Email

- It was hard for users to understand the instructions in the email without context. One participant thought that they needed to send the link to their SDs.
- We’d need to work closely with the transition team to make sure that HEIs get appropriate contextual information before receiving the email.
- It’s important to be clear about what’s going to happen after the HEIs have provided details of SDs.

#### Start page

- Users weren’t sure where the list of schools came from, but this wouldn’t prevent them from completing the task.

#### Data sharing agreement

- Users asked why they were being asked to sign a DSA after they’d already provided some data.
- The user may not have the authority to sign the DSA, so there’s an argument about handling it outside of this process.

#### Contact details

- Users weren’t sure where the email details came from, although this wasn’t helped by the use of test data.

#### End of process

- HEIs would like to be notified once an SD completes their registration on Manage.

## Iteration 4: reorganising the flow and including DfE sign in

For this iteration we reordered the questions so that DfE sign-in and the DSA came before asking who to invite from each training provider.

We decided that we would not be able to use a ‘magic link’ as they only work for a short time. It would be better to use DfE Sign In and get users to set up accounts in the usual way.

{{ appFigure({
  image: {
    file: "self-service-registration-v4-flow.png",
    alt: "Iteration 4 user flow"
  },
  caption: "Figure 17: Iteration 4 user flow"
}) }}

The start page set out the steps of the journey:

- either sign in or register with DfE Sign In
- accept the DSA
- provide contact details for SDs

It also listed the SDs which required contact details and those which did not.

{{ appFigure({
  image: {
    file: "self-service-registration-v4-01.png",
    alt: "Start page"
  },
  caption: "Figure 18: Start page"
}) }}

We mocked up the DfE Sign In flow to make the overall journey more realistic.

{{ appFigure({
  image: {
    file: "self-service-registration-v4-02.png",
    alt: "DfE sign in"
  },
  caption: "Figure 19: DfE sign in"
}) }}

The DSA remained the same as in previous iterations.

{{ appFigure({
  image: {
    file: "self-service-registration-v4-03.png",
    alt: "Data sharing agreement"
  },
  caption: "Figure 19: Data sharing agreement"
}) }}

We included a mid-journey ‘start page’ after DfE Sign In and the DSA, in case the user had forgotten the details of what they would need to do.

{{ appFigure({
  image: {
    file: "self-service-registration-v4-04.png",
    alt: "Mid-journey start page"
  },
  caption: "Figure 20: Mid-journey start page"
}) }}

The invitation, check answers and success pages were the same as in previous iterations.

{{ appFigure({
  image: {
    file: "self-service-registration-v4-05a.png",
    alt: "Question page asking ‘Who do you want to invite to manage applications at the training provider?’ and showing pre-defined list of people"
  },
  caption: "Figure 21: Question page asking ‘Who do you want to invite to manage applications at the training provider?’ and showing pre-defined list of people"
}) }}

{{ appFigure({
  image: {
    file: "self-service-registration-v4-05b.png",
    alt: "Question page asking ‘Who do you want to invite to manage applications at the training provider?’ and showing the ‘someone else’ option fields"
  },
  caption: "Figure 22: Question page asking ‘Who do you want to invite to manage applications at the training provider?’ and showing the ‘someone else’ option fields"
}) }}

{{ appFigure({
  image: {
    file: "self-service-registration-v4-05c.png",
    alt: "Question page asking ‘Who do you want to invite to manage applications at the training provider?’ only showing name and email fields as there are no known people in the organisation"
  },
  caption: "Figure 23: Question page asking ‘Who do you want to invite to manage applications at the training provider?’ only showing name and email fields as there are no known people in the organisation"
}) }}

{{ appFigure({
  image: {
    file: "self-service-registration-v4-06.png",
    alt: "Check your answers page"
  },
  caption: "Figure 24: Check your answers page"
}) }}

{{ appFigure({
  image: {
    file: "self-service-registration-v4-07.png",
    alt: "Success page"
  },
  caption: "Figure 25: Success page"
}) }}

## Next steps
