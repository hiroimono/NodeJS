const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).send('NODE JS TEST PAGE');
});

server.listen(8080, '127.0.0.1', () => {
    console.log('http://127.0.0.1 is listening...');
})