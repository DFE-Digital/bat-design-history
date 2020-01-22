/* globals utils, nunjucks, React, CMS */

const {
  markdown
} = utils

const env = nunjucks.configure()

const Preview = ({ entry, path, context }) => {
  const data = context(entry.get('data').toJS())
  const html = env.render(path, { ...data })
  return React.createElement('div', {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })
}

const Post = ({ entry }) => React.createElement(Preview, {
  entry: entry,
  path: 'app/_layouts/admin-preview.njk',
  context: ({ title, description, date, body }) => ({
    title,
    description,
    date,
    content: markdown(body || '')
  })
})

CMS.registerPreviewTemplate('support-for-apply', Post)
