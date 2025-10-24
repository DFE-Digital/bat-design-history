/**
 * Eleventy configuration
 * Main configuration file for the BAT Design History
 *
 * @see https://www.11ty.dev/docs/config/
 */

// Import configuration modules
const { registerFilters } = require('./lib/config/filters')
const { registerGlobalData } = require('./lib/config/global-data')
const { registerAllCollections } = require('./lib/utils/collection-builder')

module.exports = (eleventyConfig) => {
  // ---------------------------------------------------------------
  // Browser Sync
  // ---------------------------------------------------------------
  eleventyConfig.setBrowserSyncConfig({
    rewriteRules: [{
      match: /\/image\/(\d+)(x)?(\d+)?/g,
      replace: '/images'
    }],
    serveStatic: ['public'],
    serveStaticOptions: {
      extensions: ['html']
    }
  })

  // ---------------------------------------------------------------
  // Template libraries
  // ---------------------------------------------------------------
  eleventyConfig.setLibrary('njk', require('./lib/libraries/nunjucks'))
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown'))

  // ---------------------------------------------------------------
  // Plugins
  // ---------------------------------------------------------------
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
  // Note: @11ty/eleventy-navigation plugin removed for performance
  // Using custom navigation implementation in lib/filters/navigation.js instead

  // ---------------------------------------------------------------
  // Filters
  // ---------------------------------------------------------------
  registerFilters(eleventyConfig)

  // ---------------------------------------------------------------
  // Passthrough
  // ---------------------------------------------------------------
  eleventyConfig.addPassthroughCopy('./app/assets/images')
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/dist/govuk/assets': 'assets' })

  // ---------------------------------------------------------------
  // Enable data deep merge
  // ---------------------------------------------------------------
  eleventyConfig.setDataDeepMerge(true)

  // ---------------------------------------------------------------
  // Collections
  // ---------------------------------------------------------------
  registerAllCollections(eleventyConfig)

  // ---------------------------------------------------------------
  // Global data
  // ---------------------------------------------------------------
  registerGlobalData(eleventyConfig)

  // ---------------------------------------------------------------
  // Eleventy return config
  // ---------------------------------------------------------------
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
  }
}
