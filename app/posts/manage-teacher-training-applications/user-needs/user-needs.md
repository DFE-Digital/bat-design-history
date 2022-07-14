---js
{
  layout: "user-needs",
  description: "User needs for the Manage teacher training applications service",
  permalink: "manage-teacher-training-applications/user-needs/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% else %}index{% endif %}.html",
  eleventyComputed: {
    title: "User needs for Manage",
    eleventyNavigation: {
      key: data => data.title,
      parent: "Manage teacher training applications"
    }
  }
}
---
