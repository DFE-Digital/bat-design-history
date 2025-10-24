const slugify = require('slugify')

/**
 * Convert a string into a URL-friendly slug
 * Removes special characters, replaces spaces with hyphens, and converts to lowercase
 *
 * @param {string} string - String to slugify
 * @returns {string|undefined} Slugified string, or undefined if input is invalid
 *
 * @example
 * // Create URL-friendly slug
 * {{ "Hello World!" | slug }}
 * // Output: "hello-world"
 *
 * @example
 * // Handle special characters
 * {{ "User's Guide (2025)" | slug }}
 * // Output: "users-guide-2025"
 */
module.exports = (string) => {
  // Validate input
  if (!string) {
    return undefined
  }

  if (typeof string !== 'string') {
    console.warn('slug filter: expected string, got', typeof string)
    return undefined
  }

  return slugify(string, {
    replacement: '-',
    remove: /[*+~.,()'"!?:@#–]/g,
    lower: true,
    strict: false,
    trim: true
  })
}
