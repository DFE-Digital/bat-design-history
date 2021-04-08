---
title: Searching for a school
description: Exploring using an autocomplete to pick schools
date: 2021-04-08
related:
  items:
  - text: Publish’s schools autocomplete
    href: publish-teacher-training-courses/schools-autocomplete/
  - text: Adding School direct routes
    href: register-trainee-teachers/adding-school-direct/
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "figure/macro.njk" import appFigure with context %}

Several fields in Register require users to search for a school - placements, lead school and employing school.

[Our first placements iteration](/register-trainee-teachers/collecting-placement-details/) did not  too deeply at this - we started with an input, but assumed we’d come back and add some kind of lookup.

The [Get information about schools service](https://www.get-information-schools.service.gov.uk/) has a school lookup with an autocomplete - which demonstrated that it was possible to reasonably search across 30k schools.

In this iteration, we’re exploring using an autocomplete for the lookup. It looks like this:

{{ appFigure({
  image: {
    file: "schools-autocomplete-name.gif",
    alt: "A user types in a school name and is shown a set of results that narrows as they type more characters."
  }
}) }}

You can search by school name, URN, or postcode.

There are lots of schools with similar names - which is why we’ve included the URN, town, and postcode. Searching for a URN is something we’d like to encourage as you’re more likely to get to an exact result. If the name returned is the one you know, you’ve definitely picked the right one.

Searching for a URN looks similar:
{{ appFigure({
  image: {
    file: "schools-autocomplete-urn.gif",
    alt: "A user types in a school URN and is shown a set of results that narrows as they type more characters."
  }
}) }}

There are some pros and cons of using an autocomplete.

It will require JavaScript and an Ajax call to look up the results - we can’t progressively enhance a select as there are close to 30k schools to search from! This means we’ll need a no-js journey - likely to be a search box and a results page.

A reason to do this over and above a search results page is how quickly you can use this to narrow down your results. The feedback is immediate - particularly for schools you know and are familiar with.

This design assumes that all schools that might be needed will be listed - because all schools will be listed in the Get information about schools service. There are likely times when this will not be the case, such as early years settings. For those cases, we'll need the ability to add free text rather than picking from one of these options.

## Can we guess what schools may be needed?

Providers will tend to work with the same schools again and again each year. It’s likely the same 5 schools will be selected again and again. We’ll definitely need a generic lookup (above) but for the _common_ case it’s likely we’ll be able to offer a list of recently used schools to pick from. It will take some time to work out how to compile such a list and think how it might get updated.
