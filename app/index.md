---
layout: product
title: 'A complete design history for the Becoming a teacher services: Find and Apply'
breadcrumbs: false
---
<div class="govuk-grid-row">
  {% for item in collections["product"] | sort("data.order") %}
  <section class="govuk-grid-column-one-half govuk-!-margin-bottom-6">
    <h2 class="govuk-heading-m govuk-!-margin-bottom-1">
      <a href="{{ item.url }}">{{ item.data.title }}</a>
    </h2>
    <p class="govuk-body">{{ item.data.description }}</p>
  </section>
  {% endfor %}
</div>
