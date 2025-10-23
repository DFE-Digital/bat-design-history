import accessibleAutocomplete from 'accessible-autocomplete'

// CONSTANTS
const TIMEOUT = 10000 // Time to wait before giving up fetching the search index (milliseconds)

let searchIndex = null
let statusMessage = null
let searchQuery = ''
let searchCallback = function () {}
let searchResults = []

/**
 * Search component for site-wide search functionality
 * @param {HTMLElement} $module - The search module element
 */
function Search ($module) {
  this.$module = $module
}

/**
 * Fetches the search index from the provided URL with timeout handling
 * @param {string} indexUrl - The URL to fetch the search index from
 * @param {Function} callback - Callback function to execute after successful fetch
 * @returns {Promise<void>}
 */
Search.prototype.fetchSearchIndex = async function (indexUrl, callback) {
  statusMessage = 'Loading search index'

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT)

    const response = await fetch(indexUrl, {
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const json = await response.json()
    statusMessage = 'No results found'
    searchIndex = json
    callback(json)
  } catch (error) {
    if (error.name === 'AbortError') {
      statusMessage = 'Search index request timed out'
      console.error('Search index fetch timed out after', TIMEOUT / 1000, 'seconds')
    } else {
      statusMessage = 'Failed to load the search index'
      console.error('Failed to fetch search index:', error)
    }
  }
}

/**
 * Escapes special characters in a string for use in a regular expression
 * @param {string} string - The string to escape
 * @returns {string} The escaped string
 */
Search.prototype.escapeRegExp = function (string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Finds results matching the search query in the search index
 * @param {string} searchQuery - The search query string
 * @param {Array} searchIndex - The search index to search through
 * @returns {Array} Filtered array of search results
 */
Search.prototype.findResults = function (searchQuery, searchIndex) {
  if (!searchQuery || !searchIndex || !Array.isArray(searchIndex)) {
    return []
  }

  try {
    const escapedQuery = this.escapeRegExp(searchQuery)
    const regex = new RegExp(escapedQuery, 'gi')

    return searchIndex.filter(item => {
      if (!item || !item.data) {
        return false
      }

      const titleMatch = item.data.title && item.data.title.match(regex)
      const contentMatch = item.templateContent && item.templateContent.match(regex)

      return titleMatch || contentMatch
    })
  } catch (error) {
    console.error('Error finding search results:', error)
    return []
  }
}

/**
 * Renders the search results
 */
Search.prototype.renderResults = function () {
  if (!searchIndex) {
    return searchCallback(searchResults)
  }

  const resultsArray = this.findResults(searchQuery, searchIndex).reverse()
  searchResults = resultsArray
  searchCallback(searchResults)
}

/**
 * Handles a search query input
 * @param {string} query - The search query
 * @param {Function} callback - Callback to invoke with results
 */
Search.prototype.handleSearchQuery = function (query, callback) {
  searchQuery = query
  searchCallback = callback
  this.renderResults()
}

/**
 * Handles when a user confirms/selects a search result
 * @param {Object} result - The selected search result
 */
Search.prototype.handleOnConfirm = function (result) {
  if (!result || !result.url) {
    return
  }
  window.location.href = result.url
}

/**
 * Template for the input value when a result is selected
 * @param {Object} result - The search result
 * @returns {string|undefined} The title to display in the input
 */
Search.prototype.inputValueTemplate = function (result) {
  return result && result.data ? result.data.title : undefined
}

/**
 * Template for rendering a search result in the dropdown
 * @param {Object} result - The search result
 * @returns {string|undefined} HTML string for the result
 */
Search.prototype.resultTemplate = function (result) {
  if (!result || !result.data) {
    return undefined
  }

  const elem = document.createElement('span')
  elem.textContent = result.data.title

  if (result.data.section || result.dateString) {
    const section = document.createElement('span')
    section.className = 'app-site-search--section'

    const details = []
    if (result.data.section) details.push(result.data.section)
    if (result.dateString) details.push(result.dateString)

    section.innerHTML = details.join('<br>')
    elem.appendChild(section)
  }

  return elem.innerHTML
}

/**
 * Initializes the search component
 * Sets up the accessible autocomplete and fetches the search index
 */
Search.prototype.init = function () {
  const $module = this.$module
  if (!$module) {
    return
  }

  // Feature detection to ensure browser supports required features
  // The Accessible Autocomplete requires these features to work properly
  const featuresNeeded = (
    'querySelector' in document &&
    'addEventListener' in window &&
    'fetch' in window &&
    'AbortController' in window &&
    Array.prototype &&
    Array.prototype.forEach
  )

  if (!featuresNeeded) {
    console.warn('Browser does not support required features for search')
    return
  }

  const label = $module.querySelector('[for=app-site-search__input]')
  if (!label) {
    console.error('Search label not found')
    return
  }

  accessibleAutocomplete({
    element: $module,
    id: 'app-site-search__input',
    cssNamespace: 'app-site-search',
    displayMenu: 'overlay',
    placeholder: label.innerText,
    confirmOnBlur: false,
    autoselect: true,
    source: this.handleSearchQuery.bind(this),
    onConfirm: this.handleOnConfirm,
    templates: {
      inputValue: this.inputValueTemplate,
      suggestion: this.resultTemplate
    },
    tNoResults: () => statusMessage
  })

  const searchIndexUrl = $module.getAttribute('data-search-index')
  if (!searchIndexUrl) {
    console.error('Search index URL not found')
    statusMessage = 'Search is not available'
    return
  }

  this.fetchSearchIndex(searchIndexUrl, () => {
    this.renderResults()
  })
}

export default Search
