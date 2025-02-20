const express = require('express'); // Импорт фреймворка Express.js
const { shemaUserID, shemaUserInput } = require('./validation/shemas'); // Импорт схем валидации данных пользователя
const { checkUserID, checkUserInputData } = require('./validation/validators'); // Импорт функций валидации
const UsersFileRepository = require('./repositories/usersFileReposirory'); // Импорт класса для работы с данными пользователей (хранятся в файле)
const path = require('path'); // Импорт модуля для работы с путями файлов

// Создание экземпляра репозитория для работы с данными пользователей.
// Путь к файлу user_data.json определяется относительно текущей директории.
const usersRepository = new UsersFileRepository(path.join(__dirname, 'user_data.json'));

const PORT = 3000; // Определение порта, на котором будет запущен сервер.

const app = express(); // Создание экземпляра приложения Express.

app.use(express.json()); // Добавление middleware для обработки JSON-данных в теле запроса.

// Маршрут для получения списка всех пользователей.
app.get('/users', (req, res) => {
    res.send({ users: usersRepository.getAllUsers() }); // Отправка ответа с массивом пользователей.
});

// Маршрут для получения пользователя по ID.
app.get('/users/:id', checkUserID(shemaUserID), (req, res) => {
    // Валидация параметра id с использованием middleware checkUserID и схемы shemaUserID.
    const user = usersRepository.getUserByID(Number(req.params.id)); // Получение пользователя по ID из репозитория.

    if (user) {
        res.send({ user }); // Отправка ответа с данными пользователя.
    } else {
        res.status(404).send({ user: null }); // Отправка ответа с кодом 404, если пользователь не найден.
    }
});

// Маршрут для добавления нового пользователя.
app.post('/users', checkUserInputData(shemaUserInput), (req, res) => {
    // Валидация данных пользователя из тела запроса с использованием middleware checkUserInputData и схемы shemaUserInput.
    const newUserID = usersRepository.addUser(req.body); // Добавление пользователя и получение его ID.
    res.send({ id: newUserID }); // Отправка ответа с ID нового пользователя.
});

// Маршрут для обновления данных пользователя по ID.
app.put('/users/:id', checkUserID(shemaUserID), checkUserInputData(shemaUserInput), (req, res) => {
    // Валидация параметра id и данных пользователя.
    const user = usersRepository.updateUser(Number(req.params.id), req.body); // Обновление данных пользователя.

    if (user) {
        res.send({ user }); // Отправка ответа с обновленными данными пользователя.
    } else {
        res.status(404).send({ user: null }); // Отправка ответа с кодом 404, если пользователь не найден.
    }
});

// Маршрут для удаления пользователя по ID.
app.delete('/users/:id', checkUserID(shemaUserID), (req, res) => {
    // Валидация параметра id.
    const user = usersRepository.deleteUser(Number(req.params.id)); // Удаление пользователя.

    if (user) {
        res.send({ user }); // Отправка ответа с данными удаленного пользователя.
    } else {
        res.status(404).send({ user: null }); // Отправка ответа с кодом 404, если пользователь не найден.
    }
});

// Middleware для обработки несуществующих маршрутов (404).
app.use((req, res) => {
    res.status(404).send({ message: "URL not found!" });
});

// Запуск сервера на указанном порту.
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});