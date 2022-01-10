module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    searchIndex: '/search.json',
    views: ['app/_components']
  })

  // Filters
  eleventyConfig.addFilter('fixed', require('./lib/filters/fixed'))
  eleventyConfig.addFilter('includes', require('./lib/filters/includes'))
  eleventyConfig.addFilter('notifyPlaceholders', require('./lib/filters/notify-placeholders'))
  eleventyConfig.addFilter('slug', require('./lib/filters/slug'))
  eleventyConfig.addFilter('slugs', require('./lib/filters/slugs'))
  eleventyConfig.addFilter('sort', require('./lib/filters/sort'))
  eleventyConfig.addFilter('totalFromRows', require('./lib/filters/total-from-rows'))

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/documents')
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

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
    templateFormats: ['njk', 'md']
  }
}
