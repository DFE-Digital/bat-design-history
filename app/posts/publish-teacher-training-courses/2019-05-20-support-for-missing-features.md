---
title: Support for missing features
description: Filling the gap left by unbuilt features.
date: 2019-05-20
---
Because of the UCAS transition timescales [we’ve shipped without required features](/publish-teacher-training-courses/shipped-for-transition).

## Make it easier to contact support

Because features are missing more people need to contact us.

We’ve found that users sometimes struggle to use our support links.

If they don’t have a mail client configured, or if it’s configured for the wrong email, users will struggle to contact us. We’ve alleviated this by editing the copy to show the full support email address, but this design adds a form which will be easier to use.

## Make features discoverable

Where a new feature was designed to be discoverable, people are looking for it – often in the right place – but we haven’t built it yet.

In the place where a feature should be there’s no action and no confirmation that they would have found it. This leads users to continue searching, some try another feature for the wrong purpose – ie the only one they can find.

In the design below we add a call to action where the feature would be – ‘Request change’ rather than ‘Change’. This would take users to a focused support page and automatically fill in some of the known context for them.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    { text: "Get support and guidance" },
    { text: "Request a change" },
    { text: "Request a change to this course" }
  ]
}) }}
