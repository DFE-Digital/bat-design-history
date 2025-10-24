/**
 * Global data configuration for Eleventy
 * Defines computed data available to all templates
 *
 * @module lib/config/global-data
 */

/**
 * Computed data object for Eleventy
 * These functions run for every page and compute dynamic values
 */
const eleventyComputed = {
  /**
   * Computes the service name from the file path
   * Extracts the service folder name from posts to automatically categorize content
   *
   * @param {Object} data - Page data object from Eleventy
   * @param {string} [data.service] - Service name from front matter (if set)
   * @param {Object} [data.page] - Page metadata from Eleventy
   * @param {string} [data.page.filePathStem] - File path without extension
   * @returns {string|null} Service name or null if not a service post
   *
   * @example
   * // For file: app/posts/apply-for-teacher-training/foo.md
   * // Returns: "apply-for-teacher-training"
   *
   * @example
   * // For file: app/glossary.md
   * // Returns: null
   */
  service: (data) => {
    // If a service is already set in front matter, use it
    if (data.service) {
      return data.service
    }

    // Check if we have page metadata
    if (!data.page || !data.page.filePathStem) {
      return null
    }

    // Extract service name from file path
    // Example: /posts/apply-for-teacher-training/foo => "apply-for-teacher-training"
    const match = data.page.filePathStem.match(/^\/posts\/([^/]+)/)

    if (match) {
      return match[1]
    }

    // No service found
    return null
  }
}

/**
 * Registers global data with Eleventy
 *
 * @param {Object} eleventyConfig - Eleventy configuration object
 */
const registerGlobalData = (eleventyConfig) => {
  eleventyConfig.addGlobalData('eleventyComputed', eleventyComputed)
}

module.exports = {
  eleventyComputed,
  registerGlobalData
}
