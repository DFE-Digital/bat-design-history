---
title: Accredited body – 5 February iteration
description: Remove one of the choices, and minimise the chance of error.
---
The original choice between we are the accredited body versus another organisation is not a valid question. For School Direct they will always need an accredited body. For SCITTs and universities, they are accredited.

Update the design so that:

* the original choice is removed, removing the opportunity for error
* there’s a default list of accredited bodies they’ve worked with before – minimising the chance of choosing the wrong organisation
* a new accredited provider can be used, if explicitly chosen

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {text: "Who is the accredited body?"},
    {text: "When there are no previous accredited bodies"},
    {text: "Old design"}
  ]
}) }}
