// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойств
// для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации
// о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет
// собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием
// уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги
// с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать
// true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь,
// что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.


class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    }

    getBook(title) {
        return this.#books.find((book) => book.title === title);
    }

    hasBook(title) {
        return Boolean(this.getBook(title));
    }

    addBook(title) {
        if (this.hasBook(title))
            throw new Error(`A book with title "${title}" already exists in the library`);

        this.#books.push({ title });
    }

    removeBook(title) {
        const book = this.getBook(title)
        if (book) {
            const index = this.#books.indexOf(book);
            this.#books.splice(index, 1);
        } else {
            throw new Error(`There is no book with the title "${title}" in the library`);
        }
    }
}


const library = new Library();
library.addBook("Book1");
library.addBook("Book2");
library.addBook("Book3");
library.addBook("Book4");
library.addBook("Book5");

console.log(library.allBooks);

try {
    library.addBook("Book3");
} catch (error) {
    console.log(error.message);
}

library.removeBook("Book2");
library.removeBook("Book4");

console.log(library.allBooks);

try {
    library.removeBook("Book4");
} catch (error) {
    console.log(error.message);
}

console.log(library.hasBook("Book5"));
console.log(library.hasBook("Book4"));
