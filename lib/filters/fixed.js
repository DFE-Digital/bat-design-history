/**
 * Format a number to a fixed number of decimal places
 * Numbers less than 1 default to 1 decimal place, otherwise 0 decimal places
 *
 * @param {number} number - Number to format
 * @param {number} [length] - Number of decimal places (optional)
 * @returns {string} Formatted number as string
 *
 * @example
 * // Format small number (< 1)
 * {{ 0.567 | fixed }}
 * // Output: "0.6"
 *
 * @example
 * // Format large number
 * {{ 42.789 | fixed }}
 * // Output: "43"
 *
 * @example
 * // Custom decimal places
 * {{ 3.14159 | fixed(2) }}
 * // Output: "3.14"
 */
module.exports = (number, length) => {
  // Validate input
  if (typeof number !== 'number' || isNaN(number)) {
    console.warn('fixed filter: expected number, got', typeof number)
    return '0'
  }

  // Default decimal places based on number size
  const decimals = length !== undefined ? length : (number < 1 ? 1 : 0)

  return number.toFixed(decimals)
}
