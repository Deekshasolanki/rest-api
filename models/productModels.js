const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        category: {type: String, required: true},
        sub_category: {type: String, required: true},
        product: {type: String, required: true},
        price: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;