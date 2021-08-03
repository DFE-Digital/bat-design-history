---
title: Setting up permissions (iteration 3)
description: Handling when the user belongs to multiple organisations and including clearer guidance for how permissions work.
date: 2020-05-04
tags:
- MN013
---

Teacher training providers have to partner with ‘accredited bodies’ if they’re not an ‘accredited body’ themself. Accredited bodies maintain the quality of teacher training providers.

Different organisations need access to different information depending on what they’ve agreed with their partners.

We based this prototype on a user who works for Somerset SCITT - an accredited body who maintains the quality of Ventrus Teaching School Alliance, as well as other training providers - including themself (they are a training provider as well).

This design should allow the user at Somerset SCITT to set permissions for the various training providers they partner with and invite different users to access different things.

Previous iterations

* [first iteration](/manage-teacher-training-applications/setting-up-permissions)
* [second iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2)

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Hypotheses

### Showing the user belongs to multiple organisations

The [previous design](/manage-teacher-training-applications/setting-up-permissions-iteration-2) didn’t handle the situation where a user belongs to multiple organisations.

If we show the user they're part of multiple organisations
Then they'll understand what’s about to happen on the following screens

![](before-you-start.png)

![](data-sharing.png)

### Making sure users understand permissions

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2) we had information about permissions on each page that lets uses select permissions for each organisation.

But there’s a lot of information to digest and we want to be sure users understand their meaning and implications.

If we put this information on a dedicated page before they select permissions
Then users will have the best chance of understanding how permissions work

![](step2.png)

### Making it easier to understand permissions when setting up permissions between organisations

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2) we added information about permissions on each page that contains permission checkboxes.

Each permission type is collapsed inside a Details panel. This is a little messy and will get messier when new permissions are added.

If we put the information behind a single panel
Then the user will have less to scan through

![](step3.png)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Data sharing agreement",
    img: {
      src: "step0.png"
    }
  }, {
    text: "Set up permissions step 1",
    img: {
      src: "step1.png"
    }
  }, {
    text: "Set up permissions step 2",
    img: {
      src: "step2.png"
    }
  }, {
    text: "Set up permissions step 3",
    img: {
      src: "step3.png"
    }
  }, {
    text: "Set up permissions step 4",
    img: {
      src: "step4.png"
    }
  }, {
    text: "Set up permissions step 5",
    img: {
      src: "step5.png"
    }
  }, {
    text: "Invite a user step 1",
    img: {
      src: "users1.png"
    }
  }, {
    text: "Invite a user step 2",
    img: {
      src: "users2.png"
    }
  }, {
    text: "Invite a user step 3",
    img: {
      src: "users3.png"
    }
  }, {
    text: "Invite a user step 4",
    img: {
      src: "users4.png"
    }
  }, {
    text: "Invite a user step 5",
    img: {
      src: "users5.png"
    }
  }, {
    text: "Invite a user step 6",
    img: {
      src: "users6.png"
    }
  }, {
    text: "Invite a user step 7",
    img: {
      src: "users6.png"
    }
  }, {
    text: "Edit a user",
    img: {
      src: "users7.png"
    }
  }, {
    text: "Organisation list page",
    img: {
      src: "organisations1.png"
    }
  }, {
    text: "Organisation page for Somerset SCITT",
    img: {
      src: "organisations2.png"
    }
  }, {
    text: "Organisation page for Ventrus Teaching School Alliance",
    img: {
      src: "organisations3.png"
    }
  }]
}) }}
