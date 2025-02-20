const express = require('express');
const fs = require('fs');
const path = require('path');

function updateCounter(route) {
    const pahtFile = path.join(__dirname, 'count.json');
    const counterData = JSON.parse(fs.readFileSync(pahtFile, 'utf-8'));
    counterData[route]++
    fs.writeFileSync(pahtFile, JSON.stringify(counterData, null, 2));
    return counterData[route];
}

const app = express();

app.use((req, res, next) => {
    res.locals.counter = updateCounter(req.path);
    next();
});

app.get('/', (req, res) => {
    res.send(`<a href="/about">Обо мне</a><h2>Главная</h2><p>Количество просмотров: ${res.locals.counter}</p>`);
})

app.get('/about', (req, res) => {
    res.send(`<a href="/">Главная</a><h2>Обо мне</h2><p>Количество просмотров: ${res.locals.counter}</p>`);
})


app.listen(3000);