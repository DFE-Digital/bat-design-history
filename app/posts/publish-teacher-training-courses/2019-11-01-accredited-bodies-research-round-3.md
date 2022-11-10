---
title: Accredited bodies research - Round 3
description: Research on the role of accredited bodies and their relationships with their partner schools
date: 2019-11-01
related:
  items:
    - text: Lookback sessions
      href: https://lookback.io/dfe-digital/find-accrediting-bodies-round-3
    - text: Research playback
      href: https://docs.google.com/presentation/d/1tt_QwL2cU7fpZ9pg4JywENfJGp66DBWtkfTqiBYsLEY/edit#slide=id.g75932c5169_0_62
---

Round 3 is a continuation of the research started in [Accredited Bodies Research Round 1](/publish-teacher-training-courses/accredited-bodies-research-round-1) and [Round 2](/publish-teacher-training-courses/accredited-bodies-research-round-2). This round examines the role of accredited bodies and their relationships with their partner schools.

## Findings

- At the start of each recruitment cycle, UCAS compiles a list of reference data for providers to consume. This is done via XML or ODBC into the provider’s student records systems (SRS) system. Any changes after this are not automatically synced.
- Accrediting body organisations’ needs vary widely. HEIs and SCITTs have Student Record Systems and are affected by systems not being in sync. Some SCITTs use the UCAS Weblink and manual process for applications and are not affected.
- The staging area is an area within the SRS where applications sit to be processed. Applications are stuck in staging because the application cannot be matched to a course in the system. Providers get an import error list, where details about the candidate are present but nothing about the course. To fix this, they typically will log onto UCAS Weblink to find the application, note the details and then go onto Find to find the course to set up in their SRS.
- Providers have very different student record systems - there is the base application but much of the features are personalised to the organisation.
- Organisations map out codes themselves eg Location in School A on UCAS will be assigned to Code X in one organisation’s SRS and Code Z in a different organisation with the same location. This can make integration difficult.
- Providers need CSVs for multiple reasons. They need to check against allocations spreadsheets, use spreadsheets to share data themsleves as there is no single access point and alos for data manipulation.

### Why do accredited bodies need course information

> "We need to know because we are accountable for all the courses that we accredit. There is a reputational risk if we don’t have access [to the information]."

> …So that applications are matched against the correct course within the SRS and we need to know [the info] so that they are imported correctly.

### Accountability

> Manual set up of the courses are part of our responsibility. We want to be able to have eyes on it from the beginning. Programmes are owned by the AB and it comes under our inspection framework.

### Role and relationship

The role of the accredited body and their relationships with their partner school differ depending on a variety of factors. This impacts processes undertaken by the accredited body in terms of managing courses, applications etc.

> We have to ask our school partners to send a copy of what they’re putting on Publish. If a partner wants to make a change about their provisions, it needs to be verified by us before it goes live. **We had schools last year that missed us off as the AB and we only found out through an application!**

> Part of the problem is that providers do not understand what needs to be done, especially if they are new providers and do not understand Publish

### Role of the accredited body

> We have a cross checking approach - schools may advertise the course but we (AB) set it up. Applications come onto our system but we don’t make the interview decision, school does. May be a Uni staff at the interview. The school’s decision goes onto our SRS system. Admin are responsible for checking criteria.

### Allocations

Allocations plays a much bigger role than expected, with accredited bodies using the allocations spreadsheet to cross-check data with course data.

> We can’t just set up a course and bring it into the system unless it is one that has been allocated and approved. If there is a query about the allocation, we would need to contact DfE.

Participants have said it would be useful to have cross checking abilities between allocations and the data about the courses they accredit.

> Do you (DfE) cross check that information [courses live] against the allocations or is it just what people have put on Publish?From an admissions worry point, if we see a course that we don’t expect to see there, we wonder if they (School Direct) have been in touch with DfE, with our side, have they gone through the right channels?

### UCAS Weblink

The UCAS Weblink is used by both accredited bodies with SRS and accredited bodies without SRS to manage applications from candidates. It lists all the providers and the applications that have come through for those partners and what status the applications are though it has it's limitations. ABs will only see the details about what is being applied to, and not all the courses they are accredited bodies for.

> For us to go in and check the data for our partners, we’d have to go in the same way as an applicant would and that really isn’t an efficient way of working.

### Issues with the application process

The process of importing applications from the SRS is generally automatic and takes place daily, or at specific times configured by the accredited body. The UCAS Weblink connects UCAS with the providers SRS.

![Application process diagram.](application-process.png)

If a course does not yet exist in the SRS or if all course data does not map to a provider’s records, the application does not get assigned to a course and instead, is effectively blocked and placed in an import error list. This is sometimes referred to as the staging area within the SRS.

As there is no matching course to link it to in the SRS, the application appears as a _partial_ record where information such as student name and date of birth are visible yet all course details are omitted.

Providers often have to go on Find to identify the course, then fix or set up the course in their SRS to begin importing applications.

> Once that course is live, and we’re getting applications for it, if there is an issue and we can’t honour that course, we have to contact applicants and tell them we can’t continue with that application. We have to terminate it.

### Access roles and permissions

Multiple participants mentioned the need for a central point for information that can be accessed by multiple team members with varying administrative permissions.

Many providers currently use spreadsheets to internally track and manage applicant and course information. The spreadsheets get circulated internally via email and easily become out of date.

> There is a need to be able to access the information from one data source but with different administrative abilities, not everybody should have admin rights.

One provider expressed the need for a verification/approval step before courses gets published.

> We want to be able to verify course changes and new courses before they go onto Find.

Several providers indicated they need more levels of permission in Publish.

> We wouldn't want publishing functionality for all users - people clicking on things they shouldn’t. If we could have a standard account as read only, and an admin account with the privilege to publish and unpublish, that would be great.

### Courses as an accredited body prototype feedback

Participants suggested a need for more information on the Courses and accredited screens. This included:

- vacancy data per location when a course had multiple sites
- approved allocation numbers

Access and permissions were also mentioned.

> We’d like tutors to be able to see (but not be able to edit) this information.

*[HEI]: Higher education institute
*[HEIs]: Higher education institutes
*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
*[UCAS]: Universities and colleges admissions service
*[XML]: Extensible Markup Language
*[ODBC]: Open database connectivity
