---
title: Make it easier to find university courses
description: How we model university locations makes finding courses less likely
date: 2020-05-05
screenshots:
  items:
    - text: Show us where your schools are
      src: 01-show-us-where-your-schools-are.png
    - text: Example with polygon
      src: 02-example-with-polygon.png
    - text: Example with circle
      src: 03-example-with-circle.png
---

Most candidates search by location. When searching by location we calculate the distance between the candidate and each of a course’s training locations. We order those results by distance, and show the closest ones first.

A training location represents a place a candidate will train, and is a place they must express a preference toward when applying. School direct and SCITT courses often add multiple locations, usually representing individual schools. Candidates choose which school they want to study at. This creates multiple points which can be matched against in search.

Universities use a single location, their campus. They work with hundreds of schools over a wide area but this is not considered in our searches. For a university course to rank highly the candidate must be close to a campus.

A school direct course with a few places and a few locations will show more frequently than a university with many places and many potential placement locations. Particularly for universities with out of town campuses. Results are skewed against universities.

[An earlier write-up of the location problem](/publish-teacher-training-courses/the-location-problem)

## Options for better representing university courses

We need more data. We should decide what form that data takes and how a university gives it to us. And then, how we use that data to rank search results.

We could:

1. capture data on every school they work with and use those points to surface courses
2. use school data to define an area they work within
3. ask for universities to define the area they work within on a map
4. assume that a university covers an area of X miles around their campus

### Recommendation

- A technical prototype for option 4 to test how search results will be affected
- Research and design option 3 and 4 to test our assumptions and see if defining an area is a viable approach

### 1. Capture data on every school

We [prototyped this in autumn 2018](/find-teacher-training/maps-for-providers-with-many-partners).

We used [a school autocomplete](/publish-teacher-training-courses/schools-autocomplete) as a fast and easy way to create and manage a list of 100s of schools.

Problems included:

- too much data to add
- too long a list to maintain
- some schools are hard to find (eg which St Mary’s)
- not all schools offer all subjects (ie sometimes the data will be inaccurate)
- universities don’t want candidates to see the list of schools (candidates can’t choose which school to go to, they will be placed by the university)
- we couldn’t show these points on a map

### 2. Use school data to define an area

Mostly relevant to solving the problem of showing course results on a map. We also tried this in 2018. Taking the data from step 1, but rather than showing the points on a map, we derive a geographical area from the schools entered and use that instead.

Problems included:

- all the problems of capturing schools again
- complexity of deriving an area from points
- [strange looking areas on maps](/find-teacher-training/maps-for-providers-with-many-partners#outline-schools-and-ignore-outliers)

### 3. Ask for universities to define an area

Instead of telling us each school and deriving an area, they could give us their best estimate of the area they cover.

This means:

- there's no long list of schools to maintain
- no schools are shown to candidates
- we'd have an area we could show on a map in the future

But it depends on providers:

- being able to define an area (eg by drawing on a map, or by specifying a circle’s centre and radius)
- having a geographical understanding of roughly where their schools are
- using their own list of schools to refine that area

With the area defined, any candidate searches that fall within that area can be prioritised. We'd need to show university search results slightly differently. Rather than "2 miles to nearest location", we’d need to say something like "works with schools in this area".

We have an initial prototype for this, screenshots shown below.

### 4. Make some assumptions about universities

All of these approaches depend on every provider giving us decent data. They're good longterm solutions but they won’t improve search results immediately, and as data is collected the benefits may only be seen by some.

Alternatively, we could assume that each university works with many schools near to its campus. Rather than representing that campus as a single point, we might extend the point by something like 5 miles, creating an estimated area for that university.

Like option 3, searches within that area or close to it can then be prioritised, giving each university course a greater likelihood of showing in search results.

*[SCITT]: School centred initial teacher training
*[SCITTs]: School centred initial teacher training
