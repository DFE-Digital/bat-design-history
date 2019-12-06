let Nunjucks = require('nunjucks');
let markdown = require('./lib/markdown');

module.exports = function (eleventyConfig) {
  // Browser Sync
  eleventyConfig.setBrowserSyncConfig({
    rewriteRules: [{
      match: /\/image\/(\d+)(x)?(\d+)?/g,
      replace: '/images'
    }],
    serveStatic: ['public'],
    serveStaticOptions: {
      extensions: ['html']
    }
  });

  // Template libraries
  let nunjucks = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader([
      'app/_components',
      'app/_layouts',
      'node_modules/govuk-frontend'
    ]), {
      lstripBlocks: true,
      trimBlocks: true
    }
  );
  eleventyConfig.setLibrary('njk', nunjucks);
  eleventyConfig.setLibrary('md', markdown);

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Filters
  eleventyConfig.addFilter('breadcrumbs', require('./lib/filters/breadcrumbs'))
  eleventyConfig.addFilter('date', require('./lib/filters/date'))
  eleventyConfig.addFilter('fixed', require('./lib/filters/fixed'))
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty'))
  eleventyConfig.addFilter('slug', require('./lib/filters/slug'))
  eleventyConfig.addFilter('sort', require('./lib/filters/sort'))
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize'))
  eleventyConfig.addFilter('totalFromRows', require('./lib/filters/total-from-rows'))

  // Transforms

  // Collections

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/documents');
  eleventyConfig.addPassthroughCopy('./app/images');

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true);

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    },
    templateFormats: ['njk', 'md'],
    passthroughFileCopy: true
  };
};
