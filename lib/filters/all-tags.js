
module.exports = (collections, tagsToIgnore) => {

  // This filter is passed the collections object,
  // which lists posts under each tag. To get the list
  // of all tags, we just need the keys from the object.
  let tags = Object.keys(collections);

  // Filter out the 'all' collection
  tags = tags.filter(tag => tag != 'all')

  // Filter out any tags listed in tagsToIgnore
  tags = tags.filter(tag => !tagsToIgnore.includes(tag))

  // Filter out any tags in the form of MN999 -
  // these were used for tagging user needs.
  // (TODO: rethink this feature?)
  tags = tags.filter(tag => !tag.match(/[MPA]N\d{3}/))

  // Return tags sorted alphabetically
  return tags.sort((a, b) => a.localeCompare(b, 'en'))
}
