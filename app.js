// Import the Express framework
const express = require('express');
const app = express();

// Define the port to run the app
const PORT = 8080;

// Define a simple route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Simple Node.js Web App!</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
