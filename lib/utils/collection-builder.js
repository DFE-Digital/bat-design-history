/**
 * Collection builder utilities
 * Provides functions to register collections with Eleventy
 *
 * @module lib/utils/collection-builder
 */

const collectionsConfig = require('../config/collections')
const tagProcessor = require('./tag-processor')

/**
 * Registers all collections with Eleventy
 * This is the main function called from .eleventy.js
 *
 * @param {Object} eleventyConfig - Eleventy configuration object
 *
 * @example
 * const { registerAllCollections } = require('./lib/utils/collection-builder')
 * registerAllCollections(eleventyConfig)
 */
const registerAllCollections = (eleventyConfig) => {
  // Register static collections (single files or specific lists)
  registerStaticCollections(eleventyConfig)

  // Register dynamic collections (all files in a folder)
  registerDynamicCollections(eleventyConfig)

  // Register tag-based collections
  registerTagCollections(eleventyConfig)
}

/**
 * Registers collections for specific static files
 *
 * @param {Object} eleventyConfig - Eleventy configuration object
 */
const registerStaticCollections = (eleventyConfig) => {
  // Service line collection
  eleventyConfig.addCollection('serviceLine', (collection) => {
    return collection.getFilteredByGlob(collectionsConfig.serviceLine)
  })

  // Services index pages
  eleventyConfig.addCollection('services', (collection) => {
    return collection.getFilteredByGlob(collectionsConfig.services)
  })

  // Registers index pages
  eleventyConfig.addCollection('registers', (collection) => {
    return collection.getFilteredByGlob(collectionsConfig.registers)
  })

  // Reference pages
  eleventyConfig.addCollection('reference', (collection) => {
    return collection.getFilteredByGlob(collectionsConfig.reference)
  })
}

/**
 * Registers collections that contain all files in a folder
 *
 * @param {Object} eleventyConfig - Eleventy configuration object
 */
const registerDynamicCollections = (eleventyConfig) => {
  // Register service collections
  collectionsConfig.serviceCollections.forEach((serviceName) => {
    eleventyConfig.addCollection(serviceName, (collection) => {
      return collection.getFilteredByGlob(`app/posts/${serviceName}/*.md`)
    })
  })

  // Register register collections
  collectionsConfig.registerCollections.forEach((registerName) => {
    eleventyConfig.addCollection(registerName, (collection) => {
      return collection.getFilteredByGlob(`app/posts/${registerName}/*.md`)
    })
  })

  // Register how-to collection
  eleventyConfig.addCollection('how-to', (collection) => {
    return collection.getFilteredByGlob('app/posts/how-to/*.md')
  })
}

/**
 * Registers tag-based collections
 *
 * @param {Object} eleventyConfig - Eleventy configuration object
 */
const registerTagCollections = (eleventyConfig) => {
  // All tags collection (sorted, with counts, user needs tags filtered out)
  eleventyConfig.addCollection('allTags', (collectionApi) => {
    return tagProcessor.createAllTagsCollection(collectionApi)
  })

  // Posts grouped by tag (sorted by date)
  eleventyConfig.addCollection('postsByTag', (collectionApi) => {
    return tagProcessor.createPostsByTagCollection(collectionApi)
  })
}

module.exports = {
  registerAllCollections,
  registerStaticCollections,
  registerDynamicCollections,
  registerTagCollections
}
