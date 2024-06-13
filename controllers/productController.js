const Product = require('../models/productModels')
const productController = {
    async index(req, res, next) {
        let categories;
        try{
            categories = await Product.find();
        } catch (error) {
            res.status(404).json({ error: "Server error.", serverError: error });
        }
        res.status(200).json(product);
    },
    async store(req, res, next) {
        let cat;
        try {
            const { category, sub_category, product, price } = req.body;
            console.log(req.body);
            cat = await Product.create({ category, sub_category, product, price });
        } catch (error) {
            res.status(404).json({ error: "Server error.", serverError: error}); 
        }
        res.status(201).json(cat);
    },
    async delete(req, res, next) {
        let cat;
        try {
            const { id } = req.body;
            cat = await Product.findByIdAndDelete({ _id: id });
        } catch (error) {
            res.status(500).json({ error: "Server error.", serverError: error}); 
        }
        res.status(200).json(cat);
    },
};


module.exports = productController;
