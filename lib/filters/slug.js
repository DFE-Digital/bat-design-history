const slugify = require('slugify')

/**
 * Convert a string into a URL-friendly slug
 * Removes special characters, replaces spaces with hyphens, and converts to lowercase
 * Can handle objects with a 'name' property (e.g., tag objects from collections)
 *
 * @param {string|Object} input - String to slugify, or object with 'name' property
 * @returns {string} Slugified string, or empty string if input is null/undefined
 *
 * @example
 * // Create URL-friendly slug from string
 * {{ "Hello World!" | slug }}
 * // Output: "hello-world"
 *
 * @example
 * // Handle special characters
 * {{ "User's Guide (2025)" | slug }}
 * // Output: "users-guide-2025"
 *
 * @example
 * // Handle tag objects (from allTags collection)
 * {{ tag | slug }}
 * // Where tag = { name: 'Prototype', count: 5 }
 * // Output: "prototype"
 */
module.exports = (input) => {
  // Handle null/undefined
  if (!input) {
    return ''
  }

  // If input is an object with a 'name' property, use that (for tag objects)
  let string = input
  if (typeof input === 'object' && input.name) {
    string = input.name
  }

  // Convert to string if not already
  if (typeof string !== 'string') {
    string = String(input)
  }

  return slugify(string, {
    replacement: '-',
    remove: /[*+~.,()'"!?:@#–]/g,
    lower: true,
    strict: false,
    trim: true
  })
}
