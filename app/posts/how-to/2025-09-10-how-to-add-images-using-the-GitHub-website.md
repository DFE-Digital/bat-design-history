---
title: How to add images using the GitHub website
description: A step-by-step guide for adding images to design histories using the GitHub website
date: 2025-09-10
tags:
  - Guidance
  - How to
  - Design Histories
related:
  items:
    - text: How to publish a design history post using the github website
      href: /how-to/how-to-publish-a-design-history-post-using-the-github-website/
---

This design history details how you can create image folders using the GitHub website, to enable images to be placed into them and then added into design histories.

Previously, we thought that it was not possible for folders to be created without using a text editor and cloning repositories to a local directory.

## Step one: create the design history in GitHub

Use the guidance [here](/how-to/how-to-publish-a-design-history-post-using-the-github-website/) to create a new branch for your design history without images.

Once you have written your design history then create a pull request.

Do not merge the pull request.

## Step two

Navigate back to the pull request you have just created.

![Screenshot of the pull request](1-pull-request.png)

Click on “Code” button on the right hand side of the page.

And click “Codespaces”

Click the "+" to create a new codespace.

![Screenshot of creating a new codespace](2-code-space.png)

## Step three: waiting for your codespace to be created

After creating a new codespace a new tab will be opened in your browser and the codespace will start deploying.

It may take several minutes for the codespace to be created, as it duplicating all the files currently in the repository.

## Step four: your new codespace

After it has finished being built your new codespace should look something like the screenshot below

![Screenshot of the new codespace](3-new-code-space.png)

On the left-hand side navigate to the post that you have just created in the app folder.

![Screenshot of the post file](4-post.png)

Copy the name of the post by right clicking the design history file.

## Step five: creating your image folder

Navigate to the images directory and then select the service in which you created the design history.

Right click on the service folder and create a new folder.

The name of the new folder must match the name of the design history, without the .md suffix and the information before the post name.

For instance the name of the images folder should be:

**how-to-add-images-using-the-GitHub-website**

Whereas the design history post file name is: /workspaces/bat-design-history/app/posts/how-to/2025-09-10-how-to-add-images-using-the-GitHub-website.md

## Step six: add your images into the images folder you have just created

Navigating back to your new image folder you can drag the images you want into the image folder.

![Screenshot of the new images added to the new folder](5-new-images-added.png)

**Tips for naming your images**

- number the images in order that they appear in the design history. 
- make sure they are saved as a .png file
- keep the name as concise as possible
- separate each word with a –

## Step 7: committing the changes

You should notice that your new images and folder are green.

This indicates that they have not been committed to GitHub, they are only in this codespace.

Firstly, you need to press on the source control button.

![Screenshot of the source control button]( 6-source-control.png)

Add a commit message and click commit.

![Screenshot of commit message](7-commit-message.png)

## Step 8: synching the change

After your have committed you will then also need to synch the change.

This is vital, otherwise it will not be synched with the main branch of GitHub.

![Screenshot of synching changes](8-sync-changes.png)

## Step 9: adding your images to your design history

Now that you have added your images into the image folder you can now add them into your design history.

Navigate back to your pull request and edit the design history.

Click on the “Files changed” tab to be able to make changes to your post.

!{Screenshot of files changed tab](9-files-changed.png)

Then click on the three dots under the green “Review changes” button to edit the design history post.

!Screenshot of edit file button](10-edit-file.png)

Navigate to where you want to add the images into your design history and add in a link to the image.

## Step 10: publishing your design history with images

Once your editing is complete, press the green button to "Commit changes"

Your images should then be embedded into your design history.

Once ready check the deploy preview.

After reviewing the post you are then ready to merge the branch to enable your design history to be published.

Congratulations!
