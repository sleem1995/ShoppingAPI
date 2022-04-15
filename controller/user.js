const userModel = require('../models/user');
const UserModel = require('../models/user');
const jwt = require("jsonwebtoken");
require("dotenv").config()

/*
1-Get Done
2-Post @RaniaMahmoud Not Yet
3-Put --Done
4-Delete --Done
 */
//@RaniaMahmoud

async function Get(id) {
    let user = await userModel.findOne({ _id: id });
    console.log(user);
    return user;
}
//ToDo @RaniaMahmoud Must Do LogIn token
async function Create({ name, password, isAdmin }) {
    let user = await userModel.create({ name: name, password: password, isAdmin: isAdmin });
    console.log("User Fun "+user);
    if (user) {
        return jwt.sign({
            name: user.name,
            id: user._id
        },
            process.env.SECRET_KEY,
            {
                expiresIn: "1h"
            });
    } else {
        res.status(401).end();
    }
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
async function login({ name, password }) {
    var user = await userModel.findOne({ name: name });
    if (user) {
        //var valid = await bcrypt.compare(password, user.password);
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
        } else {
            res.status(401).end();
        }
    } else {
        res.status(422).end();
    }
}

module.exports = { Get, Create, Update, Delete, login };