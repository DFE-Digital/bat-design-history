---
title: Updating CSV error format
description: Details of how and why we updated the CSV Bulk add trainees error format
date: 2025-03-31
tags:
  - trainees
  - providers
  - CSV
---

User research revealed that the current structure of the error column for the ‘CSV bulk add new trainees’ tool is somewhat difficult to read and use when processing many errors. In addition, some users found it confusing that no message was given for trainees’ records that passed all validations and had no errors.

## What we have changed

Instead of a single error column being include in the validation results file, two are now include:

- **Validation results** stating the high-level result of the validation: passed or X errors found.

- **Errors**, listing all errors found. Delineated by both a semi-colon and line break.

See the new error structure in this table:

| Validation results | Example errors |
| ---- | ---- |
| 3 errors found | Itt start date is invalid; <br> Degrees attributes Subject can't be blank; <br> Degrees attributes Grade can't be blank |
| 1 error found | Itt start date is invalid |
| Validation passed | - |

## Reasons for our approach

By splitting the results in addition to adding line break delineation between errors, we have made the results of validation:

- easier to sort and filter
- clearer when trainee records have passed validation
- quicker to scan for specific errors

## Next steps

Having implemented these changes, our next step is to test them with providers, first with moderated usability testing and then unmoderated sandbox testing.

*[CSV]: comma-separated values
