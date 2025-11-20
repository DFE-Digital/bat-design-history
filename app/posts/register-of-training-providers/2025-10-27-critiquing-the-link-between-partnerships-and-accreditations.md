---
title: Critiquing the link between partnerships and accreditations
description: We ran two structured design critiques on our new approach that tied provider partnerships to specific accreditations
date: 2025-10-27
tags:
  - partnerships
  - accreditations
  - providers
  - design critique
related:
  items:
    - text: Linking partnerships with accreditations
      href: /register-of-training-providers/linking-partnerships-with-accreditations/
    - text: Logging changes to a partnership’s linked accreditations
      href: /register-of-training-providers/logging-changes-to-a-partnerships-linked-accreditations/
    - text: Preventing accreditations from being deleted if linked to a partnership
      href: /register-of-training-providers/preventing-accreditations-from-being-deleted-if-linked-to-a-partnership/
    - text: Running design critiques to improve the service
      href: /register-of-training-providers/running-design-critiques-to-improve-the-service/
    - text: Iterating the service following design critiques
      href: /register-of-training-providers/iterating-the-service-following-design-critiques/
---

Recently, we designed a system to link provider partnerships to accreditations.

We did this work to:

- trace a partnership back to a legal basis – We wanted to show the accreditation that legitimises a partnership and to make that link explicit in the data

- improve downstream data quality – Services like Publish teacher training courses (Publish) and Apply for teacher training (Apply) could, in theory, use the accreditation link to validate relationships

- reduce ambiguity in reports – We expected cleaner reporting on active partners per accreditation and better historical insights

After completing the design phase, we conducted two design critiques to review the key user journeys and identify opportunities for improvement. These sessions provided us with valuable feedback on interaction patterns, content design, and service logic.

Each session helped us refine the design and surface opportunities for further iteration.

## What we did

As part of the work, we:

- created a data model where a partnership could not exist without a related provider accreditation
- prototyped the setup and edit flows so users picked an accreditation before saving a partnership
- added revision and activity log entries that referenced both the partnership and the chosen accreditation
- walked end-to-end examples across adding, editing and retiring partnerships, including cases where accreditations change or lapse

## What we learned

### Cognitive load at the point of entry

Requiring users to choose an accreditation first felt like an internal data concern surfacing in the user interface; participants feared mis-selection and incomplete tasks.

### Messy real-world fit

Partnerships often span multiple programmes, such as initial teacher training (ITT), over time.

### Edge cases multiplied

Accreditations can change, end, or be revised. Tying partnerships tightly to them raised questions about reparenting, back-dating, and partial overlaps.

### Limited near-term value downstream

Participants were unsure that the extra structure would unlock immediate wins in Publish, Find teacher training courses (Find) or Apply without further integration work.

## Decision

We will not proceed with “partnership must link to accreditation” as a hard requirement. Instead, we will pivot to the simpler provider partnership model that links an accredited provider to a training partner.

We will also explore how to associate partnerships with academic years to support reporting and history without forcing a hard dependency on accreditations.

## Alternative approaches to explore

| Option | What it is | Pros | Cons | Early view |
| --- | --- | --- | --- | --- |
| A. **Accredited provider ↔ training partner** *(original model)* | Simple many-to-many between accredited providers and partners. | Fast to understand; easy to enter; fewer edge cases; resilient when accreditations change. | We lose an explicit legal-basis link; some nuance moves to guidance and audits. | **Preferred baseline** |
| B. **A + optional academic year link** | Partnerships carry one or more academic year associations. | Supports time-boxed reporting; easier history; keeps UI simple. | Year boundaries can still be fuzzy; back-filling may be needed. | **Likely next step** |
| C. **A + optional accreditation reference** | Keep simple partnerships but allow an optional accreditation tag. | Lets expert users add provenance when useful; does not block the task. | Optional fields can decay in quality; needs good hints and validation. | **Worth prototyping** |
| D. **Accredited provider ↔ partner tied to specific accreditation** *(current rejected design)* | Partnership cannot exist without an accreditation. | Strong provenance; strong audit story. | High cognitive load; many edge cases; blocks core tasks. | **Do not proceed** |
| E. **Provider ↔ provider (no role) + optional context** | Any provider can link to any other with a “relationship” label. | Maximum flexibility; reusable pattern. | Too vague for policy needs; risks data sprawl. | **Not suitable** |
| F. **Provider ↔ provider per academic year** | Relationships exist only inside a named year. | Clean per-year reporting; makes change explicit. | Operationally heavy; creates noisy churn in data. | **Unlikely** |

## Design principles we will follow

Keep the main task simple: record a partnership quickly with minimal required fields.

Make provenance additive: allow users to enrich records with years or references without blocking them.

Favour history over tight coupling: model time and revisions so the system tells a clear story without complex dependencies.

Protect data quality with guardrails: use validation, hints and checks instead of forcing complex structures.

## What we will prototype next

1. Baseline partnership flow – Create and edit partnerships without needing an accreditation. Keep it fast and forgiving.

2. Add academic year associations – Let users add one or more academic years during create or edit. Provide defaults and helper copy.

3. Optional accreditation reference – Offer a searchable field to attach an accreditation when users have it to hand. Validate and log it.

4. History and logs – Ensure the activity log and revision tables show when a partnership started, which years it covers, and any accreditation references added or removed.
