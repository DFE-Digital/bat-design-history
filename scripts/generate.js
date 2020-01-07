/*
  Usage:
  * Put images into `app/assets/directory-name`
  * Name them with 01-, 02- prefixes

  Run:
  node scripts/generate.js name-of-directory-holding-images
*/

// Dependencies
const fs = require('fs');
const sharp = require('sharp');

// Arguments
const directoryName = process.argv.slice(-1)[0];
warnIfNoArguments();

// Ignore any directories when generating a title
var title = directoryName.split('/').pop().replace(/-/g, ' ');
title = title.charAt(0).toUpperCase() + title.slice(1)
const imageDirectory = `app/assets/images/${directoryName}`;
const indexDirectory = `app/views/${directoryName}`;
const thumbnailDirectory = `${imageDirectory}/thumbnails`;

var paths = [];

// Run
function start() {
  makeDirectories();
  getExistingImages();
  generatePage();
  generateThumbnails();
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

  if (!fs.existsSync(thumbnailDirectory)){
    fs.mkdirSync(thumbnailDirectory);
  }

  if (!fs.existsSync(indexDirectory)){
    fs.mkdirSync(indexDirectory);
  }
}

function getExistingImages() {
  const files = fs.readdirSync(imageDirectory);

  files.forEach((file, index) => {
    if (!(/\.(png|jpg)$/.test(file))) {
      console.log('Ignoring: ' + file);
      return;
    }

    var id = file.replace(/\.(png|jpg)$/, '');
    var title = id.replace(/^\d{2}-/, '').replace(/-/g, ' ');

    var image = {
      title: title.charAt(0).toUpperCase() + title.slice(1),
      id: id,
      file: `${imageDirectory}/${file}`,
      thumbnailFile: `${thumbnailDirectory}/${file}`
    }

    image.src = image.file.replace('app/assets', '/public');
    image.thumbnailSrc = image.thumbnailFile.replace('app/assets', '/public');

    paths.push(image);
  });
}

function generatePage() {
  var template = '';
  const templateStart = `{% extends "layout.html" %}
{% set title = '${title}' %}
{% block pageTitle %}{{ title }}{% endblock %}
{% block breadcrumbs %}{{ designHistory.breadcrumbs(breadcrumbItems()) }}{% endblock %}

{% block content %}
  <h1 class="govuk-heading-xl">{{ title }}</h1>
`;

  const templateEnd = `
{% endblock %}
`;

  var contents = `
  {% set contents = [`;

  const endContents = `
  ] %}
  {{ designHistory.screenshotContents(contents) }}
  `;

  paths.forEach(function(item, index) {
    template += `
  {{ designHistory.screenshot('${item.title}', '${item.id}', '${item.thumbnailSrc}', '${item.src}', '') }}
`;

    contents += `${index > 0 ? ', ': ''}
    { text: '${item.title}', id: '${item.id}' }`;
  });

  fs.writeFile(
    `${indexDirectory}/index.html`,
    templateStart + contents + endContents + template + templateEnd,
    function(err) {
      if (err) { return console.log(err); }
      console.log(`Index generated: ${indexDirectory}/index.html`);
    }
  );
}

function generateThumbnails() {
  paths.forEach(function(item, index) {
    sharp(item.file).resize(630, null).toFile(item.thumbnailFile);
  });
}

start();
