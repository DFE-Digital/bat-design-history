/**
 * Sort array by values in named key (ascending order)
 * Supports nested keys using dot notation (e.g., 'data.date')
 *
 * @param {Array} array - Array to sort
 * @param {string} key - Key to sort by (supports dot notation for nested keys)
 * @returns {Array} Sorted array (sorts in place and returns the array)
 *
 * @example
 * // Sort posts by date
 * {{ collections.posts | sort('data.date') }}
 *
 * @example
 * // Sort items by nested property
 * {{ items | sort('metadata.priority') }}
 *
 * @see https://stackoverflow.com/questions/6393943
 */
module.exports = (array, key) => {
  // Validate inputs
  if (!Array.isArray(array)) {
    console.warn('sort filter: expected array, got', typeof array)
    return []
  }

  if (typeof key !== 'string' || !key) {
    console.warn('sort filter: key must be a non-empty string')
    return array
  }

  /**
   * Get nested property value from object using dot notation
   * @param {Object} obj - The object to traverse
   * @param {string} path - Dot-separated path (e.g., 'data.date')
   * @returns {*} The value at the path, or undefined
   */
  const getNestedValue = (obj, path) => {
    if (!obj || typeof obj !== 'object') {
      return undefined
    }

    try {
      return path.split('.').reduce((current, prop) => {
        return current && current[prop] !== undefined ? current[prop] : undefined
      }, obj)
    } catch (error) {
      console.warn('sort filter: error accessing nested property', path, error)
      return undefined
    }
  }

  return array.sort((a, b) => {
    const x = getNestedValue(a, key)
    const y = getNestedValue(b, key)

    // Handle undefined or null values (sort them to the end)
    if (x === undefined || x === null) return 1
    if (y === undefined || y === null) return -1

    // Standard comparison
    if (x < y) {
      return -1
    }

    if (x > y) {
      return 1
    }

    return 0
  })
}
