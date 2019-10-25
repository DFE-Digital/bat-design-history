---
layout: product
title: 'A complete design history for the Becoming a teacher services: Find and Apply'
breadcrumbs: false
---
<div class="govuk-grid-row">
  {% for item in collections["collection"] %}
  <section class="govuk-grid-column-one-third">
    <h2 class="govuk-heading-l govuk-!-font-size-27">
      <a href="{{ item.url }}">{{ item.data.title }}</a>
    </h2>
    <p class="govuk-body">{{ item.data.description }}</p>
  </section>
  {% endfor %}
</div>
