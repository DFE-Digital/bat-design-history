require('dotenv').config()

const path = require('path')
const express = require('express')
const resize = require('./lib/resize')

const port = process.env.PORT || 8000
const staticDir = path.join(__dirname, 'public')

const app = express()
const env = (process.env.NODE_ENV || 'development').toLowerCase()

// Force HTTPS on production
// Based on the govuk-prototype-kit
if (env === 'production') {
  app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      // 302 temporary - this is a feature that can be disabled
      return res.redirect(302, 'https://' + req.get('Host') + req.url)
    }

    // Mark proxy as secure (allows secure cookies)
    req.connection.proxySecure = true
    next()
  })

  app.set('trust proxy', 1) // needed for secure cookies on heroku
}

app.use(express.static(staticDir, {
  extensions: 'html',
  index: ['index.html', 'index.htm']
}))

app.all('/publish-teacher-training/:path', function (req, res) {
  res.redirect(`/publish-teacher-training-courses/${req.params.path}`)
})

app.all('/apply-teacher-training/:path', function (req, res) {
  res.redirect(`/apply-for-teacher-training/${req.params.path}`)
})

app.all('/publish-teacher-training', function (req, res) {
  res.redirect(`/publish-teacher-training-courses`)
})

app.all('/apply-teacher-training', function (req, res) {
  res.redirect(`/apply-for-teacher-training`)
})

app.get('/image/:size/*.:ext', (req, res) => {
  const format = req.params.ext
  const allowedFormats = ['heic', 'heif', 'jpeg', 'jpg', 'png', 'raw', 'tiff', 'webp']

  // Calculate path to image file on disk
  const imagePath = req.path.replace(/image\/(\d+)(x)?(\d+)?/i, 'images')
  const image = path.join(staticDir, imagePath)

  // Don’t resize SVG images
  if (!allowedFormats.includes(format)) {
    res.redirect(imagePath)
    return
  }

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
  res.type(`image/${format || 'png'}`)

  // Get the resized image
  resize(image, format, width, height).pipe(res)
})

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
