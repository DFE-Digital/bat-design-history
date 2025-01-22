const markdown = require('markdown-it')
const anchor = require('markdown-it-anchor')

module.exports = (() => {
  const opts = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }

  const parser = markdown(opts)

  // Define class-based alignment handling for tables
  const alignments = ['left', 'center', 'right']

  // Override the `table_open` rule to add a class to the table
  parser.renderer.rules.table_open = (tokens, idx, options, env) => {
    tokens[idx].attrPush(['class', 'app-table']) // Add your custom class
    return parser.renderer.renderToken(tokens, idx, options)
  }

  // Override `td_open` to handle alignment classes
  parser.renderer.rules.td_open = (tokens, idx, options, env) => {
    const token = tokens[idx]
    const align = token.attrGet('style')?.match(/text-align:(left|center|right)/)?.[1]
    if (align && alignments.includes(align)) {
      token.attrPush(['class', `app-table__cell app-table__cell--align-${align}`])
      token.attrs = token.attrs.filter(attr => attr[0] !== 'style') // Remove inline style
    }
    return `<td${renderAttrs(token)}>`
  }

  // Override `th_open` to handle alignment classes
  parser.renderer.rules.th_open = (tokens, idx, options, env) => {
    const token = tokens[idx]
    const align = token.attrGet('style')?.match(/text-align:(left|center|right)/)?.[1]
    if (align && alignments.includes(align)) {
      token.attrPush(['class', `app-table__header app-table__header--align-${align}`])
      token.attrs = token.attrs.filter(attr => attr[0] !== 'style') // Remove inline style
    }
    return `<th${renderAttrs(token)}>`
  }

  // Helper function to render attributes
  const renderAttrs = (token) => {
    return token.attrs ? ' ' + token.attrs.map(attr => `${attr[0]}="${attr[1]}"`).join(' ') : ''
  }

  parser
    .use(require('markdown-it-abbr'))
    .use(anchor, {
      permalink: anchor.permalink.ariaHidden()
    })
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-ins'))
    .use(require('markdown-it-image-figures'), {
      figcaption: true
    })
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-table-of-contents'), {
      containerHeaderHtml: '<h2 class="govuk-heading-l" id="contents">Contents</h2>',
      includeLevel: [2, 3]
    })

  parser.linkify.set({ fuzzyLink: false })

  return parser
})()
