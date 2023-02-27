---
title: Improving how providers add schools
description: We added a way for providers to find schools to add to their account using Get Information about Schools (GIAS) data
date: 2023-02-20
tags:
  - locations
related:
  items:
    - text: Adding multiple locations to an organisation in Support for Publish
      href: /support-for-publish/adding-multiple-locations-to-an-organisation/
    - text: Select a school pattern
      href: https://design.education.gov.uk/design-system/patterns/select-a-school
screenshots:
  items:
    - text: Schools list
      src: schools--list.png
    - text: Adding a school
      src: schools--find.png
    - text: Adding a school - autocomplete
      src: schools--find-autocomplete.png
    - text: Adding a school - error
      src: schools--find-error.png
    - text: Editing school details
      src: schools--edit.png
    - text: Check your answers
      src: schools--check-your-answers.png
    - text: School successfully added
      src: schools--success.png
    - text: Adding a school manually
      src: schools--form.png
    - text: Adding a school manually - error
      src: schools--form-error.png
    - text: School details
      src: schools--details.png
    - text: Remove school
      src: schools--remove.png
    - text: School removed
      src: schools--removed.png
    - text: School cannot be removed
      src: schools--cannot-remove.png
---

Some providers find it difficult to enter large numbers of schools in Publish teacher training courses (Publish) and choose not to enter more than one school called ‘Main site’.

This means it is harder for a candidate to find a provider’s course on Find postgraduate teacher training (Find) when searching by location (the most popular search type).

Candidates also don’t know where their school placements will likely be as the provider hasn’t listed any schools.

To make it easier for providers to add schools in Publish, we added a way for providers to find and add them using [Get Information about Schools (GIAS)](https://www.get-information-schools.service.gov.uk/) data.

## What we changed

We have:

- changed ‘Locations’ to ‘Schools’
- added a school look-up to the ‘Add school’ flow

### Changing ‘Locations’ to ‘Schools’

We changed ‘Locations’ to ‘Schools’ in Publish because the data is used in the ‘School placements’ section in Find postgraduate teacher training (Find).

### School look-up

We added a school look-up to the ‘Add school’ flow, which uses GIAS data, to make it easier for providers to find and enter information about the schools they partner with.

## How it works

![Adding a school](adding-schools-flow.png "Adding a school flow")

Selecting ‘Add school’ on the schools list page takes the user to a form where they can search for a school, university or college. They do this by entering the school name, unique reference number (URN) or postcode.

We use data provided by GIAS and display it in an autocomplete.

For each school, university or college in the list, we display the name, town and postcode. This allows users to correctly choose from similarly named locations.

If the user submits the form before selecting an item from the autocomplete, we display an error message.

If the user cannot find the school, university or college in the list, they can skip the form and enter the details manually.

Selecting a location name and clicking continue takes the user to an edit form where they can correct any information.

If any required information is missing, we display an error message.

The final step is to check your answers before adding the school.

Users cannot add the same school, university or college twice. If they try to do this, we display an error message on the check your answers page when selecting ‘Add school’.

## Further considerations

We considered some changes which were not implemented. We could consider them for a future iteration.

### Adding schools in bulk

We recently did some work to allow support users to [add multiple locations to an organisation](/support-for-publish/adding-multiple-locations-to-an-organisation/). This work introduced a way for support users to copy and paste information from a spreadsheet or CSV file into the service.

While the user journey is more complex, we could consider allowing providers to add their school placement locations in bulk.

### Distinguishing between types of location

The ‘Schools’ section focuses on locations used later in the ‘School placements’ section of the course details. However, there might be a need to collect different types of locations, such as where a candidate might do the academic part of their studies. If this were the case, we would need to distinguish between types of locations.

GIAS data has several different categories that could be used, such as:

- group - for example, universities, colleges, academies and local authority maintained schools
- type - a more granular group
- phase - for example, nursery, primary and secondary

However, we might need to consider using our own categories.

### Making school data from GIAS read-only

In Publish, we copy data from GIAS into the school listing. This allows users to amend the data if necessary. However, this also means the data could go out of sync with GIAS. To prevent this, we could make the school details read-only, allowing us to periodically synchronise the data.

*[CSV]: Comma separated values
*[GIAS]: Get Information about Schools
*[URN]: Unique reference number
