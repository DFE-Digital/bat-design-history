---
title: Notifications iteration
description: Improving the design of seeing and managing notifications
date: 2020-09-15
---

{% from "figure/macro.njk" import appFigure with context %}

The previous iteration of the information architecture had:

* the user’s profile as the screen users see when they click ‘Account’
* ‘Notification settings’ as a sub navigation item of the account section
* ‘Organisations’ and ‘Users’ as top level navigation items in the account header

## Putting ‘Organisations’ and ‘Users’ inside the account area

Managing organisational permissions and users are secondary features of the service.

And they also relate to account type features along with notification settings and managing your profile.

If we put these items inside the account area
Then they’ll be where users expect to find them and they won’t take away from the application-related navigation items.

## Introduce an account landing page

Previously, when the user clicks on ‘Account’ it takes the user to their profile page with ‘Notification settings’ accessed through the sub navigation on that page.

As we’ve put ‘Organisations’ and ‘Users’ in the account area, and because those areas may need sub navigation, we want to expose all the available options on the account area and because the account page is actually the user’s profile, it makes more sense to create landing page to sign post the various features and what they are.

## Changing ‘Organisations’ for ‘Organisational permissions’




<!-- {{ appFigure({
  image: {
    file: "primary-navigation.png"
  }
}) }} -->
