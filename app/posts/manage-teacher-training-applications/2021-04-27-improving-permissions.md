---
title: Improving permissions
description:
date: 2021-04-27
---

After recently reviewing the content for setting up organisational and user permissions, we have made a number of content changes.

## Data sharing agreement confirmation page

If the user can manage organisations and there are organisational permissions that need to be set up they’ll see this:

...

Otherwise they’ll see this:

...

Only users who can manage users will see the ‘invite or manage users’ link.

## Setting up organisational permissions

### Start page

If the user belongs to multiple organisations

### Relationship page

...

### Check answers page

...

### Confirmation page

...

## Managing users

### User list

### User details

...

## Inviting a user

### Personal details

...

### Organisational access

...

### Permissions

...

### Additional permissions

...

### Check answers

...

### Success notification banner

...

## Managing organisational permissions

...





Only users who can manage users will see the ‘invite or manage users’ link.

## Related data

- 80% of users belong to 1 organisation
- 14% of users belong to 2 organisations
- 6% of user belong to more than 2 organisations

The maximum number of organisations a user belongs to is 8 - just one user.


#### User list page

<!-- Given I belong to Wren, Springbank and Kingston
And I have ‘manage user’ permissions for Wren and Kingston
And I don't have ‘manage user’ permission for Springbank
When I go to the users page
Then I can see only users who belong to Wren and Kingston
And I can only see that they belong to Wren, Kingston or both
And I cannot see if the users belong to Springbank (or anyone else) -->



## Future considerations

- Tracking how many users who can manage organisational permissions, sign the data sharing agreement and do not continue to set up organisational permissions
- Tracking form errors when setting up organisational permissions
-

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Desc",
    img: {
      src: "image.png"
    }
  }]
}) }}
