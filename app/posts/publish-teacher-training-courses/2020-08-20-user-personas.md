---
title: User personas as test accounts in Publish
description: Viewing Publish from the perspective of our users
date: 2020-08-20
---

{% from "figure/macro.njk" import appFigure with context %}

When joining the Find or Publish teams, team members had traditionally been granted administrator access to the QA Publish environment.

Admin permissions include access to:
 
* all organisations 
* admin features
* new features or sometimes features in development that are hidden behind flags

Viewing Publish exclusively as an administrator made it harder for the team to experience the service from the perspective of our users. For example:

* with approximately 2000 providers it’s often an hard to find the appropriate organisation for testing a specific scenario
* our users often have complex relationships across multiple organisations which we can’t visualise as an admin user

## Test accounts

We’ve created test accounts based on existing anonymised users for both QA and review apps when testing PRs. The test accounts represent common user personas identified in the service and will help in testing new features and building more empathy with our users. 

### Anne

Anne is a course administrator who belongs to Groby and Partners, a school direct.

### Susy

Susy is a SCITT service manager who belongs to Durham SCITT, an accredited body.

### Mary

Mary is a SCITT Business Support Coordinator who belongs to:

* multiple accredited bodies, Suffolk and Norfolk Primary SCITT and Suffolk and Norfolk Secondary SCITT
* Thorpe St Andrew School and Sixth Form, a school direct with courses accredited by Suffolk and Norfolk Secondary SCITT as well as courses accredited by an organisation not associated with either of Mary’s accredited bodies.

### Colin

Colin is DfE support and has administrator access to all organisations. 

## Logging in as a specific user

For troubleshooting a specific user's issues Support are able to login with the users anonymised email using the ‘Sign in as a specific user’ link in the header. You can also sign in as yourself this way.

## There is something about Mary

The Mary persona represents a specific and potentially problematic scenario in Publish that has [emerged in recent research](/publish-teacher-training-courses/users-with-multiple-organisation-access/#limiting-access-to-some-courses). 

Mary has access to multiple organisations and is associated with two accredited bodies. 

Mary also has access to a school direct (Thorpe St Andrew School and Sixth Form) with courses accredited by one of the accredited bodies (Suffolk and Norfolk Secondary SCITT) they belong to.

Thorpe St Andrew School and Sixth Form also has courses accredited by a third party, an organisation Mary has no connection to, yet Mary can view and edit these courses.

Initial research suggests users should only be able to see only courses their accredited body is responsible for. This is a business rule that Publish has potentially overlooked. 

{{ appFigure({
  image: {
    file: "courses-screenshot.png",
    alt: "Screenshot the a courses page showing courses under different organisations."
  },
  caption: "Mary is not associated with the University of East Anglia yet can still view and edit the courses they accredit."
}) }}

## Next steps

* we need to consider if we should put basic auth on the Personas page itself
* further research is required into the problematic scenario which the Mary persona represents
