---js
{
  tags: false,
  layout: "user-needs",
  description: "User needs for Register trainee teachers",
  pagination: {
    data: "collections.user-need",
    reverse: true,
    size: 50,
    before: function(data) {
      return data.filter(item => {
        return item.data.tags.includes('register-trainee-teachers');
      });
    }
  },
  permalink: "register-trainee-teachers/user-needs/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% else %}index{% endif %}.html",
  eleventyComputed: {
    title: "User needs for Register trainee teachers",
    eleventyNavigation: {
      key: data => data.title,
      parent: "Register trainee teachers"
    }
  }
}
---
