
module.exports = (collections, tagsToIgnore) => {
  // Get pages in the 'all' collection (which excludes some pages)
  const posts = collections.all

  // Set up empty list of tags
  let tags = []

  for (post of posts) {
    if (('tags' in post.data) && (typeof tags === 'array')) {
      // Add any new tags from the post to the array
      for (tag of post.data.tags) {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      }
    }
  }

  // Filter out any tags in the form of MN999 -
  // these were used for tagging user needs.
  // (TODO: rethink this feature?)
  tags = tags.filter(tag => !tag.match(/[MPAS]N\d{3}/))

  // Return tags sorted alphabetically
  return tags.sort((a, b) => a.localeCompare(b, 'en'))
}
