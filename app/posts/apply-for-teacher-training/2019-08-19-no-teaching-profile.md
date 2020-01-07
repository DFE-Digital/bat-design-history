---
title: Removing the teaching profile
description: Why we removed it, and the alternative.
---
[In the July 2019 prototype](https://apply-beta-prototype-v1.herokuapp.com/) ([screenshots](/apply-for-teacher-training/apply-june-2019/personal-details)) we tested a version of the application where course choice was separated from your teaching profile. Your teaching profile was a shareable or reusable profile that would be pulled into each application.

In the next design iteration we brought course choice and each section together beneath the Application heading.

## Why did we remove the teaching profile?

The profile is a useful concept that can be used to make repeat applications easier. But users needed to understand the purpose of a teaching profile to complete their first application. The benefits of the profile are only realised after the first application.

Arguably, and this is a reckon, a user arriving at Apply for the first time will be looking to make an application, not to create a profile.

Tailoring and reuse via a profile presented some complexities:

* which parts of a profile can be tailored?
* if I need to tailor something for a provider, where do I go to do that?
* if I have tailored some parts, then edit my profile, how do those changes cascade?
* if I change my profile after submitting an application, does that affect my submitted application? (No, but we might need to communicate that)

If new applications can use a previous application as a starting point, candidates get the benefit of reuse without needing to understand profiles and the whole application becomes tailorable.

## An alternative to a teaching profile

We removed the profile and moved course choice into each application, allowing a maximum of 3 courses per application.

This means everything you need to submit your first application is kept together and the path to application submission is linear.

Once an application is submitted a new application can be started, where new course choices are made and your initial application can be edited. Initially only one draft application will be allowed – we need to see how this tests. It might stop users from shortlisting using Apply.

This alternative creates a simpler application process that is also easier to build as an MVP for the upcoming pilots.

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [
    {text: "Application with courses"},
    {text: "Old dashboard"},
    {text: "Old personal teaching profile"}
  ]
}) }}
