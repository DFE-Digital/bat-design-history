---
title: How to add images using the GitHub website
description: A step-by-step guide for adding images to design histories using the GitHub website
date: 2025-09-10
related:
  items:
    - text: How to publish a design history post using the GitHub website
      href: /how-to/how-to-publish-a-design-history-post-using-the-github-website/
---

This design history details how you can create image folders using the GitHub website, to enable images to be placed into them and then added into design histories.

## Step 1: Create the design history in GitHub

Use the [guidance on how to publish a design history using the GitHub website](/how-to/how-to-publish-a-design-history-post-using-the-github-website/) to create a new branch for your design history.

Once you have written your design history, create a pull request. This will allow you to see the post you have written in the context of the design history website; this is called a ‘Deploy preview’. Each time you commit your changes to your pull request, the deploy preview will update, allowing you to see your changes.

Do not merge the pull request.

## Step 2: Create a codespace

Navigate back to the pull request you have just created.

[![Screenshot showing the pull request](1-pull-request.png "Screenshot showing the pull request")](1-pull-request.png)

Select the ‘Code’ button on the top right-hand side of the page.

Select the ‘Codespaces’ tab in the modal window.

Select the green button labelled ‘Create codespace on [YOUR BRANCH NAME]’.

[![Screenshot showing creating a new codespace](2-code-space.png "Screenshot showing creating a new codespace")](2-code-space.png)

## Step 3: Waiting for your codespace to be created

After creating a new codespace, a new tab will be opened in your browser, and the codespace will start deploying.

It may take several minutes for the codespace to be created, as it is duplicating all the files currently in the repository.

## Step 4: Your new codespace

After the codespace has finished building, it should resemble the screenshot below.

[![Screenshot showing the new codespace](3-new-code-space.png "Screenshot showing the new codespace")](3-new-code-space.png)

On the left-hand side, you will see a list of files under the title ‘Explorer’. Navigate to the post that you have just created in the `app` folder.

[![Screenshot showing the location of the post file](4-post.png "Screenshot showing the location of the post file")](4-post.png)

Copy the name of the post.

## Step 5: Creating your image folder

Navigate to the `images` directory and then select the service in which you created the design history.

Right-click on the service folder and create a new folder.

_Note: browsers like Chrome may ask permission to “See text and images copied to the clipboard”. You will need to “Allow” the functionality._

The name of the new folder must match the name of the design history, without the `.md` suffix and the date information before the post name.

For example, if the name of the post is:

```text
2025-09-10-how-to-add-images-using-the-github-website.md
```

The images folder should be:

```text
how-to-add-images-using-the-github-website
```

## Step 6: Add your images to the images folder you have just created

You can now drag and drop your post’s images into the image folder.

[![Screenshot showing the new images added to the new folder](5-new-images-added.png "Screenshot showing the new images added to the new folder")](5-new-images-added.png)

Tips for naming your images:

- consider numbering the images in the order they appear in the design history
- make sure they are saved as a `.png` file
- make the name of the file as descriptive as possible
- separate each word with a hyphen (`-`)

## Step 7: Committing the changes

Once you have added images to your post’s image folder, you will notice that the folder and image names are shown in green.

This indicates that they have not been committed to GitHub; they are only in this codespace.

Firstly, you need to select the source control button on the left-most side of the screen. It will contain a little blue notification icon with a number.

[![Screenshot showing the source control button](6-source-control.png "Screenshot showing the source control button")](6-source-control.png)

Add a commit message and select ‘Commit’.

[![Screenshot showing the commit message](7-commit-message.png "Screenshot showing the commit message")](7-commit-message.png)

At this point, codespaces may show an alert message titled ‘There are no staged changes to commit’. Select the blue button labelled ‘Yes’ to continue.

[![Screenshot showing “There are no staged changes to commit” message](8-stage-changes.png "Screenshot showing “There are no staged changes to commit” message")](8-stage-changes.png)

## Step 8: Synchronising the change

After you have committed your changes, you will then need to synchronise the changes.

This is vital; otherwise, it will not be synchronised with your branch on GitHub.

Select the blue button labelled ‘Sync Changes’.

[![Screenshot showing the ‘Sync Changes’ button](9-sync-changes.png "Screenshot showing the ‘Sync Changes’ button")](9-sync-changes.png)

At this point, codespaces may show an alert message labelled ‘This action will pull and push commits from and to “[YOUR BRANCH NAME]”. Select the blue button labelled ‘OK’ to continue.

[![Screenshot showing “This action will pull and push commits” message](10-pull-and-push-commits.png "Screenshot showing “This action will pull and push commits” message")](10-pull-and-push-commits.png)

## Step 9: Adding your images to your design history

Now that you have added your images to the post’s image folder, you can add them to your design history.

Navigate back to your pull request and edit the design history.

Select the ‘Files changed’ tab to make changes to your post.

[![Screenshot showing the ‘Files changed’ tab](11-files-changed.png "Screenshot showing the ‘Files changed’ tab")](11-files-changed.png)

Then select the three dots under the green ‘Review changes’ button to edit the design history post.

[![Screenshot showing the ‘Edit file’ menu option](12-edit-file.png "Screenshot showing the ‘Edit file’ menu option")](12-edit-file.png)

Navigate to where you want to add the images to your design history and add a reference to the image.

## Step 10: Publishing your design history with images

Once your editing is complete, select the green button to ‘Commit changes’.

Your images should now be included in your design history post.

Once ready, check the deploy preview.

After reviewing the post, you are then ready to merge the branch, and your design history will be published.
