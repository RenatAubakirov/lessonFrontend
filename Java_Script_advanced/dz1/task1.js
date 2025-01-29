// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)


const musicCollection = {
    albums: [
        {
            title: "The Dark Side of the Moon",
            artist: "Pink Floyd",
            year: "1973",
        },
        {
            title: "Back in Black",
            artist: "AC/DC",
            year: "1980"
        },
        {
            title: "The Bodyguard",
            artist: "Whitney Houston",
            year: "1992"
        },
        {
            title: "Bat Out of Hell",
            artist: "Meat Loaf",
            year: "1977"
        },
        {
            title: "Their Greatest Hits (1971–1975)",
            artist: "Eagles",
            year: "1976"
        },
    ],

    [Symbol.iterator]() {
        this.current = 0;
        return this;
    },

    next() {
        if (this.current < this.albums.length) {
            return { done: false, value: this.albums[this.current++] };
        } else {
            return { done: true };
        }
    }
}



for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}