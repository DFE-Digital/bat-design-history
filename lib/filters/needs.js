/**
 * Find items in an array that match the slugs
 *
 * @param {Array} array Array to filter
 * @param {Array} needs Array of need ids (strings)
 * @return {Array} Filtered array
 *
 */
module.exports = (array, needs) => {
  return array.filter(item => {
    return needs.includes(item.data.need.shortLink)
  })
}
