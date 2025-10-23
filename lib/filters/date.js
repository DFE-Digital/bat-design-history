const { DateTime } = require('luxon')

/**
 * Format a date using Luxon formatting tokens
 *
 * @param {Date|string|DateTime} dateObject - Date to format (JavaScript Date, ISO string, or Luxon DateTime)
 * @param {string} [format] - Token-based formatting string (optional)
 * @returns {string|DateTime} Formatted date string if format provided, otherwise Luxon DateTime object
 *
 * @example
 * // Format as default Luxon DateTime
 * {{ post.date | date }}
 *
 * @example
 * // Format with custom pattern
 * {{ post.date | date("d MMMM yyyy") }}
 * // Output: "23 October 2025"
 *
 * @example
 * // Format with time
 * {{ post.date | date("d MMMM yyyy 'at' HH:mm") }}
 * // Output: "23 October 2025 at 14:30"
 *
 * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
 * @see https://11ty.dev/docs/dates/#dates-off-by-one-day
 */
module.exports = (dateObject, format) => {
  // Validate input
  if (!dateObject) {
    console.warn('date filter: dateObject is required')
    return ''
  }

  try {
    // Convert dateObject to Luxon DateTime object, using UTC to avoid timezone issues
    // This prevents the "dates off by one day" problem in Eleventy
    let date

    if (DateTime.isDateTime(dateObject)) {
      // Already a Luxon DateTime
      date = dateObject
    } else if (typeof dateObject === 'string') {
      // Parse ISO string
      date = DateTime.fromISO(dateObject, {
        locale: 'en-GB',
        zone: 'utc'
      })
    } else if (dateObject instanceof Date) {
      // Convert JavaScript Date object
      date = DateTime.fromJSDate(dateObject, {
        locale: 'en-GB',
        zone: 'utc'
      })
    } else {
      console.warn('date filter: unsupported date type', typeof dateObject)
      return ''
    }

    // Check if date is valid
    if (!date.isValid) {
      console.warn('date filter: invalid date', date.invalidReason)
      return ''
    }

    // Format date if formatting tokens provided
    if (format && typeof format === 'string') {
      return date.toFormat(format)
    }

    // Return DateTime object if no format specified
    return date
  } catch (error) {
    console.error('date filter: error formatting date', error)
    return ''
  }
}
