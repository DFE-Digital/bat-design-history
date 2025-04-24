module.exports = function (eleventyConfig) {
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
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))

  // ---------------------------------------------------------------
  // Filters
  // ---------------------------------------------------------------
  // Instead of registering each filter by hand, define them in an array:
  const filterNames = [
    'date',
    'fixed',
    'includes',
    'markdown',
    'notifyPlaceholders',
    'pretty',
    'serviceName',
    'slug',
    'slugs',
    'sort',
    'tokenize',
    'totalFromRows',
    'widont'
  ]

  filterNames.forEach((filterName) => {
    eleventyConfig.addFilter(filterName, require(`./lib/filters/${filterName}`))
  })

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
  // A dedicated “service line” collection
  eleventyConfig.addCollection('serviceLine', (collection) => {
    return collection.getFilteredByGlob([
      'app/posts/becoming-a-teacher/becoming-a-teacher.md',
      'app/posts/teacher-success/teacher-success.md'
    ])
  })

  // List of service index pages
  eleventyConfig.addCollection('services', (collection) => {
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

  // Collections that share a similar pattern:
  const serviceCollections = [
    'becoming-a-teacher',
    'apply-for-teacher-training',
    'find-teacher-training',
    'manage-teacher-training-applications',
    'publish-teacher-training-courses',
    'register-trainee-teachers',
    'manage-school-placements',
    'claim-funding-for-mentors',
    'register-of-training-providers',
    'support-for-apply',
    'support-for-publish',
    'teacher-success'
  ]

  serviceCollections.forEach((serviceName) => {
    eleventyConfig.addCollection(serviceName, (collection) => {
      // For each service, fetch all .md files in that folder:
      return collection.getFilteredByGlob(`app/posts/${serviceName}/*.md`)
    })
  })

  // A collection of reference pages
  eleventyConfig.addCollection('reference', (collectionApi) => {
    return collectionApi.getFilteredByGlob([
      'app/glossary.md',
      'app/mission-patches.md',
      'app/service-map.md',
      'app/posts/how-to/how-to.md'
    ])
  })

  // A collection of posts for “how-to”
  eleventyConfig.addCollection('how-to', (collection) => {
    return collection.getFilteredByGlob('app/posts/how-to/*.md')
  })

  // ---------------------------------------------------------------
  // Tag collections
  // ---------------------------------------------------------------
  eleventyConfig.addCollection('allTags', (collectionApi) => {
    const posts = collectionApi.getAll()
    const tagMap = new Map() // key: lowercase tag, value: { name: canonicalName, count: number }

    for (const post of posts) {
      if (post.data.tags) {
        for (const tag of post.data.tags) {
          const key = tag.toLowerCase()

          if (!tagMap.has(key)) {
            tagMap.set(key, {
              name: tag,   // store canonical name (first seen)
              count: 1,
            })
          } else {
            tagMap.get(key).count++
          }
        }
      }
    }

    // Filter out user needs tags
    const filtered = [...tagMap.values()].filter(tag => !tag.name.match(/[MPAS]N\d{3}/))

    // Sort alphabetically by canonical name
    return filtered.sort((a, b) => a.name.localeCompare(b.name, 'en'))
  })

  eleventyConfig.addCollection('postsByTag', (collectionApi) => {
    const tagMap = new Map()

    const posts = collectionApi.getAll()

    for (const post of posts) {
      if (post.data.tags) {
        for (const tag of post.data.tags) {
          const key = tag.toLowerCase()

          // Initialize group if not already
          if (!tagMap.has(key)) {
            tagMap.set(key, [])
          }

          // Add post to tag group
          tagMap.get(key).push(post)
        }
      }
    }

    return tagMap
  })


  // ---------------------------------------------------------------
  // Global data
  // ---------------------------------------------------------------
  eleventyConfig.addGlobalData('eleventyComputed', {
    service: (data) => {
      // If a service is already set in front matter, keep it
      if (data.service) {
        return data.service
      }

      // Example path: /posts/apply-for-teacher-training/something
      // “page.filePathStem” is Eleventy’s raw file path minus the file extension
      if (data.page && data.page.filePathStem) {
        // Pull out the segment after “/posts/”
        // This means a file at app/posts/find-teacher-training/foo.md
        // has data.page.filePathStem === "/posts/find-teacher-training/foo"
        const match = data.page.filePathStem.match(/^\/posts\/([^/]+)/)
        if (match) {
          return match[1] // e.g. "apply-for-teacher-training"
        }
      }

      // Fallback: no service
      return null
    }
  })

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
