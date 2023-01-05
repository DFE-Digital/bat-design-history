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
  eleventyConfig.addFilter('excludeItems', require('./lib/filters/exclude-items'))
  eleventyConfig.addFilter('allTags', require('./lib/filters/all-tags'))

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/documents')
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true)

  // Collections

  // List of service index pages
  eleventyConfig.addCollection('services', collection => {
    return collection.getFilteredByGlob([
      "app/posts/find-teacher-training/find-teacher-training.md",
      "app/posts/apply-for-teacher-training/apply-for-teacher-training.md",
      "app/posts/publish-teacher-training-courses/publish-teacher-training-courses.md",
      "app/posts/manage-teacher-training-applications/manage-teacher-training-applications.md",
      "app/posts/register-trainee-teachers/register-trainee-teachers.md",
      "app/posts/support-for-apply/support-for-apply.md",
      "app/posts/support-for-publish/support-for-publish.md"
    ])
  })

  // Collections of posts for each service
  eleventyConfig.addCollection('apply-for-teacher-training', collection => {
    return collection.getFilteredByGlob("app/posts/apply-for-teacher-training/*.md")
  })

  eleventyConfig.addCollection('find-teacher-training', collection => {
    return collection.getFilteredByGlob("app/posts/find-teacher-training/*.md")
  })

  eleventyConfig.addCollection('manage-teacher-training-applications', collection => {
    return collection.getFilteredByGlob("app/posts/manage-teacher-training-applications/*.md")
  })

  eleventyConfig.addCollection('publish-teacher-training-courses', collection => {
    return collection.getFilteredByGlob("app/posts/publish-teacher-training-courses/*.md")
  })

  eleventyConfig.addCollection('register-trainee-teachers', collection => {
    return collection.getFilteredByGlob("app/posts/register-trainee-teachers/*.md")
  })

  eleventyConfig.addCollection('support-for-apply', collection => {
    return collection.getFilteredByGlob("app/posts/support-for-apply/*.md")
  })

  eleventyConfig.addCollection('support-for-publish', collection => {
    return collection.getFilteredByGlob("app/posts/support-for-publish/*.md")
  })

  // A collection of reference pages
  eleventyConfig.addCollection('reference', collectionApi => {
    return collectionApi.getFilteredByGlob(["app/glossary.md", "app/mission-patches.md", "app/service-map.md"])
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
