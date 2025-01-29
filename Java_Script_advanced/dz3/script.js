document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

function addReview() {
    const productName = document.getElementById('product-name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();

    if (productName && reviewText) {
        let reviews = JSON.parse(localStorage.getItem(productName)) || [];
        reviews.push(reviewText);
        localStorage.setItem(productName, JSON.stringify(reviews));

        document.getElementById('product-name').value = '';
        document.getElementById('review-text').value = '';

        loadProducts();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const productName = localStorage.key(i);
        const li = document.createElement('li');
        li.textContent = productName;
        li.onclick = () => loadReviews(productName);
        productList.appendChild(li);
    }
}

function loadReviews(productName) {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';

    const reviews = JSON.parse(localStorage.getItem(productName)) || [];

    reviews.forEach((review, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <span>${review}</span>
            <button onclick="deleteReview('${productName}', ${index})">Удалить</button>
        `;
        reviewsContainer.appendChild(reviewItem);
    });
}

function deleteReview(productName, index) {
    let reviews = JSON.parse(localStorage.getItem(productName)) || [];
    reviews.splice(index, 1);
    localStorage.setItem(productName, JSON.stringify(reviews));
    loadReviews(productName);
}