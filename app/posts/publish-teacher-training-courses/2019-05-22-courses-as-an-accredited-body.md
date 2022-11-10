---
title: Courses as an accredited body
description: See which courses you’re the accredited body for
date: 2019-05-22
screenshots:
  items:
    - Organisation page with new section
    - Courses as an accredited body
    - Courses from a training provider
---

There is a need for accredited bodies to see the courses they are associated with. UCAS web-link used to give them a read-only view of all courses – running or not, as well as a CSV export of the data.

A provider can currently see all published courses they’re the accredited body for on Find postgraduate teacher training (Find) ([Example](https://find-postgraduate-teacher-training.education.gov.uk/results?page=3&l=3&query=The%20University%20of%20Warwick&qualifications=QtsOnly,PgdePgceWithQts,Other&fulltime=False&parttime=False&hasvacancies=True&senCourses=False)). We could link to this view as a quick fix.

## Design notes

In the design below a new section has been added: Courses as an accredited body. This links to page listing all providers who’ve selected them, and a further link to see a table of courses. Text for these courses can be seen on Find if they’ve been published. There is no link to a read-only Publish version – if research shows we need one we could link to the course preview.

A link to download a CSV of the data has been included.

A previous design (not shown), tried to put all provider courses on one page, but for some providers this can be upwards of 700 courses. Separating out the courses by training provider limits the number of courses shown and should make specific courses easier to find.

## User research

We tested this design with accredited bodies:

- [University of Greenwich](https://lookback.io/watch/JyBeeZj4fWbTdo7oJ) – 16 of their own courses and a further 11 they’re the accredited body for
- [Liverpool Hope University](https://lookback.io/watch/SnRd92det9Eeehb3w) – 25 of their own courses and a further 88 they’re the accredited body for
- [East of England Teacher Training (SCITT)](https://lookback.io/watch/xG4kWc75pZTTj5pgb)

### Marketing name vs School name

[“We get confused between the alliance name and the school name”](https://lookback.io/watch/SnRd92det9Eeehb3w?t=33m40.72s)

School direct providers are known by two names:

- an alliance name – a marketing name that represents a group of schools
- the name of the lead school in the alliance

On Find (and UCAS Apply) we prefer the alliance name. This minimises candidate confusion. If the lead school name was used candidates might expect to train at that school. The type of that lead school can also be confusing – consider a primary lead school offering secondary courses via a partner. By using the alliance name we avoid organisation name changes when the lead school changes.

On the Courses as an accredited body page we use the marketing name. One provider didn’t recognise the alliance names – they only know the lead schools. The design should be iterated to show both, this should also help users to improve their knowledge of which lead school belongs to which alliance.

### Current workarounds

Without the Courses as an accredited body feature, one provider uses Find to search for each school direct and their courses. They’re checking to see if the basic course details and written information is true. This takes a long time and is compounded by the marketing vs alliance name problem.

School directs often ask questions of their accredited bodies, without easy access to the School direct’s courses it can be difficult to answer them.

### Changes to courses

Accredited bodies expressed a need to be notified when they are associated with a new course or if a course has been updated. When a school direct provider makes a change to one of their courses, the accredited body will only know if that providers tells them.

The practice recommended by UCAS of discontinuing a course and creating a new one to fix errors causes problems for accredited bodies – changes to course codes may not be communicated back to them, meaning their internal systems are wrong.

[A discussion about alerts](https://lookback.io/watch/SnRd92det9Eeehb3w?t=14m40s)

*[CSV]: Comma Separated Values
*[UCAS]: Universities and colleges admissions service
