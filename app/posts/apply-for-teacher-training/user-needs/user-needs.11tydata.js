module.exports = {
  layout: "user-need",
  tags: ["user-need"],
  eleventyNavigation: {
    parent: "apply-user-needs"
  },
  eleventyComputed: {
    title: data => `Need ${data.page.fileSlug}`
  }
}
