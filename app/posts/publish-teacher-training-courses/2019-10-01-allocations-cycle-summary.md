---
title: Allocations process for 2020 – 2021
description: A summary of the request process followed for this cycle.
date: 2019-10-01
related:
  items:
  - text: Research playbacks
    href: https://drive.google.com/drive/u/0/folders/13m8XwzRyoNHtncoGVsomBhFMJaSSrMpZ
  - text: Raw research notes and audio/video
    href: https://drive.google.com/drive/u/0/folders/1O0VHTqclp18gIXArG1a-I5FsSdUAusEy
---
A summary of the process followed for the 2020 – 2021 recruitment cycle.

## Process maps

[High level process map](https://docs.google.com/drawings/d/1nj1xNt6sY8fXA_dNcFnDpi_wu5mvZhUzoUpQtZb0pIw/edit)

[Detailed process map](https://docs.google.com/drawings/d/1WxN1dtugXdIX_xwGRfSqzoDWawgz0LubA2e2hwe5FnE/edit)

## What happened?

Before this cycle started DTTP (Database of Teacher Training Providers) became unusable.

A new process was communicated to providers via an email sent from `itt.allocations@education.gov.uk` in early June. The email contained a spreadsheet to capture requested allocation data.

[Requests for permission to recruit in 2020 – 2021 spreadsheet](https://drive.google.com/open?id=14gIFMljWyXW9Ys2E84Eg4cBQGUGzxhYd)

[Completed request for permission to recruit in 2020 – 2021 spreadsheet](https://docs.google.com/spreadsheets/d/1Fr5hVrvUB7UAzQe3lF5LtMb7U3rd6y7hv0FavkVa0z4/edit?usp=sharing).

Requests for additional PE places (PE with EBacc subject) were captured in [a separate form](https://drive.google.com/open?id=1vg8lo_59kpXDRw6aWfuFjJWzXQ0driok).

## Email to providers 1

This email was sent to ITT providers and lead schools.

{% set RequestForAllocations %}

Dear Colleague

### Initial Teacher Training (ITT) 2020 Recruitment: Requesting permission to recruit to unlimited courses and requesting places in allocated courses.

Providers and lead schools have until 12 July to submit requests for permission to recruit to unlimited courses and request allocations for allocated courses for ITT2020 (academic year 2020/21).

Please read the full guidance: [Requesting initial teacher training places.](https://www.gov.uk/government/publications/requesting-initial-teacher-training-places-2020-to-2021)

As set out in the [Teacher Recruitment and Retention Strategy](https://www.gov.uk/government/publications/teacher-recruitment-and-retention-strategy), recruitment to all postgraduate ITT courses will remain unlimited for ITT2020 and ITT2021, with the exception of PE (fee-funded) routes.

This year, the request process will be different:
* Lead schools must register by completing and returning the Lead school registration template to DfE.
* Lead schools should also enter their School Direct and Postgraduate Teaching Apprenticeship (PGTA) requests to the requests template and pass on to their ITT provider, who will submit to DfE on their behalf.
* ITT providers should enter their Provider-led and undergraduate requests onto their request template.
* All request templates completed by ITT providers and lead schools must be submitted to DfE, using the template below, by the ITT provider only. Requests are not ratified unless submitted to DfE by the ITT provider.
* Information submitted must include the minimum viability and forecast recruitment for each ITT course for ITT2020. Forecasts should reflect the number of trainees the partnership expects to realistically recruit to that course.

Please note that request templates will be pre-populated with the courses listed on ‘Find’ for ITT2019 to help with data entry, but all number fields will be blank. You can access your personalised template here: 

[The Manchester Metropolitan University – Request template ITT2020](https://sadfebatallocations.blob.core.windows.net/find-allocations/Allocations_requests_ITT2020-10004180-32868010-8c7f-4dbd-bfd6-4148957dc59c.xlsx)

### Requesting permission to recruit – ITT providers

Providers must return all requests to DfE, including provider-led and all courses they agree to ratify. Lead schools should agree their course requests with their partner provider as soon as possible to enable the provider to submit all requests by midday 12 July. Partnerships can decide for themselves whether lead school request templates are completed by the lead school or the provider, as long as they are submitted to DfE by the provider. Providers should e-mail their completed template(s) to [ITT.allocations@education.gov.uk](mailto:ITT.allocations@education.gov.uk) before midday 12 July. Please refer to the [Requesting initial teacher training places](https://www.gov.uk/government/publications/requesting-initial-teacher-training-places-2020-to-2021) guidance for full details.

Requests must indicate the minimum viability and forecast recruitment for each ITT course they will offer in ITT2020.

> Forecasts should reflect the number of trainees the partnership expects to realistically recruit to that course. DfE will use this information to better understand the ITT market and may use it to inform future policy development. There will be no penalties for recruiting under or over this figure for unlimited courses. As in previous years, allocations will continue to define the maximum number that can be recruited for allocated subjects.

Additionally, each request must include a 3-year indicative forecast which reflects whether the partnership intends to increase, decrease or maintain the number of trainees recruited in future years.

### Requesting permission to recruit – lead schools

Lead schools who wish to request places for ITT2020 must register as a lead school by returning the following registration template to [ITT.allocations@education.gov.uk](mailto:ITT.allocations@education.gov.uk ) before midday on 12 July:

[Lead school registration template](https://sadfebatallocations.blob.core.windows.net/find-allocations/Lead_School_Registration_Template.xlsx)

To be eligible to register the school must have been judged by Ofsted as “good” or “outstanding”. They must list the other schools in their partnership (minimum partnership size is 5 partner schools, or 3 for special schools). They should use the correct school details as listed on the [Register of Schools in England](https://get-information-schools.service.gov.uk/).

For ITT2020, lead schools should submit their requests for School Direct and Postgraduate Teaching Apprenticeship (PGTA) courses to their provider, who will ratify them by forwarding to DfE. Lead schools should agree their course requests with their partner provider as soon as possible, and should not return requests to DfE directly (please do not copy DfE in to correspondence emails).

> Requests are not ratified unless submitted to DfE by the ITT provider. 

Please remember that for PGTA courses the accredited ITT provider must be on the [Register of Apprenticeship Training Providers (RoATP)](https://roatp.apprenticeships.education.gov.uk/download).

For further enquiries, please contact the [ITT Recruitment & Allocations Team](mailto:ITT.allocations@education.gov.uk) at ITT.allocations@education.gov.uk.

Kind regards

ITT Recruitment & Allocations Team

{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Requesting Initial Teacher Training places 2020 to 2021",
  content: RequestForAllocations
}) }}

## Email to providers 2 (Reminder)

The Allocations team sent a reminder in early July.

{% set ReminderForAllocations %}

Dear Colleague

###  Reminder to request permission to recruit for ITT2020

All ITT providers and lead schools should complete the actions listed below before midday on 12 July in order to request places for ITT2020. You must request permission to recruit so that your courses can be listed as open for recruitment on ‘Find postgraduate teacher training’ and UCAS, and to access any DfE funding associated with training places.

* **Lead school registration:** All lead schools (new and existing) **must** register as a lead school by returning the attached registration template to [ITT.allocations@education.gov.uk](mailto:ITT.allocations@education.gov.uk)
* **ITT requests:** All ITT providers and lead schools should enter information on the courses they wish to deliver using the templates provided. These must be submitted to DfE by ITT providers to confirm that all courses have been ratified. DfE will not accept templates directly from lead schools. Providers should email ITT.allocations@education.gov.uk

As the process for requesting permission to recruit to ITT courses is different this year, all providers and lead schools should refer to the [Requesting initial teacher training places](https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fassets.publishing.service.gov.uk%2Fgovernment%2Fuploads%2Fsystem%2Fuploads%2Fattachment_data%2Ffile%2F811725%2FRequesting_ITT_places_2020_to_2021.pdf&data=02%7C01%7Cl.george100%40durhamlearning.net%7Ce50fece0d1814dbbe9ee08d7038b8bf7%7C45dfff5283644d73bf3a8f98bdf10d87%7C0%7C1%7C636981770336567802&sdata=zC2l04aaHNQXPqDBf9b%2F1FGPYf3e17x5WJFEer6iB48%3D&reserved=0) document for full guidance. Please contact us if you have further enquiries or if you have not received a template at [ITT Recruitment & Allocations Team](mailto:ITT.allocations@education.gov.uk).

For further enquiries, please contact the [ITT Recruitment & Allocations Team](mailto:ITT.allocations@education.gov.uk) at ITT.allocations@education.gov.uk.

Kind regards

ITT Recruitment & Allocations Team

{% endset %}

{% from "email/macro.njk" import appEmail %}
{{ appEmail({
  subject: "Reminder to request permission to recruit for ITT2020",
  content: ReminderForAllocations
}) }}

## Email to providers 3 (Permission To Recruit)

If providers had permission to recruit they were then sent this email:

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