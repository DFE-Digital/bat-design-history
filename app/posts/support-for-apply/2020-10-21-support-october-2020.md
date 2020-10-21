---
title: Support – October 2020
description: Design review and tidy up.
date: 2020-10-21
---

After a year of rapid development and quick iterations without any design oversight, the support interface had become cluttered and disorganised.

During October 2020, we took the opportunity to review the design. We revised the information architecture, categorising pages under 5 headings:

* Candidates
* Providers
* Performance
* Settings
* Documentation

Navigation was updated to reflect this change. We also revised the layout of several different pages, adopting patterns used within the [provider-facing interface](/manage-teacher-training-applications/) where possible.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  title: "Candidates",
  items: [{
    text: "Applications",
    img: { src: "1000-candidates-applications.png" }
  }, {
    text: "Application details",
    img: { src: "1010-candidates-application.png" }
  }, {
    text: "Application history",
    img: { src: "1020-candidates-application-history.png" }
  }, {
    text: "Candidates",
    img: { src: "1100-candidates-candidates.png" }
  }, {
    text: "UCAS matches",
    img: { src: "1200-ucas-matches.png" }
  }]
}) }}

{{ appScreenshots({
  title: "Providers",
  items: [{
    text: "Synced providers",
    img: { src: "2000-providers-synced.png" }
  }, {
    text: "Provider details",
    img: { src: "2010-providers-provider.png" }
  }, {
    text: "Provider applications",
    img: { src: "2020-providers-provider-applications.png" }
  }, {
    text: "Provider users",
    img: { src: "2030-providers-provider-users.png" }
  }, {
    text: "Provider courses",
    img: { src: "2040-providers-provider-courses.png" }
  }, {
    text: "Provider course details",
    img: { src: "2041-providers-provider-course.png" }
  }, {
    text: "Provider course applications",
    img: { src: "2042-providers-provider-course-applications.png" }
  }, {
    text: "Provider course vacancies",
    img: { src: "2043-providers-provider-course-vacancies.png" }
  }, {
    text: "Provider relationships",
    img: { src: "2050-providers-provider-relationships.png" }
  }, {
    text: "Provider vacancies",
    img: { src: "2060-providers-provider-vacancies.png" }
  }, {
    text: "Provider sites",
    img: { src: "2070-providers-provider-sites.png" }
  }, {
    text: "Provider history",
    img: { src: "2080-providers-provider-history.png" }
  }, {
    text: "Other providers",
    img: { src: "2100-providers-other.png" }
  }, {
    text: "API tokens",
    img: { src: "2200-providers-api-tokens.png" }
  }, {
    text: "All provider users",
    img: { src: "2300-providers-users.png" }
  }, {
    text: "Provider user details",
    img: { src: "2301-providers-provider-user.png" }
  }, {
    text: "Add provider user",
    img: { src: "2302-providers-provider-user-new.png" }
  }, {
    text: "Edit provider user",
    img: { src: "2303-providers-provider-user-edit.png" }
  }, {
    text: "Provider user history",
    img: { src: "2304-providers-provider-user-history.png" }
  }]
}) }}

{{ appScreenshots({
  title: "Performance",
  items: [{
    text: "Performance",
    img: { src: "3000-performance.png" }
  }, {
    text: "Performance dashboard",
    img: { src: "3010-performance-dashboard.png" }
  }, {
    text: "Course stats",
    img: { src: "3020-performance-course-stats.png" }
  }, {
    text: "Data exports",
    img: { src: "3100-performance-data-exports.png" }
  }, {
    text: "Data export",
    img: { src: "3110-performance-data-export.png" }
  }, {
    text: "New data export",
    img: { src: "3120-performance-data-exports-new.png" }
  }, {
    text: "Email log",
    img: { src: "3200-performance-email-log.png" }
  }, {
    text: "Validation errors",
    img: { src: "3300-performance-validation-errors.png" }
  }, {
    text: "Validation error summary",
    img: { src: "3301-performance-validation-error-summary.png" }
  }]
}) }}

{{ appScreenshots({
  title: "Settings",
  items: [{
    text: "Feature flags",
    img: { src: "4000-settings-feature-flags.png" }
  }, {
    text: "Recruitment cycles",
    img: { src: "4100-settings-cycles.png" }
  }, {
    text: "Tasks",
    img: { src: "4200-settings-tasks.png" }
  }, {
    text: "Tasks - Cancel all unsubmitted applications",
    img: { src: "4210-settings-tasks-cancel-applications.png" }
  }, {
    text: "Support users",
    img: { src: "4400-settings-support-users.png" }
  }, {
    text: "Support user",
    img: { src: "4401-settings-support-user.png" }
  }, {
    text: "Add support user",
    img: { src: "4402-settings-support-user-new.png" }
  }]
}) }}

{{ appScreenshots({
  title: "Documentation",
  items: [{
    text: "User guidance",
    img: { src: "5000-documention.png" }
  }, {
    text: "Candidate application flow",
    img: { src: "5100-documention-candidate-flow.png" }
  }, {
    text: "Provider application flow",
    img: { src: "5200-documention-provider-flow.png" }
  }, {
    text: "When emails are sent",
    img: { src: "5300-documentation-when-emails-are-sent.png" }
  }, {
    text: "Mailer previews",
    img: { src: "5400-documentation-mailers.png" }
  }]
}) }}
