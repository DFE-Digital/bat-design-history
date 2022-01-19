---
title: Notifications iteration
description: Improving the design of seeing and managing notifications
date: 2020-09-14
related:
  items:
    - text: Related research on this topic
      href: https://docs.google.com/presentation/d/1K1GnksPhYP9MhziExv-Iz8q-_fHSfC00Gx4cbXdAdD8/edit?usp=sharing
---

{% from "email/macro.njk" import appEmail %}

View the [previous iteration](/manage-teacher-training-applications/notifications/).

## Notification area part of primary navigation

Previously the notification area was in the account navigation.

But this makes out that notifications are less important than they actually are and puts them at the same level as infrequent tasks like managing your profile.

If we put the notifications area in the primary navigation
Then it’ll be easy to access and make it a main way to manage applications

![Screenshot of appliation page with revised primary navigation.](primary-navigation.png)

## Notification page updates

Since the previous iteration we have made several changes:

1. The width of the content is now two-thirds to make it easier to read.
2. ‘Change settings’ is now ‘Settings’ to make it more concise.
3. The tag colour is now the blue tint instead of solid blue, to make them less prominent as there will be lots of them.
4. ‘Notification settings’ is now ‘Change your notification settings’ to make it clear it relates to the user’s settings – not the organisations.
5. ‘Seen’ is now ‘Already seen’ to make it clearer.

![Screenshot of ‘Notifications’ page.](notifications-page.png)

## Notification settings are now part of ‘Your account’

In the previous iteration the settings page was part of the Notifications area. This goes against convention where these types of things usually live in the account area.

If we put the notification settings page in the account section
Then user’s will be more likely to find it

![Screenshot of ‘Your account’ page.](account-page.png)

## Notification settings page: tables and icons

The previous iteration used a summary list. But this took up a lot of vertical space and made the notifications harder to scan.

If we use a table
Then it’ll be easier to scan

When using regular text for the notification settings screen makes it harder to distinguish between notifications that are on and those that aren’t.

If we use a tick icon
Then it’ll be easier to scan

![Screenshot of notification settings table.](table-layout.png)

## Changing notification settings in bulk

The previous iteration had a change link per individual notification.

This works well if the user is changing one notification at a time. But if they want to change multiple notifications then having to click into each one individually is longwinded.

If we let users change all notifications at the same time
Then they’ll be able to change their settings more quickly

Note: we thought about using toggle switches but decided to try this first instead as it's easier to build and far less risk. Toggle switches may be confusing and inaccessible without the right care.

![Screenshot of ‘Notification settings’ page.](settings-page.png "There’s a change link per organisational relationship")

![Screenshot of notification settings form.](edit-settings-form.png "Users can make changes to multiple notifications in one form")

## Removing notifications about changes to permissions

In the previous iteration we let users change their notification settings about any changes to their permissions.

But permissions shouldn’t change often so we don’t think users should have the ability to customise how they receive notifications about this.

And it doesn’t feel right being part of the notifications area which is only about applications.

## Changing ‘Online notification’ to ‘Notifications area’

In the previous iteration we referred to in-service notifications as ‘Online notifications’ but users didn’t really understand what that meant.

If we use ‘Notifications area’
Then it’ll be easier for users to understand it

Note: research shows that users don’t instantly understand what ‘Notifications area’ means until they use it. This could be solved with an onboarding flow and using hint text to explain what it means.

![Screenshot of notification settings table.](table-layout.png)

## Helping users know they can configure their notifications

Letting users configure their notifications is a significant and useful new feature. So it’s important users know about it.

Also, our research shows that while users understand what email notificiations are, they don’t necessarily understand with in-service notifications are.

If we tell users how notifications work when they sign in
Then users will be more likely to make better use of notifications

![Screenshot of ‘You can change your notification settings’ page.](onboarding-prompt.png)

## Email digests

Here’s a first rough design for an email digest.

{{ appEmail({
  content: "Dear colleague,

Your organisation, Springbank SCITT, has the following notifications for Tuesday 1 to Monday 7 September 2020 – click through to view more information:

### New applications

- [Application received for Primary (5-11) O32P at Main Site](/)
- [Application received for Primary 79UK at Camberley](/)

### Accepted offers

- [Dawn Walker (YMD6R3R) has accepted your offer](/)

### Withdrawals

- [Kristie Howell (1N82XDT) has withdrawn their application](/)

### Reject by default deadline approaching

- [Respond to James Sully's (YGC5A62) application](/)

### Automatically rejected: please give feedback

- [Shaun Gaillard's (WLPJIOB) application was rejected automatically](/)

If you have any questions or to leave feedback, contact us at <becomingateacher@digital.education.gov.uk>.

Regards,
Becoming a Teacher team

To stop receiving these emails, change your notifications settings in [Manage teacher training applications](/)."
}) }}
