const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/uploads/", express.static("uploads"));

const ProductRoute = require("./Routes/Product");
app.use("/products", ProductRoute);
const OrderRoute = require("./Routes/Orders");
app.use("/orders", OrderRoute);
const UserRoute = require("./Routes/User");
app.use("/user", UserRoute);

if (process.env.NODE_ENV === "development") {
  // Only in dev environment

  // Absolute path to output file
  var path = require("path");
  var filepath = path.join(__dirname, "routes.generated.txt");

  // Invoke express-print-routes
  require("express-print-routes")(app, filepath);
}

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use((req, res, next) => {
  res.status(200).json({
    // message: "It works"
    message: req.headers,
  });
  console.log("It works");
  // console.log(req.headers)
});

module.exports = app;
