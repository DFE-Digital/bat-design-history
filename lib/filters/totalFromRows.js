/**
 * Calculate the total sum from the second column of an array of rows
 * Expects rows to be arrays where the second element [1] is a number
 *
 * @param {Array<Array>} rows - Array of row arrays, where each row has a numeric value at index 1
 * @returns {number} Sum of all values from the second column
 *
 * @example
 * // Sum values from rows
 * {{ [['Item A', 10], ['Item B', 20], ['Item C', 15]] | totalFromRows }}
 * // Output: 45
 *
 * @example
 * // Used with table data
 * {{ tableData | totalFromRows }}
 */
module.exports = (rows) => {
  // Validate input
  if (!Array.isArray(rows)) {
    console.warn('totalFromRows filter: expected array, got', typeof rows)
    return 0
  }

  try {
    return rows.reduce((total, row) => {
      // Check if row is an array and has a numeric value at index 1
      if (Array.isArray(row) && typeof row[1] === 'number') {
        return total + row[1]
      }
      return total
    }, 0)
  } catch (error) {
    console.error('totalFromRows filter: error calculating total', error)
    return 0
  }
}
