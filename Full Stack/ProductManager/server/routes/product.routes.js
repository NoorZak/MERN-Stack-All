const ProductController = require("../controllers/Product.controller");

module.exports = app =>{
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.getProd);
 
    app.post("/api/products/create", ProductController.createProduct);
}