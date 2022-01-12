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
