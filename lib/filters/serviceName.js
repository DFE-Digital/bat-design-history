/**
 * Convert a service slug to its human-readable name
 * Used for displaying friendly service names in the design history
 *
 * @param {string} slug - The service slug identifier
 * @returns {string} Human-readable service name, or the original slug if not found
 *
 * @example
 * // Get friendly service name
 * {{ 'apply-for-teacher-training' | serviceName }}
 * // Output: "Apply for teacher training"
 *
 * @example
 * // Unknown slugs return as-is
 * {{ 'unknown-service' | serviceName }}
 * // Output: "unknown-service"
 */
module.exports = (slug) => {
  // Validate input
  if (!slug) {
    console.warn('serviceName filter: slug is required')
    return ''
  }

  if (typeof slug !== 'string') {
    console.warn('serviceName filter: slug must be a string, got', typeof slug)
    return String(slug)
  }

  // Service name lookup table
  // Maps service slugs to their human-readable names
  const serviceLabels = {
    'apply-for-teacher-training': 'Apply for teacher training',
    'becoming-a-teacher': 'Becoming a teacher',
    'claim-funding-for-mentors': 'Claim funding for mentor training',
    'find-teacher-training': 'Find teacher training courses',
    'manage-school-placements': 'Manage school placements',
    'manage-teacher-training-applications': 'Manage teacher training applications',
    'publish-teacher-training-courses': 'Publish teacher training courses',
    'register-of-placement-schools': 'Register of placement schools',
    'register-of-training-providers': 'Register of training providers',
    'register-trainee-teachers': 'Register trainee teachers',
    'support-for-publish': 'Support for Publish teacher training courses',
    'support-for-apply': 'Support for Apply for teacher training',
    'teacher-success': 'Teacher success',
    'how-to': 'How to'
  }

  // Return the mapped name, or the original slug if not found
  return serviceLabels[slug] || slug
}
