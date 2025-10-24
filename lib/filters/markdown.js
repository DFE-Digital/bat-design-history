const markdown = require('../libraries/markdown')

/**
 * Convert Markdown string to HTML
 * Supports both block-level and inline rendering
 *
 * @param {string} string - Markdown content to convert
 * @param {string} [value] - Optional mode: 'inline' for inline rendering (no paragraph tags)
 * @returns {string} Rendered HTML
 *
 * @example
 * // Render markdown as HTML block
 * {{ "# Heading\n\nParagraph text" | markdown }}
 * // Output: "<h1>Heading</h1><p>Paragraph text</p>"
 *
 * @example
 * // Render inline markdown (no paragraph tags)
 * {{ "**bold** text" | markdown("inline") }}
 * // Output: "<strong>bold</strong> text"
 */
module.exports = (string, value) => {
  // Validate input
  if (!string) {
    return ''
  }

  if (typeof string !== 'string') {
    console.warn('markdown filter: expected string, got', typeof string)
    return ''
  }

  try {
    // Render inline (without paragraph tags) or as block-level HTML
    if (value === 'inline') {
      return markdown.renderInline(string)
    }

    return markdown.render(string)
  } catch (error) {
    console.error('markdown filter: error rendering markdown', error)
    return string
  }
}
