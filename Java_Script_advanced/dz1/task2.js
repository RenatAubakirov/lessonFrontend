// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.
// Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.
// В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.


class Cafe {
    constructor() {
        this.dishType = {
            pizza: "Пицца",
            sushi: "Суши",
            desserts: "Десерты"
        };

        this.menu = [
            { type: this.dishType.pizza, name: "Пепперони" },
            { type: this.dishType.desserts, name: "Тирамису" },
            { type: this.dishType.sushi, name: "Калифорния" },
            { type: this.dishType.pizza, name: "Маргарита" },
            { type: this.dishType.desserts, name: "Чизкейк" },
        ];

        // Блюда, которые может готовить повар
        this.dishesTypeByCooks = new Map()
            .set("Виктор", [this.dishType.pizza])
            .set("Ольга", [this.dishType.sushi])
            .set("Дмитрий", [this.dishType.desserts]);


        // Повара, которые могут готовить блюда
        this.cooksByDishType = new Map()
            .set(this.dishType.pizza, ["Виктор"])
            .set(this.dishType.sushi, ["Ольга"])
            .set(this.dishType.desserts, ["Дмитрий"]);

        this.clients = [
            { name: "Алексей" },
            { name: "Мария" },
            { name: "Ирина" },
        ];

        this.orders = new Map()
            .set(this.clients[0], [this.menu[0], this.menu[1]])
            .set(this.clients[1], [this.menu[2], this.menu[3]])
            .set(this.clients[2], [this.menu[4]])
    }

    getCooks(dishName) {
        const dish = this.menu.find((dish) => dish.name === dishName);
        return this.cooksByDishType.get(dish.type);
    }

    getOrders(clientName) {
        const client = this.clients.find((client) => client.name === clientName);
        return this.orders.get(client);
    }
}

const cafe = new Cafe();

const dishName = "Калифорния";
const cooks = cafe.getCooks("Калифорния");
if (cooks) {
    console.log(`${dishName} - могут готовить: ${cooks.join(", ")}`);
}


const clientName = "Мария";
const orders = cafe.getOrders(clientName);
if (orders) {
    console.log(`Клиент ${clientName} заказал:`);
    orders.forEach(dish => {
        console.log(`${dish.type} ${dish.name}`);
    });
}



