---
title: Degree autocomplete changes
description: Why we made changes to the autocomplete
date: 2022-05-13
---

![TODO](degree-autocomplete-changes.png "Old and new autocompletes")

The section of our application where candidates enter their degree information had ‘autocomplete’ fields for degree type (BA, BSc, etc), university name and degree subject.

These fields allowed users to either pick from one of the options after typing in 2 or more characters, or enter their own answer.

The options provided were taken from the [HESA ITT data collection guidelines](https://www.hesa.ac.uk/collection/c21053/index).

From looking at the data, we noted that a high proportion of candidates were not selecting options from the autocomplete.

This led to messy data which made analysis harder, for example by having lots of different spellings and abbreviations for the same universities or subjects.

We were also concerned that for the subject field, candidate may have not always realised that they could type in a subject not in the list, and may have picked the closest match instead. This may be frustrating, or cause minor issues later in the process when they have to produce evidence of their degree qualification.

## What we changed

To make it clearer that candidates could either select an option or type their own answer, we changed the design of the autocomplete so that the:

* options have a ’Suggestions’ header
* suggestions appear slightly below the text input, so that it looks less like a dropdown element
* hint text explains how to use the component

In addition we added support for synonyms, so that we could add common alternative spellings and abbreviations for the options.

This means that ‘maths’ now suggests ’Mathematics’ and ‘ucl’ now suggests ‘University College London’.

## Research

We used unmoderated usability testing, where participants recorded their screen whilst entering their own degree information.

In the testing, we saw that participants were both able to select from the suggestions, and to enter their own answer, with no participants selecting a ‘nearest fit’ answer.

## Further work

As we gather data on how these new autocompletes are being used, we can periodically review where candidates have entered their own answer, to see if their are some common subjects, universities or degree types that we are missing, or missing synonyms for.
