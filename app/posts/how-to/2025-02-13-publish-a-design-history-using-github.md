---
title: Publish a design history using GitHub
description: A step-by-step guide to publishing a design history on the Becoming a teacher design history website
date: 2025-02-13
related:
  items:
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

After a design history has been written it is uploaded to [bat-design-history](http://github.com/DFE-Digital/bat-design-history), for non-technical users, GitHub can be a little bit intimidating and not particularly clear in terms of what you need to do to publish your design history.

The purpose of this document is to outline the required steps in order to publish your design history on the [Becoming a teacher design history](https://becoming-a-teacher.design-history.education.gov.uk/) website.

The assumption for this guide is that you have absolutely nothing set up for git and as such we’ll be doing everything via the GitHub website.

## Step 1 - Branches

> GitHub is an interface for a [version control](https://www.atlassian.com/git/tutorials/what-is-version-control) system called [git](https://git-scm.com/), these are independent systems and are not related to one another.
>
> When using [git](https://git-scm.com/) we make use of a concept called branching, you can visualise this as a tree 🌲, we have the trunk of our tree which we usually call main, and then we have many branches that come from main, also known as feature branches, these will usually be named after what they’re for, e.g. `msp-support-changes`. As with most trees (some are weird 😬 ) we have one trunk and many branches.
>
> Now we diverge from our tree metaphor, because unlike real trees we merge our branches back into our trunk which would be somewhat unsettling in real life, and then everything that branch contains becomes part of our trunk and this cycle repeats ad infinitum, or until the the project is complete.
>
> ![branching.png](branching.png)
>
> For further reading see [Git Branch](https://www.atlassian.com/git/tutorials/using-branches)

To begin our design history, or make changes to an existing design history we’ll need to create a new branch to work from. This is a **safe place**, where we can’t do any harm to existing work.

1. Open [https://github.com/DFE-Digital/bat-design-history](https://github.com/DFE-Digital/bat-design-history)

2. At the top of the page, click on the dropdown that says "**main ▼**", this will open a new dialog box.

![main-branch-dropdown.png](main-branch-dropdown.png)

3. Next we need to create a new branch to work from, enter a concise name for what you’ll be adding and then click on "**Create branch `your-concise-name` from main**"

![create-branch.png](create-branch.png)

4. Now you’ve created your branch and GitHub has helpfully changed to this branch instead of main.

![branch-selector.png](branch-selector.png)

> Your branch won’t disappear, and you can leave the site and come back to it at any stage. Any changes you make within this branch will be preserved. If you come back to GitHub at a later date and see that main is the current branch (see step 2) then you can switch to your branch by searching for it in the branch dialog box (see step 3) and clicking on its name.

## Step 2 - Navigate to your desired folder

Now that we’re on our branch, we need to create our file. Given that this guide is written for the Manage School Placements team, I will list the steps relating to the relevant folders, but you should be able to adapt these steps to your own requirements magic wand

1. Click on the "**app**" folder

![click-on-app-folder.png](click-on-app-folder.png)

2. Click on the "**posts**" folder

![click-on-posts-folder.png](click-on-posts-folder.png)

3. Click on the "**manage-school-placements**" folder (if you’re part of a different service, this is where you diverge ⤴️ up have a safe trip!)

![click-on-manage-school-placements.png](click-on-manage-school-placements.png)

4. You are now in the correct place!

![correct-folder.png](correct-folder.png)

## Step 3 - Creating or editing your design history file

At this stage you are either creating a new design history, or editing an existing design history. Please choose relevant section for your purposes 💡

### Creating a new design history

1. Click on "**Add file ▼**" (it’s on the top right of the page)

![new-design-history-add-file.png](new-design-history-add-file.png)

2. Click on "**Create new file**"

![new-design-history-create.png](new-design-history-create.png)

3. Name your file following the naming convention "**YYYY-MM-DD-your-file-name.md**", for example "**2024-12-04-support-console-changes.md**"

![new-design-history-naming-convention.png](new-design-history-naming-convention.png)

### Editing an existing design history

1. Click on the filename you wish to edit

![editing-design-history-filename.png](editing-design-history-filename.png)

2. Click on the pencil ✏️ (it’s on the top right of the page)

![editing-design-history-pencil.png](editing-design-history-pencil.png)

## Step 4 - Writing your design history

> The Github interactive editor uses markdown and supports two ways to view your content, Edit and Preview.
>
> ![github-edit-mode.png](github-edit-mode.png)
> ![github-preview-mode.png](github-preview-mode.png)
>
> Your content must be written in the Markdown format to display correctly on the Design history website, this is very similar to your formatting options in Microsoft Word or other popular text editing software, however we don’t have buttons that we can press in this editor so we need to do it by hand instead.
>
> If you’re starting a brand-new document then I’d strongly recommend pasting in a template when you start to help set up the general flow of your document.
>
> There is an excellent in-depth guide to everything you can use Markdown for in GitHub, and you’ll find that this will answer most, if not all, of your questions.
>
> [Basic writing and formatting syntax - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

After following the previous steps you’ll now be in the interactive editor for GitHub, if you are not then please go back to the start of [Step 3 - Creating or editing your design history file](#step-3---creating-or-editing-your-design-history-file)

1. Add the content for your design history

### Adding an image to your design history

1. Click on the "**app**" folder

![click-on-app-folder.png](click-on-app-folder.png)

2. Click on the "**images**" folder

![images-folder.png](images-folder.png)

3. Click on the "**manage-school-placements**" folder (or your service's folder)

![manage-school-placements-folder.png](manage-school-placements-folder.png)

4. Create or locate the folder that matches the name of your design history file, e.g. "**why-school-placements**"

![why-school-placements.png](why-school-placements.png)

5. Click on  "**Add file ▼**"

![new-design-history-add-file.png](new-design-history-add-file.png)

6. Click on "**Upload files**"

![upload-files.png](upload-files.png)

7. Drag your files into the box or click on "**choose your files**" to select them from your computer

![choose-files.png](choose-files.png)

8. Add a helpful message and click on "**Commit changes**"

![commit-changes.png](commit-changes.png)

9. You can now add your image to your design history by using the following Markdown syntax:

```markdown
![Description of image](your-image-name.png)
```

> The image will not render in the Github preview, but it will render on the Design history website.

## Step 5 - Committing your changes

> In git, a commit is a snapshot of work at a point of time. A commit can contain changes to one or many files and should be made regularly.
>
> A branch will have one or many commits that build a timeline of the work that has been done towards your desire outcomes.
>
> Our design histories tend to be single files, so it is likely you will only have one commit per branch that you create, but you are always welcome to add more for larger pieces of work as this will help others review what you have done and can break the work down into logical breakpoints.
>
> You can read more about commits on Atlassian!
>
> [Git commit | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/saving-changes/git-commit)

1. Click on "**Commit changes…**"

![commit-changes-button.png](commit-changes-button.png)

2. Write a helpful message describing what you have added in your commit and click on "**Commit changes**"

![commit-changes-confirm.png](commit-changes-confirm.png)

## Step 6 - Opening a pull request

> A pull request is a way for your colleagues to review the work you have done and suggest changes or give their approval before you publish your work to the Design history website.

1. Navigate to the "**Pull requests**" tab

![pull-requests-tab.png](pull-requests-tab.png)

2. Click on "**New pull request**" (it’s on the top right of the page)

![new-pull-request.png](new-pull-request.png)

3. Click on "**compare: main**" and select your branch, e.g. "**msp-update-support-changes**"

![compare-main.png](compare-main.png)

4. Click on "**Create pull request**"

![create-pull-request.png](create-pull-request.png)

5. Optionally edit the title for the pull request and add a description, the click on "**Create pull request**"

![edit-title.png](edit-title.png)

## Step 7 - Reviewing your pull request

1. Ask your colleagues to review your pull request and add any comments they have. If they are happy with your work then they can add an approval.

To add an approval:

1. Click on "**Files changed**"

![files-changed.png](files-changed.png)

2. Click on the "**Review changes**" dropdown (it’s on the top right of the page)

![review-changes.png](review-changes.png)

3. Click on "**Approve**" and then click on "**Submit review**"

![approve.png](approve.png)

## Step 8 - Merging your pull request

When you have enough approvals (the specifics of this will vary on your team) you can now merge your work which will update the Design history website and make your design history visible to everyone 🎉

1. Click on "**Merge pull request**"

![merge.png](merge.png)

> If you cannot click on "**Merge pull request**" you may need to ask someone technical to take a look, in general these checks shouldn’t fail.

That’s it! You’ve now published your design history to the Becoming a teacher design history website! 🎉
