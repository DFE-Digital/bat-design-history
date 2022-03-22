---
title: Showing notes in the application list
description: We added the latest note for each application to the application list.
date: 2022-03-15
screenshots:
  items:
    - text: Application list filtered by ‘has note’
      src: application-list--filter-has-notes.png
    - text: Application list with search by content of the latest note
      src: application-list--search-note-content.png
tags:
  - MN004
  - MN021
---

Providers use notes in their spreadsheets to help them prioritise work and see what needs to be done. They can look at notes for different applications at the same time.

Notes are rarely used within the service. Research suggests that notes will be more useful if we show them in the application list.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We now:

- show the latest note in the application list
- allow users to search the content of the latest note
- allow users to filter by whether or not an application has a note

### Showing the latest note in the application list

We added the latest note to each application in the list. This allows users to see what needs doing without having to click into each application.

If an application has more than one note then we add, for example, “(1 more note)”. This links to the application’s notes page.

### Searching the content of the latest note

We changed the search function so that users can search the content of the latest note.

### Filtering by whether or not an application has a note

We added a new filter category so that users can filter by applications that do or do not have notes.

This should be helpful for providers that use notes, to help determine whether a new application has been looked at yet.

## Further considerations

We want to consider whether we should:

- let users add or update a note from the application list
- show more than just the latest note in the application list
- collapse long notes

We also want to consider changing the search to:

- default to searching by individual words rather than phrases - at the moment, searching for ‘interview request’ would not return a note which says ‘request for interview’
- allow the use of speech marks to search for phrases
- return results which include some or all of the words in a search which does not use speech marks, with most relevant results at the top
