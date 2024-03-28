---
layout: page
title: Teacher services map
description: How the ‘becoming a teacher’  services relate to other services in the teaching journey
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
ogImage:
  src: thumbnail.png
  alt: "Diagram showing boxes representing teacher services, arranged on a horizontal axis with the labels 'Consider', 'Become', 'Start teaching', 'Develop' and 'Leave'"
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
        "name": "Apply for a teaching internship",
        "href": "https://getintoteaching.education.gov.uk/teaching-internship-providers"
      },
      {
        "name": "Get an adviser",
        "href": "https://adviser-getintoteaching.education.gov.uk"
      },
      {
        "name": "Get school experience",
        "href": "https://schoolexperience.education.gov.uk"
      },
      {
        "name": "Share your skills - Teach in Further Education",
        "href": "https://www.teach-in-further-education.campaign.gov.uk"
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
        "name": "Apply for qualified teacher status (QTS) in England",
        "href": "https://apply-for-qts-in-england.education.gov.uk/"
      },
      {
        "name": "Apply for student finance",
        "href": "https://www.student-finance.service.gov.uk/customer/home"
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
        "name": "Claim additional payments for teaching",
        "href": "https://www.claim-additional-teaching-payment.service.gov.uk/additional-payments/landing-page"
      },
      {
        "name": "Support for early career teachers",
        "href": "https://support-for-early-career-teachers.education.gov.uk"
      },
      {
        "name": "Find a lost teacher reference number (TRN)",
        "href": "https://find-a-lost-trn.education.gov.uk/start"
      },
      {
        "name": "Access your teaching qualifications",
        "href": "https://access-your-teaching-qualifications.education.gov.uk/"
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
        "name": "Employer Access",
        "href": "https://teacherservices.education.gov.uk/employeraccess/School/school"
      },
      {
        "name": "Appropriate Body Portal",
        "href": "https://teacherservices.education.gov.uk/appropriatebody/index/appropriatebody"
      }
    ]
  },
  "developYourPractice": {
    "teachers": [
      {
        "name": "Find a teaching school hub",
        "href": "https://find-a-teaching-school-hub.education.gov.uk"
      },
      {
        "name": "Register for a national professional qualification",
        "href": "https://register-national-professional-qualifications.education.gov.uk"
      },
      {
        "name": "Find school and college performance data in England",
        "href": "https://www.gov.uk/school-performance-tables"
      }
    ],
    "providers": [
      {
        "name": "Improve workload and wellbeing for school staff",
        "href": "https://improve-workload-and-wellbeing-for-school-staff.education.gov.uk/"
      }
    ]
  },
  "leaveTeaching": {
    "teachers": [
      {
        "name": "Teachers’ pensions",
        "href": "https://www.teacherspensions.co.uk"
      },
      {
        "name": "Appeal an induction outcome (email)"
      },
      {
        "name": "Apply for a prohibition order to be set aside (email)"
      }
    ],
    "providers": [
      {
        "name": "Refer serious misconduct by a teacher in England",
        "href": "https://refer-serious-misconduct.education.gov.uk/start"
      },
      {
        "name": "Teacher misconduct panel outcomes",
        "href": "https://www.gov.uk/search/all?parent=&keywords=panel+outcome+misconduct&level_one_taxon=&manual=&organisations%5B%5D=teaching-regulation-agency&organisations%5B%5D=national-college-for-teaching-and-leadership&public_timestamp%5Bfrom%5D=&public_timestamp%5Bto%5D=&order=updated-newest"
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
