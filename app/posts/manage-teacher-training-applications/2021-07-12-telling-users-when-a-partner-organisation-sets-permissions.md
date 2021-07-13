---
title: Telling users when a partner organisation sets permissions 
description: Sending an email to users when their partner organisation sets up permissions for the first time or changes them
date: 2021-07-12
---
{% from "email/macro.njk" import appEmail %}

Initially only training providers could set organisation permissions. Accredited bodies were not allowed to set them.

Now both organisations in a partnership can set organisation permissions. We therefore need to let users in one organisation know if someone in the other organisation has set permissions.

## What we changed and why

We'll send an email to the organisation which did not set permissions. We'll only send it to users who have permission to make offers and reject applications. 

The email will list all the organisation permissions. If a permission has been given to both organisations, they'll be listed alphabetically.

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "	((partner_organisation)) has changed organisation permissions for teacher training courses you work on with them",
  content: "Dear ((name))

# ((partner_organisation)) has changed organisation permissions for teacher training courses you work on with them

((partner_organisation)) has set the following organisation permissions.

Make offers and reject applications: 

- ((partner_organisation))
- ((your_organisation)) 

View criminal convictions and professional misconduct: 

- ((partner_organisation))
- ((your_organisation)) 

View sex, disability and ethnicity information: 

- ((partner_organisation))
- ((your_organisation)) 

# Change organisation permissions

You can change these organisation permissions in your organisation settings:

((link))

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our Service guidance.

You can also contact us at [becomingateacher@digital.education.gov.uk](becomingateacher@digital.education.gov.uk)."
}) }}

<!-- markdownlint-enable MD025 -->

If organisation permissions had not previously been set up, the email will tell users that they can now manage the courses they work on with their partner.

<!-- markdownlint-disable MD025 -->

{{ appEmail({
  subject: "	((partner_organisation)) has set up organisation permissions for teacher training courses you work on with them",
  content: "Dear ((name))

# ((partner_organisation)) has set up organisation permissions for teacher training courses you work on with them

You can now manage applications made through <span>GOV.UK</span> for the courses you work on with ((partner_organisation)). 

They have set up the following organisation permissions.

Make offers and reject applications: 

- ((partner_organisation))
- ((your_organisation)) 

View criminal convictions and professional misconduct: 

- ((partner_organisation))
- ((your_organisation)) 

View sex, disability and ethnicity information: 

- ((partner_organisation))
- ((your_organisation)) 

# Change organisation permissions

You can change these organisation permissions in your organisation settings:

((link))

# Get help, give feedback or report a problem

For an overview of Manage teacher training applications, see our Service guidance.

You can also contact us at [becomingateacher@digital.education.gov.uk](becomingateacher@digital.education.gov.uk)."
}) }}

<!-- markdownlint-enable MD025 -->
