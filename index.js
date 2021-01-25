const express = require('express');
const server = express();
const aktorlerRouter = require('./Routers/aktorlerRouter');
server.use(express.json());
server.use('/aktorler', aktorlerRouter);

const chalk = require('chalk-animation');

server.get('/', (req, res) => {
    res.status(200).send('Page was sucessfully initiated.');
});

server.listen(8080, '127.0.0.1', () => {
    chalk.neon('http://127.0.0.1 is listening...');
})