module.exports = function (breadcrumbs, app, page, title) {
  const array = []
  const items = array.concat({
    text: app.serviceName || app.productName,
    href: '/'
  }, breadcrumbs, {
    text: title,
    href: page.url
  }).filter(Boolean)
  return items
}
