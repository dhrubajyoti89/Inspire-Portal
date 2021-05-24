const express = require('express');
const path = require('path');
const { success, error } = require("consola");

//initialize express.
const app = express();

// Set the front-end folder to serve public assets.
app.use(express.static('views'));

// Set up a route for index.html.
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

// Start the server.
const startApp = async() => {
    try {
        const port = process.env.PORT || 5000
            // Start Listenting for the server on PORT
        app.listen(port, () =>
            success({ message: `Server started on PORT ${port}`, badge: true })
        );
    } catch (err) {
        error({
            message: `Unable to start the Server \n${err}`,
            badge: true
        });
        startApp();
    }
};

startApp();