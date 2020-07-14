module.exports = {
  eleventyComputed: {
    related: data => {
      if (data.need) {
        const relatedPosts = data.collections[data.need.shortLink]
        if (relatedPosts) {
          return {
            title: 'Related posts',
            items: relatedPosts.map(item => ({
              text: item.data.title,
              description: item.data.description,
              href: item.url
            }))
          }
        }
      }
    }
  }
}
