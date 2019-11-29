require('dotenv').config()

const path = require('path')
const express = require('express')
const nunjucks = require('./lib/nunjucks')
const resize = require('./lib/resize')

const port = process.env.PORT || 8000
const staticDir = path.join(__dirname, 'public')

const app = express()

nunjucks.express(app)
app.set('view engine', 'njk')

app.use(express.static(staticDir, {
  extensions: 'html',
  index: ['index.html', 'index.htm']
}))

app.get('/image/:size/*.:format', (req, res) => {
  // Calculate path to image file on disk
  const imagePath = req.path.replace(/image\/(\d+)(x)?(\d+)?/i, 'images')
  const image = path.join(staticDir, imagePath)

  // Extract the resizing parameters
  // URL can provide just a width e.g. image/400/image.png
  // or also a height e.g. image/480x240/image.png
  const sizeString = req.params.size
  const widthString = sizeString.split('x')[0]
  const heightString = sizeString.split('x')[1]

  // Parse size values to integers, if possible
  let width, height
  if (widthString) {
    width = parseInt(widthString)
  }
  if (heightString) {
    height = parseInt(heightString)
  }

  // Set the content-type of the response
  const format = req.params.format
  res.type(`image/${format || 'png'}`)

  // Get the resized image
  resize(image, format, width, height).pipe(res)
})

app.get('/search/', (req, res) => {
  const { query } = req.query
  const searchIndex = require('./public/search')

  function findResults (termToMatch, index) {
    return index.filter(item => {
      const regex = new RegExp(termToMatch, 'gi')
      return item.data.title.match(regex) || item.templateContent.match(regex)
    })
  }

  const results = findResults(query, searchIndex)

  res.render('search.njk', {
    app: require('./app/_data/app'),
    title: `Search results for ‘${query}’`,
    query,
    results,
    size: results.length
  })
})

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
