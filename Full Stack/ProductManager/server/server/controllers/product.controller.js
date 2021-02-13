const Product = require("../models/product.model");



module.exports.createProduct =(req , res) =>{
Product.create(req.body)
.then(newProduct=>res.json(newProduct))
.catch(err => res.json(err));


};


module.exports.findAllProducts = (req, res) =>{
    // Product.find()
    //     .then(AllProducts => res.json({products: AllProductss}))
    //     .catch(err => res.json({message: "Error", error: err}));
    res.json({products: "test"})
};



