---
title: Rollover automation
description: Initial guidance on how rollover works and our new internal automation process
date: 2025-07-02
tags:
- Publish
- Rollover
- Find
screenshots:
  items:
    - text: Recruitment cycle list
      src: 1-recruitment-cycle-list.png
    - text: Add recruitment cycle
      src: 2-add-recruitment-cycle.png
    - text: Review rollover
      src: 3-review-rollover.png
    - text: Confirm rollover
      src: 3-confirm-rollover.png
    - text: Wait a hour
      src: 4-rollover-success-message.png
    - text: Next cycle available on support
      src: 5-next-cycle-available-on-support.png
    - text: Next cycle available on Publish
      src: 6-next-cycle-available-on-publish.png
---

## Purpose of this post

This post explains how we manage the annual rollover process for courses and providers.

Our internal teams handle the entire process, and this guide explains each step and how it appears in our internal systems.

The final phase is when providers see the changes, but all earlier steps are internal.

## What is 'rollover'?

Every year, we need to close out the current year’s courses and open up the new year’s courses.

This process is called **rollover**.

Rollover means:

- copying all existing provider and course information into the new recruitment cycle
- giving providers an amount of time to update their details for the new year
- switching the application to the new cycle, so new courses appear on Find & Apply

## Why did we automate rollover?

Before automation, rollover took a lot of time and effort.

Many team members had to do lots of manual steps, double-checking everything to avoid mistakes.

It was complicated and sometimes required developers to make changes just to start or finish the process.

Now with automation:

- anyone on our internal teams can start the rollover with just a few clicks
- the process is faster, simpler, and less likely to have errors
- we have better visibility and control at every step

## Who uses this process?

**Internal teams only:** Find & Publish team, Support team.

**Not for providers:** providers only see the final result, not the internal process.

## Overview of the rollover process

With the new changes, rollover happens in four main phases:

### 1. **Testing (QA) phase**

- We run rollover in a test environment first.
- This lets us check that everything copies over correctly before making the changes.

### 2. **Production rollover**

- We run rollover in our live system.
- All current provider and course data is copied to the new cycle.

### 3. **Support team review**

- After rollover, the Support team can review and make important updates (like accreditation).
- This is our chance to fix any issues before providers see the new cycle.

### 4. **Publish users (Providers)**

- The new cycle and courses become visible to providers in the Publish system.
- Providers can log in, see their courses in the new cycle, and make any updates they need.

## Step-by-step: how rollover works internally

### **Phases 1 & 2: internal interface**

With the recent changes, our Support and Publish & Find teams can manage recruitment cycles.

**On the recruitment cycles page you'll see:**

- year of the cycle
- start and end dates
- when the cycle is available for support users
- when the cycle is available for providers (Publish users)
- progress and status of rollover

![Screenshot of the recruitment cycle list page](1-recruitment-cycle-list.png)

**To start rollover:**

1. add a new cycle with the correct dates
2. click on the cycle to open its details page
3. click the **'Review rollover'** button
4. review the summary (number of providers, courses, accreditations to be copied)
5. confirm to start rollover

![Screenshot of adding a recruitment cycle](2-add-recruitment-cycle.png)

![Screenshot of review rollover](3-review-rollover.png)

![Screenshot of confirm rollover](3-confirm-rollover.png)

**After you start rollover:**

- the system copies all data, this usually takes about an hour
- you’ll see a confirmation message when it’s done

![Screenshot of adding a recruitment cycle](4-rollover-success-message.png)

### **Phase 3: Support Team Review**

Once rollover is complete:

- the new cycle data is available to support users (after the 'available for support users' date)
- support users can view and edit the new cycle’s courses and details
- this is the time to make any important changes - like new accreditations - before providers see the new cycle

![Screenshot of our Support interface](5-next-cycle-available-on-support.png)

### **Phase 4: Providers See the New Cycle**

When the 'available for publish users' date arrives:

- providers can see the new cycle
- providers log in and can switch between cycles to view and update their courses

![Screenshot of Publish interface](6-next-cycle-available-on-publish.png)

## Summary

Rollover is now automated and much easier for our internal teams.

All steps before the final phase are internal only.

This documentation is for internal use to help everyone understand our internal process.
