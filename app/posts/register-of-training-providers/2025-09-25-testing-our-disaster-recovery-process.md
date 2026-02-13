---
title: Testing our disaster recovery process
description: We tested our disaster recovery procedures to make sure we can restore the service if we lose our database or data
date: 2025-09-25
tags:
  - disaster recovery
  - infrastructure
---

We ran a disaster recovery test to check that our procedures work and that we can restore the service quickly if something goes wrong.

## Why we did this

The register runs on Azure Kubernetes Service (AKS) with a PostgreSQL database. If we lose the database server or data becomes corrupted, we need to be confident we can recover the service.

Regular testing helps us:

- verify that our recovery procedures work as documented
- identify gaps in our processes before a real incident occurs
- make sure team members know what to do during an outage

## What disaster recovery covers

Our disaster recovery procedures cover 2 scenarios.

### Loss of the database server

If the database server is deleted or becomes unavailable, we can either:

- restore the deleted server using Azure's built-in recovery (available for up to 5 days after deletion)
- rebuild the server using Terraform and restore data from a nightly backup stored in Azure for 7 days

### Loss of data or data corruption

If data is corrupted or accidentally deleted, we can use Azure's point-in-time restore (PTR) to create a copy of the database from any point within the last 7 days, down to 1-second resolution.

This creates a separate server copy without affecting the live database. We can then validate the restored data and move it back to the live server.

## What we tested

We tested both scenarios in a non-production environment. For each test, we:

- froze the deployment pipeline by increasing the required GitHub approvers
- enabled the maintenance page so users saw a clear message during the outage
- deleted or corrupted the database to simulate the failure
- followed the documented recovery steps
- validated that the application worked correctly after recovery
- disabled the maintenance page and unfroze the pipeline

## What we found

The recovery procedures worked as documented. We also identified areas to improve for future tests and real incidents.

### Improvements for the next test

We need to add an item for the DfE Sign-in (DSI) temporary URL to our prerequisites checklist. During recovery, the service runs on a temporary URL. DSI needs to recognise this URL for authentication to work.

### Improvements for the longer term

We need to make sure our monitoring is in place and reliable. We use StatusCake and the Teacher Services status page to track service availability. Both need to be checked regularly to confirm they are working.

### Communications during incidents

We currently use Slack and the Slack incident bot for incident communications. We plan to continue with this approach until Microsoft Teams has a full replacement for incident management.

There are risks with this approach:

- we cannot add new users to Slack
- communication may become fragmented across Slack and Teams

To reduce this risk, we will coordinate across both platforms so that we have coverage for any gaps and the capacity to address issues quickly.

## What we will do next

We will:

- update the prerequisites checklist to include the DSI temporary URL
- review our monitoring setup to confirm StatusCake and the status page are reliable
- plan how to manage incident communications as we transition from Slack to Teams

*[AKS]: Azure Kubernetes Service
*[API]: application programming interface
*[DfE]: Department for Education
*[DSI]: DfE Sign-in
*[PTR]: point-in-time restore
