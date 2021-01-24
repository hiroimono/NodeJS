const express = require('express');
const server = express();
server.use(express.json());

const chalk = require('chalk-animation');

let aktorler = require('./data');
console.log(`aktorler: ${JSON.stringify(aktorler)}`);

server.get('/', (req, res) => {
    res.status(200).send('NODE JS TEST PAGE');
});

server.get('/aktorler/:id', (req, res) => {
    const id = req.params.id;
    const selected = aktorler.find(item => item.id == id);
    selected ? res.status(200).json(selected) : res.status(404).send("Aradiginiz sonuc bulunamadi.");
});

server.post('/aktorler/add', (req, res) => {
    const newItem = req.body;
    maxId = aktorler.map(aktor => aktor.id).reduce((max, cur) => Math.max(max, cur));
    console.log('aktorler: ', aktorler);
    maxId++;
    console.log('maxId: ', maxId);
    newItem.id = maxId;
    console.log('newItem: ', newItem);
    aktorler.push(newItem);
    console.log('aktorler: ', aktorler);
    res.status(201).json(newItem);
});

server.listen(8080, '127.0.0.1', () => {
    chalk.neon('http://127.0.0.1 is listening...');
})