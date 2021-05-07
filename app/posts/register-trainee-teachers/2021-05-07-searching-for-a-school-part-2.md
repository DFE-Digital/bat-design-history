---
title: Searching for a school (part 2)
description: Designs for our non-JavaScript school search
date: 2021-05-07
related:
  items:
  - text: Searching for a school
    href: /register-trainee-teachers/searching-for-a-school/
  - text: Adding School direct routes
    href: /register-trainee-teachers/school-direct-routes/
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "figure/macro.njk" import appFigure with context %}


In [part 1](../searching-for-a-school) we explored using an autocomplete to help users search for schools. The prototype worked well for quickly picking a school - but it requires JavaScript to be running successfully for it to be used. Not everyone has JavaScript and it doesn’t always run successfully. We need a fallback / no-JavaScript version that we can progressively enhance from.

In part 1  we also saw that if the results returned too slowly a user might type a query and immediately click continue before we had a chance to show them results. When this happens we can fall back to a no-JavaScript page, but we hope it will be fast enough to avoid this.


## Searching without JavaScript

The start point is the same as the JavaScript journey - a text input enabling them to type a search query.

{{ appFigure({
  image: {
    file: "1. search-input.png",
    alt: "A search input asking the user to search by URN, school name or postcode."
  }
}) }}

If the user has JavaScript, they can now see some results in an autocomplete. If not, they can click continue and get a selected list of results to choose from.

{{ appFigure({
  image: {
    file: "2. search-results.png",
    alt: "Results for the search query ‘Abbey wood’ are shown, with a radio button next to each."
  }
}) }}

If the school the user is looking for is there, they can pick it. If not, they can search again.

From our testing so far, we think that the school users want will usually be in this list as long as they type in a reasonably complete school name (or URN or postcode).

## Page variations

{{ appFigure({
  image: {
    file: "3. no-results.png",
    alt: "Content shown when there are no results, prompting the user to change their search."
  }
}) }}

{{ appFigure({
  image: {
    file: "3. no-results.png",
    alt: "Content shown when there are no results, prompting the user to change their search."
  }
}) }}

The design is the same for single results - but we plan to work on this next.

{{ appFigure({
  image: {
    file: "4. single-result.png",
    alt: "Content shown when there are no results, prompting the user to change their search."
  }
}) }}

## Truncating results

We’re starting off by only returning the first 15 results. If there are more matches, we’ll show a message that the results are truncated, and suggest users refine their search. We’ll need to monitor how often users need to search again because the school they wanted wasn’t in the list.

{{ appFigure({
  image: {
    file: "5. truncated-results.png",
    alt: "A message is shown to the user when there are more results than can be displayed."
  }
}) }}

From our internal testing, 15 seems a reasonable balance between not showing too many on a page, but having a high likelihood that the school you’re looking for should be shown. The more specific the search term, which is what we think providers are likely to use, the less likely you’ll encounter the truncation.

{# {{ appScreenshots({
  items: [{
      text: "1. search input",
      img: { src: "1. search-input.png" }
    }, {
      text: "2. search results",
      img: { src: "2. search-results.png" }
    }, {
      text: "3. no results",
      img: { src: "3. no-results.png" }
    }, {
      text: "4. single result",
      img: { src: "4. single-result.png" }
    }, {
      text: "5. truncated results",
      img: { src: "5. truncated-results.png" }
    }]
}) }} #}
