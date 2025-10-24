/**
 * Filter registration configuration
 * Automatically registers all filters with Eleventy
 *
 * @module lib/config/filters
 */

/**
 * List of filter names to register
 * Corresponds to files in lib/filters/
 */
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

/**
 * Registers all filters with Eleventy
 * Automatically loads each filter module and adds it to Eleventy
 *
 * @param {Object} eleventyConfig - Eleventy configuration object
 *
 * @example
 * const { registerFilters } = require('./lib/config/filters')
 * registerFilters(eleventyConfig)
 */
const registerFilters = (eleventyConfig) => {
  filterNames.forEach((filterName) => {
    try {
      const filter = require(`../filters/${filterName}`)
      eleventyConfig.addFilter(filterName, filter)
    } catch (error) {
      console.error(`Failed to load filter: ${filterName}`, error)
      throw error
    }
  })
}

module.exports = {
  filterNames,
  registerFilters
}
