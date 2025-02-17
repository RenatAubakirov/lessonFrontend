// Пример данных в формате JSON
const dataJSON = `[{
    "id": 1,
    "title": "Product 1",
    "description": "Description for product 1",
    "price": 10.99,
    "image": "https://via.placeholder.com/150"
}, {
    "id": 2,
    "title": "Product 2",
    "description": "Description for product 2",
    "price": 12.99,
    "image": "https://via.placeholder.com/150"
}, {
    "id": 3,
    "title": "Product 3",
    "description": "Description for product 3",
    "price": 15.99,
    "image": "https://via.placeholder.com/150"
}]`;
// Преобразование строки JSON в объект JavaScript
const data = JSON.parse(dataJSON);
