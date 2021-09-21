---
title: Emailing a candidate when the status of their conditions has been updated
description: Telling a candidate when the provider changes the status of offer conditions to met or pending
date: 2021-09-20
---

{% from "email/macro.njk" import appEmail %}

Users can currently change the status of conditions individually. The candidate is not notified about every change, only when:

- all their conditions have been met, so their application is successful
- one or more conditions are not met, so their application is unsuccessful

Notifying the candidate will keep them more informed. They will be less likely to need to contact the training provider.

## How it works

A user can change a condition’s status from met to pending or from pending to met. They can change multiple statuses at the same time.

The email to the candidate shows any conditions that have:

- just been marked as met
- just been marked as pending
- not changed and remain pending


<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "((provider)) has updated the status of your conditions for ((course))",
  content: "

Dear ((name))

((provider)) has updated the status of your conditions for ((course)).

They’ve marked the following conditions as met:

- ((condition))
- ((condition))

They’ve marked the following condition as pending:

- ((condition))

The following conditions still need to be met:

- ((condition))
- ((condition))

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).
  "
}) }}

<!-- markdownlint-enable MD025 -->

## Future considerations

Currently conditions are not individually marked as met or pending in the candidate service. We need to consider how we can do this.
