---
title: Changing how notes are displayed
description: We changed the way notes are displayed since letting users change or delete them.
date: 2022-03-28
screenshots:
  items:
    - text: Notes
      src: notes.png
---

We recently gave users a way to [change and delete notes](/manage-teacher-training-applications/letting-users-change-and-delete-notes/).

Based on this we’ve made further changes and clarified how notes should work.

## What we changed

We moved the name of the creator to above the note which means it can be read quickly even if the note is long.

We added ‘(you)’ next to the name of the note’s creator if it matches the signed in user. This is to match how we indicate [applications which are assigned to the signed in user](https://bat-design-history.netlify.app/manage-teacher-training-applications/assigning-applications-to-users/).

We moved the date the note was created next to the name of the creator to group related information.

We added the date the note was last updated to distinguish between notes that have and have not been updated.

We decided to order the notes by most recently created, not by most recently updated because:

- we think it’s better for notes to stay in a fixed order, for example so that notes about an interview appear above pre-interview notes
- users can create a new note if it’s important that a comment appears at the top of the page
- this is a convention in other online services

We removed the pipe between the change and delete links because it’s unnecessary and we do not use a pipe anywhere else.

We decided that only the user who created the note can change or delete it.

We put ‘The candidate cannot view notes’ in inset text because we wanted to distinguish it from a note which otherwise looked similar.

If the user who created a note has been deleted the note and the creator should remain visible.

## Further considerations

We could allow users to update or delete notes created by other users.
