---js
{
  layout: "user-needs",
  description: "User needs for Support for Apply",
  permalink: "support-for-apply/user-needs/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% else %}index{% endif %}.html",
  eleventyComputed: {
    title: "User needs for Support for Apply",
    eleventyNavigation: {
      key: data => data.title,
      parent: "Support for Apply"
    }
  }
}
---
