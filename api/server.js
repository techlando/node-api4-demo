const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>HI MOMMA HERUKU DEVELOPMENT!!!</h1>')
})
module.exports = server;