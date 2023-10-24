//nUzZcP1S4A48RFjx

const express = require("express");

const app = express();
const productrouter = require("./routes/products.routes");
const mongoose = require("mongoose");

const URL =
  "mongodb+srv://elmirmehdi96:nUzZcP1S4A48RFjx@cluster0.bkinbay.mongodb.net/products_db?retryWrites=true&w=majority";

mongoose
  .connect(URL)
  .then((result) => app.listen(3000, () => console.log(`Server Running`)))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/products", productrouter);
