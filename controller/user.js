const userModel = require('../models/user');
const UserModel = require('../models/user');
/*
1-Get Done
2-Post @RaniaMahmoud Not Yet
3-Put --Done
4-Delete --Done
 */
//@RaniaMahmoud

/* /user/Get */
async function Get(id) {
    let user = await userModel.findOne({ _id: id });
    console.log(user);
    return user;
}
//ToDo @RaniaMahmoud Must Do LogIn token
async function Create({ name, password, isAdmin }) {
    let user = await userModel.create({ name: name, password: password, isAdmin: isAdmin });
    console.log("User Fun "+user);
    return user;
}

async function Update(id, { name, password }) {
    await UserModel.findOneAndUpdate({ _id: id }, {
        name: name,
        password: password
    })
    let user =await Get(id)
    console.log(user);
    return user;
}
async function Delete(id) {
    let user = await UserModel.findOneAndDelete({ _id: id })
    console.log(user);
    return user;
}
module.exports = { Get, Create, Update, Delete };