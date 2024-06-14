const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = [{
  input: 'app/assets/scripts/application.js',
  output: {
    file: 'public/assets/scripts/application.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
}, {
  input: 'node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.js',
  output: {
    file: 'public/assets/scripts/govuk-frontend.js'
  },
  context: 'window'
}]
