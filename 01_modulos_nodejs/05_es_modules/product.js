export class Product {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }

    get SayProduct() {
        console.log(`The product is ${this.name} and your price is R$${this.price}`);
    }
}

export const createProduct = (name, price, id) => {
    return new Product(name, price, id);
}

