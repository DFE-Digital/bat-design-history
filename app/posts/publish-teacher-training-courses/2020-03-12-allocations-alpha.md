---
title: Allocations alpha
description: Designing to accomodate changes to the allocations process for 2021 - 2022
date: 2020-03-12
tags:
  - PN004
  - PN005
  - PN006
  - allocations
screenshots:
  items:
    - Recruiting for the next cycle
    - Publish teacher training courses
    - Request PE courses
    - Do you want to request PE for this organisation
    - Intends to offer fee-funded PE
    - Not offering fee-funded PE
    - Who are you requesting a course for
    - How many places would you like to request
    - Check your information
    - New organisation added
related:
  items:
    - text: UR Playback Sprint 1
      href: https://drive.google.com/open?id=1LTdnHvZ4_3WEXjnLNQnkLBwo_KT_suwIuwus5uLeuIc
    - text: UR Playback Sprint 2
      href: https://drive.google.com/open?id=1MBExJ5LGdohmdqqiIPTjFKJhB-3r8NpWLGmLzAEMAOw
    - text: UR Playback Sprint 3
      href: https://drive.google.com/open?id=1__6rdAMfb_Ooizx2WbnEvGHq2pH_SL1Pp-wtWkaToio
    - text: Alpha Report
      href: https://drive.google.com/open?id=19CKc1oNcEb7GifojX7KpaI25KNqD4fAxPB2lxIpgUsw
    - text: Rollover prototype
      href: https://rollover-prototype.herokuapp.com/
    - text: Request PE courses prototype
      href: https://allocations-alpha.herokuapp.com/
---

The allocations alpha explored potential changes to the [previous allocations process](/publish-teacher-training-courses/allocations-cycle-summary).

We prototyped and tested features to:

- provide a clear understanding of the changes to the recruitment cycle
- grant permission to recruit for uncapped courses as part of the add courses/rollover journey on Publish teacher training courses (Publish)
- enable accredited providers to request and receive allocations for capped courses on Publish
- request undergraduate and early years initial teacher training course places

## Proposed allocations process map

[Detailed process map](https://docs.google.com/presentation/d/19CKc1oNcEb7GifojX7KpaI25KNqD4fAxPB2lxIpgUsw/edit#slide=id.g7f005bbdba_0_199)

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Who we tested with

- Bishop's Stortford Educational Trust (Training Director)
- Brunel University London (Acting College Education Manager)
- Chipping Hill Essex (Headteacher)
- City College Norwich (Teaching Centre Director)
- Kings College London
- Leeds Beckett University (Head of Subject: Teacher Education)
- Middlesex University (Head of ITT, Data Officer)
- Newman University, Birmingham (Head of Registry)
- President Kennedy School (Teaching School Manager)
- SAF ITT - Sharnbrook Academy Federation
- UCL, University College London (ITE Administrator, Programme Services Coordinator)
- University College London (Data and Compliance Coordinator)
- University of Bristol (PGCE Director)
- University of Cambridge (Head of PGCE and Undergraduate Office)
- University of East Anglia (School Manager)

## What we tested

## Rollover screen

An additional screen to be included during the [rollover process](/publish-teacher-training-courses/what-we-did-for-rollover) to share guidance about permission to recruit trainees.

[Rollover prototype](https://rollover-prototype.herokuapp.com/)

### Feeback

This page were generally deemed to be clear and succinct.

## Requesting EYITT and undergraduate courses

Google forms will be used to collect requests for EYITT and undergraduate courses as the number of ITT providers offering these courses is low and these courses are outside the scope of ublish teacher training courses.

Links to these forms will be sent to accredited bodies via email.

[Google form - Request undergraduate courses for 2021/22](https://docs.google.com/forms/d/e/1FAIpQLSejFzJRrWkXTOTQWYi3rvYcVPycgr7AaeA3xSvWK27xhtOjeA/viewform)

[Google form - Request EYITT courses for 2021/22](https://docs.google.com/forms/d/1cAvvWI6PK-FRLmwt7sVkwK0ljDYltpfV-LLfvR4-O6k/viewform)

### Feeback

One user noted that accessing a Google form would be problematic due to their school IT systems restricting access to Google tools.

Some users were unclear on whether the number of places requested should be a ‘realistic number’ or a maximum number?

Users would prefer to be able to submit requests for all undergraduate courses courses in one go, rather than one google form per subject.

## Request PE courses

Accredited bodies will have the ability to request courses on behalf of organisations they accredit from within Publish.

If the organisation is currently offering PE, we need to know if they intended to offer PE again in the following cycle.

If the request is for an organisation running PE for the first time or had previously offered PE before the current cycle, we need to know how many places the organisation is requesting.

[Request PE courses prototype](https://allocations-alpha.herokuapp.com/)

### Feeback

Users liked the brevity and simplicity of this journey, and the clarity of the confirmation pages.

A number of users assumed that Lead schools and HEIs would see different views of these pages with different terminology accordingly.

Some were confused by who is actually doing the requesting, noting that the only people who can request places are lead schools and accredited bodies.

Users liked not having to provide a numerical range in their request yet many thought was likely to cause people to inflate numbers (as has happened anecdotally in the past).

Users mentioned that a reminder of previous years’ allocations might be helpful. We addressed this by including them on confirmation screens which was seen as logical by participants.

## What we learned in Alpha

Integrating allocations into Publish makes sense to users.

The revised process was well received by users, it is much clearer and simpler, and less onerous than last cycle.

There is concern amongst some users about the removal of submitting numbers for capped and uncapped courses, users wanted to understand why. Having been asked for numbers by DfE in previous years, many users appeared thrown by not being required to submit them.

Terminology continues to confuse many users: for example, ‘accredited body’, ‘training provider’, ‘partnership’, and ‘lead school’ are often misconstrued.

Providers want to retain control and oversight of partner schools’ allocations, and some users were unclear on who was actually doing the requesting.

Users noted that staff with responsibility for allocations are often not those who typically use Publish, which more commonly sits with the admissions or marketing teams.

The internal ownership of Publish varies by organisation: so the proposed new allocations process may necessitate internal changes by providers.

## User feedback

> I’m glad you removed the forecast because that was madness and inflated the expected replenishment of teachers - they were false numbers. This is much more ‘real-world’.

> I’m feeling anxious about the lack of numbers...

> But I’m still slightly confused about having to supply recruitment figures for one [new PE courses] and not the other [existing PE courses]

> I do not have to complete spreadsheets… Hurrah!

> Overall, this is a huge step forward, it just needs a bit of work on getting the terminology right

> I know what I’m doing here and am in control of it.

*[ITT]: Initial teacher training
*[PGCE]: Postgraduate certificate in education
*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
