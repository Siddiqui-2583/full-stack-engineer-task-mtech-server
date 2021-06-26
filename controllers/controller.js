import buildProductSchema from "../models/product.js";
import pool from "../config/postgresql_connection.js";

export const insertProduct = (req, res) => {
  const productId = Math.floor(Math.random() * 1000);
  let product = buildProductSchema(productId, req.body);
  console.log("inserting data into Postgresql");
  let query =
    "'" + productId + "','" + product.title + "','" + product.unitPrice + "'";
  console.log(query);
  pool.query(
    "INSERT INTO Product (productId,title,unitPrice) VALUES (" + query + ")",
    function (err, result, fields) {
      if (err) {
        console.log("error running query", err);
        res.json(err.message);
      } else {
        res.status(200).json(result["rows"]);
      }
    }
  );
};

export const getAllProducts = (req, res) => {
  pool.query("Select * From Product", function (err, result, fields) {
    if (err) {
      console.log("error running query", err);
      res.status(err.message);
    } else {
      console.log(result["rows"]);
      res.status(200).json(result["rows"]);
    }
  });
};

export const placeOrder = (req, res) => {
  const orderId = Math.floor(Math.random() * 1000);
  const { totalPrice, products } = req.body;
  let queries=[];
  products.forEach((product) => {
    console.log("inserting data into Postgresql");
    let query =
      "('" +
      orderId +
      "','" +
      product.productId +
      "','" +
      product.title +
      "','" +
      product.quantity +
      "','" +
      product.subtotal +
      "','" +
      totalPrice +
      "')";
    queries.push(query)
    
  });

  console.log(queries);
  pool.query(
    "INSERT INTO Orders (orderId,productId,title,quantity,subTotal,totalPrice) VALUES " +
      queries ,
    function (err, result, fields) {
      if (err) {
        console.log("error running query", err);
        res.json(err.message);
      } else {
        res.status(200).json(result["rows"]);
      }
    }
  );
};

export const getAllOrders = (req, res) => {
  pool.query("Select * From orders", function (err, result, fields) {
    if (err) {
      console.log("error running query", err);
      res.status(err.message);
    } else {
      console.log(result["rows"]);
      res.status(200).json(result["rows"]);
    }
  });
};