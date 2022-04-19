const SellerModel=require("../models/seller");

function findOne(Name){
   var seller= SellerModel.findOne({name : Name});
   return seller;
}

async function Create({ name, password }) {
    let seller = await SellerModel.create({ name: name, password: password});
    //console.log(user);
    return seller;
}
function GetProductsBySellerName(name)
{
   var {products}=findOne(name);
   console.log(products);
   return products;
}

 module.exports = { Create, findOne,GetProductsBySellerName };