---
title: Managing 'Study sites' on behalf of providers
description: We added a way for support users to add ‘Study sites’ to providers using Get information about schools (GIAS) data
date: 2023-05-26
tags:
  - locations
  - study sites
related:
  items:
    - text: Adding ‘Study sites’
      href: /publish-teacher-training-courses/adding-study-sites/
    - text: Adding a study site when JavaScript is unavailable
      href: /publish-teacher-training-courses/adding-a-study-site-when-javascript-is-unavailable/
    - text: Including ‘Study sites’ in the course details
      href: /publish-teacher-training-courses/including-study-sites-in-the-course-details/
screenshots:
  items:
    - text: Study sites list
      src: study-sites--list.png
    - text: Study sites list - empty
      src: study-sites--list-empty.png
    - text: Adding a study site
      src: study-sites--find.png
    - text: Adding a study site - autocomplete
      src: study-sites--find-autocomplete.png
    - text: Adding a study site - error
      src: study-sites--find-error.png
    - text: Editing study site details
      src: study-sites--edit.png
    - text: Check your answers
      src: study-sites--check-your-answers.png
    - text: Study site successfully added
      src: study-sites--success.png
    - text: Adding a study site manually
      src: study-sites--form.png
    - text: Adding a study site manually - error
      src: study-sites--form-error.png
    - text: Study site details
      src: study-sites--details.png
    - text: Remove study site
      src: study-sites--remove.png
    - text: Study site removed
      src: study-sites--removed.png
    - text: Study site cannot be removed
      src: study-sites--cannot-remove.png
---

In previous work, we added a way for Publish teacher training (Publish) users to [add ‘Study sites’ to their organisation](/publish-teacher-training-courses/adding-study-sites/).

There are occasions when it is quicker and more convenient for support users to view and make changes to study sites on behalf of the provider.

## What we changed

We added a way for support users to manage ‘Study sites’ on behalf of training providers.

## How it works

### Study site list

On the study site list page, we show a:

- button to ‘Add study site’
- list of study sites the provider has added

The list of study sites includes the:

- study site name
- unique reference number (URN)

If the user has not entered a URN for a study site, we show ‘Not entered’ in the URN column.

### Adding a study site

![Adding a study site flow](adding-study-sites-flow.png "Adding a study site flow")

Adding a study site has 3 steps:

1. Find a study site by name, URN or postcode
2. Review details about the study site
3. Check your answers

#### Find a study site by name, URN or postcode

Selecting ‘Add study site’ on the study sites list page takes the user to a form where they can search for a school, university or college. They do this by entering the study site name, unique reference number (URN) or postcode.

We use [Get information about schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data and display it in an autocomplete.

We display the name, town and postcode for each location in the list. This allows users to choose from similarly named locations correctly.

We display an error message if the user submits the form before selecting an item from the autocomplete.

If the user cannot find the study site in the list, they can skip the form and enter the details manually.

#### Review details about the study site

Selecting a location name from the autocomplete and continuing takes the user to an edit form where they can review:

- study site name
- unique reference number (URN)
- address

If any required information is missing, we display an error message.

#### Check your answers

The final step is to check your answers before adding the study site.

Users can only add the same study site once. If they try to add the location again, we display an error message when submitting the ‘Check your answers’ page.

### Editing a study site

Selecting the study site name from the study sites list takes the user to the study site details page. From this page, they can:

- change the study site details - including name, URN and address
- remove the study site

Selecting a change link next to the study site’s name, URN, or address takes the user to an edit form where they can change:

- study site name
- unique reference number (URN)
- address

If any required information is missing, we display an error message.

### Removing a study site

When a user selects the remove link below the study site’s details, they’re taken to a page to confirm the removal of the study site.

If the study site has not been attached to a course in Publish, the user can remove them.

If the study site is attached to a course, the user cannot remove them. They must detach the study site from all courses before removing them. We show a page explaining why the user cannot remove the study site.

### Data validation rules

#### Study site name

‘Study site name’ is required. If the user does not enter a name, we show the error message:

> Enter a study site name

#### Address

Address line 1, town or city, and postcode are required address fields.

If the user does not enter an address line 1, we show the error message:

> Enter address line 1

If the user does not enter a town or city, we show the error message:

> Enter a town or city

If the user does not enter a postcode, we show the error message:

> Enter a postcode

If the user does not enter a valid postcode format, we show the error message:

> Enter a real postcode
