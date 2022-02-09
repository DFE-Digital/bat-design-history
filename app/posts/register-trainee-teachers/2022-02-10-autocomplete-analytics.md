---
title: Using analytics to understand where our autocompletes could be improved
description: An investigation in to where users struggle with our autocompletes
date: 2022-02-10
related:
  items:
  - text: Investigating free text responses from Apply
    href: /register-trainee-teachers/investigating-free-text-responses-from-apply/
  - text: Autocomplete analytics dashboard (Register team members only)
    href: https://datastudio.google.com/s/qW6s8xj8O-I
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "../../../node_modules/govuk-frontend/govuk/components/table/macro.njk" import govukTable with context %}

We’ve added custom analytics to our autocompletes to better understand how they’re used.

In usability testing we only see a few searches and as we often test with dummy data, we do not necessarily see the different ways people search in reality.

We wanted to better understand where our autocompletes were not meeting our users’ needs. This could help us understand if we need new options, synonyms, or indeed if the autocompletes are the right interface to use.

## Recording when users do not find what they’re looking for

We want to understand what is happening when users do not find what they’re looking for in the autocomplete suggestions.. When a user changes a mind, we record what they typed and what they ended up picking.

We’ve only added the analytics to fields that are collecting non-sensitive data:

* lead and employing schools
* degree subjects
* degree institutions
* course subjects

## Event triggers

### When a user presses backspace

When a user presses backspace we take that as a signal that they’re changing their search. There’s a good chance this is because they’ve made a typo, but they may also have searched for something, found no results, and are now trying a new search.

### When a user cancels or presses escape

If a user escapes, there’s a good chance this is because the results they were getting were not matching their expectations.

## Included in the event

Our event includes:

* the failed searches the user made
* what the user selected in the autocomplete (if they picked something)
* date and time
* the field name (for example ‘degree subject’)
* time taken on the field
* URL for the page

## Adding the analytics to our service

The analytics  need a small amount of javascript code to be added to the web page for the autocompletes. This collects the data about the autocomplete activity and fires an event. Google Tag Manager (GTM) is configured to respond to the event (trigger) and then pass (tag) the data to Google Analytics.

The key stages in set-up were:

* pass autocomplete data to the browser data layer (development work)
* add a GTM generated code snippet to the web page (development work)
* configure GTM to respond to the autocomplete page event
* configure GTM to capture autocomplete data in custom variables
* create a tag in GTM to pass autocomplete data to Google Analytics
* create custom definitions in Google Analytics to hold the autocomplete variables
* create a report in Google DataStudio, using Google Analytics as the data source, to report on the autocomplete activity.

The code used for these analytics:

* [event tracking code](https://github.com/DFE-Digital/register-trainee-teachers/blob/main/app/components/form_components/tracker.js)
* [autocomplete setup code that calls the event tracking](https://github.com/DFE-Digital/register-trainee-teachers/blob/main/app/components/form_components/autocomplete/script.js)
* [tests](https://github.com/DFE-Digital/register-trainee-teachers/blob/main/app/webpacker/scripts/tracker.spec.js)

The results are then analysed in Data Studio, using Google Analytics as the data source.

## A failed search is not necessarily bad

Failed searches are not necessarily bad. Autocompletes are dynamic interfaces and we expect people to search, review their results, and adjust their search. We’ll also pick up a lot of typos, which are also fine.

## Autocomplete event report

![A screenshot from Google Data studio showing a table of autocomplete events as a table, one row per event. Each row shows the name of the field, the failed search term, the successful search term, and what was ultimately picked. An example table of results is included later in this post.](1-datastudio-screenshot.png)

### Sample of recent searches

{{ govukTable({
  caption: "Some example searches from our autocomplete analytics",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: false,
  head: [
    {
      text: "Failed search"
    },
    {
      text: "Successful search"
    },
    {
      text: "Match"
    },
    {
      text: "Identified issue"
    }
  ],
  rows: [
    [
      {
        text: "134798"
      },
      {
        text: "(not set)"
      },
      {
        text: "(not set)"
      },
      {
        text: "Missing entry?"
      }
    ],
    [
      {
        text: "jew"
      },
      {
        text: "silver"
      },
      {
        text: "Silversmithing and Goldsmithing"
      },
      {
        text: "Missing entry or synonym"
      }
    ],
    [
      {
        text: "teachi,learn,mentor"
      },
      {
        text: "educa"
      },
      {
        text: "Education Studies"
      },
      {
        text: "Synonym"
      }
    ],
    [
      {
        text: "birmimgh,uce,centreal ,central en,birim"
      },
      {
        text: "birmin"
      },
      {
        text: "The University of Birmingham"
      },
      {
        text: "Typo"
      }
    ],
    [
      {
        text: "PE"
      },
      {
        text: "Phy"
      },
      {
        text: "Physical education"
      },
      {
        text: "Abbreviation"
      }
    ],
    [
      {
        text: "uk ope"
      },
      {
        text: "Open"
      },
      {
        text: "The Open University"
      },
      {
        text: "Synonym"
      }
    ],
    [
      {
        text: "bs"
      },
      {
        text: "bus"
      },
      {
        text: "Business studies"
      },
      {
        text: "Abbreviation"
      }
    ]
  ]
}) }}

## What we’ve found and how we can improve our autocompletes

This data can not be easily quantified – it needs manual analysis to pick out common themes and issues. But there are place where we can see ways to improve the autocomplete for our users

### Typos

A significant number of ‘failed’ searches are typos. These are to be expected and do not necessarily indicate a problem with the autocomplete,  especially where the user clearly self-corrected and found what they were looking for. However if we see some repeatedly we could consider adding those as synonyms.

### Synonyms

In many cases the word the user tries is not in the list, but there is a word that means the same thing. A good example from the table above is a user searching for `teachi`, `learn`, and `mentor` – for which the user ultimately picked `Education studies`. We could consider adding `Teaching` as a synonym for `Education studies`.

### Abbreviations

We can see some users search by abbreviation. PE (physical education) is common, as is BS (Business studies). We can consider adding these as synonyms.

### Missing options

Some searches seem like things that it would be reasonable to expect to be in the list. A good example from the table above is `jew` - for which we assume they were searching for `jewellery`. Ultimately the user picked `Silversmithing and Goldsmithing`, which is similar, but perhaps not quite the same. We’ll need analysis to understand the implications of adding new items.

### Incorrect searches

For some searches, the user looks to be confused about what the field is asking. For instance the field asks for a degree subject, but they’ve typed in a university name. This is likely to happen occasionally, but if we see it often it might indicate a problem with the form.

### Using the definite article

Some users search with the definite article `The`, for example `The University of Birmingham`. In our data, not all items have the definite article, when a user searches with it, the search fails. We’ve already addressed this by updating our autocompletes to support searching without ‘stop words’. Words like ‘a’, ‘an’, ‘and’, ‘of’, ‘in’, and ‘the’.

### Searching by country name rather than nationality

Our nationality picker has a list of nationalities rather than countries. . We can see that some users are searching by the country name for example ‘France’ instead of the nationality of ‘French’. We can look to add these as synonyms.

### Unknown issue

A fair number of ‘failed searches’ result in no answer being picked. If the text captured is really short, we cannot easily tell what the issue was (or if there was an issue). We can see that  one user searched for a degree subject `arts` and then escaped out of the field. Were they searching for an arts subject? Or perhaps were typing in `Bachelor of arts` and realised they were in the wrong field? We cannot know.
