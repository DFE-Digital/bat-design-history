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

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/assets/images')
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })
  eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/dist/govuk/assets': 'assets' })

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true)

  // Collections
  eleventyConfig.addCollection('serviceLine', collection => {
    return collection.getFilteredByGlob([
      'app/posts/becoming-a-teacher/becoming-a-teacher.md'
    ])
  })

  // List of service index pages
  eleventyConfig.addCollection('services', collection => {
    return collection.getFilteredByGlob([
      'app/posts/apply-for-teacher-training/apply-for-teacher-training.md',
      'app/posts/find-teacher-training/find-teacher-training.md',
      'app/posts/manage-teacher-training-applications/manage-teacher-training-applications.md',
      'app/posts/publish-teacher-training-courses/publish-teacher-training-courses.md',
      'app/posts/register-trainee-teachers/register-trainee-teachers.md',
      'app/posts/manage-school-placements/manage-school-placements.md',
      'app/posts/claim-funding-for-mentors/claim-funding-for-mentors.md',
      'app/posts/support-for-apply/support-for-apply.md',
      'app/posts/support-for-publish/support-for-publish.md',
      'app/posts/register-of-training-providers/register-of-training-providers.md'
    ])
  })

  // Collections of posts for the service line
  eleventyConfig.addCollection('becoming-a-teacher', collection => {
    return collection.getFilteredByGlob('app/posts/becoming-a-teacher/*.md')
  })

  // Collections of posts for each service
  eleventyConfig.addCollection('apply-for-teacher-training', collection => {
    return collection.getFilteredByGlob('app/posts/apply-for-teacher-training/*.md')
  })

  eleventyConfig.addCollection('find-teacher-training', collection => {
    return collection.getFilteredByGlob('app/posts/find-teacher-training/*.md')
  })

  eleventyConfig.addCollection('manage-teacher-training-applications', collection => {
    return collection.getFilteredByGlob('app/posts/manage-teacher-training-applications/*.md')
  })

  eleventyConfig.addCollection('publish-teacher-training-courses', collection => {
    return collection.getFilteredByGlob('app/posts/publish-teacher-training-courses/*.md')
  })

  eleventyConfig.addCollection('register-trainee-teachers', collection => {
    return collection.getFilteredByGlob('app/posts/register-trainee-teachers/*.md')
  })

  eleventyConfig.addCollection('manage-school-placements', collection => {
    return collection.getFilteredByGlob('app/posts/manage-school-placements/*.md')
  })

  eleventyConfig.addCollection('claim-funding-for-mentors', collection => {
    return collection.getFilteredByGlob('app/posts/claim-funding-for-mentors/*.md')
  })

  eleventyConfig.addCollection('register-of-training-providers', collection => {
    return collection.getFilteredByGlob('app/posts/register-of-training-providers/*.md')
  })

  eleventyConfig.addCollection('support-for-apply', collection => {
    return collection.getFilteredByGlob('app/posts/support-for-apply/*.md')
  })

  eleventyConfig.addCollection('support-for-publish', collection => {
    return collection.getFilteredByGlob('app/posts/support-for-publish/*.md')
  })

  // A collection of reference pages
  eleventyConfig.addCollection('reference', collectionApi => {
    return collectionApi.getFilteredByGlob(['app/glossary.md',
      'app/mission-patches.md',
      'app/service-map.md',
      'app/posts/how-to/how-to.md'
    ])
  })

  // Collections of posts for each reference section
  eleventyConfig.addCollection('how-to', collection => {
    return collection.getFilteredByGlob('app/posts/how-to/*.md')
  })

  // A collection of user need pages
  // eleventyConfig.addCollection('user-need', collectionApi => {
  //   return collectionApi.getFilteredByGlob([
  //     'app/posts/apply-for--teacher-training/user-needs/*.md',
  //     'app/posts/manage-teacher-training-applications/user-needs/*.md',
  //     'app/posts/publish-teacher-training-courses/user-needs/*.md'
  //   ])
  // })

  // A collection of unique tags used across all posts
  eleventyConfig.addCollection('allTags', collectionApi => {
    const posts = collectionApi.getAll()

    // Set up empty list of tags
    let tags = []

    for (const post of posts) {
      if ('tags' in post.data) {
        // Add any new tags from the post to the array
        for (const tag of post.data.tags) {
          // skip if already added
          if (tags.includes(tag)) { continue }

          // check that there’s not a tag which matches it except for capitlisation
          const existingTag = tags.find(existingTag => existingTag.toLowerCase() === tag.toLowerCase())
          if (existingTag) {
            throw new Error('The post "' + post.data.title + '" contains tag "' + tag + '" which matches "' + existingTag + '" but capitalisation is different')
          }

          // otherwise add the new tag
          tags.push(tag)
        }
      }
    }

    // Filter out any tags in the form of MN999 -
    // these were used for tagging user needs.
    // (TODO: rethink this feature?)
    tags = tags.filter(tag => !tag.match(/[MPAS]N\d{3}/))

    // sort tags alphabetically
    tags = tags.sort((a, b) => a.localeCompare(b, 'en'))

    return tags
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
