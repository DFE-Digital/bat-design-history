---
title: How to publish a design history post using a text editor
description: A step-by-step guide for writing and publishing a post using Visual Studio Code and GitHub Desktop
date: 2025-02-17
related:
  items:
    - text: How to write Markdown
      href: /how-to/how-to-write-markdown/
    - text: Why we write design histories
      href: /how-to/why-we-write-design-histories/
    - text: What to include in a design history post
      href: /how-to/what-to-include-in-a-design-history-post/
    - text: How to publish a design history post using the GitHub website
      href: /how-to-publish-a-design-history-post-using-the-github-website/
---

We publish our design history on [GitHub](https://www.github.com/) and host it using [Netlify](https://www.netlify.com/). This post shows how to write and publish a new post using a local text editor (like [Visual Studio Code](https://code.visualstudio.com/)) and [GitHub Desktop](https://github.com/apps/desktop).

We use Visual Studio Code for prototyping and content editing because it’s approved by the Department for Education, free, easy to use, and works well with GitHub Desktop. You can use a different text editor if you prefer.

## Step 1: Clone the repository

If you have not already, [clone the design history repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local machine using GitHub Desktop:

1. Open GitHub Desktop.

    [![Screenshot showing GitHub Desktop](github-desktop-01.png "Screenshot showing GItHub Desktop")](github-desktop-01.png)

2. Select ‘File > Clone Repository’.

3. Paste the repository URL or choose it from the list.

    [![Screenshot showing the ‘Clone a Repository’ modal window in GitHub Desktop](github-desktop-02.png "Screenshot showing the ‘Clone a Repository’ modal window in GitHub Desktop")](github-desktop-02.png)

4. Select ‘Clone’.

    Selecting ‘clone’ creates a local copy of the design history site on your machine.

    You will see ‘Current Repository bat-design-history` in the top-left corner.

    [![Screenshot showing the cloned ‘bat-design-history’ repository in GitHub Desktop](github-desktop-03.png "Screenshot showing the cloned ‘bat-design-history’ repository in GitHub Desktop")](github-desktop-03.png)

## Step 2: Create a new branch

Creating a branch helps keep your changes separate from the live version until you are ready to publish them.

1. In GitHub Desktop, select ‘Current Branch `main` > New Branch’.

    [![Screenshot showing the ‘Current Branch `main` dropdown menu in GitHub Desktop](github-desktop-04.png "Screenshot showing the ‘Current Branch `main` dropdown menu in GitHub Desktop")](github-desktop-04.png)

2. Name your branch something descriptive, like `how-to-publish-using-a-text-editor`.

    [![Screenshot showing ‘Create a Branch’ modal window in GitHub Desktop](github-desktop-05.png "Screenshot showing ‘Create a Branch’ modal window in GitHub Desktop")](github-desktop-05.png)

3. Select ‘Create Branch’.

    Selecting ‘create branch’ creates a local branch of the design history site on your machine.

    You will see ‘Current Branch `your-branch-name`’ at the top of the window next to details of your current repository.

    [![Screenshot showing GitHub Desktop with the new branch](github-desktop-06.png "Screenshot showing GitHub Desktop with the new branch")](github-desktop-06.png)

## Step 3: Open the folder in Visual Studio Code

1. Open Visual Studio Code.

    [![Screenshot showing Visual Studio Code](visual-studio-code-01.png "Screenshot showing Visual Studio Code")](visual-studio-code-01.png)

2. Select ‘File > Open Folder...’.

    [![Screenshot showing the open folder dialogue in Visual Studio Code](visual-studio-code-02.png "Screenshot showing the open folder dialogue in Visual Studio Code")](visual-studio-code-02.png)

3. Choose the folder you cloned in step 1.

    [![Screenshot showing the open folder dialogue in Visual Studio Code with the chosen folder](visual-studio-code-03.png "Screenshot showing the open folder dialogue in Visual Studio Code with the chosen folder")](visual-studio-code-03.png)

You will now be able to view and edit all the project files in your editor.

## Step 4: Navigate to the correct folder

Design history content lives in the `app/posts/{service-name}` folder. Images for the post go in `app/images/{service-name}/{post-name}`.

1. In Visual Studio Code, find and open the appropriate service folder inside `app/posts`.

    [![Screenshot showing Visual Studio Code with the chosen posts folder](visual-studio-code-04.png "Screenshot showing Visual Studio Code with the chosen posts folder")](visual-studio-code-04.png)

2. If you are adding a new post, create a new Markdown (`.md`) file (for example: `2025-06-26-how-to-publish-a-design-history-post-using-a-text-editor.md`).

    [![Screenshot showing Visual Studio Code with the new post file](visual-studio-code-05.png "Screenshot showing Visual Studio Code with the new post file")](visual-studio-code-05.png)

3. If you are editing an existing post, open the relevant file.

## Step 5: Write your post

Write your design history post in Markdown.

You can follow the GOV.UK style guide and look at previous posts for formatting examples.

Make sure to include:

- a title and description at the top of the file
- relevant headings, dates, screenshots or diagrams
- links to research or documentation, where useful

You can use the Markdown preview feature in Visual Studio Code (Cmd+Shift+V or Ctrl+Shift+V) to check how your post will appear.

## Step 6: Add images (optional)

If your post includes images, you will need to put them into a separate folder. If the post is new, you will likely need to create a new folder:

1. Save them in `app/images/{service-name}/{post-name}`.

    [![Screenshot showing Visual Studio Code with the new folder for post images](visual-studio-code-06.png "Screenshot showing Visual Studio Code with the new folder for post images")](visual-studio-code-06.png)

2. Reference them using just the image name, for example: `![Screenshot of Visual Studio Code](visual-studio-code-01.png "Screenshot of Visual Studio Code")`.

    [![Screenshot showing Visual Studio Code with a post containing image references](visual-studio-code-07.png "Screenshot showing Visual Studio Code with a post containing image references")](visual-studio-code-07.png)

## Step 7: Save and commit your changes

Once you have written your post and saved your changes:

1. Go back to GitHub Desktop.

2. You should see a list of changed files in the ‘Changes’ tab.

    [![Screenshot showing GitHub Desktop with a list of changes ready to be committed](github-desktop-07.png "Screenshot showing GitHub Desktop with a list of changes ready to be committed")](github-desktop-07.png)

3. Add a short but clear commit message, such as ‘Add post about publishing using a text editor.’

    [![Screenshot showing GitHub Desktop with a clear commit message](github-desktop-08.png "Screenshot showing GitHub Desktop with a clear commit message")](github-desktop-08.png)

4. Select the blue ‘Commit files to `your-branch-name`’ button.

    [![Screenshot showing GitHub Desktop with the blue commit button enabled](github-desktop-09.png "Screenshot showing GitHub Desktop with the blue commit button enabled")](github-desktop-09.png)

## Step 8: Push your changes

Push your local changes to GitHub:

1. In GitHub Desktop, if you have not already published the branch, select ‘Publish branch’ at the top of the window.

    [![Screenshot showing GitHub Desktop showing the ‘Publish branch’ button](github-desktop-10.png)](github-desktop-10.png "Screenshot showing GitHub Desktop showing the ‘Publish branch’ button")

2. Select the blue ‘Push origin’ button or at the top of the window.

    [![Screenshot showing GitHub Desktop with the blue ‘Push origin’ button](github-desktop-11.png)](github-desktop-11.png)

3. This uploads your branch to the remote GitHub repository.

## Step 9: Create a pull request

1. In GitHub Desktop, select the blue ‘Create Pull Request’ button.

    [![Screenshot showing GitHub Desktop with the blue ‘Create Pull Request’ button](github-desktop-12.png)](github-desktop-12.png "Screenshot showing GitHub Desktop with the blue ‘Create Pull Request’ button")

2. This opens GitHub in your browser.

    [![Screenshot showing the ‘Open a pull request’ on GitHub](github-01.png)](github-01.png "Screenshot showing the ‘Open a pull request’ on GitHub")

3. Add a title and description for the pull request.

    [![Screenshot showing the pull request’s title and description on GitHub](github-02.png)](github-02.png "Screenshot showing the pull request’s title and description on GitHub")

4. Choose the correct base branch (usually `main`).

    [![Screenshot showing the pull request branches on GitHub](github-03.png)](github-03.png "Screenshot showing the pull request branches on GitHub")

5. Select the green ‘Create pull request’ button.

    [![Screenshot showing the ‘Create pull request’ button on GitHub](github-04.png)](github-04.png "Screenshot showing the ‘Create pull request’ button on GitHub")

    [![Screenshot showing the new pull request on GitHub](github-05.png)](github-05.png "Screenshot showing the new pull request on GitHub")

## Step 10: Review and merge the pull request

1. Ask a team member to review your pull request.

2. Make any suggested changes and push updates if needed.

3. Once approved, select the green ‘Merge pull request’ button in GitHub.

GitHub is configured to automatically delete your branch.

Your changes will be published automatically by Netlify after the merge is complete.
