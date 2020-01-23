const builtins = require('rollup-plugin-node-builtins')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')
const resolve = require('@rollup/plugin-node-resolve')

const plugins = [
  builtins(),
  commonjs(),
  json(),
  resolve()
]

module.exports = [{
  input: 'app/_javascripts/application.js',
  output: {
    legacy: true,
    file: 'public/javascripts/application.js',
    format: 'iife'
  },
  plugins
}, {
  input: 'app/admin/utils.js',
  output: {
    legacy: true,
    file: 'public/admin/utils.js',
    format: 'iife',
    name: 'utils'
  },
  plugins
}]
