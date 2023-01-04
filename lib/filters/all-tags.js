module.exports = (collection, tagsToIgnore) => {

  return Object.keys(collection)
    .filter(tag => !tagsToIgnore.includes(tag))
    .filter(tag => !tag.startsWith('MN'))
    .filter(tag => !tag.startsWith('PN'))
    .filter(tag => !tag.startsWith('SN'))
    .filter(tag => !tag.startsWith('AN'))
    .sort((a, b) => a.localeCompare(b, 'en'))
}
