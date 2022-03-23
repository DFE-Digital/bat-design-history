---
title: Removing the individual notes page
description: We removed the individual notes page as it’s redundant.
date: 2022-03-23
screenshots:
  items:
    - text: Notes page
      src: notes-page.png
---

At the moment, in addition to the list of notes found within an application, there‘s an individual notes page.

We added the individual notes page so that we could link to the note from the timeline or activity log.

But we have decided to remove it because it’s redundant.

## What we changed

We removed the individual notes page because it only shows the message, date and time and the user who added the note. All of which is available to see on the notes list.

The link on the timeline and activity log now takes the user to the notes list for the application and uses an in-page anchor to bring it into view.

## Further considerations

It can be difficult to realise which note is the one that was clicked from the timeline or activity log when there are lots of notes.

This is because they all look the same and the browser will not always scroll down to just above the note that was clicked.

We want to consider whether we should highlight the note that was clicked on and if so how best to do so.
