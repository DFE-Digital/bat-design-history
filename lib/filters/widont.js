/**
 * Prevent widows
 */
module.exports = string => {
  const str = String(string);
  const nonBreakingSpaceChar = '\xA0';
  const widontRegex = new RegExp(/\s+([^\s]*)\s*$/)
  return str.replace(widontRegex, `${nonBreakingSpaceChar}$1`)
}
