module.exports = {
  tags: ["user-need"],
  eleventyNavigation: {
    parent: "apply-user-needs"
  },
  eleventyComputed: {
    title: data => `Need ${data.page.fileSlug}`,
    related: data => {
      const relatedPosts = data.collections[data.page.fileSlug];
      if (relatedPosts) {
        return {
          title: "Related posts",
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
