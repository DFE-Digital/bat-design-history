---
title: Updating button labels and success messages
description: We updated the content on some buttons and success messages to match the interaction.
date: 2022-04-28
screenshots:
  items:
    - text: Editing the age range on a course
      src: edit-courses--age-range.png
    - text: Success message when age range is changed
      src: course-details--success-message.png
---

Some wording on the buttons and success messages in the service was inconsistent and didn’t match the interaction.

The service includes a status called ‘Published *with unpublished changes’, which is triggered when a user makes a change to:

- any of the text boxes in the ‘Description’ section
- the ‘Course length and fees’ section

When a change is made to a course that has the status ‘Published *with unpublished changes’, the button label is ‘Save’, and the success message is ‘Your changes have been saved’, matching the interaction. The changes aren't visible on the Find teacher training courses (Find) service until the user has republished the course.

We used the same wording for the ‘Requirements and eligibility’ and the ‘Basic details’ sections, but the changes are published to Find immediately. The user does not need to republish the course. This is inconsistent.

We wanted to make the interactions clearer to users. We updated the content to match the interactions across the service. At the same time, we made the success messages more descriptive.

## What we changed

We changed the:

- button text to ‘Save and publish’ for all interactions in the ‘Requirements and eligibility’ section and the ‘Basic details’ section
- success messages for each interaction to describe what had changed, for example, ‘Changes to age range published’

We removed the inset text “Changes will appear on Find postgraduate teacher training within 15 minutes” from the ‘About your organisation’ section.

## Future considerations

We want to simplify the statuses of courses and have been looking at ways to do so. We want to remove ‘Published *with unpublished changes’ as a status type as part of this work. This change will affect the wording on the buttons and success messages that trigger this status.
