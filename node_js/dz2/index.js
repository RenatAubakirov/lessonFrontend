// Функция для генерации случайного имени
function generateRandomName() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
    return names[Math.floor(Math.random() * names.length)];
}

// Функция для генерации случайного числа в диапазоне
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Экспорт функций
module.exports = {
    generateRandomName,
    generateRandomNumber,
};