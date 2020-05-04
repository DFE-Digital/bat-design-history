---
title: Setting up permissions (iteration 3)
description: Let providers set up permissions between themselves and their partner organisations
date: 2020-05-04
---

{% from "figure/macro.njk" import appFigure with context %}

For context you can read the:

* [first iteration for setting up permissions](/manage-teacher-training-applications/setting-up-permissions)
* [first iteration for setting up permissions](/manage-teacher-training-applications/setting-up-permissions-iteration-2)

In this iteration we improved the design and tested it with a user who works at Somerset SCITT. They run and ratify their own courses as well as ratifying courses for Growing Expert Teachers, Taunton Teaching Alliance, The Beach Teaching School and Ventrus Teaching School Alliance.

We set up the prototype based on the user's access on Find which told us that this user is part of Ventrus Teaching School Alliance. During the session we learnt that the user is also part of the other 3 organisations as well.

What that means is that while this person works for Somerset SCITT, the individual training providers delegate power and control to people outside of their organisation as if they worked for them directly.

We also know that this set up is quite common across other partnerships on Apply.

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

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2) we added information about permissions on each page that contains permission checkboxes.

But there’s a lot of informationto digest.

If we put this information on a dedicated page
Then users will have the best chance of reading it

{{ appFigure({
  image: {
    file: "step2.png"
  }
}) }}

### Making it easier to see contextual information when setting up permissions

In the [previous iteration](/manage-teacher-training-applications/setting-up-permissions-iteration-2) we added information about permissions on each page that contains permission checkboxes.

Each permission is behind a collapsible Details panel drawing the user in multiple directions. It also means that when we add new permissions there will be more panels.

If we put all of the contextual information behind one panel
Then it’ll be easier for users to either spot it or ignore it to focus on the task at hand

{{ appFigure({
  image: {
    file: "step3.png"
  }
}) }}

### Seeing and managing organisational permissions

If the user works for an accredited body which ratifies another organisation’s courses, they won’t be able to manage those permissions—they’ll only be able to see them.

Currently the organisation page doesn’t show these relationships.

If we add this information onto the page
Then users will be able to understand what they can do and why

{{ appFigure({
  image: {
    file: "organisations2.png"
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
