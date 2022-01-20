---
title: Preventing browser auto-fill
description: Our solution to disabling browser auto-fill
date: 2022-01-21
---

Many users’ browsers default to auto-fillilling user data - this is often useful as it can save them time. When a user gets to a ‘First name’ field, the browser will offer to auto-fill the user’s name.

## When auto-fill is not suitable

For Register, auto-fill is not relevant and it makes using Register harder. Our users are filling in their trainee’s details, not their own. We do not want the details of _other_ trainees or the Register user showing up when they’re adding a new trainee.

![A text input with auto-fill overlay](1-text-input-with-auto-fill.png)

Similarly, we use autocompletes to help users pick things like schools. If auto-fill shows up, it obscures the autocomplete and means you cannot use the autocomplete.

![An autocomplete obscured by an auto-fill overlay](2-autocomplete-with-auto-fill.png "Autocomplete made hard to use because of auto-fill")

## The official methods for disabling auto-fill do not work

The official way of turning off browser auto-fill is to set `autocomplete=”off”` on the input or the parent `form` element. Unfortunately, this isn’t respected by all browsers. One browser has decided to ignore the website author’s request - despite many examples where their auto-fill breaks services.

This leaves us, like many other projects, investigating hacks to work around the browsers.

## Things we tried

We tried various solutions, including:

* setting autcomplete attribute to `off`, `disabled`, `new-password`
* setting the autocomplete attribute to a non-standard value
* changing the name of the field

Ultimately, it seems that if browsers see the same combination of field name / type / autocomplete attribute repeatedly, they’ll start to try to auto-fill it.

## Our solution

Our current working solution is to randomise the name attribute on page load, and restore it before submitting it. As the name is randomised each time, browsers will treat it as a new field they’ve not seen before. 
We also set the autocomplete attribute to a non-standard value. In testing we found that `off` or any valid value would mean that this solution would not work.

### How to use

Include this javascript in your page. For each input you do not want auto-filled, add the attribute `data-js-disable-browser-autofill="on"`. You can also add this to the parent `form` to disable auto-fill for all inputs within a form.

We’ve been using this solution for 6 months, with good results. Users have not reported this auto-fill issue again since then - and it’s been more robust than any other solution we’ve found.

#### With the GOV.UK Design System

If you’re using the Design System macros, you can add the attribute like this:

{% raw %}

```jinja2
{{ govukInput({
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "event-name",
  name: "event-name",
  attributes: {
   "data-js-disable-browser-autofill": "on"
  }
}) }}
```

{% endraw %}

Or in a form like this:
{% raw %}

```html
  <form method="POST" data-js-disable-browser-autofill="on">
    {# Your inputs here #}
  </form>
```

{% endraw %}


## Potential downsides of our solution

### Accessibility

The solution relies on the `autocomplete` attribute being set to a non-standard value. This could be said to be a fail of WCAG 1.3.5: Identify Input Purpose. 

Our team has decided that this is an acceptable trade off — that we believe the impact of a non-standard value is minimal and the value of disabling auto-fill is greater. However, we’ve mentioned it in our accessibility statement.

### Javascript

The solution uses javascript as the simplest way to randomise the `name`, but users who do not receive our javascript may still see auto-fill.

If something were to go wrong with the javascript, the impact could be that data would not get successfully submitted to the server. However, the javascript is simple, and we have good monitoring in place to know if this were to happen.

## Alternate solutions

Instead of client-side javascript, a service could append a random string to the name on the server when sending the html. This would remove the javascript requirement, but would require more work in matching up the responses as they came in. For our service, we decided that the simpler solution of client-side javascript would meet our needs.
