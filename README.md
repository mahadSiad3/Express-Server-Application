# Express-Server-Application
How to Use

Users

To interact with the users API:

Use the provided routes to perform CRUD operations on users.

Example POST /users request body:

{
  "name": "John Doe",
  "email": "john@example.com"
}

Posts

To interact with the posts API:

Use the provided routes to manage posts.

Example POST /posts request body:

{
  "title": "My First Post",
  "content": "This is the content of my post.",
  "userId": 1
}

Comments

To interact with the comments API:

Use the provided routes to manage comments.

Example POST /comments request body:

{
  "postId": 1,
  "userId": 1,
  "comment": "Great post!"
}