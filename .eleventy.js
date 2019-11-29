let nunjucks = require('./lib/nunjucks');
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
  eleventyConfig.setLibrary('njk', nunjucks);
  eleventyConfig.setLibrary('md', markdown);

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

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
