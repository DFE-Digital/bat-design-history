---
title: Updating our support user interface
description: Improving the tools and interface our support staff use to administer Register
date: 2022-09-02
---

# Updating our support user interface


We’ve recently done some design work to improve the interface our support staff use to administer Register.

The current interface has been added to bits and pieces as a time as we needed a feature – this means it has a confusing user interface and doesn’t always have features we need to support Register or perform common tasks.

To align with other services in the Becoming a teacher service line, we’ll be calling this section ‘Support’ rather than ‘System admin’.

![A screenshot of the existing Register support interface](1.existing-support-ui.png)

## New interface

We won’t build this new interface all in one go. We expect to use it for inspiration as we work on specific improvements and as something to aim towards over time.

### Improved navigation

![Screenshot showing the revised support navigation. Rather than two sets of navigation links, there is now a single row.](2.navigation.png)

The first change is to have a single navigation bar when signed in as a support user - instead of two competing UIs we currently have. This should make it easier to navigate to the relevant sections and introduce more of a distinction between the views regular users have and the views admins have.

### Support index page

![Screenshot of new support home page. There are several tiles on the page each showing a metric and count, such as number of users, or number of trainees.](3.support-index.png)

Support index is a home page which can contain useful stats and links to common items.

### Users index

![Screenshot of a page for listing all registered users. On the left are some checkboxes for selecting organisation type. On the right are a list of users and a autocomplete search box.](4.users-index.png)

The users index lists all users in the service, with filters to filter by type, and an autocomplete to search for users using their name, organisation, or email address.

![A screenshot of the autocomplete with a text search of "jane". There is one result for a user.](5.users-autocomplete.png)

The autocomplete has been enhanced to directly go to the user when one is selected.

### User page

![A screenshot of page showing details about a user. The page has several tables of data, some of which that have change links.](6.user-page.png)

The user page shows information about Register users, with links to change relevant fields. It also shows the current organisations the user is connected to with the ability to add the user to additional organisations, remove them, or change their access rights.

#### Adding a user to an organisation

![Screenshot of a page for adding a user to an organisation. The page asks the user for the organisation name and ](7.adding-user-to-organisation.png)

When adding a user to an organisation, users get an autocomplete of available organisations and additional questions about the user’s role.

We have yet to build granular user permissions in Register, but this design explores how we might approach it when we do.

The new designs also support starting with an organisation and choosing to add a user to it. Which approach to use might vary depending on the task - if a support agent has several users to add to one org, they might start with that org. If they have an existing user they need to add to a second org, it might make more sense to start with the user.

#### Changing a user’s access to an organisation

![Screenshot of a page for editing a user’s access to an organisation. There are radio options for role type, and to remove access or archive the user.](8.user-organisation-access.png)

For each organisation a user has access to, we can have an edit page to manage that relationship. Initially this would likely just be to remove access to an org - but in the future could control the user’s permissions at that organisation.

#### Confirming a user’s removal from an organisation

![Screenshot of a confirmation page before a user is removed from an organisation.](9.removing-user-from-organisation.png)

Many actions in our existing support interface are not confirmed - we’ll now make sure to confirm actions support staff take.

### Organisation index

![An index page for showing all accrediting providers. There are filters on the left, and a list of organisations on the right.](10.organisation-index.png)

Like our users index, the organisation index shows all accrediting providers, with filters for type and an autocomplete to search. 

### Organisation page

![Screenshot of a page for a single organisation. There are several tables to show information like organisation name, type, and various code identifiers.](11.organisation-page.png)

The organisation page shows all information about an organisation with links to perform actions on them.

#### Inviting a user to an organisation

![A form for adding a user to an organisation. There’s an input for email address, and radios for selecting role at the organisation.](12.adding-a-user-to-an-organisation.png)

### Schools index

![An index page showing all schools in Register. There are filters on the left for showing just lead schools, and a list of schools wiht autocomplete on the right.](13.schools-index.png)

Schools in Register are handled differently than accrediting providers, so they are shown in their own section. Most data in this section comes from the Get Information about Schools service.

As lead schools have access to register, we can have a filter for them, and add a tag to their records.

### School page

![A page for showing information about a school. For lead schools it also shows users with access to that lead school.](14.school-page.png)

### Remaining sections

The final data and settings sections are places where we can include information about the various data sets Register includes (lists of subjects, lists of degree types), and configuration about the service.

## Further work

We’ll now work through these changes and break them down in to separate stories we can deliver iteratively. Our focus will be on ones that reduce the burden on support staff during the Census period.
