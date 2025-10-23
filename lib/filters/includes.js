/**
 * Find objects in array whose key includes a value
 * Supports nested keys using dot notation (e.g., 'data.title')
 *
 * @param {Array} array - Array to filter
 * @param {string} key - Key to inspect (supports dot notation for nested keys)
 * @param {string} value - Value key needs to include
 * @returns {Array} Filtered array
 *
 * @example
 * // Filter posts by tag
 * {{ collections.all | includes('data.tags', 'featured') }}
 *
 * @example
 * // Filter items with nested properties
 * {{ items | includes('metadata.category', 'news') }}
 */
module.exports = (array, key, value) => {
  // Validate inputs
  if (!Array.isArray(array)) {
    console.warn('includes filter: expected array, got', typeof array)
    return []
  }

  if (typeof key !== 'string' || !key) {
    console.warn('includes filter: key must be a non-empty string')
    return []
  }

  if (value === undefined || value === null) {
    console.warn('includes filter: value cannot be null or undefined')
    return []
  }

  /**
   * Get nested property value from object using dot notation
   * @param {Object} obj - The object to traverse
   * @param {string} path - Dot-separated path (e.g., 'data.title')
   * @returns {*} The value at the path, or undefined
   */
  const getNestedValue = (obj, path) => {
    if (!obj || typeof obj !== 'object') {
      return undefined
    }

    return path.split('.').reduce((current, prop) => {
      return current && current[prop] !== undefined ? current[prop] : undefined
    }, obj)
  }

  return array.filter(item => {
    const field = getNestedValue(item, key)

    // If field doesn't exist or doesn't have includes method, skip
    if (!field || typeof field.includes !== 'function') {
      return false
    }

    return field.includes(value)
  })
}
