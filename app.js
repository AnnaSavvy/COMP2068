const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Importing JSON data
const items = require('./data/items.json');

// API Route
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});