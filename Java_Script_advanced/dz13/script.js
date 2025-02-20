const data = JSON.parse(dataInfo);
const containerOfCards = document.querySelector(".cardsOfProducts");
const cartForProducts = document.getElementById("cart-list");

data.forEach((element) => {
    const cardBox = document.createElement("div");
    cardBox.classList.add("card");

    const imageOfProduct = document.createElement("div");
    imageOfProduct.classList.add(element.image);

    const cardHoverBox = document.createElement("div");
    cardHoverBox.classList.add("card__hover");

    const btnToCart = document.createElement("button");
    btnToCart.classList.add("card__hover-button");

    const toCartImg = document.createElement("img");
    toCartImg.src = "./img/toCartImg.png";
    toCartImg.alt = "add to cart button";

    const toCartBtnText = document.createElement("span");
    toCartBtnText.textContent = "Add to Cart";

    const cardInformation = document.createElement("div");
    cardInformation.classList.add("cardInformation");

    const cardHeading = document.createElement("h3");
    cardHeading.textContent = element.title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = element.desc;

    const cardPrice = document.createElement("span");
    cardPrice.classList.add("pinkTextInProducts");
    cardPrice.textContent = element.price;

    containerOfCards.appendChild(cardBox);
    cardBox.appendChild(imageOfProduct);
    imageOfProduct.appendChild(cardHoverBox);
    cardHoverBox.appendChild(btnToCart);
    btnToCart.appendChild(toCartImg);
    btnToCart.appendChild(toCartBtnText);
    cardBox.append(cardInformation);
    cardInformation.appendChild(cardHeading);
    cardInformation.appendChild(cardDescription);
    cardInformation.appendChild(cardPrice);

    const delProduct = document.createElement("img");
    delProduct.src = "./img/delete.png";
    delProduct.classList.add("del__btn");

    btnToCart.addEventListener("click", function (e) {
        cartForProducts.appendChild(cardBox);
        cardBox.appendChild(delProduct);
    });

    delProduct.addEventListener("click", function (e) {
        cartForProducts.removeChild(cardBox);
        containerOfCards.appendChild(cardBox); // Возвращаем карточку в исходный контейнер
        cardBox.removeChild(delProduct); //Удаляем кнопку удаления из корзины.
    });
});