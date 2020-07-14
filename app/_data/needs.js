require('dotenv').config()

const CacheAssets = require('@11ty/eleventy-cache-assets')

module.exports = async function () {
  const { TRELLO_KEY, TRELLO_TOKEN } = process.env
  const trelloBoard = async (id) => {
    const url = `https://api.trello.com/1/boards/${id}/cards?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`

    try {
      const data = await CacheAssets(url, {
        duration: '1d',
        type: 'json'
      })

      return data
    } catch (error) {
      console.warn(error.message)
    }
  }

  return {
    candidate: await trelloBoard('IN4oTADj'),
    provider: await trelloBoard('5m1pMTme')
  }
}
