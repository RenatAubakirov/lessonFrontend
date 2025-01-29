// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы,
// но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером,
// где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва
// менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const productsData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

let lastReviewId = 4;

function createReviewElement(review) {
    const reviewElement = document.createElement("div");
    reviewElement.textContent = review.text;
    reviewElement.dataset.reviewId = review.id;
    return reviewElement;
}

function createProductItemElement(product) {
    const productItemElement = document.createElement("div");
    productItemElement.insertAdjacentHTML('afterbegin',
        `
        <div class="product__item">
        <h3 class="product__title">${product.product}</h3>
        <div class="reviews">
          <div class="reviews__list"></div>
          <form class="new-review-form">
            <textarea name="new-review-form__text" id="new-review-text-${product.index}"></textarea><br />
            <input type="button" value="Добавить отзыв" id="add-review-button-${product.index}"/>
          </form>
        </div>
      </div>
    `
    );

    const addReviewButtonElement = productItemElement.querySelector(`#add-review-button-${product.index}`);
    addReviewButtonElement.dataset.productId = product.index;
    addReviewButtonElement.addEventListener('click', addReviewHandler);

    const reviewsListElement = productItemElement.querySelector(".reviews__list");
    product.reviews.forEach(review => {
        reviewsListElement.append(createReviewElement(review));
    });

    return productItemElement;
}

function productsListView(products) {
    const productsListElement = document.querySelector(".products-list");
    productsListElement.innerHTML = "";

    products.forEach((product, index) => {
        productsListElement.append(createProductItemElement({ ...product, index }));
    });
}

function addReviewHandler(e) {
    const target = e.currentTarget;
    const productIndex = target.dataset.productId;
    const newReviewTextElement = target.parentElement.querySelector(`#new-review-text-${productIndex}`);
    const newReviewText = newReviewTextElement.value;
    if (newReviewText.length >= 50 && newReviewText.length <= 500) {
        const newReview = { id: ++lastReviewId, text: newReviewText };
        productsData[productIndex].reviews.push(newReview);
        const reviewsListElement = target.parentElement.previousElementSibling;
        reviewsListElement.append(createReviewElement(newReview));
        newReviewTextElement.value = "";
    } else {
        throw new Error("The length of the review text must be no less than 50 and no more than 500 characters.");
    }

}


window.addEventListener('load', () => { productsListView(productsData); })


