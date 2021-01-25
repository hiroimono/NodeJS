const router = require('express').Router();
let aktorler = require('../data');

router.get('/', (req, res) => {
    res.status(201).json(aktorler);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const selected = aktorler.find(item => item.id == id);
    selected ? res.status(200).json(selected) : res.status(404).json({ "errorMessage": "Aradiginiz sonuc bulunamadi." });
});

router.post('/add', (req, res) => {
    let newItem = req.body;
    maxId = aktorler.map(aktor => aktor.id).reduce((max, cur) => Math.max(max, cur));
    maxId++;
    newItem = { id: maxId, ...newItem };
    aktorler.push(newItem);
    res.status(201).json(aktorler);
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const delItem = aktorler.find(aktor => aktor.id == id);
    if (delItem) {
        aktorler = aktorler.filter((aktor) => aktor.id != id);
        res.status(204).end();
    } else {
        res.status(404).json({ "errorMessage": 'Silmek istediginiz öge bulunamadi.' });
    }
});

module.exports = router;