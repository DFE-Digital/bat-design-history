---
title: "UCAS Apply preferences"
description: Settings such as GT12 letters, Star J, Star X and other requirements.
tags: publish-teacher-training-courses
---
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}
{{ govukWarningText({
  html: "28 February – Update from UCAS: Only UTT application alerts and GT12 preferences need to be set. [Updated design](/publish-teacher-training-courses/ucas-apply-preferences-2)" | markdown("inline"),
  iconFallbackText: "Warning"
}) }}

Providers can set preferences in NetUpdate for the way UCAS Apply behaves. NetUpdate is going away, we need to inherit and explain these preferences.

Providers need a way to change them too – but they don’t change them often, if at all. We might be able to handle changes through support.

The following numbers come from a [Google Sheet containing raw preference data from UCAS](https://docs.google.com/spreadsheets/d/11YlO-_mbXoBMdZq2rPFiu6-Api4CHHYHiza41grj94A/).

The preferences listed below are the only ones needed by UCAS Teacher Training Apply. There are more that they could set that are not shown here: “They are relevant to one of the other admissions schemes provided by UCAS”.

[2018 UCAS Teacher Training: Set-up guide](https://www.ucas.com/file/115581/download?token=mv-G6P53) ([backup](/documents/utt-set-up-guide.pdf))

[2019 UCAS Teacher Training: Set-up guide](/documents/ucas-teacher-training-set-up-guide-2019.pdf)

## Format preferred for data download

{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}
{{ govukInsetText({
  html: "Select whether or not you want to receive applicant data that includes extended character sets. These are European characters, such as á, ë, õ, not in the English alphabet.\n\nIf you use web-link to view your applications, we recommend you select ASCll data and unicode data." | markdown
}) }}

{% from "bar-chart/macro.njk" import appBarChart %}
{{ appBarChart({
  headers: ['Value', 'Providers'],
  rows: [
    ['ASCII data', 593],
    ['Unicode data', 107],
    ['ASCII data and unicode data', 472]
  ]
}) }}

ASCII might be needed for old student integration systems used by universities.

Ideally everyone would use unicode and only unicode. Any application could contain European characters.

### Recommendation

Set all new providers to ‘ASCII data and unicode data’ as UCAS recommends.

## Outstanding decision lists (ODL)

{{ govukInsetText({
  html: "You can choose whether or not you want to receive an ODL sequence list. The drop-down list offers a **sort choice** of the list data. ODLs are available online in the applicant data section of web-link. You’ll find an ODL in web-link, which shows all applications awaiting a decision." | markdown
}) }}

{{ appBarChart({
  headers: ['Sort choice', 'Providers'],
  rows:[
    ['Alphabetic', 459],
    ['Application code', 85],
    ['Not required', 119],
    ['Course / Alphabetic', 377],
    ['Faculty / Course / Alphabetic', 60],
    ['Course / Application code', 16],
    ['Faculty / Alphabetic', 9],
    ['Course / Learner Number', 4],
    ['Learner Number', 4],
    ['Faculty / Course / Application code', 6],
    ['Faculty / Course / Learner Number', 3],
    ['Faculty / Application code', 1]
  ]
}) }}

What is the difference between ‘Alphabetic’ and ‘Course / Alphabetic’?

## Star J (*J) required flag

{{ govukInsetText({
  html: "The Star J provides HESA return details for each accepted applicant at your training provider. It contains personal information (such as forenames, surname, ethnicity, and disability), as well as qualifications data, and can be downloaded from the applicant data section of web-link (Main Menu → Management Information → Export Data → Applicant Data 3). It is available after the end of the cycle." | markdown
}) }}

[Star J FAQ](https://www.hesa.ac.uk/collection/c16051/starj) and [Star J specification](https://www.hesa.ac.uk/collection/c17051/starj_specification.pdf)

{{ appBarChart({
  headers: ['Value', 'Providers'],
  rows: [
    ['Flat File', 757],
    ['UCAS Link', 808]
  ]
}) }}

## Star X (*X) required

{{ govukInsetText({
  html: "The Star X gives extra statistical information for each applicant to your training provider. It contains information that can be used for statistical purposes, such as social class and national identity. It does not contain personal information, such as names and addresses, which are not included in this transaction. It can be downloaded in the applicant data section of web-link (Main Menu → Management Information → Export Data → Applicant Data 2)." | markdown
}) }}

{{ appBarChart({
  headers: ['Value', 'Providers'],
  rows:[
    ['No, not required', 532],
    ['Yes, required', 595]
  ]
}) }}

## New UTT application alerts

{{ govukInsetText({
  html: "Use this to opt in to receive an email alert whenever a new application is sent to you." | markdown
}) }}

Who receives the alert?

{{ appBarChart({
  headers: ['Value', 'Providers'],
  rows: [
    ['Yes, required', 710],
    ['No, not required', 873],
    ['Yes - only my programmes', 99],
    ['Yes - for accredited programmes only', 9]
  ]
}) }}

The last two options are only appropriate for accredited bodies.

Alerts are sent to the UTT Output correspondent in the UCAS contact list.

### Recommendation

Give new providers a choice between Yes and No. Give new accredited bodies the full choice. Try to indicate who would receive these alerts and their frequency.

## Require copy forms

{{ govukInsetText({
  html: "Your copy form preference should be set to Yes, required. This, together with the copy form setting on each training programme record, will enable PDFs to be created of your applications. You might not need to download the PDFs but, as they cannot be created retrospectively, it is better to have them available in case you need to do this later." | markdown
}) }}

{{ appBarChart({
  headers: ['Value', 'Providers'],
  rows: [
    ['Yes, required', 607],
    ['No, not required', 747]
  ]
}) }}

### Recommendation

Set all new providers to “Yes, required”. This means PDFs of applications should be available if needed.

## Type of GT12 required

{{ govukInsetText({
  html: "You must make a selection, because it determines which type of Confirmation letter we send to applicants who hold a confirmed place at your training provider. The selection will be applied to all your training programmes. The following table explains the different GT12 Confirmation letters [table excluded]" | markdown
}) }}

{{ appBarChart({
  headers: ['Value', 'Providers'],
  rows: [
    ['Coming or Not (GT12B)', 1206],
    ['Coming / Enrol (GT12E)', 25],
    ['Not coming (GT12N)', 79],
    ['No response (GT12)', 449]
  ]
}) }}

### Coming or Not (GT12B)

{{ govukInsetText({
  html: "To confirm whether or not you intend to take up this place, you must contact the training provider at [GT12 reply email or URL].\n\nIf you are replying to the training provider’s email address, you must include your:\n\n* full name\n* Personal ID\n* training programme code\n* reason for not taking the place (if applicable)" | markdown
}) }}

### Coming / Enrol (GT12E)

{{ govukInsetText({
  html: "To confirm that you intend to take up this place, you must contact the training provider at [GT12 reply email or URL].\n\nIf you are replying to the training provider’s email address, you must include your:\n\n* full name\n* Personal ID\n* training programme code\n\nIf you do not intend to take up this place, no action is required." | markdown
}) }}

### Not coming (GT12N)

{{ govukInsetText({
  html: "If you do not intend to take up this place, you must contact the training provider at [GT12 reply email or URL].\n\nIf you are replying to an email address, you must include your:\n\n* full name\n* Personal ID\n* training programme code\n* reason for not taking the place" | markdown
}) }}

### No response (GT12)

{{ govukInsetText({
  html: "[Training provider name] will assume you are taking up your place, and will be sending you joining instructions before you start your training programme." | markdown
}) }}

### Recommendation

We indicate the difference in letters to new providers and ask for their choice. We need to indicate who the emails will go to as well.

* * *

{% from "figure/macro.njk" import appFigure with context %}
{{ appFigure({
  image: {
    file: "ucas-apply-preferences.png"
  },
  caption: "UCAS Apply preferences"
}) }}
