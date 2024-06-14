const express = require('express');
const path = require('path');
const workingHours = require('./middlewear/workingHours');

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to check working hours
app.use(workingHours);

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
