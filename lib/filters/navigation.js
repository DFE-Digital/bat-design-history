/**
 * Custom navigation filters
 * Lightweight replacement for @11ty/eleventy-navigation plugin filters
 *
 * @module lib/filters/navigation
 */

const { buildNavigationMap, getBreadcrumbs, getNavigationChildren, navigationToHtml } = require('../utils/navigation')

// Cache the navigation map for performance
// Built once per build, reused for all pages
let cachedNavMap = null

/**
 * Get or build the navigation map
 * Caches the map after first build for performance
 *
 * @param {Array} collection - Eleventy collection
 * @returns {Map} Navigation map
 */
const getNavMap = (collection) => {
  if (!cachedNavMap) {
    cachedNavMap = buildNavigationMap(collection)
  }
  return cachedNavMap
}

/**
 * Filter to get breadcrumbs for a navigation key
 * Usage: {{ collections.navigation | eleventyNavigationBreadcrumb('my-key') }}
 *
 * @param {Array} collection - Collection with navigation data
 * @param {string} key - Navigation key
 * @returns {Array} Breadcrumb trail
 */
const eleventyNavigationBreadcrumb = (collection, key) => {
  if (!collection || !key) {
    return []
  }

  const navMap = getNavMap(collection)
  return getBreadcrumbs(navMap, key)
}

/**
 * Filter to get navigation children for a parent key
 * Usage: {{ collections.navigation | eleventyNavigation('home') }}
 *
 * @param {Array} collection - Collection with navigation data
 * @param {string} parentKey - Parent navigation key
 * @returns {Array} Child navigation items
 */
const eleventyNavigation = (collection, parentKey) => {
  if (!collection || !parentKey) {
    return []
  }

  const navMap = getNavMap(collection)
  return getNavigationChildren(navMap, parentKey)
}

/**
 * Filter to convert navigation structure to HTML
 * Usage: {{ items | eleventyNavigationToHtml({ listClass: 'my-list' }) }}
 *
 * @param {Array} items - Navigation items
 * @param {Object} options - Rendering options
 * @returns {string} HTML string
 */
const eleventyNavigationToHtml = (items, options) => {
  return navigationToHtml(items, options || {})
}

/**
 * Reset the navigation cache
 * Called at the start of each build
 */
const resetNavigationCache = () => {
  cachedNavMap = null
}

module.exports = {
  eleventyNavigationBreadcrumb,
  eleventyNavigation,
  eleventyNavigationToHtml,
  resetNavigationCache
}
