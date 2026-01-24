---
title: How to run the site locally
description: A guide to previewing design history posts on your computer before publishing
date: 2025-01-18
related:
  items:
    - text: How to publish a design history post using a text editor
      href: /how-to/how-to-publish-a-design-history-post-using-a-text-editor/
    - text: How to write Markdown
      href: /how-to/how-to-write-markdown/
---

Running the design history site locally lets you preview your posts before pushing them to GitHub. This is useful for checking formatting, images, and links.

## Prerequisites

Before you start, make sure you have:

- [Node.js](https://nodejs.org/) version 20 or later installed
- The repository cloned to your computer (see [how to publish a design history post using a text editor](/how-to/how-to-publish-a-design-history-post-using-a-text-editor/))
- A terminal application (Terminal on Mac, Command Prompt or PowerShell on Windows)

## Step 1: Open a terminal

Open your terminal application and navigate to the design history folder.

If you cloned the repository to your Documents folder, you might use:

```bash
cd ~/Documents/bat-design-history
```

## Step 2: Install dependencies

If this is your first time running the site, or if you have recently pulled changes from GitHub, install the required dependencies:

```bash
npm install
```

This downloads all the packages the site needs to build.

## Step 3: Start the local server

Run the following command to build and serve the site:

```bash
npm start
```

You will see output similar to:

```text
[11ty] Wrote 1234 files in 5.67 seconds
[11ty] Watching...
[11ty] Server at http://localhost:8080/
```

## Step 4: View the site

Open your web browser and go to:

```text
http://localhost:8080/
```

You should see the design history site running locally. Navigate to your post to check it displays correctly.

## Step 5: Make changes

While the server is running, you can edit your Markdown files. The site will automatically rebuild and refresh your browser when you save changes.

## Step 6: Stop the server

When you have finished, press `Ctrl + C` in the terminal to stop the server.

## Troubleshooting

If the site does not start:

- Check you are in the correct folder by running `ls` (Mac/Linux) or `dir` (Windows) to see if `package.json` is listed
- Try deleting the `node_modules` folder and running `npm install` again
- Make sure you have Node.js version 20 or later by running `node --version`

If your changes do not appear:

- Check the terminal for error messages
- Try stopping the server and running `npm run dev` again
- Clear your browser cache or try a private/incognito window
