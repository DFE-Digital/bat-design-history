/**
 * Filter the tags on a post to remove the default ones
 * we just use for creating the collections
 * @param {Array} array Array to filter
 * @return {Array} filtered array
 */
module.exports = (array, tagsToIgnore) => {
  return array.filter(tag => !tagsToIgnore.includes(tag))
}
