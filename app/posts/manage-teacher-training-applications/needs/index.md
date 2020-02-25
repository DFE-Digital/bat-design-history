---js
{
  tags: false,
  layout: "list",
  title: "User needs",
  description: "User needs for the Manage teacher training applications service",
  pagination: {
    data: "collections.need",
    reverse: true,
    size: 50,
    before: function(data) {
      return data.filter(item => {
        return item.data.tags.includes('manage-teacher-training-applications');
      });
    }
  },
  permalink: "manage-teacher-training-applications/needs/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% else %}index{% endif %}.html"
}
---
