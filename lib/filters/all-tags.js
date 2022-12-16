module.exports = (collection) => {
  const ignoredTags = ['all', 'post', 'find-teacher-training', 'apply-for-teacher-training', 'manage-teacher-training-applications', 'support-for-apply', 'support-for-publish', 'find-private-beta', 'user-need', 'publish-teacher-training-courses', 'awaiting-validation', 'register-trainee-teachers']

  return Object.keys(collection)
    .filter(tag => !ignoredTags.includes(tag))
    .filter(tag => !tag.startsWith('MN'))
    .filter(tag => !tag.startsWith('PN'))
    .filter(tag => !tag.startsWith('SN'))
    .filter(tag => !tag.startsWith('AN'))
    .sort((a, b) => a.localeCompare(b, 'en'))
}
