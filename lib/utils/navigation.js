/**
 * Custom navigation utilities
 * Lightweight alternative to @11ty/eleventy-navigation plugin
 *
 * @module lib/utils/navigation
 */

/**
 * Build a navigation tree from pages with eleventyNavigation data
 * Creates an efficient lookup structure for navigation
 *
 * @param {Array} collection - Eleventy collection
 * @returns {Object} Navigation lookup map with structure:
 *   {
 *     'key': { page, children: [], parent: 'parentKey' },
 *     ...
 *   }
 */
const buildNavigationMap = (collection) => {
  const navMap = new Map()

  if (!Array.isArray(collection)) {
    return navMap
  }

  // First pass: Create all entries
  for (const item of collection) {
    if (!item || !item.data || !item.data.eleventyNavigation) {
      continue
    }

    const nav = item.data.eleventyNavigation
    if (!nav.key) {
      continue
    }

    navMap.set(nav.key, {
      key: nav.key,
      title: nav.title || item.data.title,
      url: item.url,
      excerpt: nav.excerpt || item.data.excerpt,
      parent: nav.parent || null,
      order: nav.order || 0,
      children: [],
      page: item
    })
  }

  // Second pass: Build parent-child relationships
  for (const node of navMap.values()) {
    if (node.parent && navMap.has(node.parent)) {
      navMap.get(node.parent).children.push(node)
    }
  }

  // Sort children by order
  for (const node of navMap.values()) {
    node.children.sort((a, b) => a.order - b.order)
  }

  return navMap
}

/**
 * Get breadcrumb trail for a given navigation key
 * Much faster than the plugin version - O(n) instead of O(n²)
 *
 * @param {Map} navMap - Navigation map from buildNavigationMap
 * @param {string} key - Navigation key to get breadcrumbs for
 * @returns {Array} Array of breadcrumb items from root to current page
 */
const getBreadcrumbs = (navMap, key) => {
  if (!navMap || !key) {
    return []
  }

  const breadcrumbs = []
  let current = navMap.get(key)

  // Walk up the tree to build breadcrumb trail
  while (current) {
    breadcrumbs.unshift({
      key: current.key,
      title: current.title,
      url: current.url
    })

    // Move to parent
    current = current.parent ? navMap.get(current.parent) : null
  }

  // Remove the current page from breadcrumbs (we don't want a link to ourselves)
  breadcrumbs.pop()

  return breadcrumbs
}

/**
 * Get children of a navigation item
 *
 * @param {Map} navMap - Navigation map from buildNavigationMap
 * @param {string} key - Parent navigation key
 * @returns {Array} Array of child navigation items
 */
const getNavigationChildren = (navMap, key) => {
  if (!navMap || !key) {
    return []
  }

  const node = navMap.get(key)
  return node ? node.children : []
}

/**
 * Convert navigation children to HTML list
 *
 * @param {Array} children - Array of navigation children
 * @param {Object} options - Rendering options
 * @param {string} [options.listClass] - CSS class for the list
 * @returns {string} HTML string
 */
const navigationToHtml = (children, options = {}) => {
  if (!Array.isArray(children) || children.length === 0) {
    return ''
  }

  const listClass = options.listClass || ''
  let html = `<ul${listClass ? ` class="${listClass}"` : ''}>`

  for (const child of children) {
    html += '<li>'
    html += `<a href="${child.url}">${child.title}</a>`

    // Recursively render nested children
    if (child.children && child.children.length > 0) {
      html += navigationToHtml(child.children, options)
    }

    html += '</li>'
  }

  html += '</ul>'

  return html
}

module.exports = {
  buildNavigationMap,
  getBreadcrumbs,
  getNavigationChildren,
  navigationToHtml
}
