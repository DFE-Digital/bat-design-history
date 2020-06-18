---
title: Using radio buttons for setting organisation level permissions
description: Grouping permissions by type instead of organisation and using radio buttons instead of checkboxes
date: 2020-06-18
---

{% from "figure/macro.njk" import appFigure with context %}

The [previous iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-4/#organisation-set-up-permissions-form) has 2 groups of checkboxes to select permissions for each organisation.

At least 1 organisation needs to be able to make decisions. And at least 1 organisation needs to be able to see safeguarding information.

If the user fails to do this they should see an error message. The problem is the error message relates to both groups.

To make this work for 2 groups of checkboxes would mean combining them together somehow.

Either by having more verbose labels like ‘[name of organisation] can make decisions‘ or by putting the 2 fields inside another fieldset which can cause accessibility issues.

Or we could show the same error message in both fields which isn’t ideal because users may fix the error in one field by selecting options from the other.

If we use radio buttons grouped by permission
Then we can show one error message per field

{{ appFigure({
  image: {
    file: "radio-buttons.png"
  }
}) }}
