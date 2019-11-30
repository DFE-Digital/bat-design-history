import Search from '../_components/site-search/_site-search.js'

var $searchContainer = document.querySelector('[data-module="app-search"]')
new Search($searchContainer).init()

window.onload = function () {
  window.GOVUKFrontend.initAll()
}
