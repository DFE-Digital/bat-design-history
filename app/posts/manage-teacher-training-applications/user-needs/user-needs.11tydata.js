module.exports = {
  layout: "user-need",
  tags: ["user-need"],
  eleventyNavigation: {
    parent: "manage-user-needs"
  },
  eleventyComputed: {
    title: data => `Need ${data.page.fileSlug}`
  }
}
