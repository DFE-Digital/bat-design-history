/**
 * Tag processing utilities for collections
 * Provides consts to extract, count, and organize tags from posts
 *
 * @module lib/utils/tag-processor
 */

/**
 * Pattern to match user needs tags (e.g., MN123, PN456, AN789, SN012)
 * These tags are used internally for user needs tracking and should be filtered out
 * Format: [MPAS]N followed by 3 digits
 *
 * @constant {RegExp}
 */
const USER_NEEDS_TAG_PATTERN = /[MPAS]N\d{3}/

/**
 * Processes posts to build a map of tags with their canonical names and counts
 *
 * @param {Array} posts - Array of post objects from Eleventy collection
 * @returns {Map<string, {name: string, count: number}>} Map of lowercase tag keys to tag data
 *
 * @example
 * const posts = collectionApi.getAll()
 * const tagMap = buildTagMap(posts)
 * // tagMap.get('prototype') => { name: 'Prototype', count: 5 }
 */
const buildTagMap = (posts) => {
  const tagMap = new Map()

  if (!Array.isArray(posts)) {
    console.warn('tag-processor: expected posts array, got', typeof posts)
    return tagMap
  }

  for (const post of posts) {
    // Skip posts without tags
    if (!post || !post.data || !Array.isArray(post.data.tags)) {
      continue
    }

    for (const tag of post.data.tags) {
      if (!tag || typeof tag !== 'string') {
        continue
      }

      const key = tag.toLowerCase()

      if (!tagMap.has(key)) {
        // Store the first occurrence as canonical name
        tagMap.set(key, {
          name: tag,
          count: 1
        })
      } else {
        // Increment count for subsequent occurrences
        tagMap.get(key).count++
      }
    }
  }

  return tagMap
}

/**
 * Builds a map of tags to posts that contain those tags
 *
 * @param {Array} posts - Array of post objects from Eleventy collection
 * @returns {Map<string, Array>} Map of lowercase tag keys to arrays of posts
 *
 * @example
 * const posts = collectionApi.getAll()
 * const postsByTag = buildPostsByTagMap(posts)
 * // postsByTag.get('prototype') => [post1, post2, post3]
 */
const buildPostsByTagMap = (posts) => {
  const tagMap = new Map()

  if (!Array.isArray(posts)) {
    console.warn('tag-processor: expected posts array, got', typeof posts)
    return tagMap
  }

  for (const post of posts) {
    // Skip posts without tags
    if (!post || !post.data || !Array.isArray(post.data.tags)) {
      continue
    }

    for (const tag of post.data.tags) {
      if (!tag || typeof tag !== 'string') {
        continue
      }

      const key = tag.toLowerCase()

      if (!tagMap.has(key)) {
        tagMap.set(key, [])
      }

      tagMap.get(key).push(post)
    }
  }

  return tagMap
}

/**
 * Filters out user needs tags from a tag map
 * User needs tags follow the pattern [MPAS]N\d{3} (e.g., MN123)
 *
 * @param {Map<string, {name: string, count: number}>} tagMap - Map of tags with metadata
 * @returns {Array<{name: string, count: number}>} Array of filtered tag objects
 *
 * @example
 * const tagMap = new Map([
 *   ['prototype', { name: 'Prototype', count: 5 }],
 *   ['mn123', { name: 'MN123', count: 2 }]
 * ])
 * const filtered = filterUserNeedsTags(tagMap)
 * // filtered => [{ name: 'Prototype', count: 5 }]
 */
const filterUserNeedsTags = (tagMap) => {
  if (!(tagMap instanceof Map)) {
    console.warn('tag-processor: expected Map, got', typeof tagMap)
    return []
  }

  return [...tagMap.values()].filter(tag => {
    return !tag.name.match(USER_NEEDS_TAG_PATTERN)
  })
}

/**
 * Sorts tags alphabetically by name
 *
 * @param {Array<{name: string}>} tags - Array of tag objects with name property
 * @returns {Array} Sorted array of tags
 *
 * @example
 * const tags = [{ name: 'Zebra' }, { name: 'Apple' }]
 * const sorted = sortTagsAlphabetically(tags)
 * // sorted => [{ name: 'Apple' }, { name: 'Zebra' }]
 */
const sortTagsAlphabetically = (tags) => {
  if (!Array.isArray(tags)) {
    console.warn('tag-processor: expected array, got', typeof tags)
    return []
  }

  return tags.sort((a, b) => {
    if (!a || !a.name || !b || !b.name) {
      return 0
    }
    return a.name.localeCompare(b.name, 'en')
  })
}

/**
 * Sorts posts by date in descending order (newest first)
 *
 * @param {Array} posts - Array of post objects with data.date property
 * @returns {Array} Sorted array of posts
 *
 * @example
 * const posts = [
 *   { data: { date: new Date('2023-01-01') } },
 *   { data: { date: new Date('2024-01-01') } }
 * ]
 * const sorted = sortPostsByDate(posts)
 * // sorted[0].data.date => 2024-01-01 (newest first)
 */
const sortPostsByDate = (posts) => {
  if (!Array.isArray(posts)) {
    console.warn('tag-processor: expected array, got', typeof posts)
    return []
  }

  return posts.sort((a, b) => {
    if (!a || !a.data || !a.data.date || !b || !b.data || !b.data.date) {
      return 0
    }

    try {
      const dateA = new Date(a.data.date)
      const dateB = new Date(b.data.date)

      // Sort descending (newest first)
      return dateB - dateA
    } catch (error) {
      console.warn('tag-processor: error sorting posts by date', error)
      return 0
    }
  })
}

/**
 * Sorts all post arrays in a tag map by date
 * Mutates the arrays in the map
 *
 * @param {Map<string, Array>} tagMap - Map of tags to post arrays
 * @returns {Map<string, Array>} The same map with sorted post arrays
 */
const sortTagMapPostsByDate = (tagMap) => {
  if (!(tagMap instanceof Map)) {
    console.warn('tag-processor: expected Map, got', typeof tagMap)
    return tagMap
  }

  for (const postList of tagMap.values()) {
    if (Array.isArray(postList)) {
      sortPostsByDate(postList)
    }
  }

  return tagMap
}

/**
 * Creates an allTags collection
 * Returns an alphabetically sorted array of tags with counts, excluding user needs tags
 *
 * @param {Object} collectionApi - Eleventy collection API
 * @returns {Array<{name: string, count: number}>} Sorted array of tags
 */
const createAllTagsCollection = (collectionApi) => {
  const posts = collectionApi.getAll()
  const tagMap = buildTagMap(posts)
  const filtered = filterUserNeedsTags(tagMap)
  return sortTagsAlphabetically(filtered)
}

/**
 * Creates a postsByTag collection
 * Returns a map of lowercase tag keys to arrays of posts, sorted by date
 *
 * @param {Object} collectionApi - Eleventy collection API
 * @returns {Map<string, Array>} Map of tags to sorted post arrays
 */
const createPostsByTagCollection = (collectionApi) => {
  const posts = collectionApi.getAll()
  const tagMap = buildPostsByTagMap(posts)
  return sortTagMapPostsByDate(tagMap)
}

module.exports = {
  USER_NEEDS_TAG_PATTERN,
  buildTagMap,
  buildPostsByTagMap,
  filterUserNeedsTags,
  sortTagsAlphabetically,
  sortPostsByDate,
  sortTagMapPostsByDate,
  createAllTagsCollection,
  createPostsByTagCollection
}
