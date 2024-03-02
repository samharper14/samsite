const express = require('express');
const path = require('path');  // Node.js module for working with file paths
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
