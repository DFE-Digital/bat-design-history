---
title: Removing 2 filters
description: Why we removed subject and location as filters
date: 2021-08-23
---

We have recently added two new filtering options to Find, for [degree requirements](/find-teacher-training/degree-requirement-filter/) and for [visa sponsorship](/find-teacher-training/visa-sponsorship-filter/).

In order to avoid the list of filters becoming overwhelming, we also reviewed the existing filters.

## Existing filters

Currently, at the top of the filters box are sections for Location (or provider, if this is selected instead) and for Subjects. However, because each of these filters are more complicated than a straightforward set of checkboxes or radios, these work differently from the other filters. Instead of being able to update the answer within the page itself, the currently selected location and subjects are shown, and ‘Change’ links take you to a page where you can change your answer.

![Screenshot showing existing filters on Find](results-before.png "Existing filters on Find")

We had no direct evidence of this causing any issues, however it is potentially confusing for these filters to work differently from the rest. For example, if you were to check or uncheck one of the other checkboxes, and then click a ‘Change’ link before clicking the ‘Apply filters’ button, you would lose the other change that you had made.

We also had a hypothesis that users were less likely to change the location or subject answers than the other filters, as candidates may well have already decided upon a subject and not be flexible on location.

The location and subjects questions are shown to users in the initial flow, before they see the results, whereas the other filtering options are only seen once users arrive at the results page.

Removing the location and subjects filters means that all the filters work in the same way. It also give more prominence to the other filters, including the new visa and degree requirement ones.

## New location and course subject summary

After removing the location and subject filters, we still needed to:

* show users which location and subjects are currently selected
* allow users to change location or subjects

To do this, we have replaced the ‘Teacher training courses‘ text, which appeared before the ‘31 courses found‘ h1 in dark grey text, with a line summarising the current location and subjects.

![Screenshot showing new interface with location and subjects filters removed](results-after.png "New location and subject summary with Change link")

A ‘Change’ link at the end of the line allows users to change either location or subjects by returning to the homepage where they can re-answer both questions, with their current answers pre-selected.

## User research

We tested the new interface with users, and found no issues. One user used the Change link unprompted. When asked to change the subject, users either used the Change link, or used the back button, which also works fine.

User research also validated the assumption that when searching for courses on Find, most users had a fairly fixed idea of the subject they wanted to teach, and often the location too.

One issue we found was that the ‘New search’ link, which appeared right-aligned opposite ‘Sorted by distance’ on desktop but was more prominent on mobile, was now redundant as it does the same as the ‘Change’ link, and one user clicked it seemingly by accident. We have removed this link.

