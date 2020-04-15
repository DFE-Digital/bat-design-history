---
title: Allocations Alpha - Initial prototypes
description: Prototyping features to address the proposed updates to the allocations process for the 2021/22 cycle.  
date: 2020-03-12
related:
  items:
  - text: UR Playback
    href: https://docs.google.com/presentation/d/1MBExJ5LGdohmdqqiIPTjFKJhB-3r8NpWLGmLzAEMAOw/edit#slide=id.g7e44b4e9ab_0_90
---
The Allocations Alpha includes proposed changes to the [previous Allocations process](/publish-teacher-training-courses/allocations-cycle-summary). We prototyped features for Publish to enable: 
* granting permission to recruit for uncapped courses as part of the add courses/rollover journey on Publish
* enabling accredited providers to request and receive allocations for capped courses on Publish

## Proposed allocations process map

[Detailed process map](https://docs.google.com/presentation/d/19CKc1oNcEb7GifojX7KpaI25KNqD4fAxPB2lxIpgUsw/edit#slide=id.g7f005bbdba_0_199)

## User needs

**As an ITT provider**
I want to receive permission to recruit in uncapped courses so that I can recruit to uncapped courses and access any DfE funding associated with these courses.

**As an ITT provider**
I want to receive permission to recruit and allocations for capped courses so I know how many trainees I can recruit to these courses and access any DfE funding associated with these courses.

## What we tested

An additional screen to be included during the [rollover process](/publish-teacher-training-courses/what-we-did-for-rollover) to inform users of guidence on permission to recruit trainees.

A feature to allow acredited bodies to request Fee-funded PE places.

## Who we tested with

* Kings College London
* UCL (ITE Administrator, Programme Services Coordinator)
* Leeds Beckett University (Head of Subject: Teacher Education)
* Brunel University London (Acting College Education Manager)
* Newman University, Birmingham (Head of Registry)

## What we learned

The revised process was well received by users, it is much clearer and simpler, and less onerous than last cycle.

The users had no troble findng the Request PE courses feature.

There is real concern amongst some users about the removal of submitting  numbers for capped and uncapped courses - users wanted to understand why. Having been asked for numbers by DfE in previous years, many users appeared thrown by not being required to submit them.

DfE terminology including training provider, locations, partnership, accredited body confused some users.  

## Prototype feedback

Generally users were able to follow the journey and complete the tasks successfully.

Some of the navigation mislead users - the ‘Continue’ call to action did not really continue the flow, but rather take them back to the start.

The term provider in particular confused many users and raised a number of questions.

Candidates wanted to more information on confiramtions screens about what happens next.  

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Recruiting for the next cycle"
    }, 
    {
      text: "Publish teacher training courses"
    }, 
    {
      text: "Request PE courses"
    }, 
    {
      text: "Do you want to request PE for this provider"
    }, 
    {
      text: "Request sent"
    }, 
    {
      text: "Thank you"
    }, 
    {
      text: "What is the name of the new provider"
    }, 
    {
      text: "How many fee-funded PE places are you requesting"
    }, 
    {
      text: "Check your information before submitting your request"
    }, 
    {
      text: "New organisation added"
    }, 
    {
      text: "Request undergraduate and EYITT courses"
    }
  ]
}) }}