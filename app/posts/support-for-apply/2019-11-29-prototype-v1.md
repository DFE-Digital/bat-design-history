---
title: Support for Apply as designed for MVP
description: The initial pilot designs
---
On 26 November we launched the initial Support for Apply pilot application to let support agents amend applications and import references submitted via Google Forms.

Due to tight deadlines, referees submit their references ussing a Google Form. All submissions are saved automatically to a Google spreadsheet. Then support agents import them using Support for Apply.

Support agents can:

* check the status of applications (applications that need action appear at the top)
* see an audit trail of everything that's happened to an application
* create new vendor API tokens

In future we’ll look at:

* letting referees submit references automatically via a GOV.UK styled form
* letting support agents filter or sort the list of applications
* add pagination to the application list

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {text: 'Application list'},
    {text: 'Application details (1 reference request failed and waiting on 1 reference)'},
    {text: 'Application details (references received)'},
    {text: 'Application details (Waiting on references)'},
    {text: 'Import references form'},
    {text: 'Import references success page'},
    {text: 'API tokens list'},
    {text: 'Create API token'},
    {text: 'Create API token success page'}
  ]
}) }}
