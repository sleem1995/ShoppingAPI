const SellerModel=require("../models/seller");
const ProductModel=require("../models/product");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const bcrypt = require('bcryptjs');

async function findOne(Name){
   var seller= await SellerModel.findOne({name : Name});
   console.log("Seller "+seller);
   return seller;
}

async function Create({ name, password , products}) {
    let seller = await SellerModel.create({ name: name, password: password,products:products});
    //console.log(user);
    return seller;
}
//Not Work Edit @asmaa497 @AsmaaAAAAAAAAAAAAAAAAAA @asmaa497 @EhsanAhmed @RaniaMahmoud
async function GetProductsBySellerName(name)
{
   var {products} = await SellerModel.findOne({name : name},{products:1,_id:0});
   console.log(products);
   var ProductsByUser=[]
   products.forEach((product) => {
      var productItem = ProductModel.findOne({_id:product});
      if(productItem){
         ProductsByUser.push(productItem);
         console.log("productItem "+ productItem);
      }
   });
   console.log("ProductArray "+ProductsByUser);
   return ProductsByUser;
}

async function login({ name, password }) {
   console.log("NAME ="+name);
   var user = await SellerModel.findOne({ name: name });
   console.log("user ="+user);
   console.log("Login");
   if (user) {
       console.log("Login IF");
       //var valid = await bcrypt.compare(password, user.password);
       //console.log("Login IF 2 "+valid);
       if (true) {
           console.log("Afetr "+process.env.SECRET_KEY);
           return jwt.sign({
               name: user.name,
               id: user._id
           },
           process.env.SECRET_KEY,
           {
               expiresIn: "1h"
            });
       } 
       else {
           res.status(401).end();
       }
   } else {
       res.status(422).end();
   }
}

async function CheckSeller(id){
   // var seller = ;
   // console.log("seller "+seller);
   // if(seller){
   //    return true;
   // }else{
   //    return false;
   // }
   return await SellerModel.findOne({_id:id})
}
module.exports = { Create, findOne,GetProductsBySellerName,login,CheckSeller };