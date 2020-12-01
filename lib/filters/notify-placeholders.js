/**
 * Use GOV.UK Notify-style placeholders in email examples
 *
 * @param {String} string Original text
 * @return {String} HTML
 *
 */
module.exports = string => {
  let html = string.replace(/\(\(([\w\s]+)\?\?/g, '<span class="placeholder-conditional">(($1??</span>')
  html = html.replace(/\(\(([\w\s]+)\)\)/g, '<span class="placeholder">(($1))</span>')

  return html
}
