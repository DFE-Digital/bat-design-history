/* global XMLHttpRequest */
import accessibleAutocomplete from 'accessible-autocomplete'

// CONSTANTS
var TIMEOUT = 10 // Time to wait before giving up fetching the search index
var STATE_DONE = 4 // XHR client readyState DONE

var searchIndex = null
var statusMessage = null
var searchQuery = ''
var searchCallback = function () {}
var searchResults = []

function Search ($module) {
  this.$module = $module
}

Search.prototype.fetchSearchIndex = function (indexUrl, callback) {
  var request = new XMLHttpRequest()
  request.open('GET', indexUrl, true)
  request.timeout = TIMEOUT * 1000
  statusMessage = 'Loading search index'
  request.onreadystatechange = function () {
    if (request.readyState === STATE_DONE) {
      if (request.status === 200) {
        var response = request.responseText
        var json = JSON.parse(response)
        statusMessage = 'No results found'
        searchIndex = json
        callback(json)
      } else {
        statusMessage = 'Failed to load the search index'
      }
    }
  }
  request.send()
}

Search.prototype.findResults = function (searchQuery, searchIndex) {
  return searchIndex.filter(item => {
    const regex = new RegExp(searchQuery, 'gi')
    return item.data.title.match(regex) || item.templateContent.match(regex)
  })
}

Search.prototype.renderResults = function () {
  if (!searchIndex) {
    return searchCallback(searchResults)
  }

  const resultsArray = this.findResults(searchQuery, searchIndex).reverse()

  searchResults = resultsArray.map(function (result) {
    return result
  })

  searchCallback(searchResults)
}

Search.prototype.handleSearchQuery = function (query, callback) {
  searchQuery = query
  searchCallback = callback

  this.renderResults()
}

Search.prototype.handleOnConfirm = function (result) {
  var path = result.url
  if (!path) {
    return
  }
  window.location.href = path
}

Search.prototype.inputValueTemplate = function (result) {
  if (result) {
    return result.data.title
  }
}

Search.prototype.resultTemplate = function (result) {
  if (result) {
    var elem = document.createElement('span')
    var resultTitle = result.data.title
    elem.textContent = resultTitle

    var section = document.createElement('span')
    section.className = 'app-site-search--section'
    section.innerHTML = result.data.section + '<br>' + result.dateString

    elem.appendChild(section)
    return elem.innerHTML
  }
}

Search.prototype.init = function () {
  var $module = this.$module
  if (!$module) {
    return
  }

  // The Accessible Autocomplete only works in IE9+ so we can use newer JavaScript features here
  // but need to check for browsers that do not have these features and force the fallback by returning early.
  // http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
  var featuresNeeded = (
    'querySelector' in document &&
    'addEventListener' in window &&
    !!(Array.prototype && Array.prototype.forEach)
  )

  if (!featuresNeeded) {
    return
  }

  accessibleAutocomplete({
    element: $module,
    id: 'app-site-search__input',
    cssNamespace: 'app-site-search',
    displayMenu: 'overlay',
    placeholder: $module.querySelector('[for=app-site-search__input]').innerText,
    confirmOnBlur: false,
    autoselect: true,
    source: this.handleSearchQuery.bind(this),
    onConfirm: this.handleOnConfirm,
    templates: {
      inputValue: this.inputValueTemplate,
      suggestion: this.resultTemplate
    },
    tNoResults: function () { return statusMessage }
  })

  var searchIndexUrl = $module.getAttribute('data-search-index')
  this.fetchSearchIndex(searchIndexUrl, function () {
    this.renderResults()
  }.bind(this))
}

export default Search
