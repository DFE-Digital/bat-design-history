---
title: Researching the needs of users with access to multiple organisations
description: We were interested in learning more about users who belong to multiple organisations
date: 2020-06-23
tags:
  - users
  - organisations
  - permissions
related:
  items:
    - text: Research playback
      href: https://docs.google.com/presentation/d/1nEHtz_gDq_OXtiAPsucswPoUYEa1qiH6TV8GIPCSBeQ/edit#slide=id.g8a7af39ae0_0_32
    - text: Research recordings
      href: https://drive.google.com/drive/u/0/folders/1NBOe2-5ltGeoWIOik1-CQ4Vfhz3MPsoD
---

We were interested in learning more about users who belong to multiple organisations.

- Do they have unique needs?
- Is there a need for access and permission levels across the organisations they belong to?
- What are their notification needs?

## Who we talked to

- TKAT SCITT
- Kirklees and Calderdale SCITT
- Suffolk and Norfolk Secondary SCITT
- Essex Teacher Training
- Associated Merseyside Partnership SCITT
- Essex and Thames SCITT
- University of East Anglia

## Who are multi-organisation users?

Approximately 21% of active Publish users belong to more than one organisation.

### The ratio of users who belong to multiple organisations

| Number of users | Number of organisations a user belongs to |
| --- | --- |
|1,410|1|
|245|2|
|62|3|
|17|4|
|5|5|
|4|6|
|7|7|
|2|8|
|2|9|
|7|12|
|1|16|
|1|17|
|1|18|
|1|20|

Total active users: 1,765

(Data from May 2020)

## Research findings

The reasons why users belong to multiple organisations vary and their relationships are complex. Two reasons identified in this research include:

SCITTs who manage multiple organisations to ensure they remain visible in search results by location.

> It started out from when we first went on to UCAS we had about all SCITTs had about a third drop in applications initially because we were not visible. So what we had to do was to try and make ourselves more visible. And the easiest way to do that was to have lots of different lead schools so that you would cover a geographical region.

> Because some are interested in applying to that school because they know that school and they know that location, as opposed to knowing who the SCITT is because some people, particularly people who are not within education do not understand the differences.

Users who are responsible for managing their training providers courses.

> Some of the schools are quite self sufficient... it’s just dependent on what the school is like. Some are very hands on and some are very hands off and just prefer us to do it. And we probably have like two schools who manage it all themselves. Now maybe come back to me with any questions if they’re not sure about something.

### Course management

3 course management scenarios were identified in this round of research.

#### Scenario 1 - Self manage and manage all others

A SCITT’s ITT administrator manages:

- the courses provided by the SCITT
- all the courses provided by their training providers (for which the SCITT is the accredited body)

> I have very very good communication with our schools... so once I know what schools can advertise, what subject... then I will put all in Publish, and I open them, close them, I manage them, the school does not, I oversee it all, the schools do not have any input at all, obviously they tell me what they want to advertise, but I update the system.

[Research highlight](https://drive.google.com/file/d/17PVqL57VEWHTrM5o4Fkjz80vNFBnlC6j/view?usp=sharing)

#### Scenario 1 - Self manage and manage some others

A SCITT’s ITT administrator manages:

- the courses provided by the SCITT
- the courses provided by only some of their training providers

> ...it depends whether the schools are wanting to do this themselves because some schools do not have admin support, so it’s teachers running it and they do not have the admin time to do this section, we do that for them.

[Research highlight](https://drive.google.com/file/d/1FmaVDL2HDRuR8uoFuSxUaWdom0KQl8NH/view?usp=sharing)

#### Scenario 3 - Self manage only

A SCITT’s ITT administrator only manages the courses provided by the SCITT. The training providers manage all of their own courses.

### User list

It was unclear to some participants why there were so many Publish users within their organisation. Some users in the list were unknown to them; others were reported as having left the organisation.

> I’m not really sure who needs to be there. It’s a bit vague.

### Notifications

The research highlighted the need for multi-organisation users to be able to specify which organisations they receive notifications about.

#### User need

{% from "user-need/macro.njk" import appUserNeed %}
{{ appUserNeed({
  description: "As a user who belongs to an accredited provider with multiple training providers
  I need the ability to choose which organisations I receive notifications about
  So that I only get notified about specific events"
}) }}

When asked about notifications frequency participants mentioned that they would like to be notified as soon as a change happens. This is consistent with findings in [previous notifications research](/publish-teacher-training-courses/managing-users/).

Considering this, we do not feel there is an immediate need for options in notifications frequency.

### User access and permissions

Some participants mentioned the need to implement levels of access and permissions to Publish.

#### User need

{{ appUserNeed({
  description: "As an Publish user
  I need to be able to assign permissions to other users
  So that I can control their access level to features"
}) }}

> You need one person and or possibly two people to edit users... because that would prevent any malicious editing from people.

> I was in this organisation, for example, and I then wanted to request access for somebody. Yeah. Which now is on this user’s page. Yeah. You see all of this, if I requested access for someone else, what it was doing, it was giving them the same access that I had. It was not giving access to that individual provider.

This is consistent with [previous notifications research](/publish-teacher-training-courses/managing-users/#research-feedback) on user management.

### Limiting access to some courses

During this research we encountered two participants that mentioned they should only be able to view the courses they are the accredited body for when accessing their training providers course list. In an instance where a training provider had multiple accredited bodies, a participant described the relationship between those accrediting bodies as _competitors_.

This suggests there is a need for course access permissions when adding users to an organisation. E.g. Should this user have access to all courses or just courses accredited by organisation _x_?

#### User need

{{ appUserNeed({
  description: "As an accredited provider user when accessing a training providers organisation
  I need to be able to see only the courses my accredited body is responsible for
  So that I do not breach the agreement with my partners"
}) }}

> Yorkshire Anglican, they have two courses, one with us, and one with the University of Huddersfield. My partners are not happy that I can access those courses.

[Research highlight](https://drive.google.com/file/d/1htlAbixAa6D8xAf9pdoFAnynCjvbazID/view)
[Research highlight](https://drive.google.com/file/d/1uFXkxAj4R2bTNHhV0Dp9MYJVxYfIMT1i/view)
[Research highlight](https://drive.google.com/file/d/144lrMfYIanYafRXQOqpOIoguJHyj_fn4/view)

### The Publish/Apply user relationship

One participant mentioned their involvement with the Apply trial and queried account management.

> We are part of the trial with Apply. Does it mean we’ll need to register again with Apply or will it be automatically?

### Copying course content

#### User need

{{ appUserNeed({
  description: "As an accredited provider managing courses for different organisations
  I need to be able to copy course content from one organisation to another, and not just within the same organisation
  So that I save time and it is easier for me"
}) }}

> I would increase the copy facility so that you can copy between lead schools as well. So if I’ve got an identical course running out five different schools I’ve not got to, I can just copy it from one lead school to another.

*[ITT]: Initial teacher training
*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
