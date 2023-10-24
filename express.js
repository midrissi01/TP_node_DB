// const express = require("express");
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.send("<h1>Bonjour tout le monde</h1>");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "hp", price: 12000 },
    { id: 2, name: "dell", price: 13000 },
    { id: 3, name: "asus", price: 10000 },
    { id: 4, name: "Lenovo", price: 9000 },
  ];

  console.log(products[0]["name"]);
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(products)); //res.json(products);
  //bijor mehdi kk FJLBJDJBIH µIVK?
});

app.get("/products/:id", (req, res) => {
  const idP = req.params.id; //récupérer le paramètre id

  const name = req.query.name;
  const price = req.query.price;
  console.log(name + " " + price);
  res.setHeader("content-type", "text/html");
  res.send("<h1>Le Produit avec id" + idP + " :</h1>");
  //bijor mehdi kk FJLBJDJBIH µIVK?
});

app.listen(3000, () => console.log(`Server Running`));
