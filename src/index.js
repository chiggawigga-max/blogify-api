// src/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// import the posts router
const postRouter = require('./routes/posts.routes.js');

// optional if you need to parse JSON request bodies
app.use(express.json());

// main welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// mount the posts router at /api/v1/posts
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
