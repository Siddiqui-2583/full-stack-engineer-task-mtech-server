const ProductSchema = {
  "id":"",
  "title": "",
  "unitPrice": ""
};

const buildProductSchema = (id,req) => {
  const { title, unitPrice }= req;
  ProductSchema.id = id;
  ProductSchema.title = title;
  ProductSchema.unitPrice = unitPrice;
  return ProductSchema;
}

export default buildProductSchema;