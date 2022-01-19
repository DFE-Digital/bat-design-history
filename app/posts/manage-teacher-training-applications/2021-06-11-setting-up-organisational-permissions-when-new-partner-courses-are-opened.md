---
title: Setting up organisational permissions when new partner courses are opened
description: Changing the way we notify and ask users to set up organisational permissions for newly opened partner courses
date: 2021-06-11
screenshots:
  items:
    - text: Data sharing agreement confirmation page
      src: dsa-confirmation.png
    - text: Start page
      src: start-page.png
    - text: Start page (user belongs to multiple organisations)
      src: start-page--multi-org.png
---

{% from "email/macro.njk" import appEmail %}

The flow to [set up organisational permissions](/manage-teacher-training-applications/setting-up-permissions-iteration-5/) is currently triggered when new partner courses are synced.

But the content is confusing because the current flow is only intended to be used the first time a user signs into the service.

It’s confusing because it mentions that the user needs to set up permissions for all of their partners, even if they’ve already been set up.

Also, it’s not ideal to ask users to set up organisational permissions when new partner courses are synced because candidates cannot yet apply to these courses.

## What we’ve changed and why

### Triggering the flow when courses are opened

Instead of triggering the flow when new partner courses are synced, it’ll be triggered when they’re opened.

This means that users will only be asked to set up permissions when it would otherwise hinder their ability to process applications.

### Sending an email when courses are open

When new partner courses are opened, users who can manage organisational permissions will be sent an email asking them to set up permissions.

{% set template1 %}
<!-- markdownlint-disable MD025 MD001 -->

Dear ((name))

# Set up organisational permissions for your teacher training courses

Candidates can now apply through GOV.​UK for the courses you work on with:

* Ashlawn Teaching School
* The Beauchamp Lionheart Training Partnership
* President Kennedy Teaching School Alliance
* Southam Teaching Alliance

Either you or these partner organisations must set up organisational permissions before you can manage applications to the courses.

You’ll be asked to set up organisational permissions when you sign in to the Manage service:

((link))

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our Service guidance.

You can also contact us at becomingateacher@digital.education.gov.uk.
{% endset %}

{{ appEmail({
  subject: "Set up organisational permissions for your teacher training courses",
  content: template1
}) }}

If the user belongs to multiple organisations then the email will look like this:

{% set template2 %}
<!-- markdownlint-disable MD025 MD001 -->

Dear ((name))

# Set up organisational permissions for your teacher training courses

Candidates can now apply through GOV.UK for courses you work on with the partner organisations listed below.

You cannot manage applications to these courses until either you or your partner organisations have set up organisational permissions.

For Wren Academy, you need to set up permissions for courses you work on with:

* Active Teacher Training
* ATT Partnership
* Biddenham Upper School and Sports College

For The Royal Borough Teaching School Alliance, you need to set up permissions for courses you work on with:

* Castle Newnham Partnership
* Fenland Teaching School Alliance
* Goldington Academy

You’ll be asked to set up organisational permissions when you sign in to the Manage service:

((link))

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our [Service guidance](https://www.apply-for-teacher-training.service.gov.uk/provider/service-guidance).

You can also contact us at [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk).
{% endset %}

{{ appEmail({
  subject: "Set up organisational permissions for your teacher training courses",
  content: template2
}) }}

### Changing the start page content

We’ve changed the content of the start page to explain permissions need to be set up because new courses have been opened.

## Future considerations

We considered letting users skip setting up organisational permissions in case they:

* do not know how to set them up
* expect their partners to set them up

But we decided not to do this for now because we think that users:

* who can manage organisational permissions will know how to set them up
* should immediately set them up as it would otherwise stop users from processing applications
