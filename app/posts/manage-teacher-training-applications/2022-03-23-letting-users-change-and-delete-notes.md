---
title: Letting users change and delete notes
description: We added options for users to change and delete notes rather than just keep creating new ones.
date: 2022-03-23
screenshots:
  items:
    - text: Notes page with change and delete links
      src: notes--change-delete-links.png
    - text: Update note page
      src: update-note.png
    - text: Notes page with success message after a note has been updated
      src: notes--note-updated.png
    - text: Timeline showing that a note has been updated
      src: timeline--note-updated.png
    - text: Delete note page
      src: delete-note.png
    - text: Notes page with success message after note deleted
      src: notes--note-deleted.png
    - text: Timeline showing that a note has been deleted
      src: timeline--note-deleted.png
---

We know that some users want to:

- fix errors in notes
- remove notes which are no longer relevant or contain errors
- update notes rather than creating new ones - for example, they want to add a note when they contact a candidate and update it when the candidate replies

## What we changed

We changed the notes page so that there are links letting users change and delete notes.

## How it works

If the user clicks to change a note then they’re taken to a page with a text field containing the note’s content.

The user can edit the note then click the ‘Update note’ button. They‘re taken back to the notes page, which has a success message saying ‘Note updated’.

If the user clicks to delete a note then they’re taken to a page which asks them to confirm that they want to delete it. The page gives the note text.

The user can click the red ‘Delete note’ button to delete the note. They’re taken back to the notes page, which has a success message saying ‘Note deleted’.

The change and delete notes pages also have cancel links and back links. These take the user back to the notes page for the application.

An event is added to the timeline and activity log when a note is changed or deleted.
