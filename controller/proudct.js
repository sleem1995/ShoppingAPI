const productModel = require('../models/product');
const sellerHelper=require('../controller/seller');
async function Create({ name, description, price,photo,userId }) {
    let product = await productModel.create({name:name,description:description,price:price,photo:photo,userId:userId });
    return product;
}


async function GetAll() {
    let products = await productModel.find({})
    return products;
}

async function GetByName(name) {
    let product = await productModel.findOne({ name: name });
    return product;
}
// after auth
async function GetProductBySellerName(name) {
   return sellerHelper.GetProductsBySellerName(name);
}

async function Update(name, { name, description, price,photo}) {
    await productModel.findByIdAndUpdate({ name: name },
    {
        name: name,
        description: description,
        price: price,
        photo: photo,
    })
    let product = await productModel.findOne(id == id);
    console.log(product);
    return product;
}
async function Delete(name) {
    let product = await productModel.findOneAndRemove({ name: name})
    console.log(product);
    return product;
}
module.exports = {Create,GetAll,GetByName,Update, Delete,GetProductBySellerName};