---
title: Setting up permissions (iteration 3)
description: Let providers set up permissions between themselves and their partner organisations
date: 2020-05-04
---

{% from "figure/macro.njk" import appFigure with context %}

Previous iterations:

* [first iteration](/manage-teacher-training-applications/setting-up-permissions)
* [second iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2)

The following iteration was tested with Somerset SCITT who:

* run and ratify their own courses
* ratify courses for Growing Expert Teachers, Taunton Teaching Alliance, The Beach Teaching School and Ventrus Teaching School Alliance.

The prototype is based on the user's access on Publish which shows they belong to Ventrus Teaching School Alliance. During the session we learnt that the user also belongs to 3 other organisations too.

This means that while this person works for Somerset SCITT, these training providers delegate power and control to people outside of their organisation.

This set up is quite common across other partnerships on Apply.

The journeys include:

- setting up permissions for partner organisations for the first time
- inviting a new user to their organisation
- managing organisational permissions and users

## Hypotheses

### Showing the user belongs to multiple organisations

The [previous design](/manage-teacher-training-applications/setting-up-permissions-iteration-2) didn’t handle the situation where a user belongs to multiple organisations.

If we show the user they're part of multiple organisations
Then they'll understand what’s about to happen on the following screens

{{ appFigure({
  image: {
    file: "before-you-start.png"
  }
}) }}

{{ appFigure({
  image: {
    file: "data-sharing.png"
  }
}) }}

### Making sure users understand permissions

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2) we had information about permissions on each page that lets uses select permissions for each organisation.

But there’s a lot of information to digest and we want to be sure users understand their meaning and implications.

If we put this information on a dedicated page before they select permissions
Then users will have the best chance of understanding how permissions work

{{ appFigure({
  image: {
    file: "step2.png"
  }
}) }}

### Making it easier to understand permissions when setting up permissions between organisations

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2) we added information about permissions on each page that contains permission checkboxes.

Each permission type is collapsed inside a Details panel. This is a little messy and will get messier when new permissions are added.

If we put the information behind a single panel
Then the user will have less to scan through

{{ appFigure({
  image: {
    file: "step3.png"
  }
}) }}

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
