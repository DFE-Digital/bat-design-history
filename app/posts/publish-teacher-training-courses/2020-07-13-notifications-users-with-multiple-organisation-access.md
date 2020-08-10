---
title: Notifications for users with access to multiple organisations
description: Allowing accredited body users to choose which organisations they receive notifications about.
date: 2020-07-13
tags:
 - PN013
---

In [previous research](/publish-teacher-training-courses/users-with-multiple-organisation-access/) into users with access to multiple organisations we identified that users who belong to an accredited body with multiple training providers needed more flexibility in their notifications settings.

## User need

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs('PN013')}) }}

<table class="govuk-table">
  <caption class="govuk-table__caption">The ratio of accredited bodies with multiple training providers</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header--numeric">Number of accredited bodies</th>
      <th scope="col" class="govuk-table__header--numeric">Number of training providers they accredited</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">68</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">1</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">37</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">2</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">17</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">3</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">11</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">4</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">10</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">5</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">8</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">6</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">5</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">7</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">5</td>
      <td class="govuk-table__cel govuk-table__cell--numeric">8</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">6</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">9</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">5</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">10</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">2</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">11</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">7</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">12</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">1</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">13</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">4</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">14</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">7</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">15</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">2</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">16</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">1</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">17</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">3</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">18</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">4</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">19</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">3</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">20</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">2</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">21</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">1</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">22</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">3</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">23</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">1</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">24</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">1</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">25</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">2</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">26</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">2</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">27</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">1</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">35</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">1</td>
      <td class="govuk-table__cell govuk-table__cell--numeric">36</td>
    </tr>
    <!-- <tr class="govuk-table__row">
      <td class="govuk-table__cell govuk-table__cell--numeric">Total users: 3357</td>
      <td class="govuk-table__cel"></td>
    </tr> -->
  </tbody>
</table>

(Data from early August 2020)

## Design notes

This update includes:

* simplifying the language used in the page title [(View the original)](https://bat-design-history.netlify.app/publish-teacher-training-courses/accredited-bodies-new-features/#notifications-opt-in)
* updating content to list all available notifications
* the ability for multi-organisation users to specify which training providers they want to receive notifications about

When a training provider has multiple accredited bodies, the accredited body user who enables notifications should only receive notifications for the courses they are the accredited body for. They must not receive notifications for courses they are not attached to.

For example: Mary belongs to Suffolk and Norfolk Primary SCITT, who is the accredited body for some of Thorpe St Andrew School and Sixth Forms courses. The University of East Anglia is also an accredited body for some of Thorpe St Andrew School and Sixth Forms courses. Mary should not receive notifications about changes to courses from the University of East Anglia. 

### Potential roadmap

* Consider in-app notifications
* Allow users to specify which particular notifications they receive

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Opt in with one partner school"
    },
    {
      text: "Opt in with multiple partner schools"
    },
    {
      text: "Confirmation of opt-in"
    }
  ]
}) }}