---
title: Setting up permissions (iteration 5)
description: Improve the content and layout for setting up organisational and user permissions
date: 2020-10-19
---

{% from "figure/macro.njk" import appFigure with context %}

Several content and layout improvements to setting up and managing organisational and user permissions.

## Setting up organisational permissions

### Welcome screen

We combined the [first](/manage-teacher-training-applications/setting-up-permissions-iteration-4/#organisation-set-up-welcome-page) and [second](/manage-teacher-training-applications/setting-up-permissions-iteration-4/#organisation-set-up-information-page) pages of the onboarding flow into one as shown below.

On the one hand we worry about the amount of content there is, on the other we know that our current content doesn’t give enough information for some users to understand how permissions work.

On balance we decided to provide more content so users have an opportunity to understand as opposed to making user users read content (because there’s less) that they don’t fully understand.

{{ appFigure({
  image: {
    file: "org-permissions--welcome.png"
  }
}) }}

### Permissions form

[See previous designs here](/manage-teacher-training-applications/setting-up-permissions-iteration-4/#organisation-set-up-permissions-form).

When some users submitted a form when the next page loaded they couldn’t tell the page had changed to the next relationship. We think this is partly because of the large and long page headings.

So we [reduced the size](/manage-teacher-training-applications/smaller-headings) and length of the headings as shown below.

We also found that users were confused that organisations can view applications without setting these permissions explicitly. Even though we had guidance for this, users weren’t reading this.

So we decided to put the content front and center and used icons to draw attention. We didn’t use disabled checkboxes because they’re not focusable by keyboard.

{{ appFigure({
  image: {
    file: "org-permissions--form.png"
  }
}) }}

### Check answers

[See previous design here](manage-teacher-training-applications/setting-up-permissions-iteration-4/#organisation-set-up-check-answers-page).

The previous design made it hard to see which relationships related to which organisation. So we decided to use the card component as shown below.

And we added a note to explain why view permissions cannot be changed.

{{ appFigure({
  image: {
    file: "org-permissions--check.png"
  }
}) }}

## Managing organisational permissions

### List page

In the [previous design](manage-teacher-training-applications/setting-up-permissions-iteration-4/#organisation-list-page) we labelled the page ‘Organisations’ but the section only lets you manage organisational permissions so we updated the heading.

And it didn’t give users any context as to what they could do in this section. So we added some guidance too.

{{ appFigure({
  image: {
    file: "manage-org-permissions--list.png"
  }
}) }}

### Details page

We originally planned to roll out permissions such that all users with ‘Manage org’ permissions would be prompted to set up organisational permissions. But we accidentally launched the feature without doing this.

This meant that some users couldn’t do the things they needed like seeing safeguarding information even though they themselves had the permission. The organisational permissions weren’t set up.

When a user with ‘manage org’ permissions went to the details screen there was just a blank space to signify that there was no organisations with that permission.

So we decided to write content to make it clear that these permissions hadn’t been set up.

If you belong to the training provider you can set them up. But if you belong to the accredited body you can’t. So there’s different content depending on the situation.

{{ appFigure({
  image: {
    file: "manage-org-permissions--details-training-provider.png"
  },
  caption: "Organisational permissions details page when you belong to the training provider"
}) }}

{{ appFigure({
  image: {
    file: "manage-org-permissions--details-accredited-body.png"
  },
  caption: "Organisational permissions details page when you belong to the accredited body"
}) }}

And when setting up user permissions we decided to make it clear which organisations the permission is not applicable to. This should clarify why users with the right permission still cannot see or do things.

{{ appFigure({
  image: {
    file: "manage-users--details.png"
  },
  caption: "User details page with cross icons for organisations where the permission does not apply"
}) }}

## User permissions

In the previous design, when setting (or changing) user permissions we explained that all users get access to view applications without setting up the permission explicitly.

But not all users seem to spot this content. So we’re going to try the following design where users have to specify explicitly that they want to give this user view-only permission or otherwise.

{{ appFigure({
  image: {
    file: "manage-users--permissions.png"
  },
  caption: "User permissions form"
}) }}
