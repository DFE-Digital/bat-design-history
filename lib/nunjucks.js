const Nunjucks = require('nunjucks')

const env = new Nunjucks.Environment(
  new Nunjucks.FileSystemLoader([
    'app/_components',
    'app/_layouts',
    'node_modules/govuk-frontend'
  ]), {
    lstripBlocks: true,
    trimBlocks: true
  }
)

env.addFilter('breadcrumbs', require('./filters/breadcrumbs'))
env.addFilter('case', require('./filters/change-case'))
env.addFilter('date', require('./filters/date'))
env.addFilter('fixed', require('./filters/fixed'))
env.addFilter('markdown', require('./filters/markdown'))
env.addFilter('pretty', require('./filters/pretty'))
env.addFilter('slug', require('./filters/slug'))
env.addFilter('sort', require('./filters/sort'))
env.addFilter('tokenize', require('./filters/tokenize'))
env.addFilter('totalFromRows', require('./filters/total-from-rows'))

module.exports = env
