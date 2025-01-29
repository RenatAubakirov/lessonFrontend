"use strict";
// 1. Найти элемент по id и вывести его в консоль
const superLink = document.getElementById("super_link");
console.log(superLink);
// 2. Внутри всех элементов с классом "card-link" поменять текст на
"ссылка"
const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach(link => {
link.textContent = "ссылка";
});
// 3. Найти все элементы с классом "card-link" внутри элемента с
//классом "card-body" и вывести их в консоль
const cardBodyLinks = document.querySelectorAll(".card-body.card-link");
console.log(cardBodyLinks);
// 4. Найти первый элемент с атрибутом data-number="50" и вывести
//его в консоль
const firstDataNumber50 =
document.querySelector('[data-number="50"]');
console.log(firstDataNumber50);
// 5. Вывести содержимое тега title в консоль
const titleTag = document.querySelector("title");
console.log(titleTag ? titleTag.textContent : "Тег title ненайден");
// 6. Получить элемент с классом "card-title" и вывести его родительский узел в консоль
const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentNode);
// 7. Создать элемент <p>, добавить текст "Привет" и вставить его вначало элемента с классом "card"
const newParagraph = document.createElement("p");
newParagraph.textContent = "Привет";
const card = document.querySelector(".card");
card.insertBefore(newParagraph, card.firstChild);
// 8. Удалить элемент h6 на странице
const h6Tag = document.querySelector("h6");
if (h6Tag) {
h6Tag.remove();
}