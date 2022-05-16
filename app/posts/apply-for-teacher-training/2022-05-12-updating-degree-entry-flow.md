---
title: Changing the order of the initial degree questions
description: Why we changed the order of questions to improve usability
date: 2022-05-12
---

![Diagram showing the start of the old flow, with 2 pages, and the start of the new flow, with 4 pages](degree-flow-changes.png)

Evidence from usability studies and data from the live service showed us that there were some consistent usability issues when candidates entered their degree information.

The biggest issue was that candidates frequently entered a full degree title, for example ‘BA English’, into the the ‘Type of degree’ field:

![Screenshot showing ‘Add undergraduate degree’ with options for ‘UK degree’ and ‘Non-UK degree’, with a follow-up question of ‘Type of degree, for example BA, BSc or other’ which is filled in with ‘BA English’](degree-flow-old-first-question.png "First question in previous degree flow showing someone incorrecting answering")

This was an issue because the very next question was ‘What subject is your degree?’. At this point candidates either realised they had already given this information as part of the previous question, and so had to go back and edit their first answer, or continued and just entered the subject again.

The ‘Type of degree’ field did have an autocomplete, containing entries for all the common and not-so-common degree type abbreviations, but a high proportion of users did not select an entry from this list.

<table>
<caption class="govuk-table__caption govuk-table__caption--m">Examples of the ways that degree type was entered</caption>
<thead>
<tr><th>Degree type entered</th><th>Count</th></tr>
</thead>
<tbody>
  <tr><td>Bachelor of Arts</td><td class="govuk-table__cell--numeric">25,280</td></tr>
  <tr><td>BA</td><td class="govuk-table__cell--numeric">1,586</td></tr>
  <tr><td>Bachelor of Arts (Honours)</td><td class="govuk-table__cell--numeric">31</td></tr>
  <tr><td>Bachelor of Arts (Hons)</td><td class="govuk-table__cell--numeric">33</td></tr>
  <tr><td>Bachelor of Arts with Honours</td><td class="govuk-table__cell--numeric">123</td></tr>
  <tr><td>BA English</td><td class="govuk-table__cell--numeric">20</td></tr>
  <tr><td>BA/Education</td><td class="govuk-table__cell--numeric">1,723</td></tr>
  <tr><td>History</td><td class="govuk-table__cell--numeric">12</td></tr>
  <tr><td>BA History</td><td class="govuk-table__cell--numeric">13</td></tr>
  <tr><td>BA French</td><td class="govuk-table__cell--numeric">7</td></tr>
</tbody>
</table>

To resolve this issue, we changed the order of the questions and made degree type easier to select.

In the new flow, we first ask ‘What type of degree is it’, with radio options for Foundation, Bachelor, Master’s, Doctorate (PhD), Level 6 Diploma or Another qualification equivalent to a degree:

![Screenshot showing page asking ‘What type of degree is it?’](degree-flow-new-degree-type.png "New question for type of degree")

After this, we ask for the degree subject, as before.

After the subject has been entered, we then ask for the degree title abbreviation. This now uses radio button options for the most common degree titles, with ‘Another [bachelor] degree type’ revealing an autocomplete.

Displaying the most common degree types as radio buttons aims to both make it clearer what the question is asking, and gives most most candidates a faster way to answer.

The question wording and answers change depending upon whether a foundation, bachelor, Master’s or Doctorate was selected. If another degree type was selected, this question is skipped.

![Screenshot showing page asking ‘What type of bachelor degree is it?’](degree-flow-new-type-of-bachelor.png "New question for type of bachelor degree")

The order of the rest of the questions was unchanged.

## Research

We used unmoderated usability testing, where participants entered their degrees whilst recording their screen, to test whether the new flow was an improvement.

In the testing, all participants successfully entered their degree type and subject in the separate questions, and no one incorrectly combined them into a single answer.
