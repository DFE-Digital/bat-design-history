/**
 * Collections configuration for Eleventy
 * Defines all collections used in the design history
 *
 * @module lib/config/collections
 */

/**
 * Service line configuration
 * Top-level services in the becoming a teacher service line
 */
const serviceLine = [
  'app/posts/becoming-a-teacher/becoming-a-teacher.md',
  'app/posts/teacher-success/teacher-success.md'
]

/**
 * Service index pages
 * Main services that make up the becoming a teacher journey
 */
const services = [
  'app/posts/apply-for-teacher-training/apply-for-teacher-training.md',
  'app/posts/find-teacher-training/find-teacher-training.md',
  'app/posts/manage-teacher-training-applications/manage-teacher-training-applications.md',
  'app/posts/publish-teacher-training-courses/publish-teacher-training-courses.md',
  'app/posts/register-trainee-teachers/register-trainee-teachers.md',
  'app/posts/manage-school-placements/manage-school-placements.md',
  'app/posts/claim-funding-for-mentors/claim-funding-for-mentors.md'
]

/**
 * Service collection names
 * These correspond to folder names in app/posts/
 */
const serviceCollections = [
  'becoming-a-teacher',
  'apply-for-teacher-training',
  'find-teacher-training',
  'manage-teacher-training-applications',
  'publish-teacher-training-courses',
  'register-trainee-teachers',
  'manage-school-placements',
  'claim-funding-for-mentors',
  'teacher-success'
]

/**
 * Register index pages
 * Government registers related to teacher training
 */
const registers = [
  'app/posts/register-of-training-providers/register-of-training-providers.md',
  'app/posts/register-of-placement-schools/register-of-placement-schools.md'
]

/**
 * Register collection names
 * These correspond to folder names in app/posts/
 */
const registerCollections = [
  'register-of-training-providers',
  'register-of-placement-schools'
]

/**
 * Reference pages
 * Glossary, mission patches, and other reference content
 */
const reference = [
  'app/glossary.md',
  'app/mission-patches.md',
  'app/service-map.md',
  'app/posts/how-to/how-to.md'
]

module.exports = {
  serviceLine,
  services,
  serviceCollections,
  registers,
  registerCollections,
  reference
}
