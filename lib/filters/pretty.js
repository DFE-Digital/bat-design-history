/**
 * Convert a file path URL to a pretty URL by removing (index).html
 * Creates clean, user-friendly URLs following W3C URI style guidelines
 *
 * @param {string} string - URL to prettify (e.g., /page/index.html)
 * @returns {string} Clean permalinkable URL (e.g., /page/)
 *
 * @example
 * // Remove index.html
 * {{ "/about/index.html" | pretty }}
 * // Output: "/about/"
 *
 * @example
 * // Remove .html extension
 * {{ "/contact.html" | pretty }}
 * // Output: "/contact"
 *
 * @see https://www.w3.org/Provider/Style/URI.html
 */
module.exports = string => {
  // Validate input
  if (!string) {
    return ''
  }

  const str = String(string)
  return str.replace(/(?:index)?\.html/g, '')
}
