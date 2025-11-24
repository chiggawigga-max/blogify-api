// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();

// GET /api/v1/posts/  -> fetch all posts
router.get('/', (req, res) => {
  res.send('Fetching all blog posts from the modular router!');
});

// POST /api/v1/posts/ -> create a new post (example)
router.post('/', (req, res) => {
  // in a real app you'd read req.body and create a post
  res.send('Creating a new blog post...');
});

module.exports = router;
