const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./routes/v1');

const PORT = process.env.PORT || 8080;
const ADDR = process.env.ADDR || 'localhost';
const app = express();
const files = express.static(path.join(__dirname, '/../build'));

app.use(bodyParser.json());
app.use(files);

apiRoutes(app);

// In production return index.html for react for all unknown routes
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/../build/index.html'));
    });
}

// start Express server
app.listen(PORT, ADDR);
console.log(`server listening on ${ADDR}:${PORT}`);
