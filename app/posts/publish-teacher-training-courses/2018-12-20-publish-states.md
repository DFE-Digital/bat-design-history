---
title: Rethinking the publish workflow
description: What does the publish workflow look like after UCAS transition?
date: 2018-12-20
---

Publishing before transition was complicated. Each training location had a state and a publish flag, which determines if the course appears in Find and can be applied to on UCAS Apply. Then the content has its own state – Empty, Draft or Published.

You could write and publish content for new courses on Publish, they’d be labelled green, but they would not appear online if the user hadn’t set their training locations to running in UCAS (or if UCAS hadn’t approved this by [setting the publish flag to yes](/publish-teacher-training-courses/course-not-running-oct-15)).

## User research

- [Suffolk and Norfolk Primary SCITT](https://lookback.io/watch/ud8KczRqKKAexox28)
- [The Downland Alliance](https://lookback.io/watch/E8MxZYHrmy7E7q85w)

![Screenshot of courses quiz.](courses-quiz.png)

We tested this courses quiz with users to see if they understood each state given the information provided.

## Example states (second iteration)

Changes in this design:

- replaced Last published column with an ‘Is it on Find?’ column, to be explicit
- removed view on website link, making the Find status the link itself
- changed the ‘Draft #2’ state to be clear that it is published and on Find, the concept of ‘second edition’ isn’t needed yet

This is the design we tested in the quiz with users.

<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Course</th>
      <th class="govuk-table__header">Status</th>
      <th class="govuk-table__header">Is it on <abbr title="Find postgraduate teacher training">Find</abbr>?</th>
      <th class="govuk-table__header">Applications</th>
      <th class="govuk-table__header">Vacancies</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-bottom-0">New course, just added (N123)</a>
        <span class="govuk-body-s">PGCE with QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">New</span>
      </td>
      <td class="govuk-table__cell">No – still in draft</td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-bottom-0">Draft course, not published (DD23)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell">No – still in draft</td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-bottom-0">Published, but has unpublished changes (D123)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell nowrap">
        <span class="govuk-tag app-tag-published">Published&nbsp;*</span><br>
        <span class="govuk-body-s">- Unpublished changes</span>
      </td>
      <td class="govuk-table__cell nowrap">
        <a href="#">Yes – view online</a>
      </td>
      <td class="govuk-table__cell">Open</td>
      <td class="govuk-table__cell">Yes (<a href="#">Edit</a>)</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-bottom-0">Published course (P123)</a>
        <span class="govuk-body-s">PGCE with QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell nowrap">
        <a href="#">Yes – view online</a>
      </td>
      <td class="govuk-table__cell">Open</td>
      <td class="govuk-table__cell">Yes (<a href="#">Edit</a>)</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-bottom-0">Published before applications open (PP23)</a>
        <span class="govuk-body-s">PGCE with QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell nowrap">
        <a href="#">Yes – view online</a>
      </td>
      <td class="govuk-table__cell nowrap">Open from<br>3 Mar 2019</td>
      <td class="govuk-table__cell">Yes (<a href="#">Edit</a>)</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-bottom-0">Published but full (PC23)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell nowrap"><a href="#">Yes – view online</a></td>
      <td class="govuk-table__cell">Closed</td>
      <td class="govuk-table__cell">No (<a href="#">Edit</a>)</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-bottom-0">Withdrawn course (W123)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-not-running">Withdrawn</span>
      </td>
      <td class="govuk-table__cell nowrap">No – withdrawn</td>
      <td class="govuk-table__cell">Closed</td>
      <td class="govuk-table__cell">No</td>
    </tr>
    <!-- <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-bottom-0">Rolled over course (R123)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">Rollover</span>
      </td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
    </tr> -->
  </tbody>
</table>

## Example states (initial design)

Problems identified with this design in peer review, before user research:

- ‘View on website’ is not a clear enough indicator that the course is on Find
- ‘Draft #2’ was universally misunderstood – it’s live but has unpublished changes, people thought it was not live
- The last published column wasn’t useful

<table class="govuk-table ucas-info-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Course</th>
      <th class="govuk-table__header">Status</th>
      <th class="govuk-table__header">Last published</th>
      <th class="govuk-table__header">Applications</th>
      <th class="govuk-table__header">Vacancies?</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-0">New course, just added (N123)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">New</span>
      </td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-0">Draft course, not published (DD23)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-0">Draft course, published before (D123)</a>
        <span class="govuk-body-s">QTS full time – <a href="#">View on website</a></span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft #2</span>
      </td>
      <td class="govuk-table__cell">10 August 2018</td>
      <td class="govuk-table__cell">Open</td>
      <td class="govuk-table__cell">Yes (<a href="#">Edit</a>)</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-0">Published course (P123)</a>
        <span class="govuk-body-s">QTS full time – <a href="#">View on website</a></span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell">10 August 2018</td>
      <td class="govuk-table__cell">Open</td>
      <td class="govuk-table__cell">Yes (<a href="#">Edit</a>)</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-0">Published before applications open (PP23)</a>
        <span class="govuk-body-s">QTS full time – <a href="#">View on website</a></span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell">10 August 2018</td>
      <td class="govuk-table__cell">Open from<br>6 October 2018</td>
      <td class="govuk-table__cell">Yes (<a href="#">Edit</a>)</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-0">Published but full (PC23)</a>
        <span class="govuk-body-s">QTS full time – <a href="#">View on website</a></span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell">10 August 2018</td>
      <td class="govuk-table__cell">Closed</td>
      <td class="govuk-table__cell">No (<a href="#">Edit</a>)</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-0">Withdrawn course (W123)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-not-running">Withdrawn</span>
      </td>
      <td class="govuk-table__cell">Withdrawn on<br>10 August 2018</td>
      <td class="govuk-table__cell">Closed</td>
      <td class="govuk-table__cell">No</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">
        <a href="#" class="govuk-heading-s govuk-!-margin-0">Rolled over course (R123)</a>
        <span class="govuk-body-s">QTS full time</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">Rollover</span>
      </td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
      <td class="govuk-table__cell"></td>
    </tr>
  </tbody>
</table>

*[UCAS]: Universities and colleges admissions service
