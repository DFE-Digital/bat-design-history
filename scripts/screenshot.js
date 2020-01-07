/*
  Usage:
  Set domain to the website you want to screenshot, eg localhost:3000
  Set paths to an array of named paths (see example)

  Run:
  node scripts/screenshot.js name-of-directory
  or
  node scripts/screenshot.js apply-for-teacher-training/name-of-directory

  Example paths:
  paths = [
    { title: 'Index page', path: '/'},
    { title: 'Terms and conditions', path: '/terms-conditions'}
  ]
*/
const paths = [
  { title: 'Index page', path: '/'}
];
const { DateTime } = require('luxon')
const domain = 'http://localhost:3000';

// Dependencies
const webshot = require('webshot');
const fs = require('fs');

// Arguments
const directoryName = process.argv.slice(-1)[0];

warnIfNoArguments();

const deepestDirectory = directoryName.split('/').pop()

var title = deepestDirectory.replace(/-/g, ' ');
title = title.charAt(0).toUpperCase() + title.slice(1)

const imageDirectory = `app/images/${directoryName}`;
const postDirectory = `app/posts/${directoryName}`.replace("/" + deepestDirectory, '');

// Run
function start() {
  makeDirectories();
  decoratePaths();
  generatePage();
  takeScreenshots();
}

function warnIfNoArguments(title) {
  // TODO: Use a better check for an argument
  if (directoryName.startsWith('/Users')) {
    console.log('No arguments set');
    console.log('Please set a directory name: `node scripts/screenshot.js "name-of-directory"`');
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

function decoratePaths() {
  paths.forEach(function(item, index) {
    item.id = item.title.replace(/ +/g, '-').toLowerCase();
    item.file = `${imageDirectory}/${item.id}.png`;
    item.src = item.file.replace('app/assets', '/public');
  });
}

function takeScreenshots() {
  // https://github.com/brenden/node-webshot
  const webshotOptions = {
    phantomConfig: {
      'ignore-ssl-errors': 'true'
    },
    windowSize: {
      width: 1200,
      height: 800
    },
    shotSize: {
      width: 'window',
      height: 'all'
    }
  }

  paths.forEach(function(item, index) {
    webshot(
      domain + item.path,
      item.file,
      webshotOptions,
      function(err) {
        console.log(`${domain + item.path} \n >> ${item.file}`);
      }
    );
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
