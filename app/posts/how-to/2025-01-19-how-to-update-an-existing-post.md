---
title: How to update an existing post
description: A guide to editing and updating previously published design history posts
date: 2025-01-19
related:
  items:
    - text: How to publish a design history post using the GitHub website
      href: /how-to/how-to-publish-a-design-history-post-using-the-github-website/
    - text: How to publish a design history post using a text editor
      href: /how-to/how-to-publish-a-design-history-post-using-a-text-editor/
---

Sometimes you need to update an existing design history post to fix errors, add missing information, or make clarifications. This guide explains how to do that.

## When to update a post

You might update a post to:

- fix typos or grammatical errors
- correct factual inaccuracies
- add missing screenshots or images
- update broken links
- add clarifications based on feedback

Avoid making significant content changes to old posts. If the design has evolved substantially, consider writing a new post that references the original.

## Updating using the GitHub website

### Step 1: Find the post

1. Go to the [repository on GitHub](https://github.com/DFE-Digital/bat-design-history/).
2. Navigate to `app/posts/{service-name}`.
3. Find the Markdown file for the post you want to edit.

### Step 2: Create a branch and edit

1. Select the file to open it.
2. Select the pencil icon to edit the file.
3. GitHub will prompt you to create a new branch. Give it a descriptive name, such as `fix-typo-in-post-name`.
4. Make your changes in the editor.
5. Scroll down and add a commit message describing your changes.
6. Select 'Propose changes'.

### Step 3: Create a pull request

1. GitHub will show you a comparison of your changes.
2. Select 'Create pull request'.
3. Add a title and description explaining what you changed and why.
4. Select 'Create pull request'.

### Step 4: Review and merge

1. Ask a team member to review your changes if needed.
2. Once approved, select 'Merge pull request'.
3. Your changes will be published automatically.

## Updating using a text editor

### Step 1: Pull the latest changes

Before editing, make sure you have the latest version of the repository:

1. Open GitHub Desktop.
2. Select 'Fetch origin' to check for updates.
3. If there are updates, select 'Pull origin'.

### Step 2: Create a branch

1. In GitHub Desktop, select 'Current Branch'.
2. Select 'New Branch'.
3. Name your branch descriptively, such as `update-post-name`.

### Step 3: Edit the file

1. Open the repository folder in Visual Studio Code.
2. Navigate to `app/posts/{service-name}`.
3. Open the Markdown file and make your changes.
4. Save the file.

### Step 4: Commit and push

1. Return to GitHub Desktop.
2. Review your changes in the 'Changes' tab.
3. Add a commit message describing what you changed.
4. Select 'Commit to {branch-name}'.
5. Select 'Push origin' or 'Publish branch'.

### Step 5: Create a pull request

1. Select 'Create Pull Request' in GitHub Desktop.
2. This opens GitHub in your browser.
3. Add a title and description.
4. Select 'Create pull request'.
5. Merge after review.

## Updating images

If you need to update images:

1. Replace the image file in the `app/images/{service-name}/{post-name}` folder with a new file using the same filename.
2. If adding new images, place them in the same folder and update the Markdown to reference them.
3. Commit and push your changes as described above.

## Best practices

- Keep commit messages clear and descriptive
- Make small, focused changes rather than large updates
- If making multiple unrelated changes, consider separate pull requests
- Check the deploy preview before merging to verify your changes look correct
