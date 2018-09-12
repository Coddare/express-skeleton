// Load .env vars
require('dotenv').load();

const express = require("express");
const app = express();
const HOST = process.env.VIRTUAL_HOST;

app.get('/', (req, res) => {
    res.send('Working!!!');
});
app.listen(3000, () => {
    console.log('Server running at: ' + HOST);
});