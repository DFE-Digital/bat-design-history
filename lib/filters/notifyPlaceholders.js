/**
 * Wrap GOV.UK Notify-style placeholders in HTML spans for styling
 * Converts text placeholders into styled HTML for email examples
 *
 * Placeholder formats:
 * - ((name)) - Standard placeholder
 * - ((name?? - Conditional placeholder
 *
 * @param {string} string - Text containing Notify placeholders
 * @returns {string} HTML with styled placeholders
 *
 * @example
 * // Standard placeholder
 * {{ "Hello ((firstName))" | notifyPlaceholders }}
 * // Output: "Hello <span class=\"placeholder\">((firstName))</span>"
 *
 * @example
 * // Conditional placeholder
 * {{ "((course name??" | notifyPlaceholders }}
 * // Output: "<span class=\"placeholder-conditional\">((course name??</span>"
 */
module.exports = string => {
  // Validate input
  if (!string) {
    return ''
  }

  const str = String(string)

  // Replace conditional placeholders: ((name??
  let html = str.replace(/\(\(([\w\s]+)\?\?/g, '<span class="placeholder-conditional">(($1??</span>')

  // Replace standard placeholders: ((name))
  html = html.replace(/\(\(([\w\s]+)\)\)/g, '<span class="placeholder">(($1))</span>')

  return html
}
