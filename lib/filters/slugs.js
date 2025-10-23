/**
 * Filter an array to only include items whose fileSlug matches the provided slugs
 * Useful for selecting specific posts or pages by their file slugs
 *
 * @param {Array} array - Array to filter (expects items with fileSlug property)
 * @param {Array<string>} slugs - Array of slug strings to match against
 * @returns {Array} Filtered array containing only items with matching fileSlugs
 *
 * @example
 * // Filter posts by specific slugs
 * {{ collections.posts | slugs(['intro', 'getting-started']) }}
 *
 * @example
 * // Select featured pages
 * {{ pages | slugs(featuredSlugs) }}
 */
module.exports = (array, slugs) => {
  // Validate inputs
  if (!Array.isArray(array)) {
    console.warn('slugs filter: expected array, got', typeof array)
    return []
  }

  if (!Array.isArray(slugs)) {
    console.warn('slugs filter: slugs parameter must be an array, got', typeof slugs)
    return []
  }

  return array.filter(item => {
    // Check if item has fileSlug property and it's in the slugs array
    return item && item.fileSlug && slugs.includes(item.fileSlug)
  })
}
