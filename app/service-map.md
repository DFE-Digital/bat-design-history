---
layout: page
title: Teacher services map
description: How the ‘becoming a teacher’  services relate to other services in the teaching journey
tags: reference
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
---

The 'becoming a teacher' services are part of a broader range of digital services which encompass the whole teaching journey, from initial interest through to retirement.

<img src="service-map.png" alt="Diagram showing a list of services arranged into 5 columns with the headings: consider teaching, become a teacher, start teaching, develop your practice and leave teaching. Full list of services below.">

[Download service map as PDF (100kb)](service-map.pdf)


{% set services = {
  "considerTeaching": {
    "teachers": [
      {
        "name": "Get personalised guidance to your inbox",
        "href": "https://getintoteaching.education.gov.uk/mailinglist/signup/name"
      },
      {
        "name": "Find an event near you",
        "href": "https://getintoteaching.education.gov.uk/events"
      },
      {
        "name": "Apply for a teaching internship"
      },
      {
        "name": "Get an adviser",
        "href": "https://adviser-getintoteaching.education.gov.uk"
      },
      {
        "name": "Get school experience",
        "href": "https://schoolexperience.education.gov.uk"
      }
    ],
    "providers": [
      {
        "name": "Manage events"
      },
      {
        "name": "Manage school experience",
        "href": "https://schoolexperience.education.gov.uk/schools"
      }
    ]
  },
  "becomeATeacher": {
    "teachers": [
      {
        "name": "Find postgraduate teacher training",
        "href": "https://www.find-postgraduate-teacher-training.service.gov.uk"
      },
      {
        "name": "Apply for teacher training",
        "href": "https://www.apply-for-teacher-training.service.gov.uk"
      },
      {
        "name": "Application for QTS"
      }
    ],
    "providers": [
      {
        "name": "Publish teacher training courses",
        "href": "https://www.publish-teacher-training-courses.service.gov.uk"
      },
      {
        "name": "Manage teacher training applications",
        "href": "https://www.apply-for-teacher-training.service.gov.uk/provider"
      },
      {
        "name": "Register trainee teachers",
        "href": "https://www.register-trainee-teachers.education.gov.uk"
      },
      {
        "name": "ITT Provider Portal"
      }
    ]
  },
  "startTeaching": {
    "teachers": [
      {
        "name": "Find a teaching job",
        "href": "https://teaching-vacancies.service.gov.uk"
      },
      {
        "name": "Claim back your student loan repayments"
      },
      {
        "name": "Claim an early-career payment",
        "href": "https://www.claim-additional-teaching-payment.service.gov.uk/early-career-payments/landing-page"
      },
      {
        "name": "Support for early career teachers"
      },
      {
        "name": "Teacher Self Service Portal",
        "href": "https://teacherservices.education.gov.uk/SelfService/Login"
      }
    ],
    "providers": [
      {
        "name": "Publish a vacancy",
        "href": "https://teaching-vacancies.service.gov.uk/publishers/sign-in"
      },
      {
        "name": "Manage training for early career teachers",
        "href": "https://manage-training-for-early-career-teachers.education.gov.uk"
      },
      {
        "name": "Employer Access"
      },
      {
        "name": "Appropriate Body Portal"
      }
    ]
  },
  "developYourPractice": {
    "teachers": [
      {
        "name": "Register for a National Professional Qualification",
        "href": "https://register-national-professional-qualifications.education.gov.uk"
      },
      {
        "name": "Find and compare schools",
        "href": "https://www.gov.uk/school-performance-tables"
      }
    ]
  },
  "leaveTeaching": {
    "teachers": [
      {
        "name": "Teachers’ pensions",
        "href": "https://www.teacherspensions.co.uk"
      }
    ]
  }
} %}


{% macro serviceList(params) %}
  <p class="govuk-body-s">For teachers:</p>
  <ul class="govuk-list govuk-list--bullet govuk-!-font-size-16">
    {% for service in services[params.phase].teachers %}
      <li>
        {% if service.href %}
          <a href="{{ service.href }}" class="govuk-link">{{ service.name }}</a>
        {% else %}
          {{ service["name"] }}
        {% endif %}
      </li>
    {% endfor %}
  </ul>

  {% if services[params.phase].providers %}
  <p class="govuk-body-s">For schools and providers:</p>
  <ul class="govuk-list govuk-list--bullet govuk-!-font-size-16">
    {% for service in services[params.phase].providers %}
      <li>
        {% if service.href %}
          <a href="{{ service.href }}" class="govuk-link">{{ service.name }}</a>
        {% else %}
          {{ service["name"] }}
        {% endif %}
      </li>
    {% endfor %}
  </ul>
  {% endif %}
{% endmacro %}

<h2 class="govuk-heading-m">Teacher services</h2>
<div class="govuk-grid-row">
  <div class="app-grid-column-one-fifth">
  <h3 class="govuk-heading-s">Consider teaching</h3>
  {{ serviceList({phase: "considerTeaching"}) }}
  </div>
  <div class="app-grid-column-one-fifth">
  <h3 class="govuk-heading-s">Become a teacher</h3>
  {{ serviceList({phase: "becomeATeacher"}) }}
  </div>
  <div class="app-grid-column-one-fifth">
  <h3 class="govuk-heading-s">Start teaching</h3>
  {{ serviceList({phase: "startTeaching"}) }}
  </div>
  <div class="app-grid-column-one-fifth">
  <h3 class="govuk-heading-s">Develop your practice</h3>
  {{ serviceList({phase: "developYourPractice"}) }}
  </div>
  <div class="app-grid-column-one-fifth">
  <h3 class="govuk-heading-s">Leave teaching</h3>
  {{ serviceList({phase: "leaveTeaching"}) }}
  </div>
</div>

<h3 class="govuk-body">Database services</h3>

<ul class="govuk-list govuk-list--bullet govuk-!-font-size-16">
  <li>Get Into Teaching CRM</li>
  <li>Database of Qualified Teachers</li>
</ul>
