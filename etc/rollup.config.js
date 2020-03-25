const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')

const plugins = [
  commonjs(),
  resolve()
]

module.exports = [{
  input: 'app/_javascripts/application.js',
  output: {
    file: 'public/javascripts/application.js',
    format: 'iife'
  },
  plugins
}]
