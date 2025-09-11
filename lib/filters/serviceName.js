module.exports = function (slug) {
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

  // Fallback: return the raw slug if it’s not in the lookup
  return serviceLabels[slug] || slug
}
