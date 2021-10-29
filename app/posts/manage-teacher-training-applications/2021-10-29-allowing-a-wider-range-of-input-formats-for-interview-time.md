---
title: Allowing a wider range of input formats for interview time
description: We’ve made the interview time validation more flexible so that we allow most formats which are clearly either 12 hour or 24 hour
date: 2021-10-29
related:
  items:
    - text: Analysis
      href: https://docs.google.com/spreadsheets/d/1VI-HWVNe0_hzn2bOeQWJHiEiVSlgnl9G-Ve1jvcgVBU/edit#gid=22066222
screenshots:
  items:
    - text: Setting up an interview
      src: set-up.png
    - text: Setting up an interview - check answers
      src: set-up--check.png
    - text: Changing interview details
      src: change.png
    - text: Changing interview details - check answers
      src: change--check.png
---

A lot of users get an error message when they enter an interview time. A significant number of users have to try again more than once.

Most of the errors occur because we do not allow users to:

- use a 24 hour format such as ‘13:15’ instead of ‘1:15pm’
- make mistakes like leaving spaces between hours and minutes
- leave the interview time field empty
- enter both a start and end time in the field, such as ‘1pm - 2pm’

## Data analysis

We looked at the errors which users are making. As of 22 October 2021:

- 4114 interviews have been set up
- 401 errors have been triggered

Out of the 401 errors, 291 relate to the time. Out of the 291 errors:

- 22 are due to leaving the field empty
- 269 are due to the format not being accepted

Out of the 269 errors due to the format not being accepted:

- 95 used a 24 hour clock format, for example ‘10:30’
- 56 had an extra space, dot or colon, for example ‘9:30 am’
- 53 used a 3 digit time without am or pm, for example ‘9:30’
- 13 had a contradictory mixed format, for example ‘17:15pm’
- 10 omitted a colon or dot, for example ‘930am’
- 4 used a semicolon, for example ‘9;30am’
- 6 had a double digit hour without am or pm, for example ‘10’ or ‘13’
- 33 were not accepted due to other reasons, such as entering ‘12noon’, ‘12om’, ‘2pm - 3pm’ or ‘tbc’

While most users get an error once, many get an error multiple times.

| Number of errors | Number of users |
|------------|----------|
| 1 | 102 |
| 2 | 46 |
| 3 | 26 |
| 4 | 11 |
| 5 | 2 |
| 6 | 5 |
| 7 | 1 |
| 14 | 1 |
| 15 | 1 |

## What we changed

We made changes to allow a wider range of formats. These changes would have prevented 220 of the 269 format errors we found in our analysis.

We also changed the hint text to reflect that we allow the use of a 24 hour format. At the same time we changed the field label.

### Accepting a 24 hour format

We currently accept a 12 hour format such as ‘9am’ or ‘2:30pm’. We do not accept a 24 hour format such as ‘09:00’ or ‘14:30’.

We’ll now accept both formats.

We will not allow mixed formats for afternoon times, even if they’re consistent, such as ‘22:15pm’. This is due to a limitation of the technical solution being used to validate times.

### Allow dots and other characters

We do not currently accept minor mistakes such as using ‘a.m.’ instead of ‘am’. We also do not accept dots or spaces instead of colons, such as ‘3.15pm’.

We will now allow the use of colons, dots, spaces or no punctuation at all, as long as the value can be reliably interpreted as a 12 or 24 hour format.

### Changing the label and hint text

The label for the input is currently ‘time’. We changed it to ‘start time’ to help users understand that they cannot enter a range.

The hint text currently says ‘For example, 9am or 2:30pm - enter 12pm for midday’. We changed it to ‘For example, 2pm or 14:30’ to show we also accept a 24 hour format.

We removed the note about midday because it allows us to have very short and clear hint text. There’s no evidence that users accidentally enter midnight when they mean midday.

This could be because the current hint text is functioning well, but we think that playing back the time on the ‘check answers’ page is enough. We’ll reconsider this if we find that a significant number of users are making a mistake.

## Examples of acceptable and unacceptable time formats

These examples help to explain the rules we’ll follow. They do not include every possible combination of numbers, letters and punctuation.

### Examples of acceptable time formats

| Input | Output | Why we accept this input |
|------------|----------|----------|
| `05:15` | `5:15am` | 24 hour format |
| `0515` | `5:15am` | 24 hour format, no separator |
| `05.15` | `5:15am` | 24 hour format |
| `05 15` | `5.15am` | 24 hour format, ignore space |
| `5:am` | `5am` | 12 hour format, ignore colon |
| `5.am` | `5am` | 12 hour format, ignore dot |
| `515am` | `5:15am` | 12 hour format, no separator |
| `515.am` | `5:15am` | 12 hour format, no separator, ignore dot |
| `515a.m.` | `5:15am` | 12 hour format, no separator, ignore dots |
| `515a.m` | `5:15am` | 12 hour format, no separator, ignore dots |
| `515 am` | `5:15am` | 12 hour format, no separator, ignore space |
| `5 15am` | `5:15am` | 12 hour format, no separator, ignore space |
| `5 15 am` | `5:15am` | 12 hour format, no separator, ignore space |
| `5 15` | `5:15am` | 24 hour format, no separator, no leading zero |
| `5:15` | `5:15am` | 24 hour format, no leading zero |
| `515` | `5:15am` | 24 hour format, no separator, no leading zero |
| `0515pm` | `5:15pm` | 12 hour format, no separator, ignore leading zero |
| `05:15am` | `5:15am` | 12 hour format, ignore leading zero |
| `05.15am` | `5:15am` | 12 hour format, ignore leading zero |
| `5:00am` | `5am` | 12 hour format |
| `13` | `1pm` | 24 hour format, no minutes |
| `5` | `5am` | 24 hour format, no minutes, no leading zero |
| `00` | `12am` | 24 hour format, no minutes, no trailing zeros |
| `05` | `5am` | 24 hour format, no minutes |
| `12` | `12am` | 24 hour format, no minutes |
| `5.` | `5am` | 24 hour format, no minutes, no leading zero, ignore dot |

### Examples of unacceptable time formats

| Input | Why we do not accept this input |
|------------|----------|
| `0` | Not 12 hour or 24 hour format |
| `0am` | Not 12 hour or 24 hour format |
| `00am` | Not 12 hour or 24 hour format |
| `9;15am` | Uses semicolon |
| `17:15am` | Not a 12 hour or 24 hour format |
| `1715am` | Not a 12 hour or 24 hour format |
| `515a m` | Users have never got an error due to this and it’s extra work to cater for it |
| `17:15pm` | Users have got this error 12 times but it’s extra work to cater for it |
| `17pm` | Not a 12 hour or 24 hour format |
| `8am-9am` | Not a time |
| `tbc` | Not a time |
| `12noon` | Not a time |

## Further considerations

In future, we’ll consider:

- making the interview time field optional or having a ‘to be confirmed’ option
- giving users the choice not to email the candidate when setting up or changing the details of an interview
- letting users enter an interview end time or interview duration
- accepting a mixed format, for example 17:15pm or 13pm
- accepting a semicolon, for example 5;15pm
- assuming that the digits 1 to 6 indicate the afternoon if the time does not include ‘am’ or ‘pm’ but is not in 24 hour format, for example ‘3’
