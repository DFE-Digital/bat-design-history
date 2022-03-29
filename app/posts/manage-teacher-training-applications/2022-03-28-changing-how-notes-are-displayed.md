---
title: Changing how notes are displayed
description: We changed the way notes are displayed since letting users change or delete them.
date: 2022-03-28
screenshots:
  items:
    - text: Notes
      src: notes.png
---

We recently gave users a way to [change and delete notes](/manage-teacher-training-applications/letting-users-change-and-delete-notes/). We’ve made further changes and clarified how notes should work.

## What we changed

We moved the name of the creator to above the note so that it’s immediately visible even if the note is long.

We added ‘(you)’ next to the name of the note’s creator if it was created by the signed in user. This is to match how we indicate [applications which are assigned to the signed in user](https://bat-design-history.netlify.app/manage-teacher-training-applications/assigning-applications-to-users/).

We moved the date the note was created next to the name of the creator so that related information is grouped.

We added the date the note was last updated so that users can see which notes have been updated.

We decided to order the notes by most recently created, not by most recently updated because:

- we think it’s better for notes to stay in a fixed order, for example so that notes about an interview appear above notes about deciding whether to offer the interview
- users can create a new note if it’s important that a comment appears at the top of the page
- this is a convention in other online services

We removed the pipe character (a vertical line, |) between the change and delete links because it’s unnecessary. We do not use a pipe anywhere else.

We put ‘Candidates cannot view notes’ in inset text because we wanted to distinguish it from notes.

We decided that only the user who created a note can change or delete it. If the user who created a note has been deleted then the note and the creator should remain visible.

## Further considerations

We could allow users to update or delete notes created by other users.
