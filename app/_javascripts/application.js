import { initAll } from '../../node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.js'

import Search from '../_components/site-search/_site-search.js'

const $searchContainer = document.querySelector('[data-module="app-search"]')
new Search($searchContainer).init()

window.onload = function () {
  document.documentElement.classList.remove('no-js')
  initAll()
}
