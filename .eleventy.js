const UpgradeHelper = require('@11ty/eleventy-upgrade-help')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(UpgradeHelper)

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
  })

  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/libraries/nunjucks'))
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown'))

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))

  // Filters
  eleventyConfig.addFilter('date', require('./lib/filters/date'))
  eleventyConfig.addFilter('fixed', require('./lib/filters/fixed'))
  eleventyConfig.addFilter('includes', require('./lib/filters/includes'))
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown'))
  eleventyConfig.addFilter('notifyPlaceholders', require('./lib/filters/notify-placeholders'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty'))
  eleventyConfig.addFilter('slug', require('./lib/filters/slug'))
  eleventyConfig.addFilter('slugs', require('./lib/filters/slugs'))
  eleventyConfig.addFilter('sort', require('./lib/filters/sort'))
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize'))
  eleventyConfig.addFilter('totalFromRows', require('./lib/filters/total-from-rows'))
  eleventyConfig.addFilter('widont', require('./lib/filters/widont'))

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/documents')
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true)

  // Collections
  eleventyConfig.addCollection('apply-for-teacher-training', collection => {
    return collection.getFilteredByTag('apply-for-teacher-training').filter(item => {
      return !item.data.tags.includes('user-need')
    })
  })

  eleventyConfig.addCollection('manage-teacher-training-applications', collection => {
    return collection.getFilteredByTag('manage-teacher-training-applications').filter(item => {
      return !item.data.tags.includes('user-need')
    })
  })

  eleventyConfig.addCollection('publish-teacher-training-courses', collection => {
    return collection.getFilteredByTag('publish-teacher-training-courses').filter(item => {
      return !item.data.tags.includes('user-need')
    })
  })

  eleventyConfig.addCollection('register-trainee-teachers', collection => {
    return collection.getFilteredByTag('register-trainee-teachers').filter(item => {
      return !item.data.tags.includes('user-need')
    })
  })

  eleventyConfig.addCollection('support-for-apply', collection => {
    return collection.getFilteredByTag('support-for-apply').filter(item => {
      return !item.data.tags.includes('user-need')
    })
  })

  eleventyConfig.addCollection('support-for-publish', collection => {
    return collection.getFilteredByTag('support-for-publish').filter(item => {
      return !item.data.tags.includes('user-need')
    })
  })

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
  }
}
