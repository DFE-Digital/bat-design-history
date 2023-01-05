module.exports = {
  eleventyNavigation: {
    parent: 'User needs for Support for Publish'
  },
  eleventyComputed: {
    title: data => `Need ${data.page.fileSlug}`,
    related: data => {
      const relatedPosts = data.collections[data.page.fileSlug]
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
