const OrderSchema = {
  "orderId":"",
  "productId":"",
  "title":"",
  "quantity":"",
  "subTotal":"",
  "totalPrice":""
};

const buildOrderSchema = (orderId, req) => {
  OrderSchema.orderId = orderId;
  const { totalPrice, products } = req;
  for (let i = 0; i < products.length; i++){
    console.log(products[i])
  }
  
  // return ProductSchema;
}

export default buildOrderSchema;