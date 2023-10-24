

const express = require("express");

const app = express();
const productrouter = require("./routes/products.routes");
const mongoose = require("mongoose");

const URL ="mongodb+srv://moulhaj430:Usht7hazZeLRZHGQ@cluster0.usaa3js.mongodb.net/Product_DB?retryWrites=true&w=majority";

mongoose
  .connect(URL)
  .then((result) => app.listen(3000, () => console.log(`Server Running`)))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/products", productrouter);
