---js
{
  layout: "user-needs",
  description: "User needs for the Apply for teacher training service",
  permalink: "apply-for-teacher-training/user-needs/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% else %}index{% endif %}.html",
  eleventyComputed: {
    title: "User needs for Apply",
    eleventyNavigation: {
      key: data => data.title,
      parent: "Apply for teacher training"
    }
  }
}
---
