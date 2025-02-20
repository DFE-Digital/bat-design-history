---
title: Publishing a design history using the GitHub website
description: A step-by-step guide to publishing a design history via the GitHub website
date: 2025-02-13
---

Contents:

- [Introduction](#introduction)
- [Step 1 - Branches](#step-1---branches)
- [Step 2 - Navigate to your desired folder](#step-2---navigate-to-your-desired-folder)
- [Step 3 - Creating or editing your design history file](#step-3---creating-or-editing-your-design-history-file)
- [Step 4 - Writing your design history](#step-4---writing-your-design-history)
- [Step 5 - Committing your changes](#step-5---committing-your-changes)
- [Step 6 - Opening a pull request](#step-6---opening-a-pull-request)
- [Step 7 - Reviewing your pull request](#step-7---reviewing-your-pull-request)
- [Step 8 - Merging your pull request](#step-8---merging-your-pull-request)

## Introduction

After you have drafted a design history, you need to publish it to the [Becoming a teacher (BAT) design history website](http://github.com/DFE-Digital/bat-design-history).

We use GitHub to manage the design history website. However, for non-technical users, GitHub can be intimidating, and it is unclear how to publish your design history.

This document outlines the steps for publishing your design history on the [BAT design history website](https://becoming-a-teacher.design-history.education.gov.uk/).

This guide assumes that you have nothing set up for GitHub. We will do everything via the GitHub website.

## Step 1 - Branches

> GitHub is an interface for a [version control](https://www.atlassian.com/git/tutorials/what-is-version-control) system called [git](https://git-scm.com/). These are independent systems and are not related to one another.
>
> When using [git](https://git-scm.com/), we make use of a concept called branching. You can visualise this as a tree. We have the trunk of our tree, which we usually call ‘main’, and then we have many branches that come from main, also known as feature branches. These will usually be named after what they’re for, for example,. `msp-update-support-changes`. As with most trees, we have one trunk and many branches.
>
> Now, we diverge from our tree metaphor because, unlike real trees, we merge our branches back into our trunk, which would be somewhat unsettling in real life, and then everything that branch contains becomes part of our trunk. This cycle repeats until the project is complete.
>
> ![Screenshot showing git branching](branching.png)
>
> For further reading, see [Git Branch](https://www.atlassian.com/git/tutorials/using-branches)

To begin or change our design history, we’ll need to create a new branch from which to work. This branch is a safe place where you cannot harm existing work.

1. Open [https://github.com/DFE-Digital/bat-design-history](https://github.com/DFE-Digital/bat-design-history)

2. At the top of the page, select the dropdown that says “**main ▼**”; this will open a new dialogue box.

    ![Screenshot showing the ‘main’ dropdown menu](main-branch-dropdown.png)

3. Next, we must create a new branch from which to work. Enter a concise name for what you’ll be adding and then select “**Create branch `your-concise-name` from main**”.

    ![Screenshot showing a text input with a branch name entered](create-branch.png)

4. Now you’ve created your branch, and GitHub has helpfully changed to this branch instead of ‘main’.

    ![Screenshot showing the ‘main’ dropdown menu text replaced with the branch name](branch-selector.png)

> Your branch will not disappear; you can leave and return to the site anytime. GitHub will preserve any changes you make within this branch. If you return to GitHub later and see that ‘main’ is the current branch (see step 2), you can switch to your branch by searching for it in the branch dialogue box (see step 3) and selecting its name.

## Step 2 - Navigate to your desired folder

Now that we’re on our branch, we must create our file. We will use ‘Manage school placements’ as the example service, but you should be able to adapt these steps to your requirements.

1. Select the "**app**" folder

    ![Screenshot showing the file and folder list on GitHub](click-on-app-folder.png)

2. Select the "**posts**" folder

    ![Screenshot highlighting the posts folder on GitHub](click-on-posts-folder.png)

3. Select the “**manage-school-placements**” folder - if you’re part of a different service, choose the folder appropriate to your service

    ![Screenshot highlighting the manage school placements folder on GitHub](click-on-manage-school-placements.png)

4. You are now in the correct place

    ![Screenshot showing the contents of the manage school placements folder on GitHub](correct-folder.png)

## Step 3 - Creating or editing your design history file

You are either creating a new or editing an existing design history at this stage. Please choose the relevant section for your purposes.

### Creating a new design history

1. Select “**Add file ▼**” - it’s on the top right of the page

    ![Screenshot showing the ‘add file’ dropdown menu](new-design-history-add-file.png)

2. Select “**Create new file**”

    ![Screenshot showing the ‘create new file’ option highlighted](new-design-history-create.png)

3. Name your file following the naming convention “**YYYY-MM-DD-your-file-name.md**”, for example “**2024-12-04-support-console-changes.md**”. The date should be the same as the date you used in the post.

    ![Screenshot showing where to name the file in the file location breadcrumb](new-design-history-naming-convention.png)

### Editing an existing design history

1. Select the filename you wish to edit

    ![Screenshot showing the newly created file in the folder list on GitHub](editing-design-history-filename.png)

2. Select the pencil ✏️ - it’s on the top right of the page

    ![Screenshot showing the ‘edit this file’ pencil on GitHub](editing-design-history-pencil.png)

## Step 4 - Writing your design history

> The Github interactive editor uses markdown and supports two ways to view your content: Edit and Preview.
> ![Screenshot showing the ‘edit’ file view on GitHub](github-edit-mode.png)
> ![Screenshot showing the ‘preview’ file view on GitHub](github-preview-mode.png)
> You must write your content in Markdown format to display it correctly on the design history website. Markdown resembles your formatting options in Microsoft Word or other popular text editing software. However, we do not have buttons to press in this editor, so we need to do it by hand instead.
>
> If you’re starting a brand-new document, we recommend using a template to help set up the general flow of your document.
>
> GitHub has an excellent, in-depth guide covering everything you can use Markdown. This guide will answer most, if not all, of your questions.
>
> [Basic writing and formatting syntax - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

After following the previous steps, you’ll now be in the interactive editor for GitHub. If you are not, then please go back to the start of [Step 3 - Creating or editing your design history file](#step-3---creating-or-editing-your-design-history-file)

1. Add the content for your design history

### Adding an image to your design history

1. Select the “**app**” folder

    ![Screenshot highlighting the app folder on GitHub](click-on-app-folder.png)

2. Select the “**images**” folder

    ![Screenshot highlighting the images folder on GitHub](images-folder.png)

3. Select the “**manage-school-placements**” folder - or your service's folder

    ![Screenshot highlighting the manage school placements images folder on GitHub](manage-school-placements-folder.png)

4. Create or locate the folder that matches the name of your design history file, for example, “**why-school-placements**”

    ![Screenshot highlighing the ‘why school placements’ image folder on GitHub](why-school-placements.png)

5. Select  “**Add file ▼**”

    ![Screenshot showing the ‘add file’ dropdown menu](new-design-history-add-file.png)

6. Select “**Upload files**”

    ![Screenshot showing the ‘upload files’ option highlighted](upload-files.png)

7. Drag your files into the box or select “**choose your files**” to select them from your computer

    ![Screenshot showing a ‘Drag your files here to add them to your repository’ message and a ‘Choose your files’ link](choose-files.png)

8. Add a helpful message and select “**Commit changes**”

    ![Screenshot showing a green button labelled ‘Commit changes’](commit-changes.png)

9. You can now add your image to your design history by using the following Markdown syntax:

    ```markdown
    ![Description of image](your-image-name.png)
    ```

    The image will not render in the GitHub preview but on the design history website.

## Step 5 - Committing your changes

> In git, a commit is a snapshot of work at a point in time. A commit can contain changes to one or many files, and you should make them regularly.
>
> A branch will have one or many commits that build a timeline of the work done towards your desired outcomes.
>
> Our design histories tend to be single files, so, likely, you will only have one commit per branch that you create, but you are always welcome to add more for larger pieces of work as this will help others review what you have done and can break the work down into logical breakpoints.
>
> You can read more about commits on Atlassian.
>
> [Git commit | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/saving-changes/git-commit)

1. Select “**Commit changes…**”

    ![Screenshot showing a grey button labelled ‘Cancel changes’ and a green button labelled ‘Commit changes’](commit-changes-button.png)

2. Write a helpful message describing what you have added to your commit and select “**Commit changes**”

    ![Screenshot showing the ‘Commit changes’ form, which includes a text input for a commit message and a text area for an extended description](commit-changes-confirm.png)

## Step 6 - Opening a pull request

> A pull request is a way for your colleagues to review the work you have done and suggest changes or give their approval before you publish your work to the design history website.

1. Navigate to the “**Pull requests**” tab

    ![Screenshot showing the ‘Pull requests’ tab](pull-requests-tab.png)

2. Select “**New pull request**” - it’s on the top right of the page

    ![Screenshot showing a green button labelled ‘New pull request’](new-pull-request.png)

3. Select “**compare: main**” and select your branch, for example, “**msp-update-support-changes**”

    ![Screenshot showing a list of branches](compare-main.png)

4. Select “**Create pull request**”

    ![Screenshot showing a message comparing changes between main and the user’s branch and a green button labelled ‘Create pull request’](create-pull-request.png)

5. Optionally edit the title for the pull request and add a description, then select “**Create pull request**”

    ![Screenshot showing the ‘Open a pull request’ form, which includes a text input for a pull request title and a text area for a description](edit-title.png)

## Step 7 - Reviewing your pull request

Ask your colleagues to review your pull request and add any comments they have. If they are happy with your work, then they can add an approval.

To add an approval:

1. Select “**Files changed**”

    ![Screenshot showing files changed in the pull request](files-changed.png)

2. Select the “**Review changes**” dropdown - it’s on the top right of the page

    ![Screenshot showing a green button labelled ‘Review changes’](review-changes.png)

3. Select “**Approve**” and then select “**Submit review**”

    ![Screenshot showing the ‘Finish your review’ form, which includes a text area for a comment and a list of radio buttons to describe your review including a comment, approve the pull request and request changes](approve.png)

## Step 8 - Merging your pull request

When you have enough approvals (the specifics of which will vary among your team), you can merge your work. Merging your pull request will update the design history website and make your design history visible to everyone.

1. Select “**Merge pull request**”

    ![Screenshot showing a green button labelled ‘Merge pull request’](merge.png)

    If you cannot select “**Merge pull request**”, you may need to ask someone with knowledge of GitHub to help. In general, these checks should not fail.

That’s it. You’ve now published your design history post on the BAT design history website.
