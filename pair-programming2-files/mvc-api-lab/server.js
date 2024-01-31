const express = require('express');
const app = express();

// ... (other routes and middleware)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const notFoundMiddleware = require('./middleware/notFoundMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
const usersRouter = require('./routes/usersRoutes');
// Define the first route
app.get('/services', (req, res) => {
  res.send('This is the first endpoint.');
});

// Define the second route
app.get('/tours', (req, res) => {
  res.send('This is the second endpoint.');
});

app.get('/users', (req, res) => {
    app.use('./routes/usersRoutes', require('./routes/usersRoutes'));
  });
// Custom 404 Middleware
const notFoundCb = (req, res, next) => {
  res.status(404).send("Sorry, the requested page couldn't be found.");
};

app.use(notFoundCb);

// After all other routes
app.use(notFoundMiddleware);

// Error Middleware should be the last one
app.use(errorMiddleware);