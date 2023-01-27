---
title: Improving the HTML page titles on the course results page
description: We updated the HTML page titles on the course results page to make them more accessible
date: 2022-12-21
related:
  items:
    - text: Updating the service to improve accessibility
    - href: /find-teacher-training/updating-the-service-to-improve-accessibility/
---

Following a recent review of Find postgraduate teacher training (Find), we found that the HTML page titles on the course results page needed to be clearer.

## What we changed

All page titles (meta titles) should be unique, include the heading and service name, and end with GOV.UK.

We updated the HTML page titles on the course results page to include:

- the number of courses found
- the subjects chosen
- the location - if the search is by city, town or postcode, or across England
- the provider name - if the search is by school university or other training provider
- the service name - ‘Find postgraduate teacher training’
- ‘GOV.UK’ at the end of the title

### Find courses by city, town or postcode

```html
<title>
172 biology courses in Oxford - Find postgraduate teacher training - GOV.UK
</title>
```

```html
<title>
551 biology, chemistry and physics courses in Oxford - Find postgraduate teacher training - GOV.UK
</title>
```

### Find courses across England

```html
<title>
644 biology courses in England - Find postgraduate teacher training - GOV.UK
</title>
```

```html
<title>
2,011 biology, chemistry and physics courses in England - Find postgraduate teacher training - GOV.UK
</title>
```

### Find courses by school, university or other training provider

```html
<title>
5 biology courses from UCL, University College London - Find postgraduate teacher training - GOV.UK
</title>
```

```html
<title>
16 biology, chemistry and physics courses from UCL, University College London - Find postgraduate teacher training - GOV.UK
</title>
```

*[HTML]: Hypertext markup language
