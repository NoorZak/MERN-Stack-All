const Product = require("../models/Product.model");




module.exports.createProduct =(req , res) =>{
Product.create(req.body)
.then(newProduct=>res.json(newProduct))
.catch(err => res.json(err));


};


module.exports.findAllProducts = (_req, res) =>{
    Product.find()
        .then(AllProducts => res.json(AllProducts))
        .catch(err => res.json({message: "Error", error: err}));
    // res.json({products: "test"})
};


module.exports.getProd = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(prod => response.json(prod))
        .catch(err => response.json(err))
}


module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}



module.exports.deleteProduct =(request , response) =>{
    Product.deleteOne({_id:request.params.id})
    .then(deleteConfirmation => respose.json(deleteConfirmation))
    .catch(err => response.json(err))
}

