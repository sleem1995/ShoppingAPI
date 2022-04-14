const express = require("express");
const app = express();
// const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./route/user");

app.use(express.json());

// app.use(cors());
// mongoose.connect("mongodb+srv://<username>:<sleem>@sandbox.0lun1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
//   console.log("conected to db");
// });
//@RaniaMahmoud Test conection on My MongoDB 
mongoose.connect("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.uzw42.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
  console.log("conected to db");
});

app.use("/user", userRoute)


app.listen(3500, () => {
  console.log("app started listening on port 3500");
});

// console.log("Hello Node js");
