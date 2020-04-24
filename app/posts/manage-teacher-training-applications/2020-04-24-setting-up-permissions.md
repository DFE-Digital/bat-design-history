---
title: Setting up permissions (iteration 1 for Titan Partnership Ltd)
description: Let providers set up permissions between themselves and their partner organisations
date: 2020-03-30
---

Training providers can work with multiple accredited bodies who ratify their courses. Some providers also ratify their own courses.

Who can do what at which organisations varies depending on the specific relationship.

For example, take a training provider who runs courses, some of which are ratified by one organisation and some by another.

The first accredited body may be responsible for making decisions (and the training provider cannot). Whereas the second accredited body shouldn’t make decisions (as thats the responsibility of the training provider).

If we let training providers set permissions for their organisations
Then organisations won’t do or see something they’re not meant to.

## The situation with Titan Partnerhship

We tested a rough prototype with a user who processes applications for Titan Partnership Ltd and Aston Manor Academy and has the ‘manage organisation’ permission.

There are 2 journeys below:

- Onboarding journey that the first user with the manage organisation permission will see when they sign in for the first time
- Inviting a user to their organisations

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Onboarding step 1",
    caption: "Permissions for courses run and ratified by Titan Partnership Ltd",
    img: {
      src: "step1.png"
    }
  }, {
    text: "Onboarding step 2",
    caption: "Permissions for courses run by Aston Manor Academy and ratified by Titan Partnership Ltd",
    img: {
      src: "step2.png"
    }
  }, {
    text: "Onboarding step 3 (Check answers)",
    img: {
      src: "step3.png"
    }
  }, {
    text: "Invite user step 1 (list page)",
    img: {
      src: "users1.png"
    }
  }, {
    text: "Invite user step 2 (form)",
    caption: "Note the label text in brackets to clarify what the permission means based on the permissions between partner organisations.",
    img: {
      src: "users2.png"
    }
  }, {
    text: "Invite user step 3 (check answers)",
    img: {
      src: "users3.png"
    }
  }, {
    text: "Invite user step 4 (flash message)",
    img: {
      src: "users4.png"
    }
  }]
}) }}
