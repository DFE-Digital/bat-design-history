---
title: Removing providers from the register
description: We added a way for users to archive and delete providers from the register
date: 2025-03-09
tags:
  - providers
  - training providers
  - archiving
screenshots:
  items:
    - text: Provider list with ‘Archived providers’ filter
      src: provider-list.png
    - text: Provider details
      src: provider-details.png
    - text: Confirm archive provider
      src: provider--confirm-archive.png
    - text: Provider archived success message
      src: provider-details--provider-archived-success.png
    - text: Provider list showing archived providers
      src: provider-list--archived-providers-filter.png
    - text: Confirm restore provider
      src: provider--confirm-restore.png
    - text: Provider restored success message
      src: provider-details--provider-restored-success.png
    - text: Confirm delete provider
      src: provider--confirm-delete.png
    - text: Provider deleted success message
      src: provider-list--provider-deleted-success.png
---

We added a two-step process for users to archive (deactivate) and then explicitly delete (permanently remove) training providers from the register.

This approach offers several benefits for managing the register:

1. **Prevents accidental data loss**

    - users cannot immediately and irreversibly delete a provider, significantly reducing the risk of accidental deletion
    - it provides a safety net by requiring an intentional second action for permanent deletion

2. **Improves data quality and accuracy**

    - users have time to reconsider or verify before permanently deleting a provider, reducing mistakes and inaccuracies in the register
    - archived providers can quickly be restored, maintaining accuracy and flexibility

3. **Maintains a clear audit trail**

    - the archive stage allows providers to be visibly flagged inactive without losing their historical records
    - permanent deletion, separated as a distinct action, indicates intentional, irreversible removal—helpful for compliance and audits

<!-- 4. **Enhances compliance and risk management**

    - aligns with data retention policies and regulatory requirements, as data is preserved until explicitly removed
    - supports General Data Protection Regulations (GDPR) compliance by demonstrating an intentional data retention and deletion approach

5. **Encourages thoughtful user decisions**

    - the deliberate extra step encourages users to evaluate the consequences of deletion carefully
    - clarifies user actions, reducing uncertainty or ambiguity about provider status

6. **Improves user confidence and experience**

    - users have more control and understanding of the lifecycle of provider data
    - reduced anxiety around data removal since the decision can be reconsidered before the permanent step

7. **Simplifies recovery and error correction**

    - providers archived by mistake or prematurely can quickly be restored without involving complex recovery operations
    - reduces reliance on database backups or technical support for routine errors -->

## What we changed

We have added a way to:

- archive a provider
- restore a previously archived provider
- delete a previously archived provider
- show the ‘Archived’ status of the provider
- find archived providers on the provider list

## How it works

### Archiving providers

Users can archive providers that no longer participate in initial teacher training (ITT).

![Archive provider](provider-details--archive.png)

When users select the ‘Archive provider’ button on the provider details page, we show them a page to confirm they want to archive the provider. This confirmation step ensures they do not archive the provider by mistake.

We show a message on the confirmation page explaining what will happen when the user archives the provider:

> After archiving the provider, you will not be able to make changes to it.
>
> You can restore the provider at any time.

Selecting the green ‘Archive provider’ button will complete the archive process.

We show a success message on the provider details page saying ‘Provider archived’.

On the provider list and details pages, we include an ‘Archived’ label next to the provider's name.

We remove all change links and the ‘Add’ buttons on the accreditations, addresses, contacts, and partnership sections.

Users can restore archived providers at any time.

### Searching for archived providers

Users can find previously archived providers.

![Include archived providers filter](provider-list--filters.png "‘Include archived providers’ filter")

Archived providers are not shown on the provider list by default. However, users can find archived providers using the ‘Include archived providers’ filter.

### Restoring archived providers

Users can restore previously archived providers.

![Restore archived provider](provider-details--restore.png)

When users select the ‘Restore provider’ button, we show them a page to confirm they want to restore the provider. This confirmation step ensures they do not restore the provider by mistake.

We show a message on the confirmation page explaining what will happen when the user restores the provider:

> After restoring the provider, you will be able to make changes to it.

Users can archive a previously restored provider at any time.

### Deleting providers

Users can delete previously archived providers.

![Delete archived provider](provider-details--delete.png)

When users select the ‘Delete provider’ link, we show them a page to confirm they want to delete the provider. This confirmation step ensures they do not delete the provider by mistake.

We only soft delete providers. However, users cannot restore previously deleted providers. If users need to restore a deleted provider, they must contact support.

We show a warning on the confirmation page:

> Deleting a provider is permanent – you cannot undo it.

Selecting the red ‘Remove provider’ button will complete removing the provider from the service.

We show a success message on the provider list page saying ‘Provider deleted’.

## Further considerations

### Partnerships

We must consider what happens to partnerships when we archive or delete a provider.

When we archive or delete a provider, they cannot be added as a partner. We prevent these providers from appearing in the ‘Add partner’ flow autocomplete.

Archived providers remain on a provider’s partnership list if they have previously been partners. We flag the partner as archived.

When we remove (‘soft’ delete) a provider, we must cascade the delete to all relationships. For example, we should remove the partner relationships.

### ‘Soft’ versus ‘hard’ delete

We currently ‘soft’ delete providers, which means we can restore them later if needed. The support team and a developer would typically manage this process.

There are several things we need to consider:

- providing a way in the service to restore a previously deleted provider—within a given period—and avoiding the need for developer intervention
- purging the database of deleted providers – for example, hard deleting providers after a month of ‘soft’ deletion
- what happens if we restore a previously deleted provider? For example, do we restore the provider but not the partnerships?

*[ITT]: initial teacher training
*[GDPR]: General Data Protection Regulations
