---
title: Removing the individual note pages
description: We removed the individual note pages because they repeat information available in the notes list.
date: 2022-03-24
screenshots:
  items:
    - text: Notes page
      src: notes-page.png
tags:
  - notes
---

At the moment an individual page is created for every note added to an application. We included these pages so that we could link to notes from the timeline and activity log.

We decided to remove the individual pages because they only show the:

- content of the note
- date and time
- user who added the note

All this information is also available in the list of notes for an application.

## What we changed

The link on the timeline and activity log now takes the user to the notes list for the application. It uses an in-page anchor to make sure the user can see the specific note.

## Further considerations

It can be hard to tell which note was clicked when there are a lot of notes.

This is because currently the content of notes is not shown in the timeline or activity log, so they all look the same. Even with an anchor, the browser will not always be able to scroll down to just above the note that was clicked.

We want to consider whether we should highlight the note that was clicked on. If so then we need to decide how best to do this.
