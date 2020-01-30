---
title: Allocations Summary 2020/2021
description: A summary of the allocations request processs at the start of the 2020/2021 cycle.
date: 2020-01-24
related:
  items:
  - text: Research playbacks
    href: https://drive.google.com/drive/u/0/folders/13m8XwzRyoNHtncoGVsomBhFMJaSSrMpZ
  - text: Raw research notes and audio/video
    href: https://drive.google.com/drive/u/0/folders/1O0VHTqclp18gIXArG1a-I5FsSdUAusEy
---
A summary of the allocations request processs at the start of the 2020/2021 cycle.

## Process maps

[High level process map](https://docs.google.com/drawings/d/1nj1xNt6sY8fXA_dNcFnDpi_wu5mvZhUzoUpQtZb0pIw/edit) of what happened last cycle. 

[Detailed process map](https://docs.google.com/drawings/d/1WxN1dtugXdIX_xwGRfSqzoDWawgz0LubA2e2hwe5FnE/edit) of what happened last cycle.

## What happened?

Before this cycle started the DTTP (Database of Teacher Training Providers) became unusable.

A new process was communicated to providers via an email which was sent from itt.allocations@education.gov.uk in early June. The email contained a spreadsheet to capture requested allocation data.

[Requests for permission to recruit in 2020/21 spreadsheet](https://drive.google.com/open?id=14gIFMljWyXW9Ys2E84Eg4cBQGUGzxhYd)

[Completed request for permission to recruit in 2020/21 spreadsheet](https://docs.google.com/spreadsheets/d/1Fr5hVrvUB7UAzQe3lF5LtMb7U3rd6y7hv0FavkVa0z4/edit?usp=sharing).

Requests for additional PE places (PE with EBacc subject) were captured in [this form](https://drive.google.com/open?id=1vg8lo_59kpXDRw6aWfuFjJWzXQ0driok).

## Email to providers 1

This email was sent to ITT providers and lead schools.

{% set RequestForAllocations %}

{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Email contents TBC",
  content: RequestForAllocations
}) }}

If providers had permission to recruit they were then sent this email.

## Email to providers 2 (Permission To Recruit) 

{% set PermissionToRecruit %}
Dear colleague,

In July 2019, we asked all eligible ITT providers and lead schools to request permission to recruit for the ITT2020 cycle. Having permission to recruit allows you to list your courses as open for recruitment and access DfE funding associated with training places.

To request permission to recruit, you were required to:

* Be an accredited ITT provider, or meet the eligibility criteria required to act as a School Direct lead school (i.e. a Good or Outstanding Ofsted rating, and a minimum of five schools in a School Direct partnership)
* Complete and submit the request template to DfE, with all the courses you planned to deliver for ITT2020 and, if applicable, the Lead School Registration template via ITT providers

### All eligible ITT providers and lead schools that submitted requests have been granted permission to recruit for ITT2020.

Permission to recruit has been issued in two categories: 

### Unlimited category

Recruitment to ITT courses in this category is unrestricted, and this applies to the majority of postgraduate ITT courses. ITT providers and lead schools have maximum flexibility to recruit as many trainees to these courses.
Allocated category

Recruitment to ITT courses in this category is limited by the number of places allocated by DfE. You can view your allocations here.

The courses in the allocated category are:

* Postgraduate PE courses, including PE provider-led and PE School Direct (fee-funded) routes
* All undergraduate courses leading to QTS
* All early years ITT courses leading to EYTS

### Next Steps

You no longer need to use the Trainee Teacher Portal (TTP) to check whether you have permission to recruit. If you requested permission in July, you should now publish your courses using [Publish teacher training courses](https://interactions.signin.education.gov.uk/133e7c2e-0119-4cee-bace-41e22aec5f0f/usernamepassword?clientid=bats&redirect_uri=https://publish-teacher-training-courses.education.gov.uk/auth/cb). Once you have published your courses, they won’t appear immediately on Find postgraduate teacher training, but will go live on 1 October.

DfE will use the information submitted during the request period to check that all the courses published on Find have permission to recruit.

### Additional information

A full list of courses (subjects and routes) and their categories is available at Annex A of the ITT Allocations Methodology for 2020 to 2021, which is now available on [GOV.​UK](https://www.gov.uk/government/publications/requesting-initial-teacher-training-places-2020-to-2021). Please read this document in full, as it contains important information on permission to recruit and allocating places for the ITT2020 recruitment cycle.

If you did not provide any course information during the request period in July, but wish to run a course beginning in ITT2020, you should contact [ITT.allocations@education.gov.uk immediately](mailto:ITT.allocations@education.gov.uk) to request permission to recruit.

If you have further enquiries about Publish teacher training courses, the publishing tool for Find postgraduate teacher training, please contact [becomingateacher@digital.education.gov.uk](mailto:becomingateacher@digital.education.gov.uk) for information and support.

Kind regards,

Recruitment and Allocations Team
{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Permission to recruit for ITT2020",
  content: PermissionToRecruit
}) }}

## Research headline findings

* Allocations data is known to be too inaccurate and unreliable for forecasting purposes
* The plethora of routes into ITT leads to confusion for providers 
* Allocations data as it is currently collected is little used by the funding and accreditation teams 
* DfE still needs to know that providers actually want to request places for their courses for the current year
* The process of collating and determining allocations for the next cycle was burdensome for TAD

