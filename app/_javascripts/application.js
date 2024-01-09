import { initAll as GOVUKFrontend } from 'govuk-frontend'


import Search from '../_components/site-search/_site-search.js'

const $searchContainer = document.querySelector('[data-module="app-search"]')
new Search($searchContainer).init()

// Initiate scripts on page load
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js')
  GOVUKFrontend()
})
