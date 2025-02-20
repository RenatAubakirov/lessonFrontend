// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.


const http = require('http');

const data = {
    "/": {
        content: `<a href="/about">Обо мне</a><h2>Главная</h2>`,
        counter: 0
    },
    "/about": {
        content: `<a href="/">Главная</a><h2>Обо мне</h2>`,
        counter: 0
    }
};


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');

    if (req.url in data) {
        res.statusCode = 200;
        res.end(data[req.url].content + `<p>Количество просмотров: ${++data[req.url].counter}</p>`);
    } else {
        res.statusCode = 404;
        res.end(`<h3>Page not found!</h3>`);
    }
})

const port = '3000';

server.listen(port);