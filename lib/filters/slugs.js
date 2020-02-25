
/**
 * Find items in an array that match the slugs
 *
 * @param {Array} arr Array to filter
 * @param {Array} slugs Array of slugs (strings)
 * @return {Array} Filtered array
 *
 */
module.exports = (arr, slugs) => {
  return arr.filter(item => {
    return slugs.includes(item.fileSlug);
  })
}
