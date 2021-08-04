---
title: Selecting organisation level permissions by type
description: Grouping permissions by type instead of organisation to better handle validation errors
date: 2020-06-18
---

The [previous iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-4/#organisation-set-up-permissions-form) has 2 groups of checkboxes to select permissions for each organisation.

At least 1 organisation needs to be able to make decisions. And at least 1 organisation needs to be able to see safeguarding information.

If the user fails to do this they should see an error message. The problem is the error message relates to both groups.

To make this work for 2 groups would mean combining them together somehow.

Either by having more verbose labels like ‘[name of organisation] can make decisions‘ or by putting the 2 fields inside another fieldset which can cause accessibility issues.

Or we could show the same error message in both fields which isn’t ideal because users can fix the error in one field by selecting options in the other.

If we use group permissions by type intead of organisation
Then we can show one error message per field

![Screenshot of permissions page grouping permissions by type intead of organisation.](type.png)
