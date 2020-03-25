---
title: Asking candidates to nominate referees
date: 2020-02-17
tags:
- AN002
- AN003
- AN004
- AN005
- AN006
---

We decided to iterate the page where we ask candidates to nominate referees because we were getting unsuitable suggestions from them.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Hypotheses

### Clarifying guidance about the need for different referees

Clarifying the wording in the opening paragraph will help candidates understand that providers need a total of 2 references from different people.

If the guidance is clearer
Then candidates will know what's needed.

We’ll know this works when fewer candidates suggest the same person for both their references.

### Adding examples of suitable referees

We currently give examples of suitable referees.

If we give stronger examples of suitable referees (including one for self-employed people)
Then candidates will be more likely to suggest suitable referees.

We’ll know this works when more candidates suggest suitable referees.

### Adding information about character references

Providers prefer to get references from an official source, but in some cases, they'll accept character references.

If we explain this and ask candidates to contact providers if in doubt about the suitability of their referees
Then candidates are more likely to suggest suitable referees.

We’ll know this works when more candidates suggest suitable referees.

### Adding hint text about email addresses

If we add hint text explaining that providers prefer professional email addresses
Then we’ll be more likely to get suitable suggestions from candidates

We’ll know this works when fewer candidates enter personal email addresses.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Choosing your referees"
  }, {
    text: "Details of referee"
  }]
}) }}
