---
title: Setting up permissions (iteration 4)
description: Let providers set up permissions between themselves and their partner organisations
date: 2020-05-12
---

{% from "figure/macro.njk" import appFigure with context %}

Previous iterations
* [first iteration](/manage-teacher-training-applications/setting-up-permissions)
* [second iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2)
* [third iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-3)

## Hypotheses

### Show a confirmation page when agreeing to the data sharing agreement

When the user signs in for the first time, they have to agree to the data sharing agreement. Once they do, the previous iteration sent them straight to set up organisational permissions. This was more of an oversight than a conscious decision.

But really we need to make it clear that they have successfully agreed to the data sharing agreement and prompt them to set up their permissions explicitly.

If we show the user a confirmation page
Then they'll know what's happened and what they have to do next

{{ appFigure({
  image: {
    file: "data-sharing-confirmation-page.png"
  }
}) }}

### Don’t ask the user to setup permissions to courses that are run and ratified by the same provider

In the previous iteration we asked the user to set up permissions for courses their organisation both runs and ratifies.

But this is unnecessary because they’ll need to be able to do everything as there’s no one else to do it.

If the permissions are automatically granted for courses that are run and ratified by the same organisation
Then the user doesn’t have to be concerned about setting those permissions up

### Check answers layout when setting up organisational permissions

In the previous iteration we tried to use a standard check answers page. But as the keys and values are really long it's hard to fit in the content nicely.

If we stack the content without using the summary list component
Then the content will be more legible

{{ appFigure({
  image: {
    file: "organisation-setup-check-answers-page.png"
  }
}) }}

### Make sure the title makes sense when setting up user-level permissions

In the previous iteration the page title on the user permissions page read ‘Select permissions for courses run by Ventrus Teaching School Alliance’.

But that only makes sense for the ‘Make decisions’ and ‘Access safeguarding information’ permissions — not the ‘Manage organisation’ and ‘Manage users’ permission.

If we the title is changed to ‘Select permissions: Ventrus Teaching School Alliance’
Then it makes sense for all 4 permissions

{{ appFigure({
  image: {
    file: "invite-user-permissions-page-2.png"
  }
}) }}

### Make sure the content makes sense when inviting a user to an accredited body

In the previous iteration the hint text for the ‘Make decision’ and ‘Access safeguarding information’ permissions read ‘This user will be able to [permission description] on courses ratified by [accredited bodies]’.

But this is wrong when you’re a user working at an accredited body. It should read something more like ‘Applies to courses run by [training providers]’.

If we change the hint text to work for accredited bodies
Then user’s won’t be confused by incorrect descriptions

{{ appFigure({
  image: {
    file: "invite-user-permissions-page-1.png"
  }
}) }}

### Add a hint to warn the user of the consequences of inviting someone from outside of their organisation

Coming soon

### Use tick icons for bullets on organisation details page

In the previous iteration, we used standard list items (bullets) for each permission. But on all other pages we used the tick icon to represent a permission. This was more of an oversight than a conscious decision.

If we use the tick icons for permissions
Then users will recognise the items as permissions more quickly

{{ appFigure({
  image: {
    file: "organisation-details-page-2.png"
  }
}) }}

### Use blue box to explain who is responsible for setting up permissions

In the previous iteration, we used the warning text component to explain to users of an accredited body that they'd need to contact the training provider to make changes.

But this got a bit lost amongst the rest of the content and was inconsistent to the blue box used when setting up permissions for the first time.

{{ appFigure({
  image: {
    file: "organisation-details-page-1.png"
  }
}) }}

## Differences when the user belongs to just one organisation

The design should be slightly different when the user belongs to one organisation as opposed to multiple.

When inviting a user:

- remove the ‘select organisations...’ page from the flow
- change the content on the ‘Select permissions...’ page to read just ‘Select permissions’
- remove the ‘Organisations this user has access to...’ line on the check answers page

When editing a user:

- remove the ‘Organisations this user has access to...’ line on the details page
- change the ‘change permissions’ page to read just ‘Change permissions’

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Data sharing agreement",
    img: {
      src: "data-sharing.png"
    }
  }, {
    text: "Data sharing confirmation page",
    img: {
      src: "data-sharing-confirmation-page.png"
    }
  }, {
    text: "Organisation set up welcome page",
    img: {
      src: "organisation-setup-welcome-page.png"
    }
  }, {
    text: "Organisation set up information page",
    img: {
      src: "organisation-setup-information-page.png"
    }
  }, {
    text: "Organisation set up permissions form",
    img: {
      src: "organisation-setup-permissions-form.png"
    }
  }, {
    text: "Organisation set up check answers page",
    img: {
      src: "organisation-setup-check-answers-page.png"
    }
  }, {
    text: "Organisation set up confirmation page",
    img: {
      src: "organisation-setup-confirmation-page.png"
    }
  }, {
    text: "User list page",
    img: {
      src: "user-list-page.png"
    }
  }, {
    text: "Invite user: basic details",
    img: {
      src: "invite-user-basic-details.png"
    }
  }, {
    text: "Invite user: organisation page",
    img: {
      src: "invite-user-organisation-page.png"
    }
  }, {
    text: "Invite user: permissions page 1",
    img: {
      src: "invite-user-permissions-page-1.png"
    }
  }, {
    text: "Invite user: permissions page 2",
    img: {
      src: "invite-user-permissions-page-2.png"
    }
  }, {
    text: "Invite user: check answers page",
    img: {
      src: "invite-user-check-answers-page.png"
    }
  }, {
    text: "Organisation list page",
    img: {
      src: "organisation-list-page.png"
    }
  }, {
    text: "Organisation details example 1",
    img: {
      src: "organisation-details-page-1.png"
    }
  }, {
    text: "Organisation details example 2",
    img: {
      src: "organisation-details-page-2.png"
    }
  }]
}) }}
