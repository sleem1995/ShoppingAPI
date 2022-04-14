const express = require("express");
const app = express();
// const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./route/user");
const dotenv = require("dotenv");
const productRoute = require("./route/product");

dotenv.config();

//@RaniaMahmoud Test conection on My MongoDB >>>>>(I transfer url to file .env)
mongoose.connect(process.env.MONGO_URL, () => {
console.log("conected to db");
});

app.use(express.json());
app.use("/user", userRoute);
app.use("/product", productRoute)


app.listen(3500, () => {
  console.log("app started listening on port 3500");
});

