const sass = require('sass')

module.exports = class {
  data () {
    return {
      permalink: '/assets/application.css',
      eleventyExcludeFromCollections: true
    }
  }

  async render () {
    const result = sass.compile({
      file: 'app/_stylesheets/application.scss',
      loadPaths: [
        'node_modules/govuk-frontend',
        'app'
      ],
      quietDeps: true
    })

    const { css } = result

    return css.toString()
  }
}
