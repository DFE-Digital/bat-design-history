---
title: Showing different stages of the application process in the ‘candidate drop out’ report
description: Following research, we created a second iteration of the report showing users how candidates choose to leave the application process
date: 2021-09-22
tags:
  - MN028
screenshots:
  items:
    - text: Reports landing page
      src: reports-landing-page--single-organisation.png
    - text: Reports landing page when the user belongs to multiple organisations
      src: reports-landing-page--multiple-organisations.png
    - text: When candidates choose to leave the application process report (iteration 1)
      src: candidate-drop-out-report-iteration-1.png
    - text: When candidates choose to leave the application process report (iteration 2)
      src: candidate-drop-out-report-iteration-2.png
---

This work follows on from our design to [show users where candidates choose to leave the application process](/manage-teacher-training-applications/showing-users-where-candidates-choose-to-leave-the-application-process/).

The user need we’re trying to meet with this work is:

{% set need = collections['user-need'] | slugs(tags) | first %}

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  title: need.data.title,
  description: need.templateContent,
  url: need.url,
  status: need.data.status
}) }}

We made changes to the report during a round of research.

## What we changed

We made changes to the:

- column headings within the table
- report title

### Column headings

When we started the round of research, the report showed:

- applications withdrawn before offer made
- offers declined and applications withdrawn after offer made

We quickly found that there were problems with dividing the data in this way. In particular, some research participants were confused by the mention of withdrawing after an offer has been made.

We think that they were confused because candidates cannot withdraw when an offer has been made but not yet accepted. It’s possible for a provider to withdraw on a candidate’s behalf at this point, but no provider has actually done this.

Since the user need is to know when the candidate left the process, we also decided to change the wording to emphasise this rather than how they left it.

We decided to divide the data into 3 sections:

- before offer made (applications withdrawn) - showing the number withdrawn out of all applications received
- while considering offer (offers declined and applications withdrawn) - showing the number declined out of all offers made
- after offer accepted (applications withdrawn) - showing the number withdrawn out of all offers accepted

However, some participants thought that “while considering offer” referred to them considering it rather than the candidate.

We decided to change the wording to make it clear who took action at each stage. The column headings at the end of the round of research were:

- before offer made to candidate (applications withdrawn)
- while candidate considering offer (offers declined and applications withdrawn)
- after candidate accepted offer (applications withdrawn)

### Report title

We changed the title to more clearly reflect the focus on when the candidate left the process rather than how they left it.

We changed it from ‘Where candidates choose to leave the application process’ to ‘When candidates choose to leave the application process’
