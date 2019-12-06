---
layout: page
title: Migrating publish statuses
description: How old UCAS status and enrichment status should map to a single new status.
tags: publish-teacher-training-courses
---
How we get from the two statuses we have now (UCAS course running status, and Publish course content status), to a [simpler single course status](/publish-teacher-training-courses/publish-states).

<table class="govuk-table">
  <colgroup>
    <col>
    <col width="25%">
    <col width="25%" style="background-color: #f3f2f1">
    <col>
  </colgroup>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th class="govuk-table__header">Old UCAS status</th>
      <th class="govuk-table__header">Old enrichment status</th>
      <th class="govuk-table__header">New status</th>
      <th class="govuk-table__header">Actions</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Running</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">Empty</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell">
        <ul>
          <li>Circumvent validation</li>
          <li>Publish minimum course</li>
          <li>When editing, use validation</li>
          <li>Chase providers?</li>
        </ul>
      </td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Running</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span><br>
        <span class="govuk-body-s">(not published before)</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published&nbsp;*</span><br>
        <span class="govuk-body-s">* Unpublished changes</span></td>
      <td class="govuk-table__cell">
        <ul>
          <li>Circumvent validation</li>
          <li>Publish minimum course</li>
          <li>Use draft enrichment as unpublished changes</li>
          <li>When editing, use validation</li>
        </ul>
      </td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Running</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span><br>
        <span class="govuk-body-s">(published with unpublished changes)</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published&nbsp;*</span><br>
        <span class="govuk-body-s">* Unpublished changes</span>
      </td>
      <td class="govuk-table__cell">
        Use draft enrichment as unpublished changes
      </td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Running</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell">None</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">New – not yet running</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">Empty</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">New</span>
      </td>
      <td class="govuk-table__cell">None</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">New – not yet running</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell new-status">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell">None</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">New – not yet running</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell new-status">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell">
        <ul>
          <li>Move course back to draft state</li>
          <li>Email provider</li>
        </ul>
      </td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Not running (but has been running in this cycle)</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">Empty</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-not-running">Withdrawn</span>
      </td>
      <td class="govuk-table__cell">Anything that’s been live but isn’t live any more should be marked as withdrawn.</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Not running (but has been running in this cycle)</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-not-running">Withdrawn</span>
      </td>
      <td class="govuk-table__cell">Anything that’s been live but isn’t live any more should be marked as withdrawn.</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Not running (but has been running in this cycle)</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-not-running">Withdrawn</span>
      </td>
      <td class="govuk-table__cell">Anything that’s been live but isn’t live any more should be marked as withdrawn.</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Not running (not been running in this cycle)</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">Empty</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-no-content">Rollover</span>
      </td>
      <td class="govuk-table__cell">Use whichever state we give to courses that have been rolled over.</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Not running (not been running in this cycle)</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell">
        <ul>
          <li>Not sure that courses can end up in this state (e.g. Not running means you can’t enrich)</li>
          <li>None</li>
        </ul>
      </td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">Not running (not been running in this cycle)</td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-published">Published</span>
      </td>
      <td class="govuk-table__cell">
        <span class="govuk-tag app-tag-draft">Draft</span>
      </td>
      <td class="govuk-table__cell">
        <ul>
          <li>Not sure that courses can end up in this state (e.g. Not running means you can’t enrich)</li>
          <li>Move course back to draft state</li>
          <li>Email provider</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
