---
title: Who can make changes to offers
description: Who can make (changes to) offers and what users at the organisations can see before and after these changes happen
date: 2020-09-03
---

{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}
{% from "figure/macro.njk" import appFigure with context %}

This post explains who can make (changes to) offers and what users at the organisations can see before and after these changes happen.

## How it works

Users at organisations can see applications (and applications with offers) to courses they run or accredit, unless those applications have received offers to courses they do not run or accredit.

Only users who belong to multiple organisations can change the offer to a course at another organisation. To do this, they must have the ‘make decisions’ permission at both organisations.

When the user opts to change the training provider, they’ll only see organisations in which they have the ‘make decisions’ permission for.

The user who changes the organisation will still be able to see it after the change.

Users who belong to the new organisation will now be able to see it.

Users who belong to the old organisation will no longer be able to see it unless they also belong to the new organisation.

### Examples

{% set example1 %}
  Given I belong to provider A and provider B
  And an application was made to provider A
  When I change the offer to a course at provider B
  Then I can still see the application
  And users who only belong to provider A can no longer see the application in their list
  And users who belong to provider B can see the application in their list
{% endset %}


{{ govukInsetText({
  html: example1 | markdown
}) }}

{% set example2 %}
  Given I belong to organisation A
  And the application was made to a course at organisation A
  And the application was made to a course accredited by organisation B
  And I change the offer to a course accredited by organisation C
  Then I can still see the application
  And users who belong to organisation B can no longer see the application in their list
  And users who belong to organisation C can now see the application in their list
{% endset %}

{{ govukInsetText({
  html: example2 | markdown
}) }}

## How the application list differs when an offer has been made

When an application is first submitted, the course the candidate applied to will be shown on each row.

When an offer has been made, the offered course will appear instead (if different).

## Letting users know what happened to an application that’s been transferred to a different provider

When details of the offer change, it should appear as an entry in the activity log.

## Viewing an application that’s been transferred to a different provider

Even though users at the previous organisation can no longer see the application in their application list, they are likely to have links to these applications via old emails, activity log entries and bookmarks.

When they click on one of those links, they should still be able to see the application but in some sort of ‘read only’ state. Something like this:

* A banner appears at the top of the page explaining that the application no longer belongs to them and why
* There will be no buttons or links that allow the user to change the application or offer in anyway
* The status tag is removed _or_ it's changed to a new status
* The last event on the timeline will be ‘Changed to provider X’

The specific designs will be worked out in future sprints.
