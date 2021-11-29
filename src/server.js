/**
 * Import base packages
 */
const express = require('express');
const app = express();

/**
 * Trust proxy
 */
app.enable('trust proxy');

/**
 * Set template engine
 */
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/template`);

/**
 * Configure routers
 */
app.get('/', (req, res) => {
    res.render('index', {});
});

/**
 * Setup default 404 message
 */
app.use((req, res) => {
    res.status(404);
    res.send('Not Found!')
});

/**
 * Disable powered by header for security reasons
 */
app.disable('x-powered-by');

/**
 * Start listening on port
 */
app.listen(3000, '0.0.0.0', () => {
    console.log(`App is running on: 0.0.0.0:3000`);
});
