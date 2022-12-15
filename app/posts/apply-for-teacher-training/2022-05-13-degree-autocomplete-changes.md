---
title: Degree autocomplete changes
description: Why we made changes to the autocomplete
date: 2022-05-13
tags:
  - qualifications
---

![TODO](degree-autocomplete-changes.png "Old and new autocompletes")

We made some changes to the way that the autocomplete works within the degree information section.

We use the autocomplete for three fields:

* degree type (BA, BSc, etc)
* university name
* degree subject

These fields allow users to either pick from one of the options after typing in 2 or more characters, or enter their own answer.

## The issue

The options provided were originally taken from the [HESA ITT data collection guidelines](https://www.hesa.ac.uk/collection/c21053/index).

From looking at the data, we noted that a high proportion of candidates were not selecting options from the autocomplete.

This led to messy data which made analysis harder, for example by having lots of different spellings and abbreviations for the same universities or subjects.

We were also concerned that candidates may have not always realised that they could type in a subject not in the list, and may have picked the closest match instead. This may be frustrating, or cause minor issues later in the process when they have to produce evidence of their degree qualification.

## What we changed

We changed the design of the autocomplete so that the:

* options have a ’Suggestions’ header
* suggestions appear slightly below the text input, so that it looks less like a dropdown element
* hint text explains how to use the component
* no message is shown if there are no matching suggestions, instead it just appears as a regular text input

In addition we added support for synonyms, so that we could add common alternative spellings and abbreviations for the options.

This means that ‘maths’ now suggests ’Mathematics’ and ‘ucl’ now suggests ‘University College London’.

We re-used [the implementation from Register](/register-trainee-teachers/autocomplete-improvements/), which also made some other improvements to the filtering, such as ignoring common words like 'the' and 'of'.

## Research

We used unmoderated usability testing, where participants recorded their screen whilst entering their own degree information.

In the testing, we saw that participants were both able to select from the suggestions, and to enter their own answer, with no participants selecting a ‘nearest fit’ answer.

## Further work

As we gather data on how these new autocompletes are being used, we can periodically review where candidates have entered their own answer, to see if their are some common subjects, universities or degree types that we are missing, or missing synonyms for.
