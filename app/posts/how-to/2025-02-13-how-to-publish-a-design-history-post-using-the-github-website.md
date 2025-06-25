---
title: How to publish a design history post using the GitHub website
description: A step-by-step guide for writing and publishing a post using GitHub’s web interface
date: 2025-02-13
---

This guide explains how to write and publish a design history post using GitHub’s web interface. It is part of a series on how we manage our design history website.

We store our design history website in a GitHub repository. The site is built with [Eleventy](https://www.11ty.dev/) and deployed to [Netlify](https://www.netlify.com/). Each post lives as a Markdown file, and we organise posts by service. Once a pull request is merged into the `main` branch, the site is automatically rebuilt and published.

This guide assumes you have access to the repository and permission to create branches and pull requests.

## Step 1: Create a branch

Start by creating a new branch for your post. You can do this on GitHub:

1. Go to the [repository homepage](https://github.com/DFE-Digital/bat-design-history/).

2. Select the branch selector dropdown (usually showing `main`).

    [![Screenshot showing where to find the branch selector dropdown](github-01.png "Screenshot showing where to find the branch selector dropdown")](github-01.png)

3. In the box labelled ‘Find or create a branch’, type a name for your new branch, following the pattern `your-branch-name`.

    [![Screenshot showing the branch selector dropdown](github-02.png "Screenshot showing the branch selector dropdown")](github-02.png)

4. Select ‘Create branch `your-branch-name` from main’ from the list of branches.

    [![Screenshot showing how to create a new branch](github-03.png "Screenshot showing how to create a new branch")](github-03.png)

    [![Screenshot showing the newly created branch](github-04.png "Screenshot showing the newly created branch")](github-04.png)

## Step 2: Navigate to the correct folder

We store design history posts in the `app/posts/{service-name}` folder. For example, if your post is about the Register of training providers, use:

```text
app/posts/register-of-training-providers
```

If your post includes images, place them in:

```text
app/images/register-of-training-providers/{post-name}
```

Use lowercase and hyphens for folder names.

[![Screenshot showing the post folder structure](github-05.png "Screenshot showing the post folder structure")](github-05.png)

## Step 3: Create or edit your Markdown file

In the appropriate `app/posts/{service-name}` folder:

1. Select ‘Add file > Create new file’ in the top-right.

    [![Screenshot showing where to find the create new file action](github-06.png "Screenshot showing where to find the create new file action")](github-06.png)

2. Name your file using the format `YYYY-MM-DD-post-title.md`, for example:
 `2025-02-13-how-to-publish-a-design-history-post.md`.

    [![Screenshot showing the unnamed new file](github-07.png "Screenshot showing the unnamed new file")](github-07.png)

    [![Screenshot showing the named new file](github-08.png "Screenshot showing the named new file")](github-08.png)

3. Add the front matter at the top of the file:

```md
---
title: How to publish a design history post using the GitHub website
description: A step-by-step guide for writing and publishing a post using GitHub’s web interface
date: 2025-02-13
---
```

[![Screenshot showing the front matter - meta data used to describe the file](github-09.png "Screenshot showing the front matter - meta data used to describe the file")](github-09.png)

## Step 4: Write your design history

Below the front matter, write your post using Markdown. Keep the writing clear and concise. Use headings to break up steps, and consider including code snippets or screenshots if helpful.

Refer to the [GOV.UK style guide](https://www.gov.uk/guidance/style-guide) when writing your content.

## Step 5: Commit your changes

Once you’re happy with the file:

1. Scroll to the top of the page and select the green ‘Commit changes...’ button.

    [![Screenshot showing where to find the ‘Commit changes…’ button](github-10.png "Screenshot showing where to find the ‘Commit changes…’ button")](github-10.png)

2. In the ‘Commit changes’ modal window, add a short but clear commit message (for example: Add post on how to publish a design history post). You can also add an extended description if needed.

    [![Screenshot showing the ‘Commit changes’ modal window](github-11.png "Screenshot showing the ‘Commit changes’ modal window")](github-11.png)

3. Ensure that ‘Commit directly to the `your-branch-name`’ branch is selected.

4. Press ‘Commit changes’.

    [![Screenshot showing the committed changes](github-12.png "Screenshot showing the committed changes")](github-12.png)

## Step 6: Create a pull request

To get your changes reviewed and merged:

1. Go to the ‘Pull requests’ tab.

2. Select the green ‘Compare & pull request’ button if GitHub shows your branch in a yellow banner, or the green ‘New pull request’ button.

    [![Screenshot showing where to find the ‘New pull request’ button](github-13.png "Screenshot showing where to find the ‘New pull request’ button")](github-13.png)

3. Select `main` as the base branch and your new branch as the compare branch.

    [![Screenshot showing where to find the base branch selector dropdown](github-14.png "Screenshot showing where to find the base branch selector dropdown")](github-14.png)

    [![Screenshot showing where to find the compare branch selector dropdown](github-15.png "Screenshot showing where to find the compare branch selector dropdown")](github-15.png)

    [![Screenshot showing where to find the ‘Compare pull request’ button](github-16.png "Screenshot showing where to find the ‘Compare pull request’ button")](github-16.png)

4. Add a clear title and description for your pull request.

    [![Screenshot showing where to enter a title and description for the pull request](github-17.png "Screenshot showing where to enter a title and description for the pull request")](github-17.png)

5. Select the green ‘Create pull request’ button.

Your pull request is now ready for review.

GitHub automatically creates a preview on Netlify, and Netlify adds a comment to the PR with a link to the preview.

[![Screenshot showing the new pull request and link to the preview app](github-18.png "Screenshot showing the new pull request and link to the preview app")](github-18.png)

## Step 7: Review your pull request

Ask a team member to review your changes. They might suggest edits or improvements. Update your branch as needed by editing the file directly on GitHub.

Once approved, your pull request will be ready to merge.

## Step 8: Merge your pull request

After approval:

1. Select the green ‘Merge pull request’ button at the bottom of the page.

2. Confirm the merge.

3. GitHub will delete your branch.

Your post will appear on the design history site within a few minutes, once the Netlify build completes.
