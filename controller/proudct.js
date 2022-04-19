const productModel = require('../models/product');
const sellerHelper=require('../controller/seller');
async function Create({ name, description, price,photo,userId }) {
    let product = await productModel.create({name:name,description:description,price:price,photo:photo,userId:userId });
    return product;
}
//For User  محدش يغيرها
async function GetAll() {
    let products = await productModel.find({})
    return products;
}

async function SellerProducts(id) {
    console.log(id);
    // let products = ;
    // console.log("asds  "+products);
    return await productModel.find({sellerID:id});
}

async function GetByName(name) {
    let product = await productModel.findOne({ name: name });
    return product;
}
// after auth
async function GetProductBySellerName(name) {
    console.log(name);

   return sellerHelper.GetProductsBySellerName(name);
}

async function Update(id, { name,description, price,photo}) {
    console.log("INFUNCtion")
    await productModel.findByIdAndUpdate({ _id: id },
    {
        name:name,
        description: description,
        price: price,
        photo: photo,
    })
    let product = await productModel.findOne({_id:id});
    console.log(product);
    return product;
}
async function Delete(name) {
    let product = await productModel.findOneAndRemove({ name: name})
    console.log(product);
    return product;
}
module.exports = {Create,GetAll,GetByName,Update, Delete,GetProductBySellerName,SellerProducts};