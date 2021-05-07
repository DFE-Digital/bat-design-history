---
title: Let accredited body users set organisational permissions
description: Let accredited bodies set up and change organisational permissions
date: 2021-05-07
---

{% from "figure/macro.njk" import appFigure with context %}

At the moment, only training provider users can set organisational permissions.

Users at accredited bodies cannot set organisational permissions unless they also run the courses. This includes higher education institutions (HEIs) and school centred initial teacher training institutions (SCITTs).

Since we launched the permissions feature, users at HEIs have complained about not being able to set permissions for their school direct partners.

As a result, some HEI users have set themselves up as users of their school direct partners. This allows them to set organisational permissions.

The support team has needed to intervene and explain to users at the accredited body why they should not do this. Users should only belong to an organisation within the service if they actually belong to it.

To reduce the burden on the support team, we’re going to let accredited body users set up and change organisational permissions. They’ll be able to do this if they have permission to manage organisational permissions.

## What we did

### Setting up organisational permissions

After the user signs the data sharing agreement, they’ll see a confirmation page prompting them to set up organisational permissions. This page is the same as for training providers.

{{ appFigure({
  image: {
    file: "dsa--set-up-permissions.png"
  }
}) }}

The start page content is also the same as for training providers.

{{ appFigure({
  image: {
    file: "set-up-org-permissions-start-page.png"
  }
}) }}

If the user belongs to multiple organisations then each has its own subheading. The first sentence under each subheading will say ‘run by’ for accredited bodies and ‘ratified by’ for training providers.

If the user belongs to both the accredited body and training provider, we will not display duplicate relationships.

In the example below, Springbank SCITT is not shown under Wren Academy. This is because the relationship has already been shown under Springbank SCITT and they only need to set permissions once.

{{ appFigure({
  image: {
    file: "set-up-org-permissions-start-page--multi.png"
  }
}) }}

After the start page, the user needs to choose organisational permissions for each relationship.

{{ appFigure({
  image: {
    file: "set-up-org-permissions-relationship.png"
  }
}) }}

There are no changes to the check answers page.

{{ appFigure({
  image: {
    file: "set-up-org-permissions-check-answers.png"
  }
}) }}

The confirmation page also remains the same.

{{ appFigure({
  image: {
    file: "set-up-org-permissions-confirmation.png"
  }
}) }}

### Changing organisational permissions

When the user goes to the organisational permissions page, they’ll be able to click ‘Change permissions’.

{{ appFigure({
  image: {
    file: "org-permissions.png"
  }
}) }}

The rest of the flow is the same as for training providers. The user must choose the new organisational permissions.

{{ appFigure({
  image: {
    file: "change-org-permissions.png"
  }
}) }}

The user then returns to the ‘organisational permissions’ page, with a success banner showing that the change has been made.

{{ appFigure({
  image: {
    file: "change-org-permissions-success.png"
  }
}) }}
