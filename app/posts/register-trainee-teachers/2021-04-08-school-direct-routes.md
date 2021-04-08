---
title: Adding school direct routes
description: Expanding the routes we support
date: 2021-04-08
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{% from "figure/macro.njk" import appFigure with context %}

We’re continuing to expand our manual data entry for new training routes, now adding School direct. 

School direct represents two similar routes:

* School direct (salaried)
* School direct (fee funded)

The school direct routes are similar to our previous routes, especially Provider led (postgrad). The main new addition is asking about schools - their lead school for fee funded, and their lead and employing schools for salaried.

For the moment we’ve included these new data fields as part of the task list section that collects the trainee’s start date and ID. This is broadly a collection of training details specific to the trainee, whereas  the other section ‘course details’ is generic details about the course they’re on. 

We’re worried this ‘training details’ section is too generic - and will look at addressing this in the future.

{{ appFigure({
  image: {
    file: "route-selection.png",
    alt: "Selecting one of the new routes"
  },
  title: "Selecting one of the new routes"
}) }}

{{ appFigure({
  image: {
    file: "lead-school.png",
    alt: "Asking for lead school"
  },
  title: "Asking for lead school"
}) }}

It’s not uncommon that a trainee’s employing school is also their lead school - it happens about 7% of the time in DTTP. Checking this checkbox will skip the employing school page if the same school is used for both.

{{ appFigure({
  image: {
    file: "employing-school.png",
    alt: "Asking for employing school"
  },
  title: "Asking for employing school"
}) }}

{{ appFigure({
  image: {
    file: "training-details-confirmation.png",
    
    alt: "Confirming the school details"
  },
  title: "Confirming the school details"
}) }}
