/*
  Usage:
  Set domain to the website you want to screenshot, eg localhost:3000
  Set paths to an array of named paths (see example)

  Run:
  node scripts/screenshot.js name-of-directory

  Example paths:
  paths = [
    { title: 'Index page', path: '/'},
    { title: 'Terms and conditions', path: '/terms-conditions'}
  ]
*/
const paths = [];
const domain = 'http://localhost:3000';

// Dependencies
const webshot = require('webshot');
const fs = require('fs');

// Arguments
const directoryName = process.argv.slice(-1)[0];
warnIfNoArguments();

// Ignore any directories when generating a title
var title = directoryName.split('/').pop().replace(/-/g, ' ');
title = title.charAt(0).toUpperCase() + title.slice(1)
const imageDirectory = `app/assets/images/${directoryName}`;
const indexDirectory = `app/views/${directoryName}`;

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

  if (!fs.existsSync(indexDirectory)){
    fs.mkdirSync(indexDirectory);
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
  {{ designHistory.screenshot('${item.title}', '${item.id}', '${item.src}', '${item.src}', '') }}
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

start();
