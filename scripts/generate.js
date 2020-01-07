/*
  Usage:
  * Put images into `app/images/directory-name`
  * Name them with 01-, 02- prefixes

  Run:
  node scripts/generate.js name-of-directory-holding-images
*/

// Dependencies
const fs = require('fs');
const { DateTime } = require('luxon')

// Arguments
const directoryName = process.argv.slice(-1)[0];
warnIfNoArguments();

const deepestDirectory = directoryName.split('/').pop()

var title = deepestDirectory.replace(/-/g, ' ');
title = title.charAt(0).toUpperCase() + title.slice(1)

const imageDirectory = `app/images/${directoryName}`;
const postDirectory = `app/posts/${directoryName}`.replace("/" + deepestDirectory, '');

var paths = [];

// Run
function start() {
  makeDirectories();
  getExistingImages();
  generatePage();
}

function warnIfNoArguments(title) {
  // TODO: Use a better check for an argument
  if (directoryName.startsWith('/Users')) {
    console.log('No arguments set');
    console.log('Please set a title: `node scripts/screenshot.js "Title of page"`');
    return;
  }
}

function makeDirectories() {
  if (!fs.existsSync(imageDirectory)){
    fs.mkdirSync(imageDirectory);
  }

  if (!fs.existsSync(postDirectory)){
    fs.mkdirSync(postDirectory);
  }
}

function getExistingImages() {
  const files = fs.readdirSync(imageDirectory);

  files.forEach((file, index) => {
    if (!(/\.(png|jpg)$/.test(file))) {
      console.log('Ignoring: ' + file);
      return;
    }

    var title = file.replace(/\.(png|jpg)$/, '').replace(/^\d{2}-/, '').replace(/-/g, ' ');
    var image = {
      title: title.charAt(0).toUpperCase() + title.slice(1)
    }
    paths.push(image);
  });
}

function generatePage() {
  var template = '';
  const templateStart = `---
title: ${title}
description:
tags:
---

## Screenshots

{% from "gallery/macro.njk" import appGallery with context %}
{{ appGallery({
  items: [`;

  const templateEnd = `
  ]
}) }}
`;

  paths.forEach(function(item, index) {
    template += `${index > 0 ? ', ': ''}
    { text: "${item.title}" }`;
  });

  const filename = `${postDirectory}/${DateTime.local().toFormat('yyyy-MM-dd')}-${deepestDirectory}.md`

  fs.writeFile(
    filename,
    templateStart + template + templateEnd,
    function(err) {
      if (err) { return console.log(err); }
      console.log(`Page generated: ${filename}`);
    }
  );
}

start();
