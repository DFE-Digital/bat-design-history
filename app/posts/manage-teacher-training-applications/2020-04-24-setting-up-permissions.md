---
title: Setting up permissions (iteration 1 for Titan Partnership Ltd)
description: Let providers set up permissions between themselves and their partner organisations
date: 2020-03-30
---

Training providers can work with multiple accredited bodies who ratify their courses. Training providers who provide the training may also ratify their own courses.

The relationships (who can do what at which organisation) varies widely depending on the specific relationship. For example take a training provider who provides courses of which some are ratified by one organisation and some are ratified by another.

The first accredited body may be responsible for making decisions on behalf of the training provider. Whereas the second accredited body may not be allowed to do that.

If we let training providers set permissions for their organisations
Then organisations won’t do or see something they’re not meant to.

This low-fi itertion was something we put in front of a user who processes applications for Titan Partnership Ltd and Aston Manor Academy.

This is the onboarding journey that the first user with ‘manage organisation’ permissions goes through when they sign in to the provider UI.

We also tested the following design to let the same user invite users to both Titan Partnership Ltd and Aston Manor Academy.

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
