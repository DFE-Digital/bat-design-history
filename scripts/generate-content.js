const fs = require('fs')
const path = require('path')
// const { rimrafSync } = require('rimraf')

const postsDirectory = path.join(__dirname, '../app/posts')
const imagesDirectory = path.join(__dirname, '../app/images')
const documentsDirectory = path.join(__dirname, '../app/documents')
const contentDirectory = path.join(__dirname, '../app/content')

function matchFilename(filename) {
  // Regular expression pattern to match 'nnnn-nn-nn-' where n is a digit from 0 to 9
  const pattern = /^\d{4}-\d{2}-\d{2}-/
  return pattern.test(filename)
}

function cleanFilename(filename) {
  // Remove the first 11 characters
  let newFilename = filename.substring(11)
  // Remove the file extension
  newFilename = newFilename.substring(0, newFilename.lastIndexOf('.'))
  return newFilename
}

// loop over all `app/post` content
//  - create service directories
//  - create post directories with file slug
//    - add content to index.md file
//    - move any associated images from `app/images` into the directory
//    - move any associated documents from `app/documents` into the directory
//

const run = () => {
  if (!fs.existsSync(contentDirectory)) {
    console.log('Creating directory: ' + contentDirectory)
    fs.mkdirSync(contentDirectory)
  }

  const directories = fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

    // console.log(directories);

  // create service directories
  directories.forEach((directory) => {
    destinationDir = `${contentDirectory}/${directory}`

    // try {
    //   console.log('Creating directory: ' + destinationDir)
    //   fs.mkdirSync(destinationDir)
    // } catch (e) {
    //   console.log('Directory already exists: ' + destinationDir)
    // }
  })

  // get a list of posts and create directories
  directories.forEach((directory) => {
    const sourceDir = `${postsDirectory}/${directory}`
    // console.log('==============================');
    // console.log(sourceDir);
    // console.log('==============================');
    fs.readdir(sourceDir, (err, files) => {
      // console.log(files);
      files.forEach(file => {
        if (matchFilename(file)) {
          const dirname = cleanFilename(file)
          const destinationDir = `${contentDirectory}/${directory}/${dirname}`
          // console.log(destinationDir)

          // try {
          //   console.log('Creating directory: ' + destinationDir)
          //   fs.mkdirSync(destinationDir)
          // } catch (e) {
          //   console.log('Directory already exists: ' + destinationDir)
          // }

          // copy markdown file
          // console.log(`${sourceDir}/${file}`)
          // console.log(`${destinationDir}/index.md`)
          // console.log('==============================')
          const sourceFile = `${sourceDir}/${file}`
          const destinationFile = `${destinationDir}/index.md`

          // try {
          //   console.log('Copying file: ' + destinationFile)
          //   fs.writeFileSync(destinationFile, fs.readFileSync(sourceFile))
          // } catch (e) {
          //   console.log('Could’t copy file: ' + destinationFile)
          // }

          // copy images
          const sourceImageDir = `${imagesDirectory}/${directory}/${dirname}`
          // console.log(sourceImageDir);

          if (fs.existsSync(sourceImageDir)) {

            const images = fs.readdirSync(sourceImageDir, { withFileTypes: true })
              .map(dirent => dirent.name)

            console.log(images);

            images.forEach((image) => {
              const sourceFile = `${sourceImageDir}/${image}`
              const destinationFile = `${destinationDir}/${image}`

              // console.log('Source:', sourceFile);
              // console.log('Destination:', destinationFile);

              // try {
              //   console.log('Copying file: ' + destinationFile)
              //   fs.writeFileSync(destinationFile, fs.readFileSync(sourceFile))
              // } catch (e) {
              //   console.log('Could’t copy file: ' + destinationFile)
              // }
            })

          }

        }

      })
    })

  })


  // let sourceFile, destinationFile

  // directories.forEach((item) => {
    // sourceFile = source + '/' + file
    // destinationFile = destination + '/' + file

    // const stat = fs.statSync(sourceFile)
    // if (stat && stat.isDirectory()) {
    //   try {
    //     console.log('Creating directory: ' + destinationFile)
    //     fs.mkdirSync(destinationFile)
    //   } catch (e) {
    //     console.log('Directory already exists: ' + destinationFile)
    //   }
    //   copy(sourceFile, destinationFile)
    // } else {
    //   try {
    //     if (!destinationFile.includes('.gitkeep') && !destinationFile.includes('README.md')) {
    //       console.log('Copying file: ' + destinationFile)
    //       fs.writeFileSync(destinationFile, fs.readFileSync(sourceFile))
    //     }
    //   } catch (e) {
    //     console.log('Could’t copy file: ' + destinationFile)
    //   }
    // }
  // })
}

run()
