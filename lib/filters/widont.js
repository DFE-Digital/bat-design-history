/**
 * Prevent widows by replacing the last space with a non-breaking space
 * A widow is a single word on the last line of a paragraph, which is considered poor typography
 *
 * @param {string} string - String to update
 * @returns {string} String with non-breaking space before the last word
 *
 * @example
 * // Prevent widow word
 * {{ "This is a long sentence with text" | widont }}
 * // Output: "This is a long sentence with\xA0text"
 * // (The last space becomes non-breaking)
 */
module.exports = string => {
  // Validate input
  if (!string) {
    return ''
  }

  const str = String(string)
  const nonBreakingSpaceChar = '\xA0' // Non-breaking space character
  const widontRegex = /\s+([^\s]*)\s*$/ // Match last space and word

  return str.replace(widontRegex, `${nonBreakingSpaceChar}$1`)
}
