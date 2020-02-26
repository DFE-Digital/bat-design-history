---js
{
  tags: false,
  layout: "user-needs",
  title: "User needs",
  description: "User needs for the Apply for teacher training service",
  pagination: {
    data: "collections.user-need",
    reverse: true,
    size: 50,
    before: function(data) {
      return data.filter(item => {
        return item.data.tags.includes('apply-for-teacher-training');
      });
    }
  },
  permalink: "apply-for-teacher-training/user-needs/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% else %}index{% endif %}.html"
}
---
