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

 module.exports = { Create, findOne };