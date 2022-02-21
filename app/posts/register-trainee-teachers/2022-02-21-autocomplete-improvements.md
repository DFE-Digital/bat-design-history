---
title: Improvements to our autocompletes
description: To add
date: 2022-02-21
related:
  items:
  - text: Using analytics to understand where our autocompletes could be improved
    href: /register-trainee-teachers/autocomplete-analytics/
  - text: Investigating free text responses from Apply
    href: /register-trainee-teachers/investigating-free-text-responses-from-apply/
  - text: Autocomplete analytics dashboard (Register team members only)
    href: https://datastudio.google.com/s/qW6s8xj8O-I
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "../../../node_modules/govuk-frontend/govuk/components/table/macro.njk" import govukTable with context %}

Over the last year we’ve updated our autocompletes to improve how they work and address usability issues we’ve found. We’ve tried to make these improvements general purpose so that other teams can benefit from them.

For most projects you should be able to ‘drop-in’ our new code. You can add extra configuration with data attributes, or leave as is to get better results sorted in a more useful way.

## Problems we’re trying to overcome

### Filtering available items

The autocomplete takes your search query and looks for an exact match in the available entries. This excludes close matches or ones where there’s an extra word or punctuation in between.

For example, these searches will fail:

{{ govukTable({
  firstCellIsHeader: false,
  head: [
    {
      text: "Search term"
    },
    {
      text: "Should match but gets missed"
    }
  ],
  rows: [
    [
      {
        text: "Bachelor art"
      },
      {
        text: "Bachelor of art"
      }
    ],
    [
      {
        text: "dh law"
      },
      {
        text: "D.H. Lawrence Studies"
      }
    ],
    [
      {
        text: "Bedfordshire university"
      },
      {
        text: "University of Bedfordshire"
      }
    ],
    [
      {
        text: "The University of Bedfordshire"
      },
      {
        text: "University of Bedfordshire"
      }
    ]
  ]
}) }}


For each of these examples, the search term gives us enough information to know what the user meant, but the filtering algorithm is too strict.

### Sorting filtered results

The autocomplete does not sort results. It returns results ordered in the same order as the source data. If the source data was alphabetical, then the results will be too. This means that more likely matches may appear some way down the list.

Although alphabetical may seem natural, users tend to expect that autocompletes will return relevant results first. This is particularly important when there are lots of results - so that users do not need to scroll past low quality matches to get to the more likely ones. If what the user has typed exactly matches an option, it would be sensible for that option to be suggested first.

### Support for synonyms

The default sorting algorithm uses the list of items with no in-built support for synonyms. If we know users refer to the same thing by two different names, we should aim to support both of those.

These would benefit from having synonyms added:

{{ govukTable({
  firstCellIsHeader: false,
  head: [
    {
      text: "Search term"
    },
    {
      text: "Should match but gets missed"
    }
  ],
  rows: [
    [
      {
        text: "Maths"
      },
      {
        text: "Mathematics"
      }
    ],
    [
      {
        text: "Masters"
      },
      {
        text: "Master of…"
      }
    ]
  ]
}) }}



## Our revised algorithm

### Matching each word in the query

Matches on each word of the search query — all words are required to match, but the order doesn’t matter.

![Before: a search for ‘Bachelor art’ returns no results.](autocomplete-before-degree-type-bachelor-art.png "Autocomplete before")

![After: a search for ‘Bachelor art’ returns four results.](autocomplete-after-degree-type-bachelor-art.png "Autocomplete after")

### Prioritising closer matches

Results are sorted with closer matches at the top — an exact match will be first, followed by matches against the name and then matches against the synonym.

![Before: a search for ‘history’ returns many results, shown in alphabetical order. The list starts with ‘African history’, but does not include the more generic option ‘History’ as it is lower in the list.](autocomplete-before-degree-subject-history.png "Autocomplete before")

![Before: a search for ‘history’ returns many results. ‘History’ is the first result, followed by several beginning ‘History of…’.](autocomplete-after-degree-subject-history.png "Autocomplete after")


### Punctuation-less searching

Searches without punctuation so it doesn’t matter if a user types `master’s` or `masters` doesn’t matter.

![Before: a search for ‘dh law’ returns no results.](autocomplete-before-degree-subject-dh-law.png "Autocomplete before")

![After: a search for ‘dh law’ returns a result for ‘D.H. Lawrence Studies’](autocomplete-after-degree-subject-dh-law.png "Autocomplete after")

![Before: a search for ‘quran’ returns no results.](autocomplete-before-degree-subject-quran.png "Autocomplete before")

![after: a search for ‘quran’ returns returns a result for ‘The Qur’an And Islamic Texts’.](autocomplete-after-degree-subject-quran.png "Autocomplete after")

### Matching with synonyms

We’ve added built support for synonyms so related words can also be searched — `maths` and `mathematics` will both work. These can be added with data attributes.

![Before: a search for ‘masters’ returns no results.](autocomplete-before-degree-type-masters.png "Autocomplete before")

![After: a search for ‘masters’ returns multiple results beginning ‘Master of…’.](autocomplete-after-degree-type-masters.png "Autocomplete after")


### Boosting specific items

Individual items can be boosted if they’re common. A service could use these to tune the autocomplete so the most popular options are more likely to be sorted to the top. We’ve boosted the degree types `Bachelor of Arts` and `Bachelor of Science` as they’re by far the most common.

![Before: a search for ‘bs’ returns ‘Bachelor of Surgery’ as the first result, and ‘Bachelor of Science’ as the third result.](autocomplete-before-boost.png "Autocomplete before")

![After: a search for ‘bs’ returns ‘Bachelor of Science’ as the first result.](autocomplete-after-boost.png "Autocomplete after")

### Ignoring stop words

Queries including stop words (a, an, and, of, in, the) will work whether or not the user uses them, and regardless of if the matched item's name has a stop word.

![Before: a search for ‘the university of bedford’ returns no results.](autocomplete-before-stop-words.png "Autocomplete before")

![After: a search for ‘the university of bedford’ returns ‘University of Bedfordshire’.](autocomplete-after-stop-words.png "Autocomplete after")

### Appending more information

Individual items have the data attribute `data-append` to specify content to be shown at the end of the item. We use this to show the degree type abbreviation in bold.

![Before: a search for a type degree returns the full name of each degree type.](autocomplete-before-append.png "Autocomplete before")

![After: a search for a type of degree returns the full name and the abbreviation for each degree type.](autocomplete-after-append.png "Autocomplete after")

### Showing hints

Individual items can have a data attribute `data-hint` that provides more information to display visually. This is shown on a new line.

![Before: a search for ‘level’ returns two results, though the word is not visible in the matched names.](autocomplete-before-hints.png "Autocomplete before")

![After: a search for ‘level’ returns two results. Each result has a hint shown on the line below with more information about the result, including the word ‘level’.](autocomplete-after-hints.png "Autocomplete after")

—---

## Work for teams to do

Much of the improvements teams can expect to see depend on them optimising it by providing suitable synonyms and boosting likely results. We’ve learned a lot about what users are likely to type in to our autocompletes by watching users use them in user research, [analysing free text responses from Apply](/register-trainee-teachers/investigating-free-text-responses-from-apply/), and by [adding analytics to our autocompletes](/register-trainee-teachers/autocomplete-analytics/) to see where users are struggling.

## Find the code

The various bits of code for these improvements can be found:

* [Source code](https://github.com/DFE-Digital/register-trainee-teachers/tree/main/app/components/form_components/autocomplete)
* [Tests](https://github.com/DFE-Digital/register-trainee-teachers/tree/main/app/webpacker/scripts/autocomplete)
