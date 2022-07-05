
var db = require("../db");

let model = {
    getProducts: (cb) => {
        return db.query("SELECT * FROM products", cb)
    },
    getProduct: (id, cb) => {
        return db.query("SELECT * FROM products WHERE id=?", [id], cb)
    },
    addProduct: (input, cb) => {

    

        let data = {
            id:input.id,
            name: input.name,
            sku: input.sku,
            price: input.price,
           
        }
        return db.query("INSERT INTO products SET ?", [data], cb)
    },
    updateProduct: (input, cb) => {
        let data = {
            name: input.name,
            sku: input.sku,
            price: input.price,
           
        }
        return db.query("UPDATE products SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteProduct: (id, cb) => {
        return db.query("DELETE FROM products WHERE id=?", [id], cb);
    }
}

module.exports = model;
