---
layout: product
title: Becoming a teacher design history
titleHtml: Becoming a teacher design&nbsp;history
description: A history of the designs for the Find and Apply services
breadcrumbs: false
---
<div class="govuk-grid-row">
  {% for item in collections["product"] | sort("data.order") %}
    {% if loop.index == 1 %}
      <div class="govuk-grid-column-full govuk-!-margin-top-3">
        <h2 class="govuk-heading-l">Find</h2>
      </div>
    {% elseif loop.index == 3 %}
      <div class="govuk-grid-column-full govuk-!-margin-top-3">
        <h2 class="govuk-heading-l">Apply</h2>
      </div>
    {% endif %}
    <section class="govuk-grid-column-one-half govuk-!-margin-bottom-6">
      <h3 class="govuk-heading-m govuk-!-margin-bottom-1">
        <a href="{{ item.url }}">{{ item.data.title }}</a>
      </h3>
      <p class="govuk-body">{{ item.data.description }}</p>
    </section>
  {% endfor %}
</div>
