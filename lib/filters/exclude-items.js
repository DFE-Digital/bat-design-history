/**
 * Filter an array by removing any items in the array given as a second argument
 * @param {Array} array Array to filter
 * @param {Array} array Array of items to filter out
 * @return {Array} filtered array
 */
module.exports = (items, excludeItems) => {
  return items.filter(item => !excludeItems.includes(item))
}
