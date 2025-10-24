/**
 * Reduce size of a string by removing duplicated words and common short words
 * Used to optimize content for search indexing by removing noise
 *
 * Process:
 * 1. Converts to lowercase
 * 2. Removes HTML tags (including script, style, and comments)
 * 3. Removes words with apostrophes (contractions)
 * 4. Removes punctuation and special characters
 * 5. Removes common stop words (the, a, an, etc.)
 * 6. Deduplicates words
 * 7. Normalizes whitespace
 *
 * @param {string} string - Original text to tokenize
 * @returns {string} Tokenized text with reduced content
 *
 * @example
 * // Tokenize content for search
 * {{ post.content | tokenize }}
 *
 * @example
 * // Input: "The quick brown fox jumps over the lazy dog. The fox is quick!"
 * // Output: "quick brown fox jumps over lazy dog"
 *
 * @see https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/
 */
module.exports = string => {
  // Validate input
  if (!string) {
    return ''
  }

  let content = String(string)

  // Convert to lowercase for consistent processing
  content = content.toLowerCase()

  // Step 1: Remove HTML elements (script, style, comments, and tags)
  let tokens = content.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, ' ')

  // Step 2: Remove words with apostrophes (contractions like "don't", "it's")
  tokens = tokens.replace(/(?=\S*['])([a-zA-Z']+)/gi, '')

  // Step 3: Remove punctuation, special characters, and newlines
  tokens = tokens.replace(/\.\s|,|;|'|"|"|\?|\(|\)|\[|\]|\/|-|–|§|&amp;|\n/g, ' ')

  // Step 4: Remove common stop words (articles, conjunctions, prepositions)
  // These words don't add much meaning to search results
  tokens = tokens.replace(/\b(the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, ' ')

  // Step 5: Split into words and deduplicate
  tokens = tokens.split(' ')
  const deduped = [...(new Set(tokens))]
  const dedupedStr = deduped.join(' ')

  // Step 6: Normalize whitespace (remove multiple consecutive spaces)
  const result = dedupedStr.replace(/[ ]{2,}/g, ' ').trim()

  return result
}
