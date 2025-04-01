---

title: Updating CSV error format
description: Details of how and why we updated the CSV Bulk add trainees error format
date: 2025-03-31
tags:
  - trainees
  - providers
  - CSV

---
User research revealed that the current structure of the error column for the 'CSV bulk add new trainees' tool is somewhat difficult to read and hard to use when processing many errors.  In addition, some users found it confusing that no message as given for trainees' records that passed all validations and had no errors.  

## What we have changed

Instead of a single error column being include in the validation results file, two are now include:

* **Validation results** stating the high-level result of the validation: passed or X errors found.

* **Errors**, listing all errors found. Delineated by both a semi-colon and line break.

See new error structure in this table:

Validation results | Errors
----|----
3 errors found | Itt start date is invalid; <BR> Degrees attributes Subject can't be blank; <BR> Degrees attributes Grade can't be blank
1 error found | Itt start date is invalid
Validation passed | ----

## Reasons for our approach

By splitting the results in addition to adding line break delineation between errors we have make the results of validation:

* Easier to sort and filter
* Clearer when trainee records have passed validation
* Quicker to scan for specific errors

## Next steps

Having implemented these changes our next step is to test them with providers, first with moderated usability testing, then unmoderated sandbox testing.

*[CSV]: comma-separated values
