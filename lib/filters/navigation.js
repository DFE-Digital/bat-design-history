/**
 * Custom navigation filters
 * Lightweight replacement for @11ty/eleventy-navigation plugin filters
 *
 * @module lib/filters/navigation
 */

const { buildNavigationMap, getBreadcrumbs, navigationToHtml } = require('../utils/navigation')

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
 * Returns items from the collection where eleventyNavigation.parent matches parentKey
 *
 * Usage: {{ collections.serviceLine | eleventyNavigation('home') }}
 *
 * @param {Array} collection - Collection to filter
 * @param {string} parentKey - Parent navigation key to match
 * @returns {Array} Items from collection that have the specified parent
 */
const eleventyNavigation = (collection, parentKey) => {
  if (!Array.isArray(collection) || !parentKey) {
    return []
  }

  // Filter the collection to find items with matching parent
  const items = collection.filter(item => {
    if (!item || !item.data || !item.data.eleventyNavigation) {
      return false
    }
    return item.data.eleventyNavigation.parent === parentKey
  })

  // Sort by order if specified
  items.sort((a, b) => {
    const orderA = a.data.eleventyNavigation.order || 0
    const orderB = b.data.eleventyNavigation.order || 0
    return orderA - orderB
  })

  // Return items with navigation data structure
  return items.map(item => ({
    key: item.data.eleventyNavigation.key,
    title: item.data.eleventyNavigation.title || item.data.title,
    url: item.url,
    excerpt: item.data.eleventyNavigation.excerpt || item.data.excerpt,
    page: item
  }))
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
